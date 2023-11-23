"use strict";
(self["webpackChunkmultikart"] = self["webpackChunkmultikart"] || []).push([["src_app_landing_landing_module_ts"],{

/***/ 60153:
/*!********************************************************************!*\
  !*** ./src/app/landing/checkout-exito/checkout-exito.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CheckoutExitoComponent: () => (/* binding */ CheckoutExitoComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 72513);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 20274);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _checkout_land_checkout_land_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../checkout-land/checkout-land.service */ 56070);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/components/breadcrumb/breadcrumb.component */ 14414);
/* harmony import */ var _home_widgets_logo_logo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../home/widgets/logo/logo.component */ 85619);








function CheckoutExitoComponent_ng_container_20_li_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const type_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" Pulsera ", type_r3.description, " \u00D7 ", ctx_r4.typesSelected[type_r3.name], " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind3"](4, 3, type_r3.precio * ctx_r4.typesSelected[type_r3.name], "MXN $", "symbol"), " ");
  }
}
function CheckoutExitoComponent_ng_container_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0)(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, CheckoutExitoComponent_ng_container_20_li_2_Template, 5, 7, "li", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]()();
  }
  if (rf & 2) {
    const type_r3 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.typesSelected[type_r3.name] > 0);
  }
}
function CheckoutExitoComponent_div_49_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 24)(1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Metodo de pago");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Tarjeta credito / debito.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function CheckoutExitoComponent_div_50_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 24)(1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Metodo de pago");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Efectivo.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
class CheckoutExitoComponent {
  constructor(_checkoutService, _formBuilder, _changeDetectorRef, _router, viewScroller, _activatedRoute) {
    this._checkoutService = _checkoutService;
    this._formBuilder = _formBuilder;
    this._changeDetectorRef = _changeDetectorRef;
    this._router = _router;
    this.viewScroller = viewScroller;
    this._activatedRoute = _activatedRoute;
    this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
    // Logo
    this.logo = [{
      image: "assets/images/logos/1.png"
    }, {
      image: "assets/images/logos/3.png"
    }, {
      image: "assets/images/logos/2.png"
    }, {
      image: "assets/images/logos/4.png"
    }, {
      image: "assets/images/logos/5.png"
    }, {
      image: "assets/images/logos/6.png"
    }, {
      image: "assets/images/logos/7.png"
    }];
    this.pulseras = {};
    this.types = [];
    this.typesSelected = [];
    this.precio = 0;
    this.idPago = '';
    this.tod = new Date();
    this.orden = {};
    this.datosEnvio = {};
    this.fechaOrden = '';
  }
  ngOnInit() {
    this._checkoutService.pulserasTypes$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this._unsubscribeAll)).subscribe(types => {
      this.types = types;
      // Mark for check
      this._changeDetectorRef.markForCheck();
    });
    this._checkoutService.order$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this._unsubscribeAll)).subscribe(order => {
      this.orden = order;
      this.idPago = order._id;
      this.precio = order?.otros?.precio || 0;
      this.typesSelected = order?.otros?.list || [];
      this.fechaOrden = order.createdAt;
      this.datosEnvio = order?.otros?.envio || {};
      // Mark for check
      this._changeDetectorRef.markForCheck();
    });
  }
  /**
   * On destroy
   */
  ngOnDestroy() {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next(null);
    this._unsubscribeAll.complete();
  }
}
CheckoutExitoComponent.ɵfac = function CheckoutExitoComponent_Factory(t) {
  return new (t || CheckoutExitoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_checkout_land_checkout_land_service__WEBPACK_IMPORTED_MODULE_0__.CheckoutLandService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_8__.ViewportScroller), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute));
};
CheckoutExitoComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: CheckoutExitoComponent,
  selectors: [["app-checkout-exito"]],
  decls: 56,
  vars: 22,
  consts: [[3, "title", "breadcrumb"], [1, "section-checkout"], [1, "pulseras-info"], [1, "success-text"], ["aria-hidden", "true", 1, "fa", "fa-check-circle"], [2, "color", "black"], [1, "total-payment"], [1, "checkout-details"], [1, "order-box"], [1, "title-box"], [1, "qty"], [4, "ngFor", "ngForOf"], [1, "total"], [1, "count"], [1, "row", "order-success-sec"], [1, "col-sm-6"], [1, "order-detail"], ["class", "col-sm-12 payment-mode border-order-2", 4, "ngIf"], [1, "section-b-space"], [1, "container"], [1, "row"], [1, "col-md-12"], [3, "logos"], [4, "ngIf"], [1, "col-sm-12", "payment-mode", "border-order-2"]],
  template: function CheckoutExitoComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-breadcrumb", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "section", 1)(2, "div", 2)(3, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "i", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Gracias");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "p")(8, "strong", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, ", Su pedido ha sido procesado con exito y se encuentra proceso de produccion, Para iniciar sesi\u00F3n debe introducir las credenciales ingresadas anteriormente.");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 6)(12, "div", 7)(13, "div", 8)(14, "div", 9)(15, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "Producto ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, " Total");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "ul", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](20, CheckoutExitoComponent_ng_container_20_Template, 3, 1, "ng-container", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "ul", 12)(22, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "Total ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "span", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](26, "currency");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 14)(28, "div", 15)(29, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, "Resumen");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "ul", 16)(32, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](36, "date");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "div", 15)(38, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](39, "Direccion de envio");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "ul", 16)(41, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](42);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](44);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](46);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](48);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](49, CheckoutExitoComponent_div_49_Template, 5, 0, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](50, CheckoutExitoComponent_div_50_Template, 5, 0, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "section", 18)(52, "div", 19)(53, "div", 20)(54, "div", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](55, "app-logo", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("title", "Checkout pulsera exito")("breadcrumb", "Checkout pulsera exito");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.datosEnvio.name);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.types);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind3"](26, 15, ctx.precio, "MXN $", "symbol"));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Id orden: ", ctx.idPago, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Fecha de orden: ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](36, 19, ctx.fechaOrden, "dd/MM/yyyy"), "");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.datosEnvio.address.line1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.datosEnvio.address.state);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", ctx.datosEnvio.address.city, ", ", ctx.datosEnvio.address.postal_code, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Contacto: ", ctx.datosEnvio.phone, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.orden.metodo === "Stripe");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.orden.metodo === "Efectivo");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("logos", ctx.logo);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__.BreadcrumbComponent, _home_widgets_logo_logo_component__WEBPACK_IMPORTED_MODULE_2__.LogoComponent, _angular_common__WEBPACK_IMPORTED_MODULE_8__.CurrencyPipe, _angular_common__WEBPACK_IMPORTED_MODULE_8__.DatePipe],
  styles: [".section-checkout[_ngcontent-%COMP%] {\n  width: 100%;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));\n  padding: 2rem;\n  gap: 2rem;\n  background-color: white;\n}\n.section-checkout[_ngcontent-%COMP%]   .pulseras-info[_ngcontent-%COMP%] {\n  padding: 40px;\n  width: 100%;\n  display: flex;\n  align-items: center;\n}\n.section-checkout[_ngcontent-%COMP%]   .pulseras-info[_ngcontent-%COMP%]   .success-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 20px;\n  text-transform: initial !important;\n}\n.section-checkout[_ngcontent-%COMP%]   .total-payment[_ngcontent-%COMP%] {\n  padding: 40px;\n  width: 100%;\n  border: 1px solid #f9f9f9;\n  background-color: #f9f9f9;\n  border-radius: 0.6rem;\n}\n.section-checkout[_ngcontent-%COMP%]   .total-payment[_ngcontent-%COMP%]   .qty[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  color: #616161;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbGFuZGluZy9jaGVja291dC1leGl0by9jaGVja291dC1leGl0by5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0QsMkRBQUE7RUFDQyxhQUFBO0VBQ0EsU0FBQTtFQUVBLHVCQUFBO0FBQUo7QUFFSTtFQUNJLGFBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBQVI7QUFFWTtFQUNJLGVBQUE7RUFDQSxrQ0FBQTtBQUFoQjtBQUtJO0VBQ0ksYUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7QUFIUjtBQUtRO0VBQ0ksY0FBQTtBQUhaIiwic291cmNlc0NvbnRlbnQiOlsiLnNlY3Rpb24tY2hlY2tvdXR7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcblx0ICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDIwcmVtLCAxZnIpKTtcclxuICAgIHBhZGRpbmc6IDJyZW07XHJcbiAgICBnYXA6IDJyZW07XHJcblxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcblxyXG4gICAgLnB1bHNlcmFzLWluZm97XHJcbiAgICAgICAgcGFkZGluZzogNDBweDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgLnN1Y2Nlc3MtdGV4dHtcclxuICAgICAgICAgICAgcHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBpbml0aWFsICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnRvdGFsLXBheW1lbnR7XHJcbiAgICAgICAgcGFkZGluZzogNDBweDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZjlmOWY5O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMC42cmVtO1xyXG5cclxuICAgICAgICAucXR5IGxpe1xyXG4gICAgICAgICAgICBjb2xvcjogIzYxNjE2MTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});


/***/ }),

/***/ 75048:
/*!********************************************************************************!*\
  !*** ./src/app/landing/checkout-land/checkout-card/checkout-card.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CheckoutCardComponent: () => (/* binding */ CheckoutCardComponent)
/* harmony export */ });
/* harmony import */ var C_Smartdatacontact_Eyed_Eyed_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ 27889);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ 20553);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 72513);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 20274);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var src_app_core_user_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/user/user.service */ 58212);
/* harmony import */ var _checkout_land_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../checkout-land.service */ 56070);
/* harmony import */ var src_app_core_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/auth/auth.service */ 54855);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 26575);












function CheckoutCardComponent_span_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span")(1, "div", 21)(2, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
}
function CheckoutCardComponent_span_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Pagar");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
const _c0 = function (a0) {
  return {
    "contenedor-form": a0
  };
};
class CheckoutCardComponent {
  constructor(fb, cd, route, _userService, _checkoutService, _authService, _router) {
    this.fb = fb;
    this.cd = cd;
    this.route = route;
    this._userService = _userService;
    this._checkoutService = _checkoutService;
    this._authService = _authService;
    this._router = _router;
    this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroup({});
    this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subject();
    this.showDatosEnvio = true;
    this.loading = false;
    //datos to create
    this.user = {};
    this.pulseras = [];
    this.paymentInfo = {};
    this.pulseraOk = '';
    this.userOk = '';
    this.checkOk = '';
    //usercreated
    this.userCreated = {};
    this.pulserasCreated = [];
    this.idTransaccion = '';
    this.metodoPago = '';
    this.createStripeElement = () => {
      const style = {
        base: {
          color: '#000000',
          fontWeight: 500,
          fontSize: '20px',
          '::placeholder': {
            color: '#E3E2EC'
          }
        },
        invalid: {
          color: '#dc3545'
        }
      };
      //TODO: SDK de Stripe inicia la generacion de elementos
      this.elementStripe = this.STRIPE.elements({
        fonts: [{
          cssSrc: 'https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400&display=swap'
        }]
      });
      //TODO: SDK Construimos los inputs de tarjeta, cvc, fecha con estilos
      const cardNumber = this.elementStripe.create('cardNumber', {
        placeholder: '**** **** **** ****',
        style,
        classes: {
          base: 'input-stripe-custom'
        }
      });
      const cardExp = this.elementStripe.create('cardExpiry', {
        placeholder: 'MM/AA',
        style,
        classes: {
          base: 'input-stripe-custom'
        }
      });
      const cardCvc = this.elementStripe.create('cardCvc', {
        placeholder: '***',
        style,
        classes: {
          base: 'input-stripe-custom'
        }
      });
      const address = this.elementStripe.create('address', {
        mode: 'shipping',
        allowedCountries: ['MX'],
        fields: {
          phone: 'always'
        },
        validation: {
          phone: {
            required: 'always'
          }
        }
      });
      //TODO: SDK Montamos los elementos en nuestros DIV identificados on el #id
      cardNumber.mount('#card');
      cardExp.mount('#exp');
      cardCvc.mount('#cvc');
      address.mount('#card-element');
      this.cardNumber = cardNumber;
      this.cardExp = cardExp;
      this.cardCvv = cardCvc;
      this.address = address;
      //TODO: Escuchamos los eventos del SDK
      this.cardNumber.addEventListener('change', this.onChangeCard.bind(this));
      this.cardExp.addEventListener('change', this.onChangeExp.bind(this));
      this.cardCvv.addEventListener('change', this.onChangeCvv.bind(this));
    };
    this.STRIPE = window.Stripe(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.stripe_pk);
    this.Toast = sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: toast => {
        toast.addEventListener('mouseenter', (sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().stopTimer));
        toast.addEventListener('mouseleave', (sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().resumeTimer));
      }
    });
  }
  ngOnInit() {
    this.form = this.fb.group({
      // amount: ['', [Validators.required, Validators.min(1), Validators.max(100000)]],
      cardNumber: [false, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.requiredTrue]],
      cardCvv: [false, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.requiredTrue]],
      cardExp: [false, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.requiredTrue]] //TODO true | false
    });

    this.createStripeElement();
    this._checkoutService.userData$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this._unsubscribeAll)).subscribe(user => {
      // Update the selected agente
      this.user = user;
      // Mark for check
      this.cd.markForCheck();
    });
    this._checkoutService.pulserasData$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this._unsubscribeAll)).subscribe(pulseras => {
      // Update the selected agente
      this.pulseras = pulseras;
      // Mark for check
      this.cd.markForCheck();
    });
    this._checkoutService.userOk$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this._unsubscribeAll)).subscribe(userOk => {
      // Update the selected agente
      this.userOk = userOk;
      if (this.userOk === 'ok' && this.pulseraOk === 'ok' && this.checkOk !== 'ok') {
        this._checkoutService.setcheckoutOk('ok');
      } else {
        this.enableInputs();
        this.form.enable();
      }
      // Mark for check
      this.cd.markForCheck();
    });
    this._checkoutService.pulseraOk$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this._unsubscribeAll)).subscribe(pulseraOk => {
      // Update the selected agente
      this.pulseraOk = pulseraOk;
      if (this.userOk === 'ok' && this.pulseraOk === 'ok' && this.checkOk !== 'ok') {
        this._checkoutService.setcheckoutOk('ok');
      } else {
        this.enableInputs();
        this.form.enable();
      }
      // Mark for check
      this.cd.markForCheck();
    });
    this._checkoutService.checkoutOk$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this._unsubscribeAll)).subscribe(checkOk => {
      this.checkOk = checkOk;
      if (checkOk === 'ok' && this.metodoPago === 'tarjeta') {
        this.createUser();
      }
      // Mark for check
      this.cd.markForCheck();
    });
    this._checkoutService.metodoPago$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this._unsubscribeAll)).subscribe(metodo => {
      this.metodoPago = metodo;
      // Mark for check
      this.cd.markForCheck();
    });
  }
  initPay() {
    var _this = this;
    return (0,C_Smartdatacontact_Eyed_Eyed_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let address = _this.elementStripe.getElement('address');
      const {
        complete,
        value
      } = yield address.getValue();
      if (complete) {
        _this.datosEnvio = value;
        _this.orderDataCliente(value);
      }
    })();
  }
  orderDataCliente(address) {
    console.log("aqui");
    this._checkoutService.setProcessing('loading');
    this._checkoutService.setAddressData(address);
  }
  executePayment(id) {
    var _this2 = this;
    return (0,C_Smartdatacontact_Eyed_Eyed_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        //TODO: SDK de Stripe genera un TOKEN para la intencion de pago!
        const {
          token
        } = yield _this2.STRIPE.createToken(_this2.cardNumber);
        //TODO: Enviamos el token a nuesta api donde generamos (stripe) un metodo de pago basado en el token
        //TODO: tok_23213
        const data = yield _this2._checkoutService.sendPayment(token.id, _this2.paymentInfo._id);
        _this2.idTransaccion = data.payment_method;
        // this._checkoutService.setIdTransaccion(data.payment_method);
        //TODO: Nuestra api devolver un "client_secret" que es un token unico por intencion de pago
        //TODO: SDK de stripe se encarga de verificar si el banco necesita autorizar o no
        _this2.STRIPE.handleCardPayment(data.client_secret).then( /*#__PURE__*/(0,C_Smartdatacontact_Eyed_Eyed_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
          //TODO: 👌 Money Money!!!
          _this2.Toast.fire({
            icon: 'success',
            title: 'Pago realizado con exito'
          });
          //TODO: Enviamos el id "localizador" de nuestra orden para decirle al backend que confirme con stripe si es verdad!
          yield _this2._checkoutService.confirmPayment(_this2.paymentInfo._id);
          // this.setAddress(value);
          var redirectURL;
          redirectURL = `/checkout-exito/${id}`;
          // Navigate to the redirect url
          _this2._router.navigateByUrl(redirectURL);
        })).catch(() => {
          _this2.showDatosEnvio = true;
          _this2.enableInputs();
          _this2.Toast.fire({
            icon: 'error',
            title: 'Error en el pago'
          });
          _this2.form.enable();
          _this2._checkoutService.setProcessing('error');
        });
      } catch (error) {
        _this2.showDatosEnvio = true;
        _this2.enableInputs();
        _this2.form.enable();
        _this2.Toast.fire({
          icon: "error",
          title: "Algo ocurrio mientras se procesaba el pago"
        });
        _this2._checkoutService.setProcessing("error");
      }
    })();
  }
  setAddress(data) {
    this._checkoutService.setAddessPulsera({
      otros: data
    }, this.paymentInfo.manillaId).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this._unsubscribeAll)).subscribe(response => {
      this.Toast.fire({
        icon: 'success',
        title: 'La direccion de entrega de la pulsera ha sido agregada con exito.'
      });
      // this._checkoutService.setStatus('success');
      // this._checkoutService.setAddress(data);
    }, error => {
      this.Toast.fire({
        icon: 'error',
        title: error.error.message
      });
    });
  }
  disableInputs() {
    this.loading = true;
    this.cardNumber.update({
      disabled: true
    });
    this.cardExp.update({
      disabled: true
    });
    this.cardCvv.update({
      disabled: true
    });
  }
  enableInputs() {
    this.loading = false;
    this.cardNumber.update({
      disabled: false
    });
    this.cardExp.update({
      disabled: false
    });
    this.cardCvv.update({
      disabled: false
    });
  }
  //TODO: Manejadores de validacion de input de stripe
  onChangeCard({
    error
  }) {
    this.form.patchValue({
      cardNumber: !error
    });
  }
  onChangeCvv({
    error
  }) {
    this.form.patchValue({
      cardCvv: !error
    });
  }
  onChangeExp({
    error
  }) {
    this.form.patchValue({
      cardExp: !error
    });
  }
  //Creacion usuario
  createUser() {
    setTimeout(() => {
      this.disableInputs();
      this.form.disable();
      this.verificarUser();
    }, 200);
  }
  /**
   * Sign up
   */
  signUp() {
    // Sign up
    this._authService.signUp(this.user).subscribe(response => {
      this.userCreated = response;
      let data = {
        email: this.user.email,
        password: this.user.password
      };
      this.signIn(data);
    }, response => {
      // Re-enable the form
      this._checkoutService.setuserOk('error');
      this._checkoutService.setcheckoutOk('error');
      this._checkoutService.setpulseraOk('error');
      let message = response.error.message;
      // Set the alert
      this.Toast.fire({
        icon: 'error',
        title: message
      });
      // this.disableButton = true;
    });
  }

  signIn(data) {
    // Sign in
    this._authService.signIn(data).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this._unsubscribeAll)).subscribe(response => {
      this.userCreated = response.user;
      this.ciclarPulseras(response.user);
    }, response => {
      // Re-enable the form
      this._checkoutService.setuserOk('error');
      this._checkoutService.setcheckoutOk('error');
      this._checkoutService.setpulseraOk('error');
      let message = response.error.message;
      // Set the alert
      this.Toast.fire({
        icon: 'error',
        title: message
      });
    });
  }
  verificarUser() {
    this._authService.existUser(this.user.email).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this._unsubscribeAll)).subscribe(response => {
      if (response) {
        let data = {
          email: this.user.email,
          password: this.user.password
        };
        this.signIn(data);
      } else {
        this.signUp();
      }
    }, error => {});
  }
  ciclarPulseras(user) {
    this.pulseras.pulseras.forEach(element => {
      element.userId = user._id;
      element.otros = this.datosEnvio;
    });
    this.crearPulseras(this.pulseras.pulseras);
  }
  crearPulseras(data) {
    this._userService.crearVariasManilla({
      manillas: data
    }).subscribe(response => {
      this.pulserasCreated = response;
      this.createPaymentIntent();
    }, response => {
      this.Toast.fire({
        icon: 'error',
        title: response.error.message
      });
    });
  }
  createPaymentIntent() {
    let data = {
      userId: this.userCreated._id,
      monto: this.pulseras.precio,
      metodo: 'Stripe',
      manillasId: this.getPulserasIds(),
      otros: {
        list: this.pulseras.lista,
        precio: this.pulseras.precio,
        envio: this.datosEnvio
      }
    };
    this._checkoutService.generateOrder(data).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this._unsubscribeAll)).subscribe(response => {
      this.paymentInfo = response;
      this.executePayment(response._id);
    }, error => {
      this.Toast.fire({
        icon: 'error',
        title: error.error.message
      });
    });
  }
  getPulserasIds() {
    let pulseras = [];
    this.pulserasCreated.forEach(pulsera => {
      pulseras.push(pulsera._id);
    });
    return pulseras;
  }
}
CheckoutCardComponent.ɵfac = function CheckoutCardComponent_Factory(t) {
  return new (t || CheckoutCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_core_user_user_service__WEBPACK_IMPORTED_MODULE_3__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_checkout_land_service__WEBPACK_IMPORTED_MODULE_4__.CheckoutLandService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_core_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.Router));
};
CheckoutCardComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: CheckoutCardComponent,
  selectors: [["app-checkout-card"]],
  decls: 37,
  vars: 7,
  consts: [[1, "checkout"], [1, "checkout-in"], [1, "checkout-card"], [1, "checkbox-alert"], ["href", "https://stripe.com/", "target", "_blank"], [3, "ngClass"], [1, "form-loading", 3, "formGroup", "submit"], [1, "contenedor-cards"], ["aria-hidden", "true", 1, "fa", "fa-cc-visa", "f-20"], ["aria-hidden", "true", 1, "fa", "fa-cc-amex", "f-20"], ["aria-hidden", "true", 1, "fa", "fa-cc-mastercard", "f-20"], ["aria-hidden", "true", 1, "fa", "fa-cc-diners-club", "f-20"], [1, "input"], [1, "label"], ["id", "card", 1, "input-card"], [1, "fecha-ccv"], ["id", "cvc", 1, "input-card"], ["id", "exp", 1, "input-card"], ["id", "card-element"], ["type", "submit", 1, "button", 3, "disabled"], [4, "ngIf"], ["role", "status", 1, "spinner-border"], [1, "visually-hidden"]],
  template: function CheckoutCardComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, " A continuaci\u00F3n debes de introducir los datos de tu tarjeta para procesar el pago! El pago se procesara mediante la platforma de ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "b")(6, "a", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "stripe");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 5)(9, "form", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("submit", function CheckoutCardComponent_Template_form_submit_9_listener() {
        return ctx.initPay();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](11, "i", 8)(12, "i", 9)(13, "i", 10)(14, "i", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "div", 12)(16, "label", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17, "N\u00FAmero de tarjeta");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](18, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](19, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "div", 15)(21, "div", 12)(22, "label", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23, "CVC");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](24, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "div", 12)(26, "label", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](27, "Fecha de vencimiento");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](28, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](29, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "div", 12)(31, "label", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](32, "Datos de envio");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](33, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "button", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](35, CheckoutCardComponent_span_35_Template, 4, 0, "span", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](36, CheckoutCardComponent_span_36_Template, 2, 0, "span", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](5, _c0, ctx.loading));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.form);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](25);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx.form.invalid || ctx.form.disabled);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.loading);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.loading);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective],
  styles: [".checkout[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin: auto;\n  padding: 2rem 0;\n  height: 100%;\n  width: 100%;\n}\n\n.checkout-in[_ngcontent-%COMP%] {\n  margin: 0.5rem;\n  width: 100%;\n  padding: 0rem 2rem 2rem 2rem;\n  background-color: white;\n  border-radius: 3rem;\n}\n\n.checkout-user[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 1rem 0 2rem;\n}\n\n.checkout-user[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%] {\n  width: 150px;\n  height: 150px;\n  border-radius: 100%;\n  object-fit: cover;\n  box-shadow: -2px 5px 20px 0 rgba(173, 173, 173, 0.19);\n}\n\n.button[_ngcontent-%COMP%] {\n  margin: 1.5rem 0;\n  width: 100%;\n  border: 0;\n  height: 40px;\n  border-radius: 0.75rem;\n  color: white;\n  text-transform: uppercase;\n  font-size: 1rem;\n  font-weight: 600;\n  background-color: #22244E;\n}\n\n.button[_ngcontent-%COMP%]:disabled {\n  background-color: #8a8a8a;\n  pointer-events: none;\n}\n\nhr[_ngcontent-%COMP%] {\n  border-top: 0;\n  border-bottom: solid 0px whitesmoke;\n  margin: 0.5rem 0;\n}\n\n.terms[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  padding: 0.5rem;\n  font-size: 80%;\n}\n\n.terms[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  font-weight: 500;\n  color: #8a8a8a;\n}\n\n.checkbox-alert[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  padding: 0.75rem;\n  font-weight: 500;\n  border-radius: 0.75rem;\n  box-shadow: -2px 5px 20px 0 rgba(173, 173, 173, 0.19);\n  margin-bottom: 1rem;\n  margin-top: 1rem;\n}\n\n.checkout-customer[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 1.5rem;\n  margin-bottom: 1rem;\n}\n\n.highlight[_ngcontent-%COMP%] {\n  padding: 0.7rem;\n  background-color: var(--theme-gradient2);\n}\n\n.input-amount[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  background-color: transparent;\n  position: relative;\n  flex: 1 1 auto;\n  width: 1%;\n  min-width: 0;\n  border: none;\n  padding: 0.7rem;\n  font-size: 20px;\n  font-weight: bolder;\n}\n\n.input-amount[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  border: none;\n  background-color: white;\n}\n\n.currency[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  padding: 0.75rem;\n}\n\nlabel[_ngcontent-%COMP%] {\n  color: black;\n  font-size: 15px;\n}\n\n.input-card[_ngcontent-%COMP%] {\n  border-radius: 5px;\n  border: 1px solid rgb(167, 167, 167);\n  padding: 0.7rem;\n  font-size: 20px;\n  font-weight: bolder;\n}\n\n.contenedor-imagen[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  text-align: center;\n}\n\n.contenedor-perfil-image[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-top: 10px;\n  width: 160px;\n  height: 160px;\n  border-radius: 50%;\n  overflow: hidden;\n  cursor: pointer;\n}\n.contenedor-perfil-image[_ngcontent-%COMP%]   .image-perfil[_ngcontent-%COMP%] {\n  object-fit: cover;\n  width: 100%;\n  height: 100%;\n}\n.contenedor-perfil-image[_ngcontent-%COMP%]   .no-image-perfil[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  background-color: rgb(188, 188, 188);\n  color: rgb(78, 78, 78);\n  font-weight: bold;\n  font-size: 70px;\n}\n\n.contenedor-cards[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: flex-end;\n  flex-direction: row;\n}\n.contenedor-cards[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-left: 0.7rem;\n}\n\n.fecha-ccv[_ngcontent-%COMP%] {\n  width: 100%;\n  display: grid;\n  gap: 1rem;\n}\n\n@media (min-width: 600px) {\n  .fecha-ccv[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n.contenedor-form[_ngcontent-%COMP%] {\n  background-color: rgba(171, 171, 171, 0.2745098039);\n  border-radius: 10px;\n  padding: 10px;\n  pointer-events: none;\n}\n.contenedor-form[_ngcontent-%COMP%]   .form-loading[_ngcontent-%COMP%] {\n  z-index: -1;\n}\n\n.hide-direccion[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.spinner-load[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 46%;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbGFuZGluZy9jaGVja291dC1sYW5kL2NoZWNrb3V0LWNhcmQvY2hlY2tvdXQtY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFDSjs7QUFHRTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsNEJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBQUo7O0FBR0U7RUFDRSxrQkFBQTtFQUNBLG9CQUFBO0FBQUo7O0FBR0U7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxxREFBQTtBQUFKOztBQUlFO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0FBREo7O0FBSUU7RUFDRSx5QkFBQTtFQUNBLG9CQUFBO0FBREo7O0FBSUU7RUFDRSxhQUFBO0VBQ0EsbUNBQUE7RUFDQSxnQkFBQTtBQURKOztBQUlFO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFESjs7QUFJRTtFQUNFLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBREo7O0FBTUU7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLHFEQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQUhKOztBQU9FO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBSko7O0FBT0U7RUFDRSxlQUFBO0VBQ0Esd0NBQUE7QUFKSjs7QUFXRTtFQUNFLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBS0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQVpKOztBQWVFO0VBQ0UsWUFBQTtFQUNBLHVCQUFBO0FBWko7O0FBbUJFO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsZ0JBQUE7QUFoQko7O0FBbUJFO0VBQ0UsWUFBQTtFQUNBLGVBQUE7QUFoQko7O0FBbUJFO0VBQ0Usa0JBQUE7RUFDQSxvQ0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUFoQko7O0FBbUJFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FBaEJKOztBQW1CRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQWhCSjtBQWtCSTtFQUNJLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFoQlI7QUFtQkk7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBakJSOztBQXFCQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFFQSxtQkFBQTtBQW5CRjtBQXFCRTtFQUNFLG1CQUFBO0FBbkJKOztBQXVCQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBRUEsU0FBQTtBQXJCRjs7QUF3QkE7RUFDRTtJQUFhLHFDQUFBO0VBcEJiO0FBQ0Y7QUFzQkE7RUFDRSxtREFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0FBcEJGO0FBc0JFO0VBQ0UsV0FBQTtBQXBCSjs7QUF3QkE7RUFDRSxhQUFBO0FBckJGOztBQXdCQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7QUFyQkYiLCJzb3VyY2VzQ29udGVudCI6WyIuY2hlY2tvdXQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgcGFkZGluZzogMnJlbSAwO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIC5jaGVja291dC1pbiB7XHJcbiAgICBtYXJnaW46IC41cmVtO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAwcmVtIDJyZW0gMnJlbSAycmVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcmVtO1xyXG4gIH1cclxuICBcclxuICAuY2hlY2tvdXQtdXNlciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxcmVtIDAgMnJlbTtcclxuICB9XHJcbiAgXHJcbiAgLmNoZWNrb3V0LXVzZXIgLmF2YXRhciB7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgYm94LXNoYWRvdzogLTJweCA1cHggMjBweCAwIHJnYigxNzMgMTczIDE3MyAvIDE5JSk7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIC5idXR0b24ge1xyXG4gICAgbWFyZ2luOiAxLjVyZW0gMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogLjc1cmVtO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyNDRFO1xyXG4gIH1cclxuXHJcbiAgLmJ1dHRvbjpkaXNhYmxlZHsgICAgXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGE4YThhO1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIGhyIHtcclxuICAgIGJvcmRlci10b3A6IDA7XHJcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAwcHggd2hpdGVzbW9rZTtcclxuICAgIG1hcmdpbjogLjVyZW0gMFxyXG4gIH1cclxuICBcclxuICAudGVybXN7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgcGFkZGluZzogLjVyZW07XHJcbiAgICBmb250LXNpemU6IDgwJTtcclxuICB9XHJcbiAgXHJcbiAgLnRlcm1zIGF7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgY29sb3I6ICM4YThhOGE7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIFxyXG4gIC5jaGVja2JveC1hbGVydHtcclxuICAgIGZvbnQtc2l6ZTogLjlyZW07XHJcbiAgICBwYWRkaW5nOiAuNzVyZW07XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogLjc1cmVtO1xyXG4gICAgYm94LXNoYWRvdzogLTJweCA1cHggMjBweCAwIHJnYigxNzMgMTczIDE3MyAvIDE5JSk7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgLmNoZWNrb3V0LWN1c3RvbWVyIC50aXRsZXtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgfVxyXG4gIFxyXG4gIC5oaWdobGlnaHR7XHJcbiAgICBwYWRkaW5nOiAwLjdyZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10aGVtZS1ncmFkaWVudDIpO1xyXG4gIH1cclxuICBcclxuICAvLyAuaW5wdXQtYW1vdW50e1xyXG4gIC8vICAgLy8gcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIC8vIH1cclxuICBcclxuICAuaW5wdXQtYW1vdW50IGlucHV0e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBmbGV4OiAxIDEgYXV0bztcclxuICAgIHdpZHRoOiAxJTtcclxuICAgIG1pbi13aWR0aDogMDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIC8vIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIC8vIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2IoMTY3LCAxNjcsIDE2Nyk7XHJcbiAgICAvLyBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiKDE2NywgMTY3LCAxNjcpO1xyXG4gICAgLy8gYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCByZ2IoMTY3LCAxNjcsIDE2Nyk7XHJcbiAgICBwYWRkaW5nOiAwLjdyZW07XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gIH1cclxuXHJcbiAgLmlucHV0LWFtb3VudCBzcGFue1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAvLyBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAvLyBib3JkZXItdG9wOiAxcHggc29saWQgcmdiKDE2NywgMTY3LCAxNjcpO1xyXG4gICAgLy8gYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYigxNjcsIDE2NywgMTY3KTtcclxuICAgIC8vIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHJnYigxNjcsIDE2NywgMTY3KTtcclxuICB9XHJcblxyXG4gIC5jdXJyZW5jeXtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgcGFkZGluZzogLjc1cmVtO1xyXG4gIH1cclxuXHJcbiAgbGFiZWx7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgfVxyXG5cclxuICAuaW5wdXQtY2FyZHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxNjcsIDE2NywgMTY3KTtcclxuICAgIHBhZGRpbmc6IDAuN3JlbTtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgfVxyXG5cclxuICAuY29udGVuZWRvci1pbWFnZW57XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5jb250ZW5lZG9yLXBlcmZpbC1pbWFnZXtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIHdpZHRoOiAxNjBweDtcclxuICAgIGhlaWdodDogMTYwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgIC5pbWFnZS1wZXJmaWx7XHJcbiAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgfVxyXG5cclxuICAgIC5uby1pbWFnZS1wZXJmaWx7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxODgsIDE4OCwgMTg4KTtcclxuICAgICAgICBjb2xvcjogcmdiKDc4LCA3OCwgNzgpO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNzBweDtcclxuICAgIH1cclxufVxyXG5cclxuLmNvbnRlbmVkb3ItY2FyZHN7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gIFxyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblxyXG4gIGl7XHJcbiAgICBtYXJnaW4tbGVmdDogLjdyZW07XHJcbiAgfVxyXG59XHJcblxyXG4uZmVjaGEtY2N2e1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgXHJcbiAgZ2FwOiAxcmVtO1xyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNjAwcHgpIHtcclxuICAuZmVjaGEtY2N2IHsgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTsgfVxyXG59XHJcblxyXG4uY29udGVuZWRvci1mb3Jte1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNhYmFiYWI0NjtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcblxyXG4gIC5mb3JtLWxvYWRpbmd7XHJcbiAgICB6LWluZGV4OiAtMTtcclxuICB9XHJcbn1cclxuXHJcbi5oaWRlLWRpcmVjY2lvbntcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uc3Bpbm5lci1sb2Fke1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDUwJTtcclxuICBsZWZ0OiA0NiU7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});


/***/ }),

/***/ 8049:
/*!********************************************************************************!*\
  !*** ./src/app/landing/checkout-land/checkout-cash/checkout-cash.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CheckoutCashComponent: () => (/* binding */ CheckoutCashComponent)
/* harmony export */ });
/* harmony import */ var C_Smartdatacontact_Eyed_Eyed_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 72513);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 20274);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ 27889);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ 20553);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _checkout_land_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../checkout-land.service */ 56070);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var src_app_core_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/auth/auth.service */ 54855);
/* harmony import */ var src_app_core_user_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/user/user.service */ 58212);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 26575);











function CheckoutCashComponent_span_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span")(1, "div", 11)(2, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
}
function CheckoutCashComponent_span_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Continuar");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
const _c0 = function (a0) {
  return {
    "contenedor-form": a0
  };
};
class CheckoutCashComponent {
  constructor(cd, route, _checkoutService, fb, _authService, _userService, _router) {
    this.cd = cd;
    this.route = route;
    this._checkoutService = _checkoutService;
    this.fb = fb;
    this._authService = _authService;
    this._userService = _userService;
    this._router = _router;
    this.loading = false;
    this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subject();
    this.showDatosEnvio = true;
    //datos to create
    this.user = {};
    this.pulseras = [];
    this.paymentInfo = {};
    this.pulseraOk = '';
    this.userOk = '';
    this.checkOk = '';
    //usercreated
    this.userCreated = {};
    this.pulserasCreated = [];
    this.metodoPago = '';
    this.createStripeElement = () => {
      //TODO: SDK de Stripe inicia la generacion de elementos
      this.elementStripe = this.STRIPE.elements({
        fonts: [{
          cssSrc: 'https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400&display=swap'
        }]
      });
      const address = this.elementStripe.create('address', {
        mode: 'shipping',
        allowedCountries: ['MX'],
        fields: {
          phone: 'always'
        },
        validation: {
          phone: {
            required: 'always'
          }
        }
      });
      //TODO: SDK Montamos los elementos en nuestros DIV identificados on el #id
      address.mount('#datos-envio');
      this.address = address;
    };
    this.STRIPE = window.Stripe(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.stripe_pk);
    this.Toast = sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: toast => {
        toast.addEventListener('mouseenter', (sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().stopTimer));
        toast.addEventListener('mouseleave', (sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().resumeTimer));
      }
    });
  }
  ngOnInit() {
    // this.form = this.fb.group({
    //   amount: [''],
    // })
    this.createStripeElement();
    this._checkoutService.userData$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this._unsubscribeAll)).subscribe(user => {
      // Update the selected agente
      this.user = user;
      // Mark for check
      this.cd.markForCheck();
    });
    this._checkoutService.pulserasData$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this._unsubscribeAll)).subscribe(pulseras => {
      // Update the selected agente
      this.pulseras = pulseras;
      // Mark for check
      this.cd.markForCheck();
    });
    this._checkoutService.userOk$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this._unsubscribeAll)).subscribe(userOk => {
      // Update the selected agente
      this.userOk = userOk;
      if (this.userOk === 'ok' && this.pulseraOk === 'ok' && this.checkOk !== 'ok') {
        this._checkoutService.setcheckoutOk('ok');
      } else {
        this.enableInputs();
        // this.form.enable();
      }
      // Mark for check
      this.cd.markForCheck();
    });
    this._checkoutService.pulseraOk$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this._unsubscribeAll)).subscribe(pulseraOk => {
      // Update the selected agente
      this.pulseraOk = pulseraOk;
      if (this.userOk === 'ok' && this.pulseraOk === 'ok' && this.checkOk !== 'ok') {
        this._checkoutService.setcheckoutOk('ok');
      } else {
        this.enableInputs();
        // this.form.enable();
      }
      // Mark for check
      this.cd.markForCheck();
    });
    this._checkoutService.checkoutOk$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this._unsubscribeAll)).subscribe(checkOk => {
      this.checkOk = checkOk;
      if (checkOk === 'ok' && this.metodoPago === 'efectivo') {
        this.createUser();
      }
      // Mark for check
      this.cd.markForCheck();
    });
    this._checkoutService.metodoPago$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this._unsubscribeAll)).subscribe(metodo => {
      this.metodoPago = metodo;
      // Mark for check
      this.cd.markForCheck();
    });
  }
  initPay() {
    var _this = this;
    return (0,C_Smartdatacontact_Eyed_Eyed_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let address = _this.elementStripe.getElement('address');
      const {
        complete,
        value
      } = yield address.getValue();
      if (complete) {
        _this.datosEnvio = value;
        _this.orderDataCliente(value);
      }
    })();
  }
  orderDataCliente(address) {
    this._checkoutService.setProcessing('loading');
    this._checkoutService.setAddressData(address);
  }
  disableInputs() {
    this.loading = true;
  }
  enableInputs() {
    this.loading = false;
  }
  executePayment(id) {
    var _this2 = this;
    return (0,C_Smartdatacontact_Eyed_Eyed_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      var redirectURL;
      redirectURL = `/checkout-exito/${id}`;
      // Navigate to the redirect url
      _this2._router.navigateByUrl(redirectURL);
    })();
  }
  //Creacion usuario
  createUser() {
    setTimeout(() => {
      this.disableInputs();
      // this.form.disable();
      // console.log(this.user);
      this.verificarUser();
    }, 200);
  }
  /**
   * Sign up
   */
  signUp() {
    // Sign up
    this._authService.signUp(this.user).subscribe(response => {
      this.userCreated = response;
      let data = {
        email: this.user.email,
        password: this.user.password
      };
      this.signIn(data);
    }, response => {
      // Re-enable the form
      this._checkoutService.setuserOk('error');
      this._checkoutService.setcheckoutOk('error');
      this._checkoutService.setpulseraOk('error');
      let message = response.error.message;
      // Set the alert
      this.Toast.fire({
        icon: 'error',
        title: message
      });
      // this.disableButton = true;
    });
  }

  signIn(data) {
    // Sign in
    this._authService.signIn(data).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this._unsubscribeAll)).subscribe(response => {
      this.userCreated = response.user;
      this.ciclarPulseras(response.user);
    }, response => {
      // Re-enable the form
      this._checkoutService.setuserOk('error');
      this._checkoutService.setcheckoutOk('error');
      this._checkoutService.setpulseraOk('error');
      let message = response.error.message;
      // Set the alert
      this.Toast.fire({
        icon: 'error',
        title: message
      });
    });
  }
  verificarUser() {
    this._authService.existUser(this.user.email).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this._unsubscribeAll)).subscribe(response => {
      if (response) {
        let data = {
          email: this.user.email,
          password: this.user.password
        };
        this.signIn(data);
      } else {
        this.signUp();
      }
    }, error => {});
  }
  ciclarPulseras(user) {
    this.pulseras.pulseras.forEach(element => {
      element.userId = user._id;
      element.otros = this.datosEnvio;
    });
    this.crearPulseras(this.pulseras.pulseras);
  }
  crearPulseras(data) {
    this._userService.crearVariasManilla({
      manillas: data
    }).subscribe(response => {
      this.pulserasCreated = response;
      this.createPaymentIntent();
    }, response => {
      this.Toast.fire({
        icon: 'error',
        title: response.error.message
      });
    });
  }
  createPaymentIntent() {
    let data = {
      userId: this.userCreated._id,
      monto: this.pulseras.precio,
      metodo: 'Efectivo',
      manillasId: this.getPulserasIds(),
      otros: {
        list: this.pulseras.lista,
        precio: this.pulseras.precio,
        envio: this.datosEnvio
      }
    };
    this._checkoutService.generateOrder(data).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this._unsubscribeAll)).subscribe(response => {
      this.paymentInfo = response;
      this.executePayment(response._id);
    }, error => {
      this.Toast.fire({
        icon: 'error',
        title: error.error.message
      });
    });
  }
  getPulserasIds() {
    let pulseras = [];
    this.pulserasCreated.forEach(pulsera => {
      pulseras.push(pulsera._id);
    });
    return pulseras;
  }
}
CheckoutCashComponent.ɵfac = function CheckoutCashComponent_Factory(t) {
  return new (t || CheckoutCashComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_checkout_land_service__WEBPACK_IMPORTED_MODULE_3__.CheckoutLandService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_core_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_core_user_user_service__WEBPACK_IMPORTED_MODULE_5__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router));
};
CheckoutCashComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: CheckoutCashComponent,
  selectors: [["app-checkout-cash"]],
  decls: 15,
  vars: 5,
  consts: [[1, "checkout"], [1, "checkout-in"], [1, "checkout-card"], [1, "checkbox-alert"], [3, "ngClass"], [1, "input"], [1, "label"], ["id", "datos-envio"], [1, "form-loading", 3, "submit"], ["type", "submit", 1, "button"], [4, "ngIf"], ["role", "status", 1, "spinner-border"], [1, "visually-hidden"]],
  template: function CheckoutCashComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, " A continuaci\u00F3n debes de introducir los datos de la direccion de envio de su pulsera. Nos pondremos en contacto contigo para finalizar el pago de la pulsera ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 4)(6, "div", 5)(7, "label", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "Datos de envio");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](9, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "form", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("submit", function CheckoutCashComponent_Template_form_submit_10_listener() {
        return ctx.initPay();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](11, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "button", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](13, CheckoutCashComponent_span_13_Template, 4, 0, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](14, CheckoutCashComponent_span_14_Template, 2, 0, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](3, _c0, ctx.loading));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.loading);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.loading);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgForm],
  styles: [".checkout[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin: auto;\n  padding: 2rem 0;\n  height: 100%;\n  width: 100%;\n}\n\n.checkout-in[_ngcontent-%COMP%] {\n  margin: 0.5rem;\n  width: 100%;\n  padding: 0rem 2rem 2rem 2rem;\n  background-color: white;\n  border-radius: 3rem;\n}\n\n.checkout-user[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 1rem 0 2rem;\n}\n\n.checkout-user[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%] {\n  width: 150px;\n  height: 150px;\n  border-radius: 100%;\n  object-fit: cover;\n  box-shadow: -2px 5px 20px 0 rgba(173, 173, 173, 0.19);\n}\n\n.button[_ngcontent-%COMP%] {\n  margin: 1.5rem 0;\n  width: 100%;\n  border: 0;\n  height: 40px;\n  border-radius: 0.75rem;\n  color: white;\n  text-transform: uppercase;\n  font-size: 1rem;\n  font-weight: 600;\n  background-color: #22244E;\n}\n\nhr[_ngcontent-%COMP%] {\n  border-top: 0;\n  border-bottom: solid 0px whitesmoke;\n  margin: 0.5rem 0;\n}\n\n.terms[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  padding: 0.5rem;\n  font-size: 80%;\n}\n\n.terms[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  font-weight: 500;\n  color: #8a8a8a;\n}\n\n.checkbox-alert[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  padding: 0.75rem;\n  font-weight: 500;\n  border-radius: 0.75rem;\n  box-shadow: -2px 5px 20px 0 rgba(173, 173, 173, 0.19);\n  margin-bottom: 1rem;\n  margin-top: 1rem;\n}\n\n.checkout-customer[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 1.5rem;\n  margin-bottom: 1rem;\n}\n\n.highlight[_ngcontent-%COMP%] {\n  padding: 0.7rem;\n  background-color: var(--theme-gradient2);\n}\n\n.input-amount[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  background-color: transparent;\n  position: relative;\n  flex: 1 1 auto;\n  width: 1%;\n  min-width: 0;\n  border: none;\n  padding: 0.7rem;\n  font-size: 20px;\n  font-weight: bolder;\n}\n\n.input-amount[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  border: none;\n  background-color: white;\n}\n\n.currency[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  padding: 0.75rem;\n}\n\nlabel[_ngcontent-%COMP%] {\n  color: black;\n}\n\n.input-card[_ngcontent-%COMP%] {\n  border-radius: 5px;\n  border: 1px solid rgb(167, 167, 167);\n  padding: 0.7rem;\n  font-size: 20px;\n  font-weight: bolder;\n}\n\n.contenedor-imagen[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  text-align: center;\n}\n\n.contenedor-perfil-image[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-top: 10px;\n  width: 160px;\n  height: 160px;\n  border-radius: 50%;\n  overflow: hidden;\n  cursor: pointer;\n}\n.contenedor-perfil-image[_ngcontent-%COMP%]   .image-perfil[_ngcontent-%COMP%] {\n  object-fit: cover;\n  width: 100%;\n  height: 100%;\n}\n.contenedor-perfil-image[_ngcontent-%COMP%]   .no-image-perfil[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  background-color: rgb(188, 188, 188);\n  color: rgb(78, 78, 78);\n  font-weight: bold;\n  font-size: 70px;\n}\n\n.contenedor-cards[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: flex-end;\n  flex-direction: row;\n}\n.contenedor-cards[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-left: 0.7rem;\n}\n\n.fecha-ccv[_ngcontent-%COMP%] {\n  width: 100%;\n  display: grid;\n  gap: 1rem;\n}\n\n@media (min-width: 600px) {\n  .fecha-ccv[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n.contenedor-form[_ngcontent-%COMP%] {\n  background-color: rgba(171, 171, 171, 0.2745098039);\n  border-radius: 10px;\n  padding: 10px;\n  pointer-events: none;\n}\n.contenedor-form[_ngcontent-%COMP%]   .form-loading[_ngcontent-%COMP%] {\n  z-index: -1;\n}\n\n.hide-direccion[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.spinner-load[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 46%;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbGFuZGluZy9jaGVja291dC1sYW5kL2NoZWNrb3V0LWNhc2gvY2hlY2tvdXQtY2FzaC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFDSjs7QUFHRTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsNEJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBQUo7O0FBR0U7RUFDRSxrQkFBQTtFQUNBLG9CQUFBO0FBQUo7O0FBR0U7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxxREFBQTtBQUFKOztBQUlFO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0FBREo7O0FBSUU7RUFDRSxhQUFBO0VBQ0EsbUNBQUE7RUFDQSxnQkFBQTtBQURKOztBQUlFO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFESjs7QUFJRTtFQUNFLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBREo7O0FBTUU7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLHFEQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQUhKOztBQU9FO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBSko7O0FBT0U7RUFDRSxlQUFBO0VBQ0Esd0NBQUE7QUFKSjs7QUFXRTtFQUNFLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBS0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQVpKOztBQWVFO0VBQ0UsWUFBQTtFQUNBLHVCQUFBO0FBWko7O0FBbUJFO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsZ0JBQUE7QUFoQko7O0FBbUJFO0VBQ0UsWUFBQTtBQWhCSjs7QUFtQkU7RUFDRSxrQkFBQTtFQUNBLG9DQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQWhCSjs7QUFtQkU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUFoQko7O0FBbUJFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBaEJKO0FBa0JJO0VBQ0ksaUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQWhCUjtBQW1CSTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLG9DQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFqQlI7O0FBcUJBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUVBLG1CQUFBO0FBbkJGO0FBcUJFO0VBQ0UsbUJBQUE7QUFuQko7O0FBdUJBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFFQSxTQUFBO0FBckJGOztBQXdCQTtFQUNFO0lBQWEscUNBQUE7RUFwQmI7QUFDRjtBQXNCQTtFQUNFLG1EQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7QUFwQkY7QUFzQkU7RUFDRSxXQUFBO0FBcEJKOztBQXdCQTtFQUNFLGFBQUE7QUFyQkY7O0FBd0JBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtBQXJCRiIsInNvdXJjZXNDb250ZW50IjpbIi5jaGVja291dCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBwYWRkaW5nOiAycmVtIDA7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgLmNoZWNrb3V0LWluIHtcclxuICAgIG1hcmdpbjogLjVyZW07XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDByZW0gMnJlbSAycmVtIDJyZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNyZW07XHJcbiAgfVxyXG4gIFxyXG4gIC5jaGVja291dC11c2VyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDFyZW0gMCAycmVtO1xyXG4gIH1cclxuICBcclxuICAuY2hlY2tvdXQtdXNlciAuYXZhdGFyIHtcclxuICAgIHdpZHRoOiAxNTBweDtcclxuICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICBib3gtc2hhZG93OiAtMnB4IDVweCAyMHB4IDAgcmdiKDE3MyAxNzMgMTczIC8gMTklKTtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgLmJ1dHRvbiB7XHJcbiAgICBtYXJnaW46IDEuNXJlbSAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAuNzVyZW07XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMjI0NEU7XHJcbiAgfVxyXG4gIFxyXG4gIGhyIHtcclxuICAgIGJvcmRlci10b3A6IDA7XHJcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAwcHggd2hpdGVzbW9rZTtcclxuICAgIG1hcmdpbjogLjVyZW0gMFxyXG4gIH1cclxuICBcclxuICAudGVybXN7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgcGFkZGluZzogLjVyZW07XHJcbiAgICBmb250LXNpemU6IDgwJTtcclxuICB9XHJcbiAgXHJcbiAgLnRlcm1zIGF7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgY29sb3I6ICM4YThhOGE7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIFxyXG4gIC5jaGVja2JveC1hbGVydHtcclxuICAgIGZvbnQtc2l6ZTogLjlyZW07XHJcbiAgICBwYWRkaW5nOiAuNzVyZW07XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogLjc1cmVtO1xyXG4gICAgYm94LXNoYWRvdzogLTJweCA1cHggMjBweCAwIHJnYigxNzMgMTczIDE3MyAvIDE5JSk7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgLmNoZWNrb3V0LWN1c3RvbWVyIC50aXRsZXtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgfVxyXG4gIFxyXG4gIC5oaWdobGlnaHR7XHJcbiAgICBwYWRkaW5nOiAwLjdyZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10aGVtZS1ncmFkaWVudDIpO1xyXG4gIH1cclxuICBcclxuICAvLyAuaW5wdXQtYW1vdW50e1xyXG4gIC8vICAgLy8gcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIC8vIH1cclxuICBcclxuICAuaW5wdXQtYW1vdW50IGlucHV0e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBmbGV4OiAxIDEgYXV0bztcclxuICAgIHdpZHRoOiAxJTtcclxuICAgIG1pbi13aWR0aDogMDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIC8vIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIC8vIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2IoMTY3LCAxNjcsIDE2Nyk7XHJcbiAgICAvLyBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiKDE2NywgMTY3LCAxNjcpO1xyXG4gICAgLy8gYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCByZ2IoMTY3LCAxNjcsIDE2Nyk7XHJcbiAgICBwYWRkaW5nOiAwLjdyZW07XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gIH1cclxuXHJcbiAgLmlucHV0LWFtb3VudCBzcGFue1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAvLyBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAvLyBib3JkZXItdG9wOiAxcHggc29saWQgcmdiKDE2NywgMTY3LCAxNjcpO1xyXG4gICAgLy8gYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYigxNjcsIDE2NywgMTY3KTtcclxuICAgIC8vIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHJnYigxNjcsIDE2NywgMTY3KTtcclxuICB9XHJcblxyXG4gIC5jdXJyZW5jeXtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgcGFkZGluZzogLjc1cmVtO1xyXG4gIH1cclxuXHJcbiAgbGFiZWx7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgfVxyXG5cclxuICAuaW5wdXQtY2FyZHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxNjcsIDE2NywgMTY3KTtcclxuICAgIHBhZGRpbmc6IDAuN3JlbTtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgfVxyXG5cclxuICAuY29udGVuZWRvci1pbWFnZW57XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5jb250ZW5lZG9yLXBlcmZpbC1pbWFnZXtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIHdpZHRoOiAxNjBweDtcclxuICAgIGhlaWdodDogMTYwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgIC5pbWFnZS1wZXJmaWx7XHJcbiAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgfVxyXG5cclxuICAgIC5uby1pbWFnZS1wZXJmaWx7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxODgsIDE4OCwgMTg4KTtcclxuICAgICAgICBjb2xvcjogcmdiKDc4LCA3OCwgNzgpO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNzBweDtcclxuICAgIH1cclxufVxyXG5cclxuLmNvbnRlbmVkb3ItY2FyZHN7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gIFxyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblxyXG4gIGl7XHJcbiAgICBtYXJnaW4tbGVmdDogLjdyZW07XHJcbiAgfVxyXG59XHJcblxyXG4uZmVjaGEtY2N2e1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgXHJcbiAgZ2FwOiAxcmVtO1xyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNjAwcHgpIHtcclxuICAuZmVjaGEtY2N2IHsgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTsgfVxyXG59XHJcblxyXG4uY29udGVuZWRvci1mb3Jte1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNhYmFiYWI0NjtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcblxyXG4gIC5mb3JtLWxvYWRpbmd7XHJcbiAgICB6LWluZGV4OiAtMTtcclxuICB9XHJcbn1cclxuXHJcbi5oaWRlLWRpcmVjY2lvbntcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uc3Bpbm5lci1sb2Fke1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDUwJTtcclxuICBsZWZ0OiA0NiU7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});


/***/ }),

/***/ 62297:
/*!******************************************************************!*\
  !*** ./src/app/landing/checkout-land/checkout-land.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CheckoutLandComponent: () => (/* binding */ CheckoutLandComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 72513);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 20274);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ 27889);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _checkout_land_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checkout-land.service */ 56070);
/* harmony import */ var src_app_core_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/auth/auth.service */ 54855);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 76101);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/components/breadcrumb/breadcrumb.component */ 14414);
/* harmony import */ var ngx_autosize__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-autosize */ 8099);
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-mask */ 97728);
/* harmony import */ var _home_widgets_logo_logo_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../home/widgets/logo/logo.component */ 85619);
/* harmony import */ var _checkout_card_checkout_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./checkout-card/checkout-card.component */ 75048);
/* harmony import */ var _checkout_cash_checkout_cash_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./checkout-cash/checkout-cash.component */ 8049);
/* harmony import */ var _register_card_register_card_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./register-card/register-card.component */ 44839);

















function CheckoutLandComponent_option_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "option", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](1, "json");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const type_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](1, 2, type_r6));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](type_r6.description);
  }
}
function CheckoutLandComponent_div_34_div_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 46)(1, "div", 62)(2, "div", 63)(3, "span", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
  }
}
const _c0 = function (a0) {
  return {
    "error-valid-input": a0
  };
};
function CheckoutLandComponent_div_34_ng_container_20_ng_container_5_div_1_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "i", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    const i_r14 = ctx_r27.index;
    const field_r13 = ctx_r27.$implicit;
    const pulsera_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](1, _c0, field_r13.get(pulsera_r7.fields[i_r14].name).invalid && field_r13.get(pulsera_r7.fields[i_r14].name).touched || field_r13.get(pulsera_r7.fields[i_r14].name).hasError("email")));
  }
}
const _c1 = function (a0, a1, a2) {
  return {
    "error-valid-input": a0,
    "border-private-true": a1,
    "border-private-false": a2
  };
};
function CheckoutLandComponent_div_34_ng_container_20_ng_container_5_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 70)(1, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "input", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, CheckoutLandComponent_div_34_ng_container_20_ng_container_5_div_1_span_3_Template, 2, 3, "span", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    const i_r14 = ctx_r29.index;
    const field_r13 = ctx_r29.$implicit;
    const pulsera_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction3"](5, _c1, field_r13.get(pulsera_r7.fields[i_r14].name).invalid && field_r13.get(pulsera_r7.fields[i_r14].name).touched || field_r13.get(pulsera_r7.fields[i_r14].name).hasError("email"), pulsera_r7.fields[i_r14].private, !pulsera_r7.fields[i_r14].private))("formControl", field_r13.get(pulsera_r7.fields[i_r14].name))("id", pulsera_r7.fields[i_r14].name)("placeholder", pulsera_r7.fields[i_r14].description);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", pulsera_r7.fields[i_r14].private);
  }
}
function CheckoutLandComponent_div_34_ng_container_20_ng_container_5_div_2_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "i", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    const i_r14 = ctx_r32.index;
    const field_r13 = ctx_r32.$implicit;
    const pulsera_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](1, _c0, field_r13.get(pulsera_r7.fields[i_r14].name).invalid && field_r13.get(pulsera_r7.fields[i_r14].name).touched || field_r13.get(pulsera_r7.fields[i_r14].name).hasError("email")));
  }
}
function CheckoutLandComponent_div_34_ng_container_20_ng_container_5_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 70)(1, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "input", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, CheckoutLandComponent_div_34_ng_container_20_ng_container_5_div_2_span_3_Template, 2, 3, "span", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    const i_r14 = ctx_r34.index;
    const field_r13 = ctx_r34.$implicit;
    const pulsera_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction3"](5, _c1, field_r13.get(pulsera_r7.fields[i_r14].name).invalid && field_r13.get(pulsera_r7.fields[i_r14].name).touched, pulsera_r7.fields[i_r14].private, !pulsera_r7.fields[i_r14].private))("formControl", field_r13.get(pulsera_r7.fields[i_r14].name))("id", pulsera_r7.fields[i_r14].name)("placeholder", pulsera_r7.fields[i_r14].description);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", pulsera_r7.fields[i_r14].private);
  }
}
function CheckoutLandComponent_div_34_ng_container_20_ng_container_5_div_3_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "i", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    const i_r14 = ctx_r37.index;
    const field_r13 = ctx_r37.$implicit;
    const pulsera_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](1, _c0, field_r13.get(pulsera_r7.fields[i_r14].name).invalid && field_r13.get(pulsera_r7.fields[i_r14].name).touched || field_r13.get(pulsera_r7.fields[i_r14].name).hasError("email")));
  }
}
function CheckoutLandComponent_div_34_ng_container_20_ng_container_5_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 70)(1, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "input", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, CheckoutLandComponent_div_34_ng_container_20_ng_container_5_div_3_span_3_Template, 2, 3, "span", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    const i_r14 = ctx_r39.index;
    const field_r13 = ctx_r39.$implicit;
    const pulsera_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction3"](5, _c1, field_r13.get(pulsera_r7.fields[i_r14].name).invalid && field_r13.get(pulsera_r7.fields[i_r14].name).touched, pulsera_r7.fields[i_r14].private, !pulsera_r7.fields[i_r14].private))("formControl", field_r13.get(pulsera_r7.fields[i_r14].name))("id", pulsera_r7.fields[i_r14].name)("placeholder", pulsera_r7.fields[i_r14].description);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", pulsera_r7.fields[i_r14].private);
  }
}
const _c2 = function () {
  return {
    year: 1920,
    month: 1,
    day: 1
  };
};
const _c3 = function (a0, a1, a2) {
  return {
    year: a0,
    month: a1,
    day: a2
  };
};
function CheckoutLandComponent_div_34_ng_container_20_ng_container_5_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 70)(1, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "input", 77, 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "button", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function CheckoutLandComponent_div_34_ng_container_20_ng_container_5_div_4_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r42);
      const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](_r40.toggle());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](5, "i", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    const i_r14 = ctx_r44.index;
    const field_r13 = ctx_r44.$implicit;
    const pulsera_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2).$implicit;
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction3"](5, _c1, field_r13.get(pulsera_r7.fields[i_r14].name).invalid && field_r13.get(pulsera_r7.fields[i_r14].name).touched, pulsera_r7.fields[i_r14].private, !pulsera_r7.fields[i_r14].private))("id", pulsera_r7.fields[i_r14].name)("formControl", field_r13.get(pulsera_r7.fields[i_r14].name))("minDate", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](9, _c2))("maxDate", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction3"](10, _c3, ctx_r20.maxDate.year, ctx_r20.maxDate.month, ctx_r20.maxDate.day));
  }
}
function CheckoutLandComponent_div_34_ng_container_20_ng_container_5_div_5_option_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "option", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const opt_r47 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", opt_r47);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](opt_r47);
  }
}
function CheckoutLandComponent_div_34_ng_container_20_ng_container_5_div_5_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "i", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    const i_r14 = ctx_r49.index;
    const field_r13 = ctx_r49.$implicit;
    const pulsera_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](1, _c0, field_r13.get(pulsera_r7.fields[i_r14].name).invalid && field_r13.get(pulsera_r7.fields[i_r14].name).touched || field_r13.get(pulsera_r7.fields[i_r14].name).hasError("email")));
  }
}
function CheckoutLandComponent_div_34_ng_container_20_ng_container_5_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 70)(1, "div", 71)(2, "select", 81)(3, "option", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](5, CheckoutLandComponent_div_34_ng_container_20_ng_container_5_div_5_option_5_Template, 2, 2, "option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](6, CheckoutLandComponent_div_34_ng_container_20_ng_container_5_div_5_span_6_Template, 2, 3, "span", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    const i_r14 = ctx_r51.index;
    const field_r13 = ctx_r51.$implicit;
    const pulsera_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction3"](5, _c1, field_r13.get(pulsera_r7.fields[i_r14].name).invalid && field_r13.get(pulsera_r7.fields[i_r14].name).touched, pulsera_r7.fields[i_r14].private, !pulsera_r7.fields[i_r14].private))("formControl", field_r13.get(pulsera_r7.fields[i_r14].name));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](pulsera_r7.fields[i_r14].description);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", pulsera_r7.fields[i_r14].opciones);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", pulsera_r7.fields[i_r14].private);
  }
}
function CheckoutLandComponent_div_34_ng_container_20_ng_container_5_div_6_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "i", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    const i_r14 = ctx_r54.index;
    const field_r13 = ctx_r54.$implicit;
    const pulsera_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](1, _c0, field_r13.get(pulsera_r7.fields[i_r14].name).invalid && field_r13.get(pulsera_r7.fields[i_r14].name).touched || field_r13.get(pulsera_r7.fields[i_r14].name).hasError("email")));
  }
}
function CheckoutLandComponent_div_34_ng_container_20_ng_container_5_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 70)(1, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "textarea", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, CheckoutLandComponent_div_34_ng_container_20_ng_container_5_div_6_span_3_Template, 2, 3, "span", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    const i_r14 = ctx_r56.index;
    const field_r13 = ctx_r56.$implicit;
    const pulsera_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction3"](6, _c1, field_r13.get(pulsera_r7.fields[i_r14].name).invalid && field_r13.get(pulsera_r7.fields[i_r14].name).touched, pulsera_r7.fields[i_r14].private, !pulsera_r7.fields[i_r14].private))("autosize", true)("formControl", field_r13.get(pulsera_r7.fields[i_r14].name))("id", pulsera_r7.fields[i_r14].name)("placeholder", pulsera_r7.fields[i_r14].description);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", pulsera_r7.fields[i_r14].private);
  }
}
function CheckoutLandComponent_div_34_ng_container_20_ng_container_5_div_7_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "i", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    const i_r14 = ctx_r59.index;
    const field_r13 = ctx_r59.$implicit;
    const pulsera_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](1, _c0, field_r13.get(pulsera_r7.fields[i_r14].name).invalid && field_r13.get(pulsera_r7.fields[i_r14].name).touched || field_r13.get(pulsera_r7.fields[i_r14].name).hasError("email")));
  }
}
function CheckoutLandComponent_div_34_ng_container_20_ng_container_5_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 70)(1, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "input", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, CheckoutLandComponent_div_34_ng_container_20_ng_container_5_div_7_span_3_Template, 2, 3, "span", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    const i_r14 = ctx_r61.index;
    const field_r13 = ctx_r61.$implicit;
    const pulsera_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction3"](5, _c1, field_r13.get(pulsera_r7.fields[i_r14].name).invalid && field_r13.get(pulsera_r7.fields[i_r14].name).touched, pulsera_r7.fields[i_r14].private, !pulsera_r7.fields[i_r14].private))("formControl", field_r13.get(pulsera_r7.fields[i_r14].name))("id", pulsera_r7.fields[i_r14].name)("placeholder", pulsera_r7.fields[i_r14].description);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", pulsera_r7.fields[i_r14].private);
  }
}
function CheckoutLandComponent_div_34_ng_container_20_ng_container_5_div_8_i_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "i", 60);
  }
}
function CheckoutLandComponent_div_34_ng_container_20_ng_container_5_div_8_span_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const i_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2).index;
    const pulsera_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2).$implicit;
    const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r64.filesList[pulsera_r7.campo][pulsera_r7.fields[i_r14].name]);
  }
}
function CheckoutLandComponent_div_34_ng_container_20_ng_container_5_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r68 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 70)(1, "div", 85)(2, "button", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function CheckoutLandComponent_div_34_ng_container_20_ng_container_5_div_8_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r68);
      const _r63 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](7);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](_r63.click());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "i", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](5, CheckoutLandComponent_div_34_ng_container_20_ng_container_5_div_8_i_5_Template, 1, 0, "i", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "input", 89, 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("change", function CheckoutLandComponent_div_34_ng_container_20_ng_container_5_div_8_Template_input_change_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r68);
      const i_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().index;
      const pulsera_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2).$implicit;
      const ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r69.onFileSelected($event, pulsera_r7.fields[i_r14].name, i_r14, pulsera_r7.campo));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](8, CheckoutLandComponent_div_34_ng_container_20_ng_container_5_div_8_span_8_Template, 2, 1, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    const i_r14 = ctx_r73.index;
    const field_r13 = ctx_r73.$implicit;
    const pulsera_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2).$implicit;
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](7, _c0, field_r13.get(pulsera_r7.fields[i_r14].name).invalid && field_r13.get(pulsera_r7.fields[i_r14].name).touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", pulsera_r7.fields[i_r14].description, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", pulsera_r7.fields[i_r14].private);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formControl", field_r13.get(pulsera_r7.fields[i_r14].name))("id", pulsera_r7.fields[i_r14].name)("placeholder", pulsera_r7.fields[i_r14].description);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r24.filesList[pulsera_r7.campo][pulsera_r7.fields[i_r14].name]);
  }
}
function CheckoutLandComponent_div_34_ng_container_20_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, CheckoutLandComponent_div_34_ng_container_20_ng_container_5_div_1_Template, 4, 9, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, CheckoutLandComponent_div_34_ng_container_20_ng_container_5_div_2_Template, 4, 9, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, CheckoutLandComponent_div_34_ng_container_20_ng_container_5_div_3_Template, 4, 9, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, CheckoutLandComponent_div_34_ng_container_20_ng_container_5_div_4_Template, 6, 14, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](5, CheckoutLandComponent_div_34_ng_container_20_ng_container_5_div_5_Template, 7, 9, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](6, CheckoutLandComponent_div_34_ng_container_20_ng_container_5_div_6_Template, 4, 10, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](7, CheckoutLandComponent_div_34_ng_container_20_ng_container_5_div_7_Template, 4, 9, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](8, CheckoutLandComponent_div_34_ng_container_20_ng_container_5_div_8_Template, 9, 9, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const i_r14 = ctx.index;
    const pulsera_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", pulsera_r7.fields[i_r14].type === "email" && (pulsera_r7.fields[i_r14].required || pulsera_r7.showOptionals));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", pulsera_r7.fields[i_r14].type === "text" && (pulsera_r7.fields[i_r14].required || pulsera_r7.showOptionals));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", pulsera_r7.fields[i_r14].type === "telefono" && (pulsera_r7.fields[i_r14].required || pulsera_r7.showOptionals));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", pulsera_r7.fields[i_r14].type === "Date" && (pulsera_r7.fields[i_r14].required || pulsera_r7.showOptionals));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", pulsera_r7.fields[i_r14].type === "select" && (pulsera_r7.fields[i_r14].required || pulsera_r7.showOptionals));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", pulsera_r7.fields[i_r14].type === "textarea" && (pulsera_r7.fields[i_r14].required || pulsera_r7.showOptionals));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", pulsera_r7.fields[i_r14].type === "number" && (pulsera_r7.fields[i_r14].required || pulsera_r7.showOptionals));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", pulsera_r7.fields[i_r14].type === "file" && (pulsera_r7.fields[i_r14].required || pulsera_r7.showOptionals));
  }
}
const _c4 = function () {
  return {
    standalone: true
  };
};
function CheckoutLandComponent_div_34_ng_container_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r77 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 65)(2, "input", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function CheckoutLandComponent_div_34_ng_container_20_Template_input_ngModelChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r77);
      const pulsera_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](pulsera_r7.showOptionals = $event);
    })("change", function CheckoutLandComponent_div_34_ng_container_20_Template_input_change_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r77);
      const pulsera_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
      const ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r78.onChangeOpcionales(pulsera_r7.campo, pulsera_r7.fields, pulsera_r7.showOptionals));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "label", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, "Mostrar campos opcionales");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](5, CheckoutLandComponent_div_34_ng_container_20_ng_container_5_Template, 9, 8, "ng-container", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const pulsera_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", ctx_r11.disableButtons)("ngModel", pulsera_r7.showOptionals)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](5, _c4));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r11.manillaForm.get(pulsera_r7.campo)["controls"])("ngForTrackBy", ctx_r11.trackByFn);
  }
}
const _c5 = function (a0) {
  return {
    "show": a0
  };
};
function CheckoutLandComponent_div_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r82 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 49)(1, "h2", 50)(2, "a", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div", 52)(5, "div", 53)(6, "form", 54, 55)(8, "div", 45)(9, "div", 56)(10, "button", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function CheckoutLandComponent_div_34_Template_button_click_10_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r82);
      const pulsera_r7 = restoredCtx.$implicit;
      const ind_r8 = restoredCtx.index;
      const ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r81.deleteFormGroup(pulsera_r7, ind_r8));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](11, "i", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "p", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](13, "Los campos marcados con * son obligatorios");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "p", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](15, "Los campos marcados con ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](16, "i", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](17, " es informacion que sera privada y no se compartira con nadie");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](18, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](19, CheckoutLandComponent_div_34_div_19_Template, 5, 0, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](20, CheckoutLandComponent_div_34_ng_container_20_Template, 6, 6, "ng-container", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const pulsera_r7 = ctx.$implicit;
    const ind_r8 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate1"]("id", "heading", ind_r8, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate1"]("href", "#collapse", ind_r8, "", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵattributeInterpolate1"]("aria-controls", "collapse", ind_r8, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" Pulsera ", pulsera_r7 == null ? null : pulsera_r7.type == null ? null : pulsera_r7.type.description, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate1"]("id", "collapse", ind_r8, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵattributeInterpolate1"]("aria-labelledby", "heading", ind_r8, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](11, _c5, pulsera_r7.expanded));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx_r1.manillaForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", ctx_r1.disableButtons);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.loadingFields["pl{{ind + 1}}"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r1.loadingFields["pl{{ind + 1}}"]);
  }
}
function CheckoutLandComponent_ng_container_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "p", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "\u00A1No hay pulseras seleccionadas!");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }
}
function CheckoutLandComponent_ng_container_45_li_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](4, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const type_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    const ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"](" Pulsera ", type_r83.description, " \u00D7 ", ctx_r84.typesSelected[type_r83.name], " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind3"](4, 3, type_r83.precio * ctx_r84.typesSelected[type_r83.name], "MXN $", "symbol"), " ");
  }
}
function CheckoutLandComponent_ng_container_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0)(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, CheckoutLandComponent_ng_container_45_li_2_Template, 5, 7, "li", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]()();
  }
  if (rf & 2) {
    const type_r83 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r3.typesSelected[type_r83.name] > 0);
  }
}
function CheckoutLandComponent_ng_container_74_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "app-checkout-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }
}
function CheckoutLandComponent_ng_container_75_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "app-checkout-cash");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }
}
class CheckoutLandComponent {
  constructor(_checkoutService, _formBuilder, _changeDetectorRef, _authService, viewScroller, _activatedRoute) {
    this._checkoutService = _checkoutService;
    this._formBuilder = _formBuilder;
    this._changeDetectorRef = _changeDetectorRef;
    this._authService = _authService;
    this.viewScroller = viewScroller;
    this._activatedRoute = _activatedRoute;
    this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_9__.Subject();
    this.user = {};
    this.metodoPago = 'tarjeta';
    this.loading = false;
    this.showInfo = false;
    this.metodo = '';
    this.address = {};
    this.idPago = '';
    this.maxDate = {};
    this.precio = 0;
    this.typesSelected = {};
    // Logo
    this.logo = [{
      image: "assets/images/logos/1.png"
    }, {
      image: "assets/images/logos/3.png"
    }, {
      image: "assets/images/logos/2.png"
    }, {
      image: "assets/images/logos/4.png"
    }, {
      image: "assets/images/logos/5.png"
    }, {
      image: "assets/images/logos/6.png"
    }, {
      image: "assets/images/logos/7.png"
    }];
    //lista pulseras
    this.selectTypeControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('');
    this.selectdType = '';
    this.paramType = '';
    this.pulseras = [];
    this.types = [];
    this.loadingFields = [];
    this.filesList = {};
    this.filesToUpload = {};
    this.processing = '';
    this.fechasTemp = {};
    this.disableButtons = false;
    let today = new Date();
    this.maxDate.year = today.getFullYear();
    this.maxDate.month = today.getMonth() + 1;
    this.maxDate.day = today.getDate();
    this.Toast = sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: toast => {
        toast.addEventListener('mouseenter', (sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().stopTimer));
        toast.addEventListener('mouseleave', (sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().resumeTimer));
      }
    });
    this.paramType = this._activatedRoute.snapshot.paramMap.get('pulsera');
  }
  ngOnInit() {
    this._authService.signOutCheckOut();
    this._checkoutService.setmetodoPago('tarjeta');
    this.manillaForm = this._formBuilder.group({});
    this._checkoutService.processing$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_11__.takeUntil)(this._unsubscribeAll)).subscribe(processing => {
      // Update the selected agente
      this.processing = processing;
      if (processing === 'loading') {
        this.orderDataPulseras();
      }
      // Mark for check
      this._changeDetectorRef.markForCheck();
    });
    this._checkoutService.pulserasTypes$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_11__.takeUntil)(this._unsubscribeAll)).subscribe(types => {
      // Update the selected agente
      this.types = types;
      this.orderSelectedTypes();
      this.selectType(this.paramType);
      // Mark for check
      this._changeDetectorRef.markForCheck();
    });
    this._checkoutService.userOk$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_11__.takeUntil)(this._unsubscribeAll)).subscribe(userOk => {
      if (userOk === 'error') {
        this.manillaForm.enable();
        this.disableButtons = false;
        this._checkoutService.setcheckoutOk('error');
      }
      // Mark for check
      this._changeDetectorRef.markForCheck();
    });
    this._checkoutService.checkoutOk$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_11__.takeUntil)(this._unsubscribeAll)).subscribe(pulseraOk => {
      if (pulseraOk === 'error') {
        this.manillaForm.enable();
        this.disableButtons = false;
      }
      // Mark for check
      this._changeDetectorRef.markForCheck();
    });
  }
  /**
   * On destroy
   */
  ngOnDestroy() {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next(null);
    this._unsubscribeAll.complete();
  }
  orderSelectedTypes() {
    this.types.forEach(type => {
      this.typesSelected[type.name] = 0;
    });
  }
  metodoPagoChange(event) {
    this.metodoPago = event;
    this._checkoutService.setmetodoPago(event);
  }
  addPulsera(type, description) {
    let indexPulsera = this.pulseras.length + 1;
    this.loadingFields[`pl${indexPulsera}`] = true;
    this.getFieldsByType(type, indexPulsera, description);
  }
  getFieldsByType(type, index, description) {
    this._checkoutService.getFieldsByUserTypes(type).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_11__.takeUntil)(this._unsubscribeAll)).subscribe(response => {
      this.addFormGroupToForm(index, response, description);
    }, error => {
      console.log(error);
    });
  }
  addFieldsToFormGroup(fieldsList, campo, description) {
    fieldsList.forEach((element, index) => {
      let campos = {};
      if (element.type === 'number' && element.required) {
        campos[element.name] = ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.pattern("[0-9]*")]];
      }
      if (element.type === 'number' && !element.required) {
        campos[element.name] = ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.pattern("[0-9]*")]];
      }
      if (element.required && element.type !== 'number' && element.type !== 'Date') {
        campos[element.name] = ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]];
      }
      if (!element.required && element.type !== 'number' && element.type !== 'Date') {
        campos[element.name] = [""];
      }
      if (element.type === 'Date' && element.required) {
        campos[element.name] = [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]];
      }
      if (element.type === 'Date' && !element.required) {
        campos[element.name] = [null];
      }
      // Create an empty calle form group
      const clienteFormGroup = this._formBuilder.group(campos);
      // Add the calle form group to the phoneNumbers form array
      this.manillaForm.get(campo).push(clienteFormGroup);
      if (element.type === 'Date') {
        this.fechasTemp[campo] = {};
        this.manillaForm.get(campo)['controls'][index]['controls'][element.name].valueChanges.subscribe(data => {
          // this.fechasTemp[campo][element.name] = data;
          if (!data || typeof data === 'string' && data.length == 0) {
            this.manillaForm.get(campo)['controls'][index].patchValue({
              [element.name]: null
            }, {
              emitEvent: false
            });
          }
        });
      }
    });
    this.pulseras.push({
      expanded: this.pulseras.length > 0 ? false : true,
      fields: fieldsList,
      showOptionals: false,
      campo: campo,
      type: description
    });
    this.addFieldsTemp(fieldsList, campo);
    // console.log(this.pulseras);
    this.selectdType = '';
    this.selectTypeControl.setValue('');
    this.Toast.fire({
      icon: 'success',
      title: 'Pulsera añadida con exito.'
    });
    // Mark for check
    this._changeDetectorRef.markForCheck();
  }
  addFormGroupToForm(index, fieldList, description) {
    this.manillaForm.addControl(`pulsera${index}`, this._formBuilder.array([]));
    this.addFieldsToFormGroup(fieldList, `pulsera${index}`, description);
    this.loadingFields[`pl${index}`] = false;
  }
  deleteFormGroup(pulsera, index) {
    this.pulseras[index].fields.forEach((element, index) => {
      this.manillaForm.get(pulsera.campo).removeAt(0);
    });
    this.pulseras.splice(index, 1);
    this.loadingFields.splice(index, 1);
    this.manillaForm.removeControl(pulsera.campo);
    this.precio = this.precio - pulsera.type.precio;
    this.typesSelected[pulsera.type.name] = this.typesSelected[pulsera.type.name] - 1;
  }
  /**
   * Track by function for ngFor loops
   *
   * @param index
   * @param item
   */
  trackByFn(index, item) {
    return item.id || index;
  }
  handleTypeChange(value) {
    let data = JSON.parse(value);
    this.selectdType = data;
  }
  //addTypepulsera
  addTypePulseraButton() {
    if (this.selectdType !== '') {
      this.precio = this.precio + this.selectdType.precio;
      this.typesSelected[this.selectdType.name] = this.typesSelected[this.selectdType.name] + 1;
      this.addPulsera(this.selectdType.name, this.selectdType);
    } else {
      this.Toast.fire({
        icon: 'error',
        title: 'Debe seleccionar un tipo de pulsera primero para añadirla.'
      });
    }
  }
  selectType(search) {
    this.types.forEach(type => {
      if (type.name === search) {
        this.precio = this.precio + type.precio;
        this.typesSelected[type.name] = this.typesSelected[type.name] + 1;
        this.addPulsera(search, type);
      }
    });
  }
  onFileSelected(event, fieldName, index, campo) {
    let fileSelected = event.target.files[0];
    if (fileSelected.type === 'image/jpeg' || fileSelected.type === 'image/png' || fileSelected.type === 'image/jpg' || fileSelected.type === 'application/pdf') {
      const reader = new FileReader();
      reader.readAsDataURL(fileSelected);
      reader.onload = () => {
        let dataN = reader.result.toString();
        this.filesToUpload[campo][fieldName] = dataN;
        this.filesList[campo][fieldName] = fileSelected.name;
      };
    } else {
      this.Toast.fire({
        icon: "error",
        title: 'Debe subir un tipo de imagen valido (JPEG, JPG, PNG, PDF).'
      });
      this.manillaForm.get(campo)['controls'][index]['controls'][fieldName].setValue('');
      // this.manillaForm.get(fieldName).setValue('');
      fileSelected = '';
    }
  }
  onChangeOpcionales(campo, fields, option) {
    if (option) {
      fields.forEach((field, index) => {
        if (!field.required) {
          this.manillaForm.get(campo)['controls'][index]['controls'][field.name].setValue('');
          if (field.type === 'file') {
            this.filesToUpload[campo][field.name] = '';
            this.filesList[campo][field.name] = '';
          }
        }
      });
    }
  }
  addFieldsTemp(fields, campo) {
    this.filesToUpload[campo] = {};
    this.filesList[campo] = {};
    fields.forEach((field, index) => {
      if (field.type === 'file') {
        this.filesToUpload[campo][field.name] = '';
        this.filesList[campo][field.name] = '';
      }
    });
  }
  orderDataPulseras() {
    if (!this.manillaForm.valid) {
      this.viewScroller.scrollToPosition([0, 0]);
      this.Toast.fire({
        icon: 'error',
        title: 'Debes completar todos los campos obligatorios de las pulseras para continuar.'
      });
      this.manillaForm.enable();
      this.disableButtons = false;
      this._checkoutService.setpulseraOk('error');
      this._checkoutService.setcheckoutOk('error');
      this._checkoutService.setPulserasData(null);
    } else {
      // Do nothing if the form is invalid
      if (this.manillaForm.invalid) {
        return;
      }
      // Disable the form
      this.manillaForm.disable();
      let pulseras = [];
      this.pulseras.forEach(pulsera => {
        pulseras.push({
          ...this.getDataPulsera(pulsera.campo, pulsera.fields),
          tipo: pulsera.type.name
        });
      });
      this.disableButtons = true;
      this._checkoutService.setPulserasData({
        pulseras: pulseras,
        lista: this.typesSelected,
        precio: this.precio
      });
      this._checkoutService.setpulseraOk('ok');
    }
  }
  getDataPulsera(campo, fieldList) {
    let values = this.manillaForm.getRawValue();
    let manilla = {};
    values[campo].forEach(element => {
      for (const [key, value] of Object.entries(element)) {
        manilla[key] = value;
      }
    });
    fieldList.forEach(field => {
      if (field.type === 'Date' && manilla[field.name] !== '' && manilla[field.name] !== null) {
        manilla[field.name] = this.fdnToString(manilla[field.name]);
        // if(this.fechasTemp[campo][field.name]){
        //   manilla[field.name] = this.fdnToString(this.fechasTemp[campo][field.name]);
        // }
      } else {
        if (field.type === 'Date') {
          manilla[field.name] = '';
        }
      }
    });
    manilla = {
      ...manilla,
      ...this.filesToUpload[campo]
    };
    return manilla;
  }
  fdnToString(fecha) {
    return `${fecha.year}-${fecha.month.toString().padStart(2, '0')}-${fecha.day.toString().padStart(2, '0')}`;
  }
  prueba() {
    console.log(this.precio);
  }
}
CheckoutLandComponent.ɵfac = function CheckoutLandComponent_Factory(t) {
  return new (t || CheckoutLandComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_checkout_land_service__WEBPACK_IMPORTED_MODULE_1__.CheckoutLandService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_core_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_12__.ViewportScroller), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__.ActivatedRoute));
};
CheckoutLandComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
  type: CheckoutLandComponent,
  selectors: [["app-checkout-land"]],
  decls: 81,
  vars: 19,
  consts: [[3, "title", "breadcrumb"], [1, "section-checkout"], [1, "pulseras-info"], [1, "basic-information"], [1, "title-box"], [1, "inputs-registro"], [1, "datos-pulsera"], [1, "title-text"], [1, "button-add-pulsera"], ["data-bs-toggle", "collapse", "href", "#collapseSelectType", "role", "button", "aria-expanded", "false", "aria-controls", "collapseSelectType", 1, "btn", 3, "disabled"], ["aria-hidden", "true", 1, "fa", "fa-plus-circle", "f-20"], [1, "hide-text"], ["id", "collapseSelectType", 1, "collapse", "add-pulseras-box"], [1, "card", "card-body"], [1, "select-type-box"], [1, "container-select-type"], ["aria-label", "Seleccionar tipo cliente", 1, "form-select", 3, "formControl", "change"], ["value", "", "disabled", "", "selected", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "button-add-type"], [1, "btn", "btn-secondary", 3, "disabled", "click"], ["aria-hidden", "true", 1, "fa", "fa-plus", "fa-20"], ["id", "accordionPulseras", 1, "accordion", "accordion-flush"], ["class", "accordion-item", 4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "total-payment"], [1, "checkout-details"], [1, "order-box"], [1, "qty"], [4, "ngFor", "ngForOf"], [1, "total"], [1, "count"], [1, "form-check", "metodo-check"], ["type", "radio", "name", "flexRadioDefault", "id", "flexRadioDefault1", "value", "tarjeta", "checked", "", 1, "form-check-input", 3, "disabled", "change"], ["for", "flexRadioDefault1"], [1, "title"], [1, "subb-title"], ["aria-hidden", "true", 1, "fa", "fa-cc-visa", "f-22"], ["aria-hidden", "true", 1, "fa", "fa-cc-mastercard", "f-22"], ["type", "radio", "name", "flexRadioDefault", "id", "flexRadioDefault2", "value", "efectivo", 1, "form-check-input", 3, "disabled", "change"], ["for", "flexRadioDefault2", 1, "form-check-label"], ["aria-hidden", "true", 1, "fa", "fa-money", "f-24"], [1, "payment-inputs"], [1, "section-b-space"], [1, "container"], [1, "row"], [1, "col-md-12"], [3, "logos"], [3, "value"], [1, "accordion-item"], [1, "accordion-header", 3, "id"], ["type", "button", "data-bs-toggle", "collapse", "target", "_blank", "aria-expanded", "true", 1, "accordion-button", 3, "href"], ["data-bs-parent", "#accordionPulseras", 1, "accordion-collapse", "collapse", 3, "id", "ngClass"], [1, "accordion-body"], ["novalidate", "", 1, "manillas-form-theme", 3, "formGroup"], ["manillaNgForm", "ngForm"], [1, "boton-remover"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Remover pulsera", 1, "btn", 3, "disabled", "click"], ["aria-hidden", "true", 1, "fa", "fa-trash", "f-20"], [2, "font-size", "12px", "padding-left", "0px", "padding-right", "0px"], ["aria-hidden", "true", 1, "fa", "fa-lock"], ["class", "col-md-12", 4, "ngIf"], [1, "d-flex", "justify-content-center"], ["role", "status", 1, "spinner-border"], [1, "visually-hidden"], [1, "form-check", "form-switch", "check-optionals"], ["type", "checkbox", "id", "flexSwitchCheckDefault", 1, "form-check-input", 3, "disabled", "ngModel", "ngModelOptions", "ngModelChange", "change"], ["for", "flexSwitchCheckDefault", 1, "form-check-label"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "col-md-6 mb-4", 4, "ngIf"], [1, "col-md-6", "mb-4"], [1, "input-group"], ["type", "email", 1, "form-control", 3, "ngClass", "formControl", "id", "placeholder"], ["class", "input-group-text", 3, "ngClass", 4, "ngIf"], [1, "input-group-text", 3, "ngClass"], [1, "form-control", 3, "ngClass", "formControl", "id", "placeholder"], ["prefix", "(+52) ", "mask", "000-000-0000", 1, "form-control", 3, "ngClass", "formControl", "id", "placeholder"], ["placeholder", "dd-mm-yyy", "name", "fdn", "readonly", "", "ngbDatepicker", "", 1, "form-control", 3, "ngClass", "id", "formControl", "minDate", "maxDate"], ["d", "ngbDatepicker"], ["type", "button", 1, "btn", "btn-outline-dark", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-calendar"], [1, "form-select", 3, "ngClass", "formControl"], ["value", "", "selected", "", "disabled", ""], ["rows", "2", 1, "form-control", 3, "ngClass", "autosize", "formControl", "id", "placeholder"], ["type", "number", 1, "form-control", 3, "ngClass", "formControl", "id", "placeholder"], [1, "input-group", "file-input-data"], [1, "btn", 3, "ngClass", "click"], ["aria-hidden", "true", 1, "fa", "fa-file-image-o"], ["class", "fa fa-lock", "aria-hidden", "true", 4, "ngIf"], ["hidden", "", "type", "file", "accept", "application/pdf, image/jpeg, image/png, image/jpg", 1, "form-control", 3, "formControl", "id", "placeholder", "change"], ["fileInput", ""], [1, "no-pulseras"]],
  template: function CheckoutLandComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "app-breadcrumb", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "section", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6, "Informacion basica");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](8, "app-register-card");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "div", 6)(10, "div", 3)(11, "div", 4)(12, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](13, "Datos pulsera");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "div", 8)(15, "button", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](16, "i", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](17, "\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "span", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](19, "A\u00F1adir pulsera");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](20, "div", 12)(21, "div", 13)(22, "div", 14)(23, "div", 15)(24, "select", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("change", function CheckoutLandComponent_Template_select_change_24_listener($event) {
        return ctx.handleTypeChange($event.target.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](25, "option", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](26, "Seleccionar tipo");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](27, CheckoutLandComponent_option_27_Template, 3, 4, "option", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](28, "div", 19)(29, "button", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function CheckoutLandComponent_Template_button_click_29_listener() {
        return ctx.addTypePulseraButton();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](30, "i", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](31, "\u00A0 A\u00F1adir ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](32, "div", 5)(33, "div", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](34, CheckoutLandComponent_div_34_Template, 21, 13, "div", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](35, CheckoutLandComponent_ng_container_35_Template, 3, 0, "ng-container", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](36, "div", 25)(37, "div", 26)(38, "div", 27)(39, "div", 4)(40, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](41, "Producto ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](42, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](43, " Total");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](44, "ul", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](45, CheckoutLandComponent_ng_container_45_Template, 3, 1, "ng-container", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](46, "ul", 30)(47, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](48, "Total ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](49, "span", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](50);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](51, "currency");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](52, "div", 32)(53, "input", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("change", function CheckoutLandComponent_Template_input_change_53_listener($event) {
        return ctx.metodoPagoChange($event.target.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](54, "label", 34)(55, "div")(56, "div", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](57, " Tarjeta de credito / debito ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](58, "div", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](59, " Acreditacion instantanea ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](60, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](61, "i", 37)(62, "i", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](63, "div", 32)(64, "input", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("change", function CheckoutLandComponent_Template_input_change_64_listener($event) {
        return ctx.metodoPagoChange($event.target.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](65, "label", 40)(66, "div")(67, "div", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](68, " Efectivo ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](69, "div", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](70, " Pagos simples: cuando termines el proceso, nos contactaremos contigo para que sepas c\u00F3mo y d\u00F3nde pagarla. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](71, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](72, "i", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](73, "div", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](74, CheckoutLandComponent_ng_container_74_Template, 2, 0, "ng-container", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](75, CheckoutLandComponent_ng_container_75_Template, 2, 0, "ng-container", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](76, "section", 43)(77, "div", 44)(78, "div", 45)(79, "div", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](80, "app-logo", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("title", "Checkout pulsera")("breadcrumb", "Checkout pulsera");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](15);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", ctx.disableButtons);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formControl", ctx.selectTypeControl);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx.types);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", ctx.disableButtons);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx.pulseras);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.pulseras.length);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx.types);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind3"](51, 15, ctx.precio, "MXN $", "symbol"));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", ctx.disableButtons);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", ctx.disableButtons);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.metodoPago === "tarjeta");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.metodoPago === "efectivo");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("logos", ctx.logo);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControlDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroupDirective, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__.NgbInputDatepicker, _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_3__.BreadcrumbComponent, ngx_autosize__WEBPACK_IMPORTED_MODULE_15__.AutosizeDirective, ngx_mask__WEBPACK_IMPORTED_MODULE_16__.NgxMaskDirective, _home_widgets_logo_logo_component__WEBPACK_IMPORTED_MODULE_4__.LogoComponent, _checkout_card_checkout_card_component__WEBPACK_IMPORTED_MODULE_5__.CheckoutCardComponent, _checkout_cash_checkout_cash_component__WEBPACK_IMPORTED_MODULE_6__.CheckoutCashComponent, _register_card_register_card_component__WEBPACK_IMPORTED_MODULE_7__.RegisterCardComponent, _angular_common__WEBPACK_IMPORTED_MODULE_12__.JsonPipe, _angular_common__WEBPACK_IMPORTED_MODULE_12__.CurrencyPipe],
  styles: [".section-checkout[_ngcontent-%COMP%] {\n  width: 100%;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));\n  padding: 2rem;\n  gap: 2rem;\n  background-color: white;\n}\n.section-checkout[_ngcontent-%COMP%]   .pulseras-info[_ngcontent-%COMP%] {\n  padding: 40px;\n  width: 100%;\n}\n.section-checkout[_ngcontent-%COMP%]   .pulseras-info[_ngcontent-%COMP%]   .datos-pulsera[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n.section-checkout[_ngcontent-%COMP%]   .pulseras-info[_ngcontent-%COMP%]   .datos-pulsera[_ngcontent-%COMP%]   .title-box[_ngcontent-%COMP%] {\n  width: 100%;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1rem;\n}\n.section-checkout[_ngcontent-%COMP%]   .pulseras-info[_ngcontent-%COMP%]   .datos-pulsera[_ngcontent-%COMP%]   .title-box[_ngcontent-%COMP%]   .button-add-pulsera[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n}\n.section-checkout[_ngcontent-%COMP%]   .pulseras-info[_ngcontent-%COMP%]   .datos-pulsera[_ngcontent-%COMP%]   .title-box[_ngcontent-%COMP%]   .title-text[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 22px;\n  color: #444444;\n}\n.section-checkout[_ngcontent-%COMP%]   .pulseras-info[_ngcontent-%COMP%]   .datos-pulsera[_ngcontent-%COMP%]   .inputs-registro[_ngcontent-%COMP%] {\n  padding-top: 20px;\n}\n.section-checkout[_ngcontent-%COMP%]   .pulseras-info[_ngcontent-%COMP%]   .datos-pulsera[_ngcontent-%COMP%]   .inputs-registro[_ngcontent-%COMP%]   .no-pulseras[_ngcontent-%COMP%] {\n  font-size: 17px;\n  color: black;\n  text-align: center;\n}\n.section-checkout[_ngcontent-%COMP%]   .pulseras-info[_ngcontent-%COMP%]   .datos-pulsera[_ngcontent-%COMP%]   .inputs-registro[_ngcontent-%COMP%]   .accordion[_ngcontent-%COMP%] {\n  --bs-accordion-active-bg: #a2a5af27;\n  --bs-accordion-border-radius: 10px;\n}\n.section-checkout[_ngcontent-%COMP%]   .pulseras-info[_ngcontent-%COMP%]   .datos-pulsera[_ngcontent-%COMP%]   .inputs-registro[_ngcontent-%COMP%]   .accordion-button[_ngcontent-%COMP%] {\n  border-radius: 7px;\n  color: black;\n  text-decoration: none;\n}\n.section-checkout[_ngcontent-%COMP%]   .pulseras-info[_ngcontent-%COMP%]   .datos-pulsera[_ngcontent-%COMP%]   .inputs-registro[_ngcontent-%COMP%]   .accordion-item[_ngcontent-%COMP%] {\n  border: 1px solid rgba(197, 197, 197, 0.579);\n  border-radius: 7px;\n}\n.section-checkout[_ngcontent-%COMP%]   .pulseras-info[_ngcontent-%COMP%]   .datos-pulsera[_ngcontent-%COMP%]   .inputs-registro[_ngcontent-%COMP%]   .error-valid-input[_ngcontent-%COMP%] {\n  border-color: red !important;\n}\n.section-checkout[_ngcontent-%COMP%]   .pulseras-info[_ngcontent-%COMP%]   .datos-pulsera[_ngcontent-%COMP%]   .inputs-registro[_ngcontent-%COMP%]   .manillas-form-theme[_ngcontent-%COMP%]   .file-input-data[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 1px solid #616161 !important;\n  border-radius: 7px !important;\n  height: 40px;\n  padding: 0px !important;\n  margin: 0px !important;\n  overflow: hidden;\n  background-color: var(--theme-deafult);\n  color: white;\n}\n.section-checkout[_ngcontent-%COMP%]   .pulseras-info[_ngcontent-%COMP%]   .datos-pulsera[_ngcontent-%COMP%]   .inputs-registro[_ngcontent-%COMP%]   .manillas-form-theme[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  height: 40px;\n}\n.section-checkout[_ngcontent-%COMP%]   .pulseras-info[_ngcontent-%COMP%]   .datos-pulsera[_ngcontent-%COMP%]   .inputs-registro[_ngcontent-%COMP%]   .manillas-form-theme[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  height: 40px;\n}\n.section-checkout[_ngcontent-%COMP%]   .pulseras-info[_ngcontent-%COMP%]   .datos-pulsera[_ngcontent-%COMP%]   .inputs-registro[_ngcontent-%COMP%]   .manillas-form-theme[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%] {\n  border: none;\n  border-radius: 0px 7px 7px 0px;\n  border-top: 1px solid #616161;\n  border-bottom: 1px solid #616161;\n  border-right: 1px solid #616161;\n  background-color: white;\n}\n.section-checkout[_ngcontent-%COMP%]   .pulseras-info[_ngcontent-%COMP%]   .datos-pulsera[_ngcontent-%COMP%]   .inputs-registro[_ngcontent-%COMP%]   .manillas-form-theme[_ngcontent-%COMP%]   .check-optionals[_ngcontent-%COMP%] {\n  margin: 15px;\n}\n.section-checkout[_ngcontent-%COMP%]   .pulseras-info[_ngcontent-%COMP%]   .datos-pulsera[_ngcontent-%COMP%]   .inputs-registro[_ngcontent-%COMP%]   .manillas-form-theme[_ngcontent-%COMP%]   .boton-remover[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n}\n.section-checkout[_ngcontent-%COMP%]   .pulseras-info[_ngcontent-%COMP%]   .datos-pulsera[_ngcontent-%COMP%]   .inputs-registro[_ngcontent-%COMP%]   .manillas-form-theme[_ngcontent-%COMP%]   .boton-remover[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  color: red;\n}\n.section-checkout[_ngcontent-%COMP%]   .pulseras-info[_ngcontent-%COMP%]   .basic-information[_ngcontent-%COMP%]   .title-box[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 22px;\n  color: #444444;\n}\n.section-checkout[_ngcontent-%COMP%]   .pulseras-info[_ngcontent-%COMP%]   .basic-information[_ngcontent-%COMP%]   .add-pulseras-box[_ngcontent-%COMP%]   .select-type-box[_ngcontent-%COMP%] {\n  width: 100%;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1rem;\n}\n.section-checkout[_ngcontent-%COMP%]   .pulseras-info[_ngcontent-%COMP%]   .basic-information[_ngcontent-%COMP%]   .add-pulseras-box[_ngcontent-%COMP%]   .select-type-box[_ngcontent-%COMP%]   .container-select-type[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  height: 40px;\n}\n.section-checkout[_ngcontent-%COMP%]   .pulseras-info[_ngcontent-%COMP%]   .basic-information[_ngcontent-%COMP%]   .add-pulseras-box[_ngcontent-%COMP%]   .select-type-box[_ngcontent-%COMP%]   .button-add-type[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n}\n.section-checkout[_ngcontent-%COMP%]   .total-payment[_ngcontent-%COMP%] {\n  padding: 40px;\n  width: 100%;\n  border: 1px solid #f9f9f9;\n  background-color: #f9f9f9;\n  border-radius: 0.6rem;\n}\n.section-checkout[_ngcontent-%COMP%]   .total-payment[_ngcontent-%COMP%]   .qty[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  color: #616161;\n}\n\n.metodo-check[_ngcontent-%COMP%] {\n  padding: 1rem;\n  width: 100%;\n  display: grid;\n  grid-template-columns: 1fr;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.263);\n}\n.metodo-check[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n}\n.metodo-check[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 17px;\n}\n.metodo-check[_ngcontent-%COMP%]   .subb-title[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: #737373;\n}\n.metodo-check[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-left: 4px;\n  color: var(--theme-gradient1);\n}\n\n@media (max-width: 500px) {\n  .hide-text[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.border-private-true[_ngcontent-%COMP%] {\n  border-radius: 7px 0px 0px 7px;\n  border-top: 1px solid #616161;\n  border-bottom: 1px solid #616161;\n  border-left: 1px solid #616161;\n  border-right: none;\n}\n\n.border-private-false[_ngcontent-%COMP%] {\n  border-radius: 7px;\n  border: 1px solid #616161 !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbGFuZGluZy9jaGVja291dC1sYW5kL2NoZWNrb3V0LWxhbmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNELDJEQUFBO0VBQ0MsYUFBQTtFQUNBLFNBQUE7RUFFQSx1QkFBQTtBQUFKO0FBRUk7RUFDRSxhQUFBO0VBQ0EsV0FBQTtBQUFOO0FBRU07RUFFRSxnQkFBQTtBQURSO0FBR1E7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsU0FBQTtBQURWO0FBR1U7RUFDRSxhQUFBO0VBQ0EseUJBQUE7QUFEWjtBQUlVO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQUZaO0FBTVE7RUFDRSxpQkFBQTtBQUpWO0FBTVU7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBSlo7QUFPVTtFQUVFLG1DQUFBO0VBQ0Esa0NBQUE7QUFOWjtBQVNVO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7QUFQWjtBQVVVO0VBQ0UsNENBQUE7RUFDQSxrQkFBQTtBQVJaO0FBV1U7RUFDRSw0QkFBQTtBQVRaO0FBY2M7RUFDRSxXQUFBO0VBQ0Esb0NBQUE7RUFDQSw2QkFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQ0FBQTtFQUNBLFlBQUE7QUFaaEI7QUFpQmM7RUFFRSxZQUFBO0FBaEJoQjtBQW1CYztFQUVFLFlBQUE7QUFsQmhCO0FBcUJjO0VBQ0UsWUFBQTtFQUNBLDhCQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQ0FBQTtFQUNBLCtCQUFBO0VBQ0EsdUJBQUE7QUFuQmhCO0FBdUJZO0VBQ0UsWUFBQTtBQXJCZDtBQXdCWTtFQUNFLGFBQUE7RUFDQSx5QkFBQTtBQXRCZDtBQXdCYztFQUNFLFVBQUE7QUF0QmhCO0FBK0JRO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQTdCVjtBQWlDVTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxTQUFBO0FBL0JaO0FBa0NjO0VBQ0UsWUFBQTtBQWhDaEI7QUFvQ1k7RUFDRSxhQUFBO0VBQ0EseUJBQUE7QUFsQ2Q7QUEwQ0k7RUFDSSxhQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtBQXhDUjtBQTBDUTtFQUNJLGNBQUE7QUF4Q1o7O0FBNkNBO0VBQ0ksYUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsMEJBQUE7RUFFQSw2Q0FBQTtBQTNDSjtBQTZDSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBM0NOO0FBOENJO0VBQ0UsZUFBQTtBQTVDTjtBQWdESTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FBOUNOO0FBaURJO0VBQ0UsZ0JBQUE7RUFDQSw2QkFBQTtBQS9DTjs7QUFvREE7RUFDRTtJQUNFLGFBQUE7RUFqREY7QUFDRjtBQW9EQTtFQUNFLDhCQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQ0FBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7QUFsREY7O0FBcURBO0VBQ0Usa0JBQUE7RUFDQSxvQ0FBQTtBQWxERiIsInNvdXJjZXNDb250ZW50IjpbIi5zZWN0aW9uLWNoZWNrb3V0e1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG5cdCAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyMHJlbSwgMWZyKSk7XHJcbiAgICBwYWRkaW5nOiAycmVtO1xyXG4gICAgZ2FwOiAycmVtO1xyXG5cclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG5cclxuICAgIC5wdWxzZXJhcy1pbmZve1xyXG4gICAgICBwYWRkaW5nOiA0MHB4O1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAgIC5kYXRvcy1wdWxzZXJhe1xyXG5cclxuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG5cclxuICAgICAgICAudGl0bGUtYm94e1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xyXG4gICAgICAgICAgZ2FwOiAxcmVtO1xyXG5cclxuICAgICAgICAgIC5idXR0b24tYWRkLXB1bHNlcmF7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnRpdGxlLXRleHR7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgICAgICAgICAgY29sb3I6ICM0NDQ0NDQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuaW5wdXRzLXJlZ2lzdHJve1xyXG4gICAgICAgICAgcGFkZGluZy10b3A6IDIwcHg7XHJcblxyXG4gICAgICAgICAgLm5vLXB1bHNlcmFze1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAuYWNjb3JkaW9uIHtcclxuICAgICAgICAgICAgLy8gLS1icy1hY2NvcmRpb24tYWN0aXZlLWJnOiAjM2E1NmEyMjc7XHJcbiAgICAgICAgICAgIC0tYnMtYWNjb3JkaW9uLWFjdGl2ZS1iZzogI2EyYTVhZjI3O1xyXG4gICAgICAgICAgICAtLWJzLWFjY29yZGlvbi1ib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5hY2NvcmRpb24tYnV0dG9ue1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA3cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5hY2NvcmRpb24taXRlbXtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxOTcsIDE5NywgMTk3LCAwLjU3OSk7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDdweDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuZXJyb3ItdmFsaWQtaW5wdXR7XHJcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogcmVkICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLm1hbmlsbGFzLWZvcm0tdGhlbWV7XHJcbiAgICAgICAgICAgIC5maWxlLWlucHV0LWRhdGF7XHJcbiAgICAgICAgICAgICAgYnV0dG9ue1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjNjE2MTYxICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA3cHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10aGVtZS1kZWFmdWx0KTtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmlucHV0LWdyb3Vwe1xyXG5cclxuICAgICAgICAgICAgICBpbnB1dHtcclxuICAgICAgICAgICAgICAgIC8vIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIHNlbGVjdHtcclxuICAgICAgICAgICAgICAgIC8vIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIC5pbnB1dC1ncm91cC10ZXh0e1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMHB4IDdweCA3cHggMHB4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICM2MTYxNjE7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzYxNjE2MTtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICM2MTYxNjE7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5jaGVjay1vcHRpb25hbHN7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAxNXB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuYm90b24tcmVtb3ZlcntcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcblxyXG4gICAgICAgICAgICAgIGJ1dHRvbntcclxuICAgICAgICAgICAgICAgIGNvbG9yOiByZWQ7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAuYmFzaWMtaW5mb3JtYXRpb257XHJcbiAgICAgICAgLnRpdGxlLWJveHtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICAgICAgICBjb2xvcjogIzQ0NDQ0NDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5hZGQtcHVsc2VyYXMtYm94e1xyXG4gICAgICAgICAgLnNlbGVjdC10eXBlLWJveHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcclxuICAgICAgICAgICAgZ2FwOiAxcmVtO1xyXG5cclxuICAgICAgICAgICAgLmNvbnRhaW5lci1zZWxlY3QtdHlwZXtcclxuICAgICAgICAgICAgICBzZWxlY3R7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuYnV0dG9uLWFkZC10eXBle1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAudG90YWwtcGF5bWVudHtcclxuICAgICAgICBwYWRkaW5nOiA0MHB4O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNmOWY5Zjk7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAwLjZyZW07XHJcblxyXG4gICAgICAgIC5xdHkgbGl7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjNjE2MTYxO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLm1ldG9kby1jaGVja3tcclxuICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICBcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMjYzKTtcclxuICAgIFxyXG4gICAgaW5wdXR7XHJcbiAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAudGl0bGV7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICBcclxuICAgIH1cclxuICBcclxuICAgIC5zdWJiLXRpdGxle1xyXG4gICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgIGNvbG9yOiAjNzM3MzczO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgaXtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDRweDtcclxuICAgICAgY29sb3I6IHZhcigtLXRoZW1lLWdyYWRpZW50MSk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcclxuICAuaGlkZS10ZXh0e1xyXG4gICAgZGlzcGxheTpub25lO1xyXG4gIH1cclxufVxyXG5cclxuLmJvcmRlci1wcml2YXRlLXRydWV7XHJcbiAgYm9yZGVyLXJhZGl1czogN3B4IDBweCAwcHggN3B4O1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjNjE2MTYxO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNjE2MTYxO1xyXG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgIzYxNjE2MTtcclxuICBib3JkZXItcmlnaHQ6IG5vbmU7XHJcbn1cclxuXHJcbi5ib3JkZXItcHJpdmF0ZS1mYWxzZXtcclxuICBib3JkZXItcmFkaXVzOiA3cHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzYxNjE2MSAhaW1wb3J0YW50O1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ }),

/***/ 56070:
/*!****************************************************************!*\
  !*** ./src/app/landing/checkout-land/checkout-land.service.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CheckoutLandService: () => (/* binding */ CheckoutLandService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 54860);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 58071);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 13738);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 60331);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 20553);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 27947);






class CheckoutLandService {
  /**
   * Constructor
   */
  constructor(_httpClient, _router) {
    this._httpClient = _httpClient;
    this._router = _router;
    this.url = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.urlWeb}`;
    this._userInfo = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(null);
    this._processing = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(null);
    this._pulserasTypes = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(null);
    //user data
    this._userData = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(null);
    this._addressData = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(null);
    this._pulserasData = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(null);
    this._idtransaccion = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(null);
    //completed data
    this._userOk = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(null);
    this._pulseraOk = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(null);
    this._checkoutOk = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(null);
    this._metodoPago = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(null);
    //checkout-exito
    this._order = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(null);
  }
  /**
   * Getter for userInfo
   */
  get userInfo$() {
    return this._userInfo.asObservable();
  }
  /**
   * Setter for userInfo
   */
  setUserInfo(value) {
    this._userInfo.next(value);
  }
  /**a
   * Getter for processing
   */
  get processing$() {
    return this._processing.asObservable();
  }
  /**
   * Setter for processing
   */
  setProcessing(value) {
    this._processing.next(value);
  }
  /**a
   * Getter for userData
   */
  get userData$() {
    return this._userData.asObservable();
  }
  /**
   * Setter for userData
   */
  setUserData(value) {
    this._userData.next(value);
  }
  /**a
   * Getter for addressData
   */
  get addressData$() {
    return this._addressData.asObservable();
  }
  /**
   * Setter for addressData
   */
  setAddressData(value) {
    this._addressData.next(value);
  }
  /**a
   * Getter for pulserasData
   */
  get pulserasData$() {
    return this._pulserasData.asObservable();
  }
  /**
   * Setter for pulserasData
   */
  setPulserasData(value) {
    this._pulserasData.next(value);
  }
  /**a
   * Getter for userOk
   */
  get userOk$() {
    return this._userOk.asObservable();
  }
  /**
   * Setter for userOk
   */
  setuserOk(value) {
    this._userOk.next(value);
  }
  /**a
   * Getter for pulseraOk
   */
  get pulseraOk$() {
    return this._pulseraOk.asObservable();
  }
  /**
   * Setter for pulseraOk
   */
  setpulseraOk(value) {
    this._pulseraOk.next(value);
  }
  /**a
   * Getter for checkoutOk
   */
  get checkoutOk$() {
    return this._checkoutOk.asObservable();
  }
  /**
   * Setter for checkoutOk
   */
  setcheckoutOk(value) {
    this._checkoutOk.next(value);
  }
  /**a
   * Getter for metodoPago
   */
  get metodoPago$() {
    return this._metodoPago.asObservable();
  }
  /**
   * Setter for metodoPago
   */
  setmetodoPago(value) {
    this._metodoPago.next(value);
  }
  /**
     * Getter for countries
     */
  get pulserasTypes$() {
    return this._pulserasTypes.asObservable();
  }
  /**a
   * Getter for checkoutOk
   */
  get order$() {
    return this._order.asObservable();
  }
  getFieldsByUserTypes(type) {
    let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams();
    params = params.set("type", type);
    return this._httpClient.get(`${this.url}authentication/fields`, {
      params
    });
  }
  getUserTypes() {
    return this._httpClient.get(`${this.url}tipos`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.tap)(response => {
      this._pulserasTypes.next(response);
    }));
  }
  generateOrder(data) {
    return this._httpClient.post(`${this.url}pagos/crearIntento`, data);
  }
  sendPayment(token, id) {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.firstValueFrom)(this._httpClient.patch(`${this.url}pagos/generarMetodo/${id}`, {
      token: token
    }));
  }
  getOrder(id) {
    return this._httpClient.get(`${this.url}pagos/obtenerIntento/${id}`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.tap)(response => {
      this._order.next(response);
    }));
  }
  confirmPayment(id) {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.firstValueFrom)(this._httpClient.patch(`${this.url}pagos/confirmar/${id}`, {}));
  }
  setAddessPulsera(data, id) {
    return this._httpClient.post(`${this.url}manillas/update/${id}`, data);
  }
  setIdTransaccion(id) {
    this._idtransaccion.next(id);
  }
  /**
   * Getter for idTransaccion
   */
  get idTransaccion$() {
    return this._idtransaccion.asObservable();
  }
}
CheckoutLandService.ɵfac = function CheckoutLandService_Factory(t) {
  return new (t || CheckoutLandService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router));
};
CheckoutLandService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
  token: CheckoutLandService,
  factory: CheckoutLandService.ɵfac,
  providedIn: "root"
});


/***/ }),

/***/ 44839:
/*!********************************************************************************!*\
  !*** ./src/app/landing/checkout-land/register-card/register-card.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RegisterCardComponent: () => (/* binding */ RegisterCardComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 72513);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 20274);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ 27889);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _checkout_land_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../checkout-land.service */ 56070);
/* harmony import */ var src_app_core_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/auth/auth.service */ 54855);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 26575);









const _c0 = ["signUpNgForm"];
function RegisterCardComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r1.messageAlert, " ");
  }
}
function RegisterCardComponent_i_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 18);
  }
}
function RegisterCardComponent_i_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 19);
  }
}
function RegisterCardComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " La contrase\u00F1a debe ser mayor a 8 digitos, contener 1 numero, 1 letra mayuscula, 1 letra minuscula y 1 caracter especial ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
const _c1 = function (a0) {
  return {
    "error-required-input": a0
  };
};
const _c2 = function (a0) {
  return {
    "error-required-icon": a0
  };
};
class RegisterCardComponent {
  constructor(_checkoutService, _formBuilder, _authService, _changeDetectorRef, _router, viewScroller) {
    this._checkoutService = _checkoutService;
    this._formBuilder = _formBuilder;
    this._authService = _authService;
    this._changeDetectorRef = _changeDetectorRef;
    this._router = _router;
    this.viewScroller = viewScroller;
    this.showAlert = false;
    this.messageAlert = "";
    this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
    this.loadingFields = false;
    this.fieldsList = [];
    this.maxDate = {};
    this.disableButton = true;
    this.imageBase64 = "";
    this.activarClases = false;
    this.processing = '';
    this.address = {};
    this.continuePayment = '';
    let today = new Date();
    this.maxDate.year = today.getFullYear();
    this.maxDate.month = today.getMonth() + 1;
    this.maxDate.day = today.getDate();
    this.Toast = sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: toast => {
        toast.addEventListener("mouseenter", (sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().stopTimer));
        toast.addEventListener("mouseleave", (sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().resumeTimer));
      }
    });
  }
  static patternValidator(regex, error) {
    return control => {
      if (!control.value) {
        // if control is empty return no error
        return null;
      }
      // test the value of the control against the regexp supplied
      const valid = regex.test(control.value);
      // if true, return no error (no error), else return error passed in the second parameter
      return valid ? null : error;
    };
  }
  ngOnInit() {
    this.signUpForm = this._formBuilder.group({
      // name: ["", [Validators.required]],
      email: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.email]],
      password: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, RegisterCardComponent.patternValidator(/\d/, {
        hasNumber: true
      }), RegisterCardComponent.patternValidator(/[A-Z]/, {
        hasCapitalCase: true
      }), RegisterCardComponent.patternValidator(/[a-z]/, {
        hasSmallCase: true
      }), RegisterCardComponent.patternValidator(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/, {
        hasSpecialCharacters: true
      }), _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(8)])]
      // direccion: ["", [Validators.required]],
      // type: ["", [Validators.required]],
      // telefono: ["", [Validators.required, Validators.pattern("[0-9]*")]],
      // documento: ["", [Validators.required]],
      // fecha_nacimiento: ["", [Validators.required]],
      // clienteCampos: this._formBuilder.array([]),
    });

    this._checkoutService.processing$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this._unsubscribeAll)).subscribe(processing => {
      // Update the selected agente
      this.processing = processing;
      // Mark for check
      this._changeDetectorRef.markForCheck();
    });
    this._checkoutService.addressData$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this._unsubscribeAll)).subscribe(address => {
      // Update the selected agente
      this.address = address;
      if (this.processing === 'loading' && address.name) {
        this.orderData();
      }
      // Mark for check
      this._changeDetectorRef.markForCheck();
    });
    this._checkoutService.pulseraOk$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this._unsubscribeAll)).subscribe(pulseraOk => {
      if (pulseraOk === 'error') {
        this.enableForm();
        this._checkoutService.setcheckoutOk('error');
      }
      // Mark for check
      this._changeDetectorRef.markForCheck();
    });
    this._checkoutService.checkoutOk$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this._unsubscribeAll)).subscribe(pulseraOk => {
      if (pulseraOk === 'error') {
        this.enableForm();
      }
      // Mark for check
      this._changeDetectorRef.markForCheck();
    });
  }
  /**
   * On destroy
   */
  ngOnDestroy() {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next(null);
    this._unsubscribeAll.complete();
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------
  onSubmit() {
    // console.log("object");
    this.showAlert = false;
    // this.disableButton = false;
    if (!this.signUpForm.valid) {
      this.activarClases = true;
      this.messageAlert = "Debes completar los campos del cliente para completar el registro.";
      this.viewScroller.scrollToPosition([0, 0]);
      this.showAlert = true;
      setTimeout(() => {
        this.showAlert = false;
      }, 5000);
      // this.disableButton = true;
    } else {
      if (!this.signUpForm.disabled) {
        this.activarClases = false;
        this.signUp();
      }
    }
  }
  orderData() {
    if (!this.signUpForm.valid) {
      this.viewScroller.scrollToPosition([0, 0]);
      this.Toast.fire({
        icon: 'error',
        title: 'Debes completar los campos de informacion basica para continuar.'
      });
      this.signUpForm.enable();
      this._checkoutService.setuserOk('error');
      this._checkoutService.setcheckoutOk('error');
      this._checkoutService.setUserData(null);
    } else {
      // Do nothing if the form is invalid
      if (this.signUpForm.invalid) {
        return;
      }
      // Disable the form
      this.signUpForm.disable();
      let user = this.signUpForm.getRawValue();
      user.name = this.address.name;
      user.telefono = this.address.phone.replace('+52', '');
      user.direccion = this.address.address.line1;
      // user.fecha_nacimiento = this.fdnToString(user.fecha_nacimiento);
      this._checkoutService.setUserData(user);
      this._checkoutService.setuserOk('ok');
    }
  }
  enableForm() {
    setTimeout(() => {
      this.signUpForm.enable();
    }, 500);
  }
  /**
   * Sign up
   */
  signUp() {
    // Do nothing if the form is invalid
    if (this.signUpForm.invalid) {
      return;
    }
    // Disable the form
    this.signUpForm.disable();
    let user = this.signUpForm.getRawValue();
    user.fecha_nacimiento = this.fdnToString(user.fecha_nacimiento);
    user.fotoBase64 = this.imageBase64;
    delete user.fotoBase;
    // Sign up
    this._authService.signUp(user).subscribe(response => {
      // Navigate to the confirmation required page
      // this._router.navigateByUrl("/account-created");
    }, response => {
      // Re-enable the form
      this.signUpForm.enable();
      // Set the alert
      response.error.message.forEach(element => {
        this.messageAlert += element + ",";
      });
      // this.messageAlert = response.error.message;
      this.viewScroller.scrollToPosition([0, 0]);
      // Show the alert
      this.showAlert = true;
      setTimeout(() => {
        this.showAlert = false;
      }, 5000);
      // this.disableButton = true;
    });
  }

  dateToString(fecha) {
    var month = (fecha.getMonth() + 1).toString().padStart(2, "0");
    var day = fecha.getDate().toString().padStart(2, "0");
    var date = `${fecha.getFullYear()}-${month}-${day}`;
    return date;
  }
  fdnToString(fecha) {
    return `${fecha.year}-${fecha.month.toString().padStart(2, "0")}-${fecha.day.toString().padStart(2, "0")}`;
  }
}
RegisterCardComponent.ɵfac = function RegisterCardComponent_Factory(t) {
  return new (t || RegisterCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_checkout_land_service__WEBPACK_IMPORTED_MODULE_1__.CheckoutLandService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_core_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_8__.ViewportScroller));
};
RegisterCardComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: RegisterCardComponent,
  selectors: [["app-register-card"]],
  viewQuery: function RegisterCardComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.signUpNgForm = _t.first);
    }
  },
  decls: 20,
  vars: 16,
  consts: [[1, "section-form-register"], [1, "register-form"], ["novalidate", "", 1, "needs-validation", 3, "formGroup", "ngSubmit"], ["signInNgForm", "ngForm"], ["class", "alert alert-danger", "role", "alert", 4, "ngIf"], [1, "row"], [1, "col-md-6", "col-sm-6", "col-xs-12"], [1, "divider-inputs"], ["id", "email", "placeholder", "Correo electronico", 1, "form-control", 3, "ngClass", "formControlName"], [1, "input-group"], ["type", "password", "id", "password", "placeholder", "Crea tu contrase\u00F1a", "autocomplete", "on", "aria-label", "password", "aria-describedby", "basic-addon1", 1, "form-control", "border-span", 3, "ngClass", "formControlName"], ["passwordField", ""], ["type", "button", 1, "input-group-text", 3, "ngClass", "click"], ["class", "fa fa-eye", "aria-hidden", "true", 4, "ngIf"], ["class", "fa fa-eye-slash", "aria-hidden", "true", 4, "ngIf"], [1, "border-bottom-login-form"], ["class", "error-login-form", 4, "ngIf"], ["role", "alert", 1, "alert", "alert-danger"], ["aria-hidden", "true", 1, "fa", "fa-eye"], ["aria-hidden", "true", 1, "fa", "fa-eye-slash"], [1, "error-login-form"]],
  template: function RegisterCardComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "form", 2, 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function RegisterCardComponent_Template_form_ngSubmit_2_listener() {
        return ctx.onSubmit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, RegisterCardComponent_div_4_Template, 2, 1, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 5)(7, "div", 6)(8, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "input", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 6)(11, "div", 7)(12, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "input", 10, 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "span", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function RegisterCardComponent_Template_span_click_15_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](14);
        return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](_r2.type === "password" ? _r2.type = "text" : _r2.type = "password");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, RegisterCardComponent_i_16_Template, 1, 0, "i", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, RegisterCardComponent_i_17_Template, 1, 0, "i", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](19, RegisterCardComponent_div_19_Template, 2, 0, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
    }
    if (rf & 2) {
      const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.signUpForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showAlert);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](10, _c1, ctx.signUpForm.get("email").invalid && ctx.signUpForm.get("email").touched || ctx.signUpForm.get("email").hasError("email")))("formControlName", "email");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](12, _c1, ctx.signUpForm.get("password").hasError("required") && ctx.activarClases || ctx.signUpForm.get("password").hasError("minlength") || ctx.signUpForm.get("password").hasError("hasNumber") || ctx.signUpForm.get("password").hasError("hasCapitalCase") || ctx.signUpForm.get("password").hasError("hasSmallCase") || ctx.signUpForm.get("password").hasError("hasSpecialCharacters")))("formControlName", "password");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](14, _c2, ctx.signUpForm.get("password").hasError("required") && ctx.activarClases || ctx.signUpForm.get("password").hasError("minlength") || ctx.signUpForm.get("password").hasError("hasNumber") || ctx.signUpForm.get("password").hasError("hasCapitalCase") || ctx.signUpForm.get("password").hasError("hasSmallCase") || ctx.signUpForm.get("password").hasError("hasSpecialCharacters")));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _r2.type === "password");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _r2.type === "text");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.signUpForm.get("password").invalid && ctx.signUpForm.get("password").touched);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName],
  styles: ["h1[_ngcontent-%COMP%] {\n  font-weight: bold;\n  margin: 0;\n}\n\nh2[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\np[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 100;\n  line-height: 20px;\n  letter-spacing: 0.5px;\n  margin: 20px 0 30px;\n  color: white;\n}\n\nspan[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n\na[_ngcontent-%COMP%] {\n  color: #333;\n  font-size: 14px;\n  text-decoration: none;\n  margin: 15px 0;\n}\n\ninput[_ngcontent-%COMP%] {\n  border-radius: 7px;\n  border: 1px solid #616161 !important;\n  width: 100%;\n}\n\n.error-required-input[_ngcontent-%COMP%] {\n  border-color: red !important;\n}\n\n.error-required-icon[_ngcontent-%COMP%] {\n  border-color: red !important;\n}\n\n.error-login-form[_ngcontent-%COMP%] {\n  color: red;\n  margin-top: 5px;\n  font-size: 12px;\n  text-align: justify;\n}\n\n.divider-inputs[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-bottom: 10px;\n}\n\n.error-register-form[_ngcontent-%COMP%] {\n  color: red;\n  margin-top: 5px;\n  font-size: 12px;\n}\n\n.error-valid-input[_ngcontent-%COMP%] {\n  border-color: red !important;\n}\n\n.input-group[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%] {\n  border: none;\n  border-radius: 0px 7px 7px 0px;\n  border-top: 1px solid #616161;\n  border-bottom: 1px solid #616161;\n  border-right: 1px solid #616161;\n  background-color: white;\n}\n\n.border-span[_ngcontent-%COMP%] {\n  border-radius: 7px 0px 0px 7px;\n  border-top: 1px solid #616161;\n  border-bottom: 1px solid #616161;\n  border-left: 1px solid #616161;\n  border-right: none !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbGFuZGluZy9jaGVja291dC1sYW5kL3JlZ2lzdGVyLWNhcmQvcmVnaXN0ZXItY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNDLGlCQUFBO0VBQ0EsU0FBQTtBQUFEOztBQUdBO0VBQ0Msa0JBQUE7QUFBRDs7QUFHQTtFQUNDLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNHLFlBQUE7QUFBSjs7QUFHQTtFQUNDLGVBQUE7QUFBRDs7QUFHQTtFQUNDLFdBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0FBQUQ7O0FBNkJBO0VBQ0Msa0JBQUE7RUFDQSxvQ0FBQTtFQUdBLFdBQUE7QUE1QkQ7O0FBK0JBO0VBQ0ksNEJBQUE7QUE1Qko7O0FBK0JBO0VBQ0MsNEJBQUE7QUE1QkQ7O0FBK0JBO0VBQ0ksVUFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0gsbUJBQUE7QUE1QkQ7O0FBK0JBO0VBQ0MsV0FBQTtFQUNBLG1CQUFBO0FBNUJEOztBQStCQTtFQUNJLFVBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQTVCSjs7QUErQkE7RUFDQyw0QkFBQTtBQTVCRDs7QUFnQ0M7RUFDQyxZQUFBO0VBQ0csOEJBQUE7RUFDQSw2QkFBQTtFQUNHLGdDQUFBO0VBQ0EsK0JBQUE7RUFDQSx1QkFBQTtBQTdCUjs7QUFpQ0E7RUFDQyw4QkFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0NBQUE7RUFDQSw4QkFBQTtFQUNBLDZCQUFBO0FBOUJEIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmgxIHtcclxuXHRmb250LXdlaWdodDogYm9sZDtcclxuXHRtYXJnaW46IDA7XHJcbn1cclxuXHJcbmgyIHtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbnAge1xyXG5cdGZvbnQtc2l6ZTogMTRweDtcclxuXHRmb250LXdlaWdodDogMTAwO1xyXG5cdGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG5cdGxldHRlci1zcGFjaW5nOiAwLjVweDtcclxuXHRtYXJnaW46IDIwcHggMCAzMHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5zcGFuIHtcclxuXHRmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbmEge1xyXG5cdGNvbG9yOiAjMzMzO1xyXG5cdGZvbnQtc2l6ZTogMTRweDtcclxuXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblx0bWFyZ2luOiAxNXB4IDA7XHJcbn1cclxuXHJcbi8vIGJ1dHRvbiB7XHJcbi8vIFx0Ym9yZGVyLXJhZGl1czogMjBweDtcclxuLy8gXHRib3JkZXI6IDFweCBzb2xpZCB2YXIoLS10aGVtZS1kZWFmdWx0KTtcclxuLy8gXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10aGVtZS1kZWFmdWx0KTtcclxuLy8gXHRjb2xvcjogI0ZGRkZGRjtcclxuLy8gXHRmb250LXNpemU6IDEycHg7XHJcbi8vIFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XHJcbi8vIFx0cGFkZGluZzogMTJweCA0NXB4O1xyXG4vLyBcdGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbi8vIFx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuLy8gXHR0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gODBtcyBlYXNlLWluO1xyXG4vLyB9XHJcblxyXG4vLyBidXR0b246YWN0aXZlIHtcclxuLy8gXHR0cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xyXG4vLyB9XHJcblxyXG4vLyBidXR0b246Zm9jdXMge1xyXG4vLyBcdG91dGxpbmU6IG5vbmU7XHJcbi8vIH1cclxuXHJcbi8vIGJ1dHRvbi5naG9zdCB7XHJcbi8vIFx0YmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbi8vIFx0Ym9yZGVyLWNvbG9yOiAjRkZGRkZGO1xyXG4vLyB9XHJcblxyXG5pbnB1dCB7XHJcblx0Ym9yZGVyLXJhZGl1czogN3B4O1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkICM2MTYxNjEgIWltcG9ydGFudDtcclxuXHQvLyBwYWRkaW5nOiAxMnB4IDE1cHg7XHJcblx0Ly8gbWFyZ2luOiA4cHggMDtcclxuXHR3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmVycm9yLXJlcXVpcmVkLWlucHV0e1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZWQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmVycm9yLXJlcXVpcmVkLWljb257XHJcblx0Ym9yZGVyLWNvbG9yOiByZWQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmVycm9yLWxvZ2luLWZvcm17XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG5cdHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbn1cclxuXHJcbi5kaXZpZGVyLWlucHV0c3tcclxuXHR3aWR0aDogMTAwJTtcclxuXHRtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4uZXJyb3ItcmVnaXN0ZXItZm9ybXtcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbi5lcnJvci12YWxpZC1pbnB1dHtcclxuXHRib3JkZXItY29sb3I6IHJlZCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaW5wdXQtZ3JvdXB7XHJcblx0LmlucHV0LWdyb3VwLXRleHR7XHJcblx0XHRib3JkZXI6IG5vbmU7XHJcbiAgICBcdGJvcmRlci1yYWRpdXM6IDBweCA3cHggN3B4IDBweDtcclxuICAgIFx0Ym9yZGVyLXRvcDogMXB4IHNvbGlkICM2MTYxNjE7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM2MTYxNjE7XHJcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzYxNjE2MTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuXHR9XHJcbn1cclxuXHJcbi5ib3JkZXItc3BhbntcclxuXHRib3JkZXItcmFkaXVzOiA3cHggMHB4IDBweCA3cHg7XHJcblx0Ym9yZGVyLXRvcDogMXB4IHNvbGlkICM2MTYxNjE7XHJcblx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM2MTYxNjE7XHJcblx0Ym9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjNjE2MTYxO1xyXG5cdGJvcmRlci1yaWdodDogbm9uZSAhaW1wb3J0YW50O1xyXG4gIH0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});


/***/ }),

/***/ 46315:
/*!******************************************************!*\
  !*** ./src/app/landing/contact/contact.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContactComponent: () => (/* binding */ ContactComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/components/breadcrumb/breadcrumb.component */ 14414);
/* harmony import */ var _home_widgets_logo_logo_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../home/widgets/logo/logo.component */ 85619);



class ContactComponent {
  constructor() {
    this.logo = [{
      image: 'assets/images/logos/1.png'
    }, {
      image: 'assets/images/logos/3.png'
    }, {
      image: 'assets/images/logos/2.png'
    }, {
      image: 'assets/images/logos/4.png'
    }, {
      image: 'assets/images/logos/5.png'
    }, {
      image: 'assets/images/logos/6.png'
    }, {
      image: 'assets/images/logos/7.png'
    }];
  }
}
ContactComponent.ɵfac = function ContactComponent_Factory(t) {
  return new (t || ContactComponent)();
};
ContactComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: ContactComponent,
  selectors: [["app-contact"]],
  decls: 40,
  vars: 3,
  consts: [[3, "title", "breadcrumb"], [1, "contact-page", "section-b-space"], [1, "container"], [1, "row", "section-b-space"], [1, "col-lg-7", "map"], ["src", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.3660713986005!2d-98.25672279999999!3d19.047636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cfc7b2f60670a7%3A0x61f41fa5ab21f752!2sCascos%20y%20Accesorios%20Multimarcas!5e0!3m2!1ses-419!2smx!4v1693234333329!5m2!1ses-419!2smx", "width", "600", "height", "450", "allowfullscreen", "", "loading", "lazy", "referrerpolicy", "no-referrer-when-downgrade", 2, "border", "0"], [1, "col-lg-5"], [1, "contact-right"], [1, "contact-icon"], ["aria-hidden", "true", 1, "fa", "fa-phone"], [1, "media-body"], ["aria-hidden", "true", 1, "fa", "fa-map-marker"], ["aria-hidden", "true", 1, "fa", "fa-envelope"], [1, "section-b-space"], [1, "row"], [1, "col-md-12"], [3, "logos"]],
  template: function ContactComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-breadcrumb", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "section", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "iframe", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 6)(7, "div", 7)(8, "ul")(9, "li")(10, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "i", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "h6");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Contactanos");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 10)(15, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "+52 222 - 519 - 4178");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "li")(18, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "i", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "h6");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Direccion");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 10)(23, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Camino real a Cholula 44-05 Villa Zavaleta plaza Santa Fe Local\u00A01C ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "PUEBLA, PUE. 72150");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "li")(28, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](29, "i", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "h6");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "Correo electronico");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 10)(33, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "info@eyedmx.com");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "section", 13)(36, "div", 2)(37, "div", 14)(38, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](39, "app-logo", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("title", "Contacto")("breadcrumb", "Contacto");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](39);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("logos", ctx.logo);
    }
  },
  dependencies: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__.BreadcrumbComponent, _home_widgets_logo_logo_component__WEBPACK_IMPORTED_MODULE_1__.LogoComponent],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ }),

/***/ 21194:
/*!****************************************************!*\
  !*** ./src/app/landing/inicio/inicio.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InicioComponent: () => (/* binding */ InicioComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _widgets_slider_slider_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../widgets/slider/slider.component */ 8723);


class InicioComponent {
  constructor() {
    // Sliders
    this.sliders = [{
      title: 'A tu alcance',
      subTitle: 'PULSERAS E IDENTIFICADORES PERSONALES CON CÓDIGO QR',
      image: 'assets/manillas/img_manilla.png'
    }];
  }
}
InicioComponent.ɵfac = function InicioComponent_Factory(t) {
  return new (t || InicioComponent)();
};
InicioComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: InicioComponent,
  selectors: [["app-inicio"]],
  decls: 2,
  vars: 4,
  consts: [[1, "p-0"], [3, "sliders", "textClass", "category", "buttonText"]],
  template: function InicioComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-slider", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("sliders", ctx.sliders)("textClass", "text-center")("category", "vegetables")("buttonText", "Descubrelo");
    }
  },
  dependencies: [_widgets_slider_slider_component__WEBPACK_IMPORTED_MODULE_0__.SliderComponent],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ }),

/***/ 72056:
/*!******************************************************!*\
  !*** ./src/app/landing/landing-routing.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LandingRoutingModule: () => (/* binding */ LandingRoutingModule),
/* harmony export */   routes: () => (/* binding */ routes)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _user_info_user_info_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-info/user-info.component */ 84882);
/* harmony import */ var _landing_resolver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./landing.resolver */ 27155);
/* harmony import */ var _inicio_inicio_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inicio/inicio.component */ 21194);
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact/contact.component */ 46315);
/* harmony import */ var _checkout_land_checkout_land_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./checkout-land/checkout-land.component */ 62297);
/* harmony import */ var _checkout_exito_checkout_exito_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./checkout-exito/checkout-exito.component */ 60153);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 61699);









const routes = [{
  path: 'u/:id',
  component: _user_info_user_info_component__WEBPACK_IMPORTED_MODULE_0__.UserInfoComponent,
  resolve: {
    manilla: _landing_resolver__WEBPACK_IMPORTED_MODULE_1__.UserInfoResolver
  }
}, {
  path: 'inicio',
  component: _inicio_inicio_component__WEBPACK_IMPORTED_MODULE_2__.InicioComponent
}, {
  path: 'contact',
  component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_3__.ContactComponent
}, {
  path: 'checkout/:pulsera',
  component: _checkout_land_checkout_land_component__WEBPACK_IMPORTED_MODULE_4__.CheckoutLandComponent,
  resolve: {
    types: _landing_resolver__WEBPACK_IMPORTED_MODULE_1__.PulserasTypesResolver
  }
}, {
  path: 'checkout-exito/:id',
  component: _checkout_exito_checkout_exito_component__WEBPACK_IMPORTED_MODULE_5__.CheckoutExitoComponent,
  resolve: {
    types: _landing_resolver__WEBPACK_IMPORTED_MODULE_1__.PulserasTypesResolver,
    order: _landing_resolver__WEBPACK_IMPORTED_MODULE_1__.ObtenerIntentoPagoResolver
  }
}];
class LandingRoutingModule {}
LandingRoutingModule.ɵfac = function LandingRoutingModule_Factory(t) {
  return new (t || LandingRoutingModule)();
};
LandingRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
  type: LandingRoutingModule
});
LandingRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](LandingRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule]
  });
})();

/***/ }),

/***/ 47325:
/*!*******************************************!*\
  !*** ./src/app/landing/landing.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LandingModule: () => (/* binding */ LandingModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var ng_gallery__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-gallery */ 60977);
/* harmony import */ var ng_gallery_lightbox__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-gallery/lightbox */ 23050);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/shared.module */ 56208);
/* harmony import */ var _landing_routing_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./landing-routing.component */ 72056);
/* harmony import */ var ngx_autosize__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-autosize */ 8099);
/* harmony import */ var _user_info_user_info_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-info/user-info.component */ 84882);
/* harmony import */ var _inicio_inicio_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inicio/inicio.component */ 21194);
/* harmony import */ var _widgets_slider_slider_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./widgets/slider/slider.component */ 8723);
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-mask */ 97728);
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contact/contact.component */ 46315);
/* harmony import */ var _home_home_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../home/home.module */ 54320);
/* harmony import */ var _checkout_land_checkout_land_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./checkout-land/checkout-land.component */ 62297);
/* harmony import */ var _checkout_land_checkout_card_checkout_card_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./checkout-land/checkout-card/checkout-card.component */ 75048);
/* harmony import */ var _checkout_land_checkout_cash_checkout_cash_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./checkout-land/checkout-cash/checkout-cash.component */ 8049);
/* harmony import */ var _checkout_land_register_card_register_card_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./checkout-land/register-card/register-card.component */ 44839);
/* harmony import */ var _checkout_exito_checkout_exito_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./checkout-exito/checkout-exito.component */ 60153);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 61699);


















class LandingModule {}
LandingModule.ɵfac = function LandingModule_Factory(t) {
  return new (t || LandingModule)();
};
LandingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({
  type: LandingModule
});
LandingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({
  providers: [(0,ngx_mask__WEBPACK_IMPORTED_MODULE_13__.provideNgxMask)()],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.CommonModule, ng_gallery__WEBPACK_IMPORTED_MODULE_15__.GalleryModule, ng_gallery_lightbox__WEBPACK_IMPORTED_MODULE_16__.LightboxModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _landing_routing_component__WEBPACK_IMPORTED_MODULE_1__.LandingRoutingModule, ngx_autosize__WEBPACK_IMPORTED_MODULE_17__.AutosizeModule, _home_home_module__WEBPACK_IMPORTED_MODULE_6__.HomeModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](LandingModule, {
    declarations: [_user_info_user_info_component__WEBPACK_IMPORTED_MODULE_2__.UserInfoComponent, _inicio_inicio_component__WEBPACK_IMPORTED_MODULE_3__.InicioComponent, _widgets_slider_slider_component__WEBPACK_IMPORTED_MODULE_4__.SliderComponent, _contact_contact_component__WEBPACK_IMPORTED_MODULE_5__.ContactComponent, _checkout_land_checkout_land_component__WEBPACK_IMPORTED_MODULE_7__.CheckoutLandComponent, _checkout_land_checkout_card_checkout_card_component__WEBPACK_IMPORTED_MODULE_8__.CheckoutCardComponent, _checkout_land_checkout_cash_checkout_cash_component__WEBPACK_IMPORTED_MODULE_9__.CheckoutCashComponent, _checkout_land_register_card_register_card_component__WEBPACK_IMPORTED_MODULE_10__.RegisterCardComponent, _checkout_exito_checkout_exito_component__WEBPACK_IMPORTED_MODULE_11__.CheckoutExitoComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.CommonModule, ng_gallery__WEBPACK_IMPORTED_MODULE_15__.GalleryModule, ng_gallery_lightbox__WEBPACK_IMPORTED_MODULE_16__.LightboxModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _landing_routing_component__WEBPACK_IMPORTED_MODULE_1__.LandingRoutingModule, ngx_autosize__WEBPACK_IMPORTED_MODULE_17__.AutosizeModule, ngx_mask__WEBPACK_IMPORTED_MODULE_13__.NgxMaskDirective, ngx_mask__WEBPACK_IMPORTED_MODULE_13__.NgxMaskPipe, _home_home_module__WEBPACK_IMPORTED_MODULE_6__.HomeModule]
  });
})();

/***/ }),

/***/ 27155:
/*!*********************************************!*\
  !*** ./src/app/landing/landing.resolver.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ObtenerIntentoPagoResolver: () => (/* binding */ ObtenerIntentoPagoResolver),
/* harmony export */   PulserasTypesResolver: () => (/* binding */ PulserasTypesResolver),
/* harmony export */   UserInfoResolver: () => (/* binding */ UserInfoResolver)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 2389);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 33252);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _landing_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./landing.service */ 18599);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _checkout_land_checkout_land_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checkout-land/checkout-land.service */ 56070);





class UserInfoResolver {
  /**
   * Constructor
   */
  constructor(_landingService, _router) {
    this._landingService = _landingService;
    this._router = _router;
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------
  /**
   * Resolver
   *
   * @param route
   * @param state
   */
  resolve(route, state) {
    return this._landingService.getManillaInfo(route.paramMap.get('id')).pipe(
    // Error here means the requested cliente is not available
    (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.catchError)(error => {
      // Log the error
      console.error(error);
      // Get the parent url
      const parentUrl = state.url.split('/').slice(0, -1).join('/');
      // Navigate to there
      this._router.navigateByUrl(parentUrl);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(error);
    }));
  }
}
UserInfoResolver.ɵfac = function UserInfoResolver_Factory(t) {
  return new (t || UserInfoResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_landing_service__WEBPACK_IMPORTED_MODULE_0__.LandingService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router));
};
UserInfoResolver.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
  token: UserInfoResolver,
  factory: UserInfoResolver.ɵfac,
  providedIn: 'root'
});

class PulserasTypesResolver {
  /**
   * Constructor
   */
  constructor(_checoutService) {
    this._checoutService = _checoutService;
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------
  /**
   * Resolver
   *
   * @param route
   * @param state
   */
  resolve(route, state) {
    return this._checoutService.getUserTypes();
  }
}
PulserasTypesResolver.ɵfac = function PulserasTypesResolver_Factory(t) {
  return new (t || PulserasTypesResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_checkout_land_checkout_land_service__WEBPACK_IMPORTED_MODULE_1__.CheckoutLandService));
};
PulserasTypesResolver.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
  token: PulserasTypesResolver,
  factory: PulserasTypesResolver.ɵfac,
  providedIn: 'root'
});

class ObtenerIntentoPagoResolver {
  /**
   * Constructor
   */
  constructor(_checoutService, _router) {
    this._checoutService = _checoutService;
    this._router = _router;
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------
  /**
   * Resolver
   *
   * @param route
   * @param state
   */
  resolve(route, state) {
    return this._checoutService.getOrder(route.paramMap.get('id')).pipe(
    // Error here means the requested cliente is not available
    (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.catchError)(error => {
      // Log the error
      console.error(error);
      // Get the parent url
      const parentUrl = state.url.split('/').slice(0, -1).join('/');
      // Navigate to there
      this._router.navigateByUrl('/login');
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(error);
    }));
  }
}
ObtenerIntentoPagoResolver.ɵfac = function ObtenerIntentoPagoResolver_Factory(t) {
  return new (t || ObtenerIntentoPagoResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_checkout_land_checkout_land_service__WEBPACK_IMPORTED_MODULE_1__.CheckoutLandService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router));
};
ObtenerIntentoPagoResolver.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
  token: ObtenerIntentoPagoResolver,
  factory: ObtenerIntentoPagoResolver.ɵfac,
  providedIn: 'root'
});


/***/ }),

/***/ 18599:
/*!********************************************!*\
  !*** ./src/app/landing/landing.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LandingService: () => (/* binding */ LandingService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 54860);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 58071);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 13738);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 81891);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 33252);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 84980);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 20553);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 61699);





class LandingService {
  /**
   * Constructor
   */
  constructor(_httpClient) {
    this._httpClient = _httpClient;
    this.url = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.urlWeb}`;
    this._manillaInfo = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(null);
  }
  /**
  * Getter for manilla
  */
  get manillaInfo$() {
    return this._manillaInfo.asObservable();
  }
  getFieldsByUserTypes(type) {
    let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams();
    params = params.set('type', type);
    return this._httpClient.get(`${this.url}authentication/fields`, {
      params
    });
  }
  getManillaInfo(id) {
    return this._httpClient.get(`${this.url}manillas/findById/${id}`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.tap)(manilla => {
      this._manillaInfo.next(manilla);
      return manilla;
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.switchMap)(manilla => {
      if (!manilla) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)('No se pudo encontrar la manilla con el id: ' + id + '!');
      }
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(manilla);
    }));
  }
}
LandingService.ɵfac = function LandingService_Factory(t) {
  return new (t || LandingService)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
};
LandingService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({
  token: LandingService,
  factory: LandingService.ɵfac,
  providedIn: "root"
});


/***/ }),

/***/ 84882:
/*!**********************************************************!*\
  !*** ./src/app/landing/user-info/user-info.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserInfoComponent: () => (/* binding */ UserInfoComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 72513);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 20274);
/* harmony import */ var ng_gallery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-gallery */ 60977);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _landing_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../landing.service */ 18599);
/* harmony import */ var ng_gallery_lightbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-gallery/lightbox */ 23050);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/components/breadcrumb/breadcrumb.component */ 14414);
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-mask */ 97728);









function UserInfoComponent_img_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function UserInfoComponent_img_7_Template_img_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r8.lightbox.open(0));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r0.manilla.foto_portador, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
  }
}
function UserInfoComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", (ctx_r1.manilla == null ? null : ctx_r1.manilla.nombre_portador == null ? null : ctx_r1.manilla.nombre_portador.charAt(0)) || (ctx_r1.manilla == null ? null : ctx_r1.manilla.userId == null ? null : ctx_r1.manilla.userId.name == null ? null : ctx_r1.manilla.userId.name.charAt(0)), " ");
  }
}
function UserInfoComponent_p_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, ctx_r2.manilla == null ? null : ctx_r2.manilla.nombre_portador));
  }
}
function UserInfoComponent_p_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, ctx_r3.manilla == null ? null : ctx_r3.manilla.nombre_mascota));
  }
}
function UserInfoComponent_p_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, ctx_r4.manilla == null ? null : ctx_r4.manilla.marca));
  }
}
function UserInfoComponent_p_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, ctx_r5.manilla == null ? null : ctx_r5.manilla.placa));
  }
}
function UserInfoComponent_p_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, ctx_r6.manilla == null ? null : ctx_r6.manilla.raza));
  }
}
function UserInfoComponent_ng_container_26_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 29)(1, "div", 30)(2, "div", 31)(3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 32)(7, "h6", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const field_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 2, field_r10.description));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r11.manilla[field_r10.name]);
  }
}
function UserInfoComponent_ng_container_26_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 29)(1, "div", 30)(2, "div", 31)(3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 32)(7, "h6", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](9, "mask");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const field_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 2, field_r10.description));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("(+52) ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](9, 4, ctx_r12.manilla[field_r10.name], "000-000-0000"), "");
  }
}
function UserInfoComponent_ng_container_26_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 29)(1, "div", 30)(2, "div", 31)(3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 32)(7, "h6", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](9, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const field_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 2, field_r10.description));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](9, 4, ctx_r13.manilla[field_r10.name], "dd/MM/yyyy"));
  }
}
function UserInfoComponent_ng_container_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, UserInfoComponent_ng_container_26_div_1_Template, 9, 4, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, UserInfoComponent_ng_container_26_div_2_Template, 10, 7, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, UserInfoComponent_ng_container_26_div_3_Template, 10, 7, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const field_r10 = ctx.$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", field_r10.type !== "telefono" && field_r10.type !== "file" && field_r10.type !== "Date" && ctx_r7.manilla[field_r10.name] !== "" && !field_r10.private && ctx_r7.manilla[field_r10.name]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", field_r10.type === "telefono" && ctx_r7.manilla[field_r10.name] !== "" && !field_r10.private);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", field_r10.type === "Date" && ctx_r7.manilla[field_r10.name] !== "" && !field_r10.private);
  }
}
class UserInfoComponent {
  constructor(_landingService, _changeDetectorRef, gallery, lightbox) {
    this._landingService = _landingService;
    this._changeDetectorRef = _changeDetectorRef;
    this.gallery = gallery;
    this.lightbox = lightbox;
    this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
    this.manilla = {};
    this.fieldsList = [];
    this.titulo = '';
    this.tipo = '';
    this.telefonoEmergencia = '';
  }
  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    // Subscribe to manilla changes
    this._landingService.manillaInfo$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this._unsubscribeAll)).subscribe(manilla => {
      if (manilla.foto_portador) {
        this.items = [new ng_gallery__WEBPACK_IMPORTED_MODULE_5__.ImageItem({
          src: manilla.foto_portador,
          thumb: manilla.foto_portador
        })];
        // this.items = [new ImageItem({ src: this.imagenTemp, thumb: this.imagenTemp })];
        const lightboxRef = this.gallery.ref('lightbox');
        // Add custom gallery config to the lightbox (optional)
        lightboxRef.setConfig({
          imageSize: ng_gallery__WEBPACK_IMPORTED_MODULE_5__.ImageSize.Cover,
          thumbPosition: ng_gallery__WEBPACK_IMPORTED_MODULE_5__.ThumbnailsPosition.Top
        });
        // Load items into the lightbox gallery ref
        lightboxRef.load(this.items);
      }
      this.getFieldsList(manilla.tipo);
      this.manilla = manilla;
      this.telefonoEmergencia = manilla.telefono_de_emergencia;
      if (manilla.tipo === 'Mascota') {
        this.titulo = 'Informacion Placa';
        this.tipo = 'PLACA';
      } else {
        this.titulo = 'Informacion Pulsera';
        this.tipo = 'PULSERA';
      }
      // Mark for check
      this._changeDetectorRef.markForCheck();
    });
  }
  /**
   * On destroy
   */
  ngOnDestroy() {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next(null);
    this._unsubscribeAll.complete();
  }
  getFieldsList(type) {
    this._landingService.getFieldsByUserTypes(type).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this._unsubscribeAll)).subscribe(response => {
      this.fieldsList = response;
    }, error => {
      console.log(error);
    });
  }
}
UserInfoComponent.ɵfac = function UserInfoComponent_Factory(t) {
  return new (t || UserInfoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_landing_service__WEBPACK_IMPORTED_MODULE_0__.LandingService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ng_gallery__WEBPACK_IMPORTED_MODULE_5__.Gallery), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ng_gallery_lightbox__WEBPACK_IMPORTED_MODULE_6__.Lightbox));
};
UserInfoComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: UserInfoComponent,
  selectors: [["app-user-info"]],
  decls: 36,
  vars: 13,
  consts: [[3, "title", "breadcrumb"], [1, "contact-page", "section-b-space"], [1, "container"], [1, "row", "section-b-space"], [1, "col-lg-4", "map"], [1, "contenedor-img-box"], [1, "contenedor-perfil-image"], ["class", "image-perfil", "alt", "", 3, "src", "click", 4, "ngIf"], ["class", "no-image-perfil", 4, "ngIf"], ["class", "nombre-portador", 4, "ngIf"], ["class", "datos-moto", 4, "ngIf"], [1, "col-lg-8"], [1, "informacion-manilla"], [1, "dashboard-right"], [1, "dashboard"], [1, "box-account", "box-info"], [1, "box-head"], [1, "row"], [4, "ngFor", "ngForOf"], [1, "divider"], [1, "col-sm-6", "mb-4"], [1, "d-grid", "btn-emergencia"], ["target", "_blank", 1, "btn", "btn-warning", 3, "href"], ["href", "//api.whatsapp.com/send?phone=+522225194178&text=Hola", "target", "_blank", 1, "btn", "btn-warning"], ["alt", "", 1, "image-perfil", 3, "src", "click"], [1, "no-image-perfil"], [1, "nombre-portador"], [1, "datos-moto"], ["class", "col-sm-6", 4, "ngIf"], [1, "col-sm-6"], [1, "box"], [1, "box-title"], [1, "box-content", "informacion-manilla-label"], [1, "nombre-contacto"]],
  template: function UserInfoComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-breadcrumb", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "section", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, UserInfoComponent_img_7_Template, 1, 1, "img", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, UserInfoComponent_div_8_Template, 2, 1, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, UserInfoComponent_p_10_Template, 3, 3, "p", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, UserInfoComponent_p_11_Template, 3, 3, "p", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, UserInfoComponent_p_12_Template, 3, 3, "p", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, UserInfoComponent_p_13_Template, 3, 3, "p", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, UserInfoComponent_p_14_Template, 3, 3, "p", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 11)(16, "div", 2)(17, "div", 12)(18, "div", 13)(19, "div", 14)(20, "div", 15)(21, "div", 16)(22, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](26, UserInfoComponent_ng_container_26_Template, 4, 3, "ng-container", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](27, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 20)(29, "div", 21)(30, "a", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 20)(33, "div", 21)(34, "a", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "EMERGENCIA EYEDMX");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("title", ctx.titulo)("breadcrumb", ctx.titulo);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.manilla.foto_portador);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.manilla.foto_portador);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.manilla.nombre_portador);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.manilla.nombre_mascota);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.manilla.marca);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.manilla.placa);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.manilla.raza);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.titulo);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.fieldsList);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("href", "//api.whatsapp.com/send?phone=+52", ctx.telefonoEmergencia, "&text=Hola", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("EMERGENCIA ", ctx.tipo, "");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__.BreadcrumbComponent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.TitleCasePipe, _angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe, ngx_mask__WEBPACK_IMPORTED_MODULE_8__.NgxMaskPipe],
  styles: [".informacion-manilla[_ngcontent-%COMP%] {\n  padding-right: 20px;\n  padding-left: 20px;\n  padding-bottom: 20px;\n}\n.informacion-manilla[_ngcontent-%COMP%]   .informacion-manilla-label[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  margin-left: 10px;\n  font-size: 20px;\n}\n.informacion-manilla[_ngcontent-%COMP%]   .informacion-manilla-titulo[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 21px;\n}\n.informacion-manilla[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%] {\n  background-color: rgb(215, 215, 215) !important;\n}\n.informacion-manilla[_ngcontent-%COMP%]   .btn-emergencia[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: 27px;\n  line-height: 100% !important;\n  padding-bottom: 15px;\n}\n\n.divider[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n\n.nombre-portador[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: bolder;\n  color: black;\n  text-align: center;\n  margin: 0px;\n}\n\n.datos-moto[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: bolder;\n  color: rgb(58, 58, 58);\n  text-align: center;\n  margin: 0px;\n}\n\n.contenedor-img-box[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  align-items: center;\n  justify-content: center;\n}\n.contenedor-img-box[_ngcontent-%COMP%]   .contenedor-perfil-image[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-top: 10px;\n  width: 200px;\n  height: 200px;\n  border-radius: 50%;\n  overflow: hidden;\n}\n.contenedor-img-box[_ngcontent-%COMP%]   .contenedor-perfil-image[_ngcontent-%COMP%]   .image-perfil[_ngcontent-%COMP%] {\n  object-fit: cover;\n  width: 100%;\n  height: 100%;\n}\n.contenedor-img-box[_ngcontent-%COMP%]   .contenedor-perfil-image[_ngcontent-%COMP%]   .no-image-perfil[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  background-color: rgb(188, 188, 188);\n  color: rgb(78, 78, 78);\n  font-weight: bold;\n  font-size: 70px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbGFuZGluZy91c2VyLWluZm8vdXNlci1pbmZvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0FBQ0o7QUFFUTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtBQUFaO0FBS1E7RUFDSSxlQUFBO0FBSFo7QUFPSTtFQUNJLCtDQUFBO0FBTFI7QUFTUTtFQUNJLGVBQUE7RUFDQSw0QkFBQTtFQUNBLG9CQUFBO0FBUFo7O0FBWUE7RUFDSSxnQkFBQTtBQVRKOztBQVlBO0VBQ0ksZUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQVRKOztBQVlBO0VBQ0ksZUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFUSjs7QUFZQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBVEo7QUFXSTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFUUjtBQVdRO0VBQ0ksaUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQVRaO0FBWVE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBVloiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5mb3JtYWNpb24tbWFuaWxsYXtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxuXHJcbiAgICAuaW5mb3JtYWNpb24tbWFuaWxsYS1sYWJlbHtcclxuICAgICAgICBoNntcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmluZm9ybWFjaW9uLW1hbmlsbGEtdGl0dWxve1xyXG4gICAgICAgIGgze1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIxcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5ib3gtdGl0bGV7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxNSwgMjE1LCAyMTUpICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLmJ0bi1lbWVyZ2VuY2lhe1xyXG4gICAgICAgIGF7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjdweDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDE1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uZGl2aWRlcntcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuXHJcbi5ub21icmUtcG9ydGFkb3J7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbn1cclxuXHJcbi5kYXRvcy1tb3Rve1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICAgIGNvbG9yOiByZ2IoNTgsIDU4LCA1OCk7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDBweDtcclxufVxyXG5cclxuLmNvbnRlbmVkb3ItaW1nLWJveHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICAgIC5jb250ZW5lZG9yLXBlcmZpbC1pbWFnZXtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAyMDBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIFxyXG4gICAgICAgIC5pbWFnZS1wZXJmaWx7XHJcbiAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIC5uby1pbWFnZS1wZXJmaWx7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTg4LCAxODgsIDE4OCk7XHJcbiAgICAgICAgICAgIGNvbG9yOiByZ2IoNzgsIDc4LCA3OCk7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDcwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ }),

/***/ 8723:
/*!************************************************************!*\
  !*** ./src/app/landing/widgets/slider/slider.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SliderComponent: () => (/* binding */ SliderComponent)
/* harmony export */ });
/* harmony import */ var _shared_data_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/data/slider */ 32306);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-owl-carousel-o */ 99436);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 27947);





const _c0 = function (a0) {
  return {
    "background-image": a0
  };
};
const _c1 = function () {
  return ["/shop/collection/left/sidebar"];
};
const _c2 = function (a0) {
  return {
    category: a0
  };
};
function SliderComponent_ng_container_1_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3)(1, "div", 4)(2, "div", 5)(3, "div", 6)(4, "div", 7)(5, "div")(6, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
  }
  if (rf & 2) {
    const slider_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r2.textClass)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](8, _c0, "url(" + slider_r1.image + ")"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](slider_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](slider_r1.subTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](10, _c1))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](11, _c2, ctx_r2.category))("ngClass", ctx_r2.buttonClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r2.buttonText, " ");
  }
}
function SliderComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SliderComponent_ng_container_1_ng_template_1_Template, 12, 13, "ng-template", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
}
class SliderComponent {
  constructor() {
    this.HomeSliderConfig = _shared_data_slider__WEBPACK_IMPORTED_MODULE_0__.HomeSlider;
  }
  ngOnInit() {}
}
SliderComponent.ɵfac = function SliderComponent_Factory(t) {
  return new (t || SliderComponent)();
};
SliderComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: SliderComponent,
  selectors: [["app-slider"]],
  inputs: {
    sliders: "sliders",
    class: "class",
    textClass: "textClass",
    category: "category",
    buttonText: "buttonText",
    buttonClass: "buttonClass"
  },
  decls: 2,
  vars: 3,
  consts: [[1, "home-slider", 3, "options", "ngClass"], [4, "ngFor", "ngForOf"], ["carouselSlide", ""], [1, "home", 3, "ngClass", "ngStyle"], [1, "container"], [1, "row"], [1, "col"], [1, "slider-contain"], [1, "btn", "btn-solid", 3, "routerLink", "queryParams", "ngClass"]],
  template: function SliderComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "owl-carousel-o", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SliderComponent_ng_container_1_Template, 2, 0, "ng-container", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx.HomeSliderConfig)("ngClass", ctx.class);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.sliders);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgStyle, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_3__.CarouselComponent, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_3__.CarouselSlideDirective, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ })

}]);
//# sourceMappingURL=src_app_landing_landing_module_ts.628bb3e5660afc1b.js.map