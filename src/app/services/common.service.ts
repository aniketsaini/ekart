import { Injectable } from '@angular/core';
import { ToastController, MenuController, LoadingController } from '@ionic/angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  loading: any;
  private apiUrl:string = "https://e-kart-test.herokuapp.com";
  constructor(
    private toast: ToastController,
    private menu: MenuController,
    private loader: LoadingController,
    private http: HttpClient
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

  makeid = (length) => {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  post = async (url: string, data: any) => {
    return await new Promise((resolve) => {
      this.http.post(this.apiUrl + url, data, {
        headers: new HttpHeaders({
          'Content-type': 'application/json'
        })
      })
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          resolve(false);
        });
    });
  }
}
