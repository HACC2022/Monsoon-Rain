import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
})
export class AvatarComponent implements OnInit {
  @Input() name!: string;
  initials = '';

  constructor() {}

  ngOnInit(): void {
    const initials = this.name.split(' ');

    this.initials = `${initials[0][0]}${initials[1][0]}`;
  }
}
