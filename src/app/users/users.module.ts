import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersDashboardComponent } from './users-dashboard/users-dashboard.component';
import { AppRoutingModule } from "src/app/app-routing.module";
import { ActiveUsersComponent } from './users-dashboard/active-users/active-users.component';
import { InactiveUsersComponent } from './users-dashboard/inactive-users/inactive-users.component';
import { UsersRoutingModule } from './users-routing.module';



@NgModule({
  declarations: [
  UsersDashboardComponent,
  ActiveUsersComponent,
  InactiveUsersComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule
  ]
})
export class UsersModule {
  constructor(){
    console.log(`Users Module Loaded!!!`)
  }
 }
