import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { Character } from 'dnd_api_helper/build/character/Character';
import { CardSource } from '../card/CardSource';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.scss']
})
export class CharacterCardComponent extends CardComponent<Character> {
  cardBacksideSrc = 'assets/images/character_card_backside.png';
  cardFrontsideSrc = 'assets/images/frontside.png';
  heroImageSrc = 'assets/images/hero.png';

  constructor() {
    super();
    super.setImageSrc();
    super.setCardImageSources(new CardSource(
      this.cardFrontsideSrc,
      this.cardBacksideSrc
    ))
  }
}
