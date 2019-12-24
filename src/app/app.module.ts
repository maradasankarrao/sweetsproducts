import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HedderComponent } from './common/hedder/hedder.component';
import { ContentComponent } from './common/content/content.component';
import { FooterComponent } from './common/footer/footer.component';
import { NovigationComponent } from './common/novigation/novigation.component';
import { ProductsComponent } from './pages/products/products.component';
import { CartComponent } from './pages/cart/cart.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HedderComponent,
    ContentComponent,
    FooterComponent,
    NovigationComponent,
    ProductsComponent,
    CartComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
