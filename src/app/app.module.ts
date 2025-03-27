import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppointmentListComponent } from './appointment-list/appointment-list.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { approutes } from './app.routes';
import { AppoinmentCreateComponent } from './appoinment-create/appoinment-create.component';
import { AppoinmentDeleteComponent } from './appoinment-delete/appoinment-delete.component';
import { AppoinmentEditComponent } from './appoinment-edit/appoinment-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AppointmentListComponent,
    AppoinmentCreateComponent,
    AppoinmentDeleteComponent,
    AppoinmentEditComponent
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(approutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
