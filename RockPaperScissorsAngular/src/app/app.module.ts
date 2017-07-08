import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BtnSubmitComponent } from './btn-submit/btn-submit.component';
import { FormSelectMoveComponent } from './form-select-move/form-select-move.component';
import { ResultsViewComponent } from './results-view/results-view.component';
import { SelectMoveService } from "app/form-select-move/select-move.service";

@NgModule({
  declarations: [
    AppComponent,
    BtnSubmitComponent,
    FormSelectMoveComponent,
    ResultsViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule
  ],
  providers: [
    SelectMoveService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
