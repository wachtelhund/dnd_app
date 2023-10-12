import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { CharacterCardComponent } from './character-card/character-card.component';
import { MonsterCardComponent } from './monster-card/monster-card.component';

@NgModule({
  declarations: [
    AppComponent,
    CharacterCardComponent,
    MonsterCardComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
