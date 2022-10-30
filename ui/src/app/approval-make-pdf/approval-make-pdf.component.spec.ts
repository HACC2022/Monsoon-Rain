import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovalMakePdfComponent } from './approval-make-pdf.component';

describe('ApprovalMakePdfComponent', () => {
  let component: ApprovalMakePdfComponent;
  let fixture: ComponentFixture<ApprovalMakePdfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApprovalMakePdfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApprovalMakePdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
