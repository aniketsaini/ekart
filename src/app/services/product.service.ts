import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
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

  getProductDetail = async (productId: string, isDefault: boolean = false) => {
    let cthis = this;
    return new Promise((resolve) => {
      var docRef = this.db.collection("products").doc(productId);

      docRef.ref.get().then(async function (doc) {
        if (doc.exists) {
          let productImage: any = await cthis.getAllProductImages(doc.id, isDefault);
          let productDetail: any  = {
            id: productId,
            name: doc.data().name,
            price: doc.data().price,
            description: doc.data().description,
            images: productImage
          }
          resolve(productDetail);
        } else {
          resolve([]);
        }
      }).catch(function (error) {
        resolve([]);
      });
    });

  }

  getAllProductImages = async (productId: string, isDefault: boolean = false) => {
    return new Promise((resolve) => {
      var productImages: Array<any> = [];
      var docRef = this.db.collection("product_images");
      var query = docRef.ref.where("product_id", "==", productId);

      query.get().then(function (querySnapshot) {
        if(querySnapshot.empty){
          resolve([]);
        }
        querySnapshot.forEach(function (doc) {
          if(isDefault && doc.data().is_default){
            productImages.push(doc.data());
            resolve(productImages);
          } else if(!isDefault){
            productImages.push(doc.data());
            if(productImages.length === querySnapshot.size){
              resolve(productImages);
            }
          }
        });
      }).catch(function (error) {
        resolve([]);
      });
    });
  }

}
