import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PosseComponent } from './posse.component';

describe('PosseComponent', () => {
  let component: PosseComponent;
  let fixture: ComponentFixture<PosseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PosseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PosseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
