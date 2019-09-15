import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CommonService } from '../services/common.service';
import { AuthenticationService } from '../services/authentication.service';
import { ActivatedRoute, Router } from '@angular/router';
import { storage, initializeApp } from 'firebase';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  userName: string;
  profile: FormGroup;
  showError: boolean = false;
  productId: any;
  cameraPicture: any = "assets/blue.png";

  constructor(
    private commonService: CommonService,
    private authService: AuthenticationService,
    private route: ActivatedRoute,
    private router: Router,
    private camera: Camera
  ) {
    initializeApp(environment.firebase);

    this.route.queryParams.subscribe(params => {
      if (params && params.id) {
        this.productId = params.id;
      }
    });
  }

  ngOnInit() {
    this.profile = new FormGroup({
      email: new FormControl("", Validators.compose([
        Validators.required,
        Validators.pattern(/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,5})$/)
      ])),
      firstName: new FormControl("", Validators.compose([
        Validators.required,
        Validators.minLength(2)
      ])),
      lastName: new FormControl("", Validators.compose([
        Validators.required,
        Validators.minLength(2)
      ])),
      phoneNumber: new FormControl("", Validators.compose([
        Validators.required,
        Validators.pattern(/(7|8|9|6)\d{9}/)
      ])),
    });
    this.getUserInfo();
  }

  getUserInfo = async () => {
    let userId: any = await this.authService.getUserInfo();
    let userInfo: any = await this.authService.getUserDetails(userId.uid);
    if (userInfo) {
      this.profile.controls.email.setValue(userInfo.email);
      this.profile.controls.firstName.setValue(userInfo.first_name);
      this.profile.controls.lastName.setValue(userInfo.last_name);
      this.profile.controls.phoneNumber.setValue(userInfo.phone);
    } else {
      this.profile.controls.email.setValue(userId.email);
    }
  }


  onClickSubmit = async (data) => {
    this.showError = true;
    if (this.profile.status !== 'INVALID') {
      this.showError = false;
      let userId: any = await this.authService.getUserInfo();
      let userInfo: any = await this.authService.getUserDetails(userId.uid);
      let userDetail: any = {
        first_name: data.firstName,
        last_name: data.lastName,
        email: data.email,
        phone: data.phoneNumber,
        user_id: userId.uid
      }
      let resp;
      if (userInfo) {
        resp = await this.authService.updateUserDetails(userDetail, userInfo.id);
      } else {
        resp = await this.authService.addUserDetails(userDetail);
      }
      if (resp) {
        this.commonService.showSuccessMessage("User details has been saved.");
      } else {
        this.commonService.showErrorMessage("User details can not saved.");
      }
    }
  }


  openCamera = () => {
   
      const options: CameraOptions = {
        quality: 100,
        destinationType: this.camera.DestinationType.DATA_URL,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE,
        cameraDirection: this.camera.Direction.FRONT
      }

      
    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      const cameraPicture = base64Image;
      const pictures = storage().ref('usersPicture');
      pictures.putString(cameraPicture,'data_url')
     }, (err) => {
      // Handle error
      alert(err);
     });

  }
}