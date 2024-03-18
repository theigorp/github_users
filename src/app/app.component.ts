import { UserService } from './services/user.service';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { SearchComponent } from './components/search/search.component';
import { UserProfileComponent } from './components/user/user-profile/user-profile.component';
import { User } from './models/user';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    SearchComponent,
    UserProfileComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  user!: User;

  // ideally, this logic should be located in user-profile.component.ts where oninit it will
  // get 'theigor' userinfo and display it, and then every subsequent search will trigger new
  // request. But for now, I chose to go with emitting the search event and passing props

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getRequestedUser().subscribe((user) => {
      this.user = user;
    });
  }

  onSearch() {
    this.userService.getRequestedUser().subscribe((user) => {
      this.user = user;
    });
  }
}
