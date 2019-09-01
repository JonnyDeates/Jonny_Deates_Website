import {Component, OnInit} from '@angular/core';
import {JRouter} from '../jrouter.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  content: any;
  projects: any;
  languages: any;
  screenDim: {width: number, height: number};
  database: any;
  socialMediaData: any;

  constructor(private router: JRouter) {
    this.languages = [ ];
    this.socialMediaData = [
      {route: 'https://twitter.com/jonnydeates', img: '/assets/images/icons/twitter.svg'},
      {route: 'https://www.linkedin.com/in/jonnydeates/', img: '/assets/images/icons/linkin.svg'},
      {route: 'https://www.instagram.com/jonnydeates/', img: '/assets/images/icons/instagram.svg'},
    ];
    this.database = firebase.database();
    this.database.ref('resume').once('value').then((snapshot) => {
      for (let key in snapshot.val()) {
        this.languages.splice(0, 0, {
          title: snapshot.val()[key].title,
          description: snapshot.val()[key].description,
          years: snapshot.val()[key].years,
          img: snapshot.val()[key].img,
          route: snapshot.val()[key].route
        });
      }
    });
    window['$'](document).ready(() => {
      let xPos, yPos;
      window['$'](document).mousemove((e) => {
        xPos = ((10 * e.pageX) / 600) + 20;
        yPos = ((10 * e.pageY) / 600) + 30;
        window['$']('.title').css({'background-position': xPos + '%' + yPos + '%'});
      });
    });
  }


  ngOnInit() {
    this.screenDim = {width: window.innerWidth, height: window.innerHeight};
  }

}
