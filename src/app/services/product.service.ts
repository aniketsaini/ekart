import { Injectable, Query } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { async, promised, resolve } from 'q';
import { NgIf } from '@angular/common';
import { Navigation } from 'selenium-webdriver';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private db: AngularFirestore
  ) {
  }


  getFilteredProductList = async (data: any = {}) => {
    let cthis = this;
    return new Promise((resolve) => {
      var productList: Array<any> = [];
      var docRef = this.db.collection("products");
      docRef.ref.orderBy("price").where("price", ">=", 0);
      // if (data.name !== undefined && data.name !== "") {
      //   query.startAt(data.name).endAt(data.name + "\uf8ff");
      // }
      if (data.color !== undefined && data.color !== "") {
        docRef.ref.where("color", "==", data.color);
      }
      // if (data.category !== undefined && data.category !== "") {
      //   query.where("category", "==", data.category);
      // }
      // if (data.price !== undefined && data.price > 0) {
      //   query.where("price", ">=", data.price);
      // }
      docRef.ref.get().then(function (querySnapshot) {
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
        console.log(error);
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