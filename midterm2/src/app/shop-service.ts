import { Injectable } from '@angular/core';
import { shopItem } from './models/shop-item';

@Injectable({
  providedIn: 'root',
})
export class ShopService {
  items: shopItem[]=[
    {
      id: 'd78f1495-ead7-4d3c-85c7-2f904ef97730',
      modelName: 'beko',
      price: 1340,
      isAvaliable: true
    },
    {
      id: '0060bdd0-61d0-436e-a143-57cc7563c71c',
      modelName: 'logitech',
      price: 1530,
      isAvaliable: false
    },
    {
      id: '17b85f22-145f-4237-9af8-fe235dc91023',
      modelName: 'kingstone',
      price: 2005,
      isAvaliable: true
    },
  ];

  
  getItems(){
    return this.items;
  }
}
