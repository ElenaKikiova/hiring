import {Component, Inject, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {FormControl, FormGroup, Validators} from '@angular/forms';

import { Developer } from '../../models/developer.model';

import { appConstants } from '../../app.constants';

@Component({
  selector: 'view-developer',
  templateUrl: './view-developer.component.html',
  styleUrls: ['./view-developer.component.sass']
})
export class ViewDeveloperComponent implements OnInit{

  technologies: String[] = [];
  languages: String[] = [];

  developerForm: FormGroup = new FormGroup({});

  constructor(
    public dialogRef: MatDialogRef<ViewDeveloperComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
    ) {

  }

  ngOnInit(){

    this.technologies = ["Javascript", "Java", ".NET", "Flutter", "Python", "PHP"];
    this.languages = ["English", "Serbian", "Bulgarian"];

    if(this.data.developer == null){
      this.data.developer =  {
        "id": "",
        "name": "",
        "email": "",
        "phone": "",
        "location": "",
        "pfp": "",
        "price": "",
        "technology": "",
        "description": "",
        "years": "",
        "native_lang": "",
        "linkedIn": ""
      }
    }

    this.developerForm = new FormGroup({

      pfp: new FormControl(this.data.developer.pfp, [
        Validators.pattern(appConstants.PATTERNS.LINK)
      ]),
  
      name: new FormControl(this.data.developer.name, [
        Validators.required,
        Validators.pattern(appConstants.PATTERNS.NAME)
      ]),
  
      email: new FormControl(this.data.developer.email, [
        Validators.required,
        Validators.pattern(appConstants.PATTERNS.EMAIL)
      ]),
  
      location: new FormControl(this.data.developer.location, [
        Validators.required,
        Validators.pattern(appConstants.PATTERNS.LOCATION)
      ]),
  
      phone: new FormControl(this.data.developer.phone, [
        Validators.required,
        Validators.pattern(appConstants.PATTERNS.PHONE)
      ]),
  
      price: new FormControl(this.data.developer.price, [
        Validators.required,
        Validators.pattern(appConstants.PATTERNS.PRICE)
      ]),
  
      technology: new FormControl(this.data.developer.technology, [
        Validators.required
      ]),
  
      years: new FormControl(this.data.developer.years, [
        Validators.pattern(appConstants.PATTERNS.YEARS)
      ]),
  
      language: new FormControl(this.data.developer.native_lang, [
        Validators.required
      ]),
  
      description: new FormControl(this.data.developer.description, [
        Validators.pattern(appConstants.PATTERNS.DESCRIPTION)
      ]),
  
      linkedIn: new FormControl(this.data.developer.linkedIn, [
        Validators.pattern(appConstants.PATTERNS.LINK)
      ])
  
    });
  }

  getErrorMessage(field: string) {

    let res;

    if(field == "pfp"){
      res = this.developerForm.controls.pfp.hasError('pattern') ? 'A valid link is required' : '';
    }

    if(field == "name"){
      if (this.developerForm.controls.name.hasError('required')) {
        res = 'You must enter a name';
      }

      res = this.developerForm.controls.name.hasError('pattern') ? 'A full name is required' : '';
    }

    if(field == "email"){
      if (this.developerForm.controls.email.hasError('required')) {
        res = 'You must enter a email';
      }

      res = this.developerForm.controls.email.hasError('pattern') ? 'A valid email is required' : '';
    }

    if(field == "location"){
      if (this.developerForm.controls.location.hasError('required')) {
        res = 'You must enter a location';
      }

      res = this.developerForm.controls.location.hasError('pattern') ? 'A full location is required' : '';
    }

    if(field == "phone"){
      if (this.developerForm.controls.phone.hasError('required')) {
        res = 'You must enter a phone';
      }

      res = this.developerForm.controls.phone.hasError('pattern') ? 'A valid phone number is required' : '';
    }

    if(field == "price"){
      if (this.developerForm.controls.price.hasError('required')) {
        res = 'You must enter a price';
      }

      res = this.developerForm.controls.phone.hasError('pattern') ? 'A valid price is required' : '';
    }

    if(field == "description"){
      res = this.developerForm.controls.description.hasError('pattern') ? 'Enter a description no longer than 150 symbols' : '';
    }

    if(field == "linkedIn"){
      res = this.developerForm.controls.linkedIn.hasError('pattern') ? 'Enter a valid link' : '';
    }

    if(field == "technology"){
      res = this.developerForm.controls.technology.hasError('required') ? 'Please entery your technology' : '';
    }

    if(field == "native_lang"){
      res = this.developerForm.controls.language.hasError('required') ? 'Please enter your native language' : '';
    }

    if(field == "years"){
      if (this.developerForm.controls.years.hasError('required')) {
        res = 'Please enter your years of experience';
      }

      res = this.developerForm.controls.years.hasError('pattern') ? 'A valid number is required' : '';
    }

    return res;
  }


  save(){

    let developer: Developer = {
      "_id": this.data._id || "",
      "name": this.developerForm.controls.name.value,
      "email": this.developerForm.controls.email.value,
      "phone": this.developerForm.controls.phone.value,
      "location": this.developerForm.controls.location.value,
      "pfp": this.developerForm.controls.pfp.value,
      "price": this.developerForm.controls.price.value,
      "technology": this.developerForm.controls.technology.value,
      "description": this.developerForm.controls.description.value,
      "years": this.developerForm.controls.years.value,
      "native_lang": this.developerForm.controls.language.value,
      "linkedIn": this.developerForm.controls.linkedIn.value
    }

    console.log(developer);

    this.dialogRef.close(developer);
  }

  closeDialog(){
    this.dialogRef.close();
  }

}
