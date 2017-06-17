import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HighLowComponent } from './high-low.component';

describe('HighLowComponent', () => {
  let component: HighLowComponent;
  let fixture: ComponentFixture<HighLowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HighLowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HighLowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
