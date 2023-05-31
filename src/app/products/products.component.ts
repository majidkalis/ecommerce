import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  category: string = '';
  productName: string = '';
  sku: any
  productDescription: string = '';
  paymentMethod: string = '';
  unitWeight: string = '';
  selectedFile!: File;

  generateSku() {
    if (!this.sku) {
      const randomNum = Math.floor(Math.random() * 9000000000) + 1000000000;
      this.sku = randomNum;
    }
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  uploadImage() {
    // Upload image logic
    // You can implement your own logic to upload the image here
    console.log('Uploading image...');
  }

  submitProduct() {
    // Submit product logic
    // You can implement your own logic to submit the product details here
    console.log('Submitting product...');
  }
}
