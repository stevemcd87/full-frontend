import { Component, OnInit } from '@angular/core';
import { WebService } from '../services/web.service';
import { DisplayDataService } from '../services/display-data.service';
import { ActivatedRoute } from '@angular/router';
import { ILottoGame } from '../interface';

@Component({
  selector: 'app-selected-game',
  template: `
  <button [routerLink] ="['/' ]">Home Page</button>

    <h2 *ngIf="this.lottoGame">{{this.lottoGame.name}}</h2>
    <div *ngFor="let option of options">
      <button *ngIf="lottoGame" [routerLink] ="['/',lottoGameName,option]">{{ws.displayName(option)}}</button>
    </div>

  `
})

// <app-lotto-game-options
//   *ngIf="this.lottoGame"
//   [lottoGame]=this.lottoGame
// ></app-lotto-game-options>

export class SelectedGameComponent implements OnInit {
  params = this.route.snapshot.params;
  game = this.params.game;
  lottoGame: ILottoGame;
  options = [
    'lotto-possibilities',
    'winning-history',
    'compared-list'
  ];

  constructor(private ws: WebService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.showLottoGame();
  }

  showLottoGame() {
    this.ws.getLottoGame(this.game)
      .subscribe((data: ILottoGame) => {
        this.lottoGame = data;
        console.log(this.lottoGame);
      }, error => {
        console.error('Error in getting lotto game');
      });
  }

}
