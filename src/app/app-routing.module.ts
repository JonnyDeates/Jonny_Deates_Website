import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TicTacToeComponent} from './tsprojects/tic-tac-toe/tic-tac-toe.component';
import {BlogComponent} from './blog/blog.component';
import {ProjectsComponent} from './projects/projects.component';
import {AboutMeComponent} from './about-me/about-me.component';
import {HomeComponent} from './home/home.component';
import {ResumeComponent} from './resume/resume.component';

const routes: Routes = [  { path: '', component: HomeComponent },
  { path: 'about', component: AboutMeComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'resume', component: ResumeComponent },
  { path: 'tic-tac-toe', component: TicTacToeComponent },
  { path: '', redirectTo: '', pathMatch: 'full'},
  { path: '**', component: HomeComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
