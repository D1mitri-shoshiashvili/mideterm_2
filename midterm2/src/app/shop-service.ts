import { Injectable } from '@angular/core';
import { shopItem } from './models/shop-item';
import { v4 } from 'uuid';
import { ItemFilter } from './models/item-filter';

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

  addItem(item: shopItem){
    item.id=v4();
    this.items.push(item);
    return item.id;
  }

  filterItems(filter: ItemFilter){
    let result = this.items;
    if(filter.model !==null && filter.model !== undefined && filter.model !==''){
      result = result.filter(c=> c.modelName.includes(filter.model!));
    }

    if(filter.priceFrom !==null && filter.priceFrom !== undefined){
      result = result.filter(c=> c.price >= filter.priceFrom!);
    }

    if(filter.priceTo !==null && filter.priceTo !== undefined){
      result = result.filter(c=> c.price >= filter.priceTo!);
    }

    return result;
  }
}

