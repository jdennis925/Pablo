import { Component, OnInit, NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import {SelectMoveService} from './select-move.service';
import { Move } from "app/form-select-move/move";

@Component({
  selector: 'app-form-select-move',
  templateUrl: './form-select-move.component.html',
  styleUrls: ['./form-select-move.component.css'],
  providers: [SelectMoveService],
})
export class FormSelectMoveComponent implements OnInit {
  submitted = false;
  constructor(private selectMoveService: SelectMoveService) {   }
  prevMoves: Move[];
  
  ngOnInit() {
  }

  onSubmit() { 
    this.submitted = true; 
    this.selectMoveService.create("1");
  }

}
