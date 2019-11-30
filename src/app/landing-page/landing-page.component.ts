import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.sass']
})
export class LandingPageComponent implements OnInit {

  isUserAuthenticated = false;
  constructor(userService: UserService) {
    userService.isAuthenticated.subscribe(data => {
      console.log(data);
      this.isUserAuthenticated = data;
    });
   }

  ngOnInit() {
  }

}
