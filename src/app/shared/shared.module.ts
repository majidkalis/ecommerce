import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LeftPageComponent } from './left-page/left-page.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    LandingPageComponent,
    LeftPageComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ]
})
export class SharedModule { }
