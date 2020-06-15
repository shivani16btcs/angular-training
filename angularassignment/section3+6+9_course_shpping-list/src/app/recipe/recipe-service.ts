import {EventEmitter} from '@angular/core';
import {Recipe} from './recipe.module';

export class RecipeServices{
    recipeSelected= new EventEmitter<Recipe>();
    recipes: Recipe[]=[
        new Recipe('A Test Recipe1','This is simply a test1',
        'https://www.middleburypubliclibrary.org/wp-content/uploads/2015/08/recipe-button.jpg'),
        new Recipe('Another Test Recipe2','This is simply a test2',
        'https://www.middleburypubliclibrary.org/wp-content/uploads/2015/08/recipe-button.jpg')
      ];

      getRecipes(){
        return this.recipes.slice();
      }
}

