import { Component, OnInit, ViewChildren, QueryList, ElementRef } from '@angular/core';

import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';

import { Developer } from './models/developer.model';

import { ViewDeveloperComponent } from './dialogs/view-developer/view-developer.component';
import { HireDevelopersComponent } from './dialogs/hire-developers/hire-developers.component';
import { DeleteDeveloperComponent } from './dialogs/delete-developer/delete-developer.component';

// Services
import { DeveloperService } from './services/developer.service';
import { MatCheckbox } from '@angular/material/checkbox';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'hiring-ui'

  developerList: Developer[] = [];

  hiringMode: Boolean = false;

  hiringList: Developer[] = [];

  
  @ViewChildren("checkbox") checkboxes: QueryList<MatCheckbox>;

  constructor(
    public dialog: MatDialog,
    public developerService: DeveloperService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {

    this.loadDevelopersData();
    
  }

  async loadDevelopersData(){

    this.developerService.getDevelopers().subscribe(async (data: any) => {
      console.log(data);

      this.developerList = data;
    })

    console.log(this.developerList)

  }

  addDeveloper(){

    let dialogRef = this.dialog.open(ViewDeveloperComponent, {
      data: {
        developer: null,
        mode: 'add'
      },
      width: '550px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);

      if(result != null){

        this.developerService.addDeveloper(result).subscribe(async (data: any) => {
          console.log(data);

          this.developerList.push(data);

          this.snackBar.open("Developer added!", "OK");
  
        })

      }
      
    });
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

      if(result != null){

        this.developerService.editDeveloper(result).subscribe(async (data: any) => {
          console.log(data);

          let index = this.developerList.findIndex((e) => e._id == data._id);
          console.log(index)
          this.developerList[index] = data;

          this.snackBar.open("Developer info updated!", "OK");
  
        })

      }

    });
  }

  deleteDeveloper(developer: Developer){

    let dialogRef = this.dialog.open(DeleteDeveloperComponent, {
      data: developer
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);

      if(result == "delete"){

        this.developerService.deleteDeveloper(developer._id).subscribe(async (data: any) => {
          console.log(data);

          let index = this.developerList.findIndex((e) => e._id == developer._id);
          console.log(index)
          this.developerList.splice(index, 1);
          
          this.snackBar.open("Developer deleted!", "OK");
  
        })

      }
      
      
    });

  }

  hireDevelopers(){

    this.hiringMode = true;

  }

  checkHiring(developer: Developer){

    let index = this.hiringList.indexOf(developer);
    if(index == -1){
      this.hiringList.push(developer);
    }
    else{
      this.hiringList.splice(index, 1);
    }

    console.log(this.hiringList);
  }

  confirmHiring(){

    let dialogRef = this.dialog.open(HireDevelopersComponent, {
      data: {
        developers: this.hiringList
      },
      width: '550px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);

      if(result != null){

        this.developerService.hireDevelopers(result).subscribe(async (data: any) => {
          console.log(data);
          
          // this.snackBar.open("Developer deleted!", "OK");

          this.hiringList = [];
          this.hiringMode = false;


          this.checkboxes.forEach((element) => {
            element.checked = false;
          });
  
        })

      }
      
    });

  }

}

