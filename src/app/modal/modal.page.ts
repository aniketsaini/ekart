import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {
  color: string = "";
  category: string = "";
  price: number = 0;
  constructor(
    private modalController: ModalController,
  ) { }

  dismiss() {
    let data = {};
    if(this.color !== ""){
      data['color'] = this.color;
    }
    if(this.category !== ""){
      data['category'] = this.category;
    }
    if(this.price > 0){
      data['price'] = this.price;
    }
    this.modalController.dismiss(data);
  }

  ngOnInit() {

  }

  filterData = (type, e) => {
    if (type === 1) {
      this.color = e.target.value;
    } else if (type === 2) {
      this.category = e.target.value;
    } else {
      this.price = e.target.value;
    }
  }


}
