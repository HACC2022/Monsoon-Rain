import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimony-comment',
  templateUrl: './testimony-comment.component.html',
  styleUrls: ['./testimony-comment.component.scss'],
})
export class TestimonyCommentComponent implements OnInit {
  @Input() name?: string;
  @Input() createdAt?: string;
  @Input() message?: string;

  constructor() {}

  ngOnInit(): void {}
}
