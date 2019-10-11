import {AfterViewInit, Component, OnInit} from '@angular/core';
import {JRouter} from '../jrouter.service';
import STORE from "../STORE";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {
  count: any;
  hasScrolled: boolean;
  waitPeriod: boolean;
  projects: any;
  socialMediaData: any;
  selfImg: {img: string, alt: string};

  constructor(private router: JRouter) {
    this.hasScrolled = false;
    this.count = 0;
    this.projects = STORE.getProjectData(false);
    this.socialMediaData = STORE.getSocialMedia()
    this.selfImg = STORE.getSelfImgs()[0];

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

  ngOnInit() {
    window['$'] (document).ready(() => {
      window['$']('.parallax').parallax();
    });
     // location.href = 'https://youtube.com'
  }

  ngAfterViewInit() {
    const interval = setInterval(() => {
      if (this.count <= 1000) {
        this.count++;
        if (this.count > 1000) {
          this.waitPeriod = true;
        }
      }
      if (!this.hasScrolled) {
        window.onscroll = (e) => {
          this.hasScrolled = true;
        };
      } else {
        clearInterval(interval);
      }
    }, 10);
  }
  onMediaClick(href) {
    this.router.navigate(href);
  }
  openModal(project) {
    this.router.navigate(project.router);
  }


}

