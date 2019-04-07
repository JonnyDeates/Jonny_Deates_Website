import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
@Component({
  selector: 'layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit, AfterViewInit {

  isBtnActive: boolean;
  links: any;
  linksDd: any;
  skills: string[] = ["TypeScript", "HTML5", "JavaScript", "C#", "Angular 2", "NodeJs", "Java", "CSS", "Unity3d", "Photoshop"];

  constructor(private router: Router) {
    this.linksDd = [];
    // this.linksDd = [{route: 'tic-tac-toe', name: 'Tic Tac Toe', i: 'grid_on'}, {
    //   route: 'giveaway-wheel', name: 'Give Away Wheel', i: 'slow_motion_video'},{route: 'snake', name: 'Snake', i: 'show_chart'}];
    this.links = [{route: '', name: 'Home', i: 'home'}, {route: 'about', name: 'About Me', i: 'account_circle'},
      {route: 'blog', name: 'Blog', i: 'create'}, {route: 'resume', name: 'Resume', i: 'ondemand_video'},];
    this.isBtnActive = true;
    if (!!this.links.find((link) => link.route === window.location.hash.substring(2))) {
      Object.assign(this.links.find((link) => link.route === window.location.hash.substring(2)), {active: true});
    }
    if (!!this.linksDd.find((link) => link.route === window.location.hash.substring(2))) {
      Object.assign(this.linksDd.find((link) => link.route === window.location.hash.substring(2)), {active: true});
    }
  }

  resetLinks = (links) => links.map(link => Object.assign(link, {active: false}));
  navigation = (links, route, elementId?) => {
    this.resetLinks(this.links);
    //this.resetLinks(this.linksDd);
    this.router.navigate([`${route}`])
      .then(() => Object.assign(links.find((link) => link.route === window.location.pathname.substring(1)), {active: true}));
  }

  ngOnInit() {
    window['$'](document).ready(() => {
      window['$']('.sidenav').sidenav({
        onClose: this.setBtnTrue()
      });
    });
    this.resetLinks(this.links);
    Object.assign(this.links.find((link) => link.route === window.location.pathname.substring(1)), {active: true});
  }

  setBtnTrue = () => this.isBtnActive = true;

  ngAfterViewInit() {
    document.body.style.backgroundColor = '#eaf6ff';
  }
}
// }
// Did a lot of work on the cosmetics of the back-end app; now a lot cleaner and more organized. However, it does still have a long way to go, plenty more features to implement. I'm enjoying it though. The process at times can be tough to get through, but when inspired, I pour my heart into it. Still so much to create.
//
// Check List of Things still needed to be implemented on the back-end app:
//   <ol style="list-style-type:decimal;">
//     <li>Better html editor for the embedded code</li>
// <li>Ability to edit past posts, and save the original separately</li>
// <li>To be able to delete added embedded items</li>
// <li>Animations</li>
// <li>Ability to see a template of the post prior to posting it</li>
// </ol>
