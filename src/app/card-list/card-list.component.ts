import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Card } from '../cards.service';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss'],
})
export class CardListComponent {
  @Input() cards: Card[] = [];
  @Output() remove = new EventEmitter<string>();

  onRemove(cardNumber: string): void {
    this.remove.emit(cardNumber);
  }
}
