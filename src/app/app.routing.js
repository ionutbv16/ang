"use strict";
var router_1 = require("@angular/router");
var items_component_1 = require("./components/items.component");
var item_component_1 = require("./components/item.component");
var cart_component_1 = require("./components/cart.component");
var appRoutes = [
    {
        path: '',
        component: items_component_1.ItemsComponent
    },
    {
        path: 'cart',
        component: cart_component_1.CartComponent
    },
    {
        path: 'items/:id',
        component: item_component_1.ItemComponent
    },
    {
        path: 'addcart/details/:id',
        component: cart_component_1.CartComponent
    },
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map