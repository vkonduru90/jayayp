import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[]
})
export class LoginComponent implements OnInit {
email;
  constructor(public httpClient:HttpClient) { 

  }

  ngOnInit(): void {

    this.httpClient.get('https://jsonplaceholder.typicode.com/todos').subscribe(data=>{
      console.log(data)
  }
      );
  }
  title = 'Jaya';

  student={
    name:'jaya vardhani',
    phone:9573787097,
    class:"MCA"


  }
  myClick() { 
      this.title;
   
    alert(this.title);
    // console.log(namenew)
    // console.log(event);
 }
 recievedfromexample(e)
 {
console.log(e);
 }
 ngOnChanges()
 {
   
 }

}
