import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

import { Developer } from '../../models/developer.model';

@Component({
  selector: 'app-delete-developer',
  templateUrl: './delete-developer.component.html',
  styleUrls: ['./delete-developer.component.sass']
})
export class DeleteDeveloperComponent implements OnInit {


  constructor(
    public dialogRef: MatDialogRef<DeleteDeveloperComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Developer
    ) {}

  ngOnInit(){}

  

  closeDialog(){
    this.dialogRef.close();
  }


}
