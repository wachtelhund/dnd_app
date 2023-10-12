import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { Character } from 'dnd_api_helper/build/character/Character';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.scss']
})
export class CharacterCardComponent extends CardComponent<Character> {
  cardBacksideSrc = 'assets/images/character_card_backside.png';
  cardFrontsideSrc = 'assets/images/frontside.png';

  constructor() {
    super();
    this.setImageSrc();
    this.setCardImageSources({
      frontside: this.cardFrontsideSrc,
      backside: this.cardBacksideSrc
    })
  }
}
