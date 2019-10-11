import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LottoGamesComponent } from './components/lotto-games.component';
import { SelectedGameComponent } from './components/selected-game.component';
import { SgOptionComponent } from './components/sg-option.component';
import { LottoGameListComponent } from './lotto-games/lotto-game-list/lotto-game-list.component';
// import { LottoGamesModule } from './lotto-games/lotto-games.module';
import { LottoGameDetailComponent } from './lotto-games/lotto-game-detail/lotto-game-detail.component';

const appRoutes: Routes = [
  {
    path: 'lotto-games',
    component: LottoGamesComponent
  }
  // , {
  //   path: ':game',
  //   component: SelectedGameComponent
  // }
  // , {
  //   path: ':game/:option',
  //   component: SgOptionComponent
  // }
  , {
    path: '',
    redirectTo: '/lotto-games',
    pathMatch: 'full'
  }
  // , {
  //   path: '**',
  //   component: PageNotFoundComponent
  // }
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
