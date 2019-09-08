import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { CartService } from '../services/cart.service';

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
    private route: ActivatedRoute
  ) { 
    
  }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.showCartDetails();
  }

  async showCartDetails(){
    let userId: any = await this.authService.getUserInfo();
    this.cartProducts = await this.cartService.getCartDetails(userId.uid);
    console.log(this.cartProducts);
  }

}


