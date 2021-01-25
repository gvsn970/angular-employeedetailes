import { Component, OnInit } from '@angular/core';
import { AllservicesService } from '../allservices.service';

@Component({
  selector: 'app-emp-component',
  templateUrl: './emp-component.component.html',
  styleUrls: ['./emp-component.component.css']
})
export class EmpComponentComponent implements OnInit {

  constructor(private service: AllservicesService) { }
 
  token = localStorage.getItem("token")
  ngOnInit() {
    this.getAllEmp(this.token);

  }
  public empData: boolean = false;
  public allEmpData: any = [];
  getAllEmp(token) {
    this.service.getEmpyoless('employees', token).subscribe(
      (res) => {
       
          this.allEmpData = res;
          console.log(this.allEmpData)
        
      }, (error) => {
        console.log(error)
      }, () => {
        this.empData = false;
      }
    );
  }

}
