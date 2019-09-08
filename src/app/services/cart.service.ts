import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(
    private db: AngularFirestore,
    private productService: ProductService
  ) { }

  getCartDetails = (userId) => {
    let cthis = this;
    return new Promise((resolve) => {
      var cartProducts: Array<any> = [];
      var docRef = this.db.collection("cart");
      var query = docRef.ref.where("user_id", "==", userId);

      query.get().then(function (querySnapshot) {
        if (querySnapshot.empty) {
          resolve([]);
        }
        querySnapshot.forEach(async function (doc) {
          let productDetails: any = await cthis.productService.getProductDetail(doc.data().product_id, true);
          let productInfo: any = {
            quantity: doc.data().quantity,
            name: productDetails.name,
            price: productDetails.price,
            url: productDetails.images
          }
          cartProducts.push(productInfo);
          if(cartProducts.length === querySnapshot.size){
            resolve(cartProducts);
          }
        });
      }).catch(function (error) {
        resolve([]);
      });
    });
  }

  getCart = (productId: string, userId: string) => {
    return new Promise((resolve) => {
      var docRef = this.db.collection("cart");
      var query = docRef.ref.where("user_id", "==", userId).where("product_id", "==", productId);

      query.get().then(function (querySnapshot) {
        if (querySnapshot.empty) {
          resolve(false);
        }
        querySnapshot.forEach(function (doc) {
          let cartInfo: any = {
            product_id: doc.data().product_id,
            quantity: doc.data().quantity,
            user_id: doc.data().user_id,
            id: doc.id
          }
          resolve(cartInfo);
        });
      }).catch(function (error) {
        resolve(false);
      });
    });
  }

  updateCart = (data, id) => {
    return new Promise((resolve) => {
      let docRef = this.db.collection("cart").doc(id);
      docRef.set(data).then(() => {
        resolve(true);
      }).catch((err) => {
        resolve(false);
      });
    });
  }

  addCart = (data) => {
    return new Promise((resolve) => {
      let docRef = this.db.collection("cart");
      docRef.add(data).then(() => {
        resolve(true);
      }).catch((err) => {
        resolve(false);
      });
    });
  }

}
