import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { interval, map } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  private destroyRef = inject(DestroyRef);

  ngOnInit(): void {
      const subscription = interval(1000).pipe(
        map((value) => value * 2),
      ).subscribe({
        next:(value) =>  console.log(value)
      });
    
      this.destroyRef.onDestroy(() => {
        subscription.unsubscribe();
      }); 
  }
}
