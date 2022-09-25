import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnChanges {

  @Input() dataFromParent: any;
  @Output() eventEmitter = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges() {
    console.log(this.dataFromParent);
  }

  sendData(){
    this.eventEmitter.emit(this.dataFromParent);
  }


}
