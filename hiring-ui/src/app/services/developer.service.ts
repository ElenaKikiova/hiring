import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';

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

}
