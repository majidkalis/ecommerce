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
  
    this.cloudinary = new Cloudinary({ cloud_name: 'dyhqdbb3u' });
  }
  uploadImage(event: any) {
    const file = event.target.files[0];
    this.index = 1; // Set the desired index value
  
    const formData = new FormData();
    formData.append('image', file);
    formData.append('index', this.index.toString());
    console.log(formData)
  
  
    
  
     this.imageService.imageUrl(formData).subscribe(
      (response:any) => {
        console.log('Image uploaded successfully',response);
        
      },
      error => {
        console.error('Error uploading image', error);
        
      }
    );
  }
  
  
}


