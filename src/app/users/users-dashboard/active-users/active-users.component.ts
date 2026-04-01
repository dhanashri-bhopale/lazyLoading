import { Component, OnInit } from '@angular/core';
import { Iusers } from 'src/app/shared/model/users';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.scss']
})
export class ActiveUsersComponent implements OnInit {
  activeUsers : Iusers[] = []

  constructor(
    private _usersService : UsersService
  ) { }

  ngOnInit(): void {
    this._usersService.activeUsers().subscribe({
      next: data => {
        console.log(data)
        this.activeUsers = data
      },
      error: err => {
        console.log(err)
      }
    })
  }

}
