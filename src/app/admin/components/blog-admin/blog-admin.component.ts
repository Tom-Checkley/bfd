import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { BlogAdminService } from '../../services/blog-admin.service';
import { Blog } from '../../../classes/blog';

@Component({
  templateUrl: './blog-admin.component.html',
  styleUrls: ['./blog-admin.component.scss']
})
export class BlogAdminComponent implements OnInit {
  theUser: string;
  menuChoice: string;
  blogPosts: Blog[];

  constructor() { }

  ngOnInit() {
  }

}
