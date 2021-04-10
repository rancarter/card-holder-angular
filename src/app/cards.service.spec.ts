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
    const result = service.addCard("card-name", "card-number");
    const expectedCard = new Card("card-name", "card-number"); 

    expect(result).toEqual(expectedCard);
    expect(service.cards).toEqual([expectedCard]);
  });
});
