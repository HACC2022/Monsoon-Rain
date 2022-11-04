import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TestimonyService } from 'src/app/testimony.service';

@Component({
  selector: 'app-testimony-position',
  templateUrl: './testimony-position.component.html',
  styleUrls: ['./testimony-position.component.scss'],
})
export class TestimonyPositionComponent implements OnInit {
  @Input() position = '';
  @Input() body = '';
  @Input() same = false;

  constructor(
    private formBuilder: FormBuilder,
    private testimonyService: TestimonyService,
    private route: ActivatedRoute
  ) {
    console.log(this.position);
    setTimeout(() => {
      // const { position, body, same } = testimonyService.getTestimony();

      this.testimonyForm.setValue({
        position: this.position,
        body: this.body,
        same: this.same,
      });
    }, 1000);
  }

  updateSuccess = false;
  testimonyForm = this.formBuilder.group({
    position: '',
    body: '',
    same: false,
  });

  submitTestimony() {
    const { position, body, same } = this.testimonyForm.value;

    if (position && body && same !== undefined && same !== null) {
      this.route.paramMap.subscribe((params: any) => {
        this.testimonyService
          .updateTestimony(params.params.tid, same, position, body)
          .subscribe(() => {
            this.updateSuccess = true;

            setTimeout(() => (this.updateSuccess = false), 5000);
          });
      });
    }
  }

  ngOnInit(): void {}
}
