import { Component } from '@angular/core';

@Component({
  selector: 'app-main-banner',
  templateUrl: './main-banner.component.html',
  styleUrls: ['./main-banner.component.css']
})
export class MainBannerComponent {

  images = [
    { src: "https://picsum.photos/200/300/?blur=2", alt: 'file image ', title: 'file image Title', description: 'file image Description' },
    { src: 'https://picsum.photos/200/300/?blur', alt: 'Image 2', title: 'Image 2 Title', description: 'Image 2 Description' },
    { src: 'https://picsum.photos/id/870/200/300?grayscale&blur=2', alt: 'Image 3', title: 'Image 3 Title', description: 'Image 3 Description' },
  ];
 
}


