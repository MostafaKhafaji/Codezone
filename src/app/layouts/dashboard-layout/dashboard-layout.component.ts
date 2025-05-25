import { Component, HostListener, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../../shared/sidebar/sidebar.component';

@Component({
    selector: 'app-dashboard-layout',
    imports: [RouterModule, NgbCollapseModule, CommonModule, SidebarComponent],
    templateUrl: './dashboard-layout.component.html',
    styleUrl: './dashboard-layout.component.scss'
})
export class DashboardLayoutComponent implements OnInit {
  isMenuCollapsed = true;
  isSidebarCollapsed = false;
  isIconOnly = false;

  ngOnInit() {
    this.checkScreenWidth();
  }

  @HostListener('window:resize')
  checkScreenWidth() {
    if (window.innerWidth < 1024) {
      this.isSidebarCollapsed = true;
      this.isIconOnly = false;
    } else {
      this.isSidebarCollapsed = false;
      this.isIconOnly = false;
    }
  }

  toggleSidebar() {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
    if (!this.isSidebarCollapsed && window.innerWidth < 1024) {
      this.isIconOnly = false;
    }
  }

}
