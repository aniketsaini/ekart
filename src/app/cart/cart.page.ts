import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  pink: string = "/assets/pink.jpg";

  constructor() { }

  ngOnInit() {
  }

}
