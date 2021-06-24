import { Component, OnInit } from '@angular/core';

import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';

import { Developer } from './models/developer.model';

import { ViewDeveloperComponent } from './dialogs/view-developer/view-developer.component';
import { HireDeveloperComponent } from './dialogs/hire-developer/hire-developer.component';
import { DeleteDeveloperComponent } from './dialogs/delete-developer/delete-developer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'hiring-ui'

  developerList: Developer[] = [];

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {

    this.loadDevelopersData();
    
  }

  loadDevelopersData(){

    this.developerList.push({
      "id": "abracadabra",
      "name": "Andrew Smith",
      "email": "andrews@gmail.com",
      "phone": "0878787887",
      "location": "Plovdiv, Bulgaria",
      "pfp": "https://icons-for-free.com/iconfiles/png/512/business+costume+male+man+office+user+icon-1320196264882354682.png",
      "price": 20,
      "technology": 2,
      "description": "Ala bala",
      "years": 5,
      "native_lang": 0,
      "linkedIn": "aaa.kdflh"
    })

    this.developerList.push({
      "id": "rehht",
      "name": "Rita Smith",
      "email": "rita@gmail.com",
      "phone": "5654654648",
      "location": "Sofia, Bulgaria",
      "pfp": "",
      "price": 23,
      "technology": 1,
      "description": "t43t4t",
      "years": 6,
      "native_lang": 1,
      "linkedIn": ""
    })

    console.log(this.developerList)

  }

  addDeveloper(){

    console.log("a");
  }

  previewDeveloper(developer: Developer){
    console.log(developer);

    let dialogRef = this.dialog.open(ViewDeveloperComponent, {
      data: {
        developer: developer,
        mode: 'view'
      },
      width: '550px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);

      if(result == "hire"){

        this.wantToHireDeveloper(developer);

      }
      
    });
  }

  
  editDeveloper(developer: Developer){
    console.log(developer);

    let dialogRef = this.dialog.open(ViewDeveloperComponent, {
      data: {
        developer: developer,
        mode: 'edit'
      },
      width: '550px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);

      
    });
  }

  deleteDeveloper(developer: Developer){

    let dialogRef = this.dialog.open(DeleteDeveloperComponent, {
      data: developer
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      
    });

  }

  wantToHireDeveloper(developer: Developer){

    let dialogRef = this.dialog.open(HireDeveloperComponent, {
      data: developer,
      width: '550px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      
    });

  }

}

