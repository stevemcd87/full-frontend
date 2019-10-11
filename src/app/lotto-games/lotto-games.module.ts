import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';



import { LottoGameListComponent } from './lotto-game-list/lotto-game-list.component';
import { LottoGameDetailComponent } from './lotto-game-detail/lotto-game-detail.component';
import { LottoGameDetailOptionComponent } from './lotto-game-detail-option/lotto-game-detail-option.component';
import { LottoGamesRoutingModule } from './lotto-games-routing.module';

@NgModule({
  declarations: [
    LottoGameListComponent,
    LottoGameDetailComponent,
    LottoGameDetailOptionComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    LottoGamesRoutingModule
  ]
})
export class LottoGamesModule { }
