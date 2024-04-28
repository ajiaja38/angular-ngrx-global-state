import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { InputMethodsComponent } from '../../components/input-methods/input-methods.component';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [InputMethodsComponent],
  template: `
    <div class="w-full flex flex-col gap-4 justify-center items-center p-5">
      <h1 class="font-bold text-4xl">Hi Setting</h1>
      <app-input-methods [callback]="this.successAlert.bind(this)" />
    </div>
  `,
})
export class SettingsComponent {
  successAlert() {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Success hit method from input bindings',
      showConfirmButton: false,
      timer: 1500,
    });
  }
}
