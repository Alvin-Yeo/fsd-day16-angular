import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { CartItem } from '../app/models';
import { CartService } from './cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  contents: CartItem[] = [];
  item!: CartItem;

  constructor(private service: CartService) { }  

  async ngOnInit() {
    // this.contents = await this.http.get<CartItem[]>('http://127.0.0.1:3000/cart')  // return an observable
    //   .toPromise();   // convert observable to a promise
    // console.log('Content: ', this.contents)
    this.contents = await this.service.getCart();
  }

  async itemSelected($event: string) {
    // this.item = await this.http.get<CartItem>(`http://127.0.0.1:3000/cart/${$event}`)
    //   .toPromise();
    // console.log('Retrieved item form server: ', this.item);
    this.item = await this.service.getItem($event);
  }

  async updateCart($event: CartItem) {
    // console.log('Updated item in app: ', $event);

    // PUT /cart/:id
    // await this.http.put(`http://127.0.0.1:3000/cart/${$event.id}`, $event)
    //   .toPromise();
    await this.service.updateItem($event.id, $event);

    // refresh the list
    // this.contents = await this.http.get<CartItem[]>('http://127.0.0.1:3000/cart')
    //   .toPromise();
    this.contents = await this.service.getCart();
  }
}