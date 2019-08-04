import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadingBarComponent } from './heading-bar.component';

@NgModule({
  declarations: [HeadingBarComponent],
  imports: [
    CommonModule
  ],
  exports: [HeadingBarComponent]
})
export class HeadingBarModule { }
