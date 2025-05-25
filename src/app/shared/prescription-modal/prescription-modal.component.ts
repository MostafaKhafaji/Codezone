import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-prescription-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './prescription-modal.component.html',
  styleUrl: './prescription-modal.component.scss'
})
export class PrescriptionModalComponent {
  @Input() patient: any;

  prescriptionSymptoms: string = '';
  prescriptionDiagnosis: string = '';
  prescriptionDetails: string = '';
  prescriptionDate: string = '';
  patientAge: string = '';
  doctorSignature: string = '';

  constructor(public activeModal: NgbActiveModal) {}

  dismiss() {
    this.activeModal.dismiss();
  }

}
