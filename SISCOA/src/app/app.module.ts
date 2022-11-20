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
import { GraphicByStatusComponent } from './graphic-by-status/graphic-by-status.component';
import { NatvarSupervisoresComponent } from './natvar-supervisores/natvar-supervisores.component';
import { MenuSupervisorComponent } from './menu-supervisor/menu-supervisor.component';
import { MenuOficinasComponent } from './menu-oficinas/menu-oficinas.component';
import { NatvarOficinasComponent } from './natvar-oficinas/natvar-oficinas.component';
import { ControlOficeNewComponent } from './control-ofice-new/control-ofice-new.component';
import { CheckSupervisorComponent } from './check-supervisor/check-supervisor.component';
import { ExtraDaySupComponent } from './extra-day-sup/extra-day-sup.component';
import { ControlBySlopSupComponent } from './control-by-slop-sup/control-by-slop-sup.component';
import { ControlMenuSupComponent } from './control-menu-sup/control-menu-sup.component';
import { AddControlSupComponent } from './add-control-sup/add-control-sup.component';
import { OfficeManagmentSupComponent } from './office-managment-sup/office-managment-sup.component';
import { ControlOfficeSupComponent } from './control-office-sup/control-office-sup.component';
import { CompleteControlSupComponent } from './complete-control-sup/complete-control-sup.component';
import { csvParse } from 'd3';
import { SeePeriodComponent } from './see-period/see-period.component';
import { SeeConditionalComponent } from './see-conditional/see-conditional.component';
import { SeePermisionComponent } from './see-permision/see-permision.component';
import { TableByStatusComponent } from './table-by-status/table-by-status.component';
import { TableByStatusSupComponent } from './table-by-status-sup/table-by-status-sup.component';


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
    path: 'deleteUser/:ID',
    component: UserDeleteComponent,
    data: { title: 'Eliminar usuarios' }, 
  },{
    path: 'updateUser/:ID',
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
    path: 'deleteControl/:ID',
    component: ControlDeleteComponent,
    data: { title: 'Elimianar control'}, 
  },{
    path: 'updateControl/:ID',
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
    path: 'menuPrincipal/:ID',
    component: MenuPrincipalComponent,
    data: { title: 'Menu'}, 
  },{
    path: 'menuOficinas',
    component: MenuOficinasComponent,
    data: { title: 'Menu'}, 
  },{
    path: 'natvarOficinas',
    component: NatvarOficinasComponent,
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
    path: 'completeControl/:ID',
    component: CompleteControlComponent,
    data: { title: 'Completar control'}, 
  },{
    path: 'completeControlFile/:ID',
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
    path: 'rolUpdate/:ID',
    component: RolUpdateComponent,
    data: { title: 'Actualizar Roles'}, 
  },{
    path: 'rolDelete/:ID',
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
    path: 'permissionUpdate/:ID',
    component: PermissionUpdateComponent,
    data: { title: 'Actualizar Permisos'}, 
  },{
    path: 'permissionDelete/:ID',
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
    path: 'officeUpdate/:ID',
    component: OfficeUpdateComponent,
    data: { title: 'Actualizar Oficinas'}, 
  },{
    path: 'officeDelete/:ID',
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
    path: 'periodUpdate/:ID',
    component: PeriodUpdateComponent,
    data: { title: 'Actualizar Periodos'}, 
  },{
    path: 'periodDelete/:ID',
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
    path: 'conditionUpdate/:ID',
    component: ConditionUpdateComponent,
    data: { title: 'Actualizar Estado'}, 
  },{
    path: 'conditionDelete/:ID',
    component: ConditionDeleteComponent,
    data: { title: 'Eliminar Estado'}, 
  },{
    path: 'menuConfiguration',
    component: MenuConfigurationComponent,
    data: { title: 'Menu configuracion'}, 
  },{
    path: 'menuSupervisor',
    component: MenuSupervisorComponent,
    data: { title: 'Menu '}, 
  },{
    path: 'natvarSupervisor',
    component: NatvarSupervisoresComponent,
    data: { title: 'Menu '}, 
  },{
    path: 'actionUser',
    component: ActionUserComponent,
    data: { title: 'Acciones'}, 
  },{
    path: 'errorSystem',
    component: ErrorSystemComponent,
    data: { title: 'Errores'}, 
  },{
    path: 'controlSee/:ID',
    component: ControlSeeComponent,
    data: { title: 'Controles'}, 
  },{
    path: 'userSee/:ID',
    component: UserSeeComponent,
    data: { title: 'Usuarios'}, 
  },{
    path: 'officeSee/:ID',
    component: OfficeSeeComponent,
    data: { title: 'Oficina'}, 
  },{
    path: 'rolSee/:ID',
    component: RolSeeComponent,
    data: { title: 'Rol'}, 
  },{
    path: 'navbar',
    component: NavbarComponent,
    data: { title: 'Rol'}, 
  },{
    path: 'controlBySlope',
    component: ControlBySlopesComponent,
    data: { title: 'Pendiente'}, 
  },{
    path: 'seeControlFull/:ID',
    component: SeeControlFullComponent,
    data: { title: 'Completo'}, 
  },{
    path: 'controloficesub',
    component: ControlOficeNewComponent,
    data: { title: 'Completo'}, 
  },{
    path: 'checkSup',
    component: CheckSupervisorComponent,
    data: { title: 'Completo'}, 
  },{
    path: 'controlExtraDay',
    component: ExtraDaySupComponent,
    data: { title: 'Completo'}, 
  },{
    path: 'BySlopSup',
    component: ControlBySlopSupComponent,
    data: { title: 'Completo'}, 
  },{
    path: 'controlMenuSup',
    component: ControlMenuSupComponent,
    data: { title: 'Completo'}, 
  }
  ,{
    path: 'addControlSup',
    component: AddControlSupComponent,
    data: { title: 'Completo'}, 
  },{
    path: 'officeManagmentSup',
    component: OfficeManagmentSupComponent,
    data: { title: 'Completo'}, 
  },{
    path: 'controlOfficeSup',
    component: ControlOfficeSupComponent,
    data: { title: 'Completo'}, 
  },{
    path: 'completeControlSub/:ID',
    component: CompleteControlSupComponent,
    data: { title: 'Completo'}, 
  }
  ,{
    path: 'seePeriod/:ID',
    component: SeePeriodComponent,
    data: { title: 'Completo'}, 
  },{
    path: 'seeConditional/:ID',
    component: SeeConditionalComponent,
    data: { title: 'Completo'}, 
  },{
    path: 'seePermision/:ID',
    component: SeePermisionComponent,
    data: { title: 'Completo'}, 
  },{
    path: 'tableByStatus',
    component: TableByStatusComponent,
    data: { title: 'Tabla'}, 
  },{
    path: 'tableByStatusSup',
    component: TableByStatusSupComponent,
    data: { title: 'Tabla'}, 
  },

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
    SeeControlFullComponent,
    GraphicByStatusComponent,
    NatvarSupervisoresComponent,
    MenuSupervisorComponent,
    MenuOficinasComponent,
    NatvarOficinasComponent,
    ControlOficeNewComponent,
    CheckSupervisorComponent,
    ExtraDaySupComponent,
    ControlBySlopSupComponent,
    ControlMenuSupComponent,
    AddControlSupComponent,
    OfficeManagmentSupComponent,
    ControlOfficeSupComponent,
    CompleteControlSupComponent,
    SeePeriodComponent,
    SeeConditionalComponent,
    SeePermisionComponent,
    TableByStatusComponent,
    TableByStatusSupComponent
    
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
