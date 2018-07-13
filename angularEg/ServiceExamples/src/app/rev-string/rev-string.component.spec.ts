import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RevStringComponent } from './rev-string.component';

describe('RevStringComponent', () => {
  let component: RevStringComponent;
  let fixture: ComponentFixture<RevStringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RevStringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RevStringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
