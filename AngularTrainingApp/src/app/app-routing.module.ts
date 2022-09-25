import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SeventhComponent} from "./component/seventh/seventh.component";
import {ErrorComponent} from "./component/error/error.component";
import {EmployeeListComponent} from "./component/employee-list/employee-list.component";
import {DepartmentListComponent} from "./component/department-list/department-list.component";
import {LoginComponent} from "./component/login/login.component";
import {StudentListComponent} from "./component/student-list/student-list.component";
import {DepartmentDataComponent} from "./component/department-data/department-data.component";
import {EighthComponent} from "./component/eighth/eighth.component";
import {ReactiveFormComponent} from "./component/reactive-form/reactive-form.component";

const routes: Routes = [
  {path : "", redirectTo : "login", pathMatch : "full"},
  {path : "login", component : LoginComponent},
  {path : "reactiveForm", component : ReactiveFormComponent},
  {path : "eight", component : EighthComponent},
  {path : "seventh", component : SeventhComponent, children : [
      {path : "employeeList", component : EmployeeListComponent},
      {path : "departmentList", component : DepartmentListComponent},
      {path : "studentList", component : StudentListComponent},
      {path : "departmentData/:id", component : DepartmentDataComponent},
    ]},
  // {path : "employeeList", component : EmployeeListComponent},
  // {path : "departmentList", component : DepartmentListComponent},
  {path : "**", component : ErrorComponent},//Wildcard route for a 404 page must a last list of routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
