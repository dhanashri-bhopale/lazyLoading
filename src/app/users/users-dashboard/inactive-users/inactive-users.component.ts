import { Component, OnInit } from '@angular/core';
import { Iusers } from 'src/app/shared/model/users';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.scss']
})
export class InactiveUsersComponent implements OnInit {
  inActiveUsers : Iusers[] = []

  constructor(
    private _usersService : UsersService
  ) { }

  ngOnInit(): void {
    this._usersService.inActiveUsers().subscribe({
      next : data => {
        console.log(data)
        this.inActiveUsers = data
      },
      error: err => {
        console.log(err)
      }
    })
  }

}
