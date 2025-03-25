import { Component, DestroyRef, effect, inject, OnInit, signal } from '@angular/core';
import { interval, map } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  clickCount = signal(0);
  private destroyRef = inject(DestroyRef);

  constructor() {
    effect(() => {
      console.log('clickCount:', this.clickCount());
  })
  }

  // ngOnInit(): void {
  //     const subscription = interval(1000).pipe(
  //       map((value) => value * 2),
  //     ).subscribe({
  //       next:(value) =>  console.log(value)
  //     });
    
  //     this.destroyRef.onDestroy(() => {
  //       subscription.unsubscribe();
  //     }); 
  // }

  onClick(): void {
    this.clickCount.update(prevCount => prevCount + 1);
  }
}
