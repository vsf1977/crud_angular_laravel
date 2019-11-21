/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BorradoComponent } from './borrado.component';

describe('BorradoComponent', () => {
  let component: BorradoComponent;
  let fixture: ComponentFixture<BorradoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BorradoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BorradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
