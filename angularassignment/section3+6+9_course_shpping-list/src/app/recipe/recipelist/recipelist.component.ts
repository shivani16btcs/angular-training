import { Component, OnInit,EventEmitter, Output } from '@angular/core';
import {Recipe } from '../recipe.module';
import { RecipeServices } from '../recipe-service';
@Component({
  selector: 'app-recipelist',
  templateUrl: './recipelist.component.html',
  styleUrls: ['./recipelist.component.css']
})
export class RecipelistComponent implements OnInit {
  recipes: Recipe[];

  constructor( private recipeService: RecipeServices) { 
  }

  ngOnInit() {
    this.recipes=this.recipeService.getRecipes();
  }
}
