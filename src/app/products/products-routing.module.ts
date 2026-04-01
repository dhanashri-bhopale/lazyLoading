import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MobilesComponent } from "./products-dashboard/mobiles/mobiles.component";
import { LaptopsComponent } from "./products-dashboard/laptops/laptops.component";
import { TabsComponent } from "./products-dashboard/tabs/tabs.component";
import { ProductsDashboardComponent } from "./products-dashboard/products-dashboard.component";

const routes: Routes = [
    {
        path: '',
        component: ProductsDashboardComponent,
        children: [
            {
                path: 'mobiles',
                component: MobilesComponent,
            },
            {
                path: 'laptops',
                component: LaptopsComponent
            },
            {
                path: 'tabs',
                component: TabsComponent
            }
        ]
    }

]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ProductsRoutingModule { }