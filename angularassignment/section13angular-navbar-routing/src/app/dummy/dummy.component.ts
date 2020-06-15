import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-dummy',
  templateUrl: './dummy.component.html',
  styleUrls: ['./dummy.component.css']
})
export class DummyComponent implements OnInit {
data:Observable<any>;
  constructor() { }

  ngOnInit(){
    this.data=new Observable(observer=>{

      setTimeout(()=>{ 
      observer.next(1);
      },1000);
      setTimeout(()=>{
        observer.next(3);
      },5000 );

      setTimeout(()=>{
        observer.error(new Error("subscription expire for some error"));
      },3000);//once the error get throw we not get further operation because after that subscriber get auomatically unsubcribe

      setTimeout(()=>{
        observer.complete();
      },8000);

    });

    let subscriber1=this.data.subscribe(value=>{
      console.log("i am value sub1"+value);
      //subscriber1.unsubscribe();
    },error=>{
      console.log(error)
    });

    let subscriber2=this.data.subscribe(value=>{
      console.log("i am value sub2"+value);
    },error=>{
      console.log(error)
    })
  }
}
