import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbDropdownModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

interface Appointment {
  patientName: string;
  gender: string;
  department: string;
  doctor: string;
  time: string;
  date: string;
  status: boolean | string;
}

@Component({
  selector: 'app-appointments',
  standalone: true,
  imports: [CommonModule, NgbDropdownModule, NgbPaginationModule],
  templateUrl: './appointments.component.html',
  styleUrl: './appointments.component.scss'
})
export class AppointmentsComponent {
  activeTab: string = 'request';

  appointments: Appointment[] = Array(10).fill(null).map(() => ({
    patientName: 'Sarah Lawsson',
    gender: 'Female',
    department: 'GIT',
    doctor: 'John Albert',
    time: '1:00 PM',
    date: '20 Nov, 2024',
    status: Math.random() > 0.5 ? 'Confirmed' : 'Cancelled'
  }));

  page = 1;
  pageSize = 10;
  collectionSize = 60;

  setActiveTab(tab: string): void {
    this.activeTab = tab;
  }
}
