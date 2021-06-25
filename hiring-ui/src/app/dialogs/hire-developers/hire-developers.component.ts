import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

import { FormGroup, FormControl } from '@angular/forms';

import { Developer } from '../../models/developer.model';

@Component({
  selector: 'hire-developers',
  templateUrl: './hire-developers.component.html',
  styleUrls: ['./hire-developers.component.sass']
})
export class HireDevelopersComponent {

  technologies: String[] = [];
  languages: String[] = [];

  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });

  constructor(
    public dialogRef: MatDialogRef<HireDevelopersComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
    ) {

  }

  removeDeveloper(developer: Developer){

    let index = this.data.developers.indexOf(developer);
    if(index == -1){
      this.data.developers.splice(index, 1);
    }

  }

  confirmHire(){
    console.log(this.data.developers)
    this.dialogRef.close({
      developers: this.data.developers,
      startDate: 'ew',
      endDate: 'ew'
    });
  }

  closeDialog(){
    this.dialogRef.close();
  }

}
