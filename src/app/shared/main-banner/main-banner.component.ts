import { Component } from '@angular/core';
import { Cloudinary } from 'cloudinary-core';
import { HttpClient } from '@angular/common/http';
import { ServicesSharedService } from '../services-shared.service';


@Component({
  selector: 'app-main-banner',
  templateUrl: './main-banner.component.html',
  styleUrls: ['./main-banner.component.css']
})
export class MainBannerComponent {
  public cloudinary: any;
  public index: any;
  
  constructor(private imageService: ServicesSharedService) {
    // Replace 'YOUR_CLOUDINARY_CLOUD_NAME' with your actual Cloudinary cloud name
    this.cloudinary = new Cloudinary({ cloud_name: 'YOUR_CLOUDINARY_CLOUD_NAME' });
  }
  uploadImage(event: any) {
    const file = event.target.files[0];
    this.index = 1; // Set the desired index value
  
    const formData = new FormData();
    formData.append('image', file);
    formData.append('index', this.index.toString());
    console.log(formData)
  
  
     // Replace with your actual backend API URL
  
    return this.imageService.imageUrl(formData).subscribe(
      (response:any) => {
        console.log('Image uploaded successfully',response);
        // Handle the response from the backend
      },
      error => {
        console.error('Error uploading image', error);
        // Handle the error if needed
      }
    );
  }
  
  
}


