import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-testimony-position',
  templateUrl: './testimony-position.component.html',
  styleUrls: ['./testimony-position.component.scss'],
})
export class TestimonyPositionComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {}

  testimonyForm = this.formBuilder.group({
    position: '',
    testimony: '',
  });

  submitTestimony() {
    console.log(this.testimonyForm.value);
  }

  ngOnInit(): void {}
}
