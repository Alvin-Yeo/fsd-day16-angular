import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { CartItem } from '../models';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  @Input('contents') contents: CartItem[] = [];
  @Output('onItemSelect') onItemSelect = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onClick(id: string) {
    this.onItemSelect.next(id);
  }
}
