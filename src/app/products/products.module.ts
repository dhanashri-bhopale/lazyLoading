import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsDashboardComponent } from './products-dashboard/products-dashboard.component';
import { MobilesComponent } from './products-dashboard/mobiles/mobiles.component';
import { LaptopsComponent } from './products-dashboard/laptops/laptops.component';
import { TabsComponent } from './products-dashboard/tabs/tabs.component';
import { ProductsRoutingModule } from './products-routing.module';



@NgModule({
  declarations: [
    ProductsDashboardComponent,
    MobilesComponent,
    LaptopsComponent,
    TabsComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule {
  constructor(){
    console.log(`Products Module Loaded!!!`)
  }
 }
