import { Component, signal } from '@angular/core';
import { UsbSearch } from './usb-search/usb-search';

@Component({
  selector: 'app-root',
  imports: [UsbSearch],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('midterm2');
}
