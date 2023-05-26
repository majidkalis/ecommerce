import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LeftPageComponent } from './left-page/left-page.component';
<<<<<<< HEAD
import { MainBannerComponent } from './main-banner/main-banner.component';
import { RightBannerComponent } from './right-banner/right-banner.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { NgImageSliderModule } from 'ng-image-slider';
import { BrowserModule } from '@angular/platform-browser';


=======
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
>>>>>>> d2bf27fadaf1bd2b877bc76bb2924fb949df09a8


@NgModule({
  declarations: [
    LandingPageComponent,
<<<<<<< HEAD
    LeftPageComponent,
    MainBannerComponent,
    RightBannerComponent,
  
  
=======
    LeftPageComponent,HeaderComponent,
    FooterComponent,
>>>>>>> d2bf27fadaf1bd2b877bc76bb2924fb949df09a8
  ],
  imports: [
    CommonModule,CarouselModule.forRoot(),
    SharedRoutingModule,SlickCarouselModule,[BrowserModule, NgImageSliderModule,
  ]]
})

export class SharedModule { }


