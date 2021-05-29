import { Component } from "@angular/core";

import { CardsService, Card } from "./cards.service";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  public cards: Card[] = this.cardsService.cards;
  public name: string = "dsfsdf";
  public number: string = "sdfsd";

  constructor(private cardsService: CardsService) {}

  onSubmit(event: Event) {
    event.preventDefault();

    this.cardsService.addCard(this.name, this.number);
    this.cards = this.cardsService.cards;
    this.name = "";
    this.number = "";
  }
}
