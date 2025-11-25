import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-item',
  imports: [ReactiveFormsModule],
  templateUrl: './add-item.html',
  styleUrl: './add-item.css',
})
export class AddItem {
  form = new FormGroup({
    modelName: new FormControl('',[
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(50)
    ]),
    price: new FormControl< | null>(null,[
      Validators.required,

      Validators.min(0)
    ]),
    isAvaliable: new FormControl(false)
  });
}
