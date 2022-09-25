import { Component, OnInit } from '@angular/core';
import {MainService} from "../../service/main.service";

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.css']
})
export class ThirdComponent implements OnInit {
  data : any;

  constructor(private mainService : MainService) { }

  ngOnInit(): void {
  }
  sendData(){
    this.mainService.exchangeData(this.data);
  }

}
