import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LeftPageComponent } from './left-page/left-page.component';


@NgModule({
  declarations: [
    LandingPageComponent,
    LeftPageComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ]
})
export class SharedModule { }
