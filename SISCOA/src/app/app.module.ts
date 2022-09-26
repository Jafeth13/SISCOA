import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { UserDeleteComponent } from './user-delete/user-delete.component';
import { UserUpdateComponent } from './user-update/user-update.component';
import { RoleRegisterComponent } from './role-register/role-register.component';
import {MatNativeDateModule} from '@angular/material/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MatDividerModule  } from '@angular/material/divider';
import { MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatStepperModule } from '@angular/material/stepper';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelect, MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import {MatTabsModule} from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MenuComponent } from './menu/menu.component';
import { ControlRegisterComponent } from './control-register/control-register.component';
import { OfficeControlManagementComponent } from './office-control-management/office-control-management.component';
import { AddControlsOfficesComponent } from './add-controls-offices/add-controls-offices.component';
import { ControlListComponent } from './control-list/control-list.component';
import { ControlUpdateComponent } from './control-update/control-update.component';
import { ControlDeleteComponent } from './control-delete/control-delete.component';
import { MenuControlComponent } from './menu-control/menu-control.component';
import { MenuPrincipalComponent } from './menu-principal/menu-principal.component';
import { CheckStatusComponent } from './check-status/check-status.component';
import {NgxChartsModule} from'@swimlane/ngx-charts';
import { NavbarLoginComponent } from './navbar-login/navbar-login.component';

const appRoutes: Routes = [
  {
    path: '',
    component: LoginComponent,
    data: { title: 'Login' }, 
  },
  {
    path: 'listUser',
    component: UserListComponent,
    data: { title: 'Lista de usuarios' }, 
  },  
  {
    path: 'registerUser',
    component: UserRegisterComponent,
    data: { title: 'Agregar usuarios' }, 
  },  
  {
    path: 'deleteUser',
    component: UserDeleteComponent,
    data: { title: 'Eliminar usuarios' }, 
  },{
    path: 'updateUser',
    component: UserUpdateComponent,
    data: { title: 'Actualizar usuarios' }, 
  },{
    path: 'officeControl',
    component: OfficeControlManagementComponent,
    data: { title: 'Oficina control de oficina' }, 
  },{
    path: 'addoffice',
    component: AddControlsOfficesComponent,
    data: { title: 'Añadir oficina' }, 
  },{
    path: 'registerControl',
    component: ControlRegisterComponent,
    data: { title: 'Añadir oficina' }, 
  },{
    path: 'listControl',
    component: ControlListComponent,
    data: { title: 'Control'}, 
  },{
    path: 'deleteControl',
    component: ControlDeleteComponent,
    data: { title: 'Elimianar control'}, 
  },{
    path: 'updateControl',
    component: ControlUpdateComponent,
    data: { title: 'Actualizar control'}, 
  },{
    path: 'menu',
    component: MenuComponent,
    data: { title: 'Menu'}, 
  },{
    path: 'controlMenu',
    component: MenuControlComponent,
    data: { title: 'Menu'}, 
  },{
    path: 'menuPrincipal',
    component: MenuPrincipalComponent,
    data: { title: 'Menu'}, 
  },{
    path: 'check',
    component: CheckStatusComponent,
    data: { title: 'check'}, 
  }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    UserListComponent,
    UserRegisterComponent,
    UserDeleteComponent,
    UserUpdateComponent,
    RoleRegisterComponent,
    MenuComponent,
    ControlRegisterComponent,
    OfficeControlManagementComponent,
    AddControlsOfficesComponent,
    ControlListComponent,
    ControlUpdateComponent,
    ControlDeleteComponent,
    MenuControlComponent,
    MenuPrincipalComponent,
    CheckStatusComponent,
    NavbarLoginComponent
    
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatNativeDateModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatStepperModule,
    MatDatepickerModule,
    MatSelectModule,
    MatIconModule,
    MatDialogModule,
    MatDividerModule,
    MatCardModule,
    MatTabsModule,
    NgxChartsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
