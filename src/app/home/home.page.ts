import { Component } from '@angular/core';
import { CommonService } from '../services/common.service';
import { ModalController, MenuController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';
import { ProductService } from '../services/product.service';
import { Router, NavigationExtras } from '@angular/router';
import { CartService } from '../services/cart.service';
import { AuthenticationService } from '../services/authentication.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  products: any;
  cartCounter: number = 0;
  userId: any;
  total: any;
  searchTerm: any;

  constructor(
    private commonService: CommonService,
    private modalController: ModalController,
    private productService: ProductService,
    private cartService: CartService,
    private authService: AuthenticationService,
    private router: Router,
    private menu: MenuController
  ) { }

  async ionViewWillEnter() {
    this.userId = await this.authService.getUserInfo();
    let cartDetails: any = await this.cartService.getCartDetails(this.userId.uid);
    this.cartCounter = cartDetails.length;
    this.productList();

    this.menu.enable(true);

  }

  async onSearch(e) {
    let data: any = {};
    if (e.target.value !== "") {
      data = {
        name: e.target.value
      }
    }
    await this.productList(data);
  }

  async openModal() {
    const myModal = await this.modalController.create({
      component: ModalPage
    });
    await myModal.present();
    let data = await myModal.onWillDismiss();
    this.productList(data.data);
  }

  productList = async (data: any = {}) => {
    try {
      this.commonService.showLoader('Please wait...');
      let resp:any = await this.productService.getFilteredProductList(data);
      this.commonService.hideLoader();
      if (resp) {
        this.products = resp;
      } else {
        this.commonService.hideLoader();
        this.commonService.showErrorMessage("Something went wrong");
      }
    } catch (error) {
      this.commonService.hideLoader();
      this.commonService.showErrorMessage("Something went wrong");
    }

  }

  toggleMenu = (type: number) => {
    if (type === 1) {
      this.commonService.openMenu();
    } else {
      this.commonService.closeMenu();
    }
  }

  productDetails(productId) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        id: productId
      }
    };
    this.router.navigate(['product'], navigationExtras);
  }

  async addToCart(productId: any) {
    this.commonService.showLoader("Adding to cart...")
    let cartDetail: any = await this.cartService.getCart(productId, this.userId.uid);
    let productInfo: any = {
      product_id: productId,
      user_id: this.userId.uid
    };
    let resp: any;
    if (cartDetail) {
      let quantity: number = cartDetail.quantity + 1;
      productInfo['quantity'] = quantity;
      resp = await this.cartService.updateCart(productInfo, cartDetail.id);
    } else {
      let quantity: number = 1;
      productInfo['quantity'] = quantity;
      resp = await this.cartService.addCart(productInfo);
      this.cartCounter++;
    }
    this.commonService.hideLoader();
    if (resp) {
      this.commonService.showSuccessMessage("Product has been added into cart");
    } else {
      this.commonService.showErrorMessage("Can not add into cart");
    }
  }
}
