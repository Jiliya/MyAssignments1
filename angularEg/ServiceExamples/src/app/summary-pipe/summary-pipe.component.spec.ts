import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryPipeComponent } from './summary-pipe.component';

describe('SummaryPipeComponent', () => {
  let component: SummaryPipeComponent;
  let fixture: ComponentFixture<SummaryPipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SummaryPipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SummaryPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
