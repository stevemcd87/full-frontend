import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LottoGameListComponent } from './lotto-game-list/lotto-game-list.component';
import { LottoGameDetailComponent } from './lotto-game-detail/lotto-game-detail.component';


const lottoGameRoutes: Routes = [
  { path: 'lotto-games', component: LottoGameListComponent },
  { path: ':game', component: LottoGameDetailComponent }

];

@NgModule({
  imports: [RouterModule.forChild(lottoGameRoutes)],
  exports: [RouterModule]
})
export class LottoGamesRoutingModule { }
