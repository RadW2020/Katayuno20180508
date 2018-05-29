import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kata20180529',
  templateUrl: './kata20180529.component.html',
  styleUrls: ['./kata20180529.component.css']
})
export class Kata20180529Component implements OnInit {
  public card: any; 

  constructor() { 
    this.card = new Card(0)
 
  }
  ngOnInit() {
    
  }
  
}

export class Deck{
  retrieveCard(){
    return new Card(0)
  }
}

export class Card{
  private damagePoints: number;
  private manaPoints: number;

  constructor(value: any){
    this.damagePoints = value
    this.manaPoints = value
  }
  damage(){
    return this.damagePoints
  }

  manaCost(){
    return this.manaPoints
  }


}



