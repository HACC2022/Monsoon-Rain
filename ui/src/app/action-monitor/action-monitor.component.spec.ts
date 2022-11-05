import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionMonitorComponent } from './action-monitor.component';

describe('ActionMonitorComponent', () => {
  let component: ActionMonitorComponent;
  let fixture: ComponentFixture<ActionMonitorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActionMonitorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActionMonitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
