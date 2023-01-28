import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";


@Component({
    selector:'amzn-star',
    templateUrl:'./star.component.html',
    styleUrls:['./star.component.css']
})

export class StarComponent implements OnChanges{
    
    cropWidth: number = 75;
    @Input() rating: number = 0;

    ngOnChanges(changes: SimpleChanges): void {
        console.log(changes);
        this.cropWidth = this.rating * 75/5;
    }

    onClick(){
        console.log(`this rating is equal to ${this.rating}`);
    }
}