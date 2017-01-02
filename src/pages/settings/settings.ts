import { Component } from '@angular/core';
import { NavController, ModalController, AlertController } from 'ionic-angular';
import { SetLoginDetailsPage } from './settingsModals/set-login-details/set-login-details';
import { SetAirportPage } from './settingsModals/set-airport/set-airport';
import { ReportDatePage } from './settingsModals/report-date/report-date';
import { NumberOfCalendarDaysPage } from './settingsModals/number-of-calendar-days/number-of-calendar-days';
import { DutyPeriodNumberPage } from './settingsModals/duty-period-number/duty-period-number';
import { DutyPeriodTimePage } from './settingsModals/duty-period-time/duty-period-time';
import { PairingCreditPage } from './settingsModals/pairing-credit/pairing-credit';
import { LayoverPage } from './settingsModals/layover/layover';
import { FlightPage } from './settingsModals/flight/flight';
import { ReportBetweenPage } from './settingsModals/report-between/report-between';
import { ReleaseBetweenPage } from './settingsModals/release-between/release-between';
import { LegsPerDutyPage } from './settingsModals/legs-per-duty/legs-per-duty';
import { ExcludeEquipmentPage } from './settingsModals/exclude-equipment/exclude-equipment';

/*
  Generated class for the Settings page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public alertCtrl: AlertController) {
  }

  showSetLoginDetails() {
    let setLoginDetails = this.modalCtrl.create(SetLoginDetailsPage);
    setLoginDetails.present();
  }

  showSetAirports() {
    let setAirports = this.modalCtrl.create(SetAirportPage);
    setAirports.present();
  }

  showBaseSettings() {
    let alert = this.alertCtrl.create({
      title: 'Set base',
      inputs: [ { type: 'radio', label: 'PHX', value: 'phx' },
                { type: 'radio', label: 'PHL', value: 'phl' },
                { type: 'radio', label: 'DCA', value: 'dca' },
                { type: 'radio', label: 'CLT', value: 'clt' } ],
      buttons: [ { text: 'Cancel', role: 'cancel' },
                 { text: 'Okay',
                   handler: data => {
                     console.log('Set base checkbox data:', data); //array
                 }} ]
    })
    alert.present();
  }

  showReportDate() {
      let reportDate = this.modalCtrl.create(ReportDatePage)
      reportDate.present();
  }

  showNumberOfCalendarDays() {
    let numberOfCalendarDays = this.modalCtrl.create(NumberOfCalendarDaysPage)
    numberOfCalendarDays.present();
  }

  showDutyPeriodNumber() {
    let dutyPeriodNumber = this.modalCtrl.create(DutyPeriodNumberPage)
    dutyPeriodNumber.present();
  }

  showDutyPeriodTime() {
    let dutyPeriodTime = this.modalCtrl.create(DutyPeriodTimePage)
    dutyPeriodTime.present();
  }

  showPairingCredit() {
    let pairingCredit = this.modalCtrl.create(PairingCreditPage)
    pairingCredit.present();
  }

  showTripType() {
    let alert = this.alertCtrl.create({
      title: 'Trip type',
      inputs: [ { type: 'radio', label: 'Drop', value: 'drop' },
                { type: 'radio', label: 'Trade', value: 'trade' },
                { type: 'radio', label: 'Drop and Trade', value: 'both' } ],
      buttons: [ { text: 'Cancel', role: 'cancel' },
                 { text: 'Okay',
                   handler: data => {
                     console.log('Trip type checkbox data:', data); //array
                 }} ]
    })
    alert.present();
  }

  showDeadhead() {
    let alert = this.alertCtrl.create({
      title: 'Set deadhead',
      inputs: [ { type: 'radio', label: 'Not required', value: 'not_required' },
                { type: 'radio', label: 'Exists on First Leg', value: 'exists_on_first_leg' },
                { type: 'radio', label: 'Exists on Last Leg', value: 'exists_on_last_leg' },
                { type: 'radio', label: 'Exists on Any Leg', value: 'exists_on_any_leg' } ],
      buttons: [ { text: 'Cancel', role: 'cancel' },
                 { text: 'Okay',
                   handler: data => {
                     console.log('Trip type checkbox data:', data); //array
                 }} ]
    })
    alert.present();
  }

  showLayoverSettings() {
    let layoverSettings = this.modalCtrl.create(LayoverPage);
    layoverSettings.present();
  }

  showFlightSettings() {
    let flightSettings = this.modalCtrl.create(FlightPage)
    flightSettings.present();
  }

  showReportBetween() {
    let reportBetween = this.modalCtrl.create(ReportBetweenPage);
    reportBetween.present();
  }

  showReleaseBetween() {
    let releaseBetween = this.modalCtrl.create(ReleaseBetweenPage);
    releaseBetween.present();
  }

  showLegsPerDuty() {
    let legsPerDuty = this.modalCtrl.create(LegsPerDutyPage);
    legsPerDuty.present();
  }

  showExcludeEquipment() {
    let excludeEquipment = this.modalCtrl.create(ExcludeEquipmentPage)
    excludeEquipment.present();
  }

  ionViewDidLoad() {
    console.log('Hello SettingsPage Page');
  }
}
