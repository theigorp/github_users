import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faMagnifyingGlass, faX } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FontAwesomeModule, FormsModule, CommonModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
})
export class SearchComponent {
  @ViewChild('usernameInput') usernameInputRef!: ElementRef;
  faMagnifyingGlass = faMagnifyingGlass;
  faX = faX;
  errorMessage = '';

  onSearchUsername() {
    const searchedUsername = this.usernameInputRef.nativeElement.value;
  }
}
