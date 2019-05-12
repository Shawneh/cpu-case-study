import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  loggedIn: boolean;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.loggedIn = this.authService.isLoggedIn;
    this.router.events.subscribe(() => {
      this.loggedIn = this.authService.isLoggedIn;
    })
  }

  logout() {
    this.authService.logout();
  }

  login() {
    this.router.navigate(['login']);
  }

}
