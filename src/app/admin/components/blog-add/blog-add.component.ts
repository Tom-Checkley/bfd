import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BlogAdminService } from '../../services/blog-admin.service';
import { Blog } from '../../../classes/blog';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-blog-add',
  templateUrl: './blog-add.component.html',
  styleUrls: ['./blog-add.component.scss']
})
export class BlogAddComponent {
  imgTitle: string;
  imageSrc: string;
  postTitle: string;
  content: string;
  location: string;
  post: Blog;

  constructor(private blogAdminService: BlogAdminService, private router: Router) { }

  fileLoad($event: any) {
    const myFile: FileReader = new FileReader();
    const file: File = $event.target.files[0];
    this.imgTitle = file.name;
    myFile.readAsDataURL(file);

    myFile.onload = (e: any) => {
      this.imageSrc = e.target.result;
    };
  }

  createPost() {
    this.post = new Blog (
      this.postTitle,
      this.content,
      this.location,
      this.imgTitle,
      this.imageSrc.substring(23)
    );
    this.blogAdminService.createPost(this.post);

    // Add flash message;

    this.router.navigate(['/admin']);
  }

  cancel() {
    this.router.navigate(['/admin']);
  }


}
