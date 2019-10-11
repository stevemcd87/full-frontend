import { Component, OnInit } from '@angular/core';
import { WebService } from '../services/web.service';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

import { ILottoGame } from '../interface';


@Component({
  selector: 'lotto-games',
  template: `
  <div *ngIf="ws.errors">{{ws.errors}}</div>
  <div *ngFor="let game of this.lottoGames; let i = index" >
    <button [routerLink] ="['/', this.lottoGames[i].valueName ]" >{{game.name}}</button>
  </div>
  `
})

export class LottoGamesComponent implements OnInit {
  lottoGames: ILottoGame[]
  constructor(private ws: WebService, private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.showLottoGames();
  }

  showLottoGames(): void {
    this.ws.getLottoGames()
      .subscribe((data: ILottoGame[]) => {
        this.lottoGames = data;
      }, error => {
        console.error('Error in getting lotto games');
      });
  }

}
