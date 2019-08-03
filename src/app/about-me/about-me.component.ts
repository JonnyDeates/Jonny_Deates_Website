import {Component, OnInit} from '@angular/core';
import {JRouter} from '../jrouter.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {

  description: string[];
  socialMediaData: any;

  constructor(private router: JRouter) {
    this.socialMediaData = [
      {route: 'https://twitter.com/jonnydeates', img: '/assets/images/icons/twitter.svg'},
      {route: 'https://www.linkedin.com/in/jonnydeates/', img: '/assets/images/icons/linkin.svg'},
      {route: 'https://www.instagram.com/jonnydeates/', img: '/assets/images/icons/instagram.svg'},
    ];
    // Each string is a seperate paragraph
    this.description = ['Programmer, and I’ve been since my interest sparked at ten. I’ve done projects in Python, Html, Java, JS, Typescript, C#, Lua, nodeJs, Angular, XML, and React. I specialize in Typescript, and Angular for website development. Each website is catered to the client, as I work with them throughout the process. Often the designs, flow, css, and html will be made from scratch, while Typescript is always written from scratch. I also ensure the client’s have a personalized backend programs and/or app to allow for additional updates to the website. These programs and/or apps are written in React & JSX / XML & Java respectively.',
    'Pulling away from that portion of my life, I am also a Barista working at Starbucks. The job itself leaves me a little money starved but the intriguing interactions, wholesome connections, and just a family-like team make it important in my life. I work as a shift lead in a café only store, which I actively work to keep a positive and comfortable vibe in. I work a lot currently, but I do need to say I enjoy it. Eventually though I head home by biking ( I do drive if it’s terrible weather ).',
    'Multiple distant bike rides are a regular for me, and it helps keep me active. I do stretches, workout all throughout the day in broken segments, and bike pretty much anywhere in a ten mile radius. I enjoy pushing myself to better my overall health, and enjoy seeing the limits I have, gradually get pushed further and further back. The growth brings me confidence and joy and as such I strive to grow myself and those around me.'];
    }

  ngOnInit() {
    window['$'](document).ready(() => {
      window['$']('.parallax').parallax();
    });
  }

  onMediaClick(href) {
    this.router.navigate(href);
  }
}
