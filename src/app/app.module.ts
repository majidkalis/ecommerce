import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { SharedModule } from './shared/shared.module';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { NgImageSliderModule } from 'ng-image-slider';
import { HttpClientModule } from '@angular/common/http';





=======
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsComponent } from './products/products.component';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
>>>>>>> 5a99188235978d3f41a6b6c3a57d95d07233563d
@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    DashboardComponent,
    ProductsComponent,
    MainLayoutComponent
  ],
  imports: [CarouselModule.forRoot()
,
    BrowserModule,
    AppRoutingModule,
<<<<<<< HEAD
    [BrowserModule, NgImageSliderModule],
    SharedModule,
    HttpClientModule,
=======
    BrowserAnimationsModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    LayoutModule,
    MatButtonModule,
    MatSidenavModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatSelectModule,
    MatOptionModule,
    MatToolbarModule
>>>>>>> 5a99188235978d3f41a6b6c3a57d95d07233563d
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
