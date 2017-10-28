import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: '.recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe ('A test recipe', 'this is a test', 'https://images.unsplash.com/photo-1485963631004-f2f00b1d6606?dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb'),
    new Recipe ('A test recipe', 'this is a test', 'https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?auto=format&fit=crop&w=750&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }

}
