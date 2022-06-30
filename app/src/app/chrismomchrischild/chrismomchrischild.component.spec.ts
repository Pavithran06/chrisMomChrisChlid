import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChrismomchrischildComponent } from './chrismomchrischild.component';

describe('ChrismomchrischildComponent', () => {
  let component: ChrismomchrischildComponent;
  let fixture: ComponentFixture<ChrismomchrischildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChrismomchrischildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChrismomchrischildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
