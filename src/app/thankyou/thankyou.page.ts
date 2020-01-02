import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-thankyou',
  templateUrl: './thankyou.page.html',
  styleUrls: ['./thankyou.page.scss'],
})
export class ThankyouPage implements OnInit {

  constructor(
    private commonService:CommonService
  ) { }

  ngOnInit() {
  }

  toggleMenu = (type: number) => {
    if (type === 1) {
      this.commonService.openMenu();
    } else {
      this.commonService.closeMenu();
    }
  }

}
