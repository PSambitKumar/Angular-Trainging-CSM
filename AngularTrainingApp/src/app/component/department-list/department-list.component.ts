import { Component, OnInit } from '@angular/core';
import {NavigationExtras, Router} from "@angular/router";
import {MainService} from "../../service/main.service";

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {
  departments = [
    {"id": 1, "name": "MongoDB", "year": 2019, "duration": 3},
    {"id": 2, "name": "ExpressJS", "year": 2012, "duration": 2},
    {"id": 3, "name": "Angular", "year": 2018, duration: 3},
    {"id": 4, "name": "Node", "year" : 2020, duration: 2},
  ];

  constructor(private router : Router, private mainService : MainService) { }

  ngOnInit(): void {
  }

  getDepartment(deptId : any){
    // alert(deptId);
    this.mainService.exchangeData(this.departments);

      // this.router.navigate(["/seventh/departmentData", deptId]);


    let dataObject : NavigationExtras = {
      queryParams : {deptId : deptId}
    }
      this.router.navigate(["/seventh/departmentData", dataObject]);
    }

}
