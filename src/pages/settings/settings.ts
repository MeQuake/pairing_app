import { Component } from '@angular/core';
import { NavController, Platform, AlertController } from 'ionic-angular';
import { LoginStorage } from '../../providers/login-storage';

/*
  Generated class for the Settings page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
  providers: [ LoginStorage ]
})
export class SettingsPage {

  public username:string;
  public password:string;
  public readyToLogin:boolean;
  private loginStorage:LoginStorage;

  constructor(public navCtrl: NavController, platform:Platform, public alertCtrl: AlertController, loginStorage: LoginStorage) {
    platform.ready().then(() => {
      this.loginStorage = loginStorage;
      this.loginStorage.isReady(() => {
        this.readyToLogin = true;
        this.getSavedUser();
      });
    });
  }
  
  showAlert(title: string, subTitle: string) {
    let alert = this.alertCtrl.create({
	    title: title,
	    subTitle: subTitle,
	    buttons: ['OK']
	  });
	  alert.present();
  }
  
  getSavedUser() {
    this.loginStorage.getUser((username:string, password:string) => {
      this.username = username;
      this.password = password;
    });
      
  }
  
  login() {
    this.loginStorage.setUser(this.username, this.password, () => { 
      this.showAlert('Save successful!', 'Login details have been successfully saved') 
    });
  }

  ionViewDidLoad() {
    console.log('Hello SettingsPage Page');
  }
}
