import { Component } from '@angular/core';

import { CardsService, Card } from './cards.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private cardsService: CardsService) {}

  get cards(): Card[] {
    return this.cardsService.cards
  }

  onSubmit(data: { name: string; cardNumber: string }): void {
    this.cardsService.addCard(data.name, data.cardNumber);
  }

  onRemove(cardNumber: string): void {
    this.cardsService.removeCard(cardNumber);
  }
}
