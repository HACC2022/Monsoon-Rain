import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillActionsComponent } from './bill-actions.component';

describe('BillActionsComponent', () => {
  let component: BillActionsComponent;
  let fixture: ComponentFixture<BillActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BillActionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BillActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
