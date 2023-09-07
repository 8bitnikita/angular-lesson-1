import { Component, EventEmitter, Output } from '@angular/core';
import { IPost } from '../app.component';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  public title: string = '';
  public description: string = '';

  @Output() public postEmiter: EventEmitter<IPost> = new EventEmitter();

  public addPost(): void {
    if (this.title.trim() && this.description.trim()) {
      this.postEmiter.emit({
        title: this.title,
        description: this.description,
      });
    }

    this.title = '';
    this.description = '';
  }
}
