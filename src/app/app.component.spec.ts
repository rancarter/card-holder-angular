import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { Card, CardsService } from './cards.service';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  const cardService = jasmine.createSpyObj('CardsService', ['addCard', 'removeCard']);

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

  it('should call addCard', () => {
    cardService.cards = [];

    component.onSubmit({ name: 'name', number: 'number' });

    expect(cardService.addCard).toHaveBeenCalledWith('name', 'number');
    expect(component.cards).toBe(cardService.cards);
  });

  it('should call addCard', () => {
    cardService.cards = [];

    component.onRemove('number');

    expect(cardService.removeCard).toHaveBeenCalledWith('number');
    expect(component.cards).toBe(cardService.cards);
  }); 
});
