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
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var router_1 = require("@angular/router");
var PostItemService = (function () {
    function PostItemService(http, activatedRoute) {
        this.http = http;
        this.activatedRoute = activatedRoute;
        console.log('PostItemService');
    }
    PostItemService.prototype.getPosts = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.ref = params['id'];
            console.log("PostItemService activatedRoute.params", _this.ref);
        });
        // var ref = 100001;
        if (this.ref) {
            return this.http.get('https://colossustest.herokuapp.com/api/items/' + this.ref + '.json').map(function (res) { return res.json(); });
        }
    };
    return PostItemService;
}());
PostItemService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, router_1.ActivatedRoute])
], PostItemService);
exports.PostItemService = PostItemService;
//# sourceMappingURL=postitem.service.js.map