import { Component, Input } from '@angular/core';
import { Character } from 'dnd_api_helper/build/character/Character';
import { MonsterResponse } from 'dnd_api_helper/build/types/monsters/MonstersResponse';
import { BehaviorSubject, Subject } from 'rxjs';
import { CardSources } from './CardSources';

@Component({
  selector: 'app-card',
  styleUrls: ['./card.component.scss'],
  template: ``,
})
export abstract class CardComponent<T> {
  @Input() data!: T | null;
  isFlipped = new BehaviorSubject<boolean>(true);
  imgSrc: String = '';
  imgSources: CardSources | null = null;
  showDetailsModal = false;


  constructor() {
    this.isFlipped.subscribe(() => {
      this.setImageSrc();
    });
  }
  
  flip() {
    this.isFlipped.next(!this.isFlipped.value);
    if (this.isFlipped.value) {
      this.showDetailsModal = false;   
    }
  }

  getData(): T {
    return this.data || {} as T;
  }

  setCardImageSources(sources: CardSources) {
    this.imgSources = sources;
  }

  setImageSrc(): void {
    setTimeout(() => {
      if (this.isFlipped.value) {
        this.imgSrc = this.imgSources?.backside || '';
      } else {
        this.imgSrc = this.imgSources?.frontside || '';
      }
    }, 50);
  }

  showDetails($event: MouseEvent) {
    this.showDetailsModal = true;
  }

  hideDetails($event: MouseEvent) {
    this.showDetailsModal = false;
  }

}
