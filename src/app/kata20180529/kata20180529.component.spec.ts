import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Kata20180529Component, Card, Deck } from './kata20180529.component';



describe('Kata20180529Component', () => {
  let app: Kata20180529Component;
  let fixture: ComponentFixture<Kata20180529Component>;
  

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        Kata20180529Component
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(Kata20180529Component);
    app = fixture.componentInstance;
    fixture.detectChanges();

    
  }));


  describe('The card',() => {
    it('la carta tiene un daño', (() => {
      const anyDamage = 0

      let card = new Card(anyDamage)

      expect(card.damage()).toBeGreaterThanOrEqual(anyDamage);
    }));
    
    it('la carta tiene un coste de mana', async(() => {
      const anyManaCost = 0

      let card = new Card(anyManaCost)

      expect(card.manaCost()).toBeGreaterThanOrEqual(anyManaCost)
    }));
  })

  describe('The deck', () => {
    it('retrieves a card', () => {
      let deck = new Deck()

      let card = deck.retrieveCard()

      expect(card).toBeDefined()
    })

    it('retrieves different cards each time', () => {
      let deck = new Deck()

      let firstCard = deck.retrieveCard()
      let secondCard = deck.retrieveCard()

      expect(firstCard).toEqual(secondCard)
    })
  })
});

