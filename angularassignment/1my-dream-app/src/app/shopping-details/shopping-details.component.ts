import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-shopping-details',
  template:`welcomw to {{name}}`,
  styleUrls: ['./shopping-details.component.css']
})
export class ShoppingDetailsComponent  {
@Input ()name:string;
@Input ('noise')noise:string;
  constructor() { }
makenoise(){
  alert('${this.noise}');
}
  

}
