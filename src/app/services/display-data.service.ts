import { Injectable } from '@angular/core';
import { WebService } from './web.service';
import { AlgoService } from './algo.service';
import { Compared2HistoryService } from './compared-2-history.service';


@Injectable()
export class DisplayDataService {
  optionSelected;
  constructor(private ws: WebService, private as: AlgoService, private c2hs: Compared2HistoryService) { }

  onSelectOption(option, object?) {
    let orderBySelected;
    const body = document.body;
    const lottoGame = this.ws.lottoGame;
    let selectedOption;
    if (!object) {
      option = getOption(option); // turns winning-history to winningHistory
      selectedOption = lottoGame[option];
      if (option === 'comparedList') {
        selectedOption = this.c2hs.createAverageSpand(selectedOption);
      }
    } else {
      selectedOption = object;
    }
    this.optionSelected = selectedOption;





    if (option === 'winningHistory') {
      // selectedOption = this.as.daysWonAverage(selectedOption);
    }// retrieve the option object
    const tableDiv = document.createElement('div');
    tableDiv.setAttribute("id", "tableDiv");
    if (document.contains(document.getElementById("tableDiv"))) {
      document.getElementById("tableDiv").remove();
    }
    const tbl = createDataTable(selectedOption, option);
    tableDiv.appendChild(tbl);
    const wsOB = this.ws.orderBy;

    // orderBySelected = document.getElementById("th-overDue");
    // console.log('orderBySelected');
    // console.log(orderBySelected);
    // if(orderBySelected) {
    //    orderBySelected = getObjectByID(orderBySelected);
    //     console.log('orderBySelected');
    //     console.log(orderBySelected);
    // };

    return body.appendChild(tableDiv);
    function createDataTable(o, tableID) {
      let tbl = createTableID(tableID);
      const caption = document.createElement('caption');
      caption.appendChild(document.createTextNode(tableID));
      tbl.appendChild(caption);
      let obj;
      (Array.isArray(o)) ? obj = o[0] : obj = o;
      let th = createHeaders(obj, tbl);
      tbl.appendChild(th);
      let td;
      if (Array.isArray(o)) {
        o.forEach(val => {
          td = createDataRow(val, tbl);
        });
      } else {
        td = createDataRow(o, tbl);
      }
      tbl.appendChild(td);
      return tbl;

      function createTableID(tableId) {
        const tbl = document.createElement('table');
        tbl.setAttribute("id", tableId);
        tbl.style.width = '100px';
        tbl.style.border = '1px solid black';
        return tbl;
      } // End of CreateTableID()

      function createHeaders(o, table) {
        const orderByAble = ['boxNumber', 'straightNumber', 'shortestSpand', 'longestSpand', 'averageSpand', 'lastTimeWonCurrent', 'overDue', 'date'];
        const tr = table.insertRow();
        for (let key in o) {
          const th = document.createElement("TH");
          if (orderByAble.find(val => val === key)) {
            th.setAttribute("class", 'orderBy-able');
          }
          th.setAttribute("id", `th-${key}`);
          th.onclick = function() {
            selectedOption = wsOB(selectedOption, key, 'down');
            return tbl = createDataTable(selectedOption, option);
          };
          th.appendChild(document.createTextNode(key));
          tr.appendChild(th);
        }
        return tr;
      } // End Of CreateHeaders()
      function createDataRow(o, table) {
        const tr = table.insertRow();
        for (let key in o) {
          const td = document.createElement("TD");
          if (isObject(o[key])) {
            td.appendChild(createDataTable(o[key], `tbl-${key}`));
          } else {
            td.appendChild(document.createTextNode(o[key]));
          }
          td.setAttribute("class", `td-${key}`);
          tr.appendChild(td);
        }
        return tr;
      } // End of CreateDattaRow()

      function isObject(object) {
        if (Array.isArray(object)) {
          object = object[0];
          return object instanceof Object && object.constructor === Object;
        }
        return object instanceof Object && object.constructor === Object;
      } // End of isObject
    } // End of CreateDataTable()
    function getOption(option) {
      let param = option.replace("-", "");
      let clone = option.split("-");
      clone.forEach((element, ind, arr) => {
        if (ind > 0) {
          arr[ind] = element.charAt(0).toUpperCase() + element.slice(1);
        }
      });
      clone = clone.join("");
      return clone;
    } //End of getOption()

    function getObjectByID(id) {
      let clone = id.split("-");
      clone = selectedOption[clone[1]];
      console.log(clone);
      return clone;

    }


  }// End of OnSelectOption

} //End of class
