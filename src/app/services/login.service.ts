import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
 
api='https://jsonplaceholder.typicode.com';
  constructor(public httpClient:HttpClient ) { }

  gettodos()
  {
    return this.httpClient.get(`${this.api}/todos`)
  
  }
  gettodoID(todoID){
    return this.httpClient.get(`${this.api}/todos/${todoID}`)
  }

}
