import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Cookie } from 'ng2-cookies';

import { AppComponent }  from './app.component';
import { ItemsComponent }  from './components/items.component';
import { ItemComponent }  from './components/item.component';
import { CartComponent }  from './components/cart.component';
import { routing }  from './app.routing';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule, routing ],
  declarations: [ AppComponent, ItemsComponent, ItemComponent, CartComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
