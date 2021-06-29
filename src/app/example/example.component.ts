import { Component, Input,EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit {
  // Declare language title attribute.
  languageTitle : string;

  // Declare languageArray string array attribute.
  languageArray : string[];
  todos :any = [];

  @Input()inputstudent;

 @Output() senddataonbuttonClick =new EventEmitter ();
  
  constructor(public httpClient:HttpClient) {
    // Init attributes values in the class constructor method.
    this.languageTitle = 'Below is coding language list.';
    this.languageArray = ['Java', 'JavaScript', 'Angular JS', 'Node JS', 'Spring', 'Android'];
   }

  ngOnInit(): void {

    this.httpClient.get('https://jsonplaceholder.typicode.com/todos').subscribe(data=>{
      console.log(data);
this.todos=data;
  });
  }
onbuttonclick()
{
 this.senddataonbuttonClick.emit('from example component');
}
}
