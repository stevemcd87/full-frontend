import { Injectable } from '@angular/core';
// import { Http } from '@angular/http';
import { WebService } from './web.service';
import 'rxjs/add/operator/toPromise';
import { error } from 'util';
import { ILottoGame, ILottoDetails } from '../interface';

@Injectable()
export class AlgoService {
    constructor(private ws:WebService) {
       }

   CreateTopPicks(comparedList){

   }
} // End of Class