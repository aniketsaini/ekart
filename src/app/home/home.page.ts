import { Component } from '@angular/core';
import { CommonService } from '../services/common.service';
import { ModalController, PopoverController, NavController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';
import { ProductService } from '../services/product.service';
import { Router, NavigationExtras } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  products: any;


  constructor(
    private commonService: CommonService, 
    private modalController: ModalController,
    private productService: ProductService,
    private router: Router
  ) { }

  ionViewWillEnter() {
    this.productList();

  }

  async openModal(){
    const myModal = await this.modalController.create({
      component:ModalPage
    });
   return await myModal.present();
  }

  productList = async () => {
    this.products = await this.productService.getProductList();
  }


  toggleMenu = (type: number) => {
    if (type === 1) {
      this.commonService.openMenu();
    } else {
      this.commonService.closeMenu();
    }
  }

  productDetails(productId){
    let navigationExtras: NavigationExtras = {
      queryParams: {
        id: productId
      }
    };
    this.router.navigate(['product'], navigationExtras);
  }
}
