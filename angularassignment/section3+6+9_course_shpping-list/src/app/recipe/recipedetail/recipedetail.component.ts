import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.module';

@Component({
  selector: 'app-recipedetail',
  templateUrl: './recipedetail.component.html',
  styleUrls: ['./recipedetail.component.css']
})
export class RecipedetailComponent implements OnInit {
@Input() recipe:Recipe;
  constructor() { }

  ngOnInit(): void {
  }

}
