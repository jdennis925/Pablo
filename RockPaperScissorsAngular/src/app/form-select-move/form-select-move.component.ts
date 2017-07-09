import { Component, OnInit, NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import {SelectMoveService} from './select-move.service';
import { Move } from "app/form-select-move/move";
import { PlayResult } from "app/form-select-move/playResult";

@Component({
  selector: 'app-form-select-move',
  templateUrl: './form-select-move.component.html',
  styleUrls: ['./form-select-move.component.css'],
  providers: [SelectMoveService],
})
export class FormSelectMoveComponent implements OnInit {
  public roundId: number;
  public playResult: PlayResult;
  public resultId : number;
  public playerMove : string;
  public playerImagePath : string;
  public compMove : string;
  public compImagePath
  public resultMove : string;

  constructor(private selectMoveService: SelectMoveService) {  
  }

  ngOnInit() {
  }

  getPlayResult(id : number) {
    this.selectMoveService.get(id)
                     .subscribe(
                       res => this.resHelper(res),
                       error => alert(error));
  }

  resHelper(res : PlayResult)
  {
    console.log(res);
    this.playResult = res;
    this.playerMove = this.idtoName(res.playerMove);
    this.compMove = this.idtoName(res.compMove);
    this.playerImagePath = this.GetPlayerImagePath(res.playerMove);
    this.compImagePath = this.GetCompImagePath(res.compMove);
    this.roundId = res.id
    if(res.playerWin)
      this.resultMove = 'You Win!';
    else if (res.playerWin == null)
      this.resultMove = 'Tie!';
    else
      this.resultMove = 'You Lose!';


    console.log(this.playResult);
  }

  GetPlayerImagePath(id: number)
  {
    if(id == 1)
      return "/assets/playerRock.jpg";
    if(id == 2)
      return "/assets/playerPaper.jpg";
    if(id == 3)
      return "/assets/playerScissors.jpg";
    alert('broken');
    return "";
  }

  GetCompImagePath(id: number)
  {
    if(id == 1)
      return "/assets/compRock.jpg";
    if(id == 2)
      return "/assets/compPaper.jpg";
    if(id == 3)
      return "/assets/compScissors.jpg";
    alert('broken');
    return "";
  }

  idtoName(id : number)
  {
    if(id == 1)
      return "Rock";
    if(id == 2)
      return "Paper";
    if(id == 3)
      return "Scissors";
    alert('broken');
    return "";
  }


  onSubmitRock() { 
    this.selectMoveService.create(new Move(1,"Rock")).subscribe(res => this.resSubmitHelper(res), error => alert(error));
  }

  onSubmitPaper() { 
    this.selectMoveService.create(new Move(2,"Paper")).subscribe(res => this.resSubmitHelper(res), error => alert(error));
  }

  resSubmitHelper(res : number){
    console.log('res submit helper');
    
    console.log(res);
    this.resultId = res;
    this.getPlayResult(res);
  }

  onSubmitScissors() { 
    this.selectMoveService.create(new Move(3,"Scissors")).subscribe(res => this.resSubmitHelper(res), error => alert(error));
  }
}
