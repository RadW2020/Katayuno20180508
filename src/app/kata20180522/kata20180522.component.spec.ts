import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Kata20180522Component } from './kata20180522.component';


describe('Kata20180522Component', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        Kata20180522Component
      ],
    }).compileComponents();
  }));
  
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(Kata20180522Component);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'Katayuno with Angular'`, async(() => {
    const fixture = TestBed.createComponent(Kata20180522Component);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Katayuno with Angular');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(Kata20180522Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to Katayuno with Angular!');
  }));
  it(`player has 30 of health`, async(() => {
    const fixture = TestBed.createComponent(Kata20180522Component);
    const app = fixture.debugElement.componentInstance;
    expect(app.player.health).toEqual(30);
  }));
  it(`player has 0 mana`, async(() => {
    const fixture = TestBed.createComponent(Kata20180522Component);
    const app = fixture.debugElement.componentInstance;
    expect(app.player.mana).toEqual(0);
  }));
  it(`player has a deck of Damage Cards`, async(() => {
    const fixture = TestBed.createComponent(Kata20180522Component);
    const app = fixture.debugElement.componentInstance;
    expect(app.player.array_deck).toEqual([0,0,1,1,2,2,2,3,3,3,3,4,4,4,5,5,6,6,7,8]);
  }));
  it(`there are two players: player1 and player2`, async(() => {
    const fixture = TestBed.createComponent(Kata20180522Component);
    const app = fixture.debugElement.componentInstance;
    expect(app.player1).toBeTruthy();
    expect(app.player2).toBeTruthy();
  }));
  it(`Player has a empty hand `, async(() => {
    const fixture = TestBed.createComponent(Kata20180522Component);
    const app = fixture.debugElement.componentInstance;
    expect(app.player.get_hand()).toEqual(0)
  }));
  
});

