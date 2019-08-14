import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../services/user.service';
import { User } from '../model/user.model';
declare var $: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})

export class NavbarComponent implements OnInit {
  menuItems: any[];
  isUserSignedIn: boolean;
  user: User;

  constructor(private userService: UserService, private router: Router) {
    this.userService.isAuthenticated.subscribe(auth => this.isUserSignedIn = auth);
    this.user = this.userService.getCurrentUser();
  }

  ngOnInit() {
  }

  isMobileMenu() {
    if ($(window).width() > 991) {
      return false;
    }
    return true;
  }

  logout() {
    this.userService.logout().subscribe((data: any) => {
      this.router.navigate(['home']);
    });
  }
}
