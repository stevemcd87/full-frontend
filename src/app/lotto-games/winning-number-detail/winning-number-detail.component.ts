import { Component, OnInit } from '@angular/core';
import { LottoGameService } from '../lotto-game.service';
import { IComparedLotto } from '../../interface';
import { ActivatedRoute ,Router, NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-winning-number-detail',
  templateUrl: './winning-number-detail.component.html',
  styleUrls: ['./winning-number-detail.component.css']
})
export class WinningNumberDetailComponent implements OnInit {

  game = this.route.parent.snapshot.paramMap.get('game');
  winningNumber = this.route.snapshot.paramMap.get('winningNumber');
  statistic: IComparedLotto;
  constructor(
    private lgs: LottoGameService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.showStatistics();
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.showStatistics();
        console.log(this.statistic)
      }
    })
  }

  showStatistics(): void {
    this.game = this.route.parent.snapshot.paramMap.get('game');
    this.winningNumber = this.route.snapshot.paramMap.get('winningNumber');
    this.lgs.getWinningNumberDetail(this.game, this.winningNumber)
      .subscribe((data: IComparedLotto) => {
        this.statistic = data;
        console.log(this.statistic)
      }, error => {
        console.error('Error in getting lotto game option');
      });
  }


}
