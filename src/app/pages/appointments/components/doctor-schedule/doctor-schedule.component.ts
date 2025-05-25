import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbDropdownModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

interface DoctorAppointment {
  id?: number;
  day: string;
  time: string;
  doctor: string;
  specialty: string;
  bgColor: string;
}

@Component({  selector: 'app-doctor-schedule',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './doctor-schedule.component.html',
  styleUrl: './doctor-schedule.component.scss'
})
export class DoctorScheduleComponent {
  currentDate = new Date();
  currentMonth: string;
  months = [
    'January', 'February', 'March', 'April',
    'May', 'June', 'July', 'August',
    'September', 'October', 'November', 'December'
  ];

  daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  specialties = ['Dentist', 'GP', 'ENT', 'GIT', 'Ortho'];

  doctorSchedule: DoctorAppointment[] = [
    { id: 1, day: 'Sunday', time: '10:00-12:00 PM', doctor: 'Dr. John', specialty: '(Dentist)', bgColor: 'rgba(255, 218, 185, 0.5)' },
    { id: 2, day: 'Sunday', time: '7:00-9:00 PM', doctor: 'Dr. Smith', specialty: '(Ortho)', bgColor: 'rgba(255, 255, 185, 0.5)' },
    { id: 3, day: 'Monday', time: '1:00-3:00 PM', doctor: 'Dr. Johnson', specialty: '(GP)', bgColor: 'rgba(200, 255, 200, 0.5)' },
    { id: 4, day: 'Saturday', time: '2:00-4:00 PM', doctor: 'Dr. Williams', specialty: '(GP)', bgColor: 'rgba(255, 255, 185, 0.5)' },
    { id: 5, day: 'Tuesday', time: '5:00-7:00 PM', doctor: 'Dr. Brown', specialty: '(GP)', bgColor: 'rgba(200, 255, 200, 0.5)' },
    { id: 6, day: 'Wednesday', time: '10:00-12:00 PM', doctor: 'Dr. Davis', specialty: '(GIT)', bgColor: 'rgba(173, 216, 230, 0.5)' },
    { id: 7, day: 'Wednesday', time: '3:00-5:00 PM', doctor: 'Dr. Miller', specialty: '(Dentist)', bgColor: 'rgba(255, 218, 185, 0.5)' },
    { id: 8, day: 'Thursday', time: '1:00-3:00 PM', doctor: 'Dr. Wilson', specialty: '(ENT)', bgColor: 'rgba(220, 208, 255, 0.5)' },
    { id: 9, day: 'Thursday', time: '10:00-12:00 AM', doctor: 'Dr. Moore', specialty: '(GIT)', bgColor: 'rgba(173, 216, 230, 0.5)' },
    { id: 10, day: 'Friday', time: '5:00-7:00 PM', doctor: 'Dr. Taylor', specialty: '(Dentist)', bgColor: 'rgba(255, 218, 185, 0.5)' },
    { id: 11, day: 'Saturday', time: '9:00-11:00 PM', doctor: 'Dr. Anderson', specialty: '(GIT)', bgColor: 'rgba(173, 216, 230, 0.5)' },
    { id: 12, day: 'Tuesday', time: '10:00-12:00 AM', doctor: 'Dr. Thomas', specialty: '(ENT)', bgColor: 'rgba(220, 208, 255, 0.5)' }
  ];

  selectedAppointment: DoctorAppointment | null = null;

  constructor() {
    this.currentMonth = this.months[this.currentDate.getMonth()];
  }

  getAppointmentsByDay(day: string): DoctorAppointment[] {
    return this.doctorSchedule.filter(appointment => appointment.day === day);
  }

  getSpecialtyColor(specialty: string): string {
    const specialtyName = specialty.replace(/[()]/g, '').toLowerCase();
    switch(specialtyName) {
      case 'dentist': return 'rgba(255, 218, 185, 0.5)';
      case 'gp': return 'rgba(200, 255, 200, 0.5)';
      case 'ent': return 'rgba(220, 208, 255, 0.5)';
      case 'git': return 'rgba(173, 216, 230, 0.5)';
      case 'ortho': return 'rgba(255, 255, 185, 0.5)';
      default: return 'rgba(240, 240, 240, 0.5)';
    }
  }

}
