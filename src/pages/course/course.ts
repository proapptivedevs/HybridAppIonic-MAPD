import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Outline } from '../outline/outline';

/**
 * Generated class for the Course page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-course',
  templateUrl: 'course.html',
})
export class Course {

  public code: any;
  public title: any;
  public description: any;
  public hours: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.code = navParams.get("code");
    this.title = navParams.get("title");
    this.description = navParams.get("description");
    this.hours = navParams.get("hours")
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Course');
  }

}
