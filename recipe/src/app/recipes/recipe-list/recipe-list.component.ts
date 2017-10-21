import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: '.recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe ('A test recipe', 'this is a test', 'https://images.unsplash.com/photo-1485963631004-f2f00b1d6606?dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb'),
    new Recipe ('A test recipe', 'this is a test', 'https://images.unsplash.com/photo-1485963631004-f2f00b1d6606?dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb')
  ];

  constructor() { }

  ngOnInit() {
  }

}
