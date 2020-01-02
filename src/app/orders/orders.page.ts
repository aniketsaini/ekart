import { Component, OnInit } from '@angular/core';
import { OrderService } from '../services/order.service';
import { AuthenticationService } from '../services/authentication.service';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.page.html',
  styleUrls: ['./orders.page.scss'],
})
export class OrdersPage implements OnInit {
  pink: string = "/assets/sunflower.jpeg";
  todaydate = new Date();
  orderProducts: any;
  empty: boolean = false;

  constructor(
    private orderService: OrderService,
    private authService: AuthenticationService,
    private commonService: CommonService
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.orderProductList()
  }

  orderProductList = async () => {
    try {
      this.commonService.showLoader('Please wait...');
      let userId: any = await this.authService.getUserInfo();
      let data: any = {
        userId: userId.uid
      }
      let resp: any = await this.orderService.getOrderList(data);
      this.commonService.hideLoader();
      if (resp != "") {
        this.orderProducts = resp;
      } else {
        this.empty = true;
      }
    } catch (error) {
      this.commonService.hideLoader();
      this.commonService.showErrorMessage("Something went wrong...")
    }

  }

}
