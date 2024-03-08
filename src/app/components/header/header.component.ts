import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  faMoon = faMoon;
  faSun = faSun;
  themeText: 'light' | 'dark' = 'light';

  onToggleTheme(): void {
    if (this.themeText === 'dark') {
      this.themeText = 'light';
    } else {
      this.themeText = 'dark';
    }
  }
}
