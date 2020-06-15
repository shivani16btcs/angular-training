import { Directive, OnInit, ElementRef } from '@angular/core';

@Directive({
  selector: '[app-basec-highlight-directive]'
})
export class BasecHighlightDirectiveComponent implements OnInit {

 constructor(private elementRef:ElementRef){
 }

 ngOnInit(){
   this.elementRef.nativeElement.style.backgroundColor='green';
 }
}
