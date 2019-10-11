import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LottoGameDetailOptionComponent } from './lotto-game-detail-option.component';

describe('LottoGameDetailOptionComponent', () => {
  let component: LottoGameDetailOptionComponent;
  let fixture: ComponentFixture<LottoGameDetailOptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LottoGameDetailOptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LottoGameDetailOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
