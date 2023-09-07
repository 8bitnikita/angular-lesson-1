import { Component } from '@angular/core';

export interface IPost {
  title: string;
  description: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public posts: IPost[] = [];

  public addPost(post: IPost): void {
    this.posts.push(post);
  }
}
