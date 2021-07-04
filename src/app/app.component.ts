import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  gameValues = [];

  onGameEvent(count: number): void {
    this.gameValues.push(count);
  }
}
