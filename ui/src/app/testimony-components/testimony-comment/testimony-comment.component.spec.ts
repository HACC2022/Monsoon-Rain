import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimonyCommentComponent } from './testimony-comment.component';

describe('TestimonyCommentComponent', () => {
  let component: TestimonyCommentComponent;
  let fixture: ComponentFixture<TestimonyCommentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestimonyCommentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestimonyCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
