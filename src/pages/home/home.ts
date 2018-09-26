import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { appServices } from '../../app/services/app.services';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  user: Array <any> = [];

  constructor(public navCtrl: NavController, public appService: appServices) {
  this.getUser();
  }
  
  getUser(){
   this.appService.getUser().subscribe(data =>
    {
      this.user = data;
      console.log(this.user);
    });
  }
}
