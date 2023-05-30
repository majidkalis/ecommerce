import { Component } from '@angular/core';

import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-right-banner',
  templateUrl: './right-banner.component.html',
  styleUrls: ['./right-banner.component.css']
})


export class RightBannerComponent {
  constructor(private http: HttpClient) { }

  handleImageUpload(event: any, index: number) {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append('image', file);
    formData.append('index', index.toString());

    this.uploadImage(formData);
  }

  uploadImage(formData: FormData) {
    const url = 'your-backend-api-url'; // Replace with your actual backend API URL

    this.http.post<any>(url, formData).subscribe(
      response => {
        console.log('Image uploaded successfully');
        // Handle the response from the backend if needed
      },
      error => {
        console.error('Error uploading image', error);
        // Handle the error if needed
      }
    );
  }
}
