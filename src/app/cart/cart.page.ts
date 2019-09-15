import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { CartService } from '../services/cart.service';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  cartProducts: any;
  quantity: Array<any> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


  constructor(
    private cartService: CartService,
    private router: Router,
    private authService: AuthenticationService,
    private route: ActivatedRoute,
    private commonService: CommonService
  ) {

  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.showCartDetails();
  }

  async showCartDetails() {
    let userId: any = await this.authService.getUserInfo();
    this.cartProducts = await this.cartService.getCartDetails(userId.uid);
  }

  async updateCart(id, e){
    let userId: any = await this.authService.getUserInfo();
    let cartDetail: any = await this.cartService.getCart(id, userId.uid);
    let productInfo: any = {
      product_id: cartDetail.product_id,
      user_id: userId.uid,
      quantity: parseInt(e.target.value.trim())
    };
    let resp = await this.cartService.updateCart(productInfo, cartDetail.id);
    if(resp){
      this.commonService.showSuccessMessage("Cart has been updated");
      this.showCartDetails();
    } else {
      this.commonService.showErrorMessage("Something went wrong");
    }
    console.log(id, e.target.value);
  }

}