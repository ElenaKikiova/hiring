import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

import { Developer } from '../../models/developer.model';

@Component({
  selector: 'view-developer',
  templateUrl: './view-developer.component.html',
  styleUrls: ['./view-developer.component.sass']
})
export class ViewDeveloperComponent {

  technologies: String[] = [];
  languages: String[] = [];

  constructor(
    public dialogRef: MatDialogRef<ViewDeveloperComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
    ) {

    this.technologies = ["Javascript", "Java", ".NET", "Flutter", "Python", "PHP"];
    this.languages = ["English", "Serbian", "Bulgarian"];

  }

  closeDialog(){
    this.dialogRef.close();
  }

}
