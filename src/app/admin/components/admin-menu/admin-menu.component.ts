import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-menu',
  templateUrl: './admin-menu.component.html',
  styleUrls: ['./admin-menu.component.scss']
})
export class AdminMenuComponent implements OnInit {
  theUser: string;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.theUser = this.userService.loggedInUser;
  }

  logout() {
    this.userService.logout();
    this.router.navigate(['']);
  }
}
