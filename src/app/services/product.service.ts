import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { CommonService } from './common.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Observable<any[]>;
  productCollection: AngularFirestoreCollection<any[]>;
  finalProducts: Array<any[]> = [];
  productImages: Observable<any[]>;
  productImageCollection: AngularFirestoreCollection<any[]>;
  constructor(
    private db: AngularFirestore,
    private commonService: CommonService
  ) {
    this.productCollection = this.db.collection<any[]>('products');
    this.productImageCollection = this.db.collection<any[]>('product_images');
    this.products = this.productCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );

    this.productImages = this.productImageCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }

  getProductList = async () => {
    return new Promise((resolve) => {
      this.products.subscribe(async (data) => {
        this.finalProducts = [];
        data.forEach(async (product) => {
          let productImage: any = await this.getProductImages(product.id, true);
          let productObject: any = {
            name: product.name,
            description: product.description,
            price: product.price,
            url: productImage
          }
          this.finalProducts.push(productObject);
        });
        resolve(this.finalProducts);
      });
    });
  }

  getProductImages = async (productId, isDefault = false) => {
    return new Promise((resolve) => {
      this.productImages.subscribe(async (data) => {
        let productImages: Array<any[]> = [];
        data.forEach(async (productImage) => {
          let productInfo = await productImage.product_id.get();
          if (productInfo.id === productId) {
            let productImageObject: any;
            if (isDefault && productImage.is_default) {
              productImageObject = {
                url: productImage.url
              }
              productImages.push(productImageObject);
            } else if (!isDefault) {
              productImageObject = {
                url: productImage.url
              }
              productImages.push(productImageObject);
            }
          }
        });
        resolve(productImages);
      });
    });
  }

}
