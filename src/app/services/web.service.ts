import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import { error } from 'util';
import { ILottoGame, ILottoDetails } from '../interface';

@Injectable()
export class WebService {
  selectedOption;
  selectedOptionName;
  gameOption;
  lottoGame;
  lottoGames;

  options = [
    { "lottoPossibilities" : [ "id", "lotto" ]},
    { "winningHistory" : [ "date", "time", "winningNumbers" ]},
    { "comparedList" : [ "boxNumber", "lotto", "straightNumber", "winningDates" ]},
  ];//, "numberDate"
  constructor(private http: Http) {
    this.getLottoGames();
   }

  getLottoGames(game?, option?) {
    let selectedGame;
    if (option) {
      selectedGame = '' + game +'/'+ option;
    } else {
      selectedGame = (game) ? '' + game : ''
    }
    this.http.get('http://localhost:59874/' + selectedGame).subscribe(res => {
      if(option) {
        return this.gameOption = res.json();
      } else if(selectedGame.length > 0) {
      return this.lottoGame = res.json();
    } else {
      return this.lottoGames = res.json(); 
    }
    }, error => {
      if(selectedGame.length > 0) {
        console.error('Error in getting lotto game');
      } else {
        console.error('Error in getting lotto games');
      } // NEED AN ERROR FOR GAME OPTION
    });
  }// End of getLottoGames()

  displayName(option) {
    let clone = option.split("-");
    clone.forEach((element, ind, arr) => {
     arr[ind] =  element.charAt(0).toUpperCase() + element.slice(1);
    }); 
    clone = clone.join(" ");
    return clone;
  }

  orderBy(array : any[], objectKey : string, direction : string) { 
    switch (direction) {
      case 'up':
        array.sort((a, b) => {
          return a[`${objectKey}`] - b[`${objectKey}`];
        });
        break;
      case 'down':
        array.sort((a, b) => {
          return b[`${objectKey}`] - a[`${objectKey}`];
        });
        break;
    }
    return array;
  } // End of OrderBy()
  createNumberDate(array){
      array.forEach((val, ind )=> {
             val.numberDate = string2NumberDate(val.date);
      });
      return array;
      function string2NumberDate(date : string) : number {
          let century;
          let arrayDate = date.split("/")
          const dayDate = Number(arrayDate.slice(1, 2));
          const monthDate = Number(arrayDate.slice(0, 1)) - 1;
          let yearDate = Number(arrayDate.slice(2));
          (yearDate > 80) ? century = 1900 : century = 2000;
          yearDate += century;
          return new Date(yearDate, monthDate, dayDate).getTime();
      } // End of string2NumberDate
  } // End of CreateNumverDate()
}
