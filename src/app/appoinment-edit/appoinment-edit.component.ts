import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Appointment } from '../models/appointment';

@Component({
  selector: 'app-appoinment-edit',
  templateUrl: './appoinment-edit.component.html',
  styleUrl: './appoinment-edit.component.css'
})
export class AppoinmentEditComponent implements OnInit {

  appointment!: Appointment; // The appointment being edited
  appointments: Appointment[] = []; // All appointments
  appointmentId!: number; // ID of the appointment to edit

  constructor( private router: Router,private route:ActivatedRoute) {}



  ngOnInit(): void {
    debugger
    // Get the appointment ID from the route parameters
    this.route.params.subscribe(params => {
      this.appointmentId = +params['id'];
      this.loadAppointments();
      this.appointment = this.appointments.find(app => app.id === this.appointmentId)!;
    });
  }

  loadAppointments() {
    debugger
    const savedAppointments = localStorage.getItem("appointments");
    this.appointments = savedAppointments ? JSON.parse(savedAppointments) : [];
  }

  updateAppointment() {
    debugger
    const index = this.appointments.findIndex(app => app.id === this.appointmentId);
    if (index !== -1) {
      this.appointments[index] = this.appointment; // Update the appointment

      localStorage.setItem("appointments", JSON.stringify(this.appointments));
      this.router.navigate(['/appoinmentList']);
    }
  }
}

