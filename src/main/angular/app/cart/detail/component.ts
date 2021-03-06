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

import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Title } from '@angular/platform-browser';

import { CartService } from '../service';

/*
 * Displays details for the current user's shopping cart.
 */
@Component({
  selector: 'app-cart',
  templateUrl: './component.html'
})
export class CartDetailComponent implements OnInit {
  checkoutForm;
  items;

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder,
    private titleService: Title
  ) {
    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: ''
    });

    this.titleService.setTitle("Shopping Cart")
  }

  ngOnInit() {
    this.items = this.cartService.getItems();
  }

  onSubmit(customerData) {
    // Process checkout data here

    this.items = this.cartService.clearCart();

    this.checkoutForm.reset();

    window.alert('Your order has been submitted');
  }
}