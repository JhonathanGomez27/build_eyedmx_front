"use strict";
(self["webpackChunkmultikart"] = self["webpackChunkmultikart"] || []).push([["src_app_auth_sign-out_sign-out_module_ts"],{

/***/ 96676:
/*!**********************************************************!*\
  !*** ./src/app/auth/sign-out/sign-out-routing.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SignOutRoutingModule: () => (/* binding */ SignOutRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _sign_out_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sign-out.component */ 76313);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);




const routes = [{
  path: 'sign-out',
  component: _sign_out_component__WEBPACK_IMPORTED_MODULE_0__.SignOutComponent
}];
class SignOutRoutingModule {}
SignOutRoutingModule.ɵfac = function SignOutRoutingModule_Factory(t) {
  return new (t || SignOutRoutingModule)();
};
SignOutRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: SignOutRoutingModule
});
SignOutRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SignOutRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 91362:
/*!**************************************************!*\
  !*** ./src/app/auth/sign-out/sign-out.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SignOutModule: () => (/* binding */ SignOutModule)
/* harmony export */ });
/* harmony import */ var _sign_out_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sign-out.component */ 76313);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/shared.module */ 56208);
/* harmony import */ var ng_gallery_lightbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-gallery/lightbox */ 23050);
/* harmony import */ var ng_gallery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-gallery */ 60977);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _sign_out_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sign-out-routing.module */ 96676);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 61699);







class SignOutModule {}
SignOutModule.ɵfac = function SignOutModule_Factory(t) {
  return new (t || SignOutModule)();
};
SignOutModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: SignOutModule
});
SignOutModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, ng_gallery__WEBPACK_IMPORTED_MODULE_5__.GalleryModule, ng_gallery_lightbox__WEBPACK_IMPORTED_MODULE_6__.LightboxModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule, _sign_out_routing_module__WEBPACK_IMPORTED_MODULE_2__.SignOutRoutingModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](SignOutModule, {
    declarations: [_sign_out_component__WEBPACK_IMPORTED_MODULE_0__.SignOutComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, ng_gallery__WEBPACK_IMPORTED_MODULE_5__.GalleryModule, ng_gallery_lightbox__WEBPACK_IMPORTED_MODULE_6__.LightboxModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule, _sign_out_routing_module__WEBPACK_IMPORTED_MODULE_2__.SignOutRoutingModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_auth_sign-out_sign-out_module_ts.6b82d9b49fc80026.js.map