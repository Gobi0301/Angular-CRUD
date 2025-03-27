import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Appointment } from '../models/appointment';

@Component({
  selector: 'app-appoinment-create',
  templateUrl: './appoinment-create.component.html',
  styleUrl: './appoinment-create.component.css'
})
export class AppoinmentCreateComponent implements OnInit{

  newAppointmentTitle: string = "";
  newAppointmentDate: Date = new Date();
  appointments: Appointment[] = [];

  constructor(private router :Router){

  }

  ngOnInit(): void {
    let savedAppointments = localStorage.getItem("appointments");
    this.appointments = savedAppointments ? JSON.parse(savedAppointments) : [];
  }

  addAppointment() {
    if (this.newAppointmentTitle.trim().length && this.newAppointmentDate) {
      let newAppointment: Appointment = {
        id: Date.now(),
        title: this.newAppointmentTitle,
        date: this.newAppointmentDate
      };

      this.appointments.push(newAppointment);
      this.newAppointmentTitle = "";
      this.newAppointmentDate = new Date();
      localStorage.setItem("appointments", JSON.stringify(this.appointments));

      this.router.navigate(["/appoinmentList"]);
    }
  }
}