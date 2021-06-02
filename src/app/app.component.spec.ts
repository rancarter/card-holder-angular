import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { Card, CardsService } from './cards.service';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  const cardService = jasmine.createSpyObj('CardsService', ['addCard']);

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [AppComponent],
        providers: [{ provide: CardsService, useValue: cardService }],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should call cardService addCard method', () => {
    cardService.cards = [new Card('name', 'number')];

    component.onSubmit({ name: 'name', number: 'number' });

    expect(cardService.addCard).toHaveBeenCalledWith('name', 'number');
    expect(component.cards).toEqual(cardService.cards);
  });
});
