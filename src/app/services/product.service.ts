import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { CommonService } from './common.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { resolve } from 'q';

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
    return new Promise(async (resolve) => {
      this.products.subscribe(async (data) => {
        this.finalProducts = [];
        data.forEach(async (product) => {
          let productImage: any = await this.getAllProductImages(product.id, true);
          let productObject: any = {
            id: product.id,
            name: product.name,
            description: product.description,
            price: product.price,
            url: productImage[0].url
          }
          this.finalProducts.push(productObject);
        });
        resolve(this.finalProducts);
      });
    });
  }

  getProductDetail = async (productId: string) => {
    return new Promise((resolve) => {
      var docRef = this.db.collection("products").doc(productId);

      docRef.ref.get().then(function (doc) {
        if (doc.exists) {
          resolve(doc.data());
        } else {
          // doc.data() will be undefined in this case
          resolve([]);
        }
      }).catch(function (error) {
        resolve([]);
      });
    });

  }

  getAllProductImages = async (productId: string, isDefault: boolean = false) => {
    return new Promise((resolve) => {
      this.productImages.subscribe(async (data) => {
        let finalProductImages: Array<any[]> = [];
        var i = 0;
        data.forEach(async (productImage) => {
          let productInfo: any = await productImage.product_id.get();
          i++;
          if (productId === productInfo.id) {
            if (isDefault && productImage.is_default) {
              let productImageObject: any = {
                url: productImage.url,
              }
              finalProductImages.push(productImageObject);
            } else if (!isDefault) {
              let productImageObject: any = {
                url: productImage.url,
              }
              finalProductImages.push(productImageObject);
            }
          }
          if (data.length === i) {
            resolve(finalProductImages);
          }
        });
      });
    });
  }

}
