import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  url: string = 'https://jsonplaceholder.typicode.com/users';
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

  constructor(private readonly http: HttpClient) {}

  getAllUser(): Observable<IUser[]> {
    return this.http.get<IUser[]>(this.url);
  }

  getUserById(id: string): Observable<IUser> {
    return this.http.get<IUser>(`${this.url}/${id}`);
  }
}
