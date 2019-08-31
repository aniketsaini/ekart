import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, ValidatorFn } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';
import { CommonService } from '../services/common.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  registerData: any;
  showError: boolean = false;
  constructor(
    private authService: AuthenticationService,
    private commonService: CommonService,
    private routes: Router
  ) { }

  ngOnInit() {
    this.registerData = new FormGroup({
      email: new FormControl("", Validators.compose([
        Validators.required,
        Validators.pattern(/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,5})$/)
      ])),
      password: new FormControl("", Validators.compose([
        Validators.required,
        Validators.minLength(6)
      ])),
      confirmPassword: new FormControl("", Validators.compose([
        Validators.required,
        this.equalto('password')
      ])),

    });
  }
  equalto(field_name): ValidatorFn {
    return (control: FormControl): { [key: string]: any } => {

      let input = control.value;

      let isValid = control.root.value[field_name] == input
      if (!isValid)
        return { 'equalTo': { isValid } }       
      else
        return null;
    };
  }
  onClickSubmit = async (data) => {
    this.showError = true;
    if (this.registerData.status !== 'INVALID') {
      this.showError = false;
      await this.commonService.showLoader("Registering...");
      let resp = await this.authService.register(data.email, data.password);
      await this.commonService.hideLoader();
      if(resp)
        this.routes.navigateByUrl("home");
    }
  }
}