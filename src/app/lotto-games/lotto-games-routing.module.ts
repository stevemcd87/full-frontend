import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LottoGameListComponent } from './lotto-game-list/lotto-game-list.component';
import { LottoGameDetailComponent } from './lotto-game-detail/lotto-game-detail.component';
import { LottoGameDetailOptionComponent } from './lotto-game-detail-option/lotto-game-detail-option.component';
import { WinningNumberDetailComponent } from './winning-number-detail/winning-number-detail.component';

const lottoGameRoutes: Routes = [
  {
    path: 'lotto-games',
    component: LottoGameListComponent,
    children: [
      {
        path: ':game',
        component: LottoGameDetailComponent,
        children: [
          {
            path: 'statistics/:winningNumber',
            component: WinningNumberDetailComponent
          },
          {
            path: ':option',
            component: LottoGameDetailOptionComponent
          }
        ]
      }
    ]
  }



];

@NgModule({
  imports: [RouterModule.forChild(lottoGameRoutes)],
  exports: [RouterModule]
})
export class LottoGamesRoutingModule { }
