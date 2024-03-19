import { UserService } from './../../services/user.service';
import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faMagnifyingGlass, faX } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FontAwesomeModule, FormsModule, CommonModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
})
export class SearchComponent implements OnChanges {
  @Input() requestFailed!: boolean;
  @Output() search = new EventEmitter();
  @ViewChild('usernameInput') usernameInputRef!: ElementRef;
  faMagnifyingGlass = faMagnifyingGlass;
  faX = faX;
  errorMessage = 'no results';

  constructor(private userService: UserService, private router: Router) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['requestFailed'].currentValue === true) {
      this.errorMessage = 'no results';
    }
  }

  onSearchUsername() {
    const searchedUsername = this.usernameInputRef.nativeElement.value;
    this.userService.setRequestedUser(searchedUsername);
    this.router.navigate([], { queryParams: { username: searchedUsername } });
    this.search.emit();
  }

  onClearUsername() {
    this.router.navigate([], { queryParams: null });
    this.usernameInputRef.nativeElement.value = '';
    this.errorMessage = '';
  }
}
