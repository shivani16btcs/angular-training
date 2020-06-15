import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { BasecHighlightDirectiveComponent } from './basec-highlight-directive/basec-highlight-directive.component';



@NgModule({
  declarations: [
    AppComponent,
    BasecHighlightDirectiveComponent
   
    
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
