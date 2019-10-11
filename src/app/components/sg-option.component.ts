import { Component, OnInit, Input } from '@angular/core';
import { WebService } from '../services/web.service';
import { ActivatedRoute } from '@angular/router';
import { ILotto, IWinningHistory, ILottoGame, IComparedLotto } from '../interface';
// <app-game-nav></app-game-nav>
@Component({
  selector: 'app-sg-option',
  template: `
  <h2 *ngIf=ws.lottoGame>{{ws.lottoGame.name}}</h2>
  `
})
export class SgOptionComponent implements OnInit {
  params = this.route.snapshot.params;
  game = this.params.game;
  option = this.params.option;
  constructor(private ws: WebService, private route: ActivatedRoute) { }

  ngOnInit() {
    console.log(this.params)
    // this.showLottoGameOption();

  }
  // showLottoGameOption() {
  //   this.ws.getLottoGameOption(this.game, this.option)
  //     .subscribe((data: <ILotto | IWinningHistory | IComparedLotto>) => {
  //     this.lottoGame = data;
  //     console.log(this.lottoGame);
  //   }, error => {
  //     console.error('Error in getting lotto game');
  //   });
  // }
}
