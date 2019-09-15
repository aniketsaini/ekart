import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CommonService } from '../services/common.service';
import { AuthenticationService } from '../services/authentication.service';
import { ActivatedRoute, Router } from '@angular/router';
import { storage } from 'firebase';
import { ActionSheetController } from '@ionic/angular';

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
    private camera: Camera,
    public actionSheetController: ActionSheetController
  ) {
    
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
      if(userInfo.profile_picture)
        this.cameraPicture = userInfo.profile_picture;
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
        profile_picture: userInfo.profile_picture,
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

  chooseCamera = async () => {
    const actionSheet = await this.actionSheetController.create({
      header: 'Choose',
      buttons: [{
        text: 'Camera',
        handler: () => {
          this.openCamera(1);
        }
      }, {
        text: 'Gallery',
        handler: () => {
          this.openCamera(2);
        }
      },{
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }


  openCamera = async (type) => {


   
      const options: CameraOptions = {
        quality: 100,
        destinationType: this.camera.DestinationType.DATA_URL,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE,
        cameraDirection: this.camera.Direction.FRONT,
        sourceType: type == 1?this.camera.PictureSourceType.CAMERA:this.camera.PictureSourceType.PHOTOLIBRARY
      }

    try {
      let imageData = await this.camera.getPicture(options);
      this.commonService.showLoader("Uploading...");
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      const cameraPicture = base64Image;
      const fileName = this.commonService.makeid(8)+".jpg";
      const pictures = storage().ref(fileName);
      let snapshot = await pictures.putString(cameraPicture,'data_url');
      let downloadURL = await snapshot.ref.getDownloadURL();
      this.cameraPicture = downloadURL;
      let userId: any = await this.authService.getUserInfo();
      let userInfo: any = await this.authService.getUserDetails(userId.uid);
      let userDetail: any = {
        first_name: this.profile.controls.firstName.value,
        last_name: this.profile.controls.lastName.value,
        email: this.profile.controls.email.value,
        phone: this.profile.controls.phoneNumber.value,
        profile_picture: downloadURL,
        user_id: userId.uid
      }
      let resp = await this.authService.updateUserDetails(userDetail, userInfo.id);
      this.commonService.hideLoader();
      if(resp){
        this.commonService.showSuccessMessage("Picture has been uploaded");
      } else {
        this.commonService.showErrorMessage("Something occured during upload");
      }
    } catch (error) {
      this.commonService.showErrorMessage(error);
    }

  }
}