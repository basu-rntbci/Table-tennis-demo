import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { GameComponent } from './game/game.component';
import { WinnerDisplayComponent } from './winner-display/winner-display.component';
import { TableTennisComponent } from './table-tennis/table-tennis.component';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    WinnerDisplayComponent,
    TableTennisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
