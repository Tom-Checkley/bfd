import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminMenuComponent } from './components/admin-menu/admin-menu.component';
import { AdminComponent } from './components/admin/admin.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

import { UserService } from './services/user.service';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  declarations: [
    AdminMenuComponent,
    AdminComponent,
    LoginComponent,
    RegisterComponent
  ],
  providers: [
    UserService
  ]
})
export class AdminModule { }
