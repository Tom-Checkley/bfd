import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminMenuComponent } from './components/admin-menu/admin-menu.component';
import { AdminComponent } from './components/admin/admin.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { BlogComponent } from './components/blog/blog.component';

import { UserService } from './services/user.service';
import { BlogAdminService } from './services/blog-admin.service';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule
  ],
  declarations: [
    AdminMenuComponent,
    AdminComponent,
    LoginComponent,
    RegisterComponent,
    BlogComponent
  ],
  providers: [
    UserService,
    BlogAdminService
  ]
})
export class AdminModule { }
