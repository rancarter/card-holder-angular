import { TestBed } from "@angular/core/testing";

import { CardsService, Card } from "./cards.service";

describe("CardsService", () => {
  let service: CardsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardsService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });

  it("should add a card", () => {
    service.addCard("card-name", "card-number");

    expect(service.cards).toEqual([new Card("card-name", "card-number")]);
  });
});
