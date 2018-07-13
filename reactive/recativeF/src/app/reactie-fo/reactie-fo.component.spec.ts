import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactieFoComponent } from './reactie-fo.component';

describe('ReactieFoComponent', () => {
  let component: ReactieFoComponent;
  let fixture: ComponentFixture<ReactieFoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactieFoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactieFoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
