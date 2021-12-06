import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent {
  @Output() currentPlayerData = new EventEmitter(); 
  @Input() player1: any;
  @Input() player2: any;

  
  scoreUpdate(playerName:any, shot:any){
      this.currentPlayerData.emit({player: playerName, shot: shot});
  }

}
