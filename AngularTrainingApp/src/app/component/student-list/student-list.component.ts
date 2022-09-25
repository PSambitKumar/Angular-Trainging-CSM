import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  studentList : any = [
    {id : 1, name : "Rahul", age : 20, faculty : "CSE", fatherName : "Ramesh", motherName : "Rita"},
    {id : 2, name : "Raj", age : 21, faculty: "ECE", fatherName : "Rajesh", motherName : "Rani"},
    {id : 3, name : "Ravi", age : 22, faculty: "EEE", fatherName : "Ravish", motherName : "Ravina"},
  ]

  constructor(private router : Router) { }

  ngOnInit(): void {
  }
  getStudentId(id : any){
    alert("Id : " + id);

  }

}
