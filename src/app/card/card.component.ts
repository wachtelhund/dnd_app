import { Component, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CardSource } from './CardSource';

@Component({
  selector: 'app-card',
  styleUrls: ['./card.component.scss'],
  template: ``,
})
export abstract class CardComponent<T> {
  @Input() data!: T | null;
  isFlipped = new BehaviorSubject<boolean>(true);
  currentImgSrc: String = '';
  imgSources: CardSource | null = null;
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

  setCardImageSources(sources: CardSource) {
    this.imgSources = sources;
  }

  setImageSrc(): void {
    setTimeout(() => {
      if (this.isFlipped.value) {
        this.currentImgSrc = this.imgSources?.backside || '';
      } else {
        this.currentImgSrc = this.imgSources?.frontside || '';
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
