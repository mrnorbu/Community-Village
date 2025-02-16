/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GridValuesComponent } from './grid-values.component';

describe('GridValuesComponent', () => {
  let component: GridValuesComponent;
  let fixture: ComponentFixture<GridValuesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridValuesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridValuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
