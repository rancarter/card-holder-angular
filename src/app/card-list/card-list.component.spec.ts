import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Card } from '../cards.service';
import { CardListComponent } from './card-list.component';

describe('CardListComponent', () => {
  let component: CardListComponent;
  let fixture: ComponentFixture<CardListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardListComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should render cards', () => {
    const cards = [
      new Card('name 1', 'number 1'),
      new Card('name 2', 'number 2'),
    ];

    component.cards = cards;
    fixture.detectChanges();

    const list = fixture.nativeElement.querySelectorAll('li');

    expect(list.length).toBe(2);
    expect(list[0].textContent).toContain('name 1 - number 1');
    expect(list[1].textContent).toContain('name 2 - number 2');
  });
});
