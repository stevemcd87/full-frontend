import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';



import { LottoGameListComponent } from './lotto-game-list/lotto-game-list.component';
import { LottoGameDetailComponent } from './lotto-game-detail/lotto-game-detail.component';
import { LottoGameDetailOptionComponent } from './lotto-game-detail-option/lotto-game-detail-option.component';
import { LottoGamesRoutingModule } from './lotto-games-routing.module';
import { WinningHistoryComponent } from './lotto-game-detail-option/winning-history/winning-history.component';
import { StatisticsComponent } from './lotto-game-detail-option/statistics/statistics.component';

@NgModule({
  declarations: [
    LottoGameListComponent,
    LottoGameDetailComponent,
    LottoGameDetailOptionComponent,
    WinningHistoryComponent,
    StatisticsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    LottoGamesRoutingModule
  ]
})
export class LottoGamesModule { }
