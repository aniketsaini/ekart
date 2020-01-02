import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  orderIdInfo: any;
  orderId: any;

  constructor(
    private db: AngularFirestore,
    private productService: ProductService
  ) { }

  getOrderList = async (data: any = {}) => {
    let cthis = this;
    return new Promise((resolve) => {
      var orderList: Array<any> = [];
      var docRef = this.db.collection("orders");
      var query = docRef.ref.orderBy("created_at", "desc").where("user_id", "==", data['userId']);
    
      query.get().then(function (querySnapshot) {
        if (querySnapshot.empty) {
          resolve([]);
        }
        querySnapshot.forEach(async function (doc) {
          let productDetails: any = await cthis.getOrderProductsList(doc.id);
          let orderObject: any = {
            id: doc.id,
            amount: doc.data().amount,
            createdAt: doc.data().created_at,
            transactionId: doc.data().transaction_id,
            userId:doc.data().user_id,
            products: productDetails
          }
          orderList.push(orderObject);
          if (orderList.length === querySnapshot.size) {
            resolve(orderList);
          }
        });
      }).catch(function (error) {
        console.log(error);
        resolve([]);
      });
    });

  }

  getOrderProductsList = async (orderId: string = "") => {
    let cthis = this;
    return new Promise((resolve) => {
      var productList: Array<any> = [];
      var docRef = this.db.collection("order_products");
      var query = docRef.ref.orderBy("quantity", "desc").where("order_id", "==", orderId);
    
      query.get().then(function (querySnapshot) {
        if (querySnapshot.empty) {
          resolve([]);
        }
        querySnapshot.forEach(async function (doc) {
          let productDetails: any = await cthis.productService.getProductDetail(doc.data().product_id, true);
          let productObject: any = {
            id: doc.id,
            price: doc.data().price,
            productId: doc.data().product_id,
            quantity: doc.data().quantity,
            productName: productDetails.name,
            productImage: productDetails.images[0]['url']
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



  addOrder = (data) => {
    return new Promise((resolve) => {
      let docRef = this.db.collection("orders");
      docRef.add(data).then((resp) => {
        resolve(resp.id);
      }).catch((err) => {
        resolve(false);
      });
    });
  }

  addOrderProducts = (data) => {
    return new Promise((resolve) => {
      let docRef = this.db.collection("order_products");
      docRef.add(data).then(() => {
        resolve(true);
      }).catch((err) => {
        resolve(false);
      });
    });
  }
}