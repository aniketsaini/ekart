import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { ProductService } from '../services/product.service';
import { CartService } from '../services/cart.service';
import { CommonService } from '../services/common.service';
import { AuthenticationService } from '../services/authentication.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit {
  total: number = 0;
  cartCounter: number = 0;
  products: any;
  userId: any;
  productId: string = '';
  productInfo: any = {
    images: []
  };
  quantity: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  slideOpts = {
    initialSlide: 0,
    speed: 300
  };


  constructor(
    private router: Router,
    private commonService: CommonService,
    private route: ActivatedRoute,
    private cartService: CartService,
    private authService: AuthenticationService,
    private productService: ProductService
  ) {
    this.route.queryParams.subscribe(params => {
      if (params && params.id) {
        this.productId = params.id;
      }
    });
  }

  ngOnInit() {
    
  }



  getProductDetails = async () => {
    try {
      this.commonService.showLoader("Please wait...");
      let resp = await this.productService.getProductDetail(this.productId);
      this.commonService.hideLoader();
      if (resp) {
        this.productInfo = resp;
      }
      else {
        this.commonService.showErrorMessage("Something went wrong...")
      }
    } catch (error) {
      this.commonService.hideLoader();
      this.commonService.showErrorMessage("Something went wrong...")
    }
  }
  productList = async () => {
    this.products = await this.productService.getFilteredProductList();
  }

  async ionViewWillEnter() {
    this.userId = await this.authService.getUserInfo();
    let cartDetails: any = await this.cartService.getCartDetails(this.userId.uid);
    this.cartCounter = cartDetails.length;
    this.productList();
    this.getProductDetails();
  }


  async addToCart(productId: any) {
    this.commonService.showLoader('Adding to cart...')
    if (this.total === 0) {
      this.commonService.showErrorMessage("Please select quantity");
      return;
    }
    let cartDetail: any = await this.cartService.getCart(productId, this.userId.uid);
    let productInfo: any = {
      product_id: productId,
      user_id: this.userId.uid
    };
    let resp: any;
    if (cartDetail) {
      let quantity: number = cartDetail.quantity = (this.total * 1);
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
