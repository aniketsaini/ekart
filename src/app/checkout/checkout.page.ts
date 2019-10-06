import { Component, OnInit } from '@angular/core';
import { Stripe } from '@ionic-native/stripe/ngx';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
})
export class CheckoutPage implements OnInit {
  stripe_key = 'pk_test_yr3P7O1sAKRuYlTRn9k4fJOZ00eJNElvqa';
  constructor(private stripe: Stripe,
    private commonService:CommonService) { }

  ngOnInit() {
  }

  processPayment = (e) => {
    this.stripe.setPublishableKey(this.stripe_key);

    let card = {
      number: e.cardNumber,
      expMonth:  e.expirationMonth,
      expYear:  e.expirationYear,
      cvc:  e.ccv
    }
    this.stripe.createCardToken(card)
      .then(token => console.log(token.id))
      .catch(error => console.error(error));
  }
}
