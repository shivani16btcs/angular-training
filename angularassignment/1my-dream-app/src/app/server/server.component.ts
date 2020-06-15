import { Component} from '@angular/core';
//import { read } from 'fs';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styles:[`
    .online{
        color:pink;
    }`]
})
export class ServerComponent {
serverid: number =10;
serverstatus:string ='offline';
constructor(){
this.serverstatus=Math.random()>0.5?'online':'offline';
}
getserverstatus()
{
    return this.serverstatus;
}
getColor(){
    return this.serverstatus==='online'? 'green':'red';
}
}