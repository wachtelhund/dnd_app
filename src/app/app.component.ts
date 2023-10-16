import { Component } from '@angular/core';
import { EncounterCreator } from 'dnd_api_helper';
import { MonsterResponse } from 'dnd_api_helper/build/types/monsters/MonstersResponse';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  encounterCreator = new EncounterCreator();
  monsters: MonsterResponse[] = [];
  title = 'dnd_app';

  constructor() {
    this.generateMonsters(5);
  }

  private async generateMonsters(numberOfMonsters: number) {
    this.monsters = await this.encounterCreator.getRandomMonsters(numberOfMonsters);
  }

}
