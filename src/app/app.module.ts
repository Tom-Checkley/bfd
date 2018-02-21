import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MainNavComponent } from './public/components/main-nav/main-nav.component';
import { HomeComponent } from './public/components/home/home.component';
import { ServicesComponent } from './public/components/services/services.component';
import { NotFoundComponent } from './public/components/not-found/not-found.component';

import { AdminModule } from './admin/admin.module';


@NgModule({
  imports: [
    BrowserModule,
    AdminModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    MainNavComponent,
    HomeComponent,
    ServicesComponent,
    NotFoundComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
