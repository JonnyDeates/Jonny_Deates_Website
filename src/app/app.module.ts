import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {TicTacToeComponent} from './tsprojects/tic-tac-toe/tic-tac-toe.component';
import {BlogComponent} from './blog/blog.component';
import {ProjectsComponent} from './projects/projects.component';
import {ResumeComponent} from './resume/resume.component';
import {AboutMeComponent} from './about-me/about-me.component';
import {HomeComponent} from './home/home.component';
import {LayoutComponent} from './layout/layout.component';
import {FormsModule} from '@angular/forms';
import * as firebase from 'firebase';
import {JRouter} from './jrouter.service';
import {HashLocationStrategy, LocationStrategy} from "@angular/common";
import {AppRoutingModule} from "./app-routing.module";

const config = {
  apiKey: 'AIzaSyChSTdDfRuck6HUU2yDY2-ICRBIh9BWJiI',
  authDomain: 'blackkoijonny-420cc.firebaseapp.com',
  databaseURL: 'https://blackkoijonny-420cc.firebaseio.com/',
  storageBucket: 'gs://blackkoijonny-420cc.appspot.com'
};
firebase.initializeApp(config);

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    // Pages of Website Below
    AboutMeComponent,
    HomeComponent,
    TicTacToeComponent,
    BlogComponent,
    ProjectsComponent,
    ResumeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers:  [JRouter, {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
