import { Component, OnInit } from '@angular/core';
import {AllservicesService} from '../allservices.service';

@Component({
  selector: 'app-emp-component',
  templateUrl: './emp-component.component.html',
  styleUrls: ['./emp-component.component.css']
})
export class EmpComponentComponent implements OnInit {

  constructor(private service : AllservicesService) { }

 
  ngOnInit() {
    this.getAllEmp();
    
  }
  public empData:boolean=false;
  public allEmpData:any[]=[];
  getAllEmp(){
    this.service.getAll('/emplyoee/getallemp').subscribe(
      (res)=>{
        if(res['statusCode'] == 1){
          this.allEmpData=res['list'];
          console.log(this.allEmpData);
          this.empData=false;
          
        }else{
          console.log(this.allEmpData);
          this.empData=true;
        }
      },(error)=>{
        console.log(error)
      },()=>{
        this.empData=false;
      }
    );
  }

}
