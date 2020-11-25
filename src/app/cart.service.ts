import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { CartItem } from './models';

@Injectable()
export class CartService {
    
    // Service (dependency injection)
    constructor(private http: HttpClient) {
    // Putting 'private' automatically initialize a field in the class by TypeScript. (e.g. this.http = http;)
    // If 'private' is not defined, the 'http' is just a parameter that is available in this constructor only.
    } 

    async getCart(): Promise<CartItem[]> {
        return await this.http.get<CartItem[]>('http://127.0.0.1:3000/cart').toPromise();
    }

    async getItem(id: string): Promise<CartItem> {
        return await this.http.get<CartItem>(`http://127.0.0.1:3000/cart/${id}`).toPromise();
    }

    async updateItem(id: string, item: CartItem) {
        await this.http.put(`http://127.0.0.1:3000/cart/${id}`, item).toPromise();
    }
}