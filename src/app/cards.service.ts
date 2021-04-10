import { Injectable } from "@angular/core";

export class Card {
  constructor(public name: string, public number: string) {}
}

@Injectable({
  providedIn: "root",
})
export class CardsService {
  #cards: Card[] = [];

  get cards(): Card[] {
    return this.#cards;
  }

  addCard(name: string, number: string): void {
    this.#cards.push(new Card(name, number));
  }
}
