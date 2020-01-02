import { Component, OnInit } from '@angular/core';
import { Stripe } from '@ionic-native/stripe/ngx';
import { CommonService } from '../services/common.service';
import { AuthenticationService } from '../services/authentication.service';
import { CartService } from '../services/cart.service';
import { OrderService } from '../services/order.service';
import { AngularFirestore } from 'angularfire2/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
})
export class CheckoutPage implements OnInit {
  stripe_key = 'pk_test_yr3P7O1sAKRuYlTRn9k4fJOZ00eJNElvqa';
  constructor(private stripe: Stripe,
    private commonService: CommonService,
    private authService: AuthenticationService,
    private cartService: CartService,
    private orderService: OrderService,
    private route: Router,
    private db:AngularFirestore
  ) { }

  ngOnInit() {
  }

  processPayment = async (e) => {
    if (e.cardNumber === "" || e.expirationMonth === "" || e.expirationYear === "" || e.ccv === "") {
      return;
    }

    let userId: any = await this.authService.getUserInfo();
    let cartProducts: any = await this.cartService.getCartDetails(userId.uid);
    console.log(cartProducts);

    let price = 0;

    cartProducts.forEach(element => {
      price += parseFloat(element.price) * parseFloat(element.quantity);
    });

    console.log(price);
    this.stripe.setPublishableKey(this.stripe_key);

    let card = {
      number: e.cardNumber,
      expMonth: e.expirationMonth,
      expYear: e.expirationYear,
      cvc: e.ccv
    }
    this.commonService.showLoader("Please wait...");
    try {
      let token: any = await this.stripe.createCardToken(card);
      let data: any = {
        amount: price,
        tokenId: token.id,
        email: userId.email
      }
      let resp: any = await this.commonService.post("/charge", data);
      if (resp) {
        console.log(resp.data.id);
        let orderInfo: any = {
          user_id: userId.uid,
          amount: price,
          transaction_id: resp.data.id,
          created_at: new Date().getTime()
        };
        let orderResp = await this.orderService.addOrder(orderInfo);
        if (orderResp) {
          cartProducts.forEach(async (element) => {
            let orderProductInfo = {
              order_id: orderResp,
              product_id: element.product_id,
              price: element.price,
              quantity: element.quantity
            }
            await this.orderService.addOrderProducts(orderProductInfo);
            await this.cartService.deleteCart(element.id);
          });
          this.commonService.showSuccessMessage("Your order has been placed successfully");
          this.commonService.hideLoader();
          this.route.navigateByUrl("/thankyou");
        } else {
          this.commonService.hideLoader();
          this.commonService.showErrorMessage("Can not make order, if payment has been deducted, it will be refunded soon");
        }
      } else {
        this.commonService.hideLoader();
        this.commonService.showErrorMessage("Can not make payment, please try again later");
      }
    } catch (error) {
      this.commonService.hideLoader();
      this.commonService.showErrorMessage(error);
    }
  }
}
