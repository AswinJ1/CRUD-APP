import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeCreateComponent } from './components/employee-create/employee-create.component';
import { AuthGuard } from './auth.guard';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { UserComponent } from './components/user/user.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeeEditComponent } from './components/employee-edit/employee-edit.component';
import { HomeComponent } from './components/home/home.component';
import { ManageEmployeeComponent } from './components/manage-employee/manage-employee.component';

const routes: Routes = [
 {component:LoginComponent,path:'login'},
 { path: '', redirectTo: '/hell', pathMatch: 'full' },
 {component:AppComponent,path:'',canActivate:[AuthGuard]},
 {component:UserComponent,path:'user',canActivate:[AuthGuard]},
 {component:EmployeeCreateComponent,path:'customer',canActivate:[AuthGuard]},
 {component: EmployeeEditComponent,path: 'edit-employee/:id',canActivate:[AuthGuard] },
 {component: EmployeeListComponent,path: 'manage',canActivate:[AuthGuard] },
 {component:HomeComponent,path:'home',canActivate:[AuthGuard]},
 {component:ManageEmployeeComponent,path:"hell",canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

