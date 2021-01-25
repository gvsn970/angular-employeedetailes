import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from  '@angular/forms';
import {AllservicesService} from '../allservices.service';
import { Router } from '@angular/router'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private formBuilder: FormBuilder ,
    private service : AllservicesService,
    private _router: Router) { }
  loginForm: FormGroup;
  isSubmitted  =  false;
  ngOnInit(): void {
    this.loginForm  =  this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
  });
  }
  get formControls() { return this.loginForm.controls; }
  login(){
    console.log(this.loginForm.value);
    this.isSubmitted = true;
    if(this.loginForm.invalid){
      return;
    }
    this.service.login("authenticate",this.loginForm.value).subscribe(
      (res)=>{
      
        console.log("Token ::"+res)
        localStorage.setItem("token",res)
        this._router.navigate(['/employee'])
      },(error)=>{
        console.log(error)
      }
    );
    
  }

}
