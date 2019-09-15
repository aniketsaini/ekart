import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.page.html',
  styleUrls: ['./orders.page.scss'],
})
export class OrdersPage implements OnInit {
  pink: string = "/assets/sunflower.jpeg";
  todaydate = new Date();
  
  constructor() { }

  ngOnInit() {
  }

}
