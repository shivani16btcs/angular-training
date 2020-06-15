
import { Component } from '@angular/core'

@Component({
    selector:'app-warning-alert',
    template:`
    <p> this is warning ,
     you are sufferring from corona </p>`,

    styles:[`
    p{
        display: block;
        background-color: #cccc76;
        padding:29px;
        border:2px;

    }`
    ]
})






export class WarningAlertComponent {

}