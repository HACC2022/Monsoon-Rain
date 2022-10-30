import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimonyCommentsComponent } from './testimony-comments.component';

describe('TestimonyCommentComponent', () => {
  let component: TestimonyCommentsComponent;
  let fixture: ComponentFixture<TestimonyCommentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestimonyCommentsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TestimonyCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
