import { Component, OnInit} from '@angular/core';
import { WebService } from '../services/web.service';
import { ActivatedRoute} from '@angular/router';


@Component({
  selector: 'lotto-games',
  template: `
  <div *ngIf="ws.errors">{{ws.errors}}</div>
  <div *ngFor="let game of ws.lottoGames; let i = index" >
    <button [routerLink] ="['/', ws.lottoGames[i].valueName ]" >{{game.name}}</button>
  </div>
  `
})

export class LottoGamesComponent implements OnInit  {

  constructor(private ws: WebService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.ws.getLottoGames();
  }

}
