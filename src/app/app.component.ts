import { Component, ChangeDetectorRef, ViewChild } from '@angular/core';
import { MatSnackBar, MatSidenav } from '@angular/material';
import { SnackBarService } from './services/snack-bar.service';
import { TitleService } from './services/titleservice';
import { AuthService } from './services/auth/auth.service';
import { links } from './utils/main-nav-links';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  appTitle = 'app';
  title = '';

  links = links;

  @ViewChild('sidenav')
  sidenav: MatSidenav;

  constructor(
    public snackBar: MatSnackBar,
    private snackBarService: SnackBarService,
    private titleService: TitleService,
    private cdRef: ChangeDetectorRef,
    private authService: AuthService,
    private router: Router
  ) {
  }

  ngOnInit(): void {

    this.snackBarService.snackBarEmitter.subscribe(result => {
      this.snackBar.open(result.message, result.action, {
        duration: 2000,
      });
    });
  }

  ngAfterViewChecked(): void {
    this.titleService.titleEmitter.subscribe(title => {
      this.title = title;
      this.cdRef.detectChanges();
    });
  }

  isLogged() {
    if (!this.authService.userIsLogged) {
      this.sidenav.close();
    }
    return this.authService.userIsLogged;
  }

  logOut() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
