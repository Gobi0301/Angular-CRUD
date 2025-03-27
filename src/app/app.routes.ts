import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AppointmentListComponent } from './appointment-list/appointment-list.component';
import { AppoinmentCreateComponent } from './appoinment-create/appoinment-create.component';
import { AppoinmentDeleteComponent } from './appoinment-delete/appoinment-delete.component';
import { AppoinmentEditComponent } from './appoinment-edit/appoinment-edit.component';

export const approutes: Routes = [
  { path: '', component: LoginComponent },
  {path:'addAppoinment',component:AppoinmentCreateComponent},
  {path :'appoinmentList',component:AppointmentListComponent},
  {path:'appoinmentDelete',component:AppoinmentDeleteComponent},
  {path:'edit-appointment/:id',component:AppoinmentEditComponent},
  {path :'login',component:LoginComponent}
];