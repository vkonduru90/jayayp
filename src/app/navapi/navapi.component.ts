import { Component, OnInit } from '@angular/core';
import { Router ,ActivatedRoute} from '@angular/router';
import { HttpClient} from '@angular/common/http';
import { LoginService } from '../services/login.service';
@Component({
  selector: 'app-navapi',
  templateUrl: './navapi.component.html',
  styleUrls: ['./navapi.component.css']
})
export class NavapiComponent implements OnInit {
  todos :any = [];

  constructor(public loginservice:LoginService ,public router:Router, public activatedroute:ActivatedRoute) { }

  ngOnInit(): void {
   
 
  this.loginservice.gettodos().subscribe(data=>{
    console.log(data);
this.todos=data;
});
  }
  gotohome() {
this.router.navigate(['/home',1,2]);
  }
}
