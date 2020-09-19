import { Component, OnInit } from '@angular/core';
import {AllservicesService} from '../allservices.service';

@Component({
  selector: 'app-emp-registration',
  templateUrl: './emp-registration.component.html',
  styleUrls: ['./emp-registration.component.css']
})
export class EmpRegistrationComponent implements OnInit {

  constructor(private service :AllservicesService) { }
  


 public deparrtmentlist: any[] = [{
  department: '',
}];

  ngOnInit() {
    //this.dataArray.push(this.obj);
  }
  addForm(){
   
    this.deparrtmentlist.push({ department: ''});
  }
  empReg(data){
    const form=new FormData();
    form.append("empName",data.name);
    form.append("email",data.email);
    form.append('password',data.pass)
    form.append('departmentList',this.deparrtmentlist.forEach.name)
    console.log(form)
    
        this.service.postData("/emplyoee/add",form).subscribe(
      (res)=>{
        if(res['statusCode']  == 1){
          console.log(res['statusMessage'])
        }else{
          console.log(res['statusMessage'])
        }
      },(error)=>{
        console.log(error)
      },()=>{}
    );
  }
  removeForm(i : number){
    this.deparrtmentlist.splice(i,1);
  }
}
