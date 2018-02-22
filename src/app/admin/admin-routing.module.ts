import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserService } from './services/user.service';

import { AdminComponent } from './components/admin/admin.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { AdminMenuComponent } from './components/admin-menu/admin-menu.component';

const AdminRoutes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: '', component: AdminMenuComponent, canActivate: [UserService] }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(AdminRoutes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
