import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {
  color : any;
  gender : any = "all";

  employeeList : any = [
    {
      name : "Sambit",
      age : 25,
      gender : 'male',
      mobile : ["7008095918", "7538089589"],
      RA : [{id : 1, raOf : "Hrusikesh"}, {id : 2, raOf : "Jayshree"}]
    },
    {
      name : "Truptimayee",
      age : 24,
      gender: "female",
      mobile: ["9008076871", "9006754376"],
      RA: [{id : 3, raOf : "Jyoti"}, {id : 4, raOf : "Sanghamitra"}]
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  changeTheColor(color : any){
    // alert("Color is : " + color);
    this.color = color;
  }

  changeGeneder(event : any){
    this.gender = event.target.value;
  }

}
