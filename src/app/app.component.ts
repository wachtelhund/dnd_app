import { Component } from '@angular/core';
import { CharacterCreator, EncounterCreator } from 'dnd_api_helper';
import { MonsterResponse } from 'dnd_api_helper/build/types/monsters/MonstersResponse';
import { GenerationRequest } from './generation-form/GenerationRequest';
import { FormControl, FormGroup } from '@angular/forms';
import { FormEntry } from './generation-form/FormEntry';
import { Character } from 'dnd_api_helper/build/character/Character';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  encounterCreator = new EncounterCreator();
  characterCreator = new CharacterCreator();
  monsterFormEntries = [
    {
      controlName: 'amountOfMonsters',
      control: new FormControl(1),
      validationSpan: {
        lowerLimit: 1,
        upperLimit: 5
      },
      label: 'Amount of monsters',
      type: 'number'
    },
    {
      controlName: 'challengeRating',
      control: new FormControl(1),
      validationSpan: {
        lowerLimit: 1,
        upperLimit: 25
      },
      label: 'Challenge rating',
      type: 'number'
    }
  ] as FormEntry[];
  characterFormEntries = [
      {
        controlName: 'amountOfSpells',
        control: new FormControl(1),
        validationSpan: {
          lowerLimit: 1,
          upperLimit: 4
        },
        label: 'Amount of Spells',
        type: 'number'
      },
      {
        controlName: 'amountOfFeatures',
        control: new FormControl(1),
        validationSpan: {
          lowerLimit: 1,
          upperLimit: 4
        },
        label: 'Amount of Features',
        type: 'number'
      }
  ] as FormEntry[];
  monsters: MonsterResponse[] = [];
  character: Character = {} as Character;
  title = 'dnd_app';

  async onGenerateMonsters($event: GenerationRequest) {
    this.monsters = await this.encounterCreator.getRandomMonsters($event.formValue.amountOfMonsters, $event.formValue.challengeRating);
  }

  async onGenerateCharacter($event: GenerationRequest) {
    this.character = await this.characterCreator.generateRandomizedCharacter($event.formValue.amountOfSpells, $event.formValue.amountOfFeatures);
  }
}
