import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimonyTableComponent } from './testimony-table.component';

describe('TestimonyTableComponent', () => {
  let component: TestimonyTableComponent;
  let fixture: ComponentFixture<TestimonyTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestimonyTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestimonyTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
