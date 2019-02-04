import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatTooltipModule,
  MatCheckboxModule,
  MatSliderModule
} from '@angular/material';

import { AdminLayoutRoutes, routingComponents } from './admin-layout.routing';
import { SharedModule } from '../../components/shared/shared.module';
import { DragulaModule } from '../../../../node_modules/ng2-dragula';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    MatButtonModule,
    MatRippleModule,
    MatInputModule,
    MatTooltipModule,
    MatCheckboxModule,
    MatSliderModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    SweetAlert2Module,
    DragulaModule
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  declarations: [
    routingComponents
  ]
})

export class AdminLayoutModule {}
