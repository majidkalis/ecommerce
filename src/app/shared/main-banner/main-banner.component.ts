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
  // public index: any;
  public images: any[] = [];
  public uploaingImages="";
  public fileImages="";
  
  constructor(private imageService: ServicesSharedService) {
  
    this.cloudinary = new Cloudinary({ cloud_name: 'dyhqdbb3u' });
  }
  uploadImage(event: any, index: any) {
    const file = event.target.files[0];
    // const index =this.images.length+1;
    // for (let i = 0; i < file.length; i++) {
       // Set the desired index value
  
    const formData = new FormData();
    formData.append('image', file);

    // formData.append('index', index.toString());
    console.log(formData)
   
    // this.images.push({ file, index });
    let obj = {
      formData: formData,
      index: index
    }
     this.imageService.imageUrl(obj).subscribe(
      (response:any) => {
        console.log('Image uploaded successfully',response);
        this.uploaingImages =response.url;
        // const uploaingImages ={url:response.url,index:response};
        this.images.push(this.uploaingImages)
        
      },
      error => {
        console.error('Error uploading images', error);
        
      }
    );
  // }
  
  
  }}
