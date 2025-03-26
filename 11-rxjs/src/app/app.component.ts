import { Component, computed, DestroyRef, effect, inject, OnInit, signal } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import { interval, map } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  clickCount = signal(0);
  clickCount$ = toObservable(this.clickCount)
  // interval = signal(0);
  // doubleInterval = computed(() => this.interval() * 2);

  private destroyRef = inject(DestroyRef);

  constructor() {
  //   effect(() => {
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
      this.clickCount$.subscribe({
        next: (value) => console.log('clickCount:', this.clickCount())
      });
  }

  onClick(): void {
    this.clickCount.update(prevCount => prevCount + 1);
  }
}
