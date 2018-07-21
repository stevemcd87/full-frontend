import { Component, OnInit, AfterContentChecked } from '@angular/core';
import { WebService } from '../services/web.service';
import { DisplayDataService } from '../services/display-data.service';
import { ActivatedRoute} from '@angular/router';
import { AfterContentInit, OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-selected-game',
  template: `
  <button id="b2g" [routerLink] ="['/' ]">Home Page</button>
  <div *ngIf="ws.lottoGame">
    <h2>{{this.ws.lottoGame.name}}</h2>
  </div>
  <div *ngFor="let option of options">
    <button *ngIf="ws.lottoGame" [routerLink] ="['/',game,option]" (click)="dds.onSelectOption(option)" >{{ws.displayName(option)}}</button>
  </div>

  `
})
// <sg-option *ngIf="ws.selectedOption" ></sg-option>
export class SelectedGameComponent implements OnInit,AfterContentChecked, OnDestroy {
  game = this.route.snapshot.params.game;
  selectedOption;
  options = [
    'lotto-possibilities',
    'winning-history',
    'compared-list'
  ];
  constructor(private ws: WebService, private route: ActivatedRoute,
    private dds: DisplayDataService) { }

  ngOnInit() {
   const game = this.route.snapshot.params.game;
   this.ws.getLottoGames(game);
  }
  ngAfterContentChecked(){
    let tbl = document.getElementById("tableDiv");
    if(this.dds.optionSelected) {
      console.log(this.dds.optionSelected);
      let allTRs = document.querySelectorAll('tr');
      let comparedTR = [];
      let displayedListID = [];
      let selectedOptionListID = [];
      for (let i = 0;i < allTRs.length; i++){
        if (allTRs[i].parentElement.id === 'comparedList'){
          comparedTR.push(allTRs[i]);
        }
      }
      comparedTR.forEach((val,ind) => {
        if (ind !== 0) {
          let id = val.getElementsByClassName('td-id')[0].innerHTML;
         displayedListID.push(+id);
        }
      })
      this.dds.optionSelected.forEach(val => {
        selectedOptionListID.push(val.lotto.id);
      });
      for (let i = 0; i < selectedOptionListID.length; i += 1) {
        if(selectedOptionListID[i] !== displayedListID[i]) {
          return this.dds.onSelectOption('compared-list', this.dds.optionSelected);
        }
      }
    }

  }
  ngOnDestroy(){
      if (document.contains(document.getElementById("tableDiv"))) {
        document.getElementById("tableDiv").remove();
      }
  }
}
