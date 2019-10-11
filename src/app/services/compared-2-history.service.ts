import { Injectable } from '@angular/core';
import { WebService } from './web.service';
import { ILotto, IWinningHistory, ILottoGame, IComparedLotto } from '../interface';
import { Observable } from 'rxjs/Observable';
import { identifierName } from '@angular/compiler';
// import {setInterval} from 'timers';
@Injectable()
export class Compared2HistoryService {

  constructor(private ws: WebService) { }

  compare2History(lottoGame: ILottoGame): IComparedLotto[] {
    const lottoPossibilities = lottoGame.lottoPossibilities,
      winningHistory = lottoGame.winningHistory,
      comparedList: IComparedLotto[] = [];
    let moneyWon = 0;
    comparedList.length = 0;
    lottoPossibilities.forEach((lottoPossibility, ind, arr) => {
      const lotto = lottoPossibility.lotto,
        id = lottoPossibility.id;
      let winningDates: IWinningHistory[] = [],
        straightNumber = 0, // amount of times lotto won straight
        boxNumber = 0, // amount of times lotto won box
        // Amount of ways the lotto numbers can win 'Box'
        boxWay: string;
      winningDates.length = 0;

      winningHistory.forEach((winDate, ind2, arr2) => { // winDate = .date, .time, .winningNumber
        const winningNumbers = winDate.winningNumbers;
        const numberDate = this.ws.createNumberDate(winDate.date);
        // Checks how many time the lotto possibility won 'BOX'
        if (compareBox(lotto, winningNumbers)) {
          boxNumber += 1;
          // Checks how many time the lotto possibility won 'Straight'
          if (compareStraight(lotto, winningNumbers)) {
            straightNumber += 1;
            winningDates.push({ date: winDate.date, numberDate: numberDate, time: winDate.time, winningNumbers: winningNumbers, straight: true });
          } else {
            boxWay = checkSameDiffNumbs(lotto);
            winningDates.push({ date: winDate.date, numberDate: numberDate, time: winDate.time, winningNumbers: winningNumbers, straight: false });
          }
        }
      }); // End of winningHistory.forEach()
      if (boxNumber > 0) {
        this.ws.orderBy(winningDates, 'numberDate', 'down');
        if (!boxWay) {
          boxWay = '1way';
        }
        comparedList.push({ lotto: { lotto: lotto, id: id, boxWay: boxWay }, boxNumber: boxNumber, straightNumber: straightNumber, winningDates: winningDates });
      }
    }); // End of lottoList.forEach()
    console.log(comparedList);
    return comparedList;

    function compareBox(lotto: number[], winningNumber: number[]): boolean {
      const lottoLength = lotto.length;
      let boxMatched = false;
      let numbersMatched = 0;
      let clone = winningNumber.slice();
      lotto.forEach((val, ind) => {
        for (let i = 0; i < clone.length; i += 1) {
          if (val === clone[i]) {
            numbersMatched += 1;
            clone.splice(i, 1);
            i += clone.length;
          }
        }
        if (numbersMatched === ind) {
          return boxMatched;
        }
      }); // End of lotto.forEach
      if (numbersMatched === lottoLength) {
        boxMatched = true;
      }
      return boxMatched;
    } // End of compareBox

    function compareStraight(lotto: number[], winningNumber: number[]): boolean {
      const lottoLength = lotto.length;
      let numbersMatched = 0;
      lotto.forEach((lottoNumber, ind) => {
        if (winningNumber[ind] === lottoNumber) {
          numbersMatched += 1;
        } else {
          return false;
        }
      });
      return (numbersMatched === lottoLength) ? true : false;
    } // End of compareStraight

    // For future, Pick 4 Pick 5
    function checkSameDiffNumbs(lotto: number[]): string {
      const newLotto = lotto.slice();
      const lottoLength = lotto.length;
      const checkArray: boolean[] = [];
      let boxWay: string;
      newLotto.sort((a, b) => { return a - b; });
      newLotto.forEach((val, ind, arr) => {
        if (ind !== lottoLength - 1) {
          (val === arr[ind + 1]) ? checkArray.push(true) : checkArray.push(false);
        }
        switch (lottoLength) {
          case 2:
            boxWay = '2way';
            break;
          case 3:
            checkArray.forEach((val) => {
              if (val) {
                boxWay = '3 ways';
              }
            });
            if (!boxWay) {
              boxWay = '6 ways';
            }
            break;
          case 4:
            for (let i = 0; i < checkArray.length; i += 1) {
              if (checkArray[i] === true) {
                if (i !== checkArray.length - 1) {
                  if (checkArray[i + 1] === true) {
                    boxWay = '4 ways';
                    i += checkArray.length;
                  } else if (i === 0) {
                    if (checkArray[i + 2] === true) {
                      boxWay = '6 ways';
                      i += checkArray.length;
                    }
                  }
                } else {
                  boxWay = '12 ways';
                }
              }
            }
            if (!boxWay) {
              boxWay = '24 ways';
            }
            break;
        }
      });
      return boxWay;
    } // End of checkSameDiffNumbs
  } // End of compare2History

  createAverageSpand(comparedList) {
    const sortBy = this.ws.orderBy,
      day = 86400000;
    comparedList.forEach(val => {
      val.winningDates = this.ws.createNumberDate(val.winningDates);
      val.winningDates = addHalfDay(val.winningDates);
      val.winningDates = addLastTimeWon(val.winningDates);
    });
    comparedList = shortLongSpand(comparedList);
    comparedList = this.ws.orderBy(comparedList, 'overDue', 'down');
    return comparedList;
    function addLastTimeWon(wd) {
      wd.forEach((val, ind, arr) => {
        let lastTimeWon;
        if (ind < arr.length - 1) {
          lastTimeWon = (val.numberDate - arr[ind + 1].numberDate) / day;
          lastTimeWon = lastTimeWon.toFixed(1);
        } else {
          lastTimeWon = 'First';
        }
        val.lastTimeWon = lastTimeWon;
      });
      return wd;
    } //End of AddLastTimeWon()
    function addHalfDay(wd) {
      wd.forEach((val, ind) => {
        if (val.time === 'E') {
          val.numberDate += day * .5;
        }
      });
      wd = sortBy(wd, 'numberDate', 'down');
      return wd;
    } // End of addHalfDay()
    function shortLongSpand(cl) {
      const currentDate = new Date().getTime();
      cl.forEach((val) => {
        let lastValue;
        let lastTimeWon;
        let shortestSpand;
        let longestSpand;
        let averageSpand = 0;

        lastValue = val.winningDates[val.winningDates.length - 1];
        val.winningDates.splice(val.winningDates.length - 1, 1);
        val.winningDates = sortBy(val.winningDates, 'lastTimeWon', 'up');
        shortestSpand = val.winningDates[0].lastTimeWon;
        longestSpand = val.winningDates[val.winningDates.length - 1].lastTimeWon;
        val.winningDates.forEach((val2) => {
          averageSpand += +val2.lastTimeWon;
        });
        averageSpand = +(averageSpand / val.winningDates.length).toFixed(1);
        val.shortestSpand = shortestSpand;
        val.longestSpand = longestSpand;
        val.averageSpand = averageSpand;
        val.winningDates.push(lastValue);
        val.winningDates = sortBy(val.winningDates, 'numberDate', 'down');
        const lastTimeWonCurrent = (currentDate - val.winningDates[0].numberDate) / day;
        val.lastTimeWonCurrent = lastTimeWonCurrent.toFixed(1);
        const overDue = (lastTimeWonCurrent - longestSpand).toFixed(1);
        val.overDue = overDue;
      });
      return cl;
    } // End of ShortLongSpand
  } // end of createAverageSpand
} // End of Class
