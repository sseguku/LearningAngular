import { Component, OnInit } from '@angular/core';
import { Hero } from "../hero";
import {Heroes} from "../mock-heros";
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

 // hero = "John Derek Sebunya"
 selectedHero : Hero; // called on hero clicked


 //list heros
  heroes = Heroes;

  onSelect(hero : Hero): void {
    this.selectedHero = hero;
  }


 constructor() { }

  ngOnInit() {
  }
  hero: Hero = {

    id: 1,
    name: "John Derek Sebunya"
   } ;
  
}
