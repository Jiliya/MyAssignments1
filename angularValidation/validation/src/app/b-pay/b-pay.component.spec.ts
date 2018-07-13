import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BPayComponent } from './b-pay.component';

describe('BPayComponent', () => {
  let component: BPayComponent;
  let fixture: ComponentFixture<BPayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BPayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BPayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
