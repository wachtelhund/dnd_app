import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { MonsterResponse } from 'dnd_api_helper/build/types/monsters/MonstersResponse';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-monster-card',
  templateUrl: './monster-card.component.html',
  styleUrls: ['./monster-card.component.scss']
})
export class MonsterCardComponent extends CardComponent<MonsterResponse> {
  monsterImg = "http://www.dnd5eapi.co/api/images/monsters/aboleth.png";

  constructor(private http: HttpClient) {
    super();
    this.setImageSrc();
    this.setCardImageSources({
      frontside: 'assets/images/frontside.png',
      backside: 'assets/images/monster_card_backside.png'
    })
  }

  ngOnInit() {
    this.validateMonsterImg();
  }

  private async validateMonsterImg() {
    this.http.get(this.monsterImg).subscribe((res) => {
      this.monsterImg = this.monsterImg;
    }, (error: HttpErrorResponse) => {
      this.monsterImg = "http://www.dnd5eapi.co/api/images/monsters/aboleth.png";
    })
  }
}
