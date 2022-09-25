import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userName : any;
  password : any;
  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  submit(){
    if (this.userName == "admin" && this.password == "admin"){
      alert("Login Successful");
      this.router.navigate(["seventh"]);
    }
  }

}
