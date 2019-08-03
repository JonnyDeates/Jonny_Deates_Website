import {AfterViewInit, Component, OnInit} from '@angular/core';
import {JRouter} from '../jrouter.service';

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

  constructor(private router: JRouter) {
    this.hasScrolled = false;
    this.count = 0;
    this.projects = [
      {img: '/assets/images/backgrounds/yangbg.png',
        desc: 'One of the few places I post updates about what current projects, and progress on these projects is underway.',
        projectName: 'Blog', router: 'blog', color: 'white'},
      {img: '/assets/images/backgrounds/budget_calendar_snapshot.PNG', desc: 'Calendar is used to maintain and as a tool to benefit someone with their life. It gives the person an easy way to track their progress throughout the month. It is a financial history hub for an individual.',
        projectName: 'Budget Calendar', router: 'projects', color: 'black'},
      {img: '/assets/images/backgrounds/pedroquintela.jpg', desc: 'A Client that takes professional photos in the Colorado Area.',
        projectName: 'Cameron Photography', router: '', color: 'white'},
      {img: '/assets/images/backgrounds/darkestdungeon.jpg', desc: 'A game that I am developing in browser.',
        projectName: 'Vampire Village', router: '', color: 'white'},
      {img: '/assets/images/backgrounds/todolist.jpg', desc: 'A todo list app developed in XML.', projectName: 'Todo List', router: '', color: 'white'},
      {img: '/assets/images/backgrounds/wheel.jpg', desc: 'A giveaway wheel developed in typescript and html.', projectName: 'Giveaway wheel', color: 'white',
        router: ''}];
    this.socialMediaData = [
      {route: 'https://twitter.com/jonnydeates', img: '/assets/images/icons/twitter.svg'},
      {route: 'https://www.linkedin.com/in/jonnydeates/', img: '/assets/images/icons/linkin.svg'},
      {route: 'https://www.instagram.com/jonnydeates/', img: '/assets/images/icons/instagram.svg'},
    ];

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

