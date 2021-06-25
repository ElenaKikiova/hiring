import {Component, Inject, OnInit, ElementRef, ViewChild} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {COMMA, ENTER} from '@angular/cdk/keycodes';

import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Developer } from '../../models/developer.model';
import { Observable } from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'hire-developers',
  templateUrl: './hire-developers.component.html',
  styleUrls: ['./hire-developers.component.sass']
})
export class HireDevelopersComponent implements OnInit{

  technologies: String[] = [];
  languages: String[] = [];

  today: Date;

  hiringForm: FormGroup = new FormGroup({});

  constructor(
    public dialogRef: MatDialogRef<HireDevelopersComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
    ) {

    this.today = new Date();
    this.today.setHours(0,0,0,0);

  }

  ngOnInit(){

    this.hiringForm = new FormGroup({
  
      startDate: new FormControl('', [
        Validators.required
      ]),

      endDate: new FormControl('', [
        Validators.required
      ]),
    });

  }

  previousDate(){
    return (
      (this.hiringForm.controls.startDate.value != '' && this.hiringForm.controls.endDate.value != '')
      && (this.hiringForm.controls.startDate.value < this.today || this.hiringForm.controls.endDate.value < this.today)
    );
  }

  confirmHire(){
    console.log(this.data.developers)
    this.dialogRef.close({
      developers: this.data.developers,
      startDate: this.hiringForm.controls.startDate.value,
      endDate: this.hiringForm.controls.endDate.value
    });
  }

  closeDialog(){
    this.dialogRef.close();
  }

}
