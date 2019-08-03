import {AfterViewInit, Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';
import {_appIdRandomProviderFactory} from "@angular/core/src/application_tokens";

@Component({
  selector: 'app-blog',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  activePosts: any[] = []; // Active Posts on Page
  pageIndex: number; // The Page we are On
  amtPostsShown: number; // The Amount of Posts Shown on Each Page
  NumOfPages: number[]; // The Amount of Pages to choose from
  database: any;
  searchBox: string;
  Posts: any[] = []; // All Posts on the Database

  constructor() {
    this.amtPostsShown = 6;
    this.NumOfPages = [];
    this.searchBox = '';
    this.database = firebase.database();
    this.database.ref('project').once('value').then((snapshot) => {
      for (let key in snapshot.val()) {
        this.Posts.splice(0, 0, {
          title: snapshot.val()[key].title,
          applications: snapshot.val()[key].applications,
          date: this.formatDate(snapshot.val()[key].date),
          content: snapshot.val()[key].content,
          hRef: snapshot.val()[key].hRef,
          img: snapshot.val()[key].img,
          embedded: snapshot.val()[key].embedded
        });
      }
      this.updatePage();
      setTimeout(() => this.updateEmbedded(), 250);
    });
    this.pageIndex = 0; // The page index is the page we are on.
    window['$'](document).ready(() => {
      window['$']('.parallax').parallax();
    });
  }

  ngOnInit() {
    window['$'] (document).ready(() => {
      window['$']('.parallax').parallax();
    });
    // location.href = 'https://youtube.com'
  }
  updatePage() {
    this.activePosts = [];
    for (let i = (this.pageIndex * this.amtPostsShown);
         i < this.Posts.length && i < (this.amtPostsShown + (this.pageIndex * this.amtPostsShown)); i++) {
      this.activePosts.push(this.Posts[i]);
    }
    this.adjustApplications();
    this.adjustImages();
    this.activePosts.forEach((Post)=> Post.active = false);
    this.checkNumOfPages();
  }

  checkNumOfPages() {
    this.NumOfPages = [];
    for (let i = 0; i < this.Posts.length / this.amtPostsShown; i++) {
      this.NumOfPages.push(i);
    }
  }

  checkActivePage(index) {
    return (this.pageIndex === index) ? '#7bc9ff' : 'white';
  }

  changePage(Right: boolean) {
    (Right) ? this.pageIndex++ : (this.pageIndex - 1 < 0) ? this.pageIndex = 0 : this.pageIndex--;
    this.updatePage();
  }

  changeLastPage(Right: boolean) {
    (Right) ? this.pageIndex = this.NumOfPages[this.NumOfPages.length - 1] : this.pageIndex = 0;
    this.updatePage();
  }

  formatDate(str) {
    const date: Date = new Date(str);
    return (`${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`);
  }

  adjustImages(){
    this.activePosts.forEach( (Post) => {
      if(Post.img) {
        if ((Post.img.toLowerCase()).includes('budget calendar')) {
          Post.img = '/assets/images/backgrounds/budget_calendar_snapshot.PNG';
        }
        else if ((Post.img.toLowerCase()).includes('google sheets')) {
          Post.img = '/assets/images/icons/google_sheets.svg';
        }
        else if ((Post.img.toLowerCase()).includes('unity')) {
          Post.img = '/assets/images/icons/unity.svg';
        }
        else {
          Post.img = '';
        }
      }
    });
  }

  adjustApplications(){
    this.activePosts.forEach( (Post) => {
      Post.applications.forEach((App, index) => {
        if((App.toLowerCase()).includes('excel')) { Post.applications[index] = '/assets/images/icons/microsoft_excel.svg'}
        else if((App.toLowerCase()).includes('google sheets')) { Post.applications[index] = '/assets/images/icons/google_sheets.svg'}
        else if((App.toLowerCase()).includes('unity')) { Post.applications[index] = '/assets/images/icons/unity.svg'}
        else {
          Post.applications[index] = '';
        }
      })
    })
  }
  onCoverClick(project,id){
    this.activePosts.forEach((Post) =>
    {

      if(Post.active) {
        Post.active = false;
        document.getElementById(id).style.animation = "expandIn 1s forwards"
        setTimeout(()=>(document.getElementById(id).style.animation = ""), 1000);
      }
      Post.active = false;
    });
    document.getElementById(id).style.animation = "expandout 1s forwards"
    setTimeout(()=>(project.active = true), 1000);
  }
  updateEmbedded() {
    for (let x = 0; x < this.activePosts.length; x++) {
      if (!!this.activePosts[x].embedded) {
        for (let y = 0; y < this.activePosts[x].embedded.length; y++) {
          if (this.activePosts[x].embedded[y] != "") {
            document.getElementById('embedded' + x + '' + y).innerHTML = this.activePosts[x].embedded[y];
          }
        }
      }
    }
  }
}

