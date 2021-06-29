import { Component, OnInit } from '@angular/core';
import { Router ,ActivatedRoute} from '@angular/router';
import { HttpClient} from '@angular/common/http';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit {
  todos :any = [];
  constructor(public loginservice:LoginService,public httpClient:HttpClient,public router:Router, public activatedroute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedroute.params.subscribe(params =>{
      console.log(params);
     this.loginservice.gettodoID(params.todoID).subscribe(data=>{
        console.log(data);
    this.todos=data;
    }); 



    })  ;
    
  }

}
