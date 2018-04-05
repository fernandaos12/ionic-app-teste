import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TabsPage } from "../tabs/tabs";
import { FeedPage } from "../feed/feed";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams) {
     
  }
    ionViewDidLoad(){
      console.log('ionVIewDidLoad HomePage');
    }
    goToTabsPage(){
      this.navCtrl.push(FeedPage);
    }

}
