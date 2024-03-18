import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from '../../../models/user';
import { ProfileStatsComponent } from '../profile-stats/profile-stats.component';
import { ProfileSocialsComponent } from '../profile-socials/profile-socials.component';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [CommonModule, ProfileStatsComponent, ProfileSocialsComponent],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss',
})
export class UserProfileComponent {
  @Input() user!: User;
  // create an interface for when a user is not found => we receive { message: 'not found', documentation_url: string }
}
