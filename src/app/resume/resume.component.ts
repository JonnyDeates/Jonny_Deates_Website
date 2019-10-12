import {Component, OnInit} from '@angular/core';
import {JRouter} from '../jrouter.service';
import STORE from "../STORE";
//import STORE from '../STORE';
// import * as firebase from 'firebase';

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
  selfImg: {img: string, alt: string};

  constructor(private router: JRouter) {
    this.socialMediaData = STORE.getSocialMedia()
    this.languages = STORE.getLanguages();
    this.languages.sort((a, b) => (a.years > b.years) ? 1 : -1).reverse();
    this.selfImg = STORE.getSelfImgs()[0];
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
  onMediaClick(href) {
    this.router.navigate(href);
  }

}
