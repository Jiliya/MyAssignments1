import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TempuratureComponent } from './tempurature.component';

describe('TempuratureComponent', () => {
  let component: TempuratureComponent;
  let fixture: ComponentFixture<TempuratureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TempuratureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TempuratureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
