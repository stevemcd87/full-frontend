import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LottoGameListComponent } from './lotto-game-list.component';

describe('LottoGameListComponent', () => {
  let component: LottoGameListComponent;
  let fixture: ComponentFixture<LottoGameListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LottoGameListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LottoGameListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
