import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LeftPageComponent } from './left-page/left-page.component';
import { MainBannerComponent } from './main-banner/main-banner.component';
import { RightBannerComponent } from './right-banner/right-banner.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { NgImageSliderModule } from 'ng-image-slider';
import { BrowserModule } from '@angular/platform-browser';




@NgModule({
  declarations: [
    LandingPageComponent,
    LeftPageComponent,
    MainBannerComponent,
    RightBannerComponent,
  
  
  ],
  imports: [
    CommonModule,CarouselModule.forRoot(),
    SharedRoutingModule,SlickCarouselModule,[BrowserModule, NgImageSliderModule,
  ]]
})

export class SharedModule { }


