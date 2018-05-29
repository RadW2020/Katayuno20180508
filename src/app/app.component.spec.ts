import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent, Card, Deck } from './app.component';


describe('AppComponent', () => {
  let app: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
    fixture.detectChanges();

    
  }));



  it('should be able to be created', () => {
    expect(AppComponent).toBeTruthy();
  });


  /*describe('The deck', () => {
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
  })*/
});
