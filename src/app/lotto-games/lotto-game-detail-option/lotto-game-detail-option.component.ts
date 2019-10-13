import { Component, OnInit } from '@angular/core';
import { LottoGameService } from '../lotto-game.service';
// import { DisplayDataService } from '../../services/display-data.service';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { ILotto, IWinningHistory, IComparedLotto } from '../../interface';

@Component({
  selector: 'app-lotto-game-detail-option',
  templateUrl: './lotto-game-detail-option.component.html',
  styleUrls: ['./lotto-game-detail-option.component.css']
})
export class LottoGameDetailOptionComponent implements OnInit {

  lottoGameOption: Array<ILotto | IWinningHistory | IComparedLotto>;
  game = this.route.parent.snapshot.paramMap.get('game');
  option = this.route.snapshot.paramMap.get('option');
  constructor(
    private lgs: LottoGameService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.showLottoGameOption();
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.showLottoGameOption();
      }
    })
  }

  showLottoGameOption(): void {
    this.game = this.route.parent.snapshot.paramMap.get('game');
    this.option = this.route.snapshot.paramMap.get('option');
    this.lgs.getLottoGameOption(this.game, this.option)
      .subscribe((data: Array<ILotto | IWinningHistory | IComparedLotto>) => {
        this.lottoGameOption = data;
      }, error => {
        console.error('Error in getting lotto game option');
      });
  }
}
