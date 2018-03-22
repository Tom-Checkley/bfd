import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Blog } from '../../classes/blog';

@Injectable()
export class BlogAdminService {

  createPost(post: Blog) {
    console.log('create post called');
    const storageRef = firebase.storage().ref();
    storageRef.child('images/' + post.imgTitle);
    console.log(storageRef.child('images/' + post.imgTitle));
    const task = storageRef.putString(post.img, 'base64')
    // console.log(task);
    // task.on('state_changed',
    //   function progress (snapshot) {
    //     console.log(snapshot);
    //   },
    //   function error (err) {
    //     console.log(err);
    //   },
    //   function complete() {
    //     console.log('completed');
    //   }
    // )
      .then((snapshot) => {
        console.log(snapshot);
        const url = snapshot.metadata.downloadURLs[0];
        const dbRef = firebase.database().ref('blogPosts/');
        const newPost = dbRef.push();
        newPost.set({
          postTitle: post.postTitle,
          postContent: post.postContent,
          postLocation: post.postLocation,
          posted: post.posted,
          imgTitle: post.imgTitle,
          date: post.date,
          img: url,
          id: newPost.key
        });
      })
      .catch((err) => {
        alert(`failed upload: ${err}`);
      });
  }

  editPost(update: Blog) {
    const dbRef = firebase.database().ref('blogPosts/').child(update.id)
      .update({
        title: update.postTitle,
        content: update.postContent,
        location: update.postLocation
      });
  }

  deletePost(deletePost: Blog) {
    const dbRef = firebase.database().ref('blogPosts/').child(deletePost.id).remove();
    // add flash message
    const imageRef = firebase.storage().ref().child(`images/${deletePost.imgTitle}`)
      .delete()
        .then(() => {
          alert('post deleted');
        })
        .catch((err) => {
          alert(`error: ${err.message}`);
        });
  }

}
