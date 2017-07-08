import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSelectMoveComponent } from './form-select-move.component';

describe('FormSelectMoveComponent', () => {
  let component: FormSelectMoveComponent;
  let fixture: ComponentFixture<FormSelectMoveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormSelectMoveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormSelectMoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
