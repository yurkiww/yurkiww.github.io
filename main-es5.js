(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/components/account-settings/account-settings.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/components/account-settings/account-settings.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\n  <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\n    <p class=\"title\">Account Settings</p>\n    <div class=\"top-inputs\">\n      <div class=\"first-n\">\n        <p>First Name</p>\n        <input class=\"input\" [ngClass]=\"{\n            'red-border':\n              isFieldValid('firstName')\n          }\" formControlName=\"firstName\" placeholder=\"First name\" type=\"text\" />\n        <p class=\"requiredForm\" *ngIf=\"isFieldValid('firstName')d\">\n          This field is required\n        </p>\n      </div>\n      <div class=\"last-n\">\n        <p>Last name</p>\n        <input class=\"input\" class=\"input\" [ngClass]=\"{\n            'red-border':\n            isFieldValid('lastName')\n          }\" formControlName=\"lastName\" placeholder=\"Last  name\" type=\"text\" />\n        <p class=\"requiredForm\" *ngIf=\"isFieldValid('lastName')\">\n          This field is required\n        </p>\n      </div>\n      <div class=\"email\">\n        <p>Email</p>\n        <div class=\"email-wrap\">\n          <div class=\"email-svg\">\n            <img class=\"svg\" src=\"../../assets//svg//at.svg\" alt=\"\" />\n          </div>\n          <div>\n            <input formControlName=\"email\" class=\"input\" [ngClass]=\"{\n                'email-red-border':\n                  isFieldValid('email')\n              }\" class=\"input email-input\" placeholder=\"Email\" type=\"text\" />\n          </div>\n        </div>\n        <p class=\"requiredForm\" *ngIf=\"isFieldValid('email')\">\n          This field must contain an email!\n        </p>\n      </div>\n    </div>\n\n    <div class=\"bottom-inputs\">\n      <div class=\"city\">\n        <p>City</p>\n        <input [ngClass]=\"{\n          'red-border':\n            isFieldValid('city')\n        }\" formControlName=\"city\" class=\"input\" placeholder=\"City\" type=\"text\" />\n        <p class=\"requiredForm\" *ngIf=\"isFieldValid('city')\">\n          This field is required\n        </p>\n      </div>\n      <div class=\"state\">\n        <p>State</p>\n        <input [ngClass]=\"{\n          'red-border':\n            isFieldValid('state')\n        }\" formControlName=\"state\" class=\"input\" placeholder=\"State\" type=\"text\" />\n        <p class=\"requiredForm\" *ngIf=\"isFieldValid('state')\">\n          This field is required\n        </p>\n      </div>\n      <div class=\"zip\">\n        <p>Zip</p>\n        <input [ngClass]=\"{\n          'red-border':\n            isFieldValid('zip')\n        }\" formControlName=\"zip\" class=\"input\" placeholder=\"Zip\" type=\"text\" />\n        <p class=\"requiredForm\" *ngIf=\"isFieldValid('zip')\">\n          This field is required\n        </p>\n      </div>\n    </div>\n    <div class=\"btn-wrap\">\n      <button class=\"button\" [disabled]=\"form.invalid\" type=\"submit\">\n        Update\n      </button>\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/components/button/button.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/components/button/button.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"button\">\n  <button class=\"button__add-item\">Add item</button>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/components/header/header.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/components/header/header.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=header>\n  <img class=header__img [src]=\"header.logoUrl\">\n  <p class=header__user>{{header.userName}} {{header.userLastName}}</p>\n  <img class=header__user-img [src]=header.userImg (click)='openModal()'>\n</div>\n\n<app-modal class=\"modal\" [hidden]='!visible'></app-modal>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/components/item-bottom-section/item-bottom-section.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/components/item-bottom-section/item-bottom-section.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"visible; else elseBlock\" class=\"bottom-section-show\">\n  <div class=\"bottom-section-show__product-information\">\n    <h3>Product information</h3>\n    <p>{{bottomSectionInfo.color}} color</p>\n    <p>Closure: {{bottomSectionInfo.closure}}</p>\n    <p>Fittings: {{bottomSectionInfo.fittings}}</p>\n    <p>Decor: {{bottomSectionInfo.decor}}</p>\n    <p>Pockets: {{bottomSectionInfo.pockets}}</p>\n    <p>Size on model (height 189cm): {{bottomSectionInfo.modelSize}}</p>\n    <p>Dimension of the model: {{bottomSectionInfo.modelDimension}}</p>\n  </div>\n  <div class=\"bottom-section-show__brand-information\">\n    <h3>Brand Information</h3>\n    <p>{{bottomSectionInfo.brandInformation}}</p>\n  </div>\n  <div class=\"bottom-section-show__cut-and-style\">\n    <h3>Cut and Style</h3>\n\n    <ul>\n      <li>Leg Length: 102cm</li>\n      <li>Step Length: 77cm</li>\n      <li>Pants & Jeans Width: Straight</li>\n      <li>mid landing</li>\n      <li>Jeans elasticity: stretch</li>\n      <li>Girth: 86cm</li>\n      <li>Hips: 108cm</li>\n    </ul>\n    <br>\n    <h3>Composition</h3>\n    <p>99% cotton</p>\n    <p>1% elastane</p>\n\n  </div>\n  <div class=\"bottom-section-show__display-info\">\n    <button (click)=\"hide()\">Hide information</button>\n  </div>\n</div>\n\n<ng-template #elseBlock>\n  <div class=\"bottom-section-hide\">\n    <div class=\"bottom-section-hide__product-information\">\n      <h3>Product information</h3>\n      <p>{{bottomSectionInfo.color}} color</p>\n      <p>Closure: {{bottomSectionInfo.closure}}</p>\n      <p>Fittings: {{bottomSectionInfo.fittings}}</p>\n      <p>Decor: {{bottomSectionInfo.decor}}</p>\n      <p>Pockets: {{bottomSectionInfo.pockets}}</p>\n    </div>\n    <div class=\"bottom-section-hide__brand-information\">\n      <h3>Brand Information</h3>\n      <p>{{bottomSectionInfo.brandInformationShort}}</p>\n    </div>\n    <div class=\"bottom-section-hide__cut-and-style\">\n      <h3>Cut and Style</h3>\n      <ul>\n        <li>Leg Length: 102cm</li>\n        <li>Step Length: 77cm</li>\n        <li>Pants & Jeans Width: Straight</li>\n        <li>mid landing</li>\n        <li>Jeans elasticity: stretch</li>\n      </ul>\n    </div>\n    <div class=\"bottom-section-hide__display-info\">\n      <button (click)=\"show()\">Show more info</button>\n    </div>\n  </div>\n</ng-template>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/components/modal/modal.component.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/components/modal/modal.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-window\">\n  <div class=\"content\">\n    <div class=\"header\">\n      <div class=\"header-content\">\n        <div class=\"avatar-wrap\">\n          <div class=\"avatar\">\n            <img class=\"img\" src=\"../../assets/img/avatar.jpeg\" alt=\"\">\n          </div>\n        </div>\n\n        <div class=\"info\">\n          <div class=\"name\">Ivan Ivanov</div>\n          <div class=\"email\">somemail@mail.com</div>\n        </div>\n      </div>\n\n    </div>\n\n    <div class=\"modal-menu\">\n      <div class=\"profile\">\n\n        <div class=\"image\">\n          <img src=\"../../assets//svg//avatar.svg\" alt=\"\">\n        </div>\n        <div class=\"profile-text\">\n          <p>My profile</p>\n        </div>\n      </div>\n      <a routerLink=\"//account\">\n        <div class=\"settings\">\n          <div class=\"image\">\n            <img src=\"../../assets//svg//settings.svg\" alt=\"\">\n          </div>\n          <div class=\"settings-text\">\n            <p>Account settings</p>\n          </div>\n        </div>\n      </a>\n      <div class=\"sign-out\">\n        <div class=\"image\">\n          <img src=\"../../assets//svg//sing-out.svg\" alt=\"\">\n        </div>\n        <div class=\"sign-out-text\">\n          <p>Sign-out</p>\n        </div>\n      </div>\n\n\n    </div>\n\n\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/components/pagination/pagination.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/components/pagination/pagination.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"pagination\">\n  <button class=\"pagination__button\" [disabled]=\"!canPrev\" (click)=\"onPrev()\">Previous</button>\n  <div class=\"pagination__numbers_wrap\">\n    <div class=\"pagination__numbers\" *ngFor=\"let number of numbers;let f = first;let i = index\"\n      (click)=\"select(number)\">\n      <p class=\" pagination__numbers__item\" [ngClass]=\"{active: isActive(number)}\">\n        {{number}}\n      </p>\n\n    </div>\n\n  </div>\n  <button class=\"pagination__button\" [disabled]=\"!canNext\" (click)=\"onNext()\">Next</button>\n</div>\n<!-- {{min}} - {{max}} vs {{total}} -->\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/components/product-item/product-item.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/components/product-item/product-item.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"item\">\n  <img [src]=\"item.img\" alt=\"\" class=\"item__img\" />\n  <div class=\"item_information\">\n    <div class='item_unhover'>\n      <div class=\"item_information__name\">{{ item.name }}</div>\n      <div class=\"item_information__description\">{{ item.description }}</div>\n    </div>\n    <div class=\"item_hover\">\n      <button class=\"item_information__button\">ADD TO BAG</button>\n      <div class=\"item_information__size\">Sizes: {{ item.size }}</div>\n    </div>\n  </div>\n  <div class=\"item__price\">\n    <b>Rs. {{ item.reducedPrice }} </b><s>Rs. {{ item.price }}</s>\n    <small> ({{ item.discount }}% OFF)</small>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/components/search-box/search-box.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/components/search-box/search-box.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header__search-box\">\n  <button class=\"search-box__btn\" (click)=\"mySearch()\"></button>\n  <input class=\"search-box__text\" type=\"text\" [(ngModel)]=\"searchBox\" name=\"search\"\n    placeholder=\"Search for products, brands and more\">\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/components/sidebar/sidebar.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/components/sidebar/sidebar.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"sidebar\">\n  <div class=\"sidebar_head\">\n    <img [src]=\"sidebar.userImg\" alt=\"\" class=\"sidebar_head__photo\">\n    <div class=\"sidebar_head_information\">\n      <p class=\"sidebar_head_information__name\">{{sidebar.userName}} {{sidebar.userLastName}}</p>\n      <p class=\"sidebar_head_information__status\">{{sidebar.userStatus}}</p>\n    </div>\n  </div>\n  <div class=\"sidebar_list\">\n    <a routerLink=\"\">\n      <div class=\"sidebar_list_item\">\n        <img src=\"assets/sidebar/speedometer.svg\" alt=\"\">\n        <p>Dashboard</p>\n      </div>\n    </a>\n    <a routerLink=\"//products\">\n      <div class=\"sidebar_list_item\">\n        <img src=\"assets/sidebar/shopping-cart.svg\" alt=\"\">\n        <p>My products</p>\n      </div>\n    </a>\n    <a routerLink=\"//orders\">\n      <div class=\"sidebar_list_item\">\n        <img src=\"assets/sidebar/shopping-cart.svg\" alt=\"\">\n        <p>Orders</p>\n      </div>\n    </a>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/pages/auth/login/login.component.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/pages/auth/login/login.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login\">\n  <img src=\"assets/auth/login.jpg\" class=\"login_picture\">\n  <div class=\"login_block\">\n    <form [formGroup]=\"loginForm\" (submit)=\"loginUser()\" class=\"login_block_form\">\n      <h2>Log in</h2>\n      <p><small>If you don't have an account yet, please <a routerLink='/register'><u>register</u></a> first.</small>\n      </p>\n      <br>\n      <div class=\"login_block_form__item\">\n        <input formControlName=\"email\" type=\"email\" class=\"login_block_form__item-control\" placeholder=\"Enter email\">\n      </div>\n      <div class=\"login_block_form__item\">\n        <input formControlName=\"password\" type=\"password\" class=\"login_block_form__item-control\" placeholder=\"Password\">\n        <p><small><a><u>I forgot my password</u></a></small></p>\n      </div>\n      <div class=\"custom-control custom-checkbox\">\n        <input formControlName=\"remember\" type=\"checkbox\" class=\"custom-control-input\" id=\"customCheck1\">\n        <label class=\"custom-control-label\" for=\"customCheck1\">Remember\n          me</label>\n      </div>\n      <br>\n      <br>\n      <button class=\"login_block_form__button\">Log in</button>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/pages/auth/register/register.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/pages/auth/register/register.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"register\">\n  <img src=\"/assets/auth/register.png\" class=\"register_picture\">\n  <div class=\"register_block\">\n    <form class=\"register_block_form\" [formGroup]=\"registerForm\" (submit)=\"registerUser()\">\n      <h2>Register</h2>\n      <p><small>Please enter your name and e-mail here for the registration.</small></p>\n      <div class=\"register_block_form__item\">\n        <input formControlName=\"firstName\" type=\"text\" class=\"register_block_form__item-control\"\n          placeholder=\"First name\"> </div>\n      <div class=\"register_block_form__item\">\n        <input formControlName=\"lastName\" type=\"text\" class=\"register_block_form__item-control\" placeholder=\"Last name\">\n      </div>\n      <div class=\"register_block_form__item\">\n        <input formControlName=\"email\" type=\"email\" class=\"register_block_form__item-control\" placeholder=\"E-Mail\">\n      </div>\n      <div class=\"register_block_form__item\">\n        <input formControlName=\"password\" type=\"password\" class=\"register_block_form__item-control\"\n          placeholder=\"Your password\">\n      </div>\n      <div class=\"register_block_form__item\">\n        <input formControlName=\"passwordConfirm\" type=\"password\" class=\"register_block_form__item-control\"\n          placeholder=\"Confirm password\">\n      </div>\n      <br>\n      <br>\n      <button type=\"submit\" class=\"register_block_form__button\">Register</button>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/pages/dashboard/dashboard.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/pages/dashboard/dashboard.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header (open)=\"onOpen($event)\" (close)=\"onClose($event)\"></app-header>\n<div class=\"dashboard_page\">\n  <app-sidebar></app-sidebar>\n  <div style=\"width: 100%\">\n    <router-outlet></router-outlet>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/pages/new-product/new-product.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/pages/new-product/new-product.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\n  <div class=\"content\">\n    <div class=\"wrapper\">\n      <div>\n        <p>Product name</p>\n        <input [ngClass]=\"{\n          'red-border':\n            isFieldValid('productName')\n        }\" formControlName=\"productName\" class=\"input\" onfocus=\"this.placeholder = ''\" placeholder=\"Product name\"\n          type=\"text\">\n      </div>\n\n      <div>\n        <p>Basic Price</p>\n        <div class=\"price\">\n          <div class=\"price-dollar\">\n            <p>$</p>\n          </div>\n          <div class=\"price-input\">\n            <input [ngClass]=\"{\n              'dollar-red-border':\n                isFieldValid('price')\n            }\" formControlName=\"price\" class=\"input\" placeholder=\"Price\" type=\"text\">\n\n          </div>\n        </div>\n      </div>\n\n      <div>\n        <p>Brand</p>\n        <input [ngClass]=\"{\n          'red-border':\n            isFieldValid('brandName')\n        }\" formControlName=\"brandName\" class=\"input\" placeholder=\"brand name\" type=\"text\">\n      </div>\n\n      <div>\n        <p>Main material</p>\n        <select class=\"input\" name=\"material\" id=\"\">\n          <option value=\"Cotton\">Cotton</option>\n          <option value=\"Leather\">Leather</option>\n          <option value=\"Wool\">Wool</option>\n          <option value=\"Silk\">Silk</option>\n          <option value=\"Synthetic\">Synthetic</option>\n        </select>\n      </div>\n      <div>\n        <p>Images</p>\n        <div>\n          <img *ngFor=\"let url of urls\" [src]=\"url\" width=\"180\">\n        </div>\n        <input formControlName=\"images\" class=\"custom-file-input\" type=\"file\" height=\"40px\" multiple\n          (change)=\"detectFiles($event)\">\n      </div>\n      <div>\n        <p>Available sizes</p>\n        <select formControlName=\"sizes\" class=\"input select\" multiple>\n          <option value=\"XS\">XS</option>\n          <option value=\"S\">S</option>\n          <option value=\"M\">M</option>\n          <option value=\"L\">L</option>\n          <option value=\"XL\">XL</option>\n          <option value=\"XXL\">XXL</option>\n        </select>\n      </div>\n      <div>\n        tex\n        <p>Available colors(can be more that one)</p>\n        <select formControlName=\"colors\" class=\"input select\" multiple>\n          <option value=\"Yellow\">Yellow</option>\n          <option value=\"Blue\">Blue</option>\n          <option value=\"Orange\">Orange</option>\n          <option value=\"Red\">Red</option>\n          <option value=\"White\">White</option>\n        </select>\n      </div>\n\n      <div>\n        <p>Description</p>\n\n      </div>\n      <div class=\"btn\">\n        <button [disabled]=\"form.invalid\" type=\"submit\" class=\"save-button\">SAVE</button>\n\n      </div>\n    </div>\n\n  </div>\n\n</form>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/pages/product-detail/product-detail.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/pages/product-detail/product-detail.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- insert here your code -->\n<app-product-info></app-product-info>\n<app-item-bottom-section></app-item-bottom-section>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/pages/product-info/product-info.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/pages/product-info/product-info.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\n  <div class=\"product-image\">\n    <div class=\"image-wrap\">\n      <img class=\"img\" src=\"../../assets///img///product-image.jpg\" alt=\"\">\n    </div>\n  </div>\n  <div class=\"product-info\">\n    <div class=\"brand\">\n      <div class=\"brand-name\">\n        <p>\n          Levi's\n        </p>\n      </div>\n      <div class=\"brand-logo\">\n        <img src=\"../../assets/img//levi's-logo.png\" class=\"levis-image\" alt=\"\">\n      </div>\n    </div>\n\n    <div class=\"item-description\">\n      <p>short item description</p>\n    </div>\n    <div class=\"pricing\">\n      <div class=\"price\">\n        <p> 99$ </p>\n\n      </div>\n      <div class=\"free-shipping\">\n        <p>Free shipping</p>\n      </div>\n    </div>\n    <div class=\"sizing\">\n      <div class=\"size-table\">\n        <p>\n          <a class=\"size-table-link\" href=\"\">Size table</a>\n        </p>\n      </div>\n      <div class=\"button-block\">\n        <div class=\"select-size\">\n          <select class=\"select-size-slc\" name=\"\" id=\"\">\n            <option value=\"\">SELECT SIZE</option>\n            <option value=\"\">XS</option>\n            <option value=\"\">S</option>\n            <option value=\"\">M</option>\n            <option value=\"\">L</option>\n            <option value=\"\">XL</option>\n          </select>\n        </div>\n        <div class=\"add-to-cart\">\n          <button class=\"add-to-cart-btn\">ADD TO CART</button>\n        </div>\n      </div>\n    </div>\n    <div class=\"shipping\">\n      <div class=\"shipping-info\">\n        <div class=\"shipping-info-image\">\n          <img src=\"../../assets/img///delivery_icon.png\" alt=\"\">\n        </div>\n        <div class=\"shipping-info-text\">\n          <p>FREE EXPRESS SHIPPING START FROM 100$ </p>\n        </div>\n      </div>\n      <div class=\"exchange-info\">\n        <div class=\"exchange-info-image\">\n          <img src=\"../../assets/img//return_icon.png\" alt=\"\">\n        </div>\n        <div class=\"exchange-info-text\">\n          <p>CONVENIENT RETURN AND EXCHANGE</p>\n        </div>\n      </div>\n    </div>\n    <div class=\"official-stores-info\">\n      <div class=\"official-stores-info-tittle\">\n        OFFICIAL STORES\n      </div>\n      <div class=\"official-stores-info-description\">\n        Delivery from branded brand stores guarantee the originally of the goods.\n      </div>\n    </div>\n\n\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/pages/products/products.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/pages/products/products.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-button class=\"product__add-item-btn\"></app-button>\n\n<div class=\"product__search\">\n  <app-search-box class=\"searchBox\"></app-search-box>\n</div>\n\n<hr>\n<div class=\"product__list\">\n  <div *ngFor=\"let product of productItems\">\n    <app-product-item [item]=\"product\"></app-product-item>\n  </div>\n</div>\n<app-pagination size=\"12\" total=\"100\" (pageChanged)=\"onPageChanged($event)\"></app-pagination>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_pages_auth_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/pages/auth/login/login.component */ "./src/pages/auth/login/login.component.ts");
/* harmony import */ var src_pages_auth_register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/pages/auth/register/register.component */ "./src/pages/auth/register/register.component.ts");
/* harmony import */ var src_pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/pages/dashboard/dashboard.component */ "./src/pages/dashboard/dashboard.component.ts");
/* harmony import */ var src_pages_new_product_new_product_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/pages/new-product/new-product.component */ "./src/pages/new-product/new-product.component.ts");







var routes = [
    {
        path: 'login',
        component: src_pages_auth_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    },
    {
        path: 'register',
        component: src_pages_auth_register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"]
    },
    {
        path: 'new-product',
        component: src_pages_new_product_new_product_component__WEBPACK_IMPORTED_MODULE_6__["NewProductComponent"]
    },
    {
        path: '',
        component: src_pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"],
        children: [
            {
                path: 'products',
                loadChildren: function () {
                    return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! src/modules/products/products.module */ "./src/modules/products/products.module.ts")).then(function (m) { return m.ProductsModule; });
                }
            },
            {
                path: 'account',
                loadChildren: function () {
                    return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! src/modules/account-settings/account-settings.module */ "./src/modules/account-settings/account-settings.module.ts")).then(function (m) { return m.AccountSettingsModule; });
                }
            },
            {
                path: 'new-item',
                loadChildren: function () {
                    return __webpack_require__.e(/*! import() | src-modules-new-item-page-new-item-page-module */ "src-modules-new-item-page-new-item-page-module").then(__webpack_require__.bind(null, /*! src/modules/new-item-page/new-item-page.module */ "./src/modules/new-item-page/new-item-page.module.ts")).then(function (m) { return m.NewItemPageModule; });
                }
            }
        ]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var src_modules_products_products_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/modules/products/products.module */ "./src/modules/products/products.module.ts");
/* harmony import */ var src_modules_auth_auth_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/modules/auth/auth.module */ "./src/modules/auth/auth.module.ts");
/* harmony import */ var src_modules_dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/modules/dashboard/dashboard.module */ "./src/modules/dashboard/dashboard.module.ts");
/* harmony import */ var src_modules_account_settings_account_settings_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/modules/account-settings/account-settings.module */ "./src/modules/account-settings/account-settings.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_modules_new_product_new_product_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/modules/new-product/new-product.module */ "./src/modules/new-product/new-product.module.ts");












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                src_modules_auth_auth_module__WEBPACK_IMPORTED_MODULE_6__["AuthModule"],
                src_modules_dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_7__["DashboardModule"],
                src_modules_products_products_module__WEBPACK_IMPORTED_MODULE_5__["ProductsModule"],
                src_modules_account_settings_account_settings_module__WEBPACK_IMPORTED_MODULE_8__["AccountSettingsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
                src_modules_new_product_new_product_module__WEBPACK_IMPORTED_MODULE_11__["NewProductModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/components/account-settings/account-settings.component.scss":
/*!*************************************************************************!*\
  !*** ./src/components/account-settings/account-settings.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content {\n  padding: 4%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  font-family: sans-serif;\n  color: #485057;\n  height: 84vh;\n  -webkit-box-pack: center;\n          justify-content: center;\n  box-shadow: 11px 14px 293px -147px rgba(0, 0, 0, 0.75);\n}\n.content .title {\n  font-weight: bold;\n  font-size: 15px;\n}\n.content .top-inputs,\n.content .bottom-inputs {\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n}\n.content .top-inputs {\n  padding: 4% 0 0 0;\n}\n.content .top-inputs .email {\n  width: 32%;\n}\n.content .top-inputs .email .email-wrap {\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n  margin: 9px 0 0 0;\n  border: 1px solid #bdbdbd;\n  border-radius: 5px;\n}\n.content .top-inputs .email .email-wrap .email-input {\n  border: none;\n  margin: 0;\n}\n.content .top-inputs .email .email-wrap .email-red-border {\n  border-left: 7px solid #bd3939;\n  border-radius: 0px;\n}\n.content .top-inputs .email .email-wrap .email-svg {\n  border-right: 1px solid #bdbdbd;\n  margin: 0;\n  width: 40px;\n  height: 40px;\n  background-color: #e9ecef;\n  border-radius: 4px 0 0 4px;\n}\n.content .top-inputs .email .email-wrap .email-svg .svg {\n  width: 18px;\n  margin: 11px;\n}\n.content .first-n,\n.content .last-n {\n  width: 32%;\n}\n.content .requiredForm {\n  height: 0px;\n  text-align: center;\n  font-size: 12px;\n  color: #af3434;\n}\n.content .bottom-inputs {\n  padding: 2% 0 0 0;\n}\n.content .bottom-inputs .city {\n  width: 46%;\n}\n.content .bottom-inputs .state {\n  width: 25%;\n}\n.content .bottom-inputs .zip {\n  width: 25%;\n}\n.content .input {\n  font-size: 14px;\n  width: 100%;\n  height: 40px;\n  border-radius: 5px;\n  border: 1px solid #bdbdbd;\n  outline: none;\n  margin: 9px 0 0 0;\n  padding: 3%;\n}\n.content .red-border {\n  border-left: 7px solid #bd3939;\n}\n.content .input ::-webkit-input-placeholder {\n  font-size: 16px;\n}\n.content .input ::-moz-placeholder {\n  font-size: 16px;\n}\n.content .input ::-ms-input-placeholder {\n  font-size: 16px;\n}\n.content .input ::placeholder {\n  font-size: 16px;\n}\n.content .btn-wrap {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n  padding: 7% 0 0 0;\n}\n.content .btn-wrap .button {\n  width: 75px;\n  height: 35px;\n  border-radius: 5px;\n  background-color: #316bff;\n  color: #ffff;\n  font-size: 15px;\n  border: none;\n  cursor: pointer;\n}\n.content .btn-wrap .button:disabled {\n  opacity: 0.6;\n  cursor: default;\n}\n@media screen and (max-width: 768px) {\n  .content {\n    height: 100%;\n  }\n  .content .top-inputs {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n    width: 100%;\n  }\n  .content .top-inputs .first-n,\n.content .top-inputs .last-n,\n.content .top-inputs .email {\n    width: 100%;\n    margin: 0 0 10px 0;\n  }\n  .content .bottom-inputs {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n    width: 100%;\n  }\n  .content .bottom-inputs .city,\n.content .bottom-inputs .state,\n.content .bottom-inputs .zip {\n    width: 100%;\n    margin: 0 0 10px 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy95dXJraXd3L0Rlc2t0b3AvRmFzaGlvblN0b3JlL3NyYy9jb21wb25lbnRzL2FjY291bnQtc2V0dGluZ3MvYWNjb3VudC1zZXR0aW5ncy5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy95dXJraXd3L0Rlc2t0b3AvRmFzaGlvblN0b3JlL3NyYy9zdHlsZXMvY29sb3JzL2NvbG9ycy5zY3NzIiwic3JjL2NvbXBvbmVudHMvYWNjb3VudC1zZXR0aW5ncy9hY2NvdW50LXNldHRpbmdzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsV0FBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0NDeUI7RURBekIsWUFBQTtFQUlBLHdCQUFBO1VBQUEsdUJBQUE7RUFHQSxzREFBQTtBRUpGO0FGTUU7RUFDRSxpQkFBQTtFQUNBLGVBQUE7QUVKSjtBRk9FOztFQUVFLHlCQUFBO1VBQUEsOEJBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsOEJBQUE7RUFBQSw2QkFBQTtVQUFBLG1CQUFBO0FFTEo7QUZRRTtFQUNFLGlCQUFBO0FFTko7QUZRSTtFQUNFLFVBQUE7QUVOTjtBRlFNO0VBQ0UsV0FBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLGlCQUFBO0VBQ0EseUJDMUJrQjtFRDJCbEIsa0JBQUE7QUVOUjtBRlFRO0VBQ0UsWUFBQTtFQUNBLFNBQUE7QUVOVjtBRlNRO0VBQ0UsOEJBQUE7RUFDQSxrQkFBQTtBRVBWO0FGVVE7RUFDRSwrQkN4Q2dCO0VEeUNoQixTQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkNoRG1CO0VEaURuQiwwQkFBQTtBRVJWO0FGVVU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBRVJaO0FGZUU7O0VBRUUsVUFBQTtBRWJKO0FGZ0JFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGNDcEV5QjtBQ3NEN0I7QUZpQkU7RUFDRSxpQkFBQTtBRWZKO0FGaUJJO0VBQ0UsVUFBQTtBRWZOO0FGa0JJO0VBQ0UsVUFBQTtBRWhCTjtBRm1CSTtFQUNFLFVBQUE7QUVqQk47QUZxQkU7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQ3pGc0I7RUQwRnRCLGFBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUVuQko7QUZzQkU7RUFDRSw4QkFBQTtBRXBCSjtBRnVCRTtFQUNFLGVBQUE7QUVyQko7QUZvQkU7RUFDRSxlQUFBO0FFckJKO0FGb0JFO0VBQ0UsZUFBQTtBRXJCSjtBRm9CRTtFQUNFLGVBQUE7QUVyQko7QUZ3QkU7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxxQkFBQTtVQUFBLHlCQUFBO0VBQ0EsaUJBQUE7QUV0Qko7QUZ3Qkk7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJDbEh1QjtFRG1IdkIsWUNsSDBCO0VEbUgxQixlQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUV0Qk47QUZ3Qk07RUFDRSxZQUFBO0VBQ0EsZUFBQTtBRXRCUjtBRjZCQTtFQUNFO0lBQ0UsWUFBQTtFRTFCRjtFRjRCRTtJQUNFLG9CQUFBO0lBQUEsYUFBQTtJQUNBLDRCQUFBO0lBQUEsNkJBQUE7WUFBQSxzQkFBQTtJQUNBLFdBQUE7RUUxQko7RUY0Qkk7OztJQUdFLFdBQUE7SUFDQSxrQkFBQTtFRTFCTjtFRjhCRTtJQUNFLG9CQUFBO0lBQUEsYUFBQTtJQUNBLDRCQUFBO0lBQUEsNkJBQUE7WUFBQSxzQkFBQTtJQUNBLFdBQUE7RUU1Qko7RUY4Qkk7OztJQUdFLFdBQUE7SUFDQSxrQkFBQTtFRTVCTjtBQUNGIiwiZmlsZSI6InNyYy9jb21wb25lbnRzL2FjY291bnQtc2V0dGluZ3MvYWNjb3VudC1zZXR0aW5ncy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4vc3JjL3N0eWxlcy9jb2xvcnMvY29sb3JzLnNjc3MnO1xuXG4uY29udGVudCB7XG4gIHBhZGRpbmc6IDQlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgY29sb3I6ICRhY2NvdW50LXNldHRpbmdzX2NvbnRlbnQ7XG4gIGhlaWdodDogODR2aDtcblxuXG5cbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMTFweCAxNHB4IDI5M3B4IC0xNDdweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xuICAtbW96LWJveC1zaGFkb3c6IDExcHggMTRweCAyOTNweCAtMTQ3cHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcbiAgYm94LXNoYWRvdzogMTFweCAxNHB4IDI5M3B4IC0xNDdweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xuXG4gIC50aXRsZSB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICB9XG5cbiAgLnRvcC1pbnB1dHMsXG4gIC5ib3R0b20taW5wdXRzIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICB9XG5cbiAgLnRvcC1pbnB1dHMge1xuICAgIHBhZGRpbmc6IDQlIDAgMCAwO1xuXG4gICAgLmVtYWlsIHtcbiAgICAgIHdpZHRoOiAzMiU7XG5cbiAgICAgIC5lbWFpbC13cmFwIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIG1hcmdpbjogOXB4IDAgMCAwO1xuICAgICAgICBib3JkZXI6ICRhY2NvdW50LXNldHRpbmdzX2JvcmRlcjtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuXG4gICAgICAgIC5lbWFpbC1pbnB1dCB7XG4gICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5lbWFpbC1yZWQtYm9yZGVyIHtcbiAgICAgICAgICBib3JkZXItbGVmdDogN3B4IHNvbGlkICRhY2NvdW50LXNldHRpbmdzX3JlZC1ib3JkZXI7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmVtYWlsLXN2ZyB7XG4gICAgICAgICAgYm9yZGVyLXJpZ2h0OiAkYWNjb3VudC1zZXR0aW5nc19ib3JkZXI7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYWNjb3VudC1zZXR0aW5nc19lbWFpbC1zdmc7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4IDAgMCA0cHg7XG5cbiAgICAgICAgICAuc3ZnIHtcbiAgICAgICAgICAgIHdpZHRoOiAxOHB4O1xuICAgICAgICAgICAgbWFyZ2luOiAxMXB4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5maXJzdC1uLFxuICAubGFzdC1uIHtcbiAgICB3aWR0aDogMzIlO1xuICB9XG5cbiAgLnJlcXVpcmVkRm9ybSB7XG4gICAgaGVpZ2h0OiAwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBjb2xvcjogJGFjY291bnQtc2V0dGluZ3NfcmVkLWNvbG9yO1xuICB9XG5cbiAgLmJvdHRvbS1pbnB1dHMge1xuICAgIHBhZGRpbmc6IDIlIDAgMCAwO1xuXG4gICAgLmNpdHkge1xuICAgICAgd2lkdGg6IDQ2JTtcbiAgICB9XG5cbiAgICAuc3RhdGUge1xuICAgICAgd2lkdGg6IDI1JTtcbiAgICB9XG5cbiAgICAuemlwIHtcbiAgICAgIHdpZHRoOiAyNSU7XG4gICAgfVxuICB9XG5cbiAgLmlucHV0IHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBib3JkZXI6ICRhY2NvdW50LXNldHRpbmdzX2JvcmRlcjtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIG1hcmdpbjogOXB4IDAgMCAwO1xuICAgIHBhZGRpbmc6IDMlO1xuICB9XG5cbiAgLnJlZC1ib3JkZXIge1xuICAgIGJvcmRlci1sZWZ0OiA3cHggc29saWQgJGFjY291bnQtc2V0dGluZ3NfcmVkLWJvcmRlcjtcbiAgfVxuXG4gIC5pbnB1dCA6OnBsYWNlaG9sZGVyIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gIH1cblxuICAuYnRuLXdyYXAge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICBwYWRkaW5nOiA3JSAwIDAgMDtcblxuICAgIC5idXR0b24ge1xuICAgICAgd2lkdGg6IDc1cHg7XG4gICAgICBoZWlnaHQ6IDM1cHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYWNjb3VudC1zZXR0aW5nc19idXR0b24tYmM7XG4gICAgICBjb2xvcjogJGFjY291bnQtc2V0dGluZ3NfYnV0dG9uLWNvbG9yO1xuICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgICAmOmRpc2FibGVkIHtcbiAgICAgICAgb3BhY2l0eTogMC42O1xuICAgICAgICBjdXJzb3I6IGRlZmF1bHQ7XG5cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmNvbnRlbnQge1xuICAgIGhlaWdodDogMTAwJTtcblxuICAgIC50b3AtaW5wdXRzIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgd2lkdGg6IDEwMCU7XG5cbiAgICAgIC5maXJzdC1uLFxuICAgICAgLmxhc3QtbixcbiAgICAgIC5lbWFpbCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXJnaW46IDAgMCAxMHB4IDA7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmJvdHRvbS1pbnB1dHMge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICB3aWR0aDogMTAwJTtcblxuICAgICAgLmNpdHksXG4gICAgICAuc3RhdGUsXG4gICAgICAuemlwIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1hcmdpbjogMCAwIDEwcHggMDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIi8vIG1haW4gY29sb3JzXG4kZ3JleS1ibHVlOiByZ2IoMzEsIDM0LCA0Myk7XG4kd2hpdGU6IHdoaXRlO1xuJGdyZXk6IGdyZXk7XG4kYWxpY2VibHVlOiBhbGljZWJsdWU7XG5cbi8vIGFjY291bnQtc2V0dGluZ3NcblxuJGFjY291bnQtc2V0dGluZ3NfY29udGVudDogIzQ4NTA1NztcbiRhY2NvdW50LXNldHRpbmdzX3JlZC1ib3JkZXI6ICNiZDM5Mzk7XG4kYWNjb3VudC1zZXR0aW5nc19lbWFpbC1zdmc6ICNlOWVjZWY7XG4kYWNjb3VudC1zZXR0aW5nc19yZWQtY29sb3I6ICNhZjM0MzQ7XG4kYWNjb3VudC1zZXR0aW5nc19idXR0b24tYmM6ICMzMTZiZmY7XG4kYWNjb3VudC1zZXR0aW5nc19idXR0b24tY29sb3I6ICNmZmZmO1xuJGFjY291bnQtc2V0dGluZ3NfYm9yZGVyOiAxcHggc29saWQgI2JkYmRiZDtcblxuLy8gbW9kYWxcblxuJG1vZGFsX2hlYWRlci1iYzogIzQ5NGFmZDtcbiRtb2RhbF9oZWFkZXItY29sb3I6YWxpY2VibHVlO1xuJG1vZGFsX2hvdmVyLWJjOiNmOGY5ZmE7XG4kbW9kYWxfaG92ZXItY29sb3I6IzZiN2FmYztcblxuLy8gcHJvZHVjdC1pdGVtXG4kcHJvZHVjdC1pdGVtX2JvcmRlcjoxcHggc29saWQgcmdiYSgzMSwgMzQsIDQzLCAwLjIpO1xuJHByb2R1Y3QtaXRlbS1ob3ZlcjogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xuJHByb2R1Y3QtaXRlbV9idXR0b24tYmM6I2Y0NTExZTtcblxuLy8gc2VhcmNoLWJveFxuJHNlYXJjaC1ib3gtYmM6ICNmNWY1ZjY7XG5cbi8vIHNpZGViYXJcbiRzaWRlYmFyX2xpc3RfaXRlbS1ob3Zlci1ib3JkZXI6MnB4IHNvbGlkIHJnYigzMywgNzYsIDIwNyk7XG4kc2lkZWJhcl9saXN0X2l0ZW0taG92ZXItY29sb3I6cmdiKDYzLCA2OCwgODQpO1xuXG4vLyBhdXRoXG4kYXV0aF9idXR0b25fY29sb3I6ICMwMDdiZmY7XG4kYXV0aF9jaGVja2JveF9jb2xvcjogIzQ5NTA1NztcbiRhdXRoX2NoZWNrYm94X2JvcmRlcjoxcHggc29saWQgI2NlZDRkYTtcbiRhdXRoX2NoZWNrYm94X2JvcmRlci1iZWZvcmU6ICNhZGI1YmQgc29saWQgMXB4O1xuXG4vLyBidXR0b25zXG5AbWl4aW4gZGFyayB7XG4gIGNvbG9yOiAjMzQzYTQwO1xuICBib3JkZXItY29sb3I6ICMzNDNhNDA7XG5cbiAgJjpob3ZlciB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM0M2E0MDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cblxuXG4gICY6Zm9jdXMge1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgMC4ycmVtIHJnYmEoNTIsIDU4LCA2NCwgLjUpXG4gIH1cbn1cblxuQG1peGluIHN1Y2Nlc3Mge1xuICBjb2xvcjogIzI4YTc0NTtcbiAgYm9yZGVyLWNvbG9yOiAjMjhhNzQ1O1xuXG4gICY6aG92ZXIge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjhhNzQ1O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuXG4gICY6Zm9jdXMge1xuICAgIGJveC1zaGFkb3c6IDAgMCAwIDAuMnJlbSByZ2JhKDQwLCAxNjcsIDY5LCAuNSk7XG4gICAgb3V0bGluZTogbm9uZVxuICB9XG59XG4iLCIuY29udGVudCB7XG4gIHBhZGRpbmc6IDQlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgY29sb3I6ICM0ODUwNTc7XG4gIGhlaWdodDogODR2aDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMTFweCAxNHB4IDI5M3B4IC0xNDdweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xuICAtbW96LWJveC1zaGFkb3c6IDExcHggMTRweCAyOTNweCAtMTQ3cHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcbiAgYm94LXNoYWRvdzogMTFweCAxNHB4IDI5M3B4IC0xNDdweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xufVxuLmNvbnRlbnQgLnRpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cbi5jb250ZW50IC50b3AtaW5wdXRzLFxuLmNvbnRlbnQgLmJvdHRvbS1pbnB1dHMge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuLmNvbnRlbnQgLnRvcC1pbnB1dHMge1xuICBwYWRkaW5nOiA0JSAwIDAgMDtcbn1cbi5jb250ZW50IC50b3AtaW5wdXRzIC5lbWFpbCB7XG4gIHdpZHRoOiAzMiU7XG59XG4uY29udGVudCAudG9wLWlucHV0cyAuZW1haWwgLmVtYWlsLXdyYXAge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luOiA5cHggMCAwIDA7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNiZGJkYmQ7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbi5jb250ZW50IC50b3AtaW5wdXRzIC5lbWFpbCAuZW1haWwtd3JhcCAuZW1haWwtaW5wdXQge1xuICBib3JkZXI6IG5vbmU7XG4gIG1hcmdpbjogMDtcbn1cbi5jb250ZW50IC50b3AtaW5wdXRzIC5lbWFpbCAuZW1haWwtd3JhcCAuZW1haWwtcmVkLWJvcmRlciB7XG4gIGJvcmRlci1sZWZ0OiA3cHggc29saWQgI2JkMzkzOTtcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xufVxuLmNvbnRlbnQgLnRvcC1pbnB1dHMgLmVtYWlsIC5lbWFpbC13cmFwIC5lbWFpbC1zdmcge1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjYmRiZGJkO1xuICBtYXJnaW46IDA7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlOWVjZWY7XG4gIGJvcmRlci1yYWRpdXM6IDRweCAwIDAgNHB4O1xufVxuLmNvbnRlbnQgLnRvcC1pbnB1dHMgLmVtYWlsIC5lbWFpbC13cmFwIC5lbWFpbC1zdmcgLnN2ZyB7XG4gIHdpZHRoOiAxOHB4O1xuICBtYXJnaW46IDExcHg7XG59XG4uY29udGVudCAuZmlyc3Qtbixcbi5jb250ZW50IC5sYXN0LW4ge1xuICB3aWR0aDogMzIlO1xufVxuLmNvbnRlbnQgLnJlcXVpcmVkRm9ybSB7XG4gIGhlaWdodDogMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICNhZjM0MzQ7XG59XG4uY29udGVudCAuYm90dG9tLWlucHV0cyB7XG4gIHBhZGRpbmc6IDIlIDAgMCAwO1xufVxuLmNvbnRlbnQgLmJvdHRvbS1pbnB1dHMgLmNpdHkge1xuICB3aWR0aDogNDYlO1xufVxuLmNvbnRlbnQgLmJvdHRvbS1pbnB1dHMgLnN0YXRlIHtcbiAgd2lkdGg6IDI1JTtcbn1cbi5jb250ZW50IC5ib3R0b20taW5wdXRzIC56aXAge1xuICB3aWR0aDogMjUlO1xufVxuLmNvbnRlbnQgLmlucHV0IHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0MHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNiZGJkYmQ7XG4gIG91dGxpbmU6IG5vbmU7XG4gIG1hcmdpbjogOXB4IDAgMCAwO1xuICBwYWRkaW5nOiAzJTtcbn1cbi5jb250ZW50IC5yZWQtYm9yZGVyIHtcbiAgYm9yZGVyLWxlZnQ6IDdweCBzb2xpZCAjYmQzOTM5O1xufVxuLmNvbnRlbnQgLmlucHV0IDo6cGxhY2Vob2xkZXIge1xuICBmb250LXNpemU6IDE2cHg7XG59XG4uY29udGVudCAuYnRuLXdyYXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBwYWRkaW5nOiA3JSAwIDAgMDtcbn1cbi5jb250ZW50IC5idG4td3JhcCAuYnV0dG9uIHtcbiAgd2lkdGg6IDc1cHg7XG4gIGhlaWdodDogMzVweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzE2YmZmO1xuICBjb2xvcjogI2ZmZmY7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgYm9yZGVyOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uY29udGVudCAuYnRuLXdyYXAgLmJ1dHRvbjpkaXNhYmxlZCB7XG4gIG9wYWNpdHk6IDAuNjtcbiAgY3Vyc29yOiBkZWZhdWx0O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuY29udGVudCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG4gIC5jb250ZW50IC50b3AtaW5wdXRzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLmNvbnRlbnQgLnRvcC1pbnB1dHMgLmZpcnN0LW4sXG4uY29udGVudCAudG9wLWlucHV0cyAubGFzdC1uLFxuLmNvbnRlbnQgLnRvcC1pbnB1dHMgLmVtYWlsIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDAgMCAxMHB4IDA7XG4gIH1cbiAgLmNvbnRlbnQgLmJvdHRvbS1pbnB1dHMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAuY29udGVudCAuYm90dG9tLWlucHV0cyAuY2l0eSxcbi5jb250ZW50IC5ib3R0b20taW5wdXRzIC5zdGF0ZSxcbi5jb250ZW50IC5ib3R0b20taW5wdXRzIC56aXAge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogMCAwIDEwcHggMDtcbiAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/components/account-settings/account-settings.component.ts":
/*!***********************************************************************!*\
  !*** ./src/components/account-settings/account-settings.component.ts ***!
  \***********************************************************************/
/*! exports provided: AccountSettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountSettingsComponent", function() { return AccountSettingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_services_account_settings_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/services/account-settings.service */ "./src/services/account-settings.service.ts");




var AccountSettingsComponent = /** @class */ (function () {
    function AccountSettingsComponent(accountSettingsService) {
        var _this = this;
        this.accountSettingsService = accountSettingsService;
        this.users = [];
        this.isFieldValid = function (filedName) {
            return _this.form.get(filedName).invalid && _this.form.get(filedName).touched;
        };
    }
    AccountSettingsComponent.prototype.getUsers = function (param) {
        var _this = this;
        if (param === void 0) { param = {}; }
        this.accountSettingsService.getUsers(param).subscribe(function (res) {
            _this.users = res;
            console.log(res);
            console.log(param);
        }, function (err) {
            console.log(err);
        });
    };
    AccountSettingsComponent.prototype.ngOnInit = function () {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]),
            firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            zip: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(8)
            ]),
            city: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            state: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
        this.getUsers();
    };
    AccountSettingsComponent.prototype.onSubmit = function () {
        console.log('Submitted', this.form);
    };
    AccountSettingsComponent.ctorParameters = function () { return [
        { type: src_services_account_settings_service__WEBPACK_IMPORTED_MODULE_3__["AccountSettingsService"] }
    ]; };
    AccountSettingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-account-settings',
            template: __webpack_require__(/*! raw-loader!./account-settings.component.html */ "./node_modules/raw-loader/index.js!./src/components/account-settings/account-settings.component.html"),
            styles: [__webpack_require__(/*! ./account-settings.component.scss */ "./src/components/account-settings/account-settings.component.scss")]
        })
    ], AccountSettingsComponent);
    return AccountSettingsComponent;
}());



/***/ }),

/***/ "./src/components/button/button.component.scss":
/*!*****************************************************!*\
  !*** ./src/components/button/button.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".button__add-item {\n  font-size: 16px;\n  padding: 10px;\n  margin: 10px;\n  border: 2px solid #a6d0a8;\n  background: white;\n  -webkit-transition-duration: 1s;\n          transition-duration: 1s;\n  cursor: pointer;\n  text-align: center;\n  border-radius: 10px;\n  outline: none;\n}\n.button :hover {\n  background: #a6d0a8;\n}\n.button :active {\n  -webkit-transform: translateY(20px);\n          transform: translateY(20px);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy95dXJraXd3L0Rlc2t0b3AvRmFzaGlvblN0b3JlL3NyYy9jb21wb25lbnRzL2J1dHRvbi9idXR0b24uY29tcG9uZW50LnNjc3MiLCJzcmMvY29tcG9uZW50cy9idXR0b24vYnV0dG9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLCtCQUFBO1VBQUEsdUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7QUNBSjtBREdFO0VBQ0UsbUJBQUE7QUNESjtBRElFO0VBQ0UsbUNBQUE7VUFBQSwyQkFBQTtBQ0ZKIiwiZmlsZSI6InNyYy9jb21wb25lbnRzL2J1dHRvbi9idXR0b24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnV0dG9uIHtcbiAgJl9fYWRkLWl0ZW0ge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIG1hcmdpbjogMTBweDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMTY2LCAyMDgsIDE2OCk7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMXM7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIG91dGxpbmU6IG5vbmU7XG4gIH1cblxuICA6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6IHJnYigxNjYsIDIwOCwgMTY4KTtcbiAgfVxuXG4gIDphY3RpdmUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMHB4KTtcbiAgfVxufVxuIiwiLmJ1dHRvbl9fYWRkLWl0ZW0ge1xuICBmb250LXNpemU6IDE2cHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIG1hcmdpbjogMTBweDtcbiAgYm9yZGVyOiAycHggc29saWQgI2E2ZDBhODtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDFzO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgb3V0bGluZTogbm9uZTtcbn1cbi5idXR0b24gOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2E2ZDBhODtcbn1cbi5idXR0b24gOmFjdGl2ZSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMHB4KTtcbn0iXX0= */"

/***/ }),

/***/ "./src/components/button/button.component.ts":
/*!***************************************************!*\
  !*** ./src/components/button/button.component.ts ***!
  \***************************************************/
/*! exports provided: ButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonComponent", function() { return ButtonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ButtonComponent = /** @class */ (function () {
    function ButtonComponent() {
    }
    ButtonComponent.prototype.ngOnInit = function () {
    };
    ButtonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-button',
            template: __webpack_require__(/*! raw-loader!./button.component.html */ "./node_modules/raw-loader/index.js!./src/components/button/button.component.html"),
            styles: [__webpack_require__(/*! ./button.component.scss */ "./src/components/button/button.component.scss")]
        })
    ], ButtonComponent);
    return ButtonComponent;
}());



/***/ }),

/***/ "./src/components/header/header.component.scss":
/*!*****************************************************!*\
  !*** ./src/components/header/header.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\n  margin: 0;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n          align-items: center;\n  padding: 20px;\n  padding-top: 0px;\n  padding-bottom: 0px;\n  height: 16vh;\n}\n\n.header__img {\n  width: 150px;\n  height: auto;\n}\n\n.header__user {\n  -webkit-box-flex: 2;\n          flex: 2;\n  text-align: end;\n  margin-right: 50px;\n}\n\n.header__user-img {\n  width: 60px;\n  height: auto;\n}\n\n.header__user-img:hover {\n  cursor: pointer;\n}\n\n.modal {\n  position: absolute;\n  right: 5px;\n  top: 100px;\n}\n\n.search-box {\n  position: absolute;\n  left: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy95dXJraXd3L0Rlc2t0b3AvRmFzaGlvblN0b3JlL3NyYy9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsU0FBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FER0E7RUFDRSxZQUFBO0VBQ0EsWUFBQTtBQ0FGOztBREdBO0VBQ0UsbUJBQUE7VUFBQSxPQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDQUY7O0FER0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQ0FGOztBREVFO0VBQ0UsZUFBQTtBQ0FKOztBRElBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtBQ0RGOztBRElBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0FDREYiLCJmaWxlIjoic3JjL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXIge1xuICBtYXJnaW46IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMjBweDtcbiAgcGFkZGluZy10b3A6IDBweDtcbiAgcGFkZGluZy1ib3R0b206IDBweDtcbiAgaGVpZ2h0OiAxNnZoO1xufVxuXG5cbi5oZWFkZXJfX2ltZyB7XG4gIHdpZHRoOiAxNTBweDtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG4uaGVhZGVyX191c2VyIHtcbiAgZmxleDogMjtcbiAgdGV4dC1hbGlnbjogZW5kO1xuICBtYXJnaW4tcmlnaHQ6IDUwcHg7XG59XG5cbi5oZWFkZXJfX3VzZXItaW1nIHtcbiAgd2lkdGg6IDYwcHg7XG4gIGhlaWdodDogYXV0bztcblxuICAmOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbn1cblxuLm1vZGFsIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogNXB4O1xuICB0b3A6IDEwMHB4O1xufVxuXG4uc2VhcmNoLWJveCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNTAlO1xufVxuIiwiLmhlYWRlciB7XG4gIG1hcmdpbjogMDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAyMHB4O1xuICBwYWRkaW5nLXRvcDogMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMHB4O1xuICBoZWlnaHQ6IDE2dmg7XG59XG5cbi5oZWFkZXJfX2ltZyB7XG4gIHdpZHRoOiAxNTBweDtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG4uaGVhZGVyX191c2VyIHtcbiAgZmxleDogMjtcbiAgdGV4dC1hbGlnbjogZW5kO1xuICBtYXJnaW4tcmlnaHQ6IDUwcHg7XG59XG5cbi5oZWFkZXJfX3VzZXItaW1nIHtcbiAgd2lkdGg6IDYwcHg7XG4gIGhlaWdodDogYXV0bztcbn1cbi5oZWFkZXJfX3VzZXItaW1nOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubW9kYWwge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiA1cHg7XG4gIHRvcDogMTAwcHg7XG59XG5cbi5zZWFyY2gtYm94IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA1MCU7XG59Il19 */"

/***/ }),

/***/ "./src/components/header/header.component.ts":
/*!***************************************************!*\
  !*** ./src/components/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
        var _this = this;
        this.open = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.visible = false;
        this.header = {
            logoUrl: 'assets/header/logo-myshop.png',
            userName: 'Ivan',
            userLastName: 'Ivanov',
            userImg: 'assets/header/user_male.png',
        };
        this.openModal = function () {
            _this.visible = !_this.visible;
            _this.visible ? _this.open.emit() : _this.close.emit();
        };
    }
    HeaderComponent.prototype.ngOnInit = function () { };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], HeaderComponent.prototype, "open", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], HeaderComponent.prototype, "close", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], HeaderComponent.prototype, "header", void 0);
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/components/header/header.component.scss")]
        })
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/components/item-bottom-section/item-bottom-section.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/components/item-bottom-section/item-bottom-section.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bottom-section-show {\n  margin: 10px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  flex-wrap: wrap;\n}\n.bottom-section-show__product-information {\n  margin-left: 50px;\n  -webkit-box-flex: 2;\n          flex: 2;\n}\n.bottom-section-show__brand-information {\n  margin-left: 50px;\n  -webkit-box-flex: 2;\n          flex: 2;\n}\n.bottom-section-show__cut-and-style {\n  margin-left: 200px;\n  -webkit-box-flex: 2;\n          flex: 2;\n}\n.bottom-section-show__display-info {\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n.bottom-section-show h3 {\n  text-transform: uppercase;\n}\n.bottom-section-show button {\n  margin-top: 80px;\n  font-weight: bold;\n  cursor: pointer;\n  outline: none;\n  text-transform: uppercase;\n  background: none;\n  border: none;\n  padding: 15px 32px;\n  border: 2px solid black;\n  -webkit-transition-duration: 0.6s;\n          transition-duration: 0.6s;\n}\n.bottom-section-show button:hover {\n  background-color: silver;\n}\n.bottom-section-hide {\n  background: -webkit-linear-gradient(black, #dbdbdb 50%);\n  -webkit-background-clip: text;\n          background-clip: text;\n  -webkit-text-fill-color: transparent;\n  margin: 10px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  flex-wrap: wrap;\n}\n.bottom-section-hide__product-information {\n  margin-left: 50px;\n  -webkit-box-flex: 2;\n          flex: 2;\n}\n.bottom-section-hide__brand-information {\n  margin-left: 50px;\n  -webkit-box-flex: 2;\n          flex: 2;\n}\n.bottom-section-hide__cut-and-style {\n  margin-left: 200px;\n  -webkit-box-flex: 2;\n          flex: 2;\n}\n.bottom-section-hide__display-info {\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n.bottom-section-hide h3 {\n  text-transform: uppercase;\n}\n.bottom-section-hide button {\n  margin-top: 80px;\n  font-weight: bold;\n  cursor: pointer;\n  outline: none;\n  text-transform: uppercase;\n  background: none;\n  border: none;\n  padding: 15px 32px;\n  border: 2px solid black;\n  -webkit-transition-duration: 0.6s;\n          transition-duration: 0.6s;\n  -webkit-text-fill-color: black;\n}\n.bottom-section-hide button:hover {\n  background-color: silver;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy95dXJraXd3L0Rlc2t0b3AvRmFzaGlvblN0b3JlL3NyYy9jb21wb25lbnRzL2l0ZW0tYm90dG9tLXNlY3Rpb24vaXRlbS1ib3R0b20tc2VjdGlvbi5jb21wb25lbnQuc2NzcyIsInNyYy9jb21wb25lbnRzL2l0ZW0tYm90dG9tLXNlY3Rpb24vaXRlbS1ib3R0b20tc2VjdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EsZUFBQTtBQ0NGO0FEQ0U7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO1VBQUEsT0FBQTtBQ0NKO0FERUU7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO1VBQUEsT0FBQTtBQ0FKO0FER0U7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO1VBQUEsT0FBQTtBQ0RKO0FESUU7RUFDRSxXQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtBQ0ZKO0FES0U7RUFDRSx5QkFBQTtBQ0hKO0FETUU7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQ0FBQTtVQUFBLHlCQUFBO0FDSko7QURPRTtFQUNFLHdCQUFBO0FDTEo7QURTQTtFQUNFLHVEQUFBO0VBQ0EsNkJBQUE7VUFBQSxxQkFBQTtFQUNBLG9DQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSxlQUFBO0FDTkY7QURRRTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7VUFBQSxPQUFBO0FDTko7QURTRTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7VUFBQSxPQUFBO0FDUEo7QURVRTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7VUFBQSxPQUFBO0FDUko7QURXRTtFQUNFLFdBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0FDVEo7QURZRTtFQUNFLHlCQUFBO0FDVko7QURhRTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLGlDQUFBO1VBQUEseUJBQUE7RUFDQSw4QkFBQTtBQ1hKO0FEY0U7RUFDRSx3QkFBQTtBQ1pKIiwiZmlsZSI6InNyYy9jb21wb25lbnRzL2l0ZW0tYm90dG9tLXNlY3Rpb24vaXRlbS1ib3R0b20tc2VjdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib3R0b20tc2VjdGlvbi1zaG93IHtcbiAgbWFyZ2luOiAxMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC13cmFwOiB3cmFwO1xuXG4gICZfX3Byb2R1Y3QtaW5mb3JtYXRpb24ge1xuICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xuICAgIGZsZXg6IDI7XG4gIH1cblxuICAmX19icmFuZC1pbmZvcm1hdGlvbiB7XG4gICAgbWFyZ2luLWxlZnQ6IDUwcHg7XG4gICAgZmxleDogMjtcbiAgfVxuXG4gICZfX2N1dC1hbmQtc3R5bGUge1xuICAgIG1hcmdpbi1sZWZ0OiAyMDBweDtcbiAgICBmbGV4OiAyO1xuICB9XG5cbiAgJl9fZGlzcGxheS1pbmZvIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG5cbiAgaDMge1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIH1cblxuICBidXR0b24ge1xuICAgIG1hcmdpbi10b3A6IDgwcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBwYWRkaW5nOiAxNXB4IDMycHg7XG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC42cztcbiAgfVxuXG4gIGJ1dHRvbjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogc2lsdmVyO1xuICB9XG59XG5cbi5ib3R0b20tc2VjdGlvbi1oaWRlIHtcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoYmxhY2ssICNkYmRiZGIgNTAlKTtcbiAgYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIG1hcmdpbjogMTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtd3JhcDogd3JhcDtcblxuICAmX19wcm9kdWN0LWluZm9ybWF0aW9uIHtcbiAgICBtYXJnaW4tbGVmdDogNTBweDtcbiAgICBmbGV4OiAyO1xuICB9XG5cbiAgJl9fYnJhbmQtaW5mb3JtYXRpb24ge1xuICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xuICAgIGZsZXg6IDI7XG4gIH1cblxuICAmX19jdXQtYW5kLXN0eWxlIHtcbiAgICBtYXJnaW4tbGVmdDogMjAwcHg7XG4gICAgZmxleDogMjtcbiAgfVxuXG4gICZfX2Rpc3BsYXktaW5mbyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuXG4gIGgzIHtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB9XG5cbiAgYnV0dG9uIHtcbiAgICBtYXJnaW4tdG9wOiA4MHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgcGFkZGluZzogMTVweCAzMnB4O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNnM7XG4gICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IGJsYWNrO1xuICB9XG5cbiAgYnV0dG9uOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBzaWx2ZXI7XG4gIH1cbn1cbiIsIi5ib3R0b20tc2VjdGlvbi1zaG93IHtcbiAgbWFyZ2luOiAxMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuLmJvdHRvbS1zZWN0aW9uLXNob3dfX3Byb2R1Y3QtaW5mb3JtYXRpb24ge1xuICBtYXJnaW4tbGVmdDogNTBweDtcbiAgZmxleDogMjtcbn1cbi5ib3R0b20tc2VjdGlvbi1zaG93X19icmFuZC1pbmZvcm1hdGlvbiB7XG4gIG1hcmdpbi1sZWZ0OiA1MHB4O1xuICBmbGV4OiAyO1xufVxuLmJvdHRvbS1zZWN0aW9uLXNob3dfX2N1dC1hbmQtc3R5bGUge1xuICBtYXJnaW4tbGVmdDogMjAwcHg7XG4gIGZsZXg6IDI7XG59XG4uYm90dG9tLXNlY3Rpb24tc2hvd19fZGlzcGxheS1pbmZvIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmJvdHRvbS1zZWN0aW9uLXNob3cgaDMge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuLmJvdHRvbS1zZWN0aW9uLXNob3cgYnV0dG9uIHtcbiAgbWFyZ2luLXRvcDogODBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgb3V0bGluZTogbm9uZTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBwYWRkaW5nOiAxNXB4IDMycHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjZzO1xufVxuLmJvdHRvbS1zZWN0aW9uLXNob3cgYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogc2lsdmVyO1xufVxuXG4uYm90dG9tLXNlY3Rpb24taGlkZSB7XG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KGJsYWNrLCAjZGJkYmRiIDUwJSk7XG4gIGJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xuICBtYXJnaW46IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG4uYm90dG9tLXNlY3Rpb24taGlkZV9fcHJvZHVjdC1pbmZvcm1hdGlvbiB7XG4gIG1hcmdpbi1sZWZ0OiA1MHB4O1xuICBmbGV4OiAyO1xufVxuLmJvdHRvbS1zZWN0aW9uLWhpZGVfX2JyYW5kLWluZm9ybWF0aW9uIHtcbiAgbWFyZ2luLWxlZnQ6IDUwcHg7XG4gIGZsZXg6IDI7XG59XG4uYm90dG9tLXNlY3Rpb24taGlkZV9fY3V0LWFuZC1zdHlsZSB7XG4gIG1hcmdpbi1sZWZ0OiAyMDBweDtcbiAgZmxleDogMjtcbn1cbi5ib3R0b20tc2VjdGlvbi1oaWRlX19kaXNwbGF5LWluZm8ge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uYm90dG9tLXNlY3Rpb24taGlkZSBoMyB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG4uYm90dG9tLXNlY3Rpb24taGlkZSBidXR0b24ge1xuICBtYXJnaW4tdG9wOiA4MHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBvdXRsaW5lOiBub25lO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDE1cHggMzJweDtcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNnM7XG4gIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiBibGFjaztcbn1cbi5ib3R0b20tc2VjdGlvbi1oaWRlIGJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHNpbHZlcjtcbn0iXX0= */"

/***/ }),

/***/ "./src/components/item-bottom-section/item-bottom-section.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/components/item-bottom-section/item-bottom-section.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ItemBottomSectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemBottomSectionComponent", function() { return ItemBottomSectionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ItemBottomSectionComponent = /** @class */ (function () {
    function ItemBottomSectionComponent() {
        var _this = this;
        this.visible = false;
        this.bottomSectionInfo = {
            color: 'Blue',
            closure: 'Zipper, Button',
            fittings: 'cooper, metal',
            decor: 'Logo',
            pockets: 'five pockets',
            modelSize: '32/32',
            modelDimension: 'the size corresponds to the specified',
            brandInformation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            brandInformationShort: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in',
        };
        this.show = function () {
            _this.visible = true;
        };
        this.hide = function () {
            _this.visible = false;
        };
    }
    ItemBottomSectionComponent.prototype.ngOnInit = function () { };
    ItemBottomSectionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-item-bottom-section',
            template: __webpack_require__(/*! raw-loader!./item-bottom-section.component.html */ "./node_modules/raw-loader/index.js!./src/components/item-bottom-section/item-bottom-section.component.html"),
            styles: [__webpack_require__(/*! ./item-bottom-section.component.scss */ "./src/components/item-bottom-section/item-bottom-section.component.scss")]
        })
    ], ItemBottomSectionComponent);
    return ItemBottomSectionComponent;
}());



/***/ }),

/***/ "./src/components/modal/modal.component.scss":
/*!***************************************************!*\
  !*** ./src/components/modal/modal.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".modal-window {\n  height: auto;\n  width: 300px;\n  border-radius: 5px;\n  font-family: sans-serif;\n}\n.modal-window .content {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  box-shadow: 6px 4px 114px -60px rgba(0, 0, 0, 0.75);\n}\n.modal-window .content .header {\n  display: -webkit-box;\n  display: flex;\n  background-color: #1f222b;\n  padding: 20px 0 20px 0;\n  -webkit-box-pack: center;\n          justify-content: center;\n  border-radius: 5px 5px 0 0;\n  color: aliceblue;\n}\n.modal-window .content .header .header-content {\n  width: 80%;\n  display: -webkit-box;\n  display: flex;\n  height: auto;\n}\n.modal-window .content .header .header-content .avatar {\n  width: 40px;\n  height: 40px;\n}\n.modal-window .content .header .header-content .info {\n  margin: 2px 0 0 15px;\n}\n.modal-window .content .header .header-content .info .name {\n  font-weight: bold;\n}\n.modal-window .content .header .header-content .info .email {\n  font-size: 14px;\n}\n.modal-window .content .header .header-content .img {\n  width: 100%;\n  height: 100%;\n}\n.modal-window .content .modal-menu {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  padding: 20px 0 20px 0;\n  background-color: white;\n  border-radius: 0 0 5px 5px;\n}\n.modal-window .content .modal-menu :hover {\n  background-color: #f8f9fa;\n  color: #6b7afc;\n}\n.modal-window .content .modal-menu .settings,\n.modal-window .content .modal-menu .sign-out,\n.modal-window .content .modal-menu .profile {\n  display: -webkit-box;\n  display: flex;\n  padding: 0 0 0 35px;\n  height: 40px;\n}\n.modal-window .content .modal-menu .settings .image,\n.modal-window .content .modal-menu .sign-out .image,\n.modal-window .content .modal-menu .profile .image {\n  width: 15px;\n  height: 15px;\n  margin: 17px 10px 0 0;\n}\n.modal-window .content .modal-menu .settings-text,\n.modal-window .content .modal-menu .sign-out-text,\n.modal-window .content .modal-menu .profile-text {\n  padding-top: 16px;\n}\na {\n  text-decoration: none;\n  color: #1f222b;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy95dXJraXd3L0Rlc2t0b3AvRmFzaGlvblN0b3JlL3NyYy9jb21wb25lbnRzL21vZGFsL21vZGFsLmNvbXBvbmVudC5zY3NzIiwic3JjL2NvbXBvbmVudHMvbW9kYWwvbW9kYWwuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMveXVya2l3dy9EZXNrdG9wL0Zhc2hpb25TdG9yZS9zcmMvc3R5bGVzL2NvbG9ycy9jb2xvcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtBQ0RGO0FER0U7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFHQSxtREFBQTtBQ0RKO0FER0k7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkVoQk07RUZpQk4sc0JBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQkVGYztBRENwQjtBREdNO0VBQ0UsVUFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLFlBQUE7QUNEUjtBREdRO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUNEVjtBRElRO0VBQ0Usb0JBQUE7QUNGVjtBRElVO0VBQ0UsaUJBQUE7QUNGWjtBREtVO0VBQ0UsZUFBQTtBQ0haO0FET1E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQ0xWO0FEVUk7RUFFRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSxzQkFBQTtFQUNBLHVCRXZERTtFRndERiwwQkFBQTtBQ1ROO0FEWU07RUFDRSx5QkUxQ1E7RUYyQ1IsY0UxQ1c7QURnQ25CO0FEYU07OztFQUdFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQ1hSO0FEYVE7OztFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7QUNUVjtBRFlROzs7RUFDRSxpQkFBQTtBQ1JWO0FEZUE7RUFDRSxxQkFBQTtFQUNBLGNFeEZVO0FENEVaIiwiZmlsZSI6InNyYy9jb21wb25lbnRzL21vZGFsL21vZGFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi9zcmMvc3R5bGVzL2NvbG9ycy9jb2xvcnMuc2Nzcyc7XG5cbi5tb2RhbC13aW5kb3cge1xuICBoZWlnaHQ6IGF1dG87XG4gIHdpZHRoOiAzMDBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcblxuICAuY29udGVudCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogNnB4IDRweCAxMTRweCAtNjBweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xuICAgIC1tb3otYm94LXNoYWRvdzogNnB4IDRweCAxMTRweCAtNjBweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xuICAgIGJveC1zaGFkb3c6IDZweCA0cHggMTE0cHggLTYwcHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcblxuICAgIC5oZWFkZXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRncmV5LWJsdWU7XG4gICAgICBwYWRkaW5nOiAyMHB4IDAgMjBweCAwO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBib3JkZXItcmFkaXVzOiA1cHggNXB4IDAgMDtcbiAgICAgIGNvbG9yOiAkbW9kYWxfaGVhZGVyLWNvbG9yO1xuXG4gICAgICAuaGVhZGVyLWNvbnRlbnQge1xuICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBoZWlnaHQ6IGF1dG87XG5cbiAgICAgICAgLmF2YXRhciB7XG4gICAgICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmluZm8ge1xuICAgICAgICAgIG1hcmdpbjogMnB4IDAgMCAxNXB4O1xuXG4gICAgICAgICAgLm5hbWUge1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmVtYWlsIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuaW1nIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAubW9kYWwtbWVudSB7XG4gICAgICAvLyB3aWR0aDogODAlO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBwYWRkaW5nOiAyMHB4IDAgMjBweCAwO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlO1xuICAgICAgYm9yZGVyLXJhZGl1czogMCAwIDVweCA1cHg7XG5cbiAgICAgIC8vIG1hcmdpbjogYXV0bztcbiAgICAgIDpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRtb2RhbF9ob3Zlci1iYztcbiAgICAgICAgY29sb3I6ICRtb2RhbF9ob3Zlci1jb2xvcjtcbiAgICAgIH1cblxuICAgICAgLnNldHRpbmdzLFxuICAgICAgLnNpZ24tb3V0LFxuICAgICAgLnByb2ZpbGUge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBwYWRkaW5nOiAwIDAgMCAzNXB4O1xuICAgICAgICBoZWlnaHQ6IDQwcHg7XG5cbiAgICAgICAgLmltYWdlIHtcbiAgICAgICAgICB3aWR0aDogMTVweDtcbiAgICAgICAgICBoZWlnaHQ6IDE1cHg7XG4gICAgICAgICAgbWFyZ2luOiAxN3B4IDEwcHggMCAwO1xuICAgICAgICB9XG5cbiAgICAgICAgJi10ZXh0IHtcbiAgICAgICAgICBwYWRkaW5nLXRvcDogMTZweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5hIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogJGdyZXktYmx1ZTtcbn1cbiIsIi5tb2RhbC13aW5kb3cge1xuICBoZWlnaHQ6IGF1dG87XG4gIHdpZHRoOiAzMDBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbn1cbi5tb2RhbC13aW5kb3cgLmNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDZweCA0cHggMTE0cHggLTYwcHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcbiAgLW1vei1ib3gtc2hhZG93OiA2cHggNHB4IDExNHB4IC02MHB4IHJnYmEoMCwgMCwgMCwgMC43NSk7XG4gIGJveC1zaGFkb3c6IDZweCA0cHggMTE0cHggLTYwcHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcbn1cbi5tb2RhbC13aW5kb3cgLmNvbnRlbnQgLmhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxZjIyMmI7XG4gIHBhZGRpbmc6IDIwcHggMCAyMHB4IDA7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA1cHggNXB4IDAgMDtcbiAgY29sb3I6IGFsaWNlYmx1ZTtcbn1cbi5tb2RhbC13aW5kb3cgLmNvbnRlbnQgLmhlYWRlciAuaGVhZGVyLWNvbnRlbnQge1xuICB3aWR0aDogODAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IGF1dG87XG59XG4ubW9kYWwtd2luZG93IC5jb250ZW50IC5oZWFkZXIgLmhlYWRlci1jb250ZW50IC5hdmF0YXIge1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xufVxuLm1vZGFsLXdpbmRvdyAuY29udGVudCAuaGVhZGVyIC5oZWFkZXItY29udGVudCAuaW5mbyB7XG4gIG1hcmdpbjogMnB4IDAgMCAxNXB4O1xufVxuLm1vZGFsLXdpbmRvdyAuY29udGVudCAuaGVhZGVyIC5oZWFkZXItY29udGVudCAuaW5mbyAubmFtZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLm1vZGFsLXdpbmRvdyAuY29udGVudCAuaGVhZGVyIC5oZWFkZXItY29udGVudCAuaW5mbyAuZW1haWwge1xuICBmb250LXNpemU6IDE0cHg7XG59XG4ubW9kYWwtd2luZG93IC5jb250ZW50IC5oZWFkZXIgLmhlYWRlci1jb250ZW50IC5pbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLm1vZGFsLXdpbmRvdyAuY29udGVudCAubW9kYWwtbWVudSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBhZGRpbmc6IDIwcHggMCAyMHB4IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAwIDAgNXB4IDVweDtcbn1cbi5tb2RhbC13aW5kb3cgLmNvbnRlbnQgLm1vZGFsLW1lbnUgOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtcbiAgY29sb3I6ICM2YjdhZmM7XG59XG4ubW9kYWwtd2luZG93IC5jb250ZW50IC5tb2RhbC1tZW51IC5zZXR0aW5ncyxcbi5tb2RhbC13aW5kb3cgLmNvbnRlbnQgLm1vZGFsLW1lbnUgLnNpZ24tb3V0LFxuLm1vZGFsLXdpbmRvdyAuY29udGVudCAubW9kYWwtbWVudSAucHJvZmlsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmc6IDAgMCAwIDM1cHg7XG4gIGhlaWdodDogNDBweDtcbn1cbi5tb2RhbC13aW5kb3cgLmNvbnRlbnQgLm1vZGFsLW1lbnUgLnNldHRpbmdzIC5pbWFnZSxcbi5tb2RhbC13aW5kb3cgLmNvbnRlbnQgLm1vZGFsLW1lbnUgLnNpZ24tb3V0IC5pbWFnZSxcbi5tb2RhbC13aW5kb3cgLmNvbnRlbnQgLm1vZGFsLW1lbnUgLnByb2ZpbGUgLmltYWdlIHtcbiAgd2lkdGg6IDE1cHg7XG4gIGhlaWdodDogMTVweDtcbiAgbWFyZ2luOiAxN3B4IDEwcHggMCAwO1xufVxuLm1vZGFsLXdpbmRvdyAuY29udGVudCAubW9kYWwtbWVudSAuc2V0dGluZ3MtdGV4dCxcbi5tb2RhbC13aW5kb3cgLmNvbnRlbnQgLm1vZGFsLW1lbnUgLnNpZ24tb3V0LXRleHQsXG4ubW9kYWwtd2luZG93IC5jb250ZW50IC5tb2RhbC1tZW51IC5wcm9maWxlLXRleHQge1xuICBwYWRkaW5nLXRvcDogMTZweDtcbn1cblxuYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICMxZjIyMmI7XG59IiwiLy8gbWFpbiBjb2xvcnNcbiRncmV5LWJsdWU6IHJnYigzMSwgMzQsIDQzKTtcbiR3aGl0ZTogd2hpdGU7XG4kZ3JleTogZ3JleTtcbiRhbGljZWJsdWU6IGFsaWNlYmx1ZTtcblxuLy8gYWNjb3VudC1zZXR0aW5nc1xuXG4kYWNjb3VudC1zZXR0aW5nc19jb250ZW50OiAjNDg1MDU3O1xuJGFjY291bnQtc2V0dGluZ3NfcmVkLWJvcmRlcjogI2JkMzkzOTtcbiRhY2NvdW50LXNldHRpbmdzX2VtYWlsLXN2ZzogI2U5ZWNlZjtcbiRhY2NvdW50LXNldHRpbmdzX3JlZC1jb2xvcjogI2FmMzQzNDtcbiRhY2NvdW50LXNldHRpbmdzX2J1dHRvbi1iYzogIzMxNmJmZjtcbiRhY2NvdW50LXNldHRpbmdzX2J1dHRvbi1jb2xvcjogI2ZmZmY7XG4kYWNjb3VudC1zZXR0aW5nc19ib3JkZXI6IDFweCBzb2xpZCAjYmRiZGJkO1xuXG4vLyBtb2RhbFxuXG4kbW9kYWxfaGVhZGVyLWJjOiAjNDk0YWZkO1xuJG1vZGFsX2hlYWRlci1jb2xvcjphbGljZWJsdWU7XG4kbW9kYWxfaG92ZXItYmM6I2Y4ZjlmYTtcbiRtb2RhbF9ob3Zlci1jb2xvcjojNmI3YWZjO1xuXG4vLyBwcm9kdWN0LWl0ZW1cbiRwcm9kdWN0LWl0ZW1fYm9yZGVyOjFweCBzb2xpZCByZ2JhKDMxLCAzNCwgNDMsIDAuMik7XG4kcHJvZHVjdC1pdGVtLWhvdmVyOiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG4kcHJvZHVjdC1pdGVtX2J1dHRvbi1iYzojZjQ1MTFlO1xuXG4vLyBzZWFyY2gtYm94XG4kc2VhcmNoLWJveC1iYzogI2Y1ZjVmNjtcblxuLy8gc2lkZWJhclxuJHNpZGViYXJfbGlzdF9pdGVtLWhvdmVyLWJvcmRlcjoycHggc29saWQgcmdiKDMzLCA3NiwgMjA3KTtcbiRzaWRlYmFyX2xpc3RfaXRlbS1ob3Zlci1jb2xvcjpyZ2IoNjMsIDY4LCA4NCk7XG5cbi8vIGF1dGhcbiRhdXRoX2J1dHRvbl9jb2xvcjogIzAwN2JmZjtcbiRhdXRoX2NoZWNrYm94X2NvbG9yOiAjNDk1MDU3O1xuJGF1dGhfY2hlY2tib3hfYm9yZGVyOjFweCBzb2xpZCAjY2VkNGRhO1xuJGF1dGhfY2hlY2tib3hfYm9yZGVyLWJlZm9yZTogI2FkYjViZCBzb2xpZCAxcHg7XG5cbi8vIGJ1dHRvbnNcbkBtaXhpbiBkYXJrIHtcbiAgY29sb3I6ICMzNDNhNDA7XG4gIGJvcmRlci1jb2xvcjogIzM0M2E0MDtcblxuICAmOmhvdmVyIHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQzYTQwO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuXG5cbiAgJjpmb2N1cyB7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBib3gtc2hhZG93OiAwIDAgMCAwLjJyZW0gcmdiYSg1MiwgNTgsIDY0LCAuNSlcbiAgfVxufVxuXG5AbWl4aW4gc3VjY2VzcyB7XG4gIGNvbG9yOiAjMjhhNzQ1O1xuICBib3JkZXItY29sb3I6ICMyOGE3NDU7XG5cbiAgJjpob3ZlciB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyOGE3NDU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG5cbiAgJjpmb2N1cyB7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgMC4ycmVtIHJnYmEoNDAsIDE2NywgNjksIC41KTtcbiAgICBvdXRsaW5lOiBub25lXG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/components/modal/modal.component.ts":
/*!*************************************************!*\
  !*** ./src/components/modal/modal.component.ts ***!
  \*************************************************/
/*! exports provided: ModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return ModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ModalComponent = /** @class */ (function () {
    function ModalComponent() {
    }
    ModalComponent.prototype.ngOnInit = function () {
    };
    ModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-modal',
            template: __webpack_require__(/*! raw-loader!./modal.component.html */ "./node_modules/raw-loader/index.js!./src/components/modal/modal.component.html"),
            styles: [__webpack_require__(/*! ./modal.component.scss */ "./src/components/modal/modal.component.scss")]
        })
    ], ModalComponent);
    return ModalComponent;
}());



/***/ }),

/***/ "./src/components/pagination/pagination.component.scss":
/*!*************************************************************!*\
  !*** ./src/components/pagination/pagination.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pagination {\n  padding: 40px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.pagination__numbers_wrap {\n  display: -webkit-box;\n  display: flex;\n  margin: 0 20px 0 20px;\n}\n.pagination__numbers {\n  display: -webkit-box;\n  display: flex;\n  color: #2a2a3f;\n}\n.pagination__numbers__item {\n  width: 20px;\n  text-align: center;\n  margin: 0 10px 0 10px;\n}\n.pagination__numbers__item:hover {\n  color: white;\n  background-color: #2a2a3f;\n  border-radius: 2px;\n  cursor: pointer;\n}\n.pagination__button {\n  width: 80px;\n  height: 35px;\n  font-size: 14px;\n  color: #2a2a3f;\n  border: 1px solid #d4d5d9;\n  border-radius: 2px;\n  cursor: pointer;\n}\n.pagination .active {\n  color: white;\n  background-color: #2a2a3f;\n  border-radius: 2px;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy95dXJraXd3L0Rlc2t0b3AvRmFzaGlvblN0b3JlL3NyYy9jb21wb25lbnRzL3BhZ2luYXRpb24vcGFnaW5hdGlvbi5jb21wb25lbnQuc2NzcyIsInNyYy9jb21wb25lbnRzL3BhZ2luYXRpb24vcGFnaW5hdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ0NGO0FEQ0U7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxxQkFBQTtBQ0NKO0FERUU7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxjQUFBO0FDQUo7QURFSTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0FDQU47QURFTTtFQUNFLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ0FSO0FES0U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNISjtBRE1FO0VBQ0UsWUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDSkoiLCJmaWxlIjoic3JjL2NvbXBvbmVudHMvcGFnaW5hdGlvbi9wYWdpbmF0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZ2luYXRpb24ge1xuICBwYWRkaW5nOiA0MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAmX19udW1iZXJzX3dyYXAge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbWFyZ2luOiAwIDIwcHggMCAyMHB4O1xuICB9XG5cbiAgJl9fbnVtYmVycyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBjb2xvcjogIzJhMmEzZjtcblxuICAgICZfX2l0ZW0ge1xuICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBtYXJnaW46IDAgMTBweCAwIDEwcHg7XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyYTJhM2Y7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gICZfX2J1dHRvbiB7XG4gICAgd2lkdGg6IDgwcHg7XG4gICAgaGVpZ2h0OiAzNXB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBjb2xvcjogIzJhMmEzZjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZDRkNWQ5O1xuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cblxuICAuYWN0aXZlIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJhMmEzZjtcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG59XG4iLCIucGFnaW5hdGlvbiB7XG4gIHBhZGRpbmc6IDQwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnBhZ2luYXRpb25fX251bWJlcnNfd3JhcCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbjogMCAyMHB4IDAgMjBweDtcbn1cbi5wYWdpbmF0aW9uX19udW1iZXJzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgY29sb3I6ICMyYTJhM2Y7XG59XG4ucGFnaW5hdGlvbl9fbnVtYmVyc19faXRlbSB7XG4gIHdpZHRoOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMCAxMHB4IDAgMTBweDtcbn1cbi5wYWdpbmF0aW9uX19udW1iZXJzX19pdGVtOmhvdmVyIHtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmEyYTNmO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5wYWdpbmF0aW9uX19idXR0b24ge1xuICB3aWR0aDogODBweDtcbiAgaGVpZ2h0OiAzNXB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjMmEyYTNmO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZDRkNWQ5O1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5wYWdpbmF0aW9uIC5hY3RpdmUge1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyYTJhM2Y7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufSJdfQ== */"

/***/ }),

/***/ "./src/components/pagination/pagination.component.ts":
/*!***********************************************************!*\
  !*** ./src/components/pagination/pagination.component.ts ***!
  \***********************************************************/
/*! exports provided: PaginationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationComponent", function() { return PaginationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PaginationComponent = /** @class */ (function () {
    function PaginationComponent() {
        this.page = 1;
        this.pageChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    PaginationComponent.prototype.onNext = function () {
        if (!this.canNext)
            return;
        this.page++;
        this.pageChanged.emit({
            min: this.min,
            max: this.max,
            page: this.page
        });
    };
    PaginationComponent.prototype.onPrev = function () {
        if (!this.canPrev)
            return;
        this.page--;
        this.pageChanged.emit({
            min: this.min,
            max: this.max,
            page: this.page
        });
    };
    Object.defineProperty(PaginationComponent.prototype, "min", {
        get: function () {
            return (this.page - 1) * this.size + 1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PaginationComponent.prototype, "max", {
        get: function () {
            return this.page * this.size;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PaginationComponent.prototype, "canPrev", {
        get: function () {
            return this.min > 1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PaginationComponent.prototype, "canNext", {
        get: function () {
            return this.max < this.total;
        },
        enumerable: true,
        configurable: true
    });
    PaginationComponent.prototype.select = function (item) {
        this.selected = item;
    };
    PaginationComponent.prototype.isActive = function (item) {
        return this.selected === item;
    };
    PaginationComponent.prototype.ngOnInit = function () {
        this.numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], PaginationComponent.prototype, "size", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], PaginationComponent.prototype, "total", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], PaginationComponent.prototype, "pageChanged", void 0);
    PaginationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pagination',
            template: __webpack_require__(/*! raw-loader!./pagination.component.html */ "./node_modules/raw-loader/index.js!./src/components/pagination/pagination.component.html"),
            styles: [__webpack_require__(/*! ./pagination.component.scss */ "./src/components/pagination/pagination.component.scss")]
        })
    ], PaginationComponent);
    return PaginationComponent;
}());



/***/ }),

/***/ "./src/components/product-item/product-item.component.scss":
/*!*****************************************************************!*\
  !*** ./src/components/product-item/product-item.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".item {\n  width: 250px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  font-size: 13px;\n  padding: 5px;\n  margin-right: 5px;\n  border: 1px solid rgba(31, 34, 43, 0.2);\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n}\n.item_hover {\n  display: none;\n}\n.item:hover {\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);\n}\n.item:hover .item_unhover {\n  display: none;\n}\n.item:hover .item_hover {\n  display: block;\n}\n.item__img {\n  height: 250px;\n}\n.item__price {\n  padding: 0px 10px;\n}\n.item__price s {\n  color: grey;\n}\n.item__price small {\n  color: #f4511e;\n}\n.item_information {\n  padding: 10px;\n}\n.item_information__name {\n  font-weight: 900;\n  padding-top: 10px;\n}\n.item_information__button {\n  background-color: #f4511e;\n  border: none;\n  color: white;\n  padding: 4px 16px;\n  text-align: center;\n  font-size: 12px;\n  margin: 2px 0px;\n  opacity: 0.6;\n  -webkit-transition: 0.3s;\n  transition: 0.3s;\n  display: inline-block;\n  text-decoration: none;\n  cursor: pointer;\n  border-radius: 5px;\n}\n.item_information__button:hover {\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy95dXJraXd3L0Rlc2t0b3AvRmFzaGlvblN0b3JlL3NyYy9jb21wb25lbnRzL3Byb2R1Y3QtaXRlbS9wcm9kdWN0LWl0ZW0uY29tcG9uZW50LnNjc3MiLCIvVXNlcnMveXVya2l3dy9EZXNrdG9wL0Zhc2hpb25TdG9yZS9zcmMvc3R5bGVzL2NvbG9ycy9jb2xvcnMuc2NzcyIsInNyYy9jb21wb25lbnRzL3Byb2R1Y3QtaXRlbS9wcm9kdWN0LWl0ZW0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxZQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLHVDQ2VtQjtFRGRuQix3QkFBQTtFQUFBLGdCQUFBO0FFREY7QUZHRTtFQUNFLGFBQUE7QUVESjtBRklFO0VBQ0UsdUNDUWlCO0FDVnJCO0FGSUk7RUFDRSxhQUFBO0FFRk47QUZLSTtFQUNFLGNBQUE7QUVITjtBRlFFO0VBQ0UsYUFBQTtBRU5KO0FGV0U7RUFDRSxpQkFBQTtBRVRKO0FGV0k7RUFDRSxXQ3BDQztBQzJCUDtBRllJO0VBQ0UsY0NqQmtCO0FDT3hCO0FGY0U7RUFDRSxhQUFBO0FFWko7QUZnQkk7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0FFZE47QUZpQkk7RUFDRSx5QkNoQ2tCO0VEaUNsQixZQUFBO0VBQ0EsWUMxREU7RUQyREYsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLHdCQUFBO0VBQUEsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FFZk47QUZpQk07RUFDRSxVQUFBO0FFZlIiLCJmaWxlIjoic3JjL2NvbXBvbmVudHMvcHJvZHVjdC1pdGVtL3Byb2R1Y3QtaXRlbS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4vc3JjL3N0eWxlcy9jb2xvcnMvY29sb3JzLnNjc3MnO1xuXG4uaXRlbSB7XG4gIHdpZHRoOiAyNTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBwYWRkaW5nOiA1cHg7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xuICBib3JkZXI6ICRwcm9kdWN0LWl0ZW1fYm9yZGVyO1xuICB0cmFuc2l0aW9uOiAwLjVzO1xuXG4gICZfaG92ZXIge1xuICAgIGRpc3BsYXk6IG5vbmVcbiAgfVxuXG4gICY6aG92ZXIge1xuICAgIGJveC1zaGFkb3c6ICRwcm9kdWN0LWl0ZW0taG92ZXI7XG5cbiAgICAuaXRlbV91bmhvdmVyIHtcbiAgICAgIGRpc3BsYXk6IG5vbmVcbiAgICB9XG5cbiAgICAuaXRlbV9ob3ZlciB7XG4gICAgICBkaXNwbGF5OiBibG9ja1xuICAgIH1cblxuICB9XG5cbiAgJl9faW1nIHtcbiAgICBoZWlnaHQ6IDI1MHB4O1xuXG5cbiAgfVxuXG4gICZfX3ByaWNlIHtcbiAgICBwYWRkaW5nOiAwcHggMTBweDtcblxuICAgIHMge1xuICAgICAgY29sb3I6ICRncmV5O1xuICAgIH1cblxuICAgIHNtYWxsIHtcbiAgICAgIGNvbG9yOiAkcHJvZHVjdC1pdGVtX2J1dHRvbi1iYztcbiAgICB9XG4gIH1cblxuICAmX2luZm9ybWF0aW9uIHtcbiAgICBwYWRkaW5nOiAxMHB4O1xuXG5cblxuICAgICZfX25hbWUge1xuICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgIH1cblxuICAgICZfX2J1dHRvbiB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJvZHVjdC1pdGVtX2J1dHRvbi1iYztcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIGNvbG9yOiAkd2hpdGU7XG4gICAgICBwYWRkaW5nOiA0cHggMTZweDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIG1hcmdpbjogMnB4IDBweDtcbiAgICAgIG9wYWNpdHk6IDAuNjtcbiAgICAgIHRyYW5zaXRpb246IDAuM3M7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICBvcGFjaXR5OiAxXG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCIvLyBtYWluIGNvbG9yc1xuJGdyZXktYmx1ZTogcmdiKDMxLCAzNCwgNDMpO1xuJHdoaXRlOiB3aGl0ZTtcbiRncmV5OiBncmV5O1xuJGFsaWNlYmx1ZTogYWxpY2VibHVlO1xuXG4vLyBhY2NvdW50LXNldHRpbmdzXG5cbiRhY2NvdW50LXNldHRpbmdzX2NvbnRlbnQ6ICM0ODUwNTc7XG4kYWNjb3VudC1zZXR0aW5nc19yZWQtYm9yZGVyOiAjYmQzOTM5O1xuJGFjY291bnQtc2V0dGluZ3NfZW1haWwtc3ZnOiAjZTllY2VmO1xuJGFjY291bnQtc2V0dGluZ3NfcmVkLWNvbG9yOiAjYWYzNDM0O1xuJGFjY291bnQtc2V0dGluZ3NfYnV0dG9uLWJjOiAjMzE2YmZmO1xuJGFjY291bnQtc2V0dGluZ3NfYnV0dG9uLWNvbG9yOiAjZmZmZjtcbiRhY2NvdW50LXNldHRpbmdzX2JvcmRlcjogMXB4IHNvbGlkICNiZGJkYmQ7XG5cbi8vIG1vZGFsXG5cbiRtb2RhbF9oZWFkZXItYmM6ICM0OTRhZmQ7XG4kbW9kYWxfaGVhZGVyLWNvbG9yOmFsaWNlYmx1ZTtcbiRtb2RhbF9ob3Zlci1iYzojZjhmOWZhO1xuJG1vZGFsX2hvdmVyLWNvbG9yOiM2YjdhZmM7XG5cbi8vIHByb2R1Y3QtaXRlbVxuJHByb2R1Y3QtaXRlbV9ib3JkZXI6MXB4IHNvbGlkIHJnYmEoMzEsIDM0LCA0MywgMC4yKTtcbiRwcm9kdWN0LWl0ZW0taG92ZXI6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcbiRwcm9kdWN0LWl0ZW1fYnV0dG9uLWJjOiNmNDUxMWU7XG5cbi8vIHNlYXJjaC1ib3hcbiRzZWFyY2gtYm94LWJjOiAjZjVmNWY2O1xuXG4vLyBzaWRlYmFyXG4kc2lkZWJhcl9saXN0X2l0ZW0taG92ZXItYm9yZGVyOjJweCBzb2xpZCByZ2IoMzMsIDc2LCAyMDcpO1xuJHNpZGViYXJfbGlzdF9pdGVtLWhvdmVyLWNvbG9yOnJnYig2MywgNjgsIDg0KTtcblxuLy8gYXV0aFxuJGF1dGhfYnV0dG9uX2NvbG9yOiAjMDA3YmZmO1xuJGF1dGhfY2hlY2tib3hfY29sb3I6ICM0OTUwNTc7XG4kYXV0aF9jaGVja2JveF9ib3JkZXI6MXB4IHNvbGlkICNjZWQ0ZGE7XG4kYXV0aF9jaGVja2JveF9ib3JkZXItYmVmb3JlOiAjYWRiNWJkIHNvbGlkIDFweDtcblxuLy8gYnV0dG9uc1xuQG1peGluIGRhcmsge1xuICBjb2xvcjogIzM0M2E0MDtcbiAgYm9yZGVyLWNvbG9yOiAjMzQzYTQwO1xuXG4gICY6aG92ZXIge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzNDNhNDA7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG5cblxuICAmOmZvY3VzIHtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJveC1zaGFkb3c6IDAgMCAwIDAuMnJlbSByZ2JhKDUyLCA1OCwgNjQsIC41KVxuICB9XG59XG5cbkBtaXhpbiBzdWNjZXNzIHtcbiAgY29sb3I6ICMyOGE3NDU7XG4gIGJvcmRlci1jb2xvcjogIzI4YTc0NTtcblxuICAmOmhvdmVyIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI4YTc0NTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cblxuICAmOmZvY3VzIHtcbiAgICBib3gtc2hhZG93OiAwIDAgMCAwLjJyZW0gcmdiYSg0MCwgMTY3LCA2OSwgLjUpO1xuICAgIG91dGxpbmU6IG5vbmVcbiAgfVxufVxuIiwiLml0ZW0ge1xuICB3aWR0aDogMjUwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgcGFkZGluZzogNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgzMSwgMzQsIDQzLCAwLjIpO1xuICB0cmFuc2l0aW9uOiAwLjVzO1xufVxuLml0ZW1faG92ZXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuLml0ZW06aG92ZXIge1xuICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG4uaXRlbTpob3ZlciAuaXRlbV91bmhvdmVyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5pdGVtOmhvdmVyIC5pdGVtX2hvdmVyIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4uaXRlbV9faW1nIHtcbiAgaGVpZ2h0OiAyNTBweDtcbn1cbi5pdGVtX19wcmljZSB7XG4gIHBhZGRpbmc6IDBweCAxMHB4O1xufVxuLml0ZW1fX3ByaWNlIHMge1xuICBjb2xvcjogZ3JleTtcbn1cbi5pdGVtX19wcmljZSBzbWFsbCB7XG4gIGNvbG9yOiAjZjQ1MTFlO1xufVxuLml0ZW1faW5mb3JtYXRpb24ge1xuICBwYWRkaW5nOiAxMHB4O1xufVxuLml0ZW1faW5mb3JtYXRpb25fX25hbWUge1xuICBmb250LXdlaWdodDogOTAwO1xuICBwYWRkaW5nLXRvcDogMTBweDtcbn1cbi5pdGVtX2luZm9ybWF0aW9uX19idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjQ1MTFlO1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogNHB4IDE2cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBtYXJnaW46IDJweCAwcHg7XG4gIG9wYWNpdHk6IDAuNjtcbiAgdHJhbnNpdGlvbjogMC4zcztcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuLml0ZW1faW5mb3JtYXRpb25fX2J1dHRvbjpob3ZlciB7XG4gIG9wYWNpdHk6IDE7XG59Il19 */"

/***/ }),

/***/ "./src/components/product-item/product-item.component.ts":
/*!***************************************************************!*\
  !*** ./src/components/product-item/product-item.component.ts ***!
  \***************************************************************/
/*! exports provided: ProductItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductItemComponent", function() { return ProductItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProductItemComponent = /** @class */ (function () {
    function ProductItemComponent() {
    }
    ProductItemComponent.prototype.ngOnInit = function () { };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], ProductItemComponent.prototype, "item", void 0);
    ProductItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product-item',
            template: __webpack_require__(/*! raw-loader!./product-item.component.html */ "./node_modules/raw-loader/index.js!./src/components/product-item/product-item.component.html"),
            styles: [__webpack_require__(/*! ./product-item.component.scss */ "./src/components/product-item/product-item.component.scss")]
        })
    ], ProductItemComponent);
    return ProductItemComponent;
}());



/***/ }),

/***/ "./src/components/search-box/search-box.component.scss":
/*!*************************************************************!*\
  !*** ./src/components/search-box/search-box.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header__search-box .search-box__btn {\n  position: absolute;\n  padding: 0;\n  margin: 0;\n  outline: none;\n  border: none;\n  border-top-left-radius: 5px;\n  border-bottom-left-radius: 5px;\n  background: url('search-icon.png') no-repeat;\n  background-size: 50% 50%;\n  background-position: center;\n  background-color: #f5f5f6;\n  cursor: pointer;\n  height: 52px;\n  width: 52px;\n  -webkit-transition-duration: 1s;\n          transition-duration: 1s;\n}\n.header__search-box .search-box__btn:hover {\n  background-color: grey;\n}\n.header__search-box .search-box__btn:active {\n  -webkit-transform: translateY(20px);\n          transform: translateY(20px);\n}\n.header__search-box input {\n  display: inline-block;\n  box-sizing: border-box;\n  border: none;\n  outline: none;\n  border-radius: 5px;\n  padding: 15px 10px 15px 70px;\n  background-size: auto 90%;\n  background-color: #f5f5f6;\n  font-size: 15px;\n}\n.header__search-box input[type=text] {\n  width: 500px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy95dXJraXd3L0Rlc2t0b3AvRmFzaGlvblN0b3JlL3NyYy9jb21wb25lbnRzL3NlYXJjaC1ib3gvc2VhcmNoLWJveC5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy95dXJraXd3L0Rlc2t0b3AvRmFzaGlvblN0b3JlL3NyYy9zdHlsZXMvY29sb3JzL2NvbG9ycy5zY3NzIiwic3JjL2NvbXBvbmVudHMvc2VhcmNoLWJveC9zZWFyY2gtYm94LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtFO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7RUFDQSw4QkFBQTtFQUNBLDRDQUFBO0VBQ0Esd0JBQUE7RUFDQSwyQkFBQTtFQUNBLHlCQ2FZO0VEWlosZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsK0JBQUE7VUFBQSx1QkFBQTtBRUpKO0FGT0U7RUFDRSxzQkNyQkc7QUNnQlA7QUZRRTtFQUNFLG1DQUFBO1VBQUEsMkJBQUE7QUVOSjtBRlNFO0VBQ0UscUJBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSw0QkFBQTtFQUNBLHlCQUFBO0VBQ0EseUJDVlk7RURXWixlQUFBO0FFUEo7QUZVRTtFQUNFLFlBQUE7QUVSSiIsImZpbGUiOiJzcmMvY29tcG9uZW50cy9zZWFyY2gtYm94L3NlYXJjaC1ib3guY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuL3NyYy9zdHlsZXMvY29sb3JzL2NvbG9ycy5zY3NzJztcblxuLmhlYWRlcl9fc2VhcmNoLWJveCB7XG5cblxuICAuc2VhcmNoLWJveF9fYnRuIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDA7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoc3JjXFxhc3NldHNcXGhlYWRlclxcc2VhcmNoLWljb24ucG5nKSBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiA1MCUgNTAlO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2VhcmNoLWJveC1iYztcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgaGVpZ2h0OiA1MnB4O1xuICAgIHdpZHRoOiA1MnB4O1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDFzO1xuICB9XG5cbiAgLnNlYXJjaC1ib3hfX2J0bjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGdyZXk7XG4gIH1cblxuICAuc2VhcmNoLWJveF9fYnRuOmFjdGl2ZSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwcHgpO1xuICB9XG5cbiAgaW5wdXQge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBwYWRkaW5nOiAxNXB4IDEwcHggMTVweCA3MHB4O1xuICAgIGJhY2tncm91bmQtc2l6ZTogYXV0byA5MCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHNlYXJjaC1ib3gtYmM7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICB9XG5cbiAgaW5wdXRbdHlwZT1cInRleHRcIl0ge1xuICAgIHdpZHRoOiA1MDBweDtcbiAgfVxuXG59XG4iLCIvLyBtYWluIGNvbG9yc1xuJGdyZXktYmx1ZTogcmdiKDMxLCAzNCwgNDMpO1xuJHdoaXRlOiB3aGl0ZTtcbiRncmV5OiBncmV5O1xuJGFsaWNlYmx1ZTogYWxpY2VibHVlO1xuXG4vLyBhY2NvdW50LXNldHRpbmdzXG5cbiRhY2NvdW50LXNldHRpbmdzX2NvbnRlbnQ6ICM0ODUwNTc7XG4kYWNjb3VudC1zZXR0aW5nc19yZWQtYm9yZGVyOiAjYmQzOTM5O1xuJGFjY291bnQtc2V0dGluZ3NfZW1haWwtc3ZnOiAjZTllY2VmO1xuJGFjY291bnQtc2V0dGluZ3NfcmVkLWNvbG9yOiAjYWYzNDM0O1xuJGFjY291bnQtc2V0dGluZ3NfYnV0dG9uLWJjOiAjMzE2YmZmO1xuJGFjY291bnQtc2V0dGluZ3NfYnV0dG9uLWNvbG9yOiAjZmZmZjtcbiRhY2NvdW50LXNldHRpbmdzX2JvcmRlcjogMXB4IHNvbGlkICNiZGJkYmQ7XG5cbi8vIG1vZGFsXG5cbiRtb2RhbF9oZWFkZXItYmM6ICM0OTRhZmQ7XG4kbW9kYWxfaGVhZGVyLWNvbG9yOmFsaWNlYmx1ZTtcbiRtb2RhbF9ob3Zlci1iYzojZjhmOWZhO1xuJG1vZGFsX2hvdmVyLWNvbG9yOiM2YjdhZmM7XG5cbi8vIHByb2R1Y3QtaXRlbVxuJHByb2R1Y3QtaXRlbV9ib3JkZXI6MXB4IHNvbGlkIHJnYmEoMzEsIDM0LCA0MywgMC4yKTtcbiRwcm9kdWN0LWl0ZW0taG92ZXI6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcbiRwcm9kdWN0LWl0ZW1fYnV0dG9uLWJjOiNmNDUxMWU7XG5cbi8vIHNlYXJjaC1ib3hcbiRzZWFyY2gtYm94LWJjOiAjZjVmNWY2O1xuXG4vLyBzaWRlYmFyXG4kc2lkZWJhcl9saXN0X2l0ZW0taG92ZXItYm9yZGVyOjJweCBzb2xpZCByZ2IoMzMsIDc2LCAyMDcpO1xuJHNpZGViYXJfbGlzdF9pdGVtLWhvdmVyLWNvbG9yOnJnYig2MywgNjgsIDg0KTtcblxuLy8gYXV0aFxuJGF1dGhfYnV0dG9uX2NvbG9yOiAjMDA3YmZmO1xuJGF1dGhfY2hlY2tib3hfY29sb3I6ICM0OTUwNTc7XG4kYXV0aF9jaGVja2JveF9ib3JkZXI6MXB4IHNvbGlkICNjZWQ0ZGE7XG4kYXV0aF9jaGVja2JveF9ib3JkZXItYmVmb3JlOiAjYWRiNWJkIHNvbGlkIDFweDtcblxuLy8gYnV0dG9uc1xuQG1peGluIGRhcmsge1xuICBjb2xvcjogIzM0M2E0MDtcbiAgYm9yZGVyLWNvbG9yOiAjMzQzYTQwO1xuXG4gICY6aG92ZXIge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzNDNhNDA7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG5cblxuICAmOmZvY3VzIHtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJveC1zaGFkb3c6IDAgMCAwIDAuMnJlbSByZ2JhKDUyLCA1OCwgNjQsIC41KVxuICB9XG59XG5cbkBtaXhpbiBzdWNjZXNzIHtcbiAgY29sb3I6ICMyOGE3NDU7XG4gIGJvcmRlci1jb2xvcjogIzI4YTc0NTtcblxuICAmOmhvdmVyIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI4YTc0NTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cblxuICAmOmZvY3VzIHtcbiAgICBib3gtc2hhZG93OiAwIDAgMCAwLjJyZW0gcmdiYSg0MCwgMTY3LCA2OSwgLjUpO1xuICAgIG91dGxpbmU6IG5vbmVcbiAgfVxufVxuIiwiLmhlYWRlcl9fc2VhcmNoLWJveCAuc2VhcmNoLWJveF9fYnRuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1cHg7XG4gIGJhY2tncm91bmQ6IHVybChzcmNcXGFzc2V0c1xcaGVhZGVyXFxzZWFyY2gtaWNvbi5wbmcpIG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiA1MCUgNTAlO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgaGVpZ2h0OiA1MnB4O1xuICB3aWR0aDogNTJweDtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMXM7XG59XG4uaGVhZGVyX19zZWFyY2gtYm94IC5zZWFyY2gtYm94X19idG46aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xufVxuLmhlYWRlcl9fc2VhcmNoLWJveCAuc2VhcmNoLWJveF9fYnRuOmFjdGl2ZSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMHB4KTtcbn1cbi5oZWFkZXJfX3NlYXJjaC1ib3ggaW5wdXQge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiAxNXB4IDEwcHggMTVweCA3MHB4O1xuICBiYWNrZ3JvdW5kLXNpemU6IGF1dG8gOTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY2O1xuICBmb250LXNpemU6IDE1cHg7XG59XG4uaGVhZGVyX19zZWFyY2gtYm94IGlucHV0W3R5cGU9dGV4dF0ge1xuICB3aWR0aDogNTAwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/components/search-box/search-box.component.ts":
/*!***********************************************************!*\
  !*** ./src/components/search-box/search-box.component.ts ***!
  \***********************************************************/
/*! exports provided: SearchBoxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchBoxComponent", function() { return SearchBoxComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SearchBoxComponent = /** @class */ (function () {
    function SearchBoxComponent() {
        var _this = this;
        this.mySearch = function () {
            console.log(_this.searchBox);
        };
    }
    SearchBoxComponent.prototype.ngOnInit = function () { };
    SearchBoxComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-search-box',
            template: __webpack_require__(/*! raw-loader!./search-box.component.html */ "./node_modules/raw-loader/index.js!./src/components/search-box/search-box.component.html"),
            styles: [__webpack_require__(/*! ./search-box.component.scss */ "./src/components/search-box/search-box.component.scss")]
        })
    ], SearchBoxComponent);
    return SearchBoxComponent;
}());



/***/ }),

/***/ "./src/components/sidebar/sidebar.component.scss":
/*!*******************************************************!*\
  !*** ./src/components/sidebar/sidebar.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\np {\n  color: white;\n}\n\n.sidebar {\n  width: 250px;\n  height: 100%;\n  min-height: 84vh;\n  background-color: #1f222b;\n}\n\n@media only screen and (max-width: 1270px) {\n  .sidebar {\n    height: 100%;\n  }\n}\n\n.sidebar_head {\n  padding: 20px 15px 10px 15px;\n  height: 12vh;\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n}\n\n.sidebar_head__photo {\n  width: 64px;\n  height: 64px;\n  border-radius: 25%;\n  background-color: aliceblue;\n  background-size: 64px 64px;\n}\n\n.sidebar_head_information {\n  margin-left: 15px;\n}\n\n.sidebar_list {\n  padding-top: 30px;\n  width: 100%;\n}\n\n.sidebar_list_item {\n  display: -webkit-box;\n  display: flex;\n  width: 100%;\n  height: 7vh;\n  padding: 9px 20px;\n}\n\n.sidebar_list_item img {\n  width: 24px;\n  height: 24px;\n}\n\n.sidebar_list_item p {\n  margin-left: 10px;\n  margin-top: 4px;\n}\n\n.sidebar_list_item:hover {\n  border-left: 2px solid #214ccf;\n  background-color: #3f4454;\n  cursor: pointer;\n}\n\na {\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy95dXJraXd3L0Rlc2t0b3AvRmFzaGlvblN0b3JlL3NyYy9jb21wb25lbnRzL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuc2NzcyIsInNyYy9jb21wb25lbnRzL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy95dXJraXd3L0Rlc2t0b3AvRmFzaGlvblN0b3JlL3NyYy9zdHlsZXMvY29sb3JzL2NvbG9ycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsU0FBQTtFQUNBLFVBQUE7RUFDQSxzQkFBQTtBQ0RGOztBRElBO0VBQ0UsWUVQTTtBRE1SOztBRElBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLHlCRWZVO0FEY1o7O0FESUE7RUFDRTtJQUNFLFlBQUE7RUNERjtBQUNGOztBRElBO0VBQ0UsNEJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtBQ0ZGOztBREtBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLDJCRWhDVTtFRmlDViwwQkFBQTtBQ0ZGOztBREtBO0VBQ0UsaUJBQUE7QUNGRjs7QURLQTtFQUNFLGlCQUFBO0VBQ0EsV0FBQTtBQ0ZGOztBREtBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFFQSxpQkFBQTtBQ0hGOztBREtFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUNISjs7QURNRTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtBQ0pKOztBRFFBO0VBQ0UsOEJFcEM4QjtFRnFDOUIseUJFcEM2QjtFRnFDN0IsZUFBQTtBQ0xGOztBRFFBO0VBQ0UscUJBQUE7QUNMRiIsImZpbGUiOiJzcmMvY29tcG9uZW50cy9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuL3NyYy9zdHlsZXMvY29sb3JzL2NvbG9ycy5zY3NzJztcblxuKiB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxucCB7XG4gIGNvbG9yOiAkd2hpdGU7XG59XG5cbi5zaWRlYmFyIHtcbiAgd2lkdGg6IDI1MHB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDg0dmg7XG4gIGJhY2tncm91bmQtY29sb3I6ICRncmV5LWJsdWU7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTI3MHB4KSB7XG4gIC5zaWRlYmFyIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cbn1cblxuLnNpZGViYXJfaGVhZCB7XG4gIHBhZGRpbmc6IDIwcHggMTVweCAxMHB4IDE1cHg7XG4gIGhlaWdodDogMTJ2aDtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5zaWRlYmFyX2hlYWRfX3Bob3RvIHtcbiAgd2lkdGg6IDY0cHg7XG4gIGhlaWdodDogNjRweDtcbiAgYm9yZGVyLXJhZGl1czogMjUlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYWxpY2VibHVlO1xuICBiYWNrZ3JvdW5kLXNpemU6IDY0cHggNjRweDtcbn1cblxuLnNpZGViYXJfaGVhZF9pbmZvcm1hdGlvbiB7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xufVxuXG4uc2lkZWJhcl9saXN0IHtcbiAgcGFkZGluZy10b3A6IDMwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uc2lkZWJhcl9saXN0X2l0ZW0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA3dmg7XG5cbiAgcGFkZGluZzogOXB4IDIwcHg7XG5cbiAgaW1nIHtcbiAgICB3aWR0aDogMjRweDtcbiAgICBoZWlnaHQ6IDI0cHg7XG4gIH1cblxuICBwIHtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICBtYXJnaW4tdG9wOiA0cHg7XG4gIH1cbn1cblxuLnNpZGViYXJfbGlzdF9pdGVtOmhvdmVyIHtcbiAgYm9yZGVyLWxlZnQ6ICRzaWRlYmFyX2xpc3RfaXRlbS1ob3Zlci1ib3JkZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICRzaWRlYmFyX2xpc3RfaXRlbS1ob3Zlci1jb2xvcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5hIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuIiwiKiB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxucCB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnNpZGViYXIge1xuICB3aWR0aDogMjUwcHg7XG4gIGhlaWdodDogMTAwJTtcbiAgbWluLWhlaWdodDogODR2aDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFmMjIyYjtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjcwcHgpIHtcbiAgLnNpZGViYXIge1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxufVxuLnNpZGViYXJfaGVhZCB7XG4gIHBhZGRpbmc6IDIwcHggMTVweCAxMHB4IDE1cHg7XG4gIGhlaWdodDogMTJ2aDtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5zaWRlYmFyX2hlYWRfX3Bob3RvIHtcbiAgd2lkdGg6IDY0cHg7XG4gIGhlaWdodDogNjRweDtcbiAgYm9yZGVyLXJhZGl1czogMjUlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XG4gIGJhY2tncm91bmQtc2l6ZTogNjRweCA2NHB4O1xufVxuXG4uc2lkZWJhcl9oZWFkX2luZm9ybWF0aW9uIHtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG59XG5cbi5zaWRlYmFyX2xpc3Qge1xuICBwYWRkaW5nLXRvcDogMzBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5zaWRlYmFyX2xpc3RfaXRlbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDd2aDtcbiAgcGFkZGluZzogOXB4IDIwcHg7XG59XG4uc2lkZWJhcl9saXN0X2l0ZW0gaW1nIHtcbiAgd2lkdGg6IDI0cHg7XG4gIGhlaWdodDogMjRweDtcbn1cbi5zaWRlYmFyX2xpc3RfaXRlbSBwIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIG1hcmdpbi10b3A6IDRweDtcbn1cblxuLnNpZGViYXJfbGlzdF9pdGVtOmhvdmVyIHtcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjMjE0Y2NmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Y0NDU0O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59IiwiLy8gbWFpbiBjb2xvcnNcbiRncmV5LWJsdWU6IHJnYigzMSwgMzQsIDQzKTtcbiR3aGl0ZTogd2hpdGU7XG4kZ3JleTogZ3JleTtcbiRhbGljZWJsdWU6IGFsaWNlYmx1ZTtcblxuLy8gYWNjb3VudC1zZXR0aW5nc1xuXG4kYWNjb3VudC1zZXR0aW5nc19jb250ZW50OiAjNDg1MDU3O1xuJGFjY291bnQtc2V0dGluZ3NfcmVkLWJvcmRlcjogI2JkMzkzOTtcbiRhY2NvdW50LXNldHRpbmdzX2VtYWlsLXN2ZzogI2U5ZWNlZjtcbiRhY2NvdW50LXNldHRpbmdzX3JlZC1jb2xvcjogI2FmMzQzNDtcbiRhY2NvdW50LXNldHRpbmdzX2J1dHRvbi1iYzogIzMxNmJmZjtcbiRhY2NvdW50LXNldHRpbmdzX2J1dHRvbi1jb2xvcjogI2ZmZmY7XG4kYWNjb3VudC1zZXR0aW5nc19ib3JkZXI6IDFweCBzb2xpZCAjYmRiZGJkO1xuXG4vLyBtb2RhbFxuXG4kbW9kYWxfaGVhZGVyLWJjOiAjNDk0YWZkO1xuJG1vZGFsX2hlYWRlci1jb2xvcjphbGljZWJsdWU7XG4kbW9kYWxfaG92ZXItYmM6I2Y4ZjlmYTtcbiRtb2RhbF9ob3Zlci1jb2xvcjojNmI3YWZjO1xuXG4vLyBwcm9kdWN0LWl0ZW1cbiRwcm9kdWN0LWl0ZW1fYm9yZGVyOjFweCBzb2xpZCByZ2JhKDMxLCAzNCwgNDMsIDAuMik7XG4kcHJvZHVjdC1pdGVtLWhvdmVyOiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG4kcHJvZHVjdC1pdGVtX2J1dHRvbi1iYzojZjQ1MTFlO1xuXG4vLyBzZWFyY2gtYm94XG4kc2VhcmNoLWJveC1iYzogI2Y1ZjVmNjtcblxuLy8gc2lkZWJhclxuJHNpZGViYXJfbGlzdF9pdGVtLWhvdmVyLWJvcmRlcjoycHggc29saWQgcmdiKDMzLCA3NiwgMjA3KTtcbiRzaWRlYmFyX2xpc3RfaXRlbS1ob3Zlci1jb2xvcjpyZ2IoNjMsIDY4LCA4NCk7XG5cbi8vIGF1dGhcbiRhdXRoX2J1dHRvbl9jb2xvcjogIzAwN2JmZjtcbiRhdXRoX2NoZWNrYm94X2NvbG9yOiAjNDk1MDU3O1xuJGF1dGhfY2hlY2tib3hfYm9yZGVyOjFweCBzb2xpZCAjY2VkNGRhO1xuJGF1dGhfY2hlY2tib3hfYm9yZGVyLWJlZm9yZTogI2FkYjViZCBzb2xpZCAxcHg7XG5cbi8vIGJ1dHRvbnNcbkBtaXhpbiBkYXJrIHtcbiAgY29sb3I6ICMzNDNhNDA7XG4gIGJvcmRlci1jb2xvcjogIzM0M2E0MDtcblxuICAmOmhvdmVyIHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQzYTQwO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuXG5cbiAgJjpmb2N1cyB7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBib3gtc2hhZG93OiAwIDAgMCAwLjJyZW0gcmdiYSg1MiwgNTgsIDY0LCAuNSlcbiAgfVxufVxuXG5AbWl4aW4gc3VjY2VzcyB7XG4gIGNvbG9yOiAjMjhhNzQ1O1xuICBib3JkZXItY29sb3I6ICMyOGE3NDU7XG5cbiAgJjpob3ZlciB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyOGE3NDU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG5cbiAgJjpmb2N1cyB7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgMC4ycmVtIHJnYmEoNDAsIDE2NywgNjksIC41KTtcbiAgICBvdXRsaW5lOiBub25lXG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/components/sidebar/sidebar.component.ts":
/*!*****************************************************!*\
  !*** ./src/components/sidebar/sidebar.component.ts ***!
  \*****************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SidebarComponent = /** @class */ (function () {
    function SidebarComponent() {
        this.sidebar = {
            userName: 'IVAN',
            userLastName: 'IVANOV',
            userImg: 'assets/sidebar/boy.png',
            userStatus: 'admin',
        };
    }
    SidebarComponent.prototype.ngOnInit = function () { };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], SidebarComponent.prototype, "sidebar", void 0);
    SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! raw-loader!./sidebar.component.html */ "./node_modules/raw-loader/index.js!./src/components/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.scss */ "./src/components/sidebar/sidebar.component.scss")]
        })
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    USER_URL: 'http://localhost:3000'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ "./src/modules/account-settings/account-settings.module.ts":
/*!*****************************************************************!*\
  !*** ./src/modules/account-settings/account-settings.module.ts ***!
  \*****************************************************************/
/*! exports provided: AccountSettingsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountSettingsModule", function() { return AccountSettingsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var src_components_account_settings_account_settings_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/components/account-settings/account-settings.component */ "./src/components/account-settings/account-settings.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_account_settings_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/account-settings.service */ "./src/services/account-settings.service.ts");







var routes = [
    {
        path: '',
        component: src_components_account_settings_account_settings_component__WEBPACK_IMPORTED_MODULE_3__["AccountSettingsComponent"]
    }
];
var AccountSettingsModule = /** @class */ (function () {
    function AccountSettingsModule() {
    }
    AccountSettingsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [src_components_account_settings_account_settings_component__WEBPACK_IMPORTED_MODULE_3__["AccountSettingsComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]],
            providers: [_services_account_settings_service__WEBPACK_IMPORTED_MODULE_6__["AccountSettingsService"]]
        })
    ], AccountSettingsModule);
    return AccountSettingsModule;
}());



/***/ }),

/***/ "./src/modules/auth/auth.module.ts":
/*!*****************************************!*\
  !*** ./src/modules/auth/auth.module.ts ***!
  \*****************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var src_pages_auth_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/pages/auth/login/login.component */ "./src/pages/auth/login/login.component.ts");
/* harmony import */ var src_pages_auth_register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/pages/auth/register/register.component */ "./src/pages/auth/register/register.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/app-routing.module */ "./src/app/app-routing.module.ts");







var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [src_pages_auth_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"], src_pages_auth_register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"]],
        })
    ], AuthModule);
    return AuthModule;
}());



/***/ }),

/***/ "./src/modules/components/components.module.ts":
/*!*****************************************************!*\
  !*** ./src/modules/components/components.module.ts ***!
  \*****************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var src_components_product_item_product_item_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/components/product-item/product-item.component */ "./src/components/product-item/product-item.component.ts");
/* harmony import */ var src_components_search_box_search_box_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/components/search-box/search-box.component */ "./src/components/search-box/search-box.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/components/pagination/pagination.component */ "./src/components/pagination/pagination.component.ts");
/* harmony import */ var src_components_button_button_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/components/button/button.component */ "./src/components/button/button.component.ts");








var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [src_components_product_item_product_item_component__WEBPACK_IMPORTED_MODULE_3__["ProductItemComponent"], src_components_search_box_search_box_component__WEBPACK_IMPORTED_MODULE_4__["SearchBoxComponent"], src_components_button_button_component__WEBPACK_IMPORTED_MODULE_7__["ButtonComponent"], src_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_6__["PaginationComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]],
            exports: [src_components_product_item_product_item_component__WEBPACK_IMPORTED_MODULE_3__["ProductItemComponent"], src_components_search_box_search_box_component__WEBPACK_IMPORTED_MODULE_4__["SearchBoxComponent"], src_components_button_button_component__WEBPACK_IMPORTED_MODULE_7__["ButtonComponent"], src_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_6__["PaginationComponent"]],
        })
    ], ComponentsModule);
    return ComponentsModule;
}());



/***/ }),

/***/ "./src/modules/dashboard/dashboard.module.ts":
/*!***************************************************!*\
  !*** ./src/modules/dashboard/dashboard.module.ts ***!
  \***************************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var src_pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/pages/dashboard/dashboard.component */ "./src/pages/dashboard/dashboard.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var src_components_header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/components/header/header.component */ "./src/components/header/header.component.ts");
/* harmony import */ var src_components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/components/sidebar/sidebar.component */ "./src/components/sidebar/sidebar.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_components_modal_modal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/components/modal/modal.component */ "./src/components/modal/modal.component.ts");










var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                src_pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"],
                src_components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_7__["SidebarComponent"],
                src_components_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
                src_components_modal_modal_component__WEBPACK_IMPORTED_MODULE_9__["ModalComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([]),
                src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            ],
            exports: [
                src_pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"],
                src_components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_7__["SidebarComponent"],
                src_components_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
                src_components_modal_modal_component__WEBPACK_IMPORTED_MODULE_9__["ModalComponent"],
            ]
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ }),

/***/ "./src/modules/item-bottom-section/item-bottom-section.module.ts":
/*!***********************************************************************!*\
  !*** ./src/modules/item-bottom-section/item-bottom-section.module.ts ***!
  \***********************************************************************/
/*! exports provided: ItemBottomSectionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemBottomSectionModule", function() { return ItemBottomSectionModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var src_components_item_bottom_section_item_bottom_section_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/components/item-bottom-section/item-bottom-section.component */ "./src/components/item-bottom-section/item-bottom-section.component.ts");




var ItemBottomSectionModule = /** @class */ (function () {
    function ItemBottomSectionModule() {
    }
    ItemBottomSectionModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [src_components_item_bottom_section_item_bottom_section_component__WEBPACK_IMPORTED_MODULE_3__["ItemBottomSectionComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
            exports: [src_components_item_bottom_section_item_bottom_section_component__WEBPACK_IMPORTED_MODULE_3__["ItemBottomSectionComponent"]],
        })
    ], ItemBottomSectionModule);
    return ItemBottomSectionModule;
}());



/***/ }),

/***/ "./src/modules/new-product/new-product.module.ts":
/*!*******************************************************!*\
  !*** ./src/modules/new-product/new-product.module.ts ***!
  \*******************************************************/
/*! exports provided: NewProductModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewProductModule", function() { return NewProductModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var src_pages_new_product_new_product_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/pages/new-product/new-product.component */ "./src/pages/new-product/new-product.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var NewProductModule = /** @class */ (function () {
    function NewProductModule() {
    }
    NewProductModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [src_pages_new_product_new_product_component__WEBPACK_IMPORTED_MODULE_3__["NewProductComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]],
            exports: [src_pages_new_product_new_product_component__WEBPACK_IMPORTED_MODULE_3__["NewProductComponent"]]
        })
    ], NewProductModule);
    return NewProductModule;
}());



/***/ }),

/***/ "./src/modules/product-detail/product-detail.module.ts":
/*!*************************************************************!*\
  !*** ./src/modules/product-detail/product-detail.module.ts ***!
  \*************************************************************/
/*! exports provided: ProductDetailModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailModule", function() { return ProductDetailModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var src_pages_product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/pages/product-detail/product-detail.component */ "./src/pages/product-detail/product-detail.component.ts");
/* harmony import */ var _item_bottom_section_item_bottom_section_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../item-bottom-section/item-bottom-section.module */ "./src/modules/item-bottom-section/item-bottom-section.module.ts");
/* harmony import */ var src_pages_product_info_product_info_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/pages/product-info/product-info.component */ "./src/pages/product-info/product-info.component.ts");






var ProductDetailModule = /** @class */ (function () {
    function ProductDetailModule() {
    }
    ProductDetailModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [src_pages_product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_3__["ProductDetailComponent"], src_pages_product_info_product_info_component__WEBPACK_IMPORTED_MODULE_5__["ProductInfoComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _item_bottom_section_item_bottom_section_module__WEBPACK_IMPORTED_MODULE_4__["ItemBottomSectionModule"]],
            exports: [src_pages_product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_3__["ProductDetailComponent"], _item_bottom_section_item_bottom_section_module__WEBPACK_IMPORTED_MODULE_4__["ItemBottomSectionModule"]],
        })
    ], ProductDetailModule);
    return ProductDetailModule;
}());



/***/ }),

/***/ "./src/modules/products/products.module.ts":
/*!*************************************************!*\
  !*** ./src/modules/products/products.module.ts ***!
  \*************************************************/
/*! exports provided: ProductsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsModule", function() { return ProductsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var src_pages_products_products_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/pages/products/products.component */ "./src/pages/products/products.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_pages_product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/pages/product-detail/product-detail.component */ "./src/pages/product-detail/product-detail.component.ts");
/* harmony import */ var _product_detail_product_detail_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../product-detail/product-detail.module */ "./src/modules/product-detail/product-detail.module.ts");
/* harmony import */ var _item_bottom_section_item_bottom_section_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../item-bottom-section/item-bottom-section.module */ "./src/modules/item-bottom-section/item-bottom-section.module.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/components.module */ "./src/modules/components/components.module.ts");









var routes = [
    {
        path: '',
        component: src_pages_products_products_component__WEBPACK_IMPORTED_MODULE_3__["ProductsComponent"]
    },
    {
        path: 'info',
        component: src_pages_product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_5__["ProductDetailComponent"]
    }
];
var ProductsModule = /** @class */ (function () {
    function ProductsModule() {
    }
    ProductsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [src_pages_products_products_component__WEBPACK_IMPORTED_MODULE_3__["ProductsComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _product_detail_product_detail_module__WEBPACK_IMPORTED_MODULE_6__["ProductDetailModule"],
                _item_bottom_section_item_bottom_section_module__WEBPACK_IMPORTED_MODULE_7__["ItemBottomSectionModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_8__["ComponentsModule"],
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]]
        })
    ], ProductsModule);
    return ProductsModule;
}());



/***/ }),

/***/ "./src/pages/auth/login/login.component.scss":
/*!***************************************************!*\
  !*** ./src/pages/auth/login/login.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  margin: 0;\n  box-sizing: border-box;\n}\n\n.login {\n  display: -webkit-box;\n  display: flex;\n}\n\n.login_picture {\n  width: 60vw;\n  height: 100vh;\n  background-size: 60vw 100vh;\n}\n\n.login_block {\n  width: 40vw;\n  height: 100vh;\n}\n\n.login_block_form {\n  width: 30vw;\n  height: 60vh;\n}\n\n.login_block_form input {\n  width: 100%;\n  margin-bottom: 10px;\n  height: 70px;\n}\n\n.login_block_form p {\n  display: block;\n}\n\n.login_block_form__item {\n  margin-bottom: 1rem;\n}\n\n.login_block_form__item-control {\n  display: block;\n  width: 100%;\n  height: calc(1.5em + .75rem + 2px);\n  padding: 0.375rem 0.75rem;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #495057;\n  background-color: white;\n  background-clip: padding-box;\n  border: 1px solid #ced4da;\n  border-radius: 0.25rem;\n  -webkit-transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n\n.login_block_form__button {\n  color: white;\n  background-color: #007bff;\n  height: 50px;\n  width: 100%;\n  display: inline-block;\n  font-weight: 400;\n  text-align: center;\n  vertical-align: middle;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  border: 1px solid #007bff;\n  padding: 0.375rem 0.75rem;\n  font-size: 1rem;\n  line-height: 1.5;\n  border-radius: 0.25rem;\n  -webkit-transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n\n.login_block_form__button:hover {\n  cursor: pointer;\n}\n\n@media screen and (max-width: 900px) {\n  .login_picture {\n    display: none;\n  }\n  .login_block {\n    width: 100vw;\n    height: 100vh;\n    padding: 10vh 2vw;\n  }\n  .login_block_form {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%);\n    width: 40vw;\n    height: 60vh;\n  }\n}\n\n.login_block {\n  padding: 17vh 5vw;\n}\n\n.custom-control {\n  position: relative;\n  display: block;\n  min-height: 1.5rem;\n  padding-left: 1.5rem;\n}\n\n.custom-control-input {\n  position: absolute;\n  z-index: -1;\n  opacity: 0;\n}\n\n.custom-control-label {\n  position: relative;\n  margin-bottom: 0;\n  vertical-align: top;\n  font-size: 13px;\n  padding-top: 3px;\n}\n\n.custom-control-label:hover {\n  cursor: pointer;\n}\n\n.custom-control-label::after {\n  position: absolute;\n  top: 0.35rem;\n  left: -1.44rem;\n  display: block;\n  width: 1rem;\n  height: 1rem;\n  content: \"\";\n  background: no-repeat 50%/50% 50%;\n}\n\n.custom-checkbox .custom-control-input:checked ~ .custom-control-label::after {\n  background-image: url(\"/assets/auth/checkmark.svg\");\n}\n\n.custom-control-input:checked ~ .custom-control-label::before {\n  color: white;\n  border-color: #007bff;\n  background-color: #007bff;\n}\n\n.custom-checkbox .custom-control-label::before {\n  border-radius: 0.5rem;\n}\n\n.custom-control-label::before,\n.custom-file-label,\n.custom-select {\n  -webkit-transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n\n.custom-control-label::before {\n  position: absolute;\n  top: 0.25rem;\n  left: -1.5rem;\n  display: block;\n  width: 1rem;\n  height: 1rem;\n  pointer-events: none;\n  content: \"\";\n  background-color: white;\n  border: #adb5bd solid 1px;\n}\n\np > small > a > u {\n  color: #007bff;\n}\n\n.login_block_form__item p {\n  text-align: right;\n}\n\n.login_block_form__item p small > a > u {\n  color: grey;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy95dXJraXd3L0Rlc2t0b3AvRmFzaGlvblN0b3JlL3NyYy9wYWdlcy9hdXRoL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic3JjL3BhZ2VzL2F1dGgvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCIvVXNlcnMveXVya2l3dy9EZXNrdG9wL0Zhc2hpb25TdG9yZS9zdGRpbiIsIi9Vc2Vycy95dXJraXd3L0Rlc2t0b3AvRmFzaGlvblN0b3JlL3NyYy9zdHlsZXMvY29sb3JzL2NvbG9ycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdFO0VBQ0UsU0FBQTtFQUNBLHNCQUFBO0FDRko7O0FDRUE7RUZLRSxvQkFBQTtFQUFBLGFBQUE7QUNIRjs7QURLRTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsMkJBQUE7QUNISjs7QURRRTtFQUNFLFdBQUE7RUFDQSxhQUFBO0FDTko7O0FEVUk7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQ1JOOztBRFVNO0VBQ0UsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQ1JSOztBRFdNO0VBQ0UsY0FBQTtBQ1RSOztBRFlNO0VBQ0UsbUJBQUE7QUNWUjs7QURZUTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0Esa0NBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0dkWTtFSGVaLHVCR2xERjtFSG1ERSw0QkFBQTtFQUNBLHlCR2hCWTtFSGlCWixzQkFBQTtFQUNBLGdGQUFBO0VBQUEsd0VBQUE7QUNWVjs7QURjTTtFQUNFLFlHM0RBO0VINERBLHlCRzFCWTtFSDJCWixZQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSw2SUFBQTtFQUFBLHFJQUFBO0FDWlI7O0FEY1E7RUFDRSxlQUFBO0FDWlY7O0FDNURBO0VGZ0ZFO0lBQ0UsYUFBQTtFQ2hCRjtFRG1CQTtJQUNFLFlBQUE7SUFDQSxhQUFBO0lBQ0EsaUJBQUE7RUNqQkY7RURtQkU7SUFDRSxrQkFBQTtJQUNBLFFBQUE7SUFDQSxTQUFBO0lBQ0Esd0NBQUE7WUFBQSxnQ0FBQTtJQUNBLFdBQUE7SUFDQSxZQUFBO0VDakJKO0FBQ0Y7O0FDeEVBO0VBQ0UsaUJBQUE7QUQwRUY7O0FDdEVBO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtBRHlFRjs7QUN0RUE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FEeUVGOztBQ3RFQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBRHlFRjs7QUN2RUU7RUFDRSxlQUFBO0FEeUVKOztBQ3JFQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsaUNBQUE7QUR3RUY7O0FDcEVBO0VBQ0UsbURBQUE7QUR1RUY7O0FDbEVBO0VBQ0UsWUMvRE07RURnRU4scUJDOUJrQjtFRCtCbEIseUJDL0JrQjtBRm9HcEI7O0FDakVBO0VBQ0UscUJBQUE7QURvRUY7O0FDakVBOzs7RUFHRSxvSEFBQTtFQUFBLDRHQUFBO0FEb0VGOztBQ2pFQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLFdBQUE7RUFDQSx1QkN4Rk07RUR5Rk4seUJDcEQ0QjtBRndIOUI7O0FDakVBO0VBQ0UsY0MzRGtCO0FGK0hwQjs7QUNoRUU7RUFDRSxpQkFBQTtBRG1FSjs7QUNqRUk7RUFDRSxXQ3BHQztBRnVLUCIsImZpbGUiOiJzcmMvcGFnZXMvYXV0aC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4vc3JjL3N0eWxlcy9jb2xvcnMvY29sb3JzLnNjc3MnO1xuXG5AbWl4aW4gbWFpbiB7XG4gICoge1xuICAgIG1hcmdpbjogMDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB9XG59XG5cbkBtaXhpbiBwYWdlIHtcbiAgZGlzcGxheTogZmxleDtcblxuICAmX3BpY3R1cmUge1xuICAgIHdpZHRoOiA2MHZ3O1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgYmFja2dyb3VuZC1zaXplOiA2MHZ3IDEwMHZoO1xuICAgIC8vIGJveC1zaGFkb3c6IDAgMCAzMHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgICAvLyBib3JkZXItcmFkaXVzOiAwIDI1cHggMjVweCAwO1xuICB9XG5cbiAgJl9ibG9jayB7XG4gICAgd2lkdGg6IDQwdnc7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAvLyBwYWRkaW5nOiAxMHZoIDV2dztcblxuXG4gICAgJl9mb3JtIHtcbiAgICAgIHdpZHRoOiAzMHZ3O1xuICAgICAgaGVpZ2h0OiA2MHZoO1xuXG4gICAgICBpbnB1dCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICBoZWlnaHQ6IDcwcHg7XG4gICAgICB9XG5cbiAgICAgIHAge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIH1cblxuICAgICAgJl9faXRlbSB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG5cbiAgICAgICAgJi1jb250cm9sIHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBoZWlnaHQ6IGNhbGMoMS41ZW0gKyAuNzVyZW0gKyAycHgpO1xuICAgICAgICAgIHBhZGRpbmc6IC4zNzVyZW0gLjc1cmVtO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgICAgICAgY29sb3I6ICRhdXRoX2NoZWNrYm94X2NvbG9yO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR3aGl0ZTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xuICAgICAgICAgIGJvcmRlcjogJGF1dGhfY2hlY2tib3hfYm9yZGVyO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IC4yNXJlbTtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgLjE1cyBlYXNlLWluLW91dCwgYm94LXNoYWRvdyAuMTVzIGVhc2UtaW4tb3V0O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgICZfX2J1dHRvbiB7XG4gICAgICAgIGNvbG9yOiAkd2hpdGU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRhdXRoX2J1dHRvbl9jb2xvcjtcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRhdXRoX2J1dHRvbl9jb2xvcjtcbiAgICAgICAgcGFkZGluZzogLjM3NXJlbSAuNzVyZW07XG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogLjI1cmVtO1xuICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciAuMTVzIGVhc2UtaW4tb3V0LCBiYWNrZ3JvdW5kLWNvbG9yIC4xNXMgZWFzZS1pbi1vdXQsIGJvcmRlci1jb2xvciAuMTVzIGVhc2UtaW4tb3V0LCBib3gtc2hhZG93IC4xNXMgZWFzZS1pbi1vdXQ7XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBtZWRpYSB7XG4gICZfcGljdHVyZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gICZfYmxvY2sge1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIHBhZGRpbmc6IDEwdmggMnZ3O1xuXG4gICAgJl9mb3JtIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogNTAlO1xuICAgICAgbGVmdDogNTAlO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICB3aWR0aDogNDB2dztcbiAgICAgIGhlaWdodDogNjB2aDtcbiAgICB9XG4gIH1cbn1cbiIsIioge1xuICBtYXJnaW46IDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi5sb2dpbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4ubG9naW5fcGljdHVyZSB7XG4gIHdpZHRoOiA2MHZ3O1xuICBoZWlnaHQ6IDEwMHZoO1xuICBiYWNrZ3JvdW5kLXNpemU6IDYwdncgMTAwdmg7XG59XG4ubG9naW5fYmxvY2sge1xuICB3aWR0aDogNDB2dztcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cbi5sb2dpbl9ibG9ja19mb3JtIHtcbiAgd2lkdGg6IDMwdnc7XG4gIGhlaWdodDogNjB2aDtcbn1cbi5sb2dpbl9ibG9ja19mb3JtIGlucHV0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGhlaWdodDogNzBweDtcbn1cbi5sb2dpbl9ibG9ja19mb3JtIHAge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5sb2dpbl9ibG9ja19mb3JtX19pdGVtIHtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cbi5sb2dpbl9ibG9ja19mb3JtX19pdGVtLWNvbnRyb2wge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogY2FsYygxLjVlbSArIC43NXJlbSArIDJweCk7XG4gIHBhZGRpbmc6IDAuMzc1cmVtIDAuNzVyZW07XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgY29sb3I6ICM0OTUwNTc7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2VkNGRhO1xuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xuICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIGJveC1zaGFkb3cgMC4xNXMgZWFzZS1pbi1vdXQ7XG59XG4ubG9naW5fYmxvY2tfZm9ybV9fYnV0dG9uIHtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YmZmO1xuICBoZWlnaHQ6IDUwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwN2JmZjtcbiAgcGFkZGluZzogMC4zNzVyZW0gMC43NXJlbTtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xuICB0cmFuc2l0aW9uOiBjb2xvciAwLjE1cyBlYXNlLWluLW91dCwgYmFja2dyb3VuZC1jb2xvciAwLjE1cyBlYXNlLWluLW91dCwgYm9yZGVyLWNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBib3gtc2hhZG93IDAuMTVzIGVhc2UtaW4tb3V0O1xufVxuLmxvZ2luX2Jsb2NrX2Zvcm1fX2J1dHRvbjpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTAwcHgpIHtcbiAgLmxvZ2luX3BpY3R1cmUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgLmxvZ2luX2Jsb2NrIHtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBwYWRkaW5nOiAxMHZoIDJ2dztcbiAgfVxuICAubG9naW5fYmxvY2tfZm9ybSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICB3aWR0aDogNDB2dztcbiAgICBoZWlnaHQ6IDYwdmg7XG4gIH1cbn1cbi5sb2dpbl9ibG9jayB7XG4gIHBhZGRpbmc6IDE3dmggNXZ3O1xufVxuXG4uY3VzdG9tLWNvbnRyb2wge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtaW4taGVpZ2h0OiAxLjVyZW07XG4gIHBhZGRpbmctbGVmdDogMS41cmVtO1xufVxuXG4uY3VzdG9tLWNvbnRyb2wtaW5wdXQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IC0xO1xuICBvcGFjaXR5OiAwO1xufVxuXG4uY3VzdG9tLWNvbnRyb2wtbGFiZWwge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgcGFkZGluZy10b3A6IDNweDtcbn1cbi5jdXN0b20tY29udHJvbC1sYWJlbDpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmN1c3RvbS1jb250cm9sLWxhYmVsOjphZnRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwLjM1cmVtO1xuICBsZWZ0OiAtMS40NHJlbTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxcmVtO1xuICBoZWlnaHQ6IDFyZW07XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGJhY2tncm91bmQ6IG5vLXJlcGVhdCA1MCUvNTAlIDUwJTtcbn1cblxuLmN1c3RvbS1jaGVja2JveCAuY3VzdG9tLWNvbnRyb2wtaW5wdXQ6Y2hlY2tlZCB+IC5jdXN0b20tY29udHJvbC1sYWJlbDo6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2F1dGgvY2hlY2ttYXJrLnN2Z1wiKTtcbn1cblxuLmN1c3RvbS1jb250cm9sLWlucHV0OmNoZWNrZWQgfiAuY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmJlZm9yZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLWNvbG9yOiAjMDA3YmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YmZmO1xufVxuXG4uY3VzdG9tLWNoZWNrYm94IC5jdXN0b20tY29udHJvbC1sYWJlbDo6YmVmb3JlIHtcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xufVxuXG4uY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmJlZm9yZSxcbi5jdXN0b20tZmlsZS1sYWJlbCxcbi5jdXN0b20tc2VsZWN0IHtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjE1cyBlYXNlLWluLW91dCwgYm9yZGVyLWNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBib3gtc2hhZG93IDAuMTVzIGVhc2UtaW4tb3V0O1xufVxuXG4uY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmJlZm9yZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwLjI1cmVtO1xuICBsZWZ0OiAtMS41cmVtO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDFyZW07XG4gIGhlaWdodDogMXJlbTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXI6ICNhZGI1YmQgc29saWQgMXB4O1xufVxuXG5wID4gc21hbGwgPiBhID4gdSB7XG4gIGNvbG9yOiAjMDA3YmZmO1xufVxuXG4ubG9naW5fYmxvY2tfZm9ybV9faXRlbSBwIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG4ubG9naW5fYmxvY2tfZm9ybV9faXRlbSBwIHNtYWxsID4gYSA+IHUge1xuICBjb2xvcjogZ3JleTtcbn0iLCJAaW1wb3J0ICcuL3NyYy9zdHlsZXMvYXV0aC9hdXRoLnNjc3MnO1xuQGltcG9ydCAnLi9zcmMvc3R5bGVzL2NvbG9ycy9jb2xvcnMuc2Nzcyc7XG5cbkBpbmNsdWRlIG1haW47XG5cbi5sb2dpbiB7XG4gIEBpbmNsdWRlIHBhZ2U7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkwMHB4KSB7XG4gIC5sb2dpbiB7XG4gICAgQGluY2x1ZGUgbWVkaWE7XG4gIH1cbn1cblxuXG4ubG9naW5fYmxvY2sge1xuICBwYWRkaW5nOiAxN3ZoIDV2dztcbn1cblxuXG4uY3VzdG9tLWNvbnRyb2wge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtaW4taGVpZ2h0OiAxLjVyZW07XG4gIHBhZGRpbmctbGVmdDogMS41cmVtO1xufVxuXG4uY3VzdG9tLWNvbnRyb2wtaW5wdXQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IC0xO1xuICBvcGFjaXR5OiAwO1xufVxuXG4uY3VzdG9tLWNvbnRyb2wtbGFiZWwge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgcGFkZGluZy10b3A6IDNweDtcblxuICAmOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbn1cblxuLmN1c3RvbS1jb250cm9sLWxhYmVsOjphZnRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwLjM1cmVtO1xuICBsZWZ0OiAtMS40NHJlbTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxcmVtO1xuICBoZWlnaHQ6IDFyZW07XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGJhY2tncm91bmQ6IG5vLXJlcGVhdCA1MCUvNTAlIDUwJTtcblxufVxuXG4uY3VzdG9tLWNoZWNrYm94IC5jdXN0b20tY29udHJvbC1pbnB1dDpjaGVja2Vkfi5jdXN0b20tY29udHJvbC1sYWJlbDo6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvYXV0aC9jaGVja21hcmsuc3ZnJyk7XG5cblxufVxuXG4uY3VzdG9tLWNvbnRyb2wtaW5wdXQ6Y2hlY2tlZH4uY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmJlZm9yZSB7XG4gIGNvbG9yOiAkd2hpdGU7XG4gIGJvcmRlci1jb2xvcjogJGF1dGhfYnV0dG9uX2NvbG9yO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYXV0aF9idXR0b25fY29sb3I7XG5cbn1cblxuLmN1c3RvbS1jaGVja2JveCAuY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmJlZm9yZSB7XG4gIGJvcmRlci1yYWRpdXM6IC41MHJlbTtcbn1cblxuLmN1c3RvbS1jb250cm9sLWxhYmVsOjpiZWZvcmUsXG4uY3VzdG9tLWZpbGUtbGFiZWwsXG4uY3VzdG9tLXNlbGVjdCB7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgLjE1cyBlYXNlLWluLW91dCwgYm9yZGVyLWNvbG9yIC4xNXMgZWFzZS1pbi1vdXQsIGJveC1zaGFkb3cgLjE1cyBlYXNlLWluLW91dDtcbn1cblxuLmN1c3RvbS1jb250cm9sLWxhYmVsOjpiZWZvcmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLjI1cmVtO1xuICBsZWZ0OiAtMS41cmVtO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDFyZW07XG4gIGhlaWdodDogMXJlbTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGJhY2tncm91bmQtY29sb3I6ICR3aGl0ZTtcbiAgYm9yZGVyOiAkYXV0aF9jaGVja2JveF9ib3JkZXItYmVmb3JlO1xufVxuXG5wPnNtYWxsPmE+dSB7XG4gIGNvbG9yOiAkYXV0aF9idXR0b25fY29sb3I7XG59XG5cbi5sb2dpbl9ibG9ja19mb3JtX19pdGVtIHtcbiAgcCB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG5cbiAgICBzbWFsbD5hPnUge1xuICAgICAgY29sb3I6ICRncmV5O1xuICAgIH1cbiAgfVxufVxuIiwiLy8gbWFpbiBjb2xvcnNcbiRncmV5LWJsdWU6IHJnYigzMSwgMzQsIDQzKTtcbiR3aGl0ZTogd2hpdGU7XG4kZ3JleTogZ3JleTtcbiRhbGljZWJsdWU6IGFsaWNlYmx1ZTtcblxuLy8gYWNjb3VudC1zZXR0aW5nc1xuXG4kYWNjb3VudC1zZXR0aW5nc19jb250ZW50OiAjNDg1MDU3O1xuJGFjY291bnQtc2V0dGluZ3NfcmVkLWJvcmRlcjogI2JkMzkzOTtcbiRhY2NvdW50LXNldHRpbmdzX2VtYWlsLXN2ZzogI2U5ZWNlZjtcbiRhY2NvdW50LXNldHRpbmdzX3JlZC1jb2xvcjogI2FmMzQzNDtcbiRhY2NvdW50LXNldHRpbmdzX2J1dHRvbi1iYzogIzMxNmJmZjtcbiRhY2NvdW50LXNldHRpbmdzX2J1dHRvbi1jb2xvcjogI2ZmZmY7XG4kYWNjb3VudC1zZXR0aW5nc19ib3JkZXI6IDFweCBzb2xpZCAjYmRiZGJkO1xuXG4vLyBtb2RhbFxuXG4kbW9kYWxfaGVhZGVyLWJjOiAjNDk0YWZkO1xuJG1vZGFsX2hlYWRlci1jb2xvcjphbGljZWJsdWU7XG4kbW9kYWxfaG92ZXItYmM6I2Y4ZjlmYTtcbiRtb2RhbF9ob3Zlci1jb2xvcjojNmI3YWZjO1xuXG4vLyBwcm9kdWN0LWl0ZW1cbiRwcm9kdWN0LWl0ZW1fYm9yZGVyOjFweCBzb2xpZCByZ2JhKDMxLCAzNCwgNDMsIDAuMik7XG4kcHJvZHVjdC1pdGVtLWhvdmVyOiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG4kcHJvZHVjdC1pdGVtX2J1dHRvbi1iYzojZjQ1MTFlO1xuXG4vLyBzZWFyY2gtYm94XG4kc2VhcmNoLWJveC1iYzogI2Y1ZjVmNjtcblxuLy8gc2lkZWJhclxuJHNpZGViYXJfbGlzdF9pdGVtLWhvdmVyLWJvcmRlcjoycHggc29saWQgcmdiKDMzLCA3NiwgMjA3KTtcbiRzaWRlYmFyX2xpc3RfaXRlbS1ob3Zlci1jb2xvcjpyZ2IoNjMsIDY4LCA4NCk7XG5cbi8vIGF1dGhcbiRhdXRoX2J1dHRvbl9jb2xvcjogIzAwN2JmZjtcbiRhdXRoX2NoZWNrYm94X2NvbG9yOiAjNDk1MDU3O1xuJGF1dGhfY2hlY2tib3hfYm9yZGVyOjFweCBzb2xpZCAjY2VkNGRhO1xuJGF1dGhfY2hlY2tib3hfYm9yZGVyLWJlZm9yZTogI2FkYjViZCBzb2xpZCAxcHg7XG5cbi8vIGJ1dHRvbnNcbkBtaXhpbiBkYXJrIHtcbiAgY29sb3I6ICMzNDNhNDA7XG4gIGJvcmRlci1jb2xvcjogIzM0M2E0MDtcblxuICAmOmhvdmVyIHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQzYTQwO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuXG5cbiAgJjpmb2N1cyB7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBib3gtc2hhZG93OiAwIDAgMCAwLjJyZW0gcmdiYSg1MiwgNTgsIDY0LCAuNSlcbiAgfVxufVxuXG5AbWl4aW4gc3VjY2VzcyB7XG4gIGNvbG9yOiAjMjhhNzQ1O1xuICBib3JkZXItY29sb3I6ICMyOGE3NDU7XG5cbiAgJjpob3ZlciB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyOGE3NDU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG5cbiAgJjpmb2N1cyB7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgMC4ycmVtIHJnYmEoNDAsIDE2NywgNjksIC41KTtcbiAgICBvdXRsaW5lOiBub25lXG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/pages/auth/login/login.component.ts":
/*!*************************************************!*\
  !*** ./src/pages/auth/login/login.component.ts ***!
  \*************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var LoginComponent = /** @class */ (function () {
    function LoginComponent(fb) {
        var _this = this;
        this.fb = fb;
        this.loginUser = function () {
            console.log(_this.loginForm.value);
        };
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = this.fb.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8)],
            remember: [false],
        });
    };
    LoginComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
    ]; };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/pages/auth/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/pages/auth/login/login.component.scss")]
        })
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/pages/auth/register/register.component.scss":
/*!*********************************************************!*\
  !*** ./src/pages/auth/register/register.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  margin: 0;\n  box-sizing: border-box;\n}\n\n.register {\n  display: -webkit-box;\n  display: flex;\n}\n\n.register_picture {\n  width: 60vw;\n  height: 100vh;\n  background-size: 60vw 100vh;\n}\n\n.register_block {\n  width: 40vw;\n  height: 100vh;\n}\n\n.register_block_form {\n  width: 30vw;\n  height: 60vh;\n}\n\n.register_block_form input {\n  width: 100%;\n  margin-bottom: 10px;\n  height: 70px;\n}\n\n.register_block_form p {\n  display: block;\n}\n\n.register_block_form__item {\n  margin-bottom: 1rem;\n}\n\n.register_block_form__item-control {\n  display: block;\n  width: 100%;\n  height: calc(1.5em + .75rem + 2px);\n  padding: 0.375rem 0.75rem;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #495057;\n  background-color: white;\n  background-clip: padding-box;\n  border: 1px solid #ced4da;\n  border-radius: 0.25rem;\n  -webkit-transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n\n.register_block_form__button {\n  color: white;\n  background-color: #007bff;\n  height: 50px;\n  width: 100%;\n  display: inline-block;\n  font-weight: 400;\n  text-align: center;\n  vertical-align: middle;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  border: 1px solid #007bff;\n  padding: 0.375rem 0.75rem;\n  font-size: 1rem;\n  line-height: 1.5;\n  border-radius: 0.25rem;\n  -webkit-transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n\n.register_block_form__button:hover {\n  cursor: pointer;\n}\n\n@media screen and (max-width: 900px) {\n  .register_picture {\n    display: none;\n  }\n  .register_block {\n    width: 100vw;\n    height: 100vh;\n    padding: 10vh 2vw;\n  }\n  .register_block_form {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%);\n    width: 40vw;\n    height: 60vh;\n  }\n}\n\n.register_block {\n  padding: 3vh 5vw;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy95dXJraXd3L0Rlc2t0b3AvRmFzaGlvblN0b3JlL3NyYy9wYWdlcy9hdXRoL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL3BhZ2VzL2F1dGgvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMveXVya2l3dy9EZXNrdG9wL0Zhc2hpb25TdG9yZS9zdGRpbiIsIi9Vc2Vycy95dXJraXd3L0Rlc2t0b3AvRmFzaGlvblN0b3JlL3NyYy9zdHlsZXMvY29sb3JzL2NvbG9ycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdFO0VBQ0UsU0FBQTtFQUNBLHNCQUFBO0FDRko7O0FDSUE7RUZHRSxvQkFBQTtFQUFBLGFBQUE7QUNIRjs7QURLRTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsMkJBQUE7QUNISjs7QURRRTtFQUNFLFdBQUE7RUFDQSxhQUFBO0FDTko7O0FEVUk7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQ1JOOztBRFVNO0VBQ0UsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQ1JSOztBRFdNO0VBQ0UsY0FBQTtBQ1RSOztBRFlNO0VBQ0UsbUJBQUE7QUNWUjs7QURZUTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0Esa0NBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0dkWTtFSGVaLHVCR2xERjtFSG1ERSw0QkFBQTtFQUNBLHlCR2hCWTtFSGlCWixzQkFBQTtFQUNBLGdGQUFBO0VBQUEsd0VBQUE7QUNWVjs7QURjTTtFQUNFLFlHM0RBO0VINERBLHlCRzFCWTtFSDJCWixZQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSw2SUFBQTtFQUFBLHFJQUFBO0FDWlI7O0FEY1E7RUFDRSxlQUFBO0FDWlY7O0FDMURBO0VGOEVFO0lBQ0UsYUFBQTtFQ2hCRjtFRG1CQTtJQUNFLFlBQUE7SUFDQSxhQUFBO0lBQ0EsaUJBQUE7RUNqQkY7RURtQkU7SUFDRSxrQkFBQTtJQUNBLFFBQUE7SUFDQSxTQUFBO0lBQ0Esd0NBQUE7WUFBQSxnQ0FBQTtJQUNBLFdBQUE7SUFDQSxZQUFBO0VDakJKO0FBQ0Y7O0FDdkVBO0VBQ0UsZ0JBQUE7QUR5RUYiLCJmaWxlIjoic3JjL3BhZ2VzL2F1dGgvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuL3NyYy9zdHlsZXMvY29sb3JzL2NvbG9ycy5zY3NzJztcblxuQG1peGluIG1haW4ge1xuICAqIHtcbiAgICBtYXJnaW46IDA7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgfVxufVxuXG5AbWl4aW4gcGFnZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG5cbiAgJl9waWN0dXJlIHtcbiAgICB3aWR0aDogNjB2dztcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIGJhY2tncm91bmQtc2l6ZTogNjB2dyAxMDB2aDtcbiAgICAvLyBib3gtc2hhZG93OiAwIDAgMzBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gICAgLy8gYm9yZGVyLXJhZGl1czogMCAyNXB4IDI1cHggMDtcbiAgfVxuXG4gICZfYmxvY2sge1xuICAgIHdpZHRoOiA0MHZ3O1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgLy8gcGFkZGluZzogMTB2aCA1dnc7XG5cblxuICAgICZfZm9ybSB7XG4gICAgICB3aWR0aDogMzB2dztcbiAgICAgIGhlaWdodDogNjB2aDtcblxuICAgICAgaW5wdXQge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgaGVpZ2h0OiA3MHB4O1xuICAgICAgfVxuXG4gICAgICBwIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB9XG5cbiAgICAgICZfX2l0ZW0ge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuXG4gICAgICAgICYtY29udHJvbCB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgaGVpZ2h0OiBjYWxjKDEuNWVtICsgLjc1cmVtICsgMnB4KTtcbiAgICAgICAgICBwYWRkaW5nOiAuMzc1cmVtIC43NXJlbTtcbiAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS41O1xuICAgICAgICAgIGNvbG9yOiAkYXV0aF9jaGVja2JveF9jb2xvcjtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGU7XG4gICAgICAgICAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcbiAgICAgICAgICBib3JkZXI6ICRhdXRoX2NoZWNrYm94X2JvcmRlcjtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAuMjVyZW07XG4gICAgICAgICAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIC4xNXMgZWFzZS1pbi1vdXQsIGJveC1zaGFkb3cgLjE1cyBlYXNlLWluLW91dDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAmX19idXR0b24ge1xuICAgICAgICBjb2xvcjogJHdoaXRlO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYXV0aF9idXR0b25fY29sb3I7XG4gICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkYXV0aF9idXR0b25fY29sb3I7XG4gICAgICAgIHBhZGRpbmc6IC4zNzVyZW0gLjc1cmVtO1xuICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IC4yNXJlbTtcbiAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgLjE1cyBlYXNlLWluLW91dCwgYmFja2dyb3VuZC1jb2xvciAuMTVzIGVhc2UtaW4tb3V0LCBib3JkZXItY29sb3IgLjE1cyBlYXNlLWluLW91dCwgYm94LXNoYWRvdyAuMTVzIGVhc2UtaW4tb3V0O1xuXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gbWVkaWEge1xuICAmX3BpY3R1cmUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAmX2Jsb2NrIHtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBwYWRkaW5nOiAxMHZoIDJ2dztcblxuICAgICZfZm9ybSB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDUwJTtcbiAgICAgIGxlZnQ6IDUwJTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgICAgd2lkdGg6IDQwdnc7XG4gICAgICBoZWlnaHQ6IDYwdmg7XG4gICAgfVxuICB9XG59XG4iLCIqIHtcbiAgbWFyZ2luOiAwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4ucmVnaXN0ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLnJlZ2lzdGVyX3BpY3R1cmUge1xuICB3aWR0aDogNjB2dztcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgYmFja2dyb3VuZC1zaXplOiA2MHZ3IDEwMHZoO1xufVxuLnJlZ2lzdGVyX2Jsb2NrIHtcbiAgd2lkdGg6IDQwdnc7XG4gIGhlaWdodDogMTAwdmg7XG59XG4ucmVnaXN0ZXJfYmxvY2tfZm9ybSB7XG4gIHdpZHRoOiAzMHZ3O1xuICBoZWlnaHQ6IDYwdmg7XG59XG4ucmVnaXN0ZXJfYmxvY2tfZm9ybSBpbnB1dCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBoZWlnaHQ6IDcwcHg7XG59XG4ucmVnaXN0ZXJfYmxvY2tfZm9ybSBwIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4ucmVnaXN0ZXJfYmxvY2tfZm9ybV9faXRlbSB7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG4ucmVnaXN0ZXJfYmxvY2tfZm9ybV9faXRlbS1jb250cm9sIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGNhbGMoMS41ZW0gKyAuNzVyZW0gKyAycHgpO1xuICBwYWRkaW5nOiAwLjM3NXJlbSAwLjc1cmVtO1xuICBmb250LXNpemU6IDFyZW07XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGNvbG9yOiAjNDk1MDU3O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NlZDRkYTtcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcbiAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBib3gtc2hhZG93IDAuMTVzIGVhc2UtaW4tb3V0O1xufVxuLnJlZ2lzdGVyX2Jsb2NrX2Zvcm1fX2J1dHRvbiB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2JmZjtcbiAgaGVpZ2h0OiA1MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXdlaWdodDogNDAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDdiZmY7XG4gIHBhZGRpbmc6IDAuMzc1cmVtIDAuNzVyZW07XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIGJhY2tncm91bmQtY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIGJvcmRlci1jb2xvciAwLjE1cyBlYXNlLWluLW91dCwgYm94LXNoYWRvdyAwLjE1cyBlYXNlLWluLW91dDtcbn1cbi5yZWdpc3Rlcl9ibG9ja19mb3JtX19idXR0b246aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkwMHB4KSB7XG4gIC5yZWdpc3Rlcl9waWN0dXJlIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIC5yZWdpc3Rlcl9ibG9jayB7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgcGFkZGluZzogMTB2aCAydnc7XG4gIH1cbiAgLnJlZ2lzdGVyX2Jsb2NrX2Zvcm0ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgd2lkdGg6IDQwdnc7XG4gICAgaGVpZ2h0OiA2MHZoO1xuICB9XG59XG4ucmVnaXN0ZXJfYmxvY2sge1xuICBwYWRkaW5nOiAzdmggNXZ3O1xufSIsIkBpbXBvcnQgJy4vc3JjL3N0eWxlcy9hdXRoL2F1dGguc2Nzcyc7XG5AaW1wb3J0ICcuL3NyYy9zdHlsZXMvY29sb3JzL2NvbG9ycy5zY3NzJztcblxuQGluY2x1ZGUgbWFpbjtcblxuXG5cbi5yZWdpc3RlciB7XG4gIEBpbmNsdWRlIHBhZ2U7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkwMHB4KSB7XG4gIC5yZWdpc3RlciB7XG4gICAgQGluY2x1ZGUgbWVkaWE7XG4gIH1cbn1cblxuLnJlZ2lzdGVyX2Jsb2NrIHtcbiAgcGFkZGluZzogM3ZoIDV2dztcbn1cbiIsIi8vIG1haW4gY29sb3JzXG4kZ3JleS1ibHVlOiByZ2IoMzEsIDM0LCA0Myk7XG4kd2hpdGU6IHdoaXRlO1xuJGdyZXk6IGdyZXk7XG4kYWxpY2VibHVlOiBhbGljZWJsdWU7XG5cbi8vIGFjY291bnQtc2V0dGluZ3NcblxuJGFjY291bnQtc2V0dGluZ3NfY29udGVudDogIzQ4NTA1NztcbiRhY2NvdW50LXNldHRpbmdzX3JlZC1ib3JkZXI6ICNiZDM5Mzk7XG4kYWNjb3VudC1zZXR0aW5nc19lbWFpbC1zdmc6ICNlOWVjZWY7XG4kYWNjb3VudC1zZXR0aW5nc19yZWQtY29sb3I6ICNhZjM0MzQ7XG4kYWNjb3VudC1zZXR0aW5nc19idXR0b24tYmM6ICMzMTZiZmY7XG4kYWNjb3VudC1zZXR0aW5nc19idXR0b24tY29sb3I6ICNmZmZmO1xuJGFjY291bnQtc2V0dGluZ3NfYm9yZGVyOiAxcHggc29saWQgI2JkYmRiZDtcblxuLy8gbW9kYWxcblxuJG1vZGFsX2hlYWRlci1iYzogIzQ5NGFmZDtcbiRtb2RhbF9oZWFkZXItY29sb3I6YWxpY2VibHVlO1xuJG1vZGFsX2hvdmVyLWJjOiNmOGY5ZmE7XG4kbW9kYWxfaG92ZXItY29sb3I6IzZiN2FmYztcblxuLy8gcHJvZHVjdC1pdGVtXG4kcHJvZHVjdC1pdGVtX2JvcmRlcjoxcHggc29saWQgcmdiYSgzMSwgMzQsIDQzLCAwLjIpO1xuJHByb2R1Y3QtaXRlbS1ob3ZlcjogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xuJHByb2R1Y3QtaXRlbV9idXR0b24tYmM6I2Y0NTExZTtcblxuLy8gc2VhcmNoLWJveFxuJHNlYXJjaC1ib3gtYmM6ICNmNWY1ZjY7XG5cbi8vIHNpZGViYXJcbiRzaWRlYmFyX2xpc3RfaXRlbS1ob3Zlci1ib3JkZXI6MnB4IHNvbGlkIHJnYigzMywgNzYsIDIwNyk7XG4kc2lkZWJhcl9saXN0X2l0ZW0taG92ZXItY29sb3I6cmdiKDYzLCA2OCwgODQpO1xuXG4vLyBhdXRoXG4kYXV0aF9idXR0b25fY29sb3I6ICMwMDdiZmY7XG4kYXV0aF9jaGVja2JveF9jb2xvcjogIzQ5NTA1NztcbiRhdXRoX2NoZWNrYm94X2JvcmRlcjoxcHggc29saWQgI2NlZDRkYTtcbiRhdXRoX2NoZWNrYm94X2JvcmRlci1iZWZvcmU6ICNhZGI1YmQgc29saWQgMXB4O1xuXG4vLyBidXR0b25zXG5AbWl4aW4gZGFyayB7XG4gIGNvbG9yOiAjMzQzYTQwO1xuICBib3JkZXItY29sb3I6ICMzNDNhNDA7XG5cbiAgJjpob3ZlciB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM0M2E0MDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cblxuXG4gICY6Zm9jdXMge1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgMC4ycmVtIHJnYmEoNTIsIDU4LCA2NCwgLjUpXG4gIH1cbn1cblxuQG1peGluIHN1Y2Nlc3Mge1xuICBjb2xvcjogIzI4YTc0NTtcbiAgYm9yZGVyLWNvbG9yOiAjMjhhNzQ1O1xuXG4gICY6aG92ZXIge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjhhNzQ1O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuXG4gICY6Zm9jdXMge1xuICAgIGJveC1zaGFkb3c6IDAgMCAwIDAuMnJlbSByZ2JhKDQwLCAxNjcsIDY5LCAuNSk7XG4gICAgb3V0bGluZTogbm9uZVxuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/pages/auth/register/register.component.ts":
/*!*******************************************************!*\
  !*** ./src/pages/auth/register/register.component.ts ***!
  \*******************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(fb) {
        var _this = this;
        this.fb = fb;
        this.registerUser = function () {
            console.log(_this.registerForm.value);
        };
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.registerForm = this.fb.group({
            firstName: [''],
            lastName: [''],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8)],
            passwordConfirm: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8)],
        });
    };
    RegisterComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
    ]; };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/index.js!./src/pages/auth/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.scss */ "./src/pages/auth/register/register.component.scss")]
        })
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/pages/dashboard/dashboard.component.scss":
/*!******************************************************!*\
  !*** ./src/pages/dashboard/dashboard.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dashboard_page {\n  display: -webkit-box;\n  display: flex;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy95dXJraXd3L0Rlc2t0b3AvRmFzaGlvblN0b3JlL3NyYy9wYWdlcy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic3JjL3BhZ2VzL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxZQUFBO0FDQ0YiLCJmaWxlIjoic3JjL3BhZ2VzL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGFzaGJvYXJkX3BhZ2Uge1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDEwMCU7XG59XG4iLCIuZGFzaGJvYXJkX3BhZ2Uge1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDEwMCU7XG59Il19 */"

/***/ }),

/***/ "./src/pages/dashboard/dashboard.component.ts":
/*!****************************************************!*\
  !*** ./src/pages/dashboard/dashboard.component.ts ***!
  \****************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () { };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/index.js!./src/pages/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/pages/dashboard/dashboard.component.scss")]
        })
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/pages/new-product/new-product.component.scss":
/*!**********************************************************!*\
  !*** ./src/pages/new-product/new-product.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  margin: 30px 0 0 0;\n}\n.content .wrapper {\n  width: 95%;\n}\n.content .wrapper .price {\n  display: -webkit-box;\n  display: flex;\n}\n.content .wrapper .price-dollar {\n  width: 40px;\n  height: 40px;\n  text-align: center;\n  padding: 7px;\n  background-color: #e9ecef;\n  border: 1px solid #cdd4da;\n  border-radius: 5px 0 0 5px;\n  border-right: none;\n}\n.content .wrapper .price-input {\n  width: 100%;\n}\n.content .wrapper .price-input .input {\n  border-radius: 0 5px 5px 0;\n}\n.content .wrapper .price-input .dollar-red-border {\n  border-left: 5px solid red;\n  border-radius: 5px;\n}\n.content .wrapper .input {\n  width: 100%;\n  border: 1px solid #cdd4da;\n  border-radius: 5px;\n  height: 40px;\n  padding: 5px;\n  outline: none;\n  font-size: 14px;\n}\n.content .wrapper .input:focus::-webkit-input-placeholder {\n  color: transparent;\n}\n.content .wrapper .input:focus::-moz-placeholder {\n  color: transparent;\n}\n.content .wrapper .input:focus::-ms-input-placeholder {\n  color: transparent;\n}\n.content .wrapper .input:focus::placeholder {\n  color: transparent;\n}\n.content .wrapper .custom-file-input {\n  color: transparent;\n  outline: none;\n}\n.content .wrapper .custom-file-input::-webkit-file-upload-button {\n  visibility: hidden;\n}\n.content .wrapper .custom-file-input::before {\n  content: \"Upload\";\n  color: white;\n  display: inline-block;\n  background-color: #00b24d;\n  width: 80%;\n  text-align: center;\n  border-radius: 3px;\n  padding: 5px 8px;\n  outline: none;\n  white-space: nowrap;\n  -webkit-user-select: none;\n  cursor: pointer;\n  font-weight: 700;\n  font-size: 14px;\n}\n.content .wrapper .custom-file-input:hover::before {\n  border-color: black;\n}\n.content .wrapper .custom-file-input:active {\n  outline: 0;\n}\n.content .wrapper .custom-file-input:active::before {\n  background: -webkit-linear-gradient(top, #e3e3e3, #f9f9f9);\n}\n.content .wrapper .select {\n  height: auto;\n}\n.content .wrapper .textarea {\n  height: 200px;\n  resize: none;\n}\n.content .wrapper .btn {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n  margin: 10px 0 20px 0;\n}\n.content .wrapper .btn .save-button {\n  width: 70px;\n  height: 40px;\n  background-color: #00b24d;\n  color: #ecf9f1;\n  font-size: 15px;\n  border-radius: 5px;\n}\n.content .wrapper .red-border {\n  border-left: 5px solid red;\n  border-radius: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy95dXJraXd3L0Rlc2t0b3AvRmFzaGlvblN0b3JlL3NyYy9wYWdlcy9uZXctcHJvZHVjdC9uZXctcHJvZHVjdC5jb21wb25lbnQuc2NzcyIsInNyYy9wYWdlcy9uZXctcHJvZHVjdC9uZXctcHJvZHVjdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esa0JBQUE7QUNDRjtBRENFO0VBQ0UsVUFBQTtBQ0NKO0FEQ0k7RUFDRSxvQkFBQTtFQUFBLGFBQUE7QUNDTjtBRENNO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQkFBQTtBQ0NSO0FERU07RUFDRSxXQUFBO0FDQVI7QURFUTtFQUNFLDBCQUFBO0FDQVY7QURHUTtFQUNFLDBCQUFBO0VBQ0Esa0JBQUE7QUNEVjtBRE1JO0VBQ0UsV0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0FDSk47QURPSTtFQUNFLGtCQUFBO0FDTE47QURJSTtFQUNFLGtCQUFBO0FDTE47QURJSTtFQUNFLGtCQUFBO0FDTE47QURJSTtFQUNFLGtCQUFBO0FDTE47QURRSTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtBQ05OO0FEU0k7RUFDRSxrQkFBQTtBQ1BOO0FEVUk7RUFDRSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUVBLGdCQUFBO0VBQ0EsZUFBQTtBQ1ROO0FEWUk7RUFDRSxtQkFBQTtBQ1ZOO0FEYUk7RUFDRSxVQUFBO0FDWE47QURjSTtFQUNFLDBEQUFBO0FDWk47QURlSTtFQUNFLFlBQUE7QUNiTjtBRGdCSTtFQUNFLGFBQUE7RUFDQSxZQUFBO0FDZE47QURpQkk7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxxQkFBQTtVQUFBLHlCQUFBO0VBQ0EscUJBQUE7QUNmTjtBRGlCTTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDZlI7QURtQkk7RUFDRSwwQkFBQTtFQUNBLGtCQUFBO0FDakJOIiwiZmlsZSI6InNyYy9wYWdlcy9uZXctcHJvZHVjdC9uZXctcHJvZHVjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbjogMzBweCAwIDAgMDtcblxuICAud3JhcHBlciB7XG4gICAgd2lkdGg6IDk1JTtcblxuICAgIC5wcmljZSB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuXG4gICAgICAmLWRvbGxhciB7XG4gICAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgcGFkZGluZzogN3B4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTllY2VmO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2RkNGRhO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHggMCAwIDVweDtcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICAgICAgfVxuXG4gICAgICAmLWlucHV0IHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG5cbiAgICAgICAgLmlucHV0IHtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAwIDVweCA1cHggMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5kb2xsYXItcmVkLWJvcmRlciB7XG4gICAgICAgICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCByZWQ7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmlucHV0IHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NkZDRkYTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgIGhlaWdodDogNDBweDtcbiAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgfVxuXG4gICAgLmlucHV0OmZvY3VzOjpwbGFjZWhvbGRlciB7XG4gICAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgfVxuXG4gICAgLmN1c3RvbS1maWxlLWlucHV0IHtcbiAgICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgfVxuXG4gICAgLmN1c3RvbS1maWxlLWlucHV0Ojotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbiB7XG4gICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgfVxuXG4gICAgLmN1c3RvbS1maWxlLWlucHV0OjpiZWZvcmUge1xuICAgICAgY29udGVudDogXCJVcGxvYWRcIjtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMGIyNGQ7XG4gICAgICB3aWR0aDogODAlO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgcGFkZGluZzogNXB4IDhweDtcbiAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB9XG5cbiAgICAuY3VzdG9tLWZpbGUtaW5wdXQ6aG92ZXI6OmJlZm9yZSB7XG4gICAgICBib3JkZXItY29sb3I6IGJsYWNrO1xuICAgIH1cblxuICAgIC5jdXN0b20tZmlsZS1pbnB1dDphY3RpdmUge1xuICAgICAgb3V0bGluZTogMDtcbiAgICB9XG5cbiAgICAuY3VzdG9tLWZpbGUtaW5wdXQ6YWN0aXZlOjpiZWZvcmUge1xuICAgICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wLCAjZTNlM2UzLCAjZjlmOWY5KTtcbiAgICB9XG5cbiAgICAuc2VsZWN0IHtcbiAgICAgIGhlaWdodDogYXV0bztcbiAgICB9XG5cbiAgICAudGV4dGFyZWEge1xuICAgICAgaGVpZ2h0OiAyMDBweDtcbiAgICAgIHJlc2l6ZTogbm9uZTtcbiAgICB9XG5cbiAgICAuYnRuIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgbWFyZ2luOiAxMHB4IDAgMjBweCAwO1xuXG4gICAgICAuc2F2ZS1idXR0b24ge1xuICAgICAgICB3aWR0aDogNzBweDtcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBiMjRkO1xuICAgICAgICBjb2xvcjogI2VjZjlmMTtcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnJlZC1ib3JkZXIge1xuICAgICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCByZWQ7XG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgfVxuXG4gIH1cbn1cbiIsIi5jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbjogMzBweCAwIDAgMDtcbn1cbi5jb250ZW50IC53cmFwcGVyIHtcbiAgd2lkdGg6IDk1JTtcbn1cbi5jb250ZW50IC53cmFwcGVyIC5wcmljZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uY29udGVudCAud3JhcHBlciAucHJpY2UtZG9sbGFyIHtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiA3cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlOWVjZWY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjZGQ0ZGE7XG4gIGJvcmRlci1yYWRpdXM6IDVweCAwIDAgNXB4O1xuICBib3JkZXItcmlnaHQ6IG5vbmU7XG59XG4uY29udGVudCAud3JhcHBlciAucHJpY2UtaW5wdXQge1xuICB3aWR0aDogMTAwJTtcbn1cbi5jb250ZW50IC53cmFwcGVyIC5wcmljZS1pbnB1dCAuaW5wdXQge1xuICBib3JkZXItcmFkaXVzOiAwIDVweCA1cHggMDtcbn1cbi5jb250ZW50IC53cmFwcGVyIC5wcmljZS1pbnB1dCAuZG9sbGFyLXJlZC1ib3JkZXIge1xuICBib3JkZXItbGVmdDogNXB4IHNvbGlkIHJlZDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuLmNvbnRlbnQgLndyYXBwZXIgLmlucHV0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjZGQ0ZGE7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBwYWRkaW5nOiA1cHg7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5jb250ZW50IC53cmFwcGVyIC5pbnB1dDpmb2N1czo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogdHJhbnNwYXJlbnQ7XG59XG4uY29udGVudCAud3JhcHBlciAuY3VzdG9tLWZpbGUtaW5wdXQge1xuICBjb2xvcjogdHJhbnNwYXJlbnQ7XG4gIG91dGxpbmU6IG5vbmU7XG59XG4uY29udGVudCAud3JhcHBlciAuY3VzdG9tLWZpbGUtaW5wdXQ6Oi13ZWJraXQtZmlsZS11cGxvYWQtYnV0dG9uIHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuLmNvbnRlbnQgLndyYXBwZXIgLmN1c3RvbS1maWxlLWlucHV0OjpiZWZvcmUge1xuICBjb250ZW50OiBcIlVwbG9hZFwiO1xuICBjb2xvcjogd2hpdGU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwYjI0ZDtcbiAgd2lkdGg6IDgwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIHBhZGRpbmc6IDVweCA4cHg7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLmNvbnRlbnQgLndyYXBwZXIgLmN1c3RvbS1maWxlLWlucHV0OmhvdmVyOjpiZWZvcmUge1xuICBib3JkZXItY29sb3I6IGJsYWNrO1xufVxuLmNvbnRlbnQgLndyYXBwZXIgLmN1c3RvbS1maWxlLWlucHV0OmFjdGl2ZSB7XG4gIG91dGxpbmU6IDA7XG59XG4uY29udGVudCAud3JhcHBlciAuY3VzdG9tLWZpbGUtaW5wdXQ6YWN0aXZlOjpiZWZvcmUge1xuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AsICNlM2UzZTMsICNmOWY5ZjkpO1xufVxuLmNvbnRlbnQgLndyYXBwZXIgLnNlbGVjdCB7XG4gIGhlaWdodDogYXV0bztcbn1cbi5jb250ZW50IC53cmFwcGVyIC50ZXh0YXJlYSB7XG4gIGhlaWdodDogMjAwcHg7XG4gIHJlc2l6ZTogbm9uZTtcbn1cbi5jb250ZW50IC53cmFwcGVyIC5idG4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBtYXJnaW46IDEwcHggMCAyMHB4IDA7XG59XG4uY29udGVudCAud3JhcHBlciAuYnRuIC5zYXZlLWJ1dHRvbiB7XG4gIHdpZHRoOiA3MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMGIyNGQ7XG4gIGNvbG9yOiAjZWNmOWYxO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbi5jb250ZW50IC53cmFwcGVyIC5yZWQtYm9yZGVyIHtcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCByZWQ7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/pages/new-product/new-product.component.ts":
/*!********************************************************!*\
  !*** ./src/pages/new-product/new-product.component.ts ***!
  \********************************************************/
/*! exports provided: NewProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewProductComponent", function() { return NewProductComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var NewProductComponent = /** @class */ (function () {
    function NewProductComponent() {
        var _this = this;
        this.urls = new Array();
        this.isFieldValid = function (filedName) {
            return _this.form.get(filedName).invalid && _this.form.get(filedName).touched;
        };
    }
    NewProductComponent.prototype.detectFiles = function (event) {
        var _this = this;
        var e_1, _a;
        this.urls = [];
        var files = event.target.files;
        if (files) {
            try {
                for (var files_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](files), files_1_1 = files_1.next(); !files_1_1.done; files_1_1 = files_1.next()) {
                    var file = files_1_1.value;
                    var reader = new FileReader();
                    reader.onload = function (e) {
                        _this.urls.push(e.target.result);
                    };
                    reader.readAsDataURL(file);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (files_1_1 && !files_1_1.done && (_a = files_1.return)) _a.call(files_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
    };
    NewProductComponent.prototype.ngOnInit = function () {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            productName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            price: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            brandName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            images: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            sizes: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            colors: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
    };
    NewProductComponent.prototype.onSubmit = function () {
        console.log('Submitted', this.form);
    };
    NewProductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-new-product',
            template: __webpack_require__(/*! raw-loader!./new-product.component.html */ "./node_modules/raw-loader/index.js!./src/pages/new-product/new-product.component.html"),
            styles: [__webpack_require__(/*! ./new-product.component.scss */ "./src/pages/new-product/new-product.component.scss")]
        })
    ], NewProductComponent);
    return NewProductComponent;
}());



/***/ }),

/***/ "./src/pages/product-detail/product-detail.component.scss":
/*!****************************************************************!*\
  !*** ./src/pages/product-detail/product-detail.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvcGFnZXMvcHJvZHVjdC1kZXRhaWwvcHJvZHVjdC1kZXRhaWwuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/pages/product-detail/product-detail.component.ts":
/*!**************************************************************!*\
  !*** ./src/pages/product-detail/product-detail.component.ts ***!
  \**************************************************************/
/*! exports provided: ProductDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailComponent", function() { return ProductDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProductDetailComponent = /** @class */ (function () {
    function ProductDetailComponent() {
    }
    ProductDetailComponent.prototype.ngOnInit = function () {
    };
    ProductDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product-detail',
            template: __webpack_require__(/*! raw-loader!./product-detail.component.html */ "./node_modules/raw-loader/index.js!./src/pages/product-detail/product-detail.component.html"),
            styles: [__webpack_require__(/*! ./product-detail.component.scss */ "./src/pages/product-detail/product-detail.component.scss")]
        })
    ], ProductDetailComponent);
    return ProductDetailComponent;
}());



/***/ }),

/***/ "./src/pages/product-info/product-info.component.scss":
/*!************************************************************!*\
  !*** ./src/pages/product-info/product-info.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content {\n  display: -webkit-box;\n  display: flex;\n}\n.content .product-image {\n  width: 45%;\n}\n.content .product-image .image-wrap .img {\n  width: 100%;\n  height: 100%;\n}\n.content .product-info {\n  width: 50%;\n  margin: 20px 0 0 0;\n}\n.content .product-info .brand {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n.content .product-info .brand .brand-name {\n  font-size: 40px;\n}\n.content .product-info .brand .brand-logo {\n  margin: 10px 0 0 0;\n  width: 75px;\n}\n.content .product-info .brand .brand-logo .levis-image {\n  width: 100%;\n  align-self: flex-end;\n}\n.content .product-info .item-description {\n  font-size: 22px;\n}\n.content .product-info .pricing {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  margin: 30px 0 0 0;\n}\n.content .product-info .pricing .price {\n  color: #DC9E76;\n  font-weight: bold;\n  font-size: 35px;\n}\n.content .product-info .pricing .free-shipping {\n  height: 20px;\n  margin: 10px 0 0 0;\n  border-bottom: 1px dotted #333333;\n  color: #333333;\n}\n.content .product-info .sizing {\n  border-top: 1px solid #EDEDED;\n  margin: 10px 0 0 0;\n}\n.content .product-info .sizing .size-table {\n  margin: 20px 0 0 0;\n}\n.content .product-info .sizing .size-table .size-table-link {\n  color: #222222;\n}\n.content .product-info .sizing .button-block {\n  display: -webkit-box;\n  display: flex;\n  padding: 25px 0 25px 0;\n}\n.content .product-info .sizing .button-block .select-size {\n  width: 40%;\n  margin: 0 10px 0 0;\n}\n.content .product-info .sizing .button-block .select-size-slc {\n  width: 100%;\n  height: 50px;\n  border: 1px solid black;\n  border-radius: 0;\n  font-size: 14px;\n}\n.content .product-info .sizing .button-block .add-to-cart {\n  width: 45%;\n}\n.content .product-info .sizing .button-block .add-to-cart-btn {\n  width: 100%;\n  height: 50px;\n  color: white;\n  background-color: #DC9E76;\n  font-weight: bold;\n  font-size: 14px;\n}\n.content .product-info .shipping {\n  display: -webkit-box;\n  display: flex;\n  border-top: 1px solid #EDEDED;\n  border-bottom: 1px solid #EDEDED;\n}\n.content .product-info .shipping .shipping-info {\n  display: -webkit-box;\n  display: flex;\n  border-right: 1px solid #EDEDED;\n  padding: 10px 5px 10px 0;\n}\n.content .product-info .shipping .shipping-info .shipping-info-text {\n  margin: 15px 0 0 10px;\n  font-size: 13px;\n}\n.content .product-info .shipping .exchange-info {\n  display: -webkit-box;\n  display: flex;\n  padding: 10px 0 10px 5px;\n}\n.content .product-info .shipping .exchange-info .exchange-info-text {\n  margin: 15px 0 0 10px;\n  font-size: 13px;\n}\n.content .product-info .official-stores-info {\n  padding: 30px 0 30px 0;\n  border-bottom: 1px solid #EDEDED;\n}\n.content .product-info .official-stores-info .official-stores-info-tittle {\n  text-align: center;\n  color: #DC9E76;\n}\n.content .product-info .official-stores-info .official-stores-info-description {\n  text-align: center;\n}\n@media screen and (max-width: 768px) {\n  .content {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n    -webkit-box-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n            align-items: center;\n  }\n  .content .product-image {\n    width: 90%;\n  }\n  .content .product-info {\n    width: 90%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy95dXJraXd3L0Rlc2t0b3AvRmFzaGlvblN0b3JlL3NyYy9wYWdlcy9wcm9kdWN0LWluZm8vcHJvZHVjdC1pbmZvLmNvbXBvbmVudC5zY3NzIiwic3JjL3BhZ2VzL3Byb2R1Y3QtaW5mby9wcm9kdWN0LWluZm8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBQTtFQUFBLGFBQUE7QUNDRjtBREdFO0VBQ0UsVUFBQTtBQ0RKO0FES007RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQ0hSO0FEUUU7RUFDRSxVQUFBO0VBQ0Esa0JBQUE7QUNOSjtBRFFJO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSw4QkFBQTtBQ05OO0FEUU07RUFDRSxlQUFBO0FDTlI7QURTTTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtBQ1BSO0FEU1E7RUFDRSxXQUFBO0VBQ0Esb0JBQUE7QUNQVjtBRFlJO0VBQ0UsZUFBQTtBQ1ZOO0FEYUk7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLDhCQUFBO0VBQ0Esa0JBQUE7QUNYTjtBRGFNO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQ1hSO0FEY007RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQ0FBQTtFQUNBLGNBQUE7QUNaUjtBRGdCSTtFQUNFLDZCQUFBO0VBRUEsa0JBQUE7QUNmTjtBRGlCTTtFQUNFLGtCQUFBO0FDZlI7QURpQlE7RUFFRSxjQUFBO0FDaEJWO0FEc0JNO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0Esc0JBQUE7QUNwQlI7QURzQlE7RUFDRSxVQUFBO0VBQ0Esa0JBQUE7QUNwQlY7QURzQlU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFFQSxlQUFBO0FDckJaO0FENEJRO0VBQ0UsVUFBQTtBQzFCVjtBRDRCVTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDMUJaO0FEZ0NJO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQ0FBQTtBQzlCTjtBRGlDTTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLCtCQUFBO0VBQ0Esd0JBQUE7QUMvQlI7QURtQ1E7RUFDRSxxQkFBQTtFQUNBLGVBQUE7QUNqQ1Y7QURxQ007RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtBQ25DUjtBRHVDUTtFQUNFLHFCQUFBO0VBQ0EsZUFBQTtBQ3JDVjtBRDBDSTtFQUNFLHNCQUFBO0VBQ0EsZ0NBQUE7QUN4Q047QUQ0Q007RUFDRSxrQkFBQTtFQUNBLGNBQUE7QUMxQ1I7QUQ2Q007RUFDRSxrQkFBQTtBQzNDUjtBRG9EQTtFQUNFO0lBRUUsb0JBQUE7SUFBQSxhQUFBO0lBQ0EsNEJBQUE7SUFBQSw2QkFBQTtZQUFBLHNCQUFBO0lBQ0Esd0JBQUE7WUFBQSx1QkFBQTtJQUNBLHlCQUFBO1lBQUEsbUJBQUE7RUNsREY7RURvREU7SUFDRSxVQUFBO0VDbERKO0VEcURFO0lBQ0UsVUFBQTtFQ25ESjtBQUNGIiwiZmlsZSI6InNyYy9wYWdlcy9wcm9kdWN0LWluZm8vcHJvZHVjdC1pbmZvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuXG5cblxuICAucHJvZHVjdC1pbWFnZSB7XG4gICAgd2lkdGg6IDQ1JTtcblxuICAgIC5pbWFnZS13cmFwIHtcblxuICAgICAgLmltZyB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLnByb2R1Y3QtaW5mbyB7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBtYXJnaW46IDIwcHggMCAwIDA7XG5cbiAgICAuYnJhbmQge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcblxuICAgICAgLmJyYW5kLW5hbWUge1xuICAgICAgICBmb250LXNpemU6IDQwcHg7XG4gICAgICB9XG5cbiAgICAgIC5icmFuZC1sb2dvIHtcbiAgICAgICAgbWFyZ2luOiAxMHB4IDAgMCAwO1xuICAgICAgICB3aWR0aDogNzVweDtcblxuICAgICAgICAubGV2aXMtaW1hZ2Uge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLml0ZW0tZGVzY3JpcHRpb24ge1xuICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgIH1cblxuICAgIC5wcmljaW5nIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICBtYXJnaW46IDMwcHggMCAwIDA7XG5cbiAgICAgIC5wcmljZSB7XG4gICAgICAgIGNvbG9yOiAjREM5RTc2O1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgZm9udC1zaXplOiAzNXB4O1xuICAgICAgfVxuXG4gICAgICAuZnJlZS1zaGlwcGluZyB7XG4gICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgbWFyZ2luOiAxMHB4IDAgMCAwO1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggZG90dGVkICMzMzMzMzM7XG4gICAgICAgIGNvbG9yOiAjMzMzMzMzO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5zaXppbmcge1xuICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNFREVERUQ7XG5cbiAgICAgIG1hcmdpbjogMTBweCAwIDAgMDtcblxuICAgICAgLnNpemUtdGFibGUge1xuICAgICAgICBtYXJnaW46IDIwcHggMCAwIDA7XG5cbiAgICAgICAgLnNpemUtdGFibGUtbGluayB7XG5cbiAgICAgICAgICBjb2xvcjogIzIyMjIyMjtcbiAgICAgICAgfVxuXG4gICAgICB9XG5cblxuICAgICAgLmJ1dHRvbi1ibG9jayB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIHBhZGRpbmc6IDI1cHggMCAyNXB4IDA7XG5cbiAgICAgICAgLnNlbGVjdC1zaXplIHtcbiAgICAgICAgICB3aWR0aDogNDAlO1xuICAgICAgICAgIG1hcmdpbjogMCAxMHB4IDAgMDtcblxuICAgICAgICAgICYtc2xjIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xuXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG5cblxuXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLmFkZC10by1jYXJ0IHtcbiAgICAgICAgICB3aWR0aDogNDUlO1xuXG4gICAgICAgICAgJi1idG4ge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjREM5RTc2O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnNoaXBwaW5nIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI0VERURFRDtcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRURFREVEO1xuXG5cbiAgICAgIC5zaGlwcGluZy1pbmZvIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI0VERURFRDtcbiAgICAgICAgcGFkZGluZzogMTBweCA1cHggMTBweCAwO1xuXG4gICAgICAgIC5zaGlwcGluZy1pbmZvLWltYWdlIHt9XG5cbiAgICAgICAgLnNoaXBwaW5nLWluZm8tdGV4dCB7XG4gICAgICAgICAgbWFyZ2luOiAxNXB4IDAgMCAxMHB4O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAuZXhjaGFuZ2UtaW5mbyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIHBhZGRpbmc6IDEwcHggMCAxMHB4IDVweDtcblxuICAgICAgICAuZXhjaGFuZ2UtaW5mby1pbWFnZSB7fVxuXG4gICAgICAgIC5leGNoYW5nZS1pbmZvLXRleHQge1xuICAgICAgICAgIG1hcmdpbjogMTVweCAwIDAgMTBweDtcbiAgICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAub2ZmaWNpYWwtc3RvcmVzLWluZm8ge1xuICAgICAgcGFkZGluZzogMzBweCAwIDMwcHggMDtcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRURFREVEO1xuXG5cblxuICAgICAgLm9mZmljaWFsLXN0b3Jlcy1pbmZvLXRpdHRsZSB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgY29sb3I6ICNEQzlFNzY7XG4gICAgICB9XG5cbiAgICAgIC5vZmZpY2lhbC1zdG9yZXMtaW5mby1kZXNjcmlwdGlvbiB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgICAgfVxuICAgIH1cblxuXG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo3NjhweCkge1xuICAuY29udGVudCB7XG5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgIC5wcm9kdWN0LWltYWdlIHtcbiAgICAgIHdpZHRoOiA5MCU7XG4gICAgfVxuXG4gICAgLnByb2R1Y3QtaW5mbyB7XG4gICAgICB3aWR0aDogOTAlO1xuICAgIH1cbiAgfVxufVxuIiwiLmNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmNvbnRlbnQgLnByb2R1Y3QtaW1hZ2Uge1xuICB3aWR0aDogNDUlO1xufVxuLmNvbnRlbnQgLnByb2R1Y3QtaW1hZ2UgLmltYWdlLXdyYXAgLmltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uY29udGVudCAucHJvZHVjdC1pbmZvIHtcbiAgd2lkdGg6IDUwJTtcbiAgbWFyZ2luOiAyMHB4IDAgMCAwO1xufVxuLmNvbnRlbnQgLnByb2R1Y3QtaW5mbyAuYnJhbmQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4uY29udGVudCAucHJvZHVjdC1pbmZvIC5icmFuZCAuYnJhbmQtbmFtZSB7XG4gIGZvbnQtc2l6ZTogNDBweDtcbn1cbi5jb250ZW50IC5wcm9kdWN0LWluZm8gLmJyYW5kIC5icmFuZC1sb2dvIHtcbiAgbWFyZ2luOiAxMHB4IDAgMCAwO1xuICB3aWR0aDogNzVweDtcbn1cbi5jb250ZW50IC5wcm9kdWN0LWluZm8gLmJyYW5kIC5icmFuZC1sb2dvIC5sZXZpcy1pbWFnZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcbn1cbi5jb250ZW50IC5wcm9kdWN0LWluZm8gLml0ZW0tZGVzY3JpcHRpb24ge1xuICBmb250LXNpemU6IDIycHg7XG59XG4uY29udGVudCAucHJvZHVjdC1pbmZvIC5wcmljaW5nIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXJnaW46IDMwcHggMCAwIDA7XG59XG4uY29udGVudCAucHJvZHVjdC1pbmZvIC5wcmljaW5nIC5wcmljZSB7XG4gIGNvbG9yOiAjREM5RTc2O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAzNXB4O1xufVxuLmNvbnRlbnQgLnByb2R1Y3QtaW5mbyAucHJpY2luZyAuZnJlZS1zaGlwcGluZyB7XG4gIGhlaWdodDogMjBweDtcbiAgbWFyZ2luOiAxMHB4IDAgMCAwO1xuICBib3JkZXItYm90dG9tOiAxcHggZG90dGVkICMzMzMzMzM7XG4gIGNvbG9yOiAjMzMzMzMzO1xufVxuLmNvbnRlbnQgLnByb2R1Y3QtaW5mbyAuc2l6aW5nIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNFREVERUQ7XG4gIG1hcmdpbjogMTBweCAwIDAgMDtcbn1cbi5jb250ZW50IC5wcm9kdWN0LWluZm8gLnNpemluZyAuc2l6ZS10YWJsZSB7XG4gIG1hcmdpbjogMjBweCAwIDAgMDtcbn1cbi5jb250ZW50IC5wcm9kdWN0LWluZm8gLnNpemluZyAuc2l6ZS10YWJsZSAuc2l6ZS10YWJsZS1saW5rIHtcbiAgY29sb3I6ICMyMjIyMjI7XG59XG4uY29udGVudCAucHJvZHVjdC1pbmZvIC5zaXppbmcgLmJ1dHRvbi1ibG9jayB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmc6IDI1cHggMCAyNXB4IDA7XG59XG4uY29udGVudCAucHJvZHVjdC1pbmZvIC5zaXppbmcgLmJ1dHRvbi1ibG9jayAuc2VsZWN0LXNpemUge1xuICB3aWR0aDogNDAlO1xuICBtYXJnaW46IDAgMTBweCAwIDA7XG59XG4uY29udGVudCAucHJvZHVjdC1pbmZvIC5zaXppbmcgLmJ1dHRvbi1ibG9jayAuc2VsZWN0LXNpemUtc2xjIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5jb250ZW50IC5wcm9kdWN0LWluZm8gLnNpemluZyAuYnV0dG9uLWJsb2NrIC5hZGQtdG8tY2FydCB7XG4gIHdpZHRoOiA0NSU7XG59XG4uY29udGVudCAucHJvZHVjdC1pbmZvIC5zaXppbmcgLmJ1dHRvbi1ibG9jayAuYWRkLXRvLWNhcnQtYnRuIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTBweDtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjREM5RTc2O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLmNvbnRlbnQgLnByb2R1Y3QtaW5mbyAuc2hpcHBpbmcge1xuICBkaXNwbGF5OiBmbGV4O1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI0VERURFRDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNFREVERUQ7XG59XG4uY29udGVudCAucHJvZHVjdC1pbmZvIC5zaGlwcGluZyAuc2hpcHBpbmctaW5mbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNFREVERUQ7XG4gIHBhZGRpbmc6IDEwcHggNXB4IDEwcHggMDtcbn1cbi5jb250ZW50IC5wcm9kdWN0LWluZm8gLnNoaXBwaW5nIC5zaGlwcGluZy1pbmZvIC5zaGlwcGluZy1pbmZvLXRleHQge1xuICBtYXJnaW46IDE1cHggMCAwIDEwcHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cbi5jb250ZW50IC5wcm9kdWN0LWluZm8gLnNoaXBwaW5nIC5leGNoYW5nZS1pbmZvIHtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZzogMTBweCAwIDEwcHggNXB4O1xufVxuLmNvbnRlbnQgLnByb2R1Y3QtaW5mbyAuc2hpcHBpbmcgLmV4Y2hhbmdlLWluZm8gLmV4Y2hhbmdlLWluZm8tdGV4dCB7XG4gIG1hcmdpbjogMTVweCAwIDAgMTBweDtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuLmNvbnRlbnQgLnByb2R1Y3QtaW5mbyAub2ZmaWNpYWwtc3RvcmVzLWluZm8ge1xuICBwYWRkaW5nOiAzMHB4IDAgMzBweCAwO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0VERURFRDtcbn1cbi5jb250ZW50IC5wcm9kdWN0LWluZm8gLm9mZmljaWFsLXN0b3Jlcy1pbmZvIC5vZmZpY2lhbC1zdG9yZXMtaW5mby10aXR0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjREM5RTc2O1xufVxuLmNvbnRlbnQgLnByb2R1Y3QtaW5mbyAub2ZmaWNpYWwtc3RvcmVzLWluZm8gLm9mZmljaWFsLXN0b3Jlcy1pbmZvLWRlc2NyaXB0aW9uIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuY29udGVudCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cbiAgLmNvbnRlbnQgLnByb2R1Y3QtaW1hZ2Uge1xuICAgIHdpZHRoOiA5MCU7XG4gIH1cbiAgLmNvbnRlbnQgLnByb2R1Y3QtaW5mbyB7XG4gICAgd2lkdGg6IDkwJTtcbiAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/pages/product-info/product-info.component.ts":
/*!**********************************************************!*\
  !*** ./src/pages/product-info/product-info.component.ts ***!
  \**********************************************************/
/*! exports provided: ProductInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductInfoComponent", function() { return ProductInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProductInfoComponent = /** @class */ (function () {
    function ProductInfoComponent() {
    }
    ProductInfoComponent.prototype.ngOnInit = function () {
    };
    ProductInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product-info',
            template: __webpack_require__(/*! raw-loader!./product-info.component.html */ "./node_modules/raw-loader/index.js!./src/pages/product-info/product-info.component.html"),
            styles: [__webpack_require__(/*! ./product-info.component.scss */ "./src/pages/product-info/product-info.component.scss")]
        })
    ], ProductInfoComponent);
    return ProductInfoComponent;
}());



/***/ }),

/***/ "./src/pages/products/products.component.scss":
/*!****************************************************!*\
  !*** ./src/pages/products/products.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".product__list {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-around;\n  padding: 10px 10px;\n}\n\n.product__add-item-btn {\n  position: absolute;\n}\n\nhr {\n  margin-top: 30px;\n}\n\n.product__search {\n  padding: 0px 10px;\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n}\n\nhr {\n  margin-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy95dXJraXd3L0Rlc2t0b3AvRmFzaGlvblN0b3JlL3NyYy9wYWdlcy9wcm9kdWN0cy9wcm9kdWN0cy5jb21wb25lbnQuc2NzcyIsInNyYy9wYWdlcy9wcm9kdWN0cy9wcm9kdWN0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLGVBQUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBO0FDREY7O0FESUE7RUFDRSxrQkFBQTtBQ0RGOztBRElBO0VBQ0UsZ0JBQUE7QUNERjs7QURJQTtFQUNFLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHFCQUFBO1VBQUEseUJBQUE7QUNERjs7QURJQTtFQUNFLGdCQUFBO0FDREYiLCJmaWxlIjoic3JjL3BhZ2VzL3Byb2R1Y3RzL3Byb2R1Y3RzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi9zcmMvc3R5bGVzL2NvbG9ycy9jb2xvcnMuc2Nzcyc7XG5cbi5wcm9kdWN0X19saXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgcGFkZGluZzogMTBweCAxMHB4O1xufVxuXG4ucHJvZHVjdF9fYWRkLWl0ZW0tYnRuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG5ociB7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG59XG5cbi5wcm9kdWN0X19zZWFyY2gge1xuICBwYWRkaW5nOiAwcHggMTBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG5cbmhyIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbiIsIi5wcm9kdWN0X19saXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgcGFkZGluZzogMTBweCAxMHB4O1xufVxuXG4ucHJvZHVjdF9fYWRkLWl0ZW0tYnRuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG5ociB7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG59XG5cbi5wcm9kdWN0X19zZWFyY2gge1xuICBwYWRkaW5nOiAwcHggMTBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG5cbmhyIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/pages/products/products.component.ts":
/*!**************************************************!*\
  !*** ./src/pages/products/products.component.ts ***!
  \**************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProductsComponent = /** @class */ (function () {
    function ProductsComponent() {
        this.productItems = [
            {
                name: 'Harvard',
                description: 'Men Slim Fit Casual Shirt',
                size: ['S', 'M', 'L'],
                price: 1999,
                discount: 30,
                reducedPrice: 1399,
                img: 'https://5.imimg.com/data5/ST/PE/MY-47609367/stylish-slim-fit-casual-shirt-500x500.jpg'
            },
            {
                name: 'Oxford',
                description: 'Men Slim Fit Casual Shirt',
                size: ['S', 'L'],
                price: 1999,
                discount: 50,
                reducedPrice: 999,
                img: 'https://s3-us-west-2.amazonaws.com/ebay94582/ebt/images/YW92993/5.jpg'
            },
            {
                name: 'TOMMY HILFIGER',
                description: 'Men Analogue Watch',
                size: ['S'],
                price: 7250,
                discount: 50,
                reducedPrice: 3625,
                img: 'https://www.brandfield.com/media/catalog/product/cache/image/9df78eab33525d08d6e5fb8d27136e95/t/h/th1791464.jpg'
            },
            {
                name: 'PANIT',
                description: 'Women Regular Trousers',
                size: ['S', 'M', 'L'],
                price: 1399,
                discount: 60,
                reducedPrice: 559,
                img: 'https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/6993400/2018/7/30/b3d5f951-1149-4217-81a9-f50cb646fa3f1532928738800-PANIT-Women-Trousers-6611532928738642-1.jpg'
            }
        ];
    }
    ProductsComponent.prototype.onPageChanged = function (e) {
        console.log(e);
    };
    ProductsComponent.prototype.ngOnInit = function () { };
    ProductsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-products',
            template: __webpack_require__(/*! raw-loader!./products.component.html */ "./node_modules/raw-loader/index.js!./src/pages/products/products.component.html"),
            styles: [__webpack_require__(/*! ./products.component.scss */ "./src/pages/products/products.component.scss")]
        })
    ], ProductsComponent);
    return ProductsComponent;
}());



/***/ }),

/***/ "./src/services/account-settings.service.ts":
/*!**************************************************!*\
  !*** ./src/services/account-settings.service.ts ***!
  \**************************************************/
/*! exports provided: AccountSettingsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountSettingsService", function() { return AccountSettingsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




var AccountSettingsService = /** @class */ (function () {
    function AccountSettingsService(http) {
        this.http = http;
        this.API_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].USER_URL;
    }
    AccountSettingsService.prototype.getUsers = function (param) {
        return this.http.get(this.API_URL + "/users", {
            params: param
        });
    };
    AccountSettingsService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    AccountSettingsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], AccountSettingsService);
    return AccountSettingsService;
}());



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/yurkiww/Desktop/FashionStore/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map