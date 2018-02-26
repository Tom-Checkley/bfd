import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Blog } from '../../classes/blog';

@Injectable()
export class BlogAdminService {

  createPost(post: Blog) {
    const storageRef = firebase.storage().ref();
    storageRef.child(`blogImg/${post.imgTitle}`).putString(post.img, 'base64')
      .then((snapshot) => {
        const url = snapshot.metadata.downloadURLs[0];
        const dbRef = firebase.database().ref('blogPosts/');
        const newPost = dbRef.push();
        newPost.set({
          title: post.title,
          content: post.content,
          location: post.location,
          imgTitle: post.imgTitle,
          img: url,
          id: newPost.key
        });
      })
      .catch((err) => {
        alert(`failed upload: ${err.message}`);
      });
  }

}
