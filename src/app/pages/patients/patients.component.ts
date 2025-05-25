import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PrescriptionModalComponent } from '../../shared/prescription-modal/prescription-modal.component';
import { FileUploadModalComponent } from '../../shared/file-upload-modal/file-upload-modal.component';

interface PatientDocument {
  name: string;
  type: string;
  icon: string;
}

interface MedicalRecord {
  date: string;
  symptoms: string;
  specialty: string;
}

interface Appointment {
  date: string;
  day: number;
  dayName: string;
  type: string;
  specialist: string;
  status: 'Confirmed' | 'Canceled' | 'Pending';
}

@Component({
  selector: 'app-patients',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './patients.component.html',
  styleUrl: './patients.component.scss'
})
export class PatientsComponent {  constructor(private modalService: NgbModal) {}

  openPrescriptionModal() {
    const modalRef = this.modalService.open(PrescriptionModalComponent, {
      centered: true,
      size: 'lg',
      backdrop: 'static'
    });
  }

  openFileUploadModal() {
    const modalRef = this.modalService.open(FileUploadModalComponent, {
      centered: true,
      size: 'md',
      backdrop: 'static'
    });

    modalRef.componentInstance.title = 'Upload File';

  }

  patient = {
    name: 'Sarah Lawsson',
    email: 'sarahlawsson1234@gmail.com',
    gender: 'Female',
    birthday: '23.7.1997',
    phoneNumber: '(555) 123-4567',
    insurance: 'Med Right',
    registerDate: '4 Nov. 2020',
    maritalStatus: 'Single',
    address: '12 Loran, Alex.',
    postalCode: '5310002',
    pastAppointments: 12,
    upcomingAppointments: 1
  };

  documents: PatientDocument[] = [
    { name: 'H-Pylori Analysis.pdf', type: 'pdf', icon: 'file-earmark-text' },
    { name: 'X-Ray.pdf', type: 'pdf', icon: 'file-earmark-text' },
    { name: 'Calprotectin Analysis.pdf', type: 'pdf', icon: 'file-earmark-text' },
    { name: 'Ultra Sound-Heart.pdf', type: 'pdf', icon: 'file-earmark-text' }
  ];

  medicalHistory: MedicalRecord[] = [
    { date: '26.12.2020', symptoms: 'Dyspepsia', specialty: 'GIT' },
    { date: '26.12.2020', symptoms: 'Dyspepsia', specialty: 'GIT' }
  ];

  appointments: Appointment[] = [
    {
      date: '26.12.2020',
      day: 23,
      dayName: 'MON',
      type: 'Examine',
      specialist: 'John Albert',
      status: 'Confirmed'
    },
    {
      date: '26.12.2020',
      day: 19,
      dayName: 'THU',
      type: 'Follow-Up',
      specialist: 'John Albert',
      status: 'Canceled'
    },
    {
      date: '26.12.2020',
      day: 15,
      dayName: 'SUN',
      type: 'Follow-Up',
      specialist: 'John Albert',
      status: 'Pending'
    },
    {
      date: '26.12.2020',
      day: 10,
      dayName: 'WED',
      type: 'Examine',
      specialist: 'John Albert',
      status: 'Confirmed'
    },
    {
      date: '26.12.2020',
      day: 10,
      dayName: 'WED',
      type: 'Examine',
      specialist: 'John Albert',
      status: 'Confirmed'
    }
  ];

  prescriptionSymptoms: string = '';
  prescriptionDetails: string = '';
  prescriptionDate: string = '12.20.2024';
}
