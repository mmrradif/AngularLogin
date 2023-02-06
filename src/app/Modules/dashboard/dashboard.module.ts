import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { LoginModule } from '../login/login.module';


const models = [

  CommonModule,
  DashboardRoutingModule,
  LoginModule

  ]

@NgModule({
  declarations: [],
  imports: [
    models
  ],
  exports: [
    models
    ]
})
export class DashboardModule { }
