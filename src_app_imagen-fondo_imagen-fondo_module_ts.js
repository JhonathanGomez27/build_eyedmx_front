"use strict";
(self["webpackChunkmultikart"] = self["webpackChunkmultikart"] || []).push([["src_app_imagen-fondo_imagen-fondo_module_ts"],{

/***/ 8749:
/*!*************************************************************!*\
  !*** ./src/app/imagen-fondo/imagen-fondo-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ImagenFondoRoutingModule: () => (/* binding */ ImagenFondoRoutingModule),
/* harmony export */   routes: () => (/* binding */ routes)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _imagen_fondo_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./imagen-fondo.component */ 1168);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);




const routes = [{
  path: 'mg',
  component: _imagen_fondo_component__WEBPACK_IMPORTED_MODULE_0__.ImagenFondoComponent
}];
class ImagenFondoRoutingModule {}
ImagenFondoRoutingModule.ɵfac = function ImagenFondoRoutingModule_Factory(t) {
  return new (t || ImagenFondoRoutingModule)();
};
ImagenFondoRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: ImagenFondoRoutingModule
});
ImagenFondoRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ImagenFondoRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 1614:
/*!*****************************************************!*\
  !*** ./src/app/imagen-fondo/imagen-fondo.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ImagenFondoModule: () => (/* binding */ ImagenFondoModule)
/* harmony export */ });
/* harmony import */ var _imagen_fondo_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./imagen-fondo.component */ 1168);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/shared.module */ 6208);
/* harmony import */ var _imagen_fondo_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./imagen-fondo-routing.module */ 8749);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);





class ImagenFondoModule {}
ImagenFondoModule.ɵfac = function ImagenFondoModule_Factory(t) {
  return new (t || ImagenFondoModule)();
};
ImagenFondoModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: ImagenFondoModule
});
ImagenFondoModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule, _imagen_fondo_routing_module__WEBPACK_IMPORTED_MODULE_2__.ImagenFondoRoutingModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ImagenFondoModule, {
    declarations: [_imagen_fondo_component__WEBPACK_IMPORTED_MODULE_0__.ImagenFondoComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule, _imagen_fondo_routing_module__WEBPACK_IMPORTED_MODULE_2__.ImagenFondoRoutingModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_imagen-fondo_imagen-fondo_module_ts.js.map