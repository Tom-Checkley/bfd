import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { UserService } from './services/user.service';

import { AdminRoutingModule } from './admin-routing.module';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LoginComponent } from './components/login/login.component';
import { AdminMenuComponent } from './components/admin-menu/admin-menu.component';
import { AdminComponent } from './components/admin/admin.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AdminRoutingModule,
  ],
  exports: [
    AdminRoutingModule
  ],
  declarations: [
    SignUpComponent,
    LoginComponent,
    AdminMenuComponent,
    AdminComponent
  ],
  providers: [
    UserService
  ]
})
export class AdminModule { }
