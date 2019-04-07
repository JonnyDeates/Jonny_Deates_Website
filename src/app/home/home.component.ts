import {AfterViewInit, Component, OnInit} from '@angular/core';
import {createElement} from "@angular/core/src/view/element";
import {appendChild} from "@angular/core/src/render3/node_manipulation";
import * as firebase from "firebase";
import {until} from "selenium-webdriver";
import titleContains = until.titleContains;
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

  constructor(private router: JRouter) {
    this.hasScrolled = false;
    this.count = 0;
    this.projects = [
      {img: '/assets/images/backgrounds/yangbg.png',
        desc: 'One of the few places I post updates about what current projects, and progress on these projects is underway.',
        projectName: 'Blog', router: 'blog'},
      {img: '/assets/images/backgrounds/unity3d.jpg', desc: 'A Unity project that is suppose to be implemented seamlessly into a game package. It provides all the basic stats and essential factors that a game could require.',
        projectName: 'Unity Skill Sheets', router: 'projects/unitySS'},
      {img: '/assets/images/backgrounds/pedroquintela.jpg', desc: 'A Client that takes professional photos in the Colorado Area.',
        projectName: 'Cameron Photography', router: ''},
      {img: '/assets/images/backgrounds/darkestdungeon.jpg', desc: 'A game that I am developing in browser.',
        projectName: 'Vampire Village', router: ''},
      {img: '/assets/images/backgrounds/photoofwedding.jfif', desc: 'A client that takes professional photos in the Georgia Area.',
        projectName: 'Ansleigh Photography', router: ''},
      {img: '/assets/images/backgrounds/todolist.jpg', desc: 'A todo list app developed in XML.', projectName: 'Todo List', router: ''},
      {img: '/assets/images/backgrounds/wheel.jpg', desc: 'A giveaway wheel developed in typescript and html.', projectName: 'Giveaway wheel',
        router: ''}];


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
          for (let i = 0; i < document.getElementsByTagName('li').length; i++) {
            document.getElementsByTagName('li').item(i).style.marginBottom = Math.floor(Math.random() * (12 - 10 + 1) + 10) + 'px';
          }
        };
      } else {
        clearInterval(interval);
      }
    }, 10);
  }
  openModal(project) {
    this.router.navigate(project.router);
  }
}

