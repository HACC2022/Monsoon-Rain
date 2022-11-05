import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionUncategorizedComponent } from './action-uncategorized.component';

describe('ActionUncategorizedComponent', () => {
  let component: ActionUncategorizedComponent;
  let fixture: ComponentFixture<ActionUncategorizedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActionUncategorizedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActionUncategorizedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
