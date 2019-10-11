import {AfterViewInit, Component, OnInit} from '@angular/core';
import {JRouter} from '../jrouter.service';

@Component({
  selector: 'layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit, AfterViewInit {

  links: any;

  // List of Some of the applications and languagues that I know well.
  skills: string[] = ['TypeScript', 'HTML5', 'JavaScript', 'C#', 'Angular 2', 'NodeJs', 'Java', 'CSS', 'Unity3d', 'Photoshop'];

  constructor(private router: JRouter) {
    // The Link Navigation created below
    this.links = [{route: '', name: 'Home', i: 'home'}, {route: 'about', name: 'About Me', i: 'account_circle'},
      {route: 'blog', name: 'Blog', i: 'create'}, {route: 'resume', name: 'Resume', i: 'ondemand_video'} ,
      {route: 'projects', name: 'Projects', i: 'storage'}];

      // {route: 'tic-tac-toe', name: 'Tic Tac Toe', i: 'grid_on'}, {route: 'giveaway-wheel', name: 'Give Away Wheel', i: 'slow_motion_video'},
      // {route: 'snake', name: 'Snake', i: 'show_chart'}];

    // S
    this.links.map(link => Object.assign(link, {active: false}));
  }

  // Calls the router function, navigates to the route, and then on the callback sets the Active Link.
  navigation = (route) => {
    this.router.navigate(route, () => {this.setActive(this.links)});
  }

  setActive = (links) => {
    // Sets the Target to the pathname without the backslash
    const target = links.find((link) => link.route === window.location.hash.substring(2));

    // Sets each links active value to false
    links.map(link => Object.assign(link, {active: false}));
    // Sets the link that has the pathname
    Object.assign((!!target) ? target : '', {active: true});
  }

  ngOnInit() {
    window['$'] (document).ready(() => {
      window['$'] ('.sidenav').sidenav();
    });
  }

  ngAfterViewInit() {
    // Sets the Initial Color of the Website
    document.body.style.backgroundColor = '#eaf6ff';
  }
}
