import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { tvmazemxcheungModule } from 'tvmazemxcheung';

import { FootermxcheungModule } from 'footermxcheung';
import { HomemxcheungModule } from 'homemxcheung';
import { StudentmxcheungModule } from 'studentmxcheung';
import { TeachermxcheungModule } from 'teachermxcheung';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [AppComponent,  HeaderComponent],
  imports: [BrowserModule,
    AppRoutingModule,
    tvmazemxcheungModule,
    HomemxcheungModule,
    StudentmxcheungModule,
    TeachermxcheungModule,
    FootermxcheungModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
