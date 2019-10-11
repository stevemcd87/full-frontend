import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LottoGameDetailComponent } from './lotto-game-detail.component';

describe('LottoGameDetailComponent', () => {
  let component: LottoGameDetailComponent;
  let fixture: ComponentFixture<LottoGameDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LottoGameDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LottoGameDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
