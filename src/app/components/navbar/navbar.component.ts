import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { UserService } from '../../services/user.service';
import { IUser } from '../../interfaces/user.interface';
import { select, Store } from '@ngrx/store';
import { AppState } from '../../global/app.state';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { selectCount } from '../../global/selector/counter.selector';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, AsyncPipe],
  template: `
    <div class="bg-blue-500 shadow-lg mb-2">
      <div
        class="container mx-auto text-white p-4 flex justify-between items-center"
      >
        <h1 class="font-bold text-lg">Global State</h1>
        <div class="flex gap-2">
          <p>{{ this.user.name }}</p>
          <p>{{ count$ | async }}</p>
        </div>
        <ul class="flex gap-3">
          <li>
            <a routerLink="/" class="text-white">Home</a>
          </li>
          <li>
            <a routerLink="/setting" class="text-white">Setting</a>
          </li>
        </ul>
      </div>
    </div>
  `,
})
export class NavbarComponent {
  count$: Observable<number>;

  user: IUser = {
    id: '',
    name: '',
    username: '',
    email: '',
    address: {
      street: '',
      suite: '',
      city: '',
      zipcode: '',
      geo: {
        lat: '',
        long: '',
      },
    },
    phone: '',
    website: '',
    company: {
      name: '',
      catchPhrase: '',
      bs: '',
    },
  };

  constructor(
    private readonly userService: UserService,
    private readonly store: Store<AppState>
  ) {
    this.count$ = this.store.pipe(select(selectCount));
  }

  ngOnInit() {
    this.getUserById();
  }

  getUserById() {
    this.userService.getUserById('1').subscribe({
      next: (data: IUser) => {
        this.user = data;
      },
      error: (err: Error) => {
        console.log(err);
      },
    });
  }
}
