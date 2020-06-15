import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
allowNewServer= false;
serverCreateStatus='no server was created!';
serverName='Testserver';
serverCreate=false;
servers=['Testserver','Testserver 2'];

  constructor() {
    setTimeout(()=>{
      this.allowNewServer=true;

    },2000) //after 2 sec button become enable
   }

  ngOnInit(): void {
  }
  

  onCreateServer(){
    this.serverCreate=true;
    this.servers.push(this.serverName);
    this.serverCreateStatus = 'Server was created! name is '+this.serverName;
  
  }

  onUpdateServerName(event: Event){
  this.serverName =(<HTMLInputElement>event.target).value;
  }
}
