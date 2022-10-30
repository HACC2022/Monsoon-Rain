import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovalApprovedComponent } from './approval-approved.component';

describe('ApprovalApprovedComponent', () => {
  let component: ApprovalApprovedComponent;
  let fixture: ComponentFixture<ApprovalApprovedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApprovalApprovedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApprovalApprovedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
