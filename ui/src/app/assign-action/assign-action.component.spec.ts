import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignActionComponent } from './assign-action.component';

describe('AssignActionComponent', () => {
  let component: AssignActionComponent;
  let fixture: ComponentFixture<AssignActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignActionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssignActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
