import { Component, OnInit,Input, EventEmitter,Output } from '@angular/core';
import { Recipe} from '../../recipe.module';
import { RecipeServices } from '../../recipe-service';

@Component({
  selector: 'app-recipeitem',
  templateUrl: './recipeitem.component.html',
  styleUrls: ['./recipeitem.component.css']
})
export class RecipeitemComponent implements OnInit {
@Input() recipe:Recipe;
@Output() recipeSelected=new EventEmitter<void>();
 
constructor(private recipeService:RecipeServices) { }

  ngOnInit(): void {
  }

  onSelected(){
this.recipeService.recipeSelected.emit(this.recipe);
  }

}
