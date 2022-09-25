import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fifth',
  templateUrl: './fifth.component.html',
  styleUrls: ['./fifth.component.css']
})
export class FifthComponent implements OnInit {

  dataFromSixth : any = [];
  constructor() { }

  ngOnInit(): void {
  }

  dataFromChild(dataList : []){
    this.dataFromSixth = dataList;
    console.log("From Fifth")
    console.log(this.dataFromSixth);
  }

}
