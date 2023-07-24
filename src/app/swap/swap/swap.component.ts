import { Component, OnInit } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-swap',
  templateUrl: './swap.component.html',
  styleUrls: ['./swap.component.scss']
})
export class SwapComponent implements OnInit {

  constructor(private readonly router: Router) {
    router.events
    .subscribe((event: NavigationStart) => {
      if (event.navigationTrigger === 'popstate') {
        console.log("swap: ", event.url);
        // debugger;
      }
    });
    // router.events
//     .subscribe((event: NavigationEnd) => {
//       const x=0;
//       console.log("swap: ", event.url);
//     });
   }

  ngOnInit(): void {
  }

  back(){
    history.back();
  }
}
