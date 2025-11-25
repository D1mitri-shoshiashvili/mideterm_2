import { Component, inject, OnInit, signal } from '@angular/core';
import { shopItem } from '../models/shop-item';
import { ShopService } from '../shop-service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-usb-search',
  imports: [ReactiveFormsModule],
  templateUrl: './usb-search.html',
  styleUrl: './usb-search.css',
})
export class UsbSearch implements OnInit{
  shopService = inject(ShopService);
  searchResults = signal<shopItem[]>([]);

  searchForm = new FormGroup({
    model: new FormControl(''),
    priceFrom: new FormControl<number | null>(null),
    priceTo: new FormControl<number | null>(null)
  });

  ngOnInit(): void {
    let allItems = this.shopService.getItems();

    this.searchResults.set(allItems);
  }

  onSearch(){
    let filter = this.searchForm.value;
    let filterItems = this.shopService.filterItems({
      model: filter.model,
      priceFrom: filter.priceFrom,
      priceTo: filter.priceTo,
    })

    this.searchResults.set(filterItems);
  }

}
