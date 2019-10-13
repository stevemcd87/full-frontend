import { Component, OnInit, Input } from '@angular/core';
import { IComparedLotto } from '../../../interface';
@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {
  @Input() statistics: IComparedLotto[];
  constructor() { }

  ngOnInit() {
    console.log('statistics');
    console.log(this.statistics);
  }

}
