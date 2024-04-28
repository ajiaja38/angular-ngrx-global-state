import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input-methods',
  standalone: true,
  imports: [],
  template: `
    <button
      (click)="this.callback?.()"
      class="p-2 bg-purple-600 hover:bg-purple-500 rounded shadow-lg text-white"
    >
      Hit Callback function from input
    </button>
  `,
})
export class InputMethodsComponent {
  @Input() callback?: () => void;
}
