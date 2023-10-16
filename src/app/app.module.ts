import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { CharacterCardComponent } from './character-card/character-card.component';
import { MonsterCardComponent } from './monster-card/monster-card.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { GenerationFormComponent } from './generation-form/generation-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CharacterCardComponent,
    MonsterCardComponent,
    GenerationFormComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
