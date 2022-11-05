import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionTestimonyComponent } from './action-testimony.component';

describe('ActionTestimonyComponent', () => {
  let component: ActionTestimonyComponent;
  let fixture: ComponentFixture<ActionTestimonyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActionTestimonyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActionTestimonyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
