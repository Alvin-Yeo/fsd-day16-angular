import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CartItem } from '../models';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit, OnChanges {

  @Input('selectedItem') selectedItem!: CartItem;

  @Output() onUpdate = new EventEmitter<CartItem>();
  

  form: FormGroup = this.createForm();

  // Service
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    
  }

  ngOnChanges() {
    this.form = this.createForm(this.selectedItem);
  }

  createForm(item?: CartItem): FormGroup {
    return this.fb.group({
      id: this.fb.control(item?.id, [ Validators.required]),
      item: this.fb.control(item?.item, [ Validators.required, Validators.minLength(3) ]),
      qty: this.fb.control(item?.qty, [ Validators.required, Validators.min(1), Validators.max(10) ])
    });
  }

  get item() {
    return this.form.get('item');
  }

  get qty() {
    return this.form.get('qty');
  }

  updateItem() {
    const updatedItem = this.form.value as CartItem;  // Casting, coersion
    // console.log('Updated item: ', updatedItem);
    this.onUpdate.next(updatedItem);
  }
}
