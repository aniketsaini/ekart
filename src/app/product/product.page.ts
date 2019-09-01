import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit {
  pink: string = "assets/pink.jpg";
  yellow: string = "assets/yellow-rose.jpg";
  gray: string = "assets/orchid.jpg";
  productId: string = '';
  productInfo: any = {
    images: []
  };

  slideOpts = {
    initialSlide: 1,
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
    console.log(this.productInfo);
  }

}
