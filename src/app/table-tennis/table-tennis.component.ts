import { Component } from '@angular/core';
import { PostServiceService } from '../post-service.service';

export interface Player { 
  name:string, 
  smash:number, 
  ace:number,
  fluke: number,
  total: number 
} 

@Component({
  selector: 'app-table-tennis',
  templateUrl: './table-tennis.component.html',
  styleUrls: ['./table-tennis.component.css']
})
export class TableTennisComponent {
  title = 'table-tennis';
  winner = undefined;
  currentPlayer: any = {
    name: '', 
    smash: 0,
    ace: 0,
    fluke: 0,
    total: 0
  };
  currentShot: any;
  player1: Player = {
    name: 'Player 1', 
    smash: 0,
    ace: 0,
    fluke: 0,
    total: 0
  };
  player2: Player = {
    name: 'Player 2', 
    smash: 0,
    ace: 0,
    fluke: 0,
    total: 0
  };
  constructor(private postService: PostServiceService){
  }
  backMethod(){
    //To disable double back add an update flag
      if(this.currentPlayer.total >= 1){
        this.currentPlayer[this.currentShot]--;
        this.currentPlayer.total--;
      }
  }

  updateCurrentValue (data: any){
    this.currentPlayer = data.player;
    this.currentShot = data.shot;
    this.currentPlayer[this.currentShot]++;
    this.currentPlayer.total++;
    if(this.currentPlayer.total >=11 ){
      this.winner = this.currentPlayer.name;
      console.log(this.currentPlayer);
      let displayData = {player1: this.player1,player2: this.player2};
      //this.postService.postMethod(displayData);
      setTimeout(() => {
      alert(JSON.stringify(displayData));
      this.reset()},1000);
      }
  }

  reset(){
    this.winner = undefined;
    this.currentPlayer = {
      name: '', 
      smash: 0,
      ace: 0,
      fluke: 0,
      total: 0
    };
    this.currentShot;
    this.player1 = {
      name: 'Player 1', 
      smash: 0,
      ace: 0,
      fluke: 0,
      total: 0
    };
    this.player2 = {
      name: 'Player 2', 
      smash: 0,
      ace: 0,
      fluke: 0,
      total: 0
    };
  }

}
