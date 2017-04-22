import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import firebase from 'firebase';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  sem1Ref: any;
  sem1List: any;
  loadedsem1List: any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams) {

          
                this.sem1Ref = firebase.database().ref('/faculty/semester1',);

this.sem1Ref.on('value', sem1List => {
  let items = [];
  sem1List.forEach( sem1 => {
    items.push(sem1.val());
  });

  this.sem1List = items;
  this.loadedsem1List = items;
});

  }
initializeItems(): void {
  this.sem1List = this.loadedsem1List;
}
  getItems(searchbar) {
  this.initializeItems();
  var q = searchbar.srcElement.value;

  if (!q) {
    return;
  }

  this.sem1List = this.sem1List.filter((v) => {
    if((v.name && q) || (v.email && q) || (v.course && q)){
      if ((v.name.toLowerCase().indexOf(q.toLowerCase()) > -1) || (v.email.toLowerCase().indexOf(q.toLowerCase()) > -1) ||(v.course.toLowerCase().indexOf(q.toLowerCase()) > -1)) {
        return true;
      }
      return false;
    }
  });

  console.log(q, this.sem1List.length);

}

}
