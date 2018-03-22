import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { BlogAdminService } from '../../services/blog-admin.service';
import { Blog } from '../../../classes/blog';
import { TruncatePipe } from '../../../pipes/truncate.pipe';

@Component({
  templateUrl: './blog-admin.component.html',
  styleUrls: ['./blog-admin.component.scss']
})
export class BlogAdminComponent implements OnInit {
  theUser: string;
  menuChoice: string;
  blogPosts: Blog[];
  formDisplay = true;
  singlePost: Blog;

  constructor(
    private userService: UserService,
    private router: Router,
    private blogAdminService: BlogAdminService
  ) { }

  ngOnInit() {
    this.theUser = this.userService.loggedInUser;
    this.getPosts();
  }

  logout() {
    this.userService.logout();
    this.router.navigate(['']);
  }

  chooseMode(mode: string) {
    this.menuChoice = mode;
  }

  getPosts() {
    const dbRef = firebase.database().ref('blogPosts/');
    dbRef.once('value')
      .then((snapshot) => {
        const tmp: string[] = snapshot.val();
        this.blogPosts = Object.keys(tmp).map(key => tmp[key]);
      });
  }

  editPost(thePost: Blog) {
    this.singlePost = thePost;
    this.formDisplay = false;
  }

  cancelEdit() {
    this.formDisplay = true;
  }

  updatePost(single: Blog) {
    this.blogAdminService.editPost(single);
    this.formDisplay = true;
  }

  deletePost(single: Blog) {
  const verify = confirm(`Are you sure you want to delete this post?`);
    if (verify) {
      this.blogAdminService.deletePost(single);
      this.router.navigate(['/admin/']);
    }
  }

}
