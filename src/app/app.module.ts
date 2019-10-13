import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { LottoGameService } from './lotto-games/lotto-game.service';
import { DisplayDataService } from './services/display-data.service';
import { AlgoService } from './services/algo.service';
import { Compared2HistoryService } from './services/compared-2-history.service';
import { LottoGamesModule } from './lotto-games/lotto-games.module';
import { AppRoutingModule } from './app-routing.module';
// import { WinningHistoryComponent } from './lotto-games/lotto-game-detail-option/winning-history/winning-history.component';
@NgModule({
  declarations: [
    AppComponent
    // WinningHistoryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    LottoGamesModule,
    AppRoutingModule,// Best to be last
  ],
  providers: [
    Compared2HistoryService,
    AlgoService,
    DisplayDataService,
    LottoGameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
