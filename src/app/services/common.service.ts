import { Injectable } from '@angular/core';
import { ToastController, MenuController, LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  loading: any;
  constructor(
    private toast: ToastController,
    private menu: MenuController,
    private loader: LoadingController
  ) { }

  showErrorMessage = async (msg: string) => {
    const toast = await this.toast.create({
      message: msg,
      duration: 2000,
      color: 'danger'
    });
    toast.present()
  }

  showSuccessMessage = async (msg: string) => {
    const toast = await this.toast.create({
      message: msg,
      duration: 2000,
      color: 'success'
    });
    toast.present()
  }

  showLoader = async (msg: string) => {
    this.loading = await this.loader.create({
      message: msg
    });
    await this.loading.present();
  }

  hideLoader = async () => {
    await this.loading.dismiss();
  }

  openMenu = () => {
    this.menu.enable(true);
    this.menu.open();
  }

  closeMenu = () => {
    this.menu.close();
  }
}
