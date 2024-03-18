import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from '../../../models/user';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss',
})
export class UserProfileComponent {
  @Input() user!: User;
  // create an interface for when a user is not found => we receive { message: 'not found', documentation_url: string }
}
