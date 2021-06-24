import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

import { Developer } from '../../models/developer.model';

@Component({
  selector: 'hire-developer',
  templateUrl: './hire-developer.component.html',
  styleUrls: ['./hire-developer.component.sass']
})
export class HireDeveloperComponent {

  technologies: String[] = [];
  languages: String[] = [];

  constructor(
    public dialogRef: MatDialogRef<HireDeveloperComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Developer
    ) {

    this.technologies = ["Javascript", "Java", ".NET", "Flutter", "Python", "PHP"];
    this.languages = ["English", "Serbian", "Bulgarian"];

  }

  closeDialog(){
    this.dialogRef.close();
  }

}
