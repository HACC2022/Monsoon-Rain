import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillSearchComponent } from './bill-search.component';

describe('BillSearchComponent', () => {
  let component: BillSearchComponent;
  let fixture: ComponentFixture<BillSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BillSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BillSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
