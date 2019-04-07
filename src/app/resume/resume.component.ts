import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  content: any;
  languages: any;

  constructor(private router: Router) {
    this.languages = [{
      title: 'JavaScript', description: [
        { // My Experience
          paragraph: `I developed independent portfolios and small simple applications using pure Javascript. I have made small inbrowser games as well using javascript, and htmls canvas.`,
          route: ''
        }, {  // Small description of the language
          paragraph: 'JavaScript, often abbreviated as JS, is a high-level, interpreted programming language that conforms to the ECMAScript specification. It is a programming language that is characterized as dynamic, weakly typed, prototype-based and multi-paradigm.',
          route: ''
        }],
      years: '4+',
      img: '/assets/images/logo/javascript.png'
    }, {
      title: 'TypeScript', description: [
        {
          paragraph: `I use Typescript for all my client's websites, a small independent game that I am developing, and a multitude of small applications.  I've been doing it for 4 years now all the while reading the documentation, and testing the strengths and limits of the language. Definitely my current favorite language to program in. ` ,
          route: ''
        }, {
          paragraph: 'TypeScript is an open-source programming language developed and maintained by Microsoft. It is a strict syntactical superset of JavaScript, and adds optional static typing to the language. TypeScript is designed for development of large applications and transcompiles to JavaScript.',
          route: ''
        }],
      years: '4+',
      img: '/assets/images/logo/typescript.png'
    }, {
      title: 'React', description: [{
        paragraph: 'I use React in my back-end applications for my clients. I do it this way, because most back-end systems only need to edit a database directly, a database that their website is using. Using React allows for rapid development of these back-end applications.',
        route: ''
      }, {
        paragraph: 'React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications.',
        route: ''
      }],
      years: '2+',
      img: '/assets/images/logo/react.png'
    }];
    this.content = [];
  }

  ngOnInit() {
  }

}
