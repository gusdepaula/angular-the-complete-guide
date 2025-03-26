import { Component, computed, DestroyRef, effect, inject, OnInit, signal } from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { interval, map, Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  clickCount = signal(0);
  clickCount$ = toObservable(this.clickCount);
  interval$ = interval(1000);
  intervalSignal = toSignal(this.interval$, { initialValue: 0 });
  // interval = signal(0);
  // doubleInterval = computed(() => this.interval() * 2);
  customInterval$ = new Observable((subscriber) => {
    let timesExecuted = 0;
    const interval = setInterval(() => {
      if(timesExecuted > 3){
        clearInterval(interval);
        subscriber.complete();
        return;
      }
      console.log('Emitting new value...');
      subscriber.next({message: 'New value'});
      timesExecuted++;
    }, 2000);
  });
  private destroyRef = inject(DestroyRef);

  constructor() {
  //  effect(() => {
  //     console.log('clickCount:', this.clickCount());
  // })
  }

  ngOnInit(): void {
    
      // setInterval(() => {
      //   this.interval.update(prevCount => prevCount + 1);
      // }, 1000);

      // const subscription = interval(1000).pipe(
      //   map((value) => value * 2),
      // ).subscribe({
      //   next:(value) =>  console.log(value)
      // });
    
      // this.destroyRef.onDestroy(() => {
      //   subscription.unsubscribe();
      // });
      this.customInterval$.subscribe({
        next: (value) => console.log('Custom interval:', value),
        complete:() => console.log('Custom interval completed'),
        error: (error) => console.log('Custom interval error:', error)
      });
      const subscription = this.clickCount$.subscribe({
        next: (value) => console.log('clickCount:', this.clickCount())
      });

      this.destroyRef.onDestroy(() => {
        subscription.unsubscribe();
      }); 
  }

  onClick(): void {
    this.clickCount.update(prevCount => prevCount + 1);
  }
}
