import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovalStageComponent } from './approval-stage.component';

describe('ApprovalStageComponent', () => {
  let component: ApprovalStageComponent;
  let fixture: ComponentFixture<ApprovalStageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApprovalStageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApprovalStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
