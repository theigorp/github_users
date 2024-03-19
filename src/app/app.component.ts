import { UserService } from './services/user.service';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Params, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { SearchComponent } from './components/search/search.component';
import { UserProfileComponent } from './components/user/user-profile/user-profile.component';
import { User } from './models/user';
import { HttpErrorResponse } from '@angular/common/http';
import { mergeMap } from 'rxjs';

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
  requestFailed = false;

  // ideally, this logic should be located in user-profile.component.ts where oninit it will
  // get 'theigor' userinfo and display it, and then every subsequent search will trigger new
  // request. But for now, I chose to go with emitting the search event and passing props

  constructor(
    private userService: UserService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params: Params) => {
      const searchedUsername = params['username'];
      if (searchedUsername) {
        this.userService.setRequestedUser(searchedUsername);
      }
      this.userService.getRequestedUser().subscribe((user) => {
        this.user = user;
      });
    });
  }

  onSearch() {
    this.userService.getRequestedUser().subscribe({
      next: (user) => {
        this.user = user;
      },
      error: (error: HttpErrorResponse) => {
        this.requestFailed = true;
      },
    });
  }
}
