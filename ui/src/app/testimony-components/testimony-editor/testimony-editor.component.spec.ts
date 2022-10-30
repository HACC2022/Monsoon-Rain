import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimonyEditorComponent } from './testimony-editor.component';

describe('TestimonyEditorComponent', () => {
  let component: TestimonyEditorComponent;
  let fixture: ComponentFixture<TestimonyEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestimonyEditorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestimonyEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
