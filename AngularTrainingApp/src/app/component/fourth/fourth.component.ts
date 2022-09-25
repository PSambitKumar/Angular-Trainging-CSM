import { Component, OnInit } from '@angular/core';
import {MainService} from "../../service/main.service";

@Component({
  selector: 'app-fourth',
  templateUrl: './fourth.component.html',
  styleUrls: ['./fourth.component.css']
})
export class FourthComponent implements OnInit {
  data : any;

  constructor(private mainService : MainService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData(){
    this.mainService.sendData.subscribe(data => {
      console.log(data);
      alert(data);
      this.data = data;
    })
  }

  sendData(){
  }
}
