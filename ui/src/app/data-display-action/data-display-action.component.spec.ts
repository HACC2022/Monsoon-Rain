import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataDisplayActionComponent } from './data-display-action.component';

describe('DataDisplayActionComponent', () => {
  let component: DataDisplayActionComponent;
  let fixture: ComponentFixture<DataDisplayActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataDisplayActionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataDisplayActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
