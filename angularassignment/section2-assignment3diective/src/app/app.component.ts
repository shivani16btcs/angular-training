import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'diective3';
  showsecret=false;
  log=[];//empty array;

  ontoggleDetail(){
this.showsecret=!this.showsecret;
this.log.push(new Date());
  }
}
