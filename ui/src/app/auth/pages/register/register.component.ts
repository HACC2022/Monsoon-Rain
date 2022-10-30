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

  public registerForm: FormGroup;

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      confirmPassword: new FormControl('', [Validators.required])
    });
   }

  register() {
    console.log("registering...")
    if (this.registerForm.valid) {
      console.log("is valid")
      // this.authService.register(this.registerForm.value).subscribe( res => {
      //   if (res.status) {
      //     console.log("success")
      //   }
      // })
      this.authService.register(
        this.registerForm.get('firstName')!.value,
        this.registerForm.get('lastName')!.value,
        this.registerForm.get('email')!.value,
        this.registerForm.get('password')!.value,
      ).subscribe( res => {
        if (res.status) {
          console.log('success')
        }
      });
    }
  }

}
