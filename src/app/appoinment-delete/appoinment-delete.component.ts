import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-appoinment-delete',
  templateUrl: './appoinment-delete.component.html',
  styleUrl: './appoinment-delete.component.css'
})
export class AppoinmentDeleteComponent {

  constructor(private router: Router) {}

  goBack() {
    this.router.navigate(['/appoinmentList']);
}
}
