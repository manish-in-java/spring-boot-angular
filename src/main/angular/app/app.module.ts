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

import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavigationComponent } from './layout/navigation/component';
import { CartDetailComponent } from './cart/detail/component';
import { ProductAlertComponent } from './product/alert/component';
import { ProductDetailComponent } from './product/detail/component';
import { ProductListComponent } from './product/listing/component';
import { ProductShareComponent } from './product/share/component';
import { ShippingDetailComponent } from './shipping/detail/component';

/*
 * Angular application.
 */
@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: ProductListComponent },
      { path: 'cart', component: CartDetailComponent },
      { path: 'products/:productId', component: ProductDetailComponent },
      { path: 'shipping', component: ShippingDetailComponent },
    ])
  ],
  declarations: [
    AppComponent,
    NavigationComponent,
    CartDetailComponent,
    ProductAlertComponent,
    ProductDetailComponent,
    ProductListComponent,
    ProductShareComponent,
    ShippingDetailComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
