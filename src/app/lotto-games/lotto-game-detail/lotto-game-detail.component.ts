import { Component, OnInit } from '@angular/core';
import { LottoGameService } from '../lotto-game.service';
// import { DisplayDataService } from '../../services/display-data.service';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { ILottoGame } from '../../interface';
@Component({
  selector: 'app-lotto-game-detail',
  templateUrl: './lotto-game-detail.component.html',
  styleUrls: ['./lotto-game-detail.component.css']
})
export class LottoGameDetailComponent implements OnInit {
  lottoGame: ILottoGame;
  snapshotId = 0;
  options = [
    'lotto-possibilities',
    'winning-history',
    'compared-list'
  ];

  constructor(
    private lgs: LottoGameService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.showLottoGame();
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.showLottoGame();
      }
    })

  }

  showLottoGame() {
    const game = this.route.snapshot.paramMap.get('game');
    this.lgs.getLottoGame(game)
      .subscribe((data: ILottoGame) => {
        this.lottoGame = data;
      }, error => {
        console.error('Error in getting lotto game');
      });
  }
}
