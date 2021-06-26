import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Developer } from '../models/developer.model';

@Injectable({
  providedIn: 'root'
})
export class DeveloperService {

  constructor(
    private http: HttpClient
  ) { }

  getDevelopers(){
    return this.http.get(
      environment.serverUrl + '/getDevelopers'
    );
  }

  addDeveloper(developer: Developer){
    return this.http.post(
      environment.serverUrl + '/addDeveloper',
      {developer: developer}
    );
  }

  editDeveloper(developer: Developer){
    return this.http.post(
      environment.serverUrl + '/editDeveloper',
      {developer: developer}
    );
  }

  deleteDeveloper(id: String){
    return this.http.post(
      environment.serverUrl + '/deleteDeveloper',
      {id: id}
    );
  }

  checkDevelopersAvailability(ids: string[], startDate: string, endDate: string){
    return this.http.post(
      environment.serverUrl + '/checkDevelopersAvailability',
      {
        developerIds: ids,
        startDate: startDate,
        endDate: endDate
      }
    );
  }

  hireDevelopers(data: any){
    return this.http.post(
      environment.serverUrl + '/hireDevelopers',
      {data: data}
    );
  }

}
