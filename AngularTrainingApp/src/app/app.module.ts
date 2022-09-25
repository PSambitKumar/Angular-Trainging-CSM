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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [MainService],
  bootstrap: [SeventhComponent]
})
export class AppModule { }
