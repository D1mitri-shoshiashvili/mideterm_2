import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsbSearch } from './usb-search';

describe('UsbSearch', () => {
  let component: UsbSearch;
  let fixture: ComponentFixture<UsbSearch>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsbSearch]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsbSearch);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
