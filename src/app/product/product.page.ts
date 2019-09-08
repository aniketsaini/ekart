import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { ProductService } from '../services/product.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit {
  productId: string = '';
  productInfo: any = {
    images: []
  };
  quantity: Array<any> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  slideOpts = {
    initialSlide: 0,
    speed: 400
  };

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productService: ProductService
  ) {
    this.route.queryParams.subscribe(params => {
      if (params && params.id) {
        this.productId = params.id;
      }
    });
  }

  ngOnInit() {
    this.getProductDetails();
  }

  getProductDetails = async () => {
    this.productInfo = await this.productService.getProductDetail(this.productId);
  }

}
