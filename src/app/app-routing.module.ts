import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LottoGamesComponent } from './components/lotto-games.component';
import { SelectedGameComponent } from './components/selected-game.component';
import { SgOptionComponent } from './components/sg-option.component';

const routes = [
  {
    path: '',
    component: LottoGamesComponent
  }
  , {
    path: ':game',
    component: SelectedGameComponent
  }
  , {
    path: ':game/:option',
    component: SgOptionComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
