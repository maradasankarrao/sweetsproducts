import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './common/footer/footer.component';
import { HedderComponent } from './common/hedder/hedder.component';
import { NovigationComponent } from './common/novigation/novigation.component';
import { CartComponent } from './pages/cart/cart.component';
import { ProductsComponent } from './pages/products/products.component';
import { ContentComponent } from './common/content/content.component';

const routes: Routes = [
  {path:"content",component:ContentComponent},
  {path:"footer",component:FooterComponent},
  {path:"hedder",component:HedderComponent},
  {path:"novigation",component:NovigationComponent},
  {path:"cart",component:CartComponent},
  {path:"home",component:HomeComponent},
  {path:"products",component:ProductsComponent},  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
