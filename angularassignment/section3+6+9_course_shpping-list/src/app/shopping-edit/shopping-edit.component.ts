import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import { Ingredient } from '../shared/ingredient.module';
import { ShoppingServices } from '../shopping/shopping-service';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
@ViewChild('nameInput') nameInputRef:ElementRef;// nameInput is a local-refrence which get value 
@ViewChild('amountInput') amountInputRef:ElementRef;


  constructor(private slService:ShoppingServices) { }

  ngOnInit(): void {
  }

  onAdditem(){
const ingName=this.nameInputRef.nativeElement.value;
const ingAmount=this.amountInputRef.nativeElement.value;
const newIngredient=new Ingredient(ingName,ingAmount);
//this.slService.addIngredient(newIngredient);
  }
}
