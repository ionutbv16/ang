import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ItemsComponent} from './components/items.component';
import {ItemComponent} from './components/item.component';
import {CartComponent} from './components/cart.component';

const appRoutes : Routes = [
    {
        path: '',
        component: ItemsComponent
    },
     {
        path: 'cart',
        component: CartComponent
    },
     {
        path: 'items/:id',
        component: ItemComponent
    },
    {
        path: 'addcart/details/:id',
        component: CartComponent
    },

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

