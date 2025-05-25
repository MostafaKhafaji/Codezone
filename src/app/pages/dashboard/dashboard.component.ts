import { Component } from '@angular/core';
import { CardWithIconComponent } from "../../shared/card-with-icon/card-with-icon.component";
import { CommonModule } from '@angular/common';
import { Chart, registerables } from 'chart.js';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

Chart.register(...registerables);

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CardWithIconComponent, CommonModule, NgbDatepickerModule, FormsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  currentMonth: string = 'December 2024';
  selectedDate: number = 8;

  daysOfWeek: string[] = ['Sa', 'Su', 'Mo', 'Tu', 'We', 'Th', 'Fr'];

  calendarDates: (number | 0)[][] = [
    [0, 0, 0, 0, 0, 0, 1],
    [2, 3, 4, 5, 6, 7, 8],
    [9, 10, 11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20, 21, 22],
    [23, 24, 25, 26, 27, 28, 29],
    [30, 31, 0, 0, 0, 0, 0]
  ];

  doctorActivities = [
    {
      avatar: 'assets/img/user.png',
      name: 'Dr. Mart Edisson',
      dept: 'GP',
      deptColor: '#FF9F43',
      time: '11:00 - 1:00 PM'
    },
    {
      avatar: 'assets/img/user.png',
      name: 'Dr. Mart Edisson',
      dept: 'Ortho',
      deptColor: '#5CCCC5',
      time: '5:00 - 7:00 PM'
    },
    {
      avatar: 'assets/img/user.png',
      name: 'Dr. Mart Edisson',
      dept: 'ENT',
      deptColor: '#FF9F43',
      time: '9:00 - 11:00 AM'
    }
  ];


  stats = [
    {
      icon: 'people',
      label: 'Total Appointments',
      number: 9200,
      percentage: 32,
      state: 'up'
    },
    {
      icon: 'group',
      label: 'New Patients',
      number: 1200,
      percentage: 20,
      state: 'up'
    },
    {
      icon: 'doctor',
      label: 'Total Doctors',
      number: 300,
      percentage: 12,
      state: 'down'
    },
    {
      icon: 'cancel_user',
      label: 'Canceled Appointments',
      number: 12,
      percentage: 12,
      state: 'down'
    }
  ];

  events = [
    {
      avatar: 'assets/icons/doctor1.jpg',
      name: 'Dr. Mart Edisson',
      dept: 'GP',
      time: '11:00 – 1:00 PM'
    },
    {
      avatar: 'assets/icons/doctor1.jpg',
      name: 'Dr. Mart Edisson',
      dept: 'Ortho',
      time: '5:00 – 7:00 PM'
    },
    {
      avatar: 'assets/icons/doctor1.jpg',
      name: 'Dr. Mart Edisson',
      dept: 'ENT',
      time: '9:00 – 11:00 AM'
    }
  ];


  departments = [
    { name: 'General Physician', percentage: 35, color: '#20c9d5', icon: 'heart-pulse' },
    { name: 'ENT', percentage: 15, color: '#9370DB', icon: 'ear' },
    { name: 'Orthopedic', percentage: 10, color: '#20b2aa', icon: 'bandaid' },
    { name: 'Dentist', percentage: 25, color: '#ffa07a', icon: 'emoji-smile' },
    { name: 'Cardiology', percentage: 15, color: '#FFD700', icon: 'heart' }
  ];

  ngAfterViewInit() {
    this.createAppointmentsChart();
    this.createDepartmentChart();
  }

  createAppointmentsChart() {
    const ctx = document.getElementById('appointmentsChart') as HTMLCanvasElement;

    if (ctx) {
      new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['Sat.', 'Sun.', 'Mon.', 'Tues.', 'Wed.', 'Thurs.', 'Friday'],
          datasets: [
            {
              label: 'Women',
              data: [600, 650, 620, 660, 730, 900, 1000],
              backgroundColor: '#5CCCC5',
              borderRadius: 10,
              barPercentage:0.9,
              categoryPercentage: 0.3
            },
            {
              label: 'Men',
              data: [800, 580, 720, 630, 900, 730, 950],
              backgroundColor: '#FF9F43',
              borderRadius: 10,
              barPercentage:0.9 ,
              categoryPercentage: 0.3
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false
            }
          },
          scales: {
            y: {
              beginAtZero: true,
              max: 1100,
              ticks: {
                stepSize: 100
              },
              grid: {
                color: '#f0f0f0'
              }
            },
            x: {
              grid: {
                display: false
              }
            }
          }
        }
      });
    }
  }

  createDepartmentChart() {
    const ctx = document.getElementById('departmentChart') as HTMLCanvasElement;

    if (ctx) {
      new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels: this.departments.map(d => d.name),
          datasets: [{
            data: this.departments.map(d => d.percentage),
            backgroundColor: this.departments.map(d => d.color),
            borderWidth: 0,
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          cutout: '70%',
          plugins: {
            legend: {
              display: false
            },
            tooltip: {
              enabled: true
            }
          }
        }
      });
    }
  }
}
