import { NgModule, Output } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ExampleComponent } from './example/example.component';
import { NavapiComponent } from './navapi/navapi.component';
import { OutputComponent } from './output/output.component';

const routes: Routes = [
  {
    path: '',component : LoginComponent
  },
  {
    path: "login",component : LoginComponent
  },
  {
    path: "dashboard",component : DashboardComponent
  },
  {
    path: "example",component : ExampleComponent
  },
  {
    path: "navapi",component : NavapiComponent
  },
  {
    path: "home/:id1/:id2",component : NavapiComponent
  },
  {
    path: "news",component : NavapiComponent
  },
  {
    path: "contact",component : NavapiComponent
  },
  {
    path:"about",component :NavapiComponent
  },
  {
    path: "todo/:todoID",component : OutputComponent
  },
  // {
  //   path: "home1",component : ExampleComponent
  // },
  // {
  //   path: "home2",component : ExampleComponent
  // },
  // {
  //   path: "home3",component : ExampleComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule] 
})
export class AppRoutingModule {
  title = "title";
}
