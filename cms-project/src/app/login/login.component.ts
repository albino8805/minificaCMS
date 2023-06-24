import { Component } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private authenticationService: AuthenticationService,
    private router: Router) { }

  login = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });

  onSubmit() {
    this.authenticationService.post(this.login.value).subscribe(response => {
      if (response.success == 1) {
        localStorage.setItem('userName', response.detail.login.user.name + " " + response.detail.login.user.lastName);
        this.router.navigate(['/home']);
      } else {
        alert(response.detail.error);
      }
    })
  }
}
