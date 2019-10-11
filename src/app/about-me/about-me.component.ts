import {Component, OnInit} from '@angular/core';
import {JRouter} from '../jrouter.service';
import STORE from "../STORE";

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {

  description: string[];
  socialMediaData: any;
  selfImg: {img: string, alt: string};

  constructor(private router: JRouter) {
    this.socialMediaData = STORE.getSocialMedia();
    this.selfImg = STORE.getSelfImgs()[0];
    this.description = STORE.getAboutData();
    }

  ngOnInit() {
    window['$'](document).ready(() => {
      window['$']('.parallax').parallax();
      let xPos, yPos;
      window['$'](document).mousemove((e) => {
        xPos = ((10 * e.pageX) / 600) + 20;
        yPos = ((10 * e.pageY) / 600) + 30;
        window['$']('.title').css({'background-position': xPos + '%' + yPos + '%'});
      });
    });
  }

  onMediaClick(href) {
    this.router.navigate(href);
  }
}
