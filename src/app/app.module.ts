import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { SelectedGameComponent } from './components/selected-game.component';

import { WebService } from './services/web.service';
import { DisplayDataService } from './services/display-data.service';
import { AlgoService } from './services/algo.service';
import { Compared2HistoryService } from './services/compared-2-history.service';
import { LottoGamesComponent } from './components/lotto-games.component';
import { SgOptionComponent } from './components/sg-option.component';

const routes = [
  {
    path:'',
    component: LottoGamesComponent
  }
  ,  {
    path:':game',
    component: SelectedGameComponent
  }
 ,  {
    path:':game/:option',
    component: SelectedGameComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    SelectedGameComponent,
    LottoGamesComponent,
    SgOptionComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [WebService, Compared2HistoryService, AlgoService, DisplayDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
