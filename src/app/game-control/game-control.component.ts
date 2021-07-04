import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() // Adding output to make this field listenable from outside with (gameStarted)
  gameStarted = new EventEmitter<number>();

  intervalRef;
  lastNumber = 0;

  constructor() {
  }

  ngOnInit(): void {
  }

  startGame() {
    // this.intervalRef = setInterval(function (gameStarted) {
    //   console.log('count is: ' + count);
    //   gameStarted.emit(count);
    //   count += 1;
    // }, 1000, this.gameStarted);
    // instead of using function() and passing 'this' as arg,
    // do it shorthand

    this.intervalRef = setInterval(() => {
      this.gameStarted.emit(++this.lastNumber);
    }, 1000);
  }


  stopGame() {
    clearInterval(this.intervalRef);
  }
}
