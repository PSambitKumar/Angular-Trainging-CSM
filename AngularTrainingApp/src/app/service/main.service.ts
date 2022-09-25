import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MainService {
  x = 10;
  y = 20;

  message = new Subject();
  sendData = this.message.asObservable();

  constructor() { }

  exchangeData(data : any){
    alert("Inside Service : " + data);
    this.message.next(data);
  }
}
