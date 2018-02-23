import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  name: string;
  email: string;
  password1: string;
  password2: string;
  passwordFail = false;

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
  }

  signUp() {
    if (this.password1 !== this.password2) {
      this.passwordFail = true;
    } else {
      this.passwordFail = false;
      this.userService.register(this.email, this.password1);
      this.userService.verifyUser();
    }
  }

}
