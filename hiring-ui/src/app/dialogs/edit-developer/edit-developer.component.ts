import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

import { Developer } from '../../models/developer.model';

@Component({
  selector: 'edit-developer',
  templateUrl: './edit-developer.component.html',
  styleUrls: ['./edit-developer.component.sass']
})
export class EditDeveloperComponent {

  technologies: String[] = [];
  languages: String[] = [];

  constructor(
    public dialogRef: MatDialogRef<EditDeveloperComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Developer
    ) {

    this.technologies = ["Javascript", "Java", ".NET", "Flutter", "Python", "PHP"];
    this.languages = ["English", "Serbian", "Bulgarian"];

  }

  closeDialog(){
    this.dialogRef.close();
  }

}
