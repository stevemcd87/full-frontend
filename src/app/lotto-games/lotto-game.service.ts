import { Injectable } from '@angular/core';
// import { Http } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { ILottoGame, ILotto, IWinningHistory, IComparedLotto } from '../interface';

@Injectable()
export class LottoGameService {
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

  getLottoGames(): Observable<ILottoGame[]> {
    return this.http.get<ILottoGame[]>(this.nodeEndPoint)
      .pipe(
        tap(_ => console.log('fetched Lotto Games')),
        catchError(this.handleError<ILottoGame[]>('getLottoGames', []))
      );
  }

  getLottoGame(game: string): Observable<ILottoGame> {
    const url = `${this.nodeEndPoint}/lotto-games/${game}`;
    return this.http.get<ILottoGame>(url)
      .pipe(
        tap(_ => console.log(`fetched Lotto Game: ${game}`)),
        catchError(this.handleError<ILottoGame>(`getLottoGame id=${game}`))
      );
  }

  getLottoGameOption(game: string, option: string): Observable<ILotto[] | IWinningHistory[] | IComparedLotto[]> {
    const url = `${this.nodeEndPoint}/lotto-games/${game}/${option}`
    return this.http.get<ILotto[] | IWinningHistory[] | IComparedLotto[]>(url)
      .pipe(
        tap(_ => console.log(`fetched Lotto Game option: ${option}`)),
        catchError(this.handleError<ILotto[] | IWinningHistory[] | IComparedLotto[]>(`getLottoGameOption game=${game} option=${option}`))
      );
  }


  optionValue(option: string): string {
    if (option) {
      let optionWords = option.split('-'),
        capitalLetter = optionWords[1].slice(0, 1).toUpperCase();
      optionWords[1] = capitalLetter + optionWords[1].slice(1);
      return optionWords.join('')
    }
  }


  displayName(option) {
    return (
      option
        .split("-")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")
    )
  }

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

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
