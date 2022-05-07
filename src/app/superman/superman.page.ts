import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-superman',
  templateUrl: './superman.page.html',
  styleUrls: ['./superman.page.scss'],
})
export class SupermanPage implements OnInit {

  searchVillian: string;
  villians = [  //an array to contains villians to search
    {
      "name": "Steppenwolf",
      "species": "New God",
      "base": "Apokolips"
    },
    {
      "name": "Bizarro",
      "species": "Clone",
      "base": "Metropolis"
    },
    {
      "name": "Brainaic",
      "species": "Kryptonian",
      "base": "Mobile"
    },
    {
      "name": "Darkseid",
      "species": "New God",
      "base": "Apokolips"
    },
    {
      "name": "Livewire",
      "species": "Metahuman",
      "base": "Metropolis"
    },
    {
      "name": "Lobo",
      "species": "Czarnian",
      "base": "Mobile"
    },
    {
      "name": "Mr.Mxyzptlk",
      "species": "Imp",
      "base": "Fifth Dimension"
    },
    {
      "name": "Lex Luthor",
      "species": "Human",
      "base": "Lex Corp"
    },
    {
      "name": "Granny Goodness",
      "species": "New God",
      "base": "Apokolips"
    },
    {
      "name": "Jax-Ur",
      "species": "Kryptonian",
      "base": "Unknown"
    },
    {
      "name": "Mala",
      "species": "Krptyonian",
      "base": "Earth"
    },
    {
      "name": "General Zodd",
      "species": "Krptyonian",
      "base": "Kryptyon"
    },

    {
      "name": "Metallo",
      "species": "Cyborg",
      "base": "Metropolis"
    },
    {
      "name": "Parasite",
      "species": "Metahuman",
      "base": "Metropolis"
    },
    {
      "name": "Bruno Mannheim",
      "species": "Human",
      "base": "Apokolips"
    },
    {
      "name": "Luminus",
      "species": "Human",
      "base": "Metropolis"
    },
    {
      "name": "Kalibak",
      "species": "New God",
      "base": "Apokolips"
    },
    {
      "name": "Earl Giver",
      "species": "Human",
      "base": "Metropolis"
    },
    {
      "name": "General Hardcastle",
      "species": "Human",
      "base": "Metropolis"
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}
