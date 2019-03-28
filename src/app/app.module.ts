import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { tvmazemxcheungModule } from 'tvmazemxcheung';

import { FootermxcheungModule } from 'footermxcheung';
import { StudentmxcheungModule } from 'studentmxcheung';
import { TeachermxcheungModule } from 'teachermxcheung';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, HeaderComponent],
  imports: [BrowserModule,
    AppRoutingModule,
    tvmazemxcheungModule,
    StudentmxcheungModule,
    TeachermxcheungModule, FootermxcheungModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
