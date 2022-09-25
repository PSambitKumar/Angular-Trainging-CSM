import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  studentList : any = [
    {id : 1, name : "Rahul", age : 20},
    {id : 2, name : "Raj", age : 21},
    {id : 3, name : "Ravi", age : 22},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
