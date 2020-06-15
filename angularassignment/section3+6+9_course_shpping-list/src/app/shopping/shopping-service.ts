import {Ingredient} from '../shared/ingredient.module';
import {EventEmitter} from '@angular/core';


export class ShoppingServices{
ingredientsChanged = new EventEmitter<Ingredient[]>();
   private ingredients: Ingredient[] = [
        new Ingredient('Apples',5),
        new Ingredient('Tomatoes',10),
      ];

    getIngredients(){
        return this.ingredients.slice();// copy of ingredient
    }  

    addIngredient(ingredient:Ingredient){
        this.ingredients.push(ingredient);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }
}