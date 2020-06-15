import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipeComponent } from './recipe/recipe.component';
import { RecipelistComponent } from './recipe/recipelist/recipelist.component';
import { RecipeitemComponent } from './recipe/recipelist/recipeitem/recipeitem.component';
import { RecipedetailComponent } from './recipe/recipedetail/recipedetail.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import {DropdownDirective } from './shared/dropdown.directive';
import { ShoppingServices } from './shopping/shopping-service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipeComponent,
    RecipelistComponent,
    RecipeitemComponent,
    RecipedetailComponent,
    ShoppingComponent,

    ShoppingEditComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [ShoppingServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
