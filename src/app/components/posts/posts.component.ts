import { NotFoundError } from '../../common/not-found-error';
import { BadInput } from '../../common/bad-input';
import { AppError } from '../../common/app-error';
import { PostService } from '../../services/post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts!: any[];

  constructor(private service: PostService) {
  }

  ngOnInit() {
    this.getPosts()
  }

  getPosts() {
    this.service.getAll()
      .subscribe({
        next: (posts: any) => this.posts = posts
      });
  }

  createPost(input: HTMLInputElement) {
    let post: any = { title: input.value };
    input.value = '';

    this.service.create(post)
      .subscribe({
        next: (newPost: any) => {
          post['id'] = newPost.id;
          this.posts.splice(0, 0, post);
        },
        error: (error: AppError) => {
          if (error instanceof BadInput) {
            // this.form.setErrors(error.originalError);
          }
          else throw error;
        }
      })
  }

  updatePost(post: any) {
    this.service.update(post)
      .subscribe(
        updatedPost => {
          console.log(updatedPost);
        });
  }

  deletePost(post: any) {
    this.service.delete(post.id)
      .subscribe({
        next: () => {
          let index = this.posts.indexOf(post);
          this.posts.splice(index, 1);
        },
        error: (error: AppError) => {
          if (error instanceof NotFoundError)
            alert('This post has already been deleted.');
          else throw error;
        }
      })
  }
}
