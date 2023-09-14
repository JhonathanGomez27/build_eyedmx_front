"use strict";
(self["webpackChunkmultikart"] = self["webpackChunkmultikart"] || []).push([["src_app_admin_orders_orders_module_ts"],{

/***/ 34665:
/*!**********************************************************************!*\
  !*** ./src/app/admin/orders/modals/ver-orden/ver-orden.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VerOrdenComponent: () => (/* binding */ VerOrdenComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 72513);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 20274);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 20553);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ 27889);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 76101);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var src_app_core_user_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/user/user.service */ 58212);
/* harmony import */ var src_app_admin_admin_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/admin/admin.service */ 62048);
/* harmony import */ var ng_gallery__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-gallery */ 60977);
/* harmony import */ var ng_gallery_lightbox__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-gallery/lightbox */ 23050);
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-mask */ 97728);















const _c0 = ["verOrden"];
function VerOrdenComponent_ng_template_0_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 19)(1, "div", 20)(2, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
}
function VerOrdenComponent_ng_template_0_div_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 22)(1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Metodo de pago");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Tarjeta credito / debito.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
function VerOrdenComponent_ng_template_0_div_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 22)(1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Metodo de pago");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Efectivo.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
function VerOrdenComponent_ng_template_0_div_42_ng_container_11_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 10)(1, "div", 35)(2, "div", 36)(3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](5, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 37)(7, "h6", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const field_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    const pulsera_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](5, 2, field_r13.description));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](pulsera_r10[field_r13.name]);
  }
}
function VerOrdenComponent_ng_template_0_div_42_ng_container_11_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 10)(1, "div", 35)(2, "div", 36)(3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](5, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 37)(7, "h6", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](9, "mask");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const field_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    const pulsera_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](5, 2, field_r13.description));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("(+52) ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](9, 4, pulsera_r10[field_r13.name], "000-000-0000"), "");
  }
}
function VerOrdenComponent_ng_template_0_div_42_ng_container_11_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 10)(1, "div", 35)(2, "div", 36)(3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](5, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 37)(7, "h6", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](9, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const field_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    const pulsera_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](5, 2, field_r13.description));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](9, 4, pulsera_r10[field_r13.name], "dd/MM/yyyy"));
  }
}
function VerOrdenComponent_ng_template_0_div_42_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, VerOrdenComponent_ng_template_0_div_42_ng_container_11_div_1_Template, 9, 4, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, VerOrdenComponent_ng_template_0_div_42_ng_container_11_div_2_Template, 10, 7, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, VerOrdenComponent_ng_template_0_div_42_ng_container_11_div_3_Template, 10, 7, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const field_r13 = ctx.$implicit;
    const pulsera_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", field_r13.type !== "telefono" && field_r13.type !== "file" && field_r13.type !== "Date" && pulsera_r10[field_r13.name] !== "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", field_r13.type === "telefono && manilla[field.name] !== ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", field_r13.type === "Date" && pulsera_r10[field_r13.name] !== "");
  }
}
function VerOrdenComponent_ng_template_0_div_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 23)(1, "h2", 24)(2, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 26)(5, "div", 27)(6, "div", 28)(7, "div", 29)(8, "div", 30)(9, "div", 31)(10, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, VerOrdenComponent_ng_template_0_div_42_ng_container_11_Template, 4, 3, "ng-container", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()()();
  }
  if (rf & 2) {
    const pulsera_r10 = ctx.$implicit;
    const ind_r11 = ctx.index;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate1"]("id", "heading", ind_r11, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate1"]("href", "#collapse", ind_r11, "", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattributeInterpolate1"]("aria-controls", "collapse", ind_r11, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" Pulsera ", pulsera_r10 == null ? null : pulsera_r10.tipo, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate1"]("id", "collapse", ind_r11, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattributeInterpolate1"]("aria-labelledby", "heading", ind_r11, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r6.fieldsList[pulsera_r10 == null ? null : pulsera_r10.tipo]);
  }
}
function VerOrdenComponent_ng_template_0_button_44_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Aceptar Pago");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function VerOrdenComponent_ng_template_0_button_44_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 20)(1, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
function VerOrdenComponent_ng_template_0_button_44_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function VerOrdenComponent_ng_template_0_button_44_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r27);
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r26.cambiarEstadoEsperaEfectivo("success"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, VerOrdenComponent_ng_template_0_button_44_span_1_Template, 2, 0, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, VerOrdenComponent_ng_template_0_button_44_div_2_Template, 3, 0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r7.acepting);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r7.acepting);
  }
}
function VerOrdenComponent_ng_template_0_button_45_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Rechazar Pago");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function VerOrdenComponent_ng_template_0_button_45_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 20)(1, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
function VerOrdenComponent_ng_template_0_button_45_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function VerOrdenComponent_ng_template_0_button_45_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r31);
      const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r30.cambiarEstadoEsperaEfectivo("fail"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, VerOrdenComponent_ng_template_0_button_45_span_1_Template, 2, 0, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, VerOrdenComponent_ng_template_0_button_45_div_2_Template, 3, 0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r8.acepting);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r8.acepting);
  }
}
function VerOrdenComponent_ng_template_0_button_46_Template(rf, ctx) {
  if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function VerOrdenComponent_ng_template_0_button_46_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r34);
      const modal_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](modal_r2.dismiss("Cross click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Cerrar");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function VerOrdenComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 2)(1, "div", 3)(2, "h5", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Informacion pulsera");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function VerOrdenComponent_ng_template_0_Template_button_click_4_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r36);
      const modal_r2 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](modal_r2.dismiss("Cross click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, VerOrdenComponent_ng_template_0_div_5_Template, 4, 0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 7)(7, "div", 8)(8, "div", 9)(9, "div", 10)(10, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "Resumen");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "ul", 11)(13, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](17, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](20, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "div", 10)(22, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, "Direccion de envio");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "ul", 11)(25, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](35, VerOrdenComponent_ng_template_0_div_35_Template, 5, 0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](36, VerOrdenComponent_ng_template_0_div_36_Template, 5, 0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](37, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](39, "Pulseras orden");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](40, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](42, VerOrdenComponent_ng_template_0_div_42_Template, 12, 7, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](44, VerOrdenComponent_ng_template_0_button_44_Template, 3, 2, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](45, VerOrdenComponent_ng_template_0_button_45_Template, 3, 2, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](46, VerOrdenComponent_ng_template_0_button_46_Template, 2, 0, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Id orden: ", ctx_r1.orden._id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Fecha de orden: ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](17, 16, ctx_r1.orden.createdAt, "dd/MM/yyyy"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Total orden: $", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](20, 19, ctx_r1.orden.monto), " MXN");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.datosEnvio == null ? null : ctx_r1.datosEnvio.address == null ? null : ctx_r1.datosEnvio.address.line1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.datosEnvio == null ? null : ctx_r1.datosEnvio.address == null ? null : ctx_r1.datosEnvio.address.state);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("", ctx_r1.datosEnvio == null ? null : ctx_r1.datosEnvio.address == null ? null : ctx_r1.datosEnvio.address.city, ", ", ctx_r1.datosEnvio == null ? null : ctx_r1.datosEnvio.address == null ? null : ctx_r1.datosEnvio.address.postal_code, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Contacto: ", ctx_r1.datosEnvio == null ? null : ctx_r1.datosEnvio.phone, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.orden.userId.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.orden.metodo === "Stripe");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.orden.metodo === "Efectivo");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r1.pulseras);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.tipo === "espera");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.tipo === "espera");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.acepting);
  }
}
class VerOrdenComponent {
  constructor(platformId, router, modalService, _formBuilder, _userService, _changeDetectorRef, _adminService, gallery, lightbox) {
    this.platformId = platformId;
    this.router = router;
    this.modalService = modalService;
    this._formBuilder = _formBuilder;
    this._userService = _userService;
    this._changeDetectorRef = _changeDetectorRef;
    this._adminService = _adminService;
    this.gallery = gallery;
    this.lightbox = lightbox;
    this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
    this.modalOpen = false;
    this.orden = {};
    this.limit = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.pagination_limit;
    this.loading = true;
    this.acepting = true;
    this.showIcons = {};
    this.fieldsList = {};
    this.datosEnvio = {};
    this.types = {};
    this.typesList = [];
    this.pulseras = [];
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
    this._adminService.userTypes$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this._unsubscribeAll)).subscribe(types => {
      // Update the selected agente
      this.types = types;
      this.loading = true;
      types.forEach(element => {
        this.getFieldsByType(element.name);
      });
      this.loading = false;
      // Mark for check
      this._changeDetectorRef.markForCheck();
    });
    this._adminService.ordenSelected$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this._unsubscribeAll)).subscribe(orden => {
      // Update the manilla list
      this.orden = orden;
      this.pulseras = orden?.manillasId;
      this.datosEnvio = orden?.otros?.envio || {};
      // console.log(this.manilla);
      // Mark for check
      this._changeDetectorRef.markForCheck();
    });
  }
  ngOnDestroy() {
    if (this.modalOpen) {
      this.modalService.dismissAll();
    }
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next(null);
    this._unsubscribeAll.complete();
  }
  openModal() {
    this.modalOpen = true;
    if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_7__.isPlatformBrowser)(this.platformId)) {
      // For SSR 
      this.modalService.open(this.ModalOrden, {
        size: 'lg',
        ariaLabelledBy: 'modal-basic-title',
        centered: true,
        windowClass: 'ModalOrden',
        backdrop: 'static',
        keyboard: false,
        scrollable: true
      }).result.then(result => {
        `Result ${result}`;
      }, reason => {});
    }
  }
  cambiarEstadoEsperaEfectivo(estado) {
    this.acepting = false;
    this._adminService.actualizarPagoPulsera(this.orden._id, estado).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this._unsubscribeAll)).subscribe(response => {
      if (estado === 'success') {
        this.Toast.fire({
          icon: "success",
          title: "La orden ha sido actualizada y ahora esta en la lista de solicitudes."
        });
      } else {
        this.Toast.fire({
          icon: "success",
          title: "La orden ha sido actualizada y su pago no se ha procesado."
        });
      }
      this.getPulserasPendientePagoPaginated(0);
      this.acepting = true;
      this._changeDetectorRef.markForCheck();
    }, error => {
      this.acepting = true;
      this.Toast.fire({
        icon: "error",
        title: error.error.message
      });
      this._changeDetectorRef.markForCheck();
    });
  }
  getPulserasPendientePagoPaginated(page) {
    this._adminService.getPulserasEfectivoPaginated(page, this.limit).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this._unsubscribeAll)).subscribe(response => {
      this._adminService.updatePulserasPendienteList(response);
      this.modalService.dismissAll();
    }, error => {
      this.Toast.fire({
        icon: "error",
        title: error.error.message
      });
    });
  }
  getFieldsByType(type) {
    this._userService.getFieldsByUserTypes(type).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this._unsubscribeAll)).subscribe(response => {
      this.fieldsList[type] = response;
    }, error => {
      console.log(error);
    });
  }
}
VerOrdenComponent.ɵfac = function VerOrdenComponent_Factory(t) {
  return new (t || VerOrdenComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_user_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_admin_admin_service__WEBPACK_IMPORTED_MODULE_3__.AdminService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ng_gallery__WEBPACK_IMPORTED_MODULE_11__.Gallery), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ng_gallery_lightbox__WEBPACK_IMPORTED_MODULE_12__.Lightbox));
};
VerOrdenComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: VerOrdenComponent,
  selectors: [["app-ver-orden"]],
  viewQuery: function VerOrdenComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.ModalOrden = _t.first);
    }
  },
  inputs: {
    tipo: "tipo"
  },
  decls: 2,
  vars: 0,
  consts: [["class", "theme-modal"], ["verOrden", ""], [1, "modal-content", "quick-view-modal"], [1, "modal-header"], ["id", "modalSolicitarManillaTitulo", 1, "modal-title", "f-w-600"], ["type", "button", "aria-label", "Close", 1, "btn-close", 3, "click"], ["class", "d-flex justify-content-center mb-4 mt-4", 4, "ngIf"], [1, "modal-body"], [1, "datos-envio"], [1, "row", "order-success-sec"], [1, "col-sm-6"], [1, "order-detail"], ["class", "col-sm-12 payment-mode border-order-2", 4, "ngIf"], ["id", "accordionPulseras", 1, "accordion", "accordion-flush"], ["class", "accordion-item", 4, "ngFor", "ngForOf"], [1, "modal-footer"], ["class", "btn btn-primary", "type", "button", "data-dismiss", "modal", 3, "click", 4, "ngIf"], ["class", "btn btn-danger", "type", "button", "data-dismiss", "modal", 3, "click", 4, "ngIf"], ["class", "btn btn-secondary", "type", "button", "data-dismiss", "modal", 3, "click", 4, "ngIf"], [1, "d-flex", "justify-content-center", "mb-4", "mt-4"], ["role", "status", 1, "spinner-border"], [1, "visually-hidden"], [1, "col-sm-12", "payment-mode", "border-order-2"], [1, "accordion-item"], [1, "accordion-header", 3, "id"], ["type", "button", "data-bs-toggle", "collapse", "target", "_blank", "aria-expanded", "false", 1, "accordion-button", 3, "href"], ["data-bs-parent", "#accordionPulseras", 1, "accordion-collapse", "collapse", 3, "id"], [1, "accordion-body"], [1, "informacion-manilla"], [1, "dashboard-right"], [1, "dashboard"], [1, "box-account", "box-info"], [1, "row"], [4, "ngFor", "ngForOf"], ["class", "col-sm-6", 4, "ngIf"], [1, "box"], [1, "box-title"], [1, "box-content", "informacion-manilla-label"], [1, "nombre-contacto"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-primary", 3, "click"], [4, "ngIf"], ["class", "spinner-border", "role", "status", 4, "ngIf"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-danger", 3, "click"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-secondary", 3, "click"]],
  template: function VerOrdenComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, VerOrdenComponent_ng_template_0_Template, 47, 21, "ng-template", 0, 1, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.DecimalPipe, _angular_common__WEBPACK_IMPORTED_MODULE_7__.TitleCasePipe, _angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe, ngx_mask__WEBPACK_IMPORTED_MODULE_13__.NgxMaskPipe],
  styles: [".accordion[_ngcontent-%COMP%] {\n  --bs-accordion-active-bg: #a2a5af27;\n  --bs-accordion-border-radius: 10px;\n}\n\n.accordion-button[_ngcontent-%COMP%] {\n  border-radius: 7px;\n  color: black;\n  text-decoration: none;\n}\n\n.accordion-item[_ngcontent-%COMP%] {\n  border: 1px solid rgba(197, 197, 197, 0.579);\n  border-radius: 7px;\n}\n\n.informacion-manilla[_ngcontent-%COMP%] {\n  padding-right: 20px;\n  padding-left: 20px;\n  padding-bottom: 20px;\n}\n.informacion-manilla[_ngcontent-%COMP%]   .informacion-manilla-label[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYWRtaW4vb3JkZXJzL21vZGFscy92ZXItb3JkZW4vdmVyLW9yZGVuLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksbUNBQUE7RUFDQSxrQ0FBQTtBQUFKOztBQUdFO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7QUFBSjs7QUFHRTtFQUNFLDRDQUFBO0VBQ0Esa0JBQUE7QUFBSjs7QUFHRTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtBQUFKO0FBR1E7RUFDSSxpQkFBQTtBQURaIiwic291cmNlc0NvbnRlbnQiOlsiLmFjY29yZGlvbiB7XHJcbiAgICAvLyAtLWJzLWFjY29yZGlvbi1hY3RpdmUtYmc6ICMzYTU2YTIyNztcclxuICAgIC0tYnMtYWNjb3JkaW9uLWFjdGl2ZS1iZzogI2EyYTVhZjI3O1xyXG4gICAgLS1icy1hY2NvcmRpb24tYm9yZGVyLXJhZGl1czogMTBweDtcclxuICB9XHJcblxyXG4gIC5hY2NvcmRpb24tYnV0dG9ue1xyXG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIH1cclxuXHJcbiAgLmFjY29yZGlvbi1pdGVte1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxOTcsIDE5NywgMTk3LCAwLjU3OSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XHJcbiAgfVxyXG5cclxuICAuaW5mb3JtYWNpb24tbWFuaWxsYXtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxuXHJcbiAgICAuaW5mb3JtYWNpb24tbWFuaWxsYS1sYWJlbHtcclxuICAgICAgICBoNntcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ }),

/***/ 64367:
/*!*******************************************************************!*\
  !*** ./src/app/admin/orders/orders-cash/orders-cash.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OrdersCashComponent: () => (/* binding */ OrdersCashComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 72513);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 20274);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 20553);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ 27889);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var src_app_core_user_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/user/user.service */ 58212);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 76101);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _admin_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../admin.service */ 62048);
/* harmony import */ var _modals_ver_orden_ver_orden_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modals/ver-orden/ver-orden.component */ 34665);











const _c0 = ["verOrden"];
function OrdersCashComponent_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", ctx_r0.manillasCount, " ");
  }
}
const _c1 = function (a0, a1) {
  return {
    "badge-warning": a0,
    "badge-success": a1
  };
};
const _c2 = function (a0) {
  return {
    "badge-secondary": a0
  };
};
function OrdersCashComponent_tr_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr")(1, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "td")(8, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, " En espera ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "td")(11, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "td")(14, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function OrdersCashComponent_tr_30_Template_a_click_14_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r7);
      const manilla_r4 = restoredCtx.$implicit;
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r6.abrirModalVerOrden(manilla_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](15, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const manilla_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", manilla_r4._id, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](manilla_r4 == null ? null : manilla_r4.userId == null ? null : manilla_r4.userId.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("$ ", manilla_r4.monto, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](6, _c1, (manilla_r4 == null ? null : manilla_r4.estado) === "wait", (manilla_r4 == null ? null : manilla_r4.estado) !== "wait"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](9, _c2, (manilla_r4 == null ? null : manilla_r4.metodo) === "Efectivo"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", manilla_r4 == null ? null : manilla_r4.metodo, " ");
  }
}
function OrdersCashComponent_div_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 24)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "\u00A1No hay ordenes pendientes para mostrar!");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
const _c3 = function () {
  return {
    "=0": "No hay ordenes pendientes",
    "=1": "orden pendiete",
    "other": "ordenes pendientes"
  };
};
class OrdersCashComponent {
  constructor(_userService, _changeDetectorRef, modalService, _formBuilder, viewScroller, _adminService) {
    this._userService = _userService;
    this._changeDetectorRef = _changeDetectorRef;
    this.modalService = modalService;
    this._formBuilder = _formBuilder;
    this.viewScroller = viewScroller;
    this._adminService = _adminService;
    this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
    this.manillasCount = 0;
    this.manillasList = [];
    this.page = 1;
    this.estados = [];
    this.types = [];
    this.limit = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.pagination_limit;
    this.seleccionadas = [];
    this.selectAll = [];
    this.selectInputControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(false);
    this.loading = false;
    this.Toast = sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: toast => {
        toast.addEventListener("mouseenter", (sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().stopTimer));
        toast.addEventListener("mouseleave", (sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().resumeTimer));
      }
    });
  }
  ngOnInit() {
    this._adminService.pulserasPendites$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this._unsubscribeAll)).subscribe(manillas => {
      // Update the selected agente
      this.manillasList = manillas.pagos;
      this.manillasCount = manillas.total;
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
  getPulserasPendientePagoPaginated(page) {
    this._adminService.getPulserasEfectivoPaginated(page, this.limit).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this._unsubscribeAll)).subscribe(response => {
      this._adminService.updatePulserasPendienteList(response);
    }, error => {
      this.Toast.fire({
        icon: "error",
        title: error.error.message
      });
    });
  }
  onPageChange(event) {
    this.getPulserasPendientePagoPaginated(event - 1);
  }
  abrirModalVerOrden(orden) {
    this._adminService.setOrdenSelected(orden);
    this.VerOrden.openModal();
  }
}
OrdersCashComponent.ɵfac = function OrdersCashComponent_Factory(t) {
  return new (t || OrdersCashComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_user_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_10__.ViewportScroller), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_admin_service__WEBPACK_IMPORTED_MODULE_3__.AdminService));
};
OrdersCashComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: OrdersCashComponent,
  selectors: [["app-orders-cash"]],
  viewQuery: function OrdersCashComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.VerOrden = _t.first);
    }
  },
  decls: 36,
  vars: 15,
  consts: [[1, "dashboard-right"], [1, "dashboard"], [1, "welcome-msg", "count-manillas"], [1, "nombre-msg"], [4, "ngIf"], [1, "container-fluid"], [1, "row"], [1, "col-sm-12"], [1, "card"], [1, "card-body"], ["id", "batchDelete", 1, "category-table", "custom-datatable"], [1, "table-responsive"], [1, "table", "table-striped"], ["scope", "col"], [4, "ngFor", "ngForOf"], ["class", "d-flex justify-content-center mb-4 mt-4", 4, "ngIf"], [1, "d-flex", "justify-content-center", "p-2"], [3, "collectionSize", "rotate", "maxSize", "page", "pageSize", "boundaryLinks", "pageChange"], [3, "tipo"], ["verOrden", ""], ["scope", "row"], [1, "badge", 3, "ngClass"], ["href", "javascript:void(0)", "data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Ver pulsera", 3, "click"], [1, "fa", "fa-eye", "f-12", 2, "color", "#3c70f4"], [1, "d-flex", "justify-content-center", "mb-4", "mt-4"]],
  template: function OrdersCashComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "p", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, OrdersCashComponent_ng_container_4_Template, 2, 1, "ng-container", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](6, "i18nPlural");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 5)(8, "div", 6)(9, "div", 7)(10, "div", 8)(11, "div", 9)(12, "div", 10)(13, "div", 11)(14, "table", 12)(15, "thead")(16, "tr")(17, "th", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, "Id Orden");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "th", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20, "Usuario");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "th", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22, "Monto");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "th", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24, "Estado");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "th", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26, "Metodo");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "th", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28, "Acciones");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "tbody");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](30, OrdersCashComponent_tr_30_Template, 17, 11, "tr", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](31, OrdersCashComponent_div_31_Template, 3, 0, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "div", 16)(33, "ngb-pagination", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("pageChange", function OrdersCashComponent_Template_ngb_pagination_pageChange_33_listener($event) {
        return ctx.onPageChange($event);
      })("pageChange", function OrdersCashComponent_Template_ngb_pagination_pageChange_33_listener($event) {
        return ctx.page = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](34, "app-ver-orden", 18, 19);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.manillasCount > 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](6, 11, ctx.manillasCount, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](14, _c3)), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](25);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.manillasList);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.manillasCount <= 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("collectionSize", ctx.manillasCount)("rotate", true)("maxSize", 5)("page", ctx.page)("pageSize", ctx.limit)("boundaryLinks", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("tipo", "espera");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbPagination, _modals_ver_orden_ver_orden_component__WEBPACK_IMPORTED_MODULE_4__.VerOrdenComponent, _angular_common__WEBPACK_IMPORTED_MODULE_10__.I18nPluralPipe],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ }),

/***/ 67462:
/*!*******************************************************************!*\
  !*** ./src/app/admin/orders/orders-list/orders-list.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OrdersListComponent: () => (/* binding */ OrdersListComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 72513);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 20274);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 20553);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ 27889);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var src_app_core_user_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/user/user.service */ 58212);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 76101);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _admin_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../admin.service */ 62048);
/* harmony import */ var _modals_ver_orden_ver_orden_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modals/ver-orden/ver-orden.component */ 34665);











const _c0 = ["verOrden"];
function OrdersListComponent_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", ctx_r0.ordenesCount, " ");
  }
}
function OrdersListComponent_tr_30_span_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " En espera ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function OrdersListComponent_tr_30_span_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Pago exitoso ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function OrdersListComponent_tr_30_span_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Rechazado ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
const _c1 = function (a0, a1) {
  return {
    "badge-secondary": a0,
    "badge-primary": a1
  };
};
function OrdersListComponent_tr_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr")(1, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, OrdersListComponent_tr_30_span_8_Template, 2, 0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, OrdersListComponent_tr_30_span_9_Template, 2, 0, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, OrdersListComponent_tr_30_span_10_Template, 2, 0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "td")(12, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "td")(15, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function OrdersListComponent_tr_30_Template_a_click_15_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r10);
      const orden_r4 = restoredCtx.$implicit;
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r9.abrirModalVerOrden(orden_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](16, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const orden_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", orden_r4._id, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](orden_r4 == null ? null : orden_r4.userId == null ? null : orden_r4.userId.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("$ ", orden_r4.monto, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (orden_r4 == null ? null : orden_r4.estado) === "wait");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (orden_r4 == null ? null : orden_r4.estado) === "success");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (orden_r4 == null ? null : orden_r4.estado) === "fail");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](8, _c1, (orden_r4 == null ? null : orden_r4.metodo) === "Efectivo", (orden_r4 == null ? null : orden_r4.metodo) === "Stripe"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", orden_r4 == null ? null : orden_r4.metodo, " ");
  }
}
function OrdersListComponent_div_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 30)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "\u00A1No hay ordenes para mostrar!");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
const _c2 = function () {
  return {
    "=0": "No hay ordenes pendientes",
    "=1": "orden pendiete",
    "other": "ordenes pendientes"
  };
};
class OrdersListComponent {
  constructor(_userService, _changeDetectorRef, modalService, _formBuilder, viewScroller, _adminService) {
    this._userService = _userService;
    this._changeDetectorRef = _changeDetectorRef;
    this.modalService = modalService;
    this._formBuilder = _formBuilder;
    this.viewScroller = viewScroller;
    this._adminService = _adminService;
    this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
    this.ordenesCount = 0;
    this.ordenesList = [];
    this.page = 1;
    this.estados = [];
    this.types = [];
    this.limit = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.pagination_limit;
    this.seleccionadas = [];
    this.selectAll = [];
    this.selectInputControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(false);
    this.loading = false;
    this.Toast = sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: toast => {
        toast.addEventListener("mouseenter", (sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().stopTimer));
        toast.addEventListener("mouseleave", (sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().resumeTimer));
      }
    });
  }
  ngOnInit() {
    this._adminService.ordenesList$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this._unsubscribeAll)).subscribe(manillas => {
      // Update the selected agente
      this.ordenesList = manillas.pagos;
      this.ordenesCount = manillas.total;
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
  getOrdesnesListPaginated(page) {
    this._adminService.getListOrdenesPaginated(page, this.limit).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this._unsubscribeAll)).subscribe(response => {
      this._adminService.updateListOrdenes(response);
    }, error => {
      this.Toast.fire({
        icon: "error",
        title: error.error.message
      });
    });
  }
  onPageChange(event) {
    this.getOrdesnesListPaginated(event - 1);
  }
  abrirModalVerOrden(orden) {
    this._adminService.setOrdenSelected(orden);
    this.VerOrden.openModal();
  }
}
OrdersListComponent.ɵfac = function OrdersListComponent_Factory(t) {
  return new (t || OrdersListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_user_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_10__.ViewportScroller), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_admin_service__WEBPACK_IMPORTED_MODULE_3__.AdminService));
};
OrdersListComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: OrdersListComponent,
  selectors: [["app-orders-list"]],
  viewQuery: function OrdersListComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.VerOrden = _t.first);
    }
  },
  decls: 36,
  vars: 15,
  consts: [[1, "dashboard-right"], [1, "dashboard"], [1, "welcome-msg", "count-manillas"], [1, "nombre-msg"], [4, "ngIf"], [1, "container-fluid"], [1, "row"], [1, "col-sm-12"], [1, "card"], [1, "card-body"], ["id", "batchDelete", 1, "category-table", "custom-datatable"], [1, "table-responsive"], [1, "table", "table-striped"], ["scope", "col"], [4, "ngFor", "ngForOf"], ["class", "d-flex justify-content-center mb-4 mt-4", 4, "ngIf"], [1, "d-flex", "justify-content-center", "p-2"], [3, "collectionSize", "rotate", "maxSize", "page", "pageSize", "boundaryLinks", "pageChange"], [3, "tipo"], ["verOrden", ""], ["scope", "row"], ["class", "badge badge-warning", 4, "ngIf"], ["class", "badge badge-success", 4, "ngIf"], ["class", "badge badge-danger", 4, "ngIf"], [1, "badge", 3, "ngClass"], ["href", "javascript:void(0)", "data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Ver pulsera", 3, "click"], [1, "fa", "fa-eye", "f-12", 2, "color", "#3c70f4"], [1, "badge", "badge-warning"], [1, "badge", "badge-success"], [1, "badge", "badge-danger"], [1, "d-flex", "justify-content-center", "mb-4", "mt-4"]],
  template: function OrdersListComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "p", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, OrdersListComponent_ng_container_4_Template, 2, 1, "ng-container", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](6, "i18nPlural");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 5)(8, "div", 6)(9, "div", 7)(10, "div", 8)(11, "div", 9)(12, "div", 10)(13, "div", 11)(14, "table", 12)(15, "thead")(16, "tr")(17, "th", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, "Id Orden");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "th", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20, "Usuario");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "th", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22, "Monto");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "th", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24, "Estado");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "th", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26, "Metodo");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "th", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28, "Acciones");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "tbody");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](30, OrdersListComponent_tr_30_Template, 18, 11, "tr", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](31, OrdersListComponent_div_31_Template, 3, 0, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "div", 16)(33, "ngb-pagination", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("pageChange", function OrdersListComponent_Template_ngb_pagination_pageChange_33_listener($event) {
        return ctx.onPageChange($event);
      })("pageChange", function OrdersListComponent_Template_ngb_pagination_pageChange_33_listener($event) {
        return ctx.page = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](34, "app-ver-orden", 18, 19);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.ordenesCount > 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](6, 11, ctx.ordenesCount, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](14, _c2)), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](25);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.ordenesList);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.ordenesCount <= 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("collectionSize", ctx.ordenesCount)("rotate", true)("maxSize", 5)("page", ctx.page)("pageSize", ctx.limit)("boundaryLinks", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("tipo", "lista");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbPagination, _modals_ver_orden_ver_orden_component__WEBPACK_IMPORTED_MODULE_4__.VerOrdenComponent, _angular_common__WEBPACK_IMPORTED_MODULE_10__.I18nPluralPipe],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ }),

/***/ 8831:
/*!**************************************************!*\
  !*** ./src/app/admin/orders/orders.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OrdersComponent: () => (/* binding */ OrdersComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 27947);


class OrdersComponent {
  constructor() {}
  ngOnInit() {}
}
OrdersComponent.ɵfac = function OrdersComponent_Factory(t) {
  return new (t || OrdersComponent)();
};
OrdersComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: OrdersComponent,
  selectors: [["app-orders"]],
  decls: 1,
  vars: 0,
  template: function OrdersComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ }),

/***/ 62993:
/*!***********************************************!*\
  !*** ./src/app/admin/orders/orders.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OrdersModule: () => (/* binding */ OrdersModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/shared.module */ 56208);
/* harmony import */ var ng_gallery_lightbox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-gallery/lightbox */ 23050);
/* harmony import */ var ng_gallery__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-gallery */ 60977);
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-mask */ 97728);
/* harmony import */ var _orders_list_orders_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./orders-list/orders-list.component */ 67462);
/* harmony import */ var _orders_cash_orders_cash_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./orders-cash/orders-cash.component */ 64367);
/* harmony import */ var _orders_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./orders.routing.module */ 97601);
/* harmony import */ var _orders_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./orders.component */ 8831);
/* harmony import */ var _modals_ver_orden_ver_orden_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modals/ver-orden/ver-orden.component */ 34665);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 61699);











class OrdersModule {}
OrdersModule.ɵfac = function OrdersModule_Factory(t) {
  return new (t || OrdersModule)();
};
OrdersModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
  type: OrdersModule
});
OrdersModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
  providers: [(0,ngx_mask__WEBPACK_IMPORTED_MODULE_7__.provideNgxMask)()],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, ng_gallery__WEBPACK_IMPORTED_MODULE_9__.GalleryModule, ng_gallery_lightbox__WEBPACK_IMPORTED_MODULE_10__.LightboxModule, _orders_routing_module__WEBPACK_IMPORTED_MODULE_3__.OrdersRoutes]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](OrdersModule, {
    declarations: [_orders_component__WEBPACK_IMPORTED_MODULE_4__.OrdersComponent, _orders_list_orders_list_component__WEBPACK_IMPORTED_MODULE_1__.OrdersListComponent, _orders_cash_orders_cash_component__WEBPACK_IMPORTED_MODULE_2__.OrdersCashComponent, _modals_ver_orden_ver_orden_component__WEBPACK_IMPORTED_MODULE_5__.VerOrdenComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, ng_gallery__WEBPACK_IMPORTED_MODULE_9__.GalleryModule, ng_gallery_lightbox__WEBPACK_IMPORTED_MODULE_10__.LightboxModule, ngx_mask__WEBPACK_IMPORTED_MODULE_7__.NgxMaskDirective, ngx_mask__WEBPACK_IMPORTED_MODULE_7__.NgxMaskPipe, _orders_routing_module__WEBPACK_IMPORTED_MODULE_3__.OrdersRoutes]
  });
})();

/***/ }),

/***/ 97601:
/*!*******************************************************!*\
  !*** ./src/app/admin/orders/orders.routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OrdersRoutes: () => (/* binding */ OrdersRoutes)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _orders_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./orders.component */ 8831);
/* harmony import */ var _orders_list_orders_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./orders-list/orders-list.component */ 67462);
/* harmony import */ var _orders_cash_orders_cash_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./orders-cash/orders-cash.component */ 64367);
/* harmony import */ var _admin_resolver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../admin.resolver */ 92386);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 61699);







const routes = [{
  path: '',
  component: _orders_component__WEBPACK_IMPORTED_MODULE_0__.OrdersComponent,
  children: [{
    path: 'list',
    component: _orders_list_orders_list_component__WEBPACK_IMPORTED_MODULE_1__.OrdersListComponent,
    resolve: {
      ordenes: _admin_resolver__WEBPACK_IMPORTED_MODULE_3__.OrdenesListResolver
    },
    data: {
      title: "Ordenes",
      breadcrumb: "Lista"
    }
  }, {
    path: 'pendientes-pago',
    component: _orders_cash_orders_cash_component__WEBPACK_IMPORTED_MODULE_2__.OrdersCashComponent,
    resolve: {
      ordenes: _admin_resolver__WEBPACK_IMPORTED_MODULE_3__.pendienteEfectivoListResolver
    },
    data: {
      title: "Ordenes",
      breadcrumb: "Pendiente pago"
    }
  }],
  data: {
    title: "Ordenes",
    breadcrumb: "Ordenes"
  },
  resolve: {
    types: _admin_resolver__WEBPACK_IMPORTED_MODULE_3__.AdminTypesResolver
  }
  // resolve: {
  //   manillas: AdminManillasResolver
  // }
}];

class OrdersRoutes {}
OrdersRoutes.ɵfac = function OrdersRoutes_Factory(t) {
  return new (t || OrdersRoutes)();
};
OrdersRoutes.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
  type: OrdersRoutes
});
OrdersRoutes.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](OrdersRoutes, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_admin_orders_orders_module_ts.js.map