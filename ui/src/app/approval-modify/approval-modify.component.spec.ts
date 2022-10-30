import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovalModifyComponent } from './approval-modify.component';

describe('ApprovalModifyComponent', () => {
  let component: ApprovalModifyComponent;
  let fixture: ComponentFixture<ApprovalModifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApprovalModifyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApprovalModifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
