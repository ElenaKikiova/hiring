import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {FormControl, Validators} from '@angular/forms';

import { Developer } from '../../models/developer.model';

import { appConstants } from '../../app.constants';

@Component({
  selector: 'view-developer',
  templateUrl: './view-developer.component.html',
  styleUrls: ['./view-developer.component.sass']
})
export class ViewDeveloperComponent {

  technologies: String[] = [];
  languages: String[] = [];

  name = new FormControl(this.data.developer.name, [
    Validators.required,
    Validators.pattern(appConstants.PATTERNS.NAME)
  ]);

  location = new FormControl(this.data.developer.location, [
    Validators.required,
    Validators.pattern(appConstants.PATTERNS.LOCATION)
  ]);

  phone = new FormControl(this.data.developer.phone, [
    Validators.required,
    Validators.pattern(appConstants.PATTERNS.PHONE)
  ]);

  price = new FormControl(this.data.developer.price, [
    Validators.required,
    Validators.pattern(appConstants.PATTERNS.PRICE)
  ]);

  technology = new FormControl(this.data.developer.technology, [
    Validators.required
  ]);

  language = new FormControl(this.data.developer.native_lang, [
    Validators.required
  ]);

  description = new FormControl(this.data.developer.description, [
    Validators.required,
    Validators.pattern(appConstants.PATTERNS.DESCRIPTION)
  ]);

  linkedIn = new FormControl(this.data.developer.linkedIn, [
    Validators.pattern(appConstants.PATTERNS.LINK)
  ]);

  constructor(
    public dialogRef: MatDialogRef<ViewDeveloperComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
    ) {

    this.technologies = ["Javascript", "Java", ".NET", "Flutter", "Python", "PHP"];
    this.languages = ["English", "Serbian", "Bulgarian"];

  }

  getErrorMessage(field: string) {

    let res;

    if(field == "name"){
      if (this.name.hasError('required')) {
        res = 'You must enter a name';
      }

      res = this.name.hasError('pattern') ? 'A full name is required' : '';
    }

    if(field == "location"){
      if (this.location.hasError('required')) {
        res = 'You must enter a location';
      }

      res = this.location.hasError('pattern') ? 'A full location is required' : '';
    }

    if(field == "phone"){
      if (this.phone.hasError('required')) {
        res = 'You must enter a phone';
      }

      res = this.phone.hasError('pattern') ? 'A valid phone number is required' : '';
    }

    if(field == "price"){
      if (this.price.hasError('required')) {
        res = 'You must enter a price';
      }

      res = this.phone.hasError('price') ? 'A valid price is required' : '';
    }

    if(field == "description"){
      res = this.description.hasError('pattern') ? 'Enter a description no longer than 150 symbols' : '';
    }

    if(field == "linkedIn"){
      res = this.linkedIn.hasError('pattern') ? 'Enter a valid link' : '';
    }

    if(field == "technology"){
      res = this.technology.hasError('required') ? 'Please entery your technology' : '';
    }

    if(field == "native_lang"){
      res = this.language.hasError('required') ? 'Please enter your native language' : '';
    }

    return res;
  }


  saveChanges(){

    // let developer: Developer = {
    //   "id": "",
    //   "name": this.name.value,
    //   "location": this.location.value,
    //   "linkedin": this.linked
    // }

    console.log();
  }

  closeDialog(){
    this.dialogRef.close();
  }

}
