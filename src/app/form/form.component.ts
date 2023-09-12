import {
  Component,
  ElementRef,
  EventEmitter,
  AfterViewInit,
  Output,
  ViewChild,
} from '@angular/core';
import { IPost } from '../app.component';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements AfterViewInit {
  public title: string = '';
  public description: string = '';
  public isFocused: boolean = false;

  @Output() public postEmiter = new EventEmitter<IPost>();
  @ViewChild('titleInput') public inputRef!: ElementRef;
  @ViewChild('descriptionInput') public inputDescRef!: ElementRef;

  public addPost(): void {
    if (this.title.trim() && this.description.trim()) {
      this.postEmiter.emit({
        id: Date.now(),
        title: this.title,
        description: this.description,
      });
    }

    this.title = '';
    this.description = '';
  }

  public focusInput(): void {
    if (!this.isFocused) {
      this.inputRef.nativeElement.focus();
      this.isFocused = true;
    } else {
      this.inputDescRef.nativeElement.focus();
      this.isFocused = false;
    }
  }

  ngAfterViewInit(): void {
    this.focusInput();
  }
}
