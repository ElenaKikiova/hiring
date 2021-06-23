import {Component, Inject} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';

import { Developer } from '../../models/developer.model';

@Component({
  selector: 'edit-developer',
  templateUrl: './edit-developer.component.html',
  styleUrls: ['./edit-developer.component.sass']
})
export class EditDeveloperComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: Developer) {


  }

}
