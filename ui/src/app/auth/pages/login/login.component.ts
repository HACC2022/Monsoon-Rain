import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  login() {
    console.log("login...")
    if (this.loginForm.valid) {
      console.log("is valid")
      this.authService.login(
        this.loginForm.get('email')!.value,
        this.loginForm.get('password')!.value,
      ).subscribe( res => {
        if (res.status) {
          console.log('success')
        }
      });
    }
  }

}
