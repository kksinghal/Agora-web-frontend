import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecurityQuestionRoutingModule } from './security-question-routing.module';
import { LandingPageModule } from '../landing-page/landing-page.module';
import { FormsModule } from '@angular/forms';
import { SecurityQuestionComponent } from './security-question.component';

@NgModule({
  declarations: [SecurityQuestionComponent],
  imports: [
    CommonModule,
    SecurityQuestionRoutingModule,
    LandingPageModule,
    FormsModule
  ],
  exports: [SecurityQuestionComponent]
})
export class SecurityQuestionModule { }
