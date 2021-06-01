import { Component } from '@angular/core';

import { CardsService, Card } from './cards.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public cards: Card[] = this.cardsService.cards;

  constructor(private cardsService: CardsService) {}

  onSubmit(data: any) {
    this.cardsService.addCard(data.name, data.number);
    this.cards = this.cardsService.cards;
  }
}
