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
var router_1 = require("@angular/router");
var ItemComponent = (function () {
    function ItemComponent(PostItemService, activatedRoute) {
        var _this = this;
        this.PostItemService = PostItemService;
        this.activatedRoute = activatedRoute;
        this.post = { label: '', cost: '', brand: '', description: '', image: '', items_available: '', model: '', reference: '' };
        this.PostItemService.getPosts().subscribe(function (post) {
            //console.log(post);
            _this.post = post;
        });
    }
    return ItemComponent;
}());
ItemComponent = __decorate([
    core_1.Component({
        selector: 'item',
        moduleId: module.id,
        templateUrl: 'item.component.html',
        providers: [postitem_service_1.PostItemService]
    }),
    __metadata("design:paramtypes", [postitem_service_1.PostItemService, router_1.ActivatedRoute])
], ItemComponent);
exports.ItemComponent = ItemComponent;
//# sourceMappingURL=item.component.js.map