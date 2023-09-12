import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IPost } from '../app.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent {
  @Input({ required: true }) public post!: IPost;
  @Output() public onRemovePost = new EventEmitter<number>();

  public removePost(): void {
    this.onRemovePost.emit(this.post.id);
  }
}
