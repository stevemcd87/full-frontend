import { Component, OnInit } from '@angular/core';
import { WebService } from '../services/web.service';
import { DisplayDataService } from '../services/display-data.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Location } from '@angular/common';
import { ILottoGame } from '../interface';


@Component({
  selector: 'app-selected-game',
  template: `
  <button (click)="goBack()">Back</button>

    <h2 *ngIf="this.lottoGame">{{this.lottoGame.name}}</h2>
    <div *ngFor="let option of options">
      <button
        *ngIf="lottoGame"
        
        routerLinkActive="active"
        >
        {{ws.displayName(option)}}
      </button>
    </div>
  `,
  styles: [
    '.active { font-weight: bold; }'
  ]
})

// <app-lotto-game-options
//   *ngIf="this.lottoGame"
//   [lottoGame]=this.lottoGame
// ></app-lotto-game-options>

export class SelectedGameComponent implements OnInit {
  lottoGame: ILottoGame;
  options = [
    'lotto-possibilities',
    'winning-history',
    'compared-list'
  ];

  constructor(
    private ws: WebService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location
  ) { }

  ngOnInit() {
    // this.hero$ = this.route.paramMap.pipe(
    //   switchMap((params: ParamMap) =>
    //     this.service.getHero(params.get('id')))
    // );
    this.showLottoGame();
  }

  showLottoGame() {
    const game = this.route.snapshot.paramMap.get('game');
    this.ws.getLottoGame(game)
      .subscribe((data: ILottoGame) => {
        this.lottoGame = data;
        console.log(this.lottoGame);
      }, error => {
        console.error('Error in getting lotto game');
      });
  }

  goBack(): void {
    this.location.back();
  }

}
