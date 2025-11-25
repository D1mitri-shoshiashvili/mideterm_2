import { Component, inject, OnInit, signal } from '@angular/core';
import { shopItem } from '../models/shop-item';
import { ShopService } from '../shop-service';

@Component({
  selector: 'app-usb-search',
  imports: [],
  templateUrl: './usb-search.html',
  styleUrl: './usb-search.css',
})
export class UsbSearch implements OnInit{
  shopService = inject(ShopService);
  searchResults = signal<shopItem[]>([]);

  ngOnInit(): void {
    let allItems = this.shopService.getItems();

    this.searchResults.set(allItems);
  }

}
