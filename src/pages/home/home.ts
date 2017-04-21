import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  mapd: FirebaseListObservable<any[]>;

  constructor(public navCtrl: NavController,
              public af: AngularFire) {

                this.mapd = af.database.list('/mapd/');

  }

}
