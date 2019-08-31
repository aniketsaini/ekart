import { Component } from '@angular/core';
import { CommonService } from '../services/common.service';
import { ModalController, PopoverController, NavController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';
import { ProductService } from '../services/product.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  product: string = "assets/yellow-rose.jpg";
  pink: string = "/assets/pink.jpg";
  white: string = "/assets/white.jpeg";
  blue: string = "/assets/blue.png";
  lily: string = "/assets/lily.jpg";
  tigerlily: string = "/assets/tiger-lily.jpg";
  pinklotus: string = "/assets/pink-lotus.jpg";
  sunflower: string = "/assets/sunflower.jpeg";
  orchid: string = "/assets/orchid.jpg";
  rosebuke: string = "/assets/rose-buke.jpg";
  flowersbuke: string = "/assets/flowers-buke.jpg";
  lilybuke: string = "/assets/lily-buke.jpg";
  orchidbuke: string = "/assets/orchid-buke.jpg";
  bridebuke: string = "/assets/bride-buke.jpg";
  whitebuke: string = "/assets/white-buke.jpg";
  babybreath: string = "/assets/babybreath.jpeg";
  begonia: string = "/assets/begonia.jpeg";
  alstroemeria: string = "/assets/alstroemeria.jpg";

  products: any;


  

  constructor(
    private commonService: CommonService, 
    private modalController: ModalController,
    private productService: ProductService
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
    console.log(this.products);
  }


  toggleMenu = (type: number) => {
    if (type === 1) {
      this.commonService.openMenu();
    } else {
      this.commonService.closeMenu();
    }
  }
}
