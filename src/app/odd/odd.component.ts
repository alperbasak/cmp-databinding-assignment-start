import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.css']
})
export class OddComponent implements OnInit {
  @Input() // To be able to get values from outside
  number: number;

  constructor() { }

  ngOnInit(): void {
  }

}
