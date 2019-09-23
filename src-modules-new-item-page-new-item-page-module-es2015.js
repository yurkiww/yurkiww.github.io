(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-modules-new-item-page-new-item-page-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/pages/products/new-item-page/new-item-page.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/pages/products/new-item-page/new-item-page.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <form class=\"container_form\" [formGroup]=\"newItemForm\">\n    <div class=\"container_form_head\">\n      <h2>New Item</h2>\n      <button type=\"button\" class=\"btn dark\" routerLink=\"//products\">\n        Back\n      </button>\n    </div>\n    <div class=\"container_form_upper\">\n      <div class=\"container_form_right\">\n        <div class=\"container_form__item\">\n          Name:\n          <input formControlName=\"name\" type=\"text\" placeholder=\"Name\" class=\"container_form__item-control\" [ngClass]=\"{\n              'red-border': isFieldValid('name')\n            }\" />\n        </div>\n        <div class=\"container_form__item\">\n          Brand name:\n          <input formControlName=\"brandName\" type=\"text\" placeholder=\"Brand name\" class=\"container_form__item-control\"\n            [ngClass]=\"{\n              'red-border': isFieldValid('brandName')\n            }\" />\n        </div>\n        <div class=\"container_form__item\">\n          Price:\n          <input formControlName=\"price\" type=\"number\" placeholder=\"Price\" class=\"container_form__item-control\"\n            [ngClass]=\"{\n              'red-border': isFieldValid('price')\n            }\" />\n        </div>\n        <div class=\"container_form__item\">\n          Cloth:\n          <select formControlName=\"cloth\" class=\"container_form__item-control\" [ngClass]=\"{\n              'red-border': isFieldValid('cloth')\n            }\">\n            <option value=\"cotton\">Cotton</option>\n            <option value=\"wool\">Wool</option>\n            <option value=\"silk\">Silk</option>\n            <option value=\"synthetic\">Synthetic</option>\n          </select>\n          <br />\n        </div>\n      </div>\n      <div class=\"container_form_left\">\n        <div class=\"container_form__item\">\n          Available sizes:\n          <select multiple formControlName=\"sizes\" class=\"container_form__item-control\" [ngClass]=\"{\n              'red-border': isFieldValid('sizes')\n            }\" size=\"3\">\n            <option value=\"XS\">XS</option>\n            <option value=\"S\">S</option>\n            <option value=\"M\">M</option>\n            <option value=\"L\">L</option>\n            <option value=\"XL\">XL</option>\n          </select>\n        </div>\n        <div class=\"container_form__item\">\n          Available colors:\n          <select multiple formControlName=\"colors\" class=\"container_form__item-control\" [ngClass]=\"{\n              'red-border': isFieldValid('colors')\n            }\" size=\"2\">\n            <option value=\"White\">White</option>\n            <option value=\"Green\">Green</option>\n            <option value=\"Yellow\">Yellow</option>\n            <option value=\"Gray\">Gray</option>\n          </select>\n        </div>\n        <div class=\"container_form__item\">\n          Description:\n          <textarea formControlName=\"description\" class=\"container_form__item-control\" [ngClass]=\"{\n              'red-border': isFieldValid('description')\n            }\"></textarea>\n        </div>\n      </div>\n    </div>\n    <div class=\"container_form_footer\">\n      <div>\n        Please load images: <br />\n        <input formControlName=\"img\" type=\"file\" class=\"container_form__item-control\" style=\"line-height: 0.5;\"\n          value=\"Choose file\" [ngClass]=\"{\n            'red-border': isFieldValid('img')\n          }\" />\n      </div>\n      <div>\n        <p>OR</p>\n      </div>\n      <div>\n        Set link for picture\n        <input formControlName=\"img\" type=\"text\" class=\"container_form__item-control\" [ngClass]=\"{\n            'red-border': isFieldValid('img')\n          }\" />\n      </div>\n    </div>\n    <div style=\"display: flex; justify-content: flex-end\">\n      <button (click)=\"addItem()\" type=\"button\" class=\"btn success\" [disabled]=\"newItemForm.invalid\">\n        Save\n      </button>\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/modules/new-item-page/new-item-page.module.ts":
/*!***********************************************************!*\
  !*** ./src/modules/new-item-page/new-item-page.module.ts ***!
  \***********************************************************/
/*! exports provided: NewItemPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewItemPageModule", function() { return NewItemPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var src_pages_products_new_item_page_new_item_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/pages/products/new-item-page/new-item-page.component */ "./src/pages/products/new-item-page/new-item-page.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");






const routes = [
    {
        path: '',
        component: src_pages_products_new_item_page_new_item_page_component__WEBPACK_IMPORTED_MODULE_3__["NewItemPageComponent"],
    },
];
let NewItemPageModule = class NewItemPageModule {
};
NewItemPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [src_pages_products_new_item_page_new_item_page_component__WEBPACK_IMPORTED_MODULE_3__["NewItemPageComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]],
        exports: [src_pages_products_new_item_page_new_item_page_component__WEBPACK_IMPORTED_MODULE_3__["NewItemPageComponent"]],
        providers: [],
    })
], NewItemPageModule);



/***/ }),

/***/ "./src/pages/products/new-item-page/new-item-page.component.scss":
/*!***********************************************************************!*\
  !*** ./src/pages/products/new-item-page/new-item-page.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  width: 100%;\n  height: 100%;\n  padding: 0 3vw;\n}\n.container_form {\n  width: 100%;\n  height: 60vh;\n}\n.container_form_upper {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n.container_form_right, .container_form_left {\n  width: 35vw;\n}\n.container_form_head {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n.container_form_footer {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n.container_form_footer div {\n  width: 20vw;\n}\n.container_form_footer div p {\n  padding: 4vh 9vw;\n  font-size: 20px;\n}\n.container_form__item {\n  margin-bottom: 1rem;\n}\n.container_form__item-control {\n  display: block;\n  width: 100%;\n  padding: 0.375rem 0.75rem;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #495057;\n  background-color: white;\n  background-clip: padding-box;\n  border: 1px solid #ced4da;\n  border-radius: 0.25rem;\n  -webkit-transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n.container_form textarea {\n  resize: none;\n  height: 64.5px;\n}\n.container_form p {\n  display: block;\n}\n.btn {\n  display: inline-block;\n  font-weight: 400;\n  color: #212529;\n  text-align: center;\n  vertical-align: middle;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  background-color: transparent;\n  border: 1px solid transparent;\n  padding: 0.375rem 0.75rem;\n  font-size: 1rem;\n  line-height: 1.5;\n  border-radius: 0.25rem;\n  -webkit-transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  margin-top: 0.25rem;\n}\n.btn:disabled {\n  opacity: 0.5;\n}\n.success {\n  color: #28a745;\n  border-color: #28a745;\n}\n.success:hover {\n  color: white;\n  background-color: #28a745;\n  cursor: pointer;\n}\n.success:focus {\n  box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.5);\n  outline: none;\n}\n.dark {\n  color: #343a40;\n  border-color: #343a40;\n}\n.dark:hover {\n  color: #fff;\n  background-color: #343a40;\n  cursor: pointer;\n}\n.dark:focus {\n  outline: none;\n  box-shadow: 0 0 0 0.2rem rgba(52, 58, 64, 0.5);\n}\n.red-border {\n  border-left: 7px solid #bd3939;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy95dXJraXd3L0Rlc2t0b3AvRmFzaGlvblN0b3JlL3NyYy9wYWdlcy9wcm9kdWN0cy9uZXctaXRlbS1wYWdlL25ldy1pdGVtLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzcmMvcGFnZXMvcHJvZHVjdHMvbmV3LWl0ZW0tcGFnZS9uZXctaXRlbS1wYWdlLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL3l1cmtpd3cvRGVza3RvcC9GYXNoaW9uU3RvcmUvc3JjL3N0eWxlcy9jb2xvcnMvY29sb3JzLnNjc3MiLCIvVXNlcnMveXVya2l3dy9EZXNrdG9wL0Zhc2hpb25TdG9yZS9zcmMvc3R5bGVzL2NvbW1vbi9jb21tb24uc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQ0ZGO0FESUU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQ0ZKO0FESUk7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLDhCQUFBO0FDRk47QURLSTtFQUVFLFdBQUE7QUNKTjtBRE9JO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSw4QkFBQTtBQ0xOO0FEUUk7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLDhCQUFBO0FDTk47QURRTTtFQUNFLFdBQUE7QUNOUjtBRFFRO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0FDTlY7QURXSTtFQUNFLG1CQUFBO0FDVE47QURXTTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBRUEseUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNFZmM7RUZnQmQsdUJFbkRBO0VGb0RBLDRCQUFBO0VBQ0EseUJFakJjO0VGa0JkLHNCQUFBO0VBQ0EsZ0ZBQUE7RUFBQSx3RUFBQTtBQ1ZSO0FEY0k7RUFDRSxZQUFBO0VBQ0EsY0FBQTtBQ1pOO0FEZUk7RUFDRSxjQUFBO0FDYk47QURrQkE7RUd2RUUscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLDZJQUFBO0VBQUEscUlBQUE7RUgwREEsbUJBQUE7QUNBRjtBREVFO0VBQ0UsWUFBQTtBQ0FKO0FESUE7RUVyQkUsY0FBQTtFQUNBLHFCQUFBO0FEcUJGO0FDbkJFO0VBQ0UsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtBRHFCSjtBQ2xCRTtFQUNFLCtDQUFBO0VBQ0EsYUFBQTtBRG9CSjtBRE5BO0VFMUNFLGNBQUE7RUFDQSxxQkFBQTtBRG9ERjtBQ2xERTtFQUNFLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7QURvREo7QUNoREU7RUFDRSxhQUFBO0VBQ0EsOENBQUE7QURrREo7QURoQkE7RUFDRSw4QkFBQTtBQ21CRiIsImZpbGUiOiJzcmMvcGFnZXMvcHJvZHVjdHMvbmV3LWl0ZW0tcGFnZS9uZXctaXRlbS1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4vc3JjL3N0eWxlcy9jb21tb24vY29tbW9uLnNjc3NcIjtcbkBpbXBvcnQgXCIuL3NyYy9zdHlsZXMvY29sb3JzL2NvbG9ycy5zY3NzXCI7XG5cbi5jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwYWRkaW5nOiAwIDN2dztcblxuICAmX2Zvcm0ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNjB2aDtcblxuICAgICZfdXBwZXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICB9XG5cbiAgICAmX3JpZ2h0LFxuICAgICZfbGVmdCB7XG4gICAgICB3aWR0aDogMzV2dztcbiAgICB9XG5cbiAgICAmX2hlYWQge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICB9XG5cbiAgICAmX2Zvb3RlciB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG4gICAgICBkaXYge1xuICAgICAgICB3aWR0aDogMjB2dztcblxuICAgICAgICBwIHtcbiAgICAgICAgICBwYWRkaW5nOiA0dmggOXZ3O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgICZfX2l0ZW0ge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcblxuICAgICAgJi1jb250cm9sIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAvLyBoZWlnaHQ6IGNhbGMoMS41ZW0gKyAuNzVyZW0gKyAycHgpO1xuICAgICAgICBwYWRkaW5nOiAwLjM3NXJlbSAwLjc1cmVtO1xuICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgICAgIGNvbG9yOiAkYXV0aF9jaGVja2JveF9jb2xvcjtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlO1xuICAgICAgICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xuICAgICAgICBib3JkZXI6ICRhdXRoX2NoZWNrYm94X2JvcmRlcjtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcbiAgICAgICAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBib3gtc2hhZG93IDAuMTVzIGVhc2UtaW4tb3V0O1xuICAgICAgfVxuICAgIH1cblxuICAgIHRleHRhcmVhIHtcbiAgICAgIHJlc2l6ZTogbm9uZTtcbiAgICAgIGhlaWdodDogNjQuNXB4O1xuICAgIH1cblxuICAgIHAge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuICB9XG59XG5cbi5idG4ge1xuICBAaW5jbHVkZSBidG47XG4gIG1hcmdpbi10b3A6IDAuMjVyZW07XG5cbiAgJjpkaXNhYmxlZCB7XG4gICAgb3BhY2l0eTogMC41O1xuICB9XG59XG5cbi5zdWNjZXNzIHtcbiAgQGluY2x1ZGUgc3VjY2Vzcztcbn1cblxuLmRhcmsge1xuICBAaW5jbHVkZSBkYXJrO1xufVxuXG4ucmVkLWJvcmRlciB7XG4gIGJvcmRlci1sZWZ0OiA3cHggc29saWQgJGFjY291bnQtc2V0dGluZ3NfcmVkLWJvcmRlcjtcbn1cbiIsIi5jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwYWRkaW5nOiAwIDN2dztcbn1cbi5jb250YWluZXJfZm9ybSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDYwdmg7XG59XG4uY29udGFpbmVyX2Zvcm1fdXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4uY29udGFpbmVyX2Zvcm1fcmlnaHQsIC5jb250YWluZXJfZm9ybV9sZWZ0IHtcbiAgd2lkdGg6IDM1dnc7XG59XG4uY29udGFpbmVyX2Zvcm1faGVhZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5jb250YWluZXJfZm9ybV9mb290ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4uY29udGFpbmVyX2Zvcm1fZm9vdGVyIGRpdiB7XG4gIHdpZHRoOiAyMHZ3O1xufVxuLmNvbnRhaW5lcl9mb3JtX2Zvb3RlciBkaXYgcCB7XG4gIHBhZGRpbmc6IDR2aCA5dnc7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cbi5jb250YWluZXJfZm9ybV9faXRlbSB7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG4uY29udGFpbmVyX2Zvcm1fX2l0ZW0tY29udHJvbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMC4zNzVyZW0gMC43NXJlbTtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBjb2xvcjogIzQ5NTA1NztcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjZWQ0ZGE7XG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG4gIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjE1cyBlYXNlLWluLW91dCwgYm94LXNoYWRvdyAwLjE1cyBlYXNlLWluLW91dDtcbn1cbi5jb250YWluZXJfZm9ybSB0ZXh0YXJlYSB7XG4gIHJlc2l6ZTogbm9uZTtcbiAgaGVpZ2h0OiA2NC41cHg7XG59XG4uY29udGFpbmVyX2Zvcm0gcCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uYnRuIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogIzIxMjUyOTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIHBhZGRpbmc6IDAuMzc1cmVtIDAuNzVyZW07XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIGJhY2tncm91bmQtY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIGJvcmRlci1jb2xvciAwLjE1cyBlYXNlLWluLW91dCwgYm94LXNoYWRvdyAwLjE1cyBlYXNlLWluLW91dDtcbiAgbWFyZ2luLXRvcDogMC4yNXJlbTtcbn1cbi5idG46ZGlzYWJsZWQge1xuICBvcGFjaXR5OiAwLjU7XG59XG5cbi5zdWNjZXNzIHtcbiAgY29sb3I6ICMyOGE3NDU7XG4gIGJvcmRlci1jb2xvcjogIzI4YTc0NTtcbn1cbi5zdWNjZXNzOmhvdmVyIHtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjhhNzQ1O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uc3VjY2Vzczpmb2N1cyB7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDAuMnJlbSByZ2JhKDQwLCAxNjcsIDY5LCAwLjUpO1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4uZGFyayB7XG4gIGNvbG9yOiAjMzQzYTQwO1xuICBib3JkZXItY29sb3I6ICMzNDNhNDA7XG59XG4uZGFyazpob3ZlciB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQzYTQwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uZGFyazpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDAuMnJlbSByZ2JhKDUyLCA1OCwgNjQsIDAuNSk7XG59XG5cbi5yZWQtYm9yZGVyIHtcbiAgYm9yZGVyLWxlZnQ6IDdweCBzb2xpZCAjYmQzOTM5O1xufSIsIi8vIG1haW4gY29sb3JzXG4kZ3JleS1ibHVlOiByZ2IoMzEsIDM0LCA0Myk7XG4kd2hpdGU6IHdoaXRlO1xuJGdyZXk6IGdyZXk7XG4kYWxpY2VibHVlOiBhbGljZWJsdWU7XG5cbi8vIGFjY291bnQtc2V0dGluZ3NcblxuJGFjY291bnQtc2V0dGluZ3NfY29udGVudDogIzQ4NTA1NztcbiRhY2NvdW50LXNldHRpbmdzX3JlZC1ib3JkZXI6ICNiZDM5Mzk7XG4kYWNjb3VudC1zZXR0aW5nc19lbWFpbC1zdmc6ICNlOWVjZWY7XG4kYWNjb3VudC1zZXR0aW5nc19yZWQtY29sb3I6ICNhZjM0MzQ7XG4kYWNjb3VudC1zZXR0aW5nc19idXR0b24tYmM6ICMzMTZiZmY7XG4kYWNjb3VudC1zZXR0aW5nc19idXR0b24tY29sb3I6ICNmZmZmO1xuJGFjY291bnQtc2V0dGluZ3NfYm9yZGVyOiAxcHggc29saWQgI2JkYmRiZDtcblxuLy8gbW9kYWxcblxuJG1vZGFsX2hlYWRlci1iYzogIzQ5NGFmZDtcbiRtb2RhbF9oZWFkZXItY29sb3I6YWxpY2VibHVlO1xuJG1vZGFsX2hvdmVyLWJjOiNmOGY5ZmE7XG4kbW9kYWxfaG92ZXItY29sb3I6IzZiN2FmYztcblxuLy8gcHJvZHVjdC1pdGVtXG4kcHJvZHVjdC1pdGVtX2JvcmRlcjoxcHggc29saWQgcmdiYSgzMSwgMzQsIDQzLCAwLjIpO1xuJHByb2R1Y3QtaXRlbS1ob3ZlcjogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xuJHByb2R1Y3QtaXRlbV9idXR0b24tYmM6I2Y0NTExZTtcblxuLy8gc2VhcmNoLWJveFxuJHNlYXJjaC1ib3gtYmM6ICNmNWY1ZjY7XG5cbi8vIHNpZGViYXJcbiRzaWRlYmFyX2xpc3RfaXRlbS1ob3Zlci1ib3JkZXI6MnB4IHNvbGlkIHJnYigzMywgNzYsIDIwNyk7XG4kc2lkZWJhcl9saXN0X2l0ZW0taG92ZXItY29sb3I6cmdiKDYzLCA2OCwgODQpO1xuXG4vLyBhdXRoXG4kYXV0aF9idXR0b25fY29sb3I6ICMwMDdiZmY7XG4kYXV0aF9jaGVja2JveF9jb2xvcjogIzQ5NTA1NztcbiRhdXRoX2NoZWNrYm94X2JvcmRlcjoxcHggc29saWQgI2NlZDRkYTtcbiRhdXRoX2NoZWNrYm94X2JvcmRlci1iZWZvcmU6ICNhZGI1YmQgc29saWQgMXB4O1xuXG4vLyBidXR0b25zXG5AbWl4aW4gZGFyayB7XG4gIGNvbG9yOiAjMzQzYTQwO1xuICBib3JkZXItY29sb3I6ICMzNDNhNDA7XG5cbiAgJjpob3ZlciB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM0M2E0MDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cblxuXG4gICY6Zm9jdXMge1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgMC4ycmVtIHJnYmEoNTIsIDU4LCA2NCwgLjUpXG4gIH1cbn1cblxuQG1peGluIHN1Y2Nlc3Mge1xuICBjb2xvcjogIzI4YTc0NTtcbiAgYm9yZGVyLWNvbG9yOiAjMjhhNzQ1O1xuXG4gICY6aG92ZXIge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjhhNzQ1O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuXG4gICY6Zm9jdXMge1xuICAgIGJveC1zaGFkb3c6IDAgMCAwIDAuMnJlbSByZ2JhKDQwLCAxNjcsIDY5LCAuNSk7XG4gICAgb3V0bGluZTogbm9uZVxuICB9XG59XG4iLCJAbWl4aW4gYnRuIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogIzIxMjUyOTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIHBhZGRpbmc6IC4zNzVyZW0gLjc1cmVtO1xuICBmb250LXNpemU6IDFyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGJvcmRlci1yYWRpdXM6IC4yNXJlbTtcbiAgdHJhbnNpdGlvbjogY29sb3IgLjE1cyBlYXNlLWluLW91dCwgYmFja2dyb3VuZC1jb2xvciAuMTVzIGVhc2UtaW4tb3V0LCBib3JkZXItY29sb3IgLjE1cyBlYXNlLWluLW91dCwgYm94LXNoYWRvdyAuMTVzIGVhc2UtaW4tb3V0O1xuXG59XG4iXX0= */"

/***/ }),

/***/ "./src/pages/products/new-item-page/new-item-page.component.ts":
/*!*********************************************************************!*\
  !*** ./src/pages/products/new-item-page/new-item-page.component.ts ***!
  \*********************************************************************/
/*! exports provided: NewItemPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewItemPageComponent", function() { return NewItemPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");



let NewItemPageComponent = class NewItemPageComponent {
    constructor(fb) {
        this.fb = fb;
        this.addItem = () => {
            console.log(this.newItemForm.value);
        };
        this.isFieldValid = (filedName) => {
            return (this.newItemForm.get(filedName).invalid &&
                this.newItemForm.get(filedName).touched);
        };
    }
    ngOnInit() {
        this.newItemForm = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            brandName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            price: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            cloth: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            sizes: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            colors: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            img: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    }
};
NewItemPageComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
NewItemPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-new-item-page',
        template: __webpack_require__(/*! raw-loader!./new-item-page.component.html */ "./node_modules/raw-loader/index.js!./src/pages/products/new-item-page/new-item-page.component.html"),
        styles: [__webpack_require__(/*! ./new-item-page.component.scss */ "./src/pages/products/new-item-page/new-item-page.component.scss")]
    })
], NewItemPageComponent);



/***/ })

}]);
//# sourceMappingURL=src-modules-new-item-page-new-item-page-module-es2015.js.map