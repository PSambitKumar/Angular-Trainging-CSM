import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MainService} from "../../service/main.service";

@Component({
  selector: 'app-sixth',
  templateUrl: './sixth.component.html',
  styleUrls: ['./sixth.component.css']
})
export class SixthComponent implements OnInit {
  name : any;
  address : any;
  mobile: any;

  dataList : any = [];
  @Output() eventEmitter = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  submit(){
    this.dataList.push({name : this.name, address : this.address, mobile : this.mobile});
    console.log(this.dataList);
  }

  sendData(){
    this.eventEmitter.emit(this.dataList);
  }
  clearList(){
    this.dataList = [];
  }
}
