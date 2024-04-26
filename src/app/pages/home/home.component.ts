import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  decrement,
  increment,
  reset,
} from '../../global/action/counter.action';
import { AppState } from '../../global/app.state';
import { selectCount } from '../../global/selector/counter.selector';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AsyncPipe],
  template: `
    <div class="flex flex-col gap-4  justify-center items-center p-5">
      <h1 class="font-bold text-3xl">Current Count: {{ count$ | async }}</h1>
      <div class="flex gap-3 text-white">
        <button
          (click)="increment()"
          class="p-2 bg-green-500 rounded shadow-lg"
        >
          Increment
        </button>
        <button (click)="decrement()" class="p-2 bg-red-500 rounded shadow-lg">
          Decrement
        </button>
        <button (click)="reset()" class="p-2 bg-yellow-500 rounded shadow-lg">
          Reset Counter
        </button>
      </div>
    </div>
  `,
})
export class HomeComponent {
  count$: Observable<number>;

  constructor(private store: Store<AppState>) {
    this.count$ = this.store.pipe(select(selectCount));
  }

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }
}
