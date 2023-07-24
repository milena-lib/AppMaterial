import { Component, OnInit } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title = 'AppMaterial';
  constructor(private readonly router: Router) { 
    router.events
    .subscribe((event: NavigationStart) => {
      if (event.navigationTrigger === 'popstate') {
        console.log("home: ", event.url);
        // debugger;
      }
    });
//     router.events
//     .subscribe((event: NavigationEnd) => {
//       const x=0;
//       console.log("home: ", event.url);
//     });
  }

  ngOnInit(): void {
    // debugger;
  }

}
