import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm = new FormGroup({
    firstName: new FormControl(null, [Validators.required]),
    lastName: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required]),
    confirmPassword: new FormControl(null, [Validators.required])
  });

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void { }

  register() {
    console.log("registering...")
    const firstName = this.registerForm.get('firstName')
    if (this.registerForm.valid) {
      console.log("is valid")
      // this.authService.register(this.registerForm.value).subscribe( res => {
      //   if (res.status) {
      //     console.log("success")
      //   }
      // })
      this.authService.register(firstName, lastName, email, password)
    }
  }

}
