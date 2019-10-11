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



@NgModule({
  declarations: [
    AppComponent,
    SelectedGameComponent,
    LottoGamesComponent,
    SgOptionComponent,
    LottoGameOptionsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    // RouterModule.forRoot(routes),
    AppRoutingModule
  ],
  providers: [WebService, Compared2HistoryService, AlgoService, DisplayDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
