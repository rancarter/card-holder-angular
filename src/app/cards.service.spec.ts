import { TestBed } from '@angular/core/testing';

import { CardsService, Card } from './cards.service';

describe('CardsService', () => {
  let service: CardsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add a card', () => {
    const result = service.addCard('card-name', 'card-number');
    const expectedCard = new Card('card-name', 'card-number');

    expect(result).toEqual(expectedCard);
    expect(service.cards).toEqual([expectedCard]);
  });

  it('should remove a card', () => {
    service.addCard('card-1', 'card-number-1');
    service.addCard('card-2', 'card-number-2');
    service.addCard('card-3', 'card-number-3');

    service.removeCard('card-number-2');

    expect(service.cards.length).toBe(2);
    expect(service.cards[0].name).toBe('card-1');
    expect(service.cards[1].name).toBe('card-3');
  });
});
