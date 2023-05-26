import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { NgImageSliderModule } from 'ng-image-slider';





@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [CarouselModule.forRoot()
,
    BrowserModule,
    AppRoutingModule,
    [BrowserModule, NgImageSliderModule],
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
