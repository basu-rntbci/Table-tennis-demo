import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-winner-display',
  templateUrl: './winner-display.component.html',
  styleUrls: ['./winner-display.component.css']
})
export class WinnerDisplayComponent {

  @Input() player1Total: any;
  @Input() player2Total: any;
  @Input() winner: any;

}
