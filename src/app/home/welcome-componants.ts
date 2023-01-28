import { Component } from "@angular/core";
import { ProgressbarConfig } from "ngx-bootstrap/progressbar";

@Component({
    templateUrl: '../home/welcome-componant.html',
    providers: [{ provide: ProgressbarConfig, useFactory: getProgressbarConfig }]
})



export class WelcomeComponant{
    public pageTitle = 'Welcome';

    bsInlineValue = new Date();
    bsInlineRangeValue: Date[];
    maxDate = new Date();

    constructor() {
        this.maxDate.setDate(this.maxDate.getDate() + 7);
        this.bsInlineRangeValue = [this.bsInlineValue, this.maxDate];
    }

    myLogin(){
    let data = {id:1,name:'asd'};
    localStorage.setItem('', JSON.stringify(data));
    }
}

export function getProgressbarConfig(): ProgressbarConfig {
    return Object.assign(new ProgressbarConfig(), { animate: true, striped: true,  max: 200 });
}