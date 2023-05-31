import { Component } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { ServicesSharedService } from '../services-shared.service';
@Component({
  selector: 'app-right-banner',
  templateUrl: './right-banner.component.html',
  styleUrls: ['./right-banner.component.css']
})


export class RightBannerComponent {
  public images: any[] = [];
  public uploaingImages="";
  
    constructor(private imageService: ServicesSharedService) { }

  handleImageUpload(event: any, index: number) {
    console.log("=====index-===",index)
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append('image', file);
    // formData.append('index', index.toString());
    console.log("=====file-===",file)
    console.log("=====formData-===",formData)
    this.uploadImage(formData);
  }

  uploadImage(formData: FormData) {
    console.log("=-=-=-=-==",formData)
    // const url = 'your-backend-api-url'; // Replace with your actual backend API URL
    
    this.imageService.imageUrl(formData).subscribe(
      (response:any) => {
        console.log('Image uploaded successfully',response);
        this.uploaingImages =response.url;
        console.log(this.uploaingImages);
        // const uploaingImages ={url:response.url,index:response};
        this.images.push(this.uploaingImages)
        
      },
      error => {
        console.error('Error uploading image', error);
        
      }
        // Handle the error if needed
    );
  }
}
