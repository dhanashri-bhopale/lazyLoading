import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { HomeComponent } from './shared/components/home/home.component';
// import { ProductsModule } from './products/products.module';
// import { UsersModule } from './users/users.module';

import { HttpClientModule } from '@angular/common/http';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // ProductsModule,
    // UsersModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(){
    console.log(`App Module Loaded!!!`)
  }
 }
