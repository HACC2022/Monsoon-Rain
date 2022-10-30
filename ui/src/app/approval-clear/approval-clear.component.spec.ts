import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovalClearComponent } from './approval-clear.component';

describe('ApprovalClearComponent', () => {
  let component: ApprovalClearComponent;
  let fixture: ComponentFixture<ApprovalClearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApprovalClearComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApprovalClearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
