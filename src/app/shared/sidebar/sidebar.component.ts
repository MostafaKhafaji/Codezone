import { Component, EventEmitter, input, Input, output, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-sidebar',
    imports: [CommonModule, RouterModule],
    standalone: true,
    templateUrl: './sidebar.component.html',
    styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  isSidebarCollapsed = input<boolean> (false);
  isIconOnly = input<boolean> (false);

  sidebarToggle = output<void>();
  iconOnlyToggle =output<void>();

  toggleSidebar(): void {
    this.sidebarToggle.emit();
  }

}
