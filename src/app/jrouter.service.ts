import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {routerNgProbeToken} from '@angular/router/src/router_module';

@Injectable({
  providedIn: 'root'
})
export class JRouter {

  constructor(private router: Router) { }

  navigate = (route:string, callback?: (...n) => any) =>  {
    if(route.substr(0,5) === 'https') {
      location.href = route;
    } else {
      document.body.style.backgroundColor = '#eaf6ff';
      this.router.navigate([route]).then(() => {
        if(callback) {
          callback();
        }
      });
    }

  }
}
