import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThankyouTemplateComponent } from './thankyou-template.component';

describe('ThankyouTemplateComponent', () => {
  let component: ThankyouTemplateComponent;
  let fixture: ComponentFixture<ThankyouTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThankyouTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThankyouTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
