import { Component } from '@angular/core';


@Component({
  selector: 'my-app',
  template: `
   <div class="panel panel-default">
    <div class="panel-heading">
        <h3 class="panel-title">Please Buy Items</h3>
        <div  style="text-align:right">
            <a routerLink="/">Home</a> |   <a href="/cart">Go To Shopping Cart</a></div>
        </div>
    </div>
  <router-outlet></router-outlet>
   `,
})
export class AppComponent  { 
   
}
