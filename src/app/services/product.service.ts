import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  constructor(
    private db: AngularFirestore,
  ) {
  }


  getFilteredProductList = async (name: string = "", price: number = 0) => {
    let cthis = this;
    return new Promise((resolve) => {
      var productList: Array<any> = [];
      var docRef = this.db.collection("products");
      var query;
      if (name !== "") {
        query = docRef.ref.orderBy("name").startAt(name).endAt(name+"\uf8ff");
      } else {
        query = docRef.ref.where("price", ">", price);
      }

      query.get().then(function (querySnapshot) {
        if (querySnapshot.empty) {
          resolve([]);
        }
        querySnapshot.forEach(async function (doc) {
          let productImage: any = await cthis.getAllProductImages(doc.id, true);
          let productObject: any = {
            id: doc.id,
            name: doc.data().name,
            description: doc.data().description,
            price: doc.data().price,
            url: productImage[0].url
          }
          productList.push(productObject);
          if (productList.length === querySnapshot.size) {
            resolve(productList);
          }
        });
      }).catch(function (error) {
        resolve([]);
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
          let productDetail: any = {
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
        if (querySnapshot.empty) {
          resolve([]);
        }
        querySnapshot.forEach(function (doc) {
          if (isDefault && doc.data().is_default) {
            productImages.push(doc.data());
            resolve(productImages);
          } else if (!isDefault) {
            productImages.push(doc.data());
            if (productImages.length === querySnapshot.size) {
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