import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
import { CommonService } from '../services/common.service';
import { MenuController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  [x: string]: any;
  loginData: FormGroup;
  showError: boolean = false;
  providers: [AuthenticationService];
  userInfo: any;

  constructor(
    private service: AuthenticationService,
    private routes: Router,
    private commonService: CommonService,
    private menu: MenuController
  ) { }

  ngOnInit() {
    this.loginData = new FormGroup({
      email: new FormControl("", Validators.compose([
        Validators.required,
        Validators.pattern(/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,5})$/)
      ])),
      password: new FormControl("", Validators.compose([
        Validators.required,
        Validators.minLength(6)
      ])),

    });
  }

  ionViewWillEnter() {
    this.menu.enable(false);
  }

  onClickSubmit = async (data) => {
    this.showError = true;
    if (this.loginData.status !== 'INVALID') {
      this.showError = false;
      await this.commonService.showLoader("Logging in...");
      let resp = await this.service.auth(data.email, data.password);
      await this.commonService.hideLoader();
      console.log(resp);
      if (resp)
        this.loginData.reset();
      this.routes.navigateByUrl("home");
    }
  }
}