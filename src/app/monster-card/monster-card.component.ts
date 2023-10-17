import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MonsterResponse } from 'dnd_api_helper/build/types/monsters/MonstersResponse';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-monster-card',
  templateUrl: './monster-card.component.html',
  styleUrls: ['./monster-card.component.scss']
})
export class MonsterCardComponent extends CardComponent<MonsterResponse> {
  monsterImg = this.data?.image || "assets/images/missing.jpg";

  constructor() {
    super();
    this.setImageSrc();
    this.setCardImageSources({
      frontside: 'assets/images/frontside.png',
      backside: 'assets/images/monster_card_backside.png'
    })
    this.setMonsterImg();
  }

  private async setMonsterImg() {
    if (this.data?.image.includes('undefined')) {
      this.monsterImg = "assets/images/missing.jpg";
    } else {
      this.monsterImg = this.data?.image || "assets/images/missing.jpg";
    }
  }

  ngAfterViewInit() {
    this.setMonsterImg();
  }
}
