import { UserService } from './../../services/user.service';
import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
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
  @Output() search = new EventEmitter();
  @ViewChild('usernameInput') usernameInputRef!: ElementRef;
  faMagnifyingGlass = faMagnifyingGlass;
  faX = faX;
  errorMessage = '';

  constructor(private userService: UserService) {}

  onSearchUsername() {
    const searchedUsername = this.usernameInputRef.nativeElement.value;
    this.userService.setRequestedUser(searchedUsername);
    this.search.emit();
  }

  onClearUsername() {
    this.usernameInputRef.nativeElement.value = '';
  }
}
