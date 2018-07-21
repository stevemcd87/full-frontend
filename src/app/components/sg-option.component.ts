import { Component, OnInit, OnChanges, AfterContentChecked } from '@angular/core';
import { WebService } from '../services/web.service';
import { ActivatedRoute} from '@angular/router';
// <app-game-nav></app-game-nav>
@Component({
  selector: 'sg-option',
  template: `
  <h2>{{this.ws.selectedOptionName}}</h2>
  `
})  
export class SgOptionComponent implements OnInit, AfterContentChecked {
  game = this.route.snapshot.params.game;
  lottoGame;
  constructor(private ws: WebService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.ws.getLottoGames(this.game);
  }
  ngAfterContentChecked(){
    console.log('afterChecked');
  }
}