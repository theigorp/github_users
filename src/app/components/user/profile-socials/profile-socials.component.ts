import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSquareXTwitter } from '@fortawesome/free-brands-svg-icons';
import {
  faLocationDot,
  faLink,
  faBuilding,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-profile-socials',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule],
  templateUrl: './profile-socials.component.html',
  styleUrl: './profile-socials.component.scss',
})
export class ProfileSocialsComponent {
  @Input() location!: string | null;
  @Input() xHandle!: string | null;
  @Input() website!: string | null;
  @Input() company!: string | null;
  faLocation = faLocationDot;
  faWebsite = faLink;
  faTwitter = faSquareXTwitter;
  faCompany = faBuilding;
}
