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
import { UserUpdateComponent } from './user-update/user-update.component';import {MatNativeDateModule} from '@angular/material/core';
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
import { MenuConfigurationComponent } from './menu-configuration/menu-configuration.component';
import { ErrorSystemComponent } from './error-system/error-system.component';
import { ActionUserComponent } from './action-user/action-user.component';
import { MatSortModule, MAT_SORT_HEADER_INTL_PROVIDER } from '@angular/material/sort';
import { ControlSeeComponent } from './control-see/control-see.component';
import { OfficeSeeComponent } from './office-see/office-see.component';
import { UserSeeComponent } from './user-see/user-see.component';
import { RolSeeComponent } from './rol-see/rol-see.component';
import { ControlBySlopesComponent } from './control-by-slopes/control-by-slopes.component';
import { SeeControlFullComponent } from './see-control-full/see-control-full.component';


const appRoutes: Routes = [
  {
    path: '',
    component: LoginComponent,
    data: { title: 'Login' }, 
  },
  {
    path: 'listUser/:ID',
    component: UserListComponent,
    data: { title: 'Lista de usuarios' }, 
  },  
  {
    path: 'registerUser/:ID',
    component: UserRegisterComponent,
    data: { title: 'Agregar usuarios' }, 
  },  
  {
    path: 'deleteUser/:ID/:IDS',
    component: UserDeleteComponent,
    data: { title: 'Eliminar usuarios' }, 
  },{
    path: 'updateUser/:ID/:IDS',
    component: UserUpdateComponent,
    data: { title: 'Actualizar usuarios' }, 
  },{
    path: 'officeControl/:ID',
    component: OfficeControlManagementComponent,
    data: { title: 'Oficina control de oficina' }, 
  },{
    path: 'addoffice/:ID',
    component: AddControlsOfficesComponent,
    data: { title: 'Añadir oficina' }, 
  },{
    path: 'registerControl/:ID',
    component: ControlRegisterComponent,
    data: { title: 'Añadir oficina' }, 
  },{
    path: 'listControl/:ID',
    component: ControlListComponent,
    data: { title: 'Control'}, 
  },{
    path: 'deleteControl/:ID/:IDS',
    component: ControlDeleteComponent,
    data: { title: 'Elimianar control'}, 
  },{
    path: 'updateControl/:ID/:IDS',
    component: ControlUpdateComponent,
    data: { title: 'Actualizar control'}, 
  },{
    path: 'menu/:ID',
    component: MenuComponent,
    data: { title: 'Menu'}, 
  },{
    path: 'controlMenu/:ID',
    component: MenuControlComponent,
    data: { title: 'Menu'}, 
  },{
    path: 'menuPrincipal/:ID',
    component: MenuPrincipalComponent,
    data: { title: 'Menu'}, 
  },{
    path: 'check/:ID',
    component: CheckStatusComponent,
    data: { title: 'check'}, 
  },{
    path: 'extraDay/:ID',
    component: ExtraDayComponent,
    data: { title: 'Extra day'}, 
  },{
    path: 'controlOfice/:ID',
    component: ControlOficeComponent,
    data: { title: 'Control office'}, 
  },{
    path: 'completeControl',
    component: CompleteControlComponent,
    data: { title: 'Completar control'}, 
  },{
    path: 'completeControlFile/:ID',
    component: CompleteControlFillComponent,
    data: { title: 'Completar control'}, 
  },{
    path: 'rolList/:ID',
    component: RolListComponent,
    data: { title: 'Listar Roles'}, 
  },{
    path: 'rolRegister/:ID',
    component: RolRegisterComponent,
    data: { title: 'Registrar Roles'}, 
  },{
    path: 'rolUpdate/:ID/:IDS',
    component: RolUpdateComponent,
    data: { title: 'Actualizar Roles'}, 
  },{
    path: 'rolDelete/:ID/:IDS',
    component: RolDeleteComponent,
    data: { title: 'Eliminar Roles'}, 
  },{
    path: 'permissionList/:ID',
    component: PermissionListComponent,
    data: { title: 'Listar Permisos'}, 
  },{
    path: 'permissionRegister/:ID',
    component: PermissionRegisterComponent,
    data: { title: 'Registrar Permisos'}, 
  },{
    path: 'permissionUpdate/:ID/:IDS',
    component: PermissionUpdateComponent,
    data: { title: 'Actualizar Permisos'}, 
  },{
    path: 'permissionDelete/:ID/:IDS',
    component: PermissionDeleteComponent,
    data: { title: 'Eliminar Permisos'}, 
  },{
    path: 'officeList/:ID',
    component: OfficeListComponent,
    data: { title: 'Listar Oficinas'}, 
  },{
    path: 'officeRegister/:ID',
    component: OfficeRegisterComponent,
    data: { title: 'Registrar Oficinas'}, 
  },{
    path: 'officeUpdate/:ID/:IDS',
    component: OfficeUpdateComponent,
    data: { title: 'Actualizar Oficinas'}, 
  },{
    path: 'officeDelete/:ID/:IDS',
    component: OfficeDeleteComponent,
    data: { title: 'Eliminar Oficinas'}, 
  },{
    path: 'periodList/:ID',
    component: PeriodListComponent,
    data: { title: 'Listar Periodos'}, 
  },{
    path: 'periodRegister/:ID',
    component: PeriodRegisterComponent,
    data: { title: 'Registrar Periodos'}, 
  },{
    path: 'periodUpdate/:ID/:IDS',
    component: PeriodUpdateComponent,
    data: { title: 'Actualizar Periodos'}, 
  },{
    path: 'periodDelete/:ID/:IDS',
    component: PeriodDeleteComponent,
    data: { title: 'Eliminar Periodos'}, 
  },{
    path: 'conditionList/:ID',
    component: ConditionListComponent,
    data: { title: 'Lista Estado'}, 
  },{
    path: 'conditionRegister/:ID',
    component: ConditionRegisterComponent,
    data: { title: 'Registrar Estado'}, 
  },{
    path: 'conditionUpdate/:ID/:IDS',
    component: ConditionUpdateComponent,
    data: { title: 'Actualizar Estado'}, 
  },{
    path: 'conditionDelete/:ID/:IDS',
    component: ConditionDeleteComponent,
    data: { title: 'Eliminar Estado'}, 
  },{
    path: 'menuConfiguration/:ID',
    component: MenuConfigurationComponent,
    data: { title: 'Menu configuracion'}, 
  },{
    path: 'actionUser/:ID',
    component: ActionUserComponent,
    data: { title: 'Acciones'}, 
  },{
    path: 'errorSystem/:ID',
    component: ErrorSystemComponent,
    data: { title: 'Errores'}, 
  },{
    path: 'controlSee/:ID/:IDS',
    component: ControlSeeComponent,
    data: { title: 'Controles'}, 
  },{
    path: 'userSee/:ID/:IDS',
    component: UserSeeComponent,
    data: { title: 'Usuarios'}, 
  },{
    path: 'officeSee/:ID/:IDS',
    component: OfficeSeeComponent,
    data: { title: 'Oficina'}, 
  },{
    path: 'rolSee/:ID/:IDS',
    component: RolSeeComponent,
    data: { title: 'Rol'}, 
  },{
    path: 'navbar/:ID',
    component: NavbarComponent,
    data: { title: 'Rol'}, 
  },{
    path: 'controlBySlope/:ID',
    component: ControlBySlopesComponent,
    data: { title: 'Pendiente'}, 
  },{
    path: 'seeControlFull/:ID/:IDS',
    component: SeeControlFullComponent,
    data: { title: 'Completo'}, 
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
    UserUpdateComponent,MenuComponent,
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
    ConditionRegisterComponent,
    MenuConfigurationComponent,
    ErrorSystemComponent,
    ActionUserComponent,
    ControlSeeComponent,
    OfficeSeeComponent,
    UserSeeComponent,
    RolSeeComponent,
    ControlBySlopesComponent,
    SeeControlFullComponent
    
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
    MatSortModule,
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
    MatTabsModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
