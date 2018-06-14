import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { SnackBarService } from '../../services/snack-bar.service';
import { TitleService } from '../../services/titleservice';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;

  loading: boolean = false;

  constructor(
    private authService: AuthService,
    private snackBarService: SnackBarService,
    private titleService: TitleService,
    private router: Router
  ) { }

  ngOnInit() {

    this.titleService.setTitle('Login');

    if (this.authService.userIsLogged) {
      this.router.navigate(['/inicio']);
    }
  }

  login() {

    if (!this.email || !this.password) {

      this.snackBarService.open('ERROR - Faltan campos por rellenar');
      return;
    }

    this.loading = true;

    this.authService.login(this.email, this.password)
      .then(result => {

        this.loading = false;
        this.router.navigate(['/home']);

      }).catch(err => {

        this.loading = false;
        this.snackBarService.open('ERROR - ' + err.message);
      });
  }
}
