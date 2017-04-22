import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import firebase from 'firebase';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  semester1: FirebaseListObservable<any[]>;
  semester2: FirebaseListObservable<any[]>;
  sem1Ref: any;
  sem1List: any;
  loadedsem1List: any;
  sem2Ref: any;
  sem2List: any;
  loadedsem2List: any;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public af: AngularFire) {

          
                this.sem1Ref = firebase.database().ref('/faculty/semester1');
                this.sem2Ref = firebase.database().ref('/faculty/semester2');

this.sem1Ref.on('value', sem1List => {
  let countries = [];
  sem1List.forEach( sem1 => {
    countries.push(sem1.val());
  });

  this.sem1List = countries;
  this.loadedsem1List = countries;
});

  }
initializeItems(): void {
  this.sem1List = this.loadedsem1List;
}
  getItems(searchbar) {
  // Reset items back to all of the items
  this.initializeItems();

  // set q to the value of the searchbar
  var q = searchbar.srcElement.value;


  // if the value is an empty string don't filter the items
  if (!q) {
    return;
  }

  this.sem1List = this.sem1List.filter((v) => {
    if(v.name && q) {
      if (v.name.toLowerCase().indexOf(q.toLowerCase()) > -1) {
        return true;
      }
      return false;
    }
  });

  console.log(q, this.sem1List.length);

}

}
