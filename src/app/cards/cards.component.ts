import { Component } from '@angular/core';
import { Card } from '../models/card.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss'
})

export class CardsComponent {
  cards: Card [] = []; // initialisation de la variable 

  constructor(){ // constucteur de classe nécéssaire pour l'initialisation de l'objet. 
  this.cards = [
    {
      title: 'Produit 1',
      picture: 'https://via.placeholder.com/150',
      published: true,
      discount: 0,
      price: 120,
      isFavorite: false,
    },
    {
      title: 'Produit 2',
      picture: 'https://via.placeholder.com/150',
      description: 'Ceci est une courte description du produit.',
      published: true,
      discount: 50,
      price: 60,
      isFavorite: false,
    },
    {
      title: 'Produit 3',
      picture: 'https://via.placeholder.com/150',
      description: 'Ceci est une courte description du produit.',
      published: false,
      discount: 0,
      price: 230,
      isFavorite: false,
    },
    {
      title: 'Produit 4',
      description: 'Ceci est une courte description du produit.',
      published: true,
      discount: 30,
      price: 50,
      isFavorite: false,
    },
    {
      title: 'Produit 5',
      picture: 'https://via.placeholder.com/150',
      description: 'Ceci est une courte description du produit.',
      published: true,
      discount: 15,
      price: 70,
      isFavorite: false,
    },
    {
      title: 'Produit 7',
      picture: 'https://via.placeholder.com/150',
      description: 'Ceci est une courte description du produit.',
      published: false,
      discount: 0,
      price: 599,
      isFavorite: false,
    },
  ];
}

  addToFavorite(card: Card) {
    card.isFavorite = true;
  }
}
