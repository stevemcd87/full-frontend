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
    console.log('winningHistoryComponent');
    console.log(this.sortByDate(this.winningHistory))
  }

  sortByDate(winningHistory) {
    console.log(winningHistory);
  }

  // ngAfterContentChecked(){
  //   console.log(this.winningHistory);
  // }

}
