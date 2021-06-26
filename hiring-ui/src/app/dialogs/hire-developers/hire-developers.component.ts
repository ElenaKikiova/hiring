import {Component, Inject, OnInit, ElementRef, ViewChild} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {COMMA, ENTER} from '@angular/cdk/keycodes';

import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Developer } from '../../models/developer.model';
import { Observable } from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { DeveloperService } from 'src/app/services/developer.service';

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

  busyDevsNames: string[] = []

  constructor(
    public dialogRef: MatDialogRef<HireDevelopersComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public developerService: DeveloperService
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

  // checkDevelopersAvailability(startDate: string, endDate: string){
  //   console.log(startDate, endDate);

  //   let ids = this.data.developers.map((dev: Developer) => dev._id);
  //   console.log(ids);

  //   this.developerService
  //     .checkDevelopersAvailability(ids, startDate, endDate)
  //     .subscribe(async (data: any) => {
  //       console.log(data);

  //       return true;
  //   })
  // }

  confirmHire(){
    console.log(this.data.developers)

    let startDate = this.hiringForm.controls.startDate.value;
    let endDate = this.hiringForm.controls.endDate.value

    let ids = this.data.developers.map((dev: Developer) => dev._id);
    console.log(ids);

    this.developerService
      .checkDevelopersAvailability(ids, startDate, endDate)
      .subscribe(async (data: any) => {
        console.log("Busy: ", data.busyDevs);

        if(data.busyDevs.length == 0){
          this.dialogRef.close({
            developers: this.data.developers,
            startDate: startDate,
            endDate: endDate
          });

          console.log("approved")
        }
        else{


          for(let i = 0; i < data.busyDevs.length; i++){
            this.busyDevsNames.push(
              this.data.developers.find((dev: Developer) => dev._id == data.busyDevs[i]).name
            )
          }

          console.log(this.busyDevsNames)
        }

    })
  }

  closeDialog(){
    this.dialogRef.close();
  }

}
