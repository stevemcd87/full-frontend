import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WinningNumberDetailComponent } from './winning-number-detail.component';

describe('WinningNumberDetailComponent', () => {
  let component: WinningNumberDetailComponent;
  let fixture: ComponentFixture<WinningNumberDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WinningNumberDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WinningNumberDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
