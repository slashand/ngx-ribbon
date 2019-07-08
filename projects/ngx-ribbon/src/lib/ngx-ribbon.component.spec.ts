import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxRibbonComponent } from './ngx-ribbon.component';

describe('NgxRibbonComponent', () => {
  let component: NgxRibbonComponent;
  let fixture: ComponentFixture<NgxRibbonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxRibbonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxRibbonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
