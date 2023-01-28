import { Component } from "@angular/core";

@Component({
    templateUrl: '../home/welcome-componant.html'
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