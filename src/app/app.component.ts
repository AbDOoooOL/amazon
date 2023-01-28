import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable, combineLatest, combineLatestWith, delay, filter, forkJoin, from, interval, map, of, range, take, tap, timer } from 'rxjs';

@Component({
  selector: 'amzn-root',
  templateUrl: './app.component.html',

})
export class AppComponent implements OnInit {

  constructor(private translateService: TranslateService){}
  ngOnInit(): void {

    this.translateService.onLangChange.subscribe(lang => console.log('corrent lang', lang));

    // let observer = {
    //   next: (apple: any) => console.log(`I have received an ${apple}`),
    //   error: (err: any) => console.log(`something is wrong ${err}`),
    //   complete: () => console.log(`no more apples`)
    // };

    // let applesObservable$ = new Observable(appleSubsciber =>{
    //   setTimeout(() => {
    //     appleSubsciber.next('First Apple');
    //   }, 300);
    //   appleSubsciber.next('Second Apple');
    //   appleSubsciber.next('Third Apple');
    //   appleSubsciber.error('apple is broken');
    //   // appleSubsciber.complete();
    // });

    // let sub = applesObservable$.subscribe(observer);

    // built in func to create obsevable
    // let apples = ['First Apple', 'Second Apple'];
    // let apples$ = of(...apples);
    // apples$.subscribe(s => console.log(s));

    // let apples$ = from(['First Apple', 'Second Apple']);
    // apples$.subscribe(s => console.log(s));

    // of(10, 20 ,30 ,40)
    // .pipe(
    //   tap(item => console.log(`x is ${item}`)),
    //   map(item => item * 2),
    //   tap(item => console.log(`2x is ${item}`)),
    //   map(item=>{
    //     if (item == 60) {
    //       throw new Error('we have reached zero...');
    //     }
    //     return item;
    //   }),
    //   take(4)
    // )
    // .subscribe({
    //   // item => console.log(item),
    //   next: item => console.log(`Result ${item}`),
    //   error: item => console.log(`Error ${item}`),
    //   complete: () => console.log(`Done`)
    // });

    // from([10, 20 ,30 ,40]).subscribe(item => console.log(item));
    // interval(1000).subscribe(number => console.log(`number is ${number}`));

    // let numbers$ = range(0,10);

    // numbers$.pipe(
    //   map(x => x*3),
    //   filter(x => x%2 ===0)
    // )
    // .subscribe({
    //   next: x => console.log(x),
    //   complete: () => console.log(`Done`)
    // })

    // let trigger = timer(3000);
    // trigger.subscribe(x => console.log(`timer is trigger`,x))

    // let trigger = timer(5000, 1000);
    // trigger.subscribe(x => console.log(`timer is trigger`,x));
  
    // let first = timer(1000);
    // let second = timer(5000, 1000);
    // first.pipe(
    //   combineLatestWith(second)
    // ).subscribe(res => console.log(`hello result is ` ,res));

    // let obs$ = forkJoin({
    //   sourceOne$: of('Hello'),
    //   sourceTwo$: of('World').pipe(delay(1000)),
    //   sourceThird$: interval(3000).pipe(take(1)),
    // });
    // obs$.subscribe(x => console.log(x))
  }
  title: string = 'amazone';
  changeImage(): void { }
  changeLang(lang:string): void{
    this.translateService.use(lang)
  }
}