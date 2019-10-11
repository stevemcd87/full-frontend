import { Component, OnInit } from '@angular/core';
import { LottoGameService } from '../lotto-game.service';
// import { DisplayDataService } from '../../services/display-data.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Location } from '@angular/common';
import { ILottoGame } from '../../interface';
@Component({
  selector: 'app-lotto-game-detail',
  templateUrl: './lotto-game-detail.component.html',
  styleUrls: ['./lotto-game-detail.component.css']
})
export class LottoGameDetailComponent implements OnInit {
  lottoGame: ILottoGame;
  options = [
    'lotto-possibilities',
    'winning-history',
    'compared-list'
  ];

  constructor(
    private lgs: LottoGameService,
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
    this.lgs.getLottoGame(game)
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
