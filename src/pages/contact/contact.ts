import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AngularFire, FirebaseListObservable } from 'angularfire2';

import {Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  comments: FirebaseListObservable<any[]>;

  private commentForm : FormGroup;

  constructor(public navCtrl: NavController,
              af: AngularFire,
              private formBuilder: FormBuilder ) {

                this.comments = af.database.list('/comments');
                this.commentForm = this.formBuilder.group({
                      name: ['', Validators.required],
                      comment: [''],
                      email: [''],
                      date: Date(),
                });
              }

    newComment(){

      this.comments.push( this.commentForm.value );
    
    }

  }


