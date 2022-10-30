import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillFetchActionComponent } from './bill-fetch-action.component';

describe('BillFetchActionComponent', () => {
  let component: BillFetchActionComponent;
  let fixture: ComponentFixture<BillFetchActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BillFetchActionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BillFetchActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
