import { Injectable } from '@angular/core';
import {Observable, Subject} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MainService {
  x = 10;
  y = 20;
  departments = [
    {"id": 1, "name": "MongoDB", "year": 2019, "duration": 3},
    {"id": 2, "name": "ExpressJS", "year": 2012, "duration": 2},
    {"id": 3, "name": "Angular", "year": 2018, duration: 3},
    {"id": 4, "name": "Node", "year" : 2020, duration: 2},
  ];

  message = new Subject();
  sendData = this.message.asObservable();
  baseUrl = "http://172.27.32.212:3001/api/";

  constructor(private http : HttpClient) { }

  exchangeData(data : any){
    // alert("Inside Service : " + data);
    this.message.next(data);
  }

  sendDataToServer(name : any, mobile : any, address : any, method : any) : Observable<any>{
    // alert("Inside Service : " + name + " " + mobile + " " + address);
    // let dataObject = {
    //   Name : name,
    //   Mobile : mobile,
    //   Address : address
    // }
    return this.http.post<any>(this.baseUrl + method, {Name : name, Mobile : mobile, Address : address});
  }
}
