import { Component, signal } from '@angular/core';
import { UsbSearch } from './usb-search/usb-search';
import { AddItem } from './add-item/add-item';

@Component({
  selector: 'app-root',
  imports: [UsbSearch, AddItem],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('midterm2');
}
