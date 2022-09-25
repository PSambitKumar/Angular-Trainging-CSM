import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees = [
    {"id": 1, "name": "Sambit"},
    {"id": 2, "name": "Hrusikesh"},
    {"id": 3, "name": "Arabinda"}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
