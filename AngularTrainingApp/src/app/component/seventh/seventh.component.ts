import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-seventh',
  templateUrl: './seventh.component.html',
  styleUrls: ['./seventh.component.css']
})
export class SeventhComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }
  openEmployee(){
    this.router.navigate(["employeeList"]);
  }
  openDepartment(){
    this.router.navigate(["departmentList"]);
  }

  goTo(data : any){
    if (data == "employee"){
      this.router.navigate(["seventh/employeeList"]);
    }else if (data == "department"){
      this.router.navigate(["seventh/departmentList"]);
    }else if (data == "student"){
      this.router.navigate(["seventh/studentList"]);
    }
  }

}
