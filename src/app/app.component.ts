import { Component } from '@angular/core';
import { Platform, ModalController, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { ModalPage } from './modal/modal.page';
import { Router } from '@angular/router';
import { AuthenticationService } from './services/authentication.service';
import { async } from 'q';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  name='Admin';
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private modalController:ModalController,
    private menuController: MenuController,
    private routerController: Router,
    private authService: AuthenticationService
  ) {
    this.initializeApp();
  }


  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  goToPage = (pageName) => {
    this.menuController.close();
    this.routerController.navigateByUrl(pageName);
  }

  logOut = async () => {
    await this.authService.signOut();
    this.menuController.close();
    this.routerController.navigateByUrl("login");
  }

  orders = async () =>{
    this.menuController.close();
    this.routerController.navigateByUrl("orders");
  }

  home = async () =>{
    this.menuController.close();
    this.routerController.navigateByUrl("home");
  }

  profile = async () =>{
    this.menuController.close();
    this.routerController.navigateByUrl("profile");
  }
  
}