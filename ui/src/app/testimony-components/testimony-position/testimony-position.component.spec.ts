import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimonyPositionComponent } from './testimony-position.component';

describe('TestimonyPositionComponent', () => {
  let component: TestimonyPositionComponent;
  let fixture: ComponentFixture<TestimonyPositionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestimonyPositionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestimonyPositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
