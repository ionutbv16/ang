"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var postitem_service_1 = require("../services/postitem.service");
var postcheckout_service_1 = require("../services/postcheckout.service");
var router_1 = require("@angular/router");
var ng2_cookies_1 = require("ng2-cookies");
var CartComponent = (function () {
    function CartComponent(PostItemService, activatedRoute, PostCheckoutService) {
        var _this = this;
        this.PostItemService = PostItemService;
        this.activatedRoute = activatedRoute;
        this.PostCheckoutService = PostCheckoutService;
        this.name = 'Changed name';
        this.qty = 1;
        this.checkName = 'cname';
        this.cartItems = [];
        this.checkCookie();
        if (this.getCartItems())
            this.cartItems = JSON.parse(this.getCartItems());
        this.activatedRoute.params.subscribe(function (params) {
            _this.idParam = params['id'];
            console.log("this.idParam", _this.idParam);
        });
        if (this.idParam) {
            this.PostItemService.getPosts().subscribe(function (post) {
                //console.log("post",post);
                _this.post = post;
                _this.post.qty = 1;
                // FLAG TO GET DUPLICATE REFERENCE IN BASKET
                _this.itemFound = false;
                //console.log("Add item ", this.post);
                for (var i = 0; i < _this.cartItems.length; i++) {
                    if (_this.cartItems[i]["reference"] === post["reference"]) {
                        //  
                        _this.itemFound = true;
                    }
                }
                if (_this.itemFound == false) {
                    _this.cartItems.push(_this.post);
                }
                _this.addCookie('cart', _this.cartItems);
            });
        }
        this.getTotalProducts();
        this.addCookie('cart', this.cartItems);
        //console.log("Cart Items ", this.cartItems);
    }
    CartComponent.prototype.getCartItems = function () {
        if (ng2_cookies_1.Cookie.get('cart')) {
            return ng2_cookies_1.Cookie.get('cart');
        }
    };
    CartComponent.prototype.update = function () {
        this.cookies = ng2_cookies_1.Cookie.getAll();
        this.keys = Object.keys(this.cookies);
    };
    CartComponent.prototype.addCookie = function (cName, cValue) {
        var days;
        var path;
        var domain;
        days = 1;
        path = '/';
        days = days * 24 * 60 * 60 * 1000;
        var expires = new Date(Date.now() + days);
        ng2_cookies_1.Cookie.set(cName, JSON.stringify(cValue), expires, path, domain);
    };
    CartComponent.prototype.checkCookie = function () {
        console.log(ng2_cookies_1.Cookie.get('cname'));
    };
    CartComponent.prototype.refreshCart = function (item, qty) {
        this.total = 0;
        for (var i = 0; i < this.cartItems.length; i++) {
            if (this.cartItems[i]["reference"] === item) {
                // UPDATE WITH THE NEW QUANTITY
                this.cartItems[i]["qty"] = qty;
            }
        }
        this.getTotalProducts();
        this.addCookie('cart', this.cartItems);
    };
    CartComponent.prototype.deleteCart = function (item) {
        this.total = 0;
        console.log('delete cart', item);
        for (var i = 0; i < this.cartItems.length; i++) {
            if (this.cartItems[i]["reference"] === item) {
                // DELETE THE ITEM
                this.cartItems.splice(i, 1);
            }
        }
        this.getTotalProducts();
        this.addCookie('cart', this.cartItems);
    };
    CartComponent.prototype.getTotalProducts = function () {
        this.itemsTotalItems = 0;
        this.total = 0;
        this.itemsForCheckout = [];
        for (var i = 0; i < this.cartItems.length; i++) {
            this.itemsTotalItems += parseInt(this.cartItems[i]["qty"]);
            this.total += this.cartItems[i]["qty"] * this.cartItems[i]["cost"];
            this.itemsForCheckout.push(this.cartItems[i]["reference"]);
        }
    };
    CartComponent.prototype.checkoutCart = function () {
        var parameter = JSON.stringify({ total_cost: this.total, total_items: this.itemsTotalItems, items_ref: this.itemsForCheckout });
        this.PostCheckoutService.getPost(parameter).subscribe(function (post) {
            console.log('checkoutCart', post);
        });
    };
    return CartComponent;
}());
CartComponent = __decorate([
    core_1.Component({
        selector: 'cart',
        moduleId: module.id,
        templateUrl: 'cart.component.html',
        providers: [postitem_service_1.PostItemService, postcheckout_service_1.PostCheckoutService]
    }),
    __metadata("design:paramtypes", [postitem_service_1.PostItemService, router_1.ActivatedRoute, postcheckout_service_1.PostCheckoutService])
], CartComponent);
exports.CartComponent = CartComponent;
//# sourceMappingURL=cart.component.js.map