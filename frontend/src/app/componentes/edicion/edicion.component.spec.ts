/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EdicionComponent } from './edicion.component';

describe('EdicionComponent', () => {
  let component: EdicionComponent;
  let fixture: ComponentFixture<EdicionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdicionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdicionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
