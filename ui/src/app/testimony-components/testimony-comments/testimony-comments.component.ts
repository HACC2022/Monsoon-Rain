import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-testimony-comments',
  templateUrl: './testimony-comments.component.html',
  styleUrls: ['./testimony-comments.component.scss'],
})
export class TestimonyCommentsComponent implements OnInit {
  comment: string = '';

  constructor() {}

  setComment(event: Event) {
    const target = event.target as HTMLTextAreaElement;
    const { value } = target;
    this.comment = value;
  }

  submitComment(event: Event) {
    event.preventDefault();
    console.log(this.comment);
  }

  ngOnInit(): void {}
}
