import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CommentService } from 'src/app/comment.service';
import { TestimonyService } from 'src/app/testimony.service';

@Component({
  selector: 'app-testimony-comments',
  templateUrl: './testimony-comments.component.html',
  styleUrls: ['./testimony-comments.component.scss'],
})
export class TestimonyCommentsComponent implements OnInit {
  @Input() testimonyId?: number;
  @Input() comments?: any[] = [];
  comment = '';

  constructor(
    private commentService: CommentService,
    private testimonyService: TestimonyService
  ) {}

  setComment(event: Event) {
    const target = event.target as HTMLTextAreaElement;
    const { value } = target;
    this.comment = value;
  }

  submitComment(event: Event) {
    event.preventDefault();

    console.log(this.comments);
    if (this.comment && this.testimonyId) {
      this.commentService
        .createComment(this.testimonyId, this.comment)
        .subscribe(() => {
          this.comment = '';
          if (this.testimonyId) {
            this.testimonyService
              .getTestimonyById(this.testimonyId)
              .subscribe();
          }
        });
    }
  }

  ngOnInit(): void {}
}
