import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { SignUp } from '../model/signUp.model';
import { Question } from '../model/question.model';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.sass']
})
export class RegisterFormComponent implements OnInit {

  error = false;
  success = false;
  signup: SignUp;
  question: Question;
  isLoading = false;
  socialLoading = false;
  message = 'Sign Up';
  constructor(private userService: UserService, private router: Router ) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null) {
      form.reset();
    }
    this.signup = new SignUp();
    this.question = new Question();
    this.signup.identifier = '';
    this.signup.firstName = '';
    this.signup.lastName = '';
    this.signup.email = '';
    this.signup.password = '';
    this.question.question = 'Select Security Question';
  }
  navigateSignIn() {
    this.router.navigate(['/signIn']);
  }

  OnSubmit(form: NgForm) {
    if (this.question.question !== 'Select Security Question') {
      this.message = 'Loading....';
      this.question.answer = this.question.answer.trim().toLowerCase();
      this.signup.securityQuestion = this.question;
      this.isLoading = true;
      this.success = false;
      this.error = false;
      this.userService.registerUser(this.signup)
        .subscribe((data: any) => {
          this.resetForm(form);
          this.success = true;
          this.message = 'Sign Up';
          this.isLoading = false;
        },
        (err: HttpErrorResponse) => {
          this.error = true;
          this.message = 'Sign Up';
          this.isLoading = false;
        });
    }
  }
}
