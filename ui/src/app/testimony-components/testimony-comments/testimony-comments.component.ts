import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CommentService } from 'src/app/comment.service';

@Component({
  selector: 'app-testimony-comments',
  templateUrl: './testimony-comments.component.html',
  styleUrls: ['./testimony-comments.component.scss'],
})
export class TestimonyCommentsComponent implements OnInit {
  @Input() billId!: number;
  comment: string = '';

  constructor(private commentService: CommentService) {}

  setComment(event: Event) {
    const target = event.target as HTMLTextAreaElement;
    const { value } = target;
    this.comment = value;
  }

  submitComment(event: Event) {
    event.preventDefault();

    console.log(this.comment);
    if (this.comment) {
      this.commentService.createComment(this.billId, this.comment);
    }
  }

  ngOnInit(): void {}
}
