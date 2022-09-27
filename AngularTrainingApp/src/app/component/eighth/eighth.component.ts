import { Component, OnInit } from '@angular/core';
import {MainService} from "../../service/main.service";

@Component({
  selector: 'app-eighth',
  templateUrl: './eighth.component.html',
  styleUrls: ['./eighth.component.css']
})
export class EighthComponent implements OnInit {
  name : any;
  mobile : any;
  address : any;
  constructor(private mainService : MainService) { }

  ngOnInit(): void {
  }
  submit(){
    this.mainService.sendDataToServer(this.name, this.mobile, this.address, "insertData").subscribe((data) => {
      console.log(data);
      if (data.status == 200){
        alert(data.message);
      }
    },
      error => {
        console.log(error);
      })
  }
}
