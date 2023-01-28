import { Component } from "@angular/core";

@Component({
    templateUrl: '../home/welcome-componant.html'
})
export class WelcomeComponant{
    public pageTitle = 'Welcome';

    myLogin(){
    let data = {id:1,name:'asd'};
    localStorage.setItem('', JSON.stringify(data));
    }
}