import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CategoriesComponent } from './categories/categories.component';
import { TopsComponent } from './tops/tops.component';
import { BottomsComponent } from './bottoms/bottoms.component';
import { DressesComponent } from './dresses/dresses.component';
import { ShoesComponent } from './shoes/shoes.component';
import { CartComponent } from './cart/cart.component';
import { CartService } from './cart.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    CategoriesComponent,
    TopsComponent,
    BottomsComponent,
    DressesComponent,
    ShoesComponent,
    CartComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: '', component: CategoriesComponent },
      { path: 'tops', component: TopsComponent },
      { path: 'bottoms', component: BottomsComponent },
      { path: 'dresses', component: DressesComponent },
      { path: 'shoes', component: ShoesComponent },
      { path: 'cart', component: CartComponent },
    ])
  ],
  providers: [CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
