import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WinningHistoryComponent } from './winning-history.component';

describe('WinningHistoryComponent', () => {
  let component: WinningHistoryComponent;
  let fixture: ComponentFixture<WinningHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WinningHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WinningHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
