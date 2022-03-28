import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HomeCardComponent } from './home/components/home-card.component';
import { ResumeComponent } from './resume/resume.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeHsCardComponent } from './home/components/home-hs-card.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeCardComponent,
    ResumeComponent,
    HomeHsCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
