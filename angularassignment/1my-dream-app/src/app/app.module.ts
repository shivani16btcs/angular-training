import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RecipeComponent } from './recipe/recipe.component';
import { ShoppingDetailsComponent } from './shopping-details/shopping-details.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { SucessAlertComponent } from './sucess-alert/sucess-alert.component'; 
import { WarningAlertComponent } from './warning-alert/warning-alert-component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    WarningAlertComponent,
    RecipeComponent,
    ShoppingDetailsComponent,
    ServersComponent,
    SucessAlertComponent,
   
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
