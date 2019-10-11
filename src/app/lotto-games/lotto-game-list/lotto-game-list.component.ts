import { Component, OnInit } from '@angular/core';
import { LottoGameService } from '../lotto-game.service';
import { ActivatedRoute } from '@angular/router';

import { ILottoGame } from '../../interface';

@Component({
  selector: 'app-lotto-game-list',
  templateUrl: './lotto-game-list.component.html',
  styleUrls: ['./lotto-game-list.component.css']
})
export class LottoGameListComponent implements OnInit {
  lottoGames: ILottoGame[]
  constructor(
    private lgs: LottoGameService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.showLottoGames();
  }

  showLottoGames(): void {
    this.lgs.getLottoGames()
      .subscribe((data: ILottoGame[]) => {
        this.lottoGames = data;
      }, error => {
        console.error('Error in getting lotto games');
      });
  }
}
