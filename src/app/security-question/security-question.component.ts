import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { Question } from '../model/question.model';

@Component({
  selector: 'app-security-question',
  templateUrl: './security-question.component.html',
  styleUrls: ['./security-question.component.sass']
})
export class SecurityQuestionComponent implements OnInit {

  error = false;
  message = 'Verify Answer';
  isLoading = false;
  question: string;
  securityQuestion: Question;

  constructor(private userService: UserService, private router: Router) {
    this.securityQuestion = new Question();
    this.userService.currentCrypto.subscribe( crypto => {
      console.log(crypto);
      this.securityQuestion.crypto = crypto.crypto;
      this.userService.getSecurityQuestion(crypto.crypto).subscribe((data: any) => {
        this.question = data.question;
      });
    });
   }

  navigateSignIn() {
    this.router.navigate(['/signIn']);
  }

  navigateSignUp() {
    this.router.navigate(['/home']);
  }

  ngOnInit() {
  }

  onSubmit(answer: string) {
    this.securityQuestion.question = this.question;
    this.securityQuestion.answer = answer.trim().toLowerCase();
    this.userService.verifySecurityQuestion(this.securityQuestion).subscribe((data: any) => {
      if ('token' in data) {
        this.router.navigate(['/dashboard']);
      } else {
        this.error = true;
      }
    });

  }

}
