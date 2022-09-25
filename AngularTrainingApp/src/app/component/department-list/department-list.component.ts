import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {
  departments = [
    {"id": 1, "name": "MongoDB"},
    {"id": 2, "name": "ExpressJS"},
    {"id": 3, "name": "Angular"},
    {"id": 4, "name": "Node"},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
