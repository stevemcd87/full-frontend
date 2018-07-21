import { Component, OnInit } from '@angular/core';
import { WebService } from './services/web.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{title}}</h1>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
  title = `Florida's Top Lottos for 2017`;

}
