/*
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"), to deal in the
 * Software without restriction, including without limitation the rights to use, copy,
 * modify, merge, publish, distribute, sublicense, and/or sell copies of the Software,
 * and to permit persons to whom the Software is furnished to do so, subject to the
 * following conditions:
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
 * INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
 * PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF
 * CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE
 * OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

import { Injectable } from '@angular/core';

/*
 * Provides operations for managing the shopping cart.
 */
@Injectable({
  providedIn: 'root'
})
export class CartService {
  items = [];

  /*
   * Adds a product to the cart.
   *
   * @param product The product to add.
   */
  addToCart(product) {
    this.items.push(product);
  }

  /*
   * Clears all products currently in the cart.
   *
   * @return An empty cart.
   */
  clearCart() {
    this.items = [];

    return this.getItems();
  }

  /*
   * Gets all products currently in the cart.
   *
   * @return All products currently in the cart.
   */
  getItems() {
    return this.items;
  }
}