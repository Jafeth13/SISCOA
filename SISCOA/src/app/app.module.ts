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
import { ExtraDayComponent } from './extra-day/extra-day.component';
import { ControlOficeComponent } from './control-ofice/control-ofice.component';
import { CompleteControlComponent } from './complete-control/complete-control.component';
import { CompleteControlFillComponent } from './complete-control-fill/complete-control-fill.component';
import { RolListComponent } from './rol-list/rol-list.component';
import { RolRegisterComponent } from './rol-register/rol-register.component';
import { RolUpdateComponent } from './rol-update/rol-update.component';
import { RolDeleteComponent } from './rol-delete/rol-delete.component';
import { PermissionListComponent } from './permission-list/permission-list.component';
import { PermissionDeleteComponent } from './permission-delete/permission-delete.component';
import { PermissionUpdateComponent } from './permission-update/permission-update.component';
import { PermissionRegisterComponent } from './permission-register/permission-register.component';
import { OfficeListComponent } from './office-list/office-list.component';
import { OfficeRegisterComponent } from './office-register/office-register.component';
import { OfficeUpdateComponent } from './office-update/office-update.component';
import { OfficeDeleteComponent } from './office-delete/office-delete.component';
import { PeriodListComponent } from './period-list/period-list.component';
import { PeriodDeleteComponent } from './period-delete/period-delete.component';
import { PeriodUpdateComponent } from './period-update/period-update.component';
import { PeriodRegisterComponent } from './period-register/period-register.component';
import { ConditionListComponent } from './condition-list/condition-list.component';
import { ConditionDeleteComponent } from './condition-delete/condition-delete.component';
import { ConditionUpdateComponent } from './condition-update/condition-update.component';
import { ConditionRegisterComponent } from './condition-register/condition-register.component';

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
  },{
    path: 'extraDay',
    component: ExtraDayComponent,
    data: { title: 'Extra day'}, 
  },{
    path: 'controlOfice',
    component: ControlOficeComponent,
    data: { title: 'Control office'}, 
  },{
    path: 'completeControl',
    component: CompleteControlComponent,
    data: { title: 'Completar control'}, 
  },{
    path: 'completeControlFile',
    component: CompleteControlFillComponent,
    data: { title: 'Completar control'}, 
  },{
    path: 'rolList',
    component: RolListComponent,
    data: { title: 'Listar Roles'}, 
  },{
    path: 'rolRegister',
    component: RolRegisterComponent,
    data: { title: 'Registrar Roles'}, 
  },{
    path: 'rolUpdate',
    component: RolUpdateComponent,
    data: { title: 'Actualizar Roles'}, 
  },{
    path: 'rolDelete',
    component: RolDeleteComponent,
    data: { title: 'Eliminar Roles'}, 
  },{
    path: 'permissionList',
    component: PermissionListComponent,
    data: { title: 'Listar Permisos'}, 
  },{
    path: 'permissionRegister',
    component: PermissionRegisterComponent,
    data: { title: 'Registrar Permisos'}, 
  },{
    path: 'permissionUpdate',
    component: PermissionUpdateComponent,
    data: { title: 'Actualizar Permisos'}, 
  },{
    path: 'permissionDelete',
    component: PermissionDeleteComponent,
    data: { title: 'Eliminar Permisos'}, 
  },{
    path: 'officeList',
    component: OfficeListComponent,
    data: { title: 'Listar Oficinas'}, 
  },{
    path: 'officeRegister',
    component: OfficeRegisterComponent,
    data: { title: 'Registrar Oficinas'}, 
  },{
    path: 'officeUpdate',
    component: OfficeUpdateComponent,
    data: { title: 'Actualizar Oficinas'}, 
  },{
    path: 'officeDelete',
    component: OfficeDeleteComponent,
    data: { title: 'Eliminar Oficinas'}, 
  },{
    path: 'periodList',
    component: PeriodListComponent,
    data: { title: 'Listar Periodos'}, 
  },{
    path: 'periodRegister',
    component: PeriodRegisterComponent,
    data: { title: 'Registrar Periodos'}, 
  },{
    path: 'periodUpdate',
    component: PeriodUpdateComponent,
    data: { title: 'Actualizar Periodos'}, 
  },{
    path: 'periodDelete',
    component: PeriodDeleteComponent,
    data: { title: 'Eliminar Periodos'}, 
  },{
    path: 'conditionList',
    component: ConditionListComponent,
    data: { title: 'Lista Estado'}, 
  },{
    path: 'conditionRegister',
    component: ConditionRegisterComponent,
    data: { title: 'Registrar Estado'}, 
  },{
    path: 'conditionUpdate',
    component: ConditionUpdateComponent,
    data: { title: 'Actualizar Estado'}, 
  },{
    path: 'conditionDelete',
    component: ConditionUpdateComponent,
    data: { title: 'Eliminar Estado'}, 
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
    NavbarLoginComponent,
    ExtraDayComponent,
    ControlOficeComponent,
    CompleteControlComponent,
    CompleteControlFillComponent,
    RolListComponent,
    RolRegisterComponent,
    RolUpdateComponent,
    RolDeleteComponent,
    PermissionListComponent,
    PermissionDeleteComponent,
    PermissionUpdateComponent,
    PermissionRegisterComponent,
    OfficeListComponent,
    OfficeRegisterComponent,
    OfficeUpdateComponent,
    OfficeDeleteComponent,
    PeriodListComponent,
    PeriodDeleteComponent,
    PeriodUpdateComponent,
    PeriodRegisterComponent,
    ConditionListComponent,
    ConditionDeleteComponent,
    ConditionUpdateComponent,
    ConditionRegisterComponent
    
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
