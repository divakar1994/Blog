import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MyblogComponent } from './myblog/myblog.component';
import {ServiceService} from "./service.service";

import { AddnewComponent } from './addnew/addnew.component';
import { FavComponent } from './fav/fav.component';
import { MyblogssComponent } from './myblogss/myblogss.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { ChildComponent } from './myblogss/child/child.component';
import {HttpModule} from "@angular/http";


const approutes=[
  { path: '', redirectTo: '/home', pathMatch: 'full'},
{path: 'home', component: HomeComponent },
  {path:'login', component:LoginComponent},
  {path:'myblog', component:MyblogComponent},
  {path:'myblogss', component:MyblogssComponent},
  {path:'fav', component:FavComponent},
  {path:'addnew', component:AddnewComponent},
  {path:'myblogss/:id', component:ChildComponent}
]



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    NavbarComponent,
    MyblogComponent,
    AddnewComponent,
    FavComponent,
    MyblogssComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    RouterModule.forRoot(approutes)
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
