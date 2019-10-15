import { Component, OnInit, Input } from '@angular/core';
import { IComparedLotto } from '../../../interface';
@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {
  @Input() statistics: IComparedLotto[];
  @Input() lottoGameName: string;
  startRange = 0;
  endRange = 10;
  constructor() { }

  ngOnInit() {
    console.log('statistics');
    console.log(this.statistics);
  }

  updateRange(e){
    let elementId = e.target.id,
    max = this.statistics.length;
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
