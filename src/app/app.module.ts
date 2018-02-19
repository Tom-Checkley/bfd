import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MainNavComponent } from './public/components/main-nav/main-nav.component';
import { HomeComponent } from './public/components/home/home.component';
import { ServicesComponent } from './public/components/services/services.component';
import { NotFoundComponent } from './public/components/not-found/not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    HomeComponent,
    ServicesComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
