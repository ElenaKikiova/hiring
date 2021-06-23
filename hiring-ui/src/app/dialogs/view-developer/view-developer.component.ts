import {Component, Inject} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';

import { Developer } from '../../models/developer.model';

@Component({
  selector: 'view-developer',
  templateUrl: './view-developer.component.html',
  styleUrls: ['./view-developer.component.sass']
})
export class ViewDeveloperComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: Developer) {


  }

}
