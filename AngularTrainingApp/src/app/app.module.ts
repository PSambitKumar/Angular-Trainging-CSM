import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { SecondComponent } from './component/second/second.component';
import { ParentComponent } from './component/parent/parent.component';
import { ChildComponent } from './component/child/child.component';
import {MainService} from "./service/main.service";
import { ThirdComponent } from './component/third/third.component';
import { FourthComponent } from './component/fourth/fourth.component';
import { FifthComponent } from './component/fifth/fifth.component';
import {SixthComponent} from "./component/sixth/sixth.component";
import { SeventhComponent } from './component/seventh/seventh.component';
import { EighthComponent } from './component/eighth/eighth.component';
import { ErrorComponent } from './component/error/error.component';
import { EmployeeListComponent } from './component/employee-list/employee-list.component';
import { DepartmentListComponent } from './component/department-list/department-list.component';
import { StudentListComponent } from './component/student-list/student-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SecondComponent,
    ParentComponent,
    ChildComponent,
    ThirdComponent,
    FourthComponent,
    FifthComponent,
    SixthComponent,
    SeventhComponent,
    EighthComponent,
    ErrorComponent,
    EmployeeListComponent,
    DepartmentListComponent,
    StudentListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [MainService],
  bootstrap: [AppComponent]
})
export class AppModule { }
