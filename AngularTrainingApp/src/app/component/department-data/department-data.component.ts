import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {MainService} from "../../service/main.service";

@Component({
  selector: 'app-department-data',
  templateUrl: './department-data.component.html',
  styleUrls: ['./department-data.component.css']
})
export class DepartmentDataComponent implements OnInit {
  departmentData : any = [];
  departmentData1 : any = [];
  deptId : any;

  constructor(private route : ActivatedRoute, private mainService : MainService, private router : Router) {
    this.deptId = this.router.getCurrentNavigation()?.extras.queryParams;
    alert(this.deptId);
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      // alert(JSON.stringify(params));
      this.deptId = JSON.parse(JSON.stringify(params)).id;
    });
    this.departmentData = this.mainService.departments;


    // For Learning
    this.departmentData1 = this.mainService.sendData.subscribe(data => {
      console.log("Department Data")
      console.log(data);
      this.departmentData1 = JSON.parse(JSON.stringify(data));
    })
  }

}
