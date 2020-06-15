import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.module';
import { RecipeServices} from './recipe-service'

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css'],
  providers:[RecipeServices]

})
export class RecipeComponent implements OnInit {
selectedRecipe:Recipe;
  constructor( private recipeService:RecipeServices) { }

  ngOnInit(): void {
    this.recipeService.recipeSelected
    .subscribe(
      (recipe:Recipe)=>{
        this.selectedRecipe=recipe;
      }
    );
  }

}
