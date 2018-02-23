import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  email: string;
  password1: string;
  password2: string;
  passwordFail = false;

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
  }

}
