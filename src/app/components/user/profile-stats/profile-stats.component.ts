import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-profile-stats',
  standalone: true,
  imports: [],
  templateUrl: './profile-stats.component.html',
  styleUrl: './profile-stats.component.scss',
})
export class ProfileStatsComponent {
  @Input() repos!: number;
  @Input() followers!: number;
  @Input() following!: number;
}
