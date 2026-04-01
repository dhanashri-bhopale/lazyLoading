import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Iusers } from '../model/users';
import { usersData } from '../consts/users';
import { filter, map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  usersArr : Iusers[] = usersData

  constructor() { }

  activeUsers() : Observable<Iusers[]> {
    return of(this.usersArr).pipe(
      map(u => u.filter(activeu => activeu.status === 'active'))
    )
  }

  inActiveUsers() : Observable<Iusers[]> {
    return of(this.usersArr).pipe(
      map(u => u.filter(inActiveu => inActiveu.status === 'in-active'))
    )
  }

}
