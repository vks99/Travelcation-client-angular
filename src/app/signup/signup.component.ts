import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {errorMessage: string = '';
constructor(private authService: AuthService, private router: Router) {}

ngOnInit(): void {}

signupForm = new FormGroup({
  name:new FormControl<string | null>('', Validators.required),
  email: new FormControl<string | null>('', Validators.required),
  password: new FormControl<string | null>('', Validators.required),
  address: new FormControl<string | null>('', Validators.required),
  phone:new FormControl<string | null>('', Validators.required),
});

onSubmit() {
  this.authService
    .register(this.signupForm.value.name!,this.signupForm.value.email!, this.signupForm.value.password!,this.signupForm.value.address!,this.signupForm.value.phone!)
    .subscribe({
      next: (res) => {
        const token = res.token;
        console.log(token);
        localStorage.setItem('authToken', token);
        this.router.navigateByUrl('contactus');
      },
      error: (e) => {
        console.log(e);
        this.errorMessage = e.error.errors;
      },
      complete: () => {
        console.log('complete');
      },
    });
}


  get user_name() { return this.signupForm?.get('user_name'); }
  get password() { return this.signupForm?.get('password'); }
  get name() { return this.signupForm?.get('name'); }
  get email() { return this.signupForm?.get('email'); }
  get phone() { return this.signupForm?.get('phone'); }
  get address() { return this.signupForm?.get('address'); }
}
