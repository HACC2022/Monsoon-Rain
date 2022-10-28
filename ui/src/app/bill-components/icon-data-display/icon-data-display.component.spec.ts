import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconDataDisplayComponent } from './icon-data-display.component';

describe('IconDataDisplayComponent', () => {
  let component: IconDataDisplayComponent;
  let fixture: ComponentFixture<IconDataDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconDataDisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconDataDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
