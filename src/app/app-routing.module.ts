import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './public/components/home/home.component';
import { TipsComponent } from './public/components/tips/tips.component';
import { BlogComponent } from './public/components/blog/blog.component';
import { ProductsComponent } from './public/components/products/products.component';
import { NotFoundComponent } from './public/components/not-found/not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'tips', component: TipsComponent },
  { path: 'services', component: ProductsComponent },
  { path: 'blog', component: BlogComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
