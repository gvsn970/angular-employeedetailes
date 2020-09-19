import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from '../app/home/home.component';
import {EmpComponentComponent} from '../app/Emplyoee/emp-component.component';
import {PageNotFoundComponent} from '../app/page-not-found/page-not-found.component';
import {DepartmentsComponent} from '../app/departments/departments.component';
import{EmpRegistrationComponent} from '../app/emp-registration/emp-registration.component';
import{LoginComponent} from '../app/login/login.component';



const routes: Routes = [
  {path:"",redirectTo:'/home', pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'registar',component:EmpRegistrationComponent},
  {path:'login',component:LoginComponent},
  {path:'depart',component:DepartmentsComponent},
  {path:"employee",component:EmpComponentComponent},
  {path:"**",component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponets=[ HomeComponent,
                                EmpComponentComponent,
                                PageNotFoundComponent,
                                DepartmentsComponent,
                                LoginComponent,
                                EmpRegistrationComponent]
