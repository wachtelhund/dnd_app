import { Component } from '@angular/core';
import { CharacterCreator, EncounterCreator } from 'dnd_api_helper';
import { MonsterResponse } from 'dnd_api_helper/build/types/monsters/MonstersResponse';
import { GenerationRequest } from './generation-form/GenerationRequest';
import { FormControl, FormGroup } from '@angular/forms';
import { FormEntry, ValidationSpan } from './generation-form/FormEntry';
import { Character } from 'dnd_api_helper/build/character/Character';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  encounterCreator = new EncounterCreator();
  characterCreator = new CharacterCreator();
  title = 'dnd_app';

  /**
   * Used in the template to generate the form.
   */
  monsterFormEntries = [
    {
      controlName: 'amountOfMonsters',
      control: new FormControl(1),
      validationSpan: {
        lowerLimit: 1,
        upperLimit: 5
      } as ValidationSpan,
      label: 'Amount of monsters',
      type: 'number'
    },
    {
      controlName: 'challengeRating',
      control: new FormControl(1),
      validationSpan: {
        lowerLimit: 1,
        upperLimit: 25
      } as ValidationSpan,
      label: 'Challenge rating',
      type: 'number'
    }
  ] as FormEntry[];

  /**
   * Used in the template to generate the form.
   */
  characterFormEntries = [
      {
        controlName: 'amountOfSpells',
        control: new FormControl(1),
        validationSpan: {
          lowerLimit: 1,
          upperLimit: 4
        } as ValidationSpan,
        label: 'Amount of Spells',
        type: 'number'
      },
      {
        controlName: 'amountOfFeatures',
        control: new FormControl(1),
        validationSpan: {
          lowerLimit: 1,
          upperLimit: 4
        } as ValidationSpan,
        label: 'Amount of Features',
        type: 'number'
      }
  ] as FormEntry[];

  monsters: MonsterResponse[] = [];
  character: Character = {} as Character;

  async onGenerateMonsters($event: GenerationRequest) {
    try {
      this.monsters = await this.encounterCreator.getRandomMonsters(
          $event.formValue.amountOfMonsters,
          $event.formValue.challengeRating
        );
    } catch (error: any) {
      alert(error.message);
    }
  }

  async onGenerateCharacter($event: GenerationRequest) {
    try {
      this.character = await this.characterCreator.generateRandomizedCharacter(
          $event.formValue.amountOfSpells,
          $event.formValue.amountOfFeatures
        );
    } catch (error: any) {
      alert(error.message);
    }
  }
}
