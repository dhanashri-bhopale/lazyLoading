import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { UsersDashboardComponent } from "./users-dashboard/users-dashboard.component";
import { ActiveUsersComponent } from "./users-dashboard/active-users/active-users.component";
import { InactiveUsersComponent } from "./users-dashboard/inactive-users/inactive-users.component";

const routes : Routes = [
    {
        path: '',
        component: UsersDashboardComponent,
        children: [
            {
                path: 'activeUsers',
                component: ActiveUsersComponent
            },
            {
                path: 'inactiveUsers',
                component: InactiveUsersComponent
            }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class UsersRoutingModule {}