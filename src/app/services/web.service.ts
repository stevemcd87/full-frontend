import { Injectable } from '@angular/core';
// import { Http } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { ILottoGame, ILotto, IWinningHistory, IComparedLotto } from '../interface';

@Injectable()
export class WebService {
  lottoGameOption: Array<ILotto | IWinningHistory | IComparedLotto>;
  lottoGame: ILottoGame;
  lottoGames: Array<ILottoGame>;
  nodeEndPoint = 'http://localhost:59874';

  options = [
    { "lottoPossibilities": ["id", "lotto"] },
    { "winningHistory": ["date", "time", "winningNumbers"] },
    { "comparedList": ["boxNumber", "lotto", "straightNumber", "winningDates"] },
  ];
  constructor(private http: HttpClient) { }
  
  orderBy(array: any[], objectKey: string, direction: string) {
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

  createNumberDate(array) {
    array.forEach((val, ind) => {
      val.numberDate = string2NumberDate(val.date);
    });
    return array;
    function string2NumberDate(date: string): number {
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
