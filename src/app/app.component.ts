import { Component, OnInit } from '@angular/core';
import { WebService } from './services/web.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  template: `
  <header>
    <h1>Smart Picks</h1>
    <h2>Predicting the next winniing lottery numbers based on winning history</h2>
  </header>

    <router-outlet></router-outlet>
  `
})
export class AppComponent {}
