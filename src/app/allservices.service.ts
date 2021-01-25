import { Injectable  } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import {environment} from '../environments/environment';
import { Router } from '@angular/router'
@Injectable({
  providedIn: 'root'
})
export class AllservicesService {

  public headerDist: any;
  public requestOptions:any;
  public url:String=environment.url;

  constructor(private http : HttpClient,private _router:Router) {

    this.url = environment.url;
    this.headerDist = { 
      "Accept": "application/json"
    }
    this.requestOptions = {
      headers: new HttpHeaders(this.headerDist),
    };

   }

  
  getAll(url){
    try{
      
      return this.http.get(this.url+url);
    }catch(e){
      console.log(e +" Exception")
    }
  }

  postData(url,data) {
    try {
        return this.http.post(this.url + url, data)
      }
    catch (e) {
      console.log(e, 'post method')
    }
  }
  updateData(url, data) {
    try {
      return this.http.put(this.url + url, data)
    }
    catch (e) {
      console.log(e, 'get method')
    }
  }

  getEmpyoless(url,token){
    let tokenStr = 'Bearer ' + token;
    const headers = new HttpHeaders().set('Authorization', tokenStr);
    return this.http.get(this.url+url);
  }
  login(url,data){
    return this.http.post<string>(this.url + url, data,{  responseType: 'text' as 'json' })
  }


  logoutUser() {
    localStorage.removeItem('token')
    this._router.navigate(['/home'])
  }

  getToken() {
    return localStorage.getItem('token')
  }

  loggedIn() {
    return !!localStorage.getItem('token')    
  }


  deleteData(url) {
    try {
      return this.http.delete(this.url + url)
    }
    catch (e) {
      console.log(e)
    }
  }

}
