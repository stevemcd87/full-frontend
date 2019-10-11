import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SelectedGameComponent } from './components/selected-game.component';

import { WebService } from './services/web.service';
import { DisplayDataService } from './services/display-data.service';
import { AlgoService } from './services/algo.service';
import { Compared2HistoryService } from './services/compared-2-history.service';
import { LottoGamesComponent } from './components/lotto-games.component';
import { SgOptionComponent } from './components/sg-option.component';
import { LottoGameOptionsComponent } from './components/lotto-game-options.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { LottoGameListComponent } from './lotto-games/lotto-game-list/lotto-game-list.component';
import { LottoGamesModule } from './lotto-games/lotto-games.module';
import { LottoGameService } from './lotto-games/lotto-game.service';
// import { LottoGameDetailComponent } from './lotto-games/lotto-game-detail/lotto-game-detail.component';



@NgModule({
  declarations: [
    AppComponent,
    SelectedGameComponent,
    LottoGamesComponent,
    SgOptionComponent,
    LottoGameOptionsComponent,
    // LottoGameListComponent,
    // LottoGameDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    // RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    AppRoutingModule,
    LottoGamesModule// Best to be last
  ],
  providers: [WebService, Compared2HistoryService, AlgoService, DisplayDataService, LottoGameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
