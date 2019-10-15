import { Component, OnInit, Input } from '@angular/core';
import { IWinningHistory } from '../../../interface';
import { Router, NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-winning-history',
  templateUrl: './winning-history.component.html',
  styleUrls: ['./winning-history.component.css']
})
export class WinningHistoryComponent implements OnInit {
  @Input() winningHistory: IWinningHistory[];
  @Input() lottoGameName: string;
  startRange = 0;
  endRange = 10;

  constructor(
    // private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    // this.router.events.subscribe(event => {
    //   if (event instanceof NavigationEnd) {
        console.log(this.winningHistory);
    //   }
    // })

  }

  updateRange(e){
    let elementId = e.target.id,
    max = this.winningHistory.length;
    if (elementId === 'up-arrow') {
      if (this.endRange >= max) return
      this.startRange += 10;
      this.endRange += 10;
    } else {
      if (this.startRange === 0) return
      this.startRange -= 10;
      this.endRange -= 10;
    }
  }

}
