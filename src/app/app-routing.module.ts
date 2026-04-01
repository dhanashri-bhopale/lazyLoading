import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/components/home/home.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
// import { ProductsDashboardComponent } from './products/products-dashboard/products-dashboard.component';
// import { UsersDashboardComponent } from './users/users-dashboard/users-dashboard.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'products',
    // component: ProductsDashboardComponent
    loadChildren: () => import('./products/products.module').then(m => m.ProductsModule)
  },
  {
    path: 'users',
    // component: UsersDashboardComponent
    loadChildren: () => import('./users/users.module').then(m => m.UsersModule)
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
