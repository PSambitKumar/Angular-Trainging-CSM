import { Component, OnInit } from '@angular/core';
import {MainService} from "../../service/main.service";

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  data : any;
  dataForChild: any;

  constructor(private mainService : MainService) { }

  ngOnInit(): void {
    console.log("Data From Main Service : " + this.mainService.x);
  }

  sendData(){
    this.dataForChild = this.data;
  }

  dataFromChild(event: any){
    // alert(event);
    this.data= event;
  }
}
