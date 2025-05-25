import { NgClass } from '@angular/common';
import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-card-with-icon',
  standalone: true,
  imports: [NgClass],
  templateUrl: './card-with-icon.component.html',
  styleUrl: './card-with-icon.component.scss'
})
export class CardWithIconComponent {
  icon = input<string>('');
  label = input<string>('');
  number = input<number>(0);
  percentage = input<number>(0);
  state = input<string>();
  iconPath = computed(()=> 'assets/icons/' + this.icon() + '.svg');
isMenuSticky: any;
}
