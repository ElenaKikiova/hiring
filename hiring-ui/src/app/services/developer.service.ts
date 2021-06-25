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

}
