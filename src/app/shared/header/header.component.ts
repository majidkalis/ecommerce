import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  
  isDropdownOpen: boolean = false;
  itemList: string[] = [];

  toggleButton(): void {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
  
}

