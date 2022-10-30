import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillUpdateIntervalComponent } from './bill-update-interval.component';

describe('BillUpdateIntervalComponent', () => {
  let component: BillUpdateIntervalComponent;
  let fixture: ComponentFixture<BillUpdateIntervalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BillUpdateIntervalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BillUpdateIntervalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
