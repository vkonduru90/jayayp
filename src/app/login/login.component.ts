import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title = 'Jaya';
  myClick() { 
      this.title;
   
    alert(this.title);
    // console.log(namenew)
    // console.log(event);
 }

}
