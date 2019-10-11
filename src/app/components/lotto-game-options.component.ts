import { Component, OnInit, Input, AfterContentInit } from '@angular/core';
import { WebService } from '../services/web.service';
// import { ActivatedRoute } from '@angular/router';
import { ILotto, IWinningHistory, ILottoGame, IComparedLotto } from '../interface';
// <app-game-nav></app-game-nav>
@Component({
  selector: 'app-lotto-game-options',
  template: `
  <div *ngFor="let option of options">
    <button *ngIf="lottoGame" >{{ws.displayName(option)}}</button>
  </div>
  `
})
export class LottoGameOptionsComponent implements OnInit, AfterContentInit {
  @Input() lottoGame: ILottoGame;
  lottoGameName: string;
  constructor(private ws: WebService) { }

  ngOnInit() {
    this.lottoGameName = this.lottoGame.name.replace(' ', '');
  }

  ngAfterContentInit() {

  }
}
