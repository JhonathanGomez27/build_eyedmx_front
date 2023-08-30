"use strict";
(self["webpackChunkmultikart"] = self["webpackChunkmultikart"] || []).push([["src_app_user_user_module_ts"],{

/***/ 22651:
/*!********************************************!*\
  !*** ./src/app/core/user/user.resolver.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserManillasResolver: () => (/* binding */ UserManillasResolver),
/* harmony export */   UserTypesResolver: () => (/* binding */ UserTypesResolver)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user.service */ 58212);


class UserTypesResolver {
  /**
   * Constructor
   */
  constructor(_userService) {
    this._userService = _userService;
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
    return this._userService.getUserTypes();
  }
}
UserTypesResolver.ɵfac = function UserTypesResolver_Factory(t) {
  return new (t || UserTypesResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_user_service__WEBPACK_IMPORTED_MODULE_0__.UserService));
};
UserTypesResolver.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: UserTypesResolver,
  factory: UserTypesResolver.ɵfac,
  providedIn: 'root'
});

class UserManillasResolver {
  /**
   * Constructor
   */
  constructor(_userService) {
    this._userService = _userService;
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
    return this._userService.getUserManillas();
  }
}
UserManillasResolver.ɵfac = function UserManillasResolver_Factory(t) {
  return new (t || UserManillasResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_user_service__WEBPACK_IMPORTED_MODULE_0__.UserService));
};
UserManillasResolver.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: UserManillasResolver,
  factory: UserManillasResolver.ɵfac,
  providedIn: 'root'
});


/***/ }),

/***/ 94969:
/*!************************************************************!*\
  !*** ./src/app/user/dashboard/dashboard-user.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DashboardUserComponent: () => (/* binding */ DashboardUserComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 72513);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 20274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ 27889);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ng_gallery__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-gallery */ 60977);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var src_app_core_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/auth/auth.service */ 54855);
/* harmony import */ var src_app_core_user_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/user/user.service */ 58212);
/* harmony import */ var ng_gallery_lightbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-gallery/lightbox */ 23050);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 76101);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-mask */ 97728);
/* harmony import */ var _modal_contrasenia_modal_contrasenia_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modal-contrasenia/modal-contrasenia.component */ 35504);














const _c0 = ["modalContrasenia"];
const _c1 = ["editNgForm"];
function DashboardUserComponent_img_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "img", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DashboardUserComponent_img_8_Template_img_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r13);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r12.lightbox.open(0));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", ctx_r0.user.fotoBase64, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
  }
}
function DashboardUserComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r1.user.name.charAt(0), " ");
  }
}
function DashboardUserComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 29)(1, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DashboardUserComponent_div_18_Template_a_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r15);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r14.btnEditProfile());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, " Editar perfil ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
function DashboardUserComponent_h6_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "h6")(1, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DashboardUserComponent_h6_31_Template_a_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r17);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r16.ModalContrasenia.openModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Cambiar contrase\u00F1a");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
function DashboardUserComponent_h6_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "h6", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "mask");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("(+52) ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](2, 1, ctx_r4.user.telefono, "000-000-0000"), "");
  }
}
function DashboardUserComponent_div_39_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " El campo: Telefono es requerido ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function DashboardUserComponent_div_39_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Ingrese un Telefono valido ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
const _c2 = function (a0) {
  return {
    "error-form-invalid": a0
  };
};
function DashboardUserComponent_div_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, DashboardUserComponent_div_39_div_2_Template, 2, 0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, DashboardUserComponent_div_39_div_3_Template, 2, 0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](4, _c2, ctx_r5.telefonoInputControl.invalid))("formControl", ctx_r5.telefonoInputControl);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (ctx_r5.telefonoInputControl.errors == null ? null : ctx_r5.telefonoInputControl.errors.required) && ctx_r5.telefonoInputControl.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !(ctx_r5.telefonoInputControl.errors == null ? null : ctx_r5.telefonoInputControl.errors.required) && ctx_r5.telefonoInputControl.invalid);
  }
}
function DashboardUserComponent_h6_46_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r6.user.direccion, ".");
  }
}
function DashboardUserComponent_div_47_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " El campo: Direccion es requerido ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function DashboardUserComponent_div_47_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "input", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, DashboardUserComponent_div_47_div_2_Template, 2, 0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](3, _c2, ctx_r7.direccionInputControl.invalid))("formControl", ctx_r7.direccionInputControl);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (ctx_r7.direccionInputControl.errors == null ? null : ctx_r7.direccionInputControl.errors.required) && ctx_r7.direccionInputControl.touched);
  }
}
const _c3 = function (a0) {
  return {
    "disable-link": a0
  };
};
function DashboardUserComponent_div_57_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 36)(1, "a", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DashboardUserComponent_div_57_Template_a_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r22);
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r21.btnEditProfile());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Cancelar");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DashboardUserComponent_div_57_Template_a_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r22);
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r23.btnGuardarPerfil());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Guardar");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](2, _c3, ctx_r8.disableButton));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](4, _c3, ctx_r8.disableButton));
  }
}
function DashboardUserComponent_ng_template_58_img_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "img", 50);
  }
  if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", ctx_r25.imgPreview, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
  }
}
function DashboardUserComponent_ng_template_58_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r26.user.name.charAt(0), " ");
  }
}
function DashboardUserComponent_ng_template_58_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 39)(1, "h4", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Actualizar foto de perfil");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DashboardUserComponent_ng_template_58_Template_button_click_3_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r28);
      const modal_r24 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](modal_r24.dismiss("Cross click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 42)(5, "div", 43)(6, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, DashboardUserComponent_ng_template_58_img_7_Template, 1, 1, "img", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, DashboardUserComponent_ng_template_58_div_8_Template, 2, 1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "input", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function DashboardUserComponent_ng_template_58_Template_input_change_10_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r28);
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r29.onFileSelected($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 47)(12, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DashboardUserComponent_ng_template_58_Template_button_click_12_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r28);
      const modal_r24 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](modal_r24.close("Save click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "Cancelar");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DashboardUserComponent_ng_template_58_Template_button_click_14_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r28);
      const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r31.btnGuardarPerfil());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "Guardar");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx_r10.disableButtonModal);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r10.imgPreview !== "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r10.imgPreview === "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formControl", ctx_r10.fotoInputControl);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx_r10.disableButtonModal);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx_r10.disableButtonModal);
  }
}
class DashboardUserComponent {
  constructor(_authService, _userService, _changeDetectorRef, _formBuilder, gallery, lightbox, modalService) {
    this._authService = _authService;
    this._userService = _userService;
    this._changeDetectorRef = _changeDetectorRef;
    this._formBuilder = _formBuilder;
    this.gallery = gallery;
    this.lightbox = lightbox;
    this.modalService = modalService;
    this.openDashboard = false;
    this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
    this.user = {};
    this.editProfile = false;
    this.imageBase64 = '';
    this.imgPreview = '';
    this.telefonoInputControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern("[0-9]*")]);
    this.direccionInputControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required);
    this.fotoInputControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('');
    this.disableButton = false;
    this.disableButtonModal = false;
    this.closeResult = '';
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
  }
  ngOnInit() {
    // Subscribe to user changes
    this._userService.user$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this._unsubscribeAll)).subscribe(user => {
      if (user.fotoBase64) {
        this.items = [new ng_gallery__WEBPACK_IMPORTED_MODULE_8__.ImageItem({
          src: user.fotoBase64,
          thumb: user.fotoBase64
        })];
        // this.items = [new ImageItem({ src: this.imagenTemp, thumb: this.imagenTemp })];
        const lightboxRef = this.gallery.ref('lightbox');
        // Add custom gallery config to the lightbox (optional)
        lightboxRef.setConfig({
          imageSize: ng_gallery__WEBPACK_IMPORTED_MODULE_8__.ImageSize.Cover,
          thumbPosition: ng_gallery__WEBPACK_IMPORTED_MODULE_8__.ThumbnailsPosition.Top
        });
        // Load items into the lightbox gallery ref
        lightboxRef.load(this.items);
      }
      this.user = user;
      this.telefonoInputControl.setValue(this.user.telefono);
      this.direccionInputControl.setValue(this.user.direccion);
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
  onFileSelected(event) {
    this.uploadedFiles = event.target.files[0];
    if (this.uploadedFiles.type === 'image/jpeg' || this.uploadedFiles.type === 'image/png' || this.uploadedFiles.type === 'image/jpg') {
      const reader = new FileReader();
      reader.readAsDataURL(this.uploadedFiles);
      reader.onload = () => {
        let dataN = reader.result.toString();
        // let dataD = '';
        // dataD = dataN.replace(/^data:image\/\w+;base64,/,'');
        this.imageBase64 = dataN;
        this.imgPreview = dataN;
      };
    } else {
      this.Toast.fire({
        icon: "error",
        title: 'Debe subir un tipo de imagen valido (JPEG, JPG, PNG).'
      });
      this.fotoInputControl.setValue('');
      this.uploadedFiles = '';
    }
  }
  ToggleDashboard() {
    this.openDashboard = !this.openDashboard;
  }
  btnEditProfile() {
    this.editProfile = !this.editProfile;
    this.telefonoInputControl.setValue(this.user.telefono);
    this.direccionInputControl.setValue(this.user.direccion);
    // Mark for check
    this._changeDetectorRef.markForCheck();
  }
  btnGuardarPerfil() {
    this.fotoInputControl.disable();
    if (this.telefonoInputControl.valid && this.direccionInputControl.valid) {
      this.disableButtonModal = true;
      this.disableButton = true;
      let data = {};
      data.telefono = this.telefonoInputControl.value;
      data.direccion = this.direccionInputControl.value;
      if (this.imageBase64 !== '') {
        data.fotoBase64 = this.imageBase64;
      }
      // console.log(data);
      this.updatePerfil(data);
    } else {
      this.disableButton = false;
      this.disableButtonModal = false;
      this.Toast.fire({
        icon: "error",
        title: 'El campo telefono de contacto y Direccion no pueden ser vacios.'
      });
    }
  }
  updatePerfil(data) {
    this._userService.updateUserById(data, this.user._id).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this._unsubscribeAll)).subscribe(response => {
      this.Toast.fire({
        icon: "success",
        title: 'El perfil ha sido editado con exito.'
      });
      this.user = response;
      this.telefonoInputControl.setValue(this.user.telefono);
      this.direccionInputControl.setValue(this.user.direccion);
      if (this.user.fotoBase64) {
        this.items = [new ng_gallery__WEBPACK_IMPORTED_MODULE_8__.ImageItem({
          src: this.user.fotoBase64,
          thumb: this.user.fotoBase64
        })];
        // this.items = [new ImageItem({ src: this.imagenTemp, thumb: this.imagenTemp })];
        const lightboxRef = this.gallery.ref('lightbox');
        // Add custom gallery config to the lightbox (optional)
        lightboxRef.setConfig({
          imageSize: ng_gallery__WEBPACK_IMPORTED_MODULE_8__.ImageSize.Cover,
          thumbPosition: ng_gallery__WEBPACK_IMPORTED_MODULE_8__.ThumbnailsPosition.Top
        });
        // Load items into the lightbox gallery ref
        lightboxRef.load(this.items);
      }
      this.imageBase64 = '';
      this.fotoInputControl.enable();
      this.modalService.dismissAll();
      this.editProfile = false;
      this.disableButton = false;
      this.disableButtonModal = false;
      // Mark for check
      this._changeDetectorRef.markForCheck();
    }, error => {
      this.disableButton = false;
      this.disableButtonModal = false;
      this.fotoInputControl.enable();
      this.Toast.fire({
        icon: "error",
        title: error.error.message
      });
    });
  }
  open(content) {
    if (this.user.fotoBase64 !== '') {
      this.imgPreview = this.user.fotoBase64;
    } else {
      this.imgPreview = '';
    }
    this.fotoInputControl.setValue('');
    this.imageBase64 = '';
    this.modalService.open(content, {
      ariaLabelledBy: 'modal-basic-title',
      backdrop: 'static',
      keyboard: false,
      scrollable: true
    }).result.then(result => {
      this.closeResult = `Closed with: ${result}`;
    }, reason => {
      this.closeResult = `Dismissed`;
    });
  }
  pruebas() {
    this.disableButton = true;
    console.log("Aqui");
  }
}
DashboardUserComponent.ɵfac = function DashboardUserComponent_Factory(t) {
  return new (t || DashboardUserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_user_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ng_gallery__WEBPACK_IMPORTED_MODULE_8__.Gallery), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ng_gallery_lightbox__WEBPACK_IMPORTED_MODULE_9__.Lightbox), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbModal));
};
DashboardUserComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: DashboardUserComponent,
  selectors: [["app-dashboard-user"]],
  viewQuery: function DashboardUserComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c1, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.ModalContrasenia = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.editNgForm = _t.first);
    }
  },
  decls: 62,
  vars: 17,
  consts: [[1, "dashboard-right"], [1, "dashboard"], [1, "page-title"], [1, "contendedor-perfil-info"], [1, "contenedor-imagen"], [1, "contenedor-perfil-image"], ["class", "image-perfil", "alt", "", 3, "src", "click", 4, "ngIf"], ["class", "no-image-perfil", 4, "ngIf"], [1, "cambiar-foto", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-camera"], [1, "contenedor-saludo"], [1, "nombre-msg"], [1, "contenedor-editar"], ["class", "button-editar", 4, "ngIf"], [1, "contenedor-informacion-perfil"], [1, "row"], [1, "col-sm-6"], [1, "box"], [1, "box-title"], [1, "box-content"], [1, "nombre-contacto"], [4, "ngIf"], ["class", "nombre-contacto", 4, "ngIf"], ["class", "contenedor-boton-guardar", 4, "ngIf"], ["content", ""], [3, "user"], ["modalContrasenia", ""], ["alt", "", 1, "image-perfil", 3, "src", "click"], [1, "no-image-perfil"], [1, "button-editar"], ["href", "javascript:void(0)", 1, "popup-btn", 3, "click"], ["href", "javascript:void(0)", 3, "click"], ["type", "text", "prefix", "(+52) ", "mask", "000-000-0000", "id", "telefono", "placeholder", "Telefono", 1, "form-control", 3, "ngClass", "formControl"], ["class", "error-login-form", 4, "ngIf"], [1, "error-login-form"], ["type", "text", "id", "direccion", "placeholder", "Direccion", 1, "form-control", 3, "ngClass", "formControl"], [1, "contenedor-boton-guardar"], ["href", "javascript:void(0)", "type", "button", 1, "btn", "btn-outline-primary", 3, "ngClass", "click"], ["href", "javascript:void(0)", "type", "button", 1, "btn", "btn-secondary", 3, "ngClass", "click"], [1, "modal-header"], ["id", "modal-basic-title", 1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "btn-close", 3, "disabled", "click"], [1, "modal-body"], [1, "contenedor-modal"], [1, "contenedor-perfil-image-modal"], ["class", "image-perfil", "alt", "", 3, "src", 4, "ngIf"], ["id", "logoTaller", "type", "file", 1, "form-control", 3, "formControl", "change"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-outline-danger", 3, "disabled", "click"], ["type", "button", 1, "btn", "btn-outline-dark", 3, "disabled", "click"], ["alt", "", 1, "image-perfil", 3, "src"]],
  template: function DashboardUserComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Mi Dashboard");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 3)(6, "div", 4)(7, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, DashboardUserComponent_img_8_Template, 1, 1, "img", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, DashboardUserComponent_div_9_Template, 2, 1, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DashboardUserComponent_Template_div_click_10_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r32);
        const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](59);
        return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx.open(_r9));
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "i", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 10)(13, "p", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "Desde tu panel de usuario puedes ver tu actividad, como editar tu perfil y las pulseras que hayas solicitado ademas de las solicitudes y observaciones realizadas sobre cada una de estas.");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](18, DashboardUserComponent_div_18_Template, 3, 0, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "div", 14)(20, "div", 15)(21, "div", 16)(22, "div", 17)(23, "div", 18)(24, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, "Informacion de contacto");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "div", 19)(27, "h6", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "h6");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](30);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](31, DashboardUserComponent_h6_31_Template, 3, 0, "h6", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "div", 16)(33, "div", 17)(34, "div", 18)(35, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](36, "Telefono contacto");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](38, DashboardUserComponent_h6_38_Template, 3, 4, "h6", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](39, DashboardUserComponent_div_39_Template, 4, 6, "div", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "div", 16)(41, "div", 17)(42, "div", 18)(43, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](44, "Direccion");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](46, DashboardUserComponent_h6_46_Template, 3, 1, "h6", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](47, DashboardUserComponent_div_47_Template, 3, 5, "div", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](48, "div", 16)(49, "div", 17)(50, "div", 18)(51, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](52, "Fecha de nacimiento");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](53, "div", 19)(54, "h6", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](55);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](56, "date");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](57, DashboardUserComponent_div_57_Template, 5, 6, "div", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](58, DashboardUserComponent_ng_template_58_Template, 16, 6, "ng-template", null, 24, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](60, "app-modal-contrasenia", 25, 26);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.user.fotoBase64);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.user.fotoBase64);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Hola, ", ctx.user.name, " !");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.editProfile);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.user.name);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.user.email);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.editProfile);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.editProfile);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.editProfile);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.editProfile);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.editProfile);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](56, 14, ctx.user.fecha_nacimiento, "dd/MM/yyyy"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.editProfile);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("user", ctx.user);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlDirective, ngx_mask__WEBPACK_IMPORTED_MODULE_12__.NgxMaskDirective, _modal_contrasenia_modal_contrasenia_component__WEBPACK_IMPORTED_MODULE_3__.ModalContraseniaComponent, _angular_common__WEBPACK_IMPORTED_MODULE_11__.DatePipe, ngx_mask__WEBPACK_IMPORTED_MODULE_12__.NgxMaskPipe],
  styles: [".welcome-msg[_ngcontent-%COMP%]   .nombre-msg[_ngcontent-%COMP%] {\n  text-transform: capitalize;\n}\n\n.nombre-contacto[_ngcontent-%COMP%] {\n  text-transform: capitalize;\n}\n\n.contenedor-perfil-image[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-top: 10px;\n  width: 160px;\n  height: 160px;\n  border-radius: 50%;\n  overflow: hidden;\n  cursor: pointer;\n}\n.contenedor-perfil-image[_ngcontent-%COMP%]   .image-perfil[_ngcontent-%COMP%] {\n  object-fit: cover;\n  width: 100%;\n  height: 100%;\n}\n.contenedor-perfil-image[_ngcontent-%COMP%]   .no-image-perfil[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  background-color: rgb(188, 188, 188);\n  color: rgb(78, 78, 78);\n  font-weight: bold;\n  font-size: 70px;\n}\n\n.cambiar-foto[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  margin-top: -40px;\n  background-color: rgba(47, 47, 47, 0.837);\n  font-size: 20px;\n  color: white;\n  overflow: hidden;\n  padding: 0px 10px 3px 10px;\n  cursor: pointer;\n}\n\n.editar-perfil[_ngcontent-%COMP%] {\n  color: var(--theme-default);\n  float: right;\n  font-size: 16px;\n}\n\n.error-login-form[_ngcontent-%COMP%] {\n  color: red;\n}\n\n.boton-guardar[_ngcontent-%COMP%] {\n  margin-top: 40px;\n}\n\n.input-foto-perfil[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n\n.contendedor-perfil-info[_ngcontent-%COMP%] {\n  margin: auto;\n  padding: 40px 0;\n  display: grid;\n  grid-template-columns: 1fr;\n}\n.contendedor-perfil-info[_ngcontent-%COMP%]   .contenedor-imagen[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  height: 100%;\n  text-align: center;\n}\n.contendedor-perfil-info[_ngcontent-%COMP%]   .contenedor-saludo[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  text-align: justify;\n}\n.contendedor-perfil-info[_ngcontent-%COMP%]   .contenedor-editar[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  text-align: end;\n  margin-top: 20px;\n}\n.contendedor-perfil-info[_ngcontent-%COMP%]   .contenedor-editar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  cursor: pointer;\n  padding: 10px;\n  background-color: var(--theme-deafult);\n  color: white;\n  text-decoration: none;\n}\n.contendedor-perfil-info[_ngcontent-%COMP%]   .contenedor-editar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: var(--theme-gradient2);\n}\n.contendedor-perfil-info[_ngcontent-%COMP%]   .contenedor-boton-guardar[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  gap: 2rem;\n  margin-top: 40px;\n}\n.contendedor-perfil-info[_ngcontent-%COMP%]   .contenedor-informacion-perfil[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n.contendedor-perfil-info[_ngcontent-%COMP%]   .contenedor-informacion-perfil[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%] {\n  background-color: var(--theme-deafult);\n}\n.contendedor-perfil-info[_ngcontent-%COMP%]   .contenedor-informacion-perfil[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: white;\n}\n.contendedor-perfil-info[_ngcontent-%COMP%]   .contenedor-informacion-perfil[_ngcontent-%COMP%]   .box-content[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  padding-left: 20px;\n}\n\n.contenedor-modal[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  height: 100%;\n  text-align: center;\n}\n.contenedor-modal[_ngcontent-%COMP%]   .contenedor-perfil-image-modal[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-top: 10px;\n  width: 200px;\n  height: 200px;\n  border-radius: 50%;\n  overflow: hidden;\n  cursor: pointer;\n}\n.contenedor-modal[_ngcontent-%COMP%]   .contenedor-perfil-image-modal[_ngcontent-%COMP%]   .image-perfil[_ngcontent-%COMP%] {\n  object-fit: cover;\n  width: 100%;\n  height: 100%;\n}\n.contenedor-modal[_ngcontent-%COMP%]   .contenedor-perfil-image-modal[_ngcontent-%COMP%]   .no-image-perfil[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  background-color: rgb(188, 188, 188);\n  color: rgb(78, 78, 78);\n  font-weight: bold;\n  font-size: 70px;\n}\n.contenedor-modal[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 80%;\n}\n\n.error-form-invalid[_ngcontent-%COMP%] {\n  border: solid 1px red;\n}\n\n.disable-link[_ngcontent-%COMP%] {\n  pointer-events: none;\n  color: gray;\n  border: solid 2px gray !important;\n  background-color: white !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdXNlci9kYXNoYm9hcmQvZGFzaGJvYXJkLXVzZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSwwQkFBQTtBQUFSOztBQUlBO0VBQ0ksMEJBQUE7QUFESjs7QUFJQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQURKO0FBR0k7RUFDSSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBRFI7QUFJSTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLG9DQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFGUjs7QUFNQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLHlDQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0VBQ0EsZUFBQTtBQUhKOztBQU1BO0VBQ0ksMkJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQUhKOztBQU1BO0VBQ0ksVUFBQTtBQUhKOztBQU1BO0VBQ0ksZ0JBQUE7QUFISjs7QUFNQTtFQUNJLGdCQUFBO0FBSEo7O0FBTUE7RUFDSSxZQUFBO0VBQ0gsZUFBQTtFQUVBLGFBQUE7RUFDRywwQkFBQTtBQUpKO0FBTUk7RUFDSSxhQUFBO0VBQ04sbUJBQUE7RUFDQSx1QkFBQTtFQUNNLHNCQUFBO0VBQ0EsWUFBQTtFQUNOLGtCQUFBO0FBSkY7QUFPSTtFQUNJLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNOLG1CQUFBO0FBTEY7QUFRSTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNOLGVBQUE7RUFDTSxnQkFBQTtBQU5SO0FBT1E7RUFDSSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHNDQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0FBTFo7QUFRUTtFQUNJLDZCQUFBO0FBTlo7QUFVSTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0FBUlI7QUFXSTtFQUNJLGdCQUFBO0FBVFI7QUFVUTtFQUNJLHNDQUFBO0FBUlo7QUFVWTtFQUNJLFlBQUE7QUFSaEI7QUFhWTtFQUNJLGtCQUFBO0FBWGhCOztBQWlCQTtFQUNJLGFBQUE7RUFDSCxtQkFBQTtFQUNBLHVCQUFBO0VBQ0csc0JBQUE7RUFDQSxZQUFBO0VBQ0gsa0JBQUE7QUFkRDtBQWdCSTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQWRSO0FBZ0JRO0VBQ0ksaUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQWRaO0FBaUJRO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esb0NBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQWZaO0FBbUJJO0VBQ0ksVUFBQTtBQWpCUjs7QUFxQkE7RUFDSSxxQkFBQTtBQWxCSjs7QUFxQkE7RUFDSSxvQkFBQTtFQUNBLFdBQUE7RUFDQSxpQ0FBQTtFQUNBLGtDQUFBO0FBbEJKIiwic291cmNlc0NvbnRlbnQiOlsiLndlbGNvbWUtbXNne1xyXG4gICAgLm5vbWJyZS1tc2d7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5ub21icmUtY29udGFjdG97XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxufVxyXG5cclxuLmNvbnRlbmVkb3ItcGVyZmlsLWltYWdle1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgd2lkdGg6IDE2MHB4O1xyXG4gICAgaGVpZ2h0OiAxNjBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgLmltYWdlLXBlcmZpbHtcclxuICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB9XHJcblxyXG4gICAgLm5vLWltYWdlLXBlcmZpbHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE4OCwgMTg4LCAxODgpO1xyXG4gICAgICAgIGNvbG9yOiByZ2IoNzgsIDc4LCA3OCk7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgZm9udC1zaXplOiA3MHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4uY2FtYmlhci1mb3Rve1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIG1hcmdpbi10b3A6IC00MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg0NywgNDcsIDQ3LCAwLjgzNyk7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgcGFkZGluZzogMHB4IDEwcHggM3B4IDEwcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5lZGl0YXItcGVyZmlse1xyXG4gICAgY29sb3I6IHZhcigtLXRoZW1lLWRlZmF1bHQpO1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcblxyXG4uZXJyb3ItbG9naW4tZm9ybXtcclxuICAgIGNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbi5ib3Rvbi1ndWFyZGFye1xyXG4gICAgbWFyZ2luLXRvcDogNDBweDtcclxufVxyXG5cclxuLmlucHV0LWZvdG8tcGVyZmlse1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuLmNvbnRlbmRlZG9yLXBlcmZpbC1pbmZve1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG5cdHBhZGRpbmc6IDQwcHggMDtcclxuXHJcblx0ZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG5cclxuICAgIC5jb250ZW5lZG9yLWltYWdlbntcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC5jb250ZW5lZG9yLXNhbHVkb3tcclxuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcblx0XHR0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gICAgfVxyXG5cclxuICAgIC5jb250ZW5lZG9yLWVkaXRhcntcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0XHR0ZXh0LWFsaWduOiBlbmQ7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgICBhe1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRoZW1lLWRlYWZ1bHQpO1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGE6aG92ZXJ7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10aGVtZS1ncmFkaWVudDIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuY29udGVuZWRvci1ib3Rvbi1ndWFyZGFye1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgICAgIGdhcDogMnJlbTtcclxuICAgICAgICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5jb250ZW5lZG9yLWluZm9ybWFjaW9uLXBlcmZpbHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICAgIC5ib3gtdGl0bGV7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRoZW1lLWRlYWZ1bHQpO1xyXG5cclxuICAgICAgICAgICAgaDN7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLmJveC1jb250ZW50e1xyXG4gICAgICAgICAgICBoNntcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLmNvbnRlbmVkb3ItbW9kYWx7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICAuY29udGVuZWRvci1wZXJmaWwtaW1hZ2UtbW9kYWx7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgXHJcbiAgICAgICAgLmltYWdlLXBlcmZpbHtcclxuICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgLm5vLWltYWdlLXBlcmZpbHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxODgsIDE4OCwgMTg4KTtcclxuICAgICAgICAgICAgY29sb3I6IHJnYig3OCwgNzgsIDc4KTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNzBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaW5wdXR7XHJcbiAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgIH1cclxufVxyXG5cclxuLmVycm9yLWZvcm0taW52YWxpZHtcclxuICAgIGJvcmRlcjogc29saWQgMXB4IHJlZDtcclxufVxyXG5cclxuLmRpc2FibGUtbGlua3tcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgY29sb3I6IGdyYXk7XHJcbiAgICBib3JkZXI6IHNvbGlkIDJweCBncmF5ICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ }),

/***/ 35504:
/*!*********************************************************************************!*\
  !*** ./src/app/user/dashboard/modal-contrasenia/modal-contrasenia.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ModalContraseniaComponent: () => (/* binding */ ModalContraseniaComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 72513);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 20274);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ 27889);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 76101);
/* harmony import */ var src_app_core_user_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/user/user.service */ 58212);











const _c0 = ["modalContrasenia"];
const _c1 = ["passwordNgForm"];
function ModalContraseniaComponent_ng_template_0_i_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 28);
  }
}
function ModalContraseniaComponent_ng_template_0_i_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 29);
  }
}
function ModalContraseniaComponent_ng_template_0_div_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " La contrase\u00F1a es requerida ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ModalContraseniaComponent_ng_template_0_div_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " La contrase\u00F1a actual no cuenta con la longitud minima(8). ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ModalContraseniaComponent_ng_template_0_i_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 28);
  }
}
function ModalContraseniaComponent_ng_template_0_i_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 29);
  }
}
function ModalContraseniaComponent_ng_template_0_div_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " La contrase\u00F1a es requerida ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ModalContraseniaComponent_ng_template_0_div_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " La contrase\u00F1a no cuenta con la longitud minima(8). ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ModalContraseniaComponent_ng_template_0_div_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " La contrase\u00F1a debe contener al menos 1 numero. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ModalContraseniaComponent_ng_template_0_div_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " La contrase\u00F1a debe contener al menos 1 letra mayuscula. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ModalContraseniaComponent_ng_template_0_div_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " La contrase\u00F1a debe contener al menos 1 letra minuscula. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ModalContraseniaComponent_ng_template_0_div_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " La contrase\u00F1a debe contener al menos 1 caracter especial. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ModalContraseniaComponent_ng_template_0_button_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ModalContraseniaComponent_ng_template_0_button_39_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r21);
      const modal_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](modal_r2.dismiss("Cross click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Cerrar");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ModalContraseniaComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 2)(1, "div", 3)(2, "h5", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Cambiar contrase\u00F1a");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ModalContraseniaComponent_ng_template_0_Template_button_click_4_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r23);
      const modal_r2 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](modal_r2.dismiss("Cross click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 6)(6, "div", 6)(7, "form", 7, 8)(9, "div", 9)(10, "div", 10)(11, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Contrase\u00F1a actual");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "input", 13, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ModalContraseniaComponent_ng_template_0_Template_span_click_16_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r23);
      const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](15);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](_r4.type === "password" ? _r4.type = "text" : _r4.type = "password");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, ModalContraseniaComponent_ng_template_0_i_17_Template, 1, 0, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, ModalContraseniaComponent_ng_template_0_i_18_Template, 1, 0, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, ModalContraseniaComponent_ng_template_0_div_20_Template, 2, 0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](21, ModalContraseniaComponent_ng_template_0_div_21_Template, 2, 0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 20)(23, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Nueva Contrase\u00F1a");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](26, "input", 22, 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ModalContraseniaComponent_ng_template_0_Template_span_click_28_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r23);
      const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](27);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](_r9.type === "password" ? _r9.type = "text" : _r9.type = "password");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](29, ModalContraseniaComponent_ng_template_0_i_29_Template, 1, 0, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](30, ModalContraseniaComponent_ng_template_0_i_30_Template, 1, 0, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](32, ModalContraseniaComponent_ng_template_0_div_32_Template, 2, 0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](33, ModalContraseniaComponent_ng_template_0_div_33_Template, 2, 0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](34, ModalContraseniaComponent_ng_template_0_div_34_Template, 2, 0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](35, ModalContraseniaComponent_ng_template_0_div_35_Template, 2, 0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](36, ModalContraseniaComponent_ng_template_0_div_36_Template, 2, 0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](37, ModalContraseniaComponent_ng_template_0_div_37_Template, 2, 0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](39, ModalContraseniaComponent_ng_template_0_button_39_Template, 2, 0, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ModalContraseniaComponent_ng_template_0_Template_button_click_40_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r23);
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r26.submit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, "Cambiar contrase\u00F1a");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](15);
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](27);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r1.passwordForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControlName", "oldpassword");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r4.type === "password");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r4.type === "text");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.passwordForm.get("oldpassword").hasError("required") && ctx_r1.passwordForm.get("oldpassword").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.passwordForm.get("oldpassword").hasError("minlength"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControlName", "newPassword");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r9.type === "password");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r9.type === "text");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.passwordForm.get("newPassword").hasError("required") && ctx_r1.passwordForm.get("newPassword").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.passwordForm.get("newPassword").hasError("minlength"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.passwordForm.get("newPassword").hasError("hasNumber"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.passwordForm.get("newPassword").hasError("hasCapitalCase"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.passwordForm.get("newPassword").hasError("hasSmallCase"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.passwordForm.get("newPassword").hasError("hasSpecialCharacters"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r1.disableButtons);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r1.disableButtons);
  }
}
class ModalContraseniaComponent {
  constructor(platformId, router, modalService, _formBuilder, _userService, _changeDetectorRef) {
    this.platformId = platformId;
    this.router = router;
    this.modalService = modalService;
    this._formBuilder = _formBuilder;
    this._userService = _userService;
    this._changeDetectorRef = _changeDetectorRef;
    this.modalOpen = false;
    this.disableButtons = false;
    this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
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
    this.passwordForm = this._formBuilder.group({
      oldpassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(8)])],
      newPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, ModalContraseniaComponent.patternValidator(/\d/, {
        hasNumber: true
      }), ModalContraseniaComponent.patternValidator(/[A-Z]/, {
        hasCapitalCase: true
      }), ModalContraseniaComponent.patternValidator(/[a-z]/, {
        hasSmallCase: true
      }), ModalContraseniaComponent.patternValidator(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/, {
        hasSpecialCharacters: true
      }), _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(8)])]
    });
  }
  openModal() {
    this.disableButtons = false;
    this.passwordForm.reset();
    this.passwordForm.enable();
    this.modalOpen = true;
    if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_5__.isPlatformBrowser)(this.platformId)) {
      // For SSR 
      this.modalService.open(this.ModalContrasenia, {
        size: 'md',
        ariaLabelledBy: 'modal-basic-title',
        centered: true,
        keyboard: false,
        backdrop: 'static',
        windowClass: 'ModalContrasenia'
      }).result.then(result => {
        `Result ${result}`;
      }, reason => {
        this.closeResult = `Dismissed`;
      });
    }
  }
  getDismissReason(reason) {}
  ngOnDestroy() {
    if (this.modalOpen) {
      this.modalService.dismissAll();
    }
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next(null);
    this._unsubscribeAll.complete();
  }
  submit() {
    if (this.passwordForm.valid) {
      this.disableButtons = true;
      this.cambiarContraseña();
    } else {
      this.Toast.fire({
        icon: "error",
        title: 'Debes completar los campos antes de cambiar la contraseña'
      });
    }
    // Mark for check
    this._changeDetectorRef.markForCheck();
  }
  cambiarContraseña() {
    if (this.passwordForm.invalid) {
      return;
    }
    // Disable the form
    this.passwordForm.disable();
    let data = this.passwordForm.getRawValue();
    this._userService.updatePasswordById(data).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this._unsubscribeAll)).subscribe(response => {
      this.Toast.fire({
        icon: "success",
        title: 'La contraseña ha sido actualizada con exito.'
      });
      this.disableButtons = false;
      // enable the form
      this.passwordForm.enable();
      this.modalService.dismissAll();
      // Mark for check
      this._changeDetectorRef.markForCheck();
    }, error => {
      this.Toast.fire({
        icon: "error",
        title: error.error.message
      });
      this.disableButtons = false;
      // enable the form
      this.passwordForm.enable();
      // Mark for check
      this._changeDetectorRef.markForCheck();
    });
  }
}
ModalContraseniaComponent.ɵfac = function ModalContraseniaComponent_Factory(t) {
  return new (t || ModalContraseniaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_user_user_service__WEBPACK_IMPORTED_MODULE_1__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef));
};
ModalContraseniaComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: ModalContraseniaComponent,
  selectors: [["app-modal-contrasenia"]],
  viewQuery: function ModalContraseniaComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c1, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.ModalContrasenia = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.passwordNgForm = _t.first);
    }
  },
  inputs: {
    user: "user"
  },
  decls: 2,
  vars: 0,
  consts: [["class", "theme-modal"], ["modalContrasenia", ""], [1, "modal-content", "quick-view-modal"], [1, "modal-header"], ["id", "modalSolicitarManillaTitulo", 1, "modal-title", "f-w-600"], ["type", "button", "aria-label", "Close", 1, "btn-close", 3, "click"], [1, "modal-body"], ["novalidate", "", 1, "password-form-theme", "needs-validation", 3, "formGroup"], ["passwordNgForm", "ngForm"], [1, "row"], [1, "col-md-12", "mb-4"], ["for", "password"], [1, "input-group"], ["type", "password", "id", "password", "placeholder", "Ingresa tu contrase\u00F1a actual", "autocomplete", "on", "aria-label", "password", "aria-describedby", "basic-addon1", 1, "form-control", 3, "formControlName"], ["passwordCurrent", ""], ["id", "basic-addon1", 1, "input-group-text", 3, "click"], ["class", "fa fa-eye", "aria-hidden", "true", 4, "ngIf"], ["class", "fa fa-eye-slash", "aria-hidden", "true", 4, "ngIf"], [1, "border-bottom-login-form"], ["class", "error-password-form", 4, "ngIf"], [1, "col-md-12"], ["for", "newPass"], ["type", "password", "id", "newPass", "placeholder", "Ingresa tu nueva contrase\u00F1a", "autocomplete", "on", "aria-label", "password", "aria-describedby", "basic-addon2", 1, "form-control", 3, "formControlName"], ["newPass", ""], ["id", "basic-addon2", 1, "input-group-text", 3, "click"], [1, "modal-footer"], ["class", "btn btn-outline-danger", "type", "button", "data-dismiss", "modal", 3, "click", 4, "ngIf"], ["type", "submit", 1, "btn", "btn-solid", "float-end", 3, "disabled", "click"], ["aria-hidden", "true", 1, "fa", "fa-eye"], ["aria-hidden", "true", 1, "fa", "fa-eye-slash"], [1, "error-password-form"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-outline-danger", 3, "click"]],
  template: function ModalContraseniaComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, ModalContraseniaComponent_ng_template_0_Template, 42, 17, "ng-template", 0, 1, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName],
  styles: [".error-password-form[_ngcontent-%COMP%] {\n  color: red;\n  margin-top: 5px;\n  font-size: 12px;\n}\n\n.password-form-theme[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-weight: bolder;\n  margin-bottom: 10px;\n}\n.password-form-theme[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.password-form-theme[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  padding: 11px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdXNlci9kYXNoYm9hcmQvbW9kYWwtY29udHJhc2VuaWEvbW9kYWwtY29udHJhc2VuaWEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUFDSjs7QUFHSTtFQUNJLG1CQUFBO0VBQ0EsbUJBQUE7QUFBUjtBQUdJO0VBQ0ksZUFBQTtBQURSO0FBUUk7RUFDSSxhQUFBO0FBTlIiLCJzb3VyY2VzQ29udGVudCI6WyIuZXJyb3ItcGFzc3dvcmQtZm9ybXtcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbi5wYXNzd29yZC1mb3JtLXRoZW1le1xyXG4gICAgbGFiZWx7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBzcGFue1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAvLyAuYm9yZGVyLWJvdHRvbS1sb2dpbi1mb3Jte1xyXG4gICAgLy8gICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgc2VsZWN0e1xyXG4gICAgICAgIHBhZGRpbmc6IDExcHg7XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});


/***/ }),

/***/ 82939:
/*!**************************************************************************!*\
  !*** ./src/app/user/manillas/editar-manilla/editar-manilla.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EditarManillaComponent: () => (/* binding */ EditarManillaComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 72513);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 20274);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ 27889);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 76101);
/* harmony import */ var src_app_core_user_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/user/user.service */ 58212);
/* harmony import */ var ng_gallery__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-gallery */ 60977);
/* harmony import */ var ng_gallery_lightbox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-gallery/lightbox */ 23050);
/* harmony import */ var ngx_autosize__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-autosize */ 8099);
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-mask */ 97728);















const _c0 = ["modalEditarManilla"];
const _c1 = ["manillaNgForm"];
function EditarManillaComponent_ng_template_0_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EditarManillaComponent_ng_template_0_button_4_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12);
      const modal_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](modal_r2.dismiss("Cross click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function EditarManillaComponent_ng_template_0_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 19)(1, "div", 20)(2, "div", 21)(3, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
}
function EditarManillaComponent_ng_template_0_ng_container_18_ng_container_1_div_1_strong_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function EditarManillaComponent_ng_template_0_ng_container_18_ng_container_1_div_1_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function EditarManillaComponent_ng_template_0_ng_container_18_ng_container_1_div_1_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const i_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).index;
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" El campo: ", ctx_r28.fieldsList[i_r15].description, " es requerido ");
  }
}
function EditarManillaComponent_ng_template_0_ng_container_18_ng_container_1_div_1_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Ingresa un correo electronico valido ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
const _c2 = function (a0) {
  return {
    "error-valid-input": a0
  };
};
function EditarManillaComponent_ng_template_0_ng_container_18_ng_container_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 25)(1, "label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, EditarManillaComponent_ng_template_0_ng_container_18_ng_container_1_div_1_strong_3_Template, 2, 0, "strong", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, EditarManillaComponent_ng_template_0_ng_container_18_ng_container_1_div_1_span_5_Template, 2, 0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, EditarManillaComponent_ng_template_0_ng_container_18_ng_container_1_div_1_div_7_Template, 2, 1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, EditarManillaComponent_ng_template_0_ng_container_18_ng_container_1_div_1_div_8_Template, 2, 0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const i_r15 = ctx_r31.index;
    const field_r14 = ctx_r31.$implicit;
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("for", ctx_r18.fieldsList[i_r15].name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx_r18.fieldsList[i_r15].description, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r18.fieldsList[i_r15].required);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r18.fieldsList[i_r15].private);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](10, _c2, field_r14.get(ctx_r18.fieldsList[i_r15].name).invalid && field_r14.get(ctx_r18.fieldsList[i_r15].name).touched || field_r14.get(ctx_r18.fieldsList[i_r15].name).hasError("email")))("formControl", field_r14.get(ctx_r18.fieldsList[i_r15].name))("id", ctx_r18.fieldsList[i_r15].name)("placeholder", ctx_r18.fieldsList[i_r15].description);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", field_r14.get(ctx_r18.fieldsList[i_r15].name).hasError("required") && field_r14.get(ctx_r18.fieldsList[i_r15].name).touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", field_r14.get(ctx_r18.fieldsList[i_r15].name).hasError("email") && !field_r14.get(ctx_r18.fieldsList[i_r15].name).hasError("required"));
  }
}
function EditarManillaComponent_ng_template_0_ng_container_18_ng_container_1_div_2_strong_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function EditarManillaComponent_ng_template_0_ng_container_18_ng_container_1_div_2_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function EditarManillaComponent_ng_template_0_ng_container_18_ng_container_1_div_2_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const i_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).index;
    const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" El campo: ", ctx_r34.fieldsList[i_r15].description, " es requerido ");
  }
}
function EditarManillaComponent_ng_template_0_ng_container_18_ng_container_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 25)(1, "label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, EditarManillaComponent_ng_template_0_ng_container_18_ng_container_1_div_2_strong_3_Template, 2, 0, "strong", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, EditarManillaComponent_ng_template_0_ng_container_18_ng_container_1_div_2_span_5_Template, 2, 0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, EditarManillaComponent_ng_template_0_ng_container_18_ng_container_1_div_2_div_7_Template, 2, 1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const i_r15 = ctx_r36.index;
    const field_r14 = ctx_r36.$implicit;
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("for", ctx_r19.fieldsList[i_r15].name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx_r19.fieldsList[i_r15].description, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r19.fieldsList[i_r15].required);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r19.fieldsList[i_r15].private);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](9, _c2, field_r14.get(ctx_r19.fieldsList[i_r15].name).invalid && field_r14.get(ctx_r19.fieldsList[i_r15].name).touched))("formControl", field_r14.get(ctx_r19.fieldsList[i_r15].name))("id", ctx_r19.fieldsList[i_r15].name)("placeholder", ctx_r19.fieldsList[i_r15].description);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", field_r14.get(ctx_r19.fieldsList[i_r15].name).hasError("required") && field_r14.get(ctx_r19.fieldsList[i_r15].name).touched);
  }
}
function EditarManillaComponent_ng_template_0_ng_container_18_ng_container_1_div_3_strong_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function EditarManillaComponent_ng_template_0_ng_container_18_ng_container_1_div_3_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function EditarManillaComponent_ng_template_0_ng_container_18_ng_container_1_div_3_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const i_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).index;
    const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" El campo: ", ctx_r39.fieldsList[i_r15].description, " es requerido ");
  }
}
function EditarManillaComponent_ng_template_0_ng_container_18_ng_container_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 25)(1, "label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, EditarManillaComponent_ng_template_0_ng_container_18_ng_container_1_div_3_strong_3_Template, 2, 0, "strong", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, EditarManillaComponent_ng_template_0_ng_container_18_ng_container_1_div_3_span_5_Template, 2, 0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, EditarManillaComponent_ng_template_0_ng_container_18_ng_container_1_div_3_div_7_Template, 2, 1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const i_r15 = ctx_r41.index;
    const field_r14 = ctx_r41.$implicit;
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("for", ctx_r20.fieldsList[i_r15].name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx_r20.fieldsList[i_r15].description, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r20.fieldsList[i_r15].required);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r20.fieldsList[i_r15].private);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](9, _c2, field_r14.get(ctx_r20.fieldsList[i_r15].name).invalid && field_r14.get(ctx_r20.fieldsList[i_r15].name).touched))("formControl", field_r14.get(ctx_r20.fieldsList[i_r15].name))("id", ctx_r20.fieldsList[i_r15].name)("placeholder", ctx_r20.fieldsList[i_r15].description);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", field_r14.get(ctx_r20.fieldsList[i_r15].name).hasError("required") && field_r14.get(ctx_r20.fieldsList[i_r15].name).touched);
  }
}
function EditarManillaComponent_ng_template_0_ng_container_18_ng_container_1_div_4_strong_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function EditarManillaComponent_ng_template_0_ng_container_18_ng_container_1_div_4_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function EditarManillaComponent_ng_template_0_ng_container_18_ng_container_1_div_4_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const i_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).index;
    const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" El campo: ", ctx_r45.fieldsList[i_r15].description, " es requerido ");
  }
}
const _c3 = function (a0, a1, a2) {
  return {
    year: a0,
    month: a1,
    day: a2
  };
};
function EditarManillaComponent_ng_template_0_ng_container_18_ng_container_1_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 25)(1, "label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, EditarManillaComponent_ng_template_0_ng_container_18_ng_container_1_div_4_strong_3_Template, 2, 0, "strong", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, EditarManillaComponent_ng_template_0_ng_container_18_ng_container_1_div_4_span_5_Template, 2, 0, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "input", 35, 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EditarManillaComponent_ng_template_0_ng_container_18_ng_container_1_div_4_Template_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r48);
      const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](7);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](_r44.toggle());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, EditarManillaComponent_ng_template_0_ng_container_18_ng_container_1_div_4_div_10_Template, 2, 1, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const i_r15 = ctx_r49.index;
    const field_r14 = ctx_r49.$implicit;
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("for", ctx_r21.fieldsList[i_r15].name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx_r21.fieldsList[i_r15].description, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r21.fieldsList[i_r15].required);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r21.fieldsList[i_r15].private);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](9, _c2, field_r14.get(ctx_r21.fieldsList[i_r15].name).invalid && field_r14.get(ctx_r21.fieldsList[i_r15].name).touched))("id", ctx_r21.fieldsList[i_r15].name)("formControl", field_r14.get(ctx_r21.fieldsList[i_r15].name))("maxDate", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction3"](11, _c3, ctx_r21.maxDate.year, ctx_r21.maxDate.month, ctx_r21.maxDate.day));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", field_r14.get(ctx_r21.fieldsList[i_r15].name).hasError("required") && field_r14.get(ctx_r21.fieldsList[i_r15].name).touched);
  }
}
function EditarManillaComponent_ng_template_0_ng_container_18_ng_container_1_div_5_strong_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function EditarManillaComponent_ng_template_0_ng_container_18_ng_container_1_div_5_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function EditarManillaComponent_ng_template_0_ng_container_18_ng_container_1_div_5_option_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const opt_r54 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", opt_r54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](opt_r54);
  }
}
function EditarManillaComponent_ng_template_0_ng_container_18_ng_container_1_div_5_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " El campo: Tipo es requerido ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function EditarManillaComponent_ng_template_0_ng_container_18_ng_container_1_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 25)(1, "label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, EditarManillaComponent_ng_template_0_ng_container_18_ng_container_1_div_5_strong_3_Template, 2, 0, "strong", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, EditarManillaComponent_ng_template_0_ng_container_18_ng_container_1_div_5_span_5_Template, 2, 0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "select", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, EditarManillaComponent_ng_template_0_ng_container_18_ng_container_1_div_5_option_8_Template, 2, 2, "option", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, EditarManillaComponent_ng_template_0_ng_container_18_ng_container_1_div_5_div_9_Template, 2, 0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const i_r15 = ctx_r55.index;
    const field_r14 = ctx_r55.$implicit;
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("for", ctx_r22.fieldsList[i_r15].name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx_r22.fieldsList[i_r15].description, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r22.fieldsList[i_r15].required);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r22.fieldsList[i_r15].private);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](8, _c2, field_r14.get(ctx_r22.fieldsList[i_r15].name).invalid && field_r14.get(ctx_r22.fieldsList[i_r15].name).touched))("formControl", field_r14.get(ctx_r22.fieldsList[i_r15].name));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r22.fieldsList[i_r15].opciones);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", field_r14.get(ctx_r22.fieldsList[i_r15].name).hasError("required") && field_r14.get(ctx_r22.fieldsList[i_r15].name).touched);
  }
}
function EditarManillaComponent_ng_template_0_ng_container_18_ng_container_1_div_6_strong_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function EditarManillaComponent_ng_template_0_ng_container_18_ng_container_1_div_6_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function EditarManillaComponent_ng_template_0_ng_container_18_ng_container_1_div_6_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const i_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).index;
    const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" El campo: ", ctx_r58.fieldsList[i_r15].description, " es requerido ");
  }
}
function EditarManillaComponent_ng_template_0_ng_container_18_ng_container_1_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 25)(1, "label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, EditarManillaComponent_ng_template_0_ng_container_18_ng_container_1_div_6_strong_3_Template, 2, 0, "strong", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, EditarManillaComponent_ng_template_0_ng_container_18_ng_container_1_div_6_span_5_Template, 2, 0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "textarea", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, EditarManillaComponent_ng_template_0_ng_container_18_ng_container_1_div_6_div_7_Template, 2, 1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const i_r15 = ctx_r60.index;
    const field_r14 = ctx_r60.$implicit;
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("for", ctx_r23.fieldsList[i_r15].name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx_r23.fieldsList[i_r15].description, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r23.fieldsList[i_r15].required);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r23.fieldsList[i_r15].private);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](10, _c2, field_r14.get(ctx_r23.fieldsList[i_r15].name).invalid && field_r14.get(ctx_r23.fieldsList[i_r15].name).touched))("autosize", true)("formControl", field_r14.get(ctx_r23.fieldsList[i_r15].name))("id", ctx_r23.fieldsList[i_r15].name)("placeholder", ctx_r23.fieldsList[i_r15].description);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", field_r14.get(ctx_r23.fieldsList[i_r15].name).hasError("required") && field_r14.get(ctx_r23.fieldsList[i_r15].name).touched);
  }
}
function EditarManillaComponent_ng_template_0_ng_container_18_ng_container_1_div_7_strong_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function EditarManillaComponent_ng_template_0_ng_container_18_ng_container_1_div_7_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function EditarManillaComponent_ng_template_0_ng_container_18_ng_container_1_div_7_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const i_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).index;
    const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" El campo: ", ctx_r63.fieldsList[i_r15].description, " es requerido ");
  }
}
function EditarManillaComponent_ng_template_0_ng_container_18_ng_container_1_div_7_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const i_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).index;
    const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" Ingrese un ", ctx_r64.fieldsList[i_r15].description, " valido ");
  }
}
function EditarManillaComponent_ng_template_0_ng_container_18_ng_container_1_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 25)(1, "label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, EditarManillaComponent_ng_template_0_ng_container_18_ng_container_1_div_7_strong_3_Template, 2, 0, "strong", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, EditarManillaComponent_ng_template_0_ng_container_18_ng_container_1_div_7_span_5_Template, 2, 0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "input", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, EditarManillaComponent_ng_template_0_ng_container_18_ng_container_1_div_7_div_7_Template, 2, 1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, EditarManillaComponent_ng_template_0_ng_container_18_ng_container_1_div_7_div_8_Template, 2, 1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const i_r15 = ctx_r67.index;
    const field_r14 = ctx_r67.$implicit;
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("for", ctx_r24.fieldsList[i_r15].name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx_r24.fieldsList[i_r15].description, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r24.fieldsList[i_r15].required);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r24.fieldsList[i_r15].private);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](10, _c2, field_r14.get(ctx_r24.fieldsList[i_r15].name).invalid && field_r14.get(ctx_r24.fieldsList[i_r15].name).touched))("formControl", field_r14.get(ctx_r24.fieldsList[i_r15].name))("id", ctx_r24.fieldsList[i_r15].name)("placeholder", ctx_r24.fieldsList[i_r15].description);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", field_r14.get(ctx_r24.fieldsList[i_r15].name).hasError("required") && field_r14.get(ctx_r24.fieldsList[i_r15].name).touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !field_r14.get(ctx_r24.fieldsList[i_r15].name).hasError("required") && field_r14.get(ctx_r24.fieldsList[i_r15].name).invalid);
  }
}
function EditarManillaComponent_ng_template_0_ng_container_18_ng_container_1_div_8_strong_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function EditarManillaComponent_ng_template_0_ng_container_18_ng_container_1_div_8_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function EditarManillaComponent_ng_template_0_ng_container_18_ng_container_1_div_8_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const i_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).index;
    const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" El campo: ", ctx_r70.fieldsList[i_r15].description, " es requerido ");
  }
}
function EditarManillaComponent_ng_template_0_ng_container_18_ng_container_1_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r73 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 25)(1, "label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, EditarManillaComponent_ng_template_0_ng_container_18_ng_container_1_div_8_strong_3_Template, 2, 0, "strong", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, EditarManillaComponent_ng_template_0_ng_container_18_ng_container_1_div_8_span_5_Template, 2, 0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "input", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function EditarManillaComponent_ng_template_0_ng_container_18_ng_container_1_div_8_Template_input_change_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r73);
      const i_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().index;
      const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r72.onFileSelected($event, ctx_r72.fieldsList[i_r15].name, i_r15));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, EditarManillaComponent_ng_template_0_ng_container_18_ng_container_1_div_8_div_7_Template, 2, 1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const i_r15 = ctx_r75.index;
    const field_r14 = ctx_r75.$implicit;
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("for", ctx_r25.fieldsList[i_r15].name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx_r25.fieldsList[i_r15].description, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r25.fieldsList[i_r15].required);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r25.fieldsList[i_r15].private);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](9, _c2, field_r14.get(ctx_r25.fieldsList[i_r15].name).invalid && field_r14.get(ctx_r25.fieldsList[i_r15].name).touched))("formControl", field_r14.get(ctx_r25.fieldsList[i_r15].name))("id", ctx_r25.fieldsList[i_r15].name)("placeholder", ctx_r25.fieldsList[i_r15].description);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", field_r14.get(ctx_r25.fieldsList[i_r15].name).hasError("required") && field_r14.get(ctx_r25.fieldsList[i_r15].name).touched);
  }
}
function EditarManillaComponent_ng_template_0_ng_container_18_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, EditarManillaComponent_ng_template_0_ng_container_18_ng_container_1_div_1_Template, 9, 12, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, EditarManillaComponent_ng_template_0_ng_container_18_ng_container_1_div_2_Template, 8, 11, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, EditarManillaComponent_ng_template_0_ng_container_18_ng_container_1_div_3_Template, 8, 11, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, EditarManillaComponent_ng_template_0_ng_container_18_ng_container_1_div_4_Template, 11, 15, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, EditarManillaComponent_ng_template_0_ng_container_18_ng_container_1_div_5_Template, 10, 10, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, EditarManillaComponent_ng_template_0_ng_container_18_ng_container_1_div_6_Template, 8, 12, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, EditarManillaComponent_ng_template_0_ng_container_18_ng_container_1_div_7_Template, 9, 12, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, EditarManillaComponent_ng_template_0_ng_container_18_ng_container_1_div_8_Template, 8, 11, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const i_r15 = ctx.index;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r13.fieldsList[i_r15].type === "email");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r13.fieldsList[i_r15].type === "text");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r13.fieldsList[i_r15].type === "telefono");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r13.fieldsList[i_r15].type === "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r13.fieldsList[i_r15].type === "select");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r13.fieldsList[i_r15].type === "textarea");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r13.fieldsList[i_r15].type === "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r13.fieldsList[i_r15].type === "file");
  }
}
function EditarManillaComponent_ng_template_0_ng_container_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, EditarManillaComponent_ng_template_0_ng_container_18_ng_container_1_Template, 9, 8, "ng-container", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r6.manillaForm.get("camposManilla")["controls"])("ngForTrackBy", ctx_r6.trackByFn);
  }
}
function EditarManillaComponent_ng_template_0_span_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Guardar");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function EditarManillaComponent_ng_template_0_div_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 21)(1, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function EditarManillaComponent_ng_template_0_button_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r78 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EditarManillaComponent_ng_template_0_button_23_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r78);
      const modal_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](modal_r2.dismiss("Cross click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Cerrar");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function EditarManillaComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r80 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 2)(1, "div", 3)(2, "h5", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Editar Pulsera");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, EditarManillaComponent_ng_template_0_button_4_Template, 1, 0, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 6)(6, "form", 7, 8)(8, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, EditarManillaComponent_ng_template_0_div_9_Template, 5, 0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Los campos marcados con * son obligatorios");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Los campos marcados con ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, " es informacion que sera privada y no se compartira con nadie");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, EditarManillaComponent_ng_template_0_ng_container_18_Template, 2, 2, "ng-container", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 14)(20, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EditarManillaComponent_ng_template_0_Template_button_click_20_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r80);
      const ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r79.onSubmit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](21, EditarManillaComponent_ng_template_0_span_21_Template, 2, 0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](22, EditarManillaComponent_ng_template_0_div_22_Template, 3, 0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](23, EditarManillaComponent_ng_template_0_button_23_Template, 2, 0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r1.manillaForm.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r1.manillaForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.loadingFields);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r1.loadingFields);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r1.manillaForm.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.manillaForm.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r1.manillaForm.disabled);
  }
}
class EditarManillaComponent {
  constructor(platformId, router, modalService, _formBuilder, _userService, _changeDetectorRef, gallery, lightbox, viewScroller) {
    this.platformId = platformId;
    this.router = router;
    this.modalService = modalService;
    this._formBuilder = _formBuilder;
    this._userService = _userService;
    this._changeDetectorRef = _changeDetectorRef;
    this.gallery = gallery;
    this.lightbox = lightbox;
    this.viewScroller = viewScroller;
    this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
    this.modalOpen = false;
    //fields
    this.fieldsList = [];
    this.loadingFields = true;
    this.uploadedFiles = {};
    //manilla
    this.manilla = {};
    this.loading = true;
    this.maxDate = {};
    this.filesTemp = {};
    this.disableFields = false;
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
  }
  ngOnInit() {
    this.manillaForm = this._formBuilder.group({
      camposManilla: this._formBuilder.array([])
    });
    this._userService.manillaSelected$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this._unsubscribeAll)).subscribe(manilla => {
      this.loading = true;
      // Update the manilla list
      if (manilla !== null && manilla.vista === 'editar') {
        this.getManillaById(manilla.numid);
      }
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
  /**
   * Track by function for ngFor loops
   *
   * @param index
   * @param item
   */
  trackByFn(index, item) {
    return item.id || index;
  }
  //Funciones modal
  openModal() {
    this.filesTemp = {};
    this.fieldsList = [];
    this.disableFields = false;
    this.modalOpen = true;
    if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_5__.isPlatformBrowser)(this.platformId)) {
      // For SSR 
      this.modalService.open(this.ModalEditarManilla, {
        size: 'lg',
        ariaLabelledBy: 'modal-basic-title',
        centered: true,
        windowClass: 'ModalEditarManilla',
        scrollable: true,
        keyboard: false,
        backdrop: 'static'
      }).result.then(result => {
        `Result ${result}`;
      }, reason => {
        this.getDismissReason();
      });
    }
  }
  getDismissReason() {
    this.fieldsList.forEach((element, index) => {
      this.manillaForm.get("camposManilla").removeAt(0);
    });
    this.fieldsList = [];
  }
  //Funciones manilla api
  getManillaById(id) {
    this._userService.getManillaById(id).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this._unsubscribeAll)).subscribe(response => {
      this.manilla = response;
      this.getFieldsManillaByType(response.tipo);
    }, error => {
      this.Toast.fire({
        icon: 'error',
        title: error.error.message
      });
    });
  }
  getFieldsManillaByType(type) {
    this._userService.getFieldsByUserTypes(type).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this._unsubscribeAll)).subscribe(response => {
      this.fieldsList = response;
      this.fieldsList.forEach((element, index) => {
        this.manillaForm.get("camposManilla").removeAt(0);
      });
      this.addFieldsToFormGroup(response);
      this.loadingFields = false;
    }, error => {
      console.log(error);
    });
  }
  editarManillaById(id) {
    // Do nothing if the form is invalid
    if (this.manillaForm.invalid) {
      return;
    }
    this.disableFields = true;
    // Disable the form
    this.manillaForm.disable();
    let dataManilla = this.orderData();
    dataManilla = this.deleleteFileFields(dataManilla);
    dataManilla = {
      ...dataManilla,
      ...this.uploadedFiles
    };
    this._userService.editarManillaById(id, dataManilla).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this._unsubscribeAll)).subscribe(response => {
      this.Toast.fire({
        icon: 'success',
        title: 'La informacion de la pulsera ha sido editada con exito.'
      });
      this.getManillasListUpdated();
      this.modalService.dismissAll();
    }, error => {
      // Re-enable the form
      this.manillaForm.enable();
      // Set the alert
      // response.error.message.forEach(element => {
      //   this.messageAlert += element + ',';
      // });
      this.Toast.fire({
        icon: 'error',
        title: error.error.message
      });
      this.disableFields = false;
      // this.messageAlert = response.error.message;
      this.viewScroller.scrollToPosition([0, 0]);
      this._changeDetectorRef.markForCheck();
    });
  }
  getManillasListUpdated() {
    this._userService.getUserManillasUpdate().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this._unsubscribeAll)).subscribe(response => {
      this._userService.updateManillasList(response);
    }, error => {
      console.log(error);
    });
  }
  //Funciones form group
  addFieldsToFormGroup(fieldsList) {
    fieldsList.forEach(element => {
      let campos = {};
      if (element.type === 'number' && element.required) {
        campos[element.name] = [this.manilla[element.name], [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern("[0-9]*")]];
      }
      if (element.type === 'number' && !element.required) {
        campos[element.name] = [this.manilla[element.name], [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern("[0-9]*")]];
      }
      if (element.required && element.type !== 'number' && element.type !== 'Date') {
        campos[element.name] = [this.manilla[element.name], [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]];
      }
      if (!element.required && element.type !== 'number' && element.type !== 'Date') {
        campos[element.name] = [this.manilla[element.name]];
      }
      if (element.required && element.type === 'Date') {
        campos[element.name] = [this.orderDate(element.name), [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]];
      }
      if (!element.required && element.type === 'Date') {
        campos[element.name] = [this.orderDate(element.name)];
      }
      // Create an empty calle form group
      const clienteFormGroup = this._formBuilder.group(campos);
      // Add the calle form group to the phoneNumbers form array
      this.manillaForm.get("camposManilla").push(clienteFormGroup);
    });
    // Mark for check
    this._changeDetectorRef.markForCheck();
  }
  orderDate(fieldDate) {
    let date = {};
    if (fieldDate !== '') {
      let fecha = this.manilla[fieldDate];
      fecha = fecha.substring(0, 10).split('-');
      fecha = fecha[1] + '-' + fecha[2] + '-' + fecha[0];
      let temp = new Date(fecha);
      date = {
        year: temp.getFullYear(),
        day: temp.getDate(),
        month: temp.getMonth() + 1
      };
    }
    return date;
  }
  fdnToString(fecha) {
    return `${fecha.year}-${fecha.month.toString().padStart(2, '0')}-${fecha.day.toString().padStart(2, '0')}`;
  }
  //Files selected
  onFileSelected(event, fieldName, index) {
    let fileSelected = event.target.files[0];
    if (fileSelected.type === 'image/jpeg' || fileSelected.type === 'image/png' || fileSelected.type === 'image/jpg' || fileSelected.type === 'application/pdf') {
      const reader = new FileReader();
      reader.readAsDataURL(fileSelected);
      reader.onload = () => {
        let dataN = reader.result.toString();
        // console.log(dataN);
        // let dataD = '';
        // dataD = dataN.replace(/^data:image\/\w+;base64,/,'');
        this.uploadedFiles[fieldName] = dataN;
      };
    } else {
      this.Toast.fire({
        icon: "error",
        title: 'Debe subir un tipo de imagen valido (JPEG, JPG, PNG, PDF).'
      });
      this.uploadedFiles = {};
      this.filesTemp[fieldName] = '';
      // this.manillaForm.get('camposManilla')['controls'][index]['controls'][fieldName].setValue('');
      // this.manillaForm.get(fieldName).setValue('');
      fileSelected = '';
    }
  }
  //submit
  orderData() {
    let manilla = this.manillaForm.getRawValue();
    manilla.camposManilla.forEach(element => {
      for (const [key, value] of Object.entries(element)) {
        manilla[key] = value;
      }
    });
    delete manilla.camposManilla;
    this.fieldsList.forEach(field => {
      if (field.type === 'Date') {
        manilla[field.name] = this.fdnToString(manilla[field.name]);
      }
    });
    return manilla;
  }
  deleleteFileFields(data) {
    this.fieldsList.forEach(field => {
      if (field.type === 'file') {
        delete data[field.name];
      }
    });
    return data;
  }
  onSubmit() {
    if (!this.manillaForm.disabled) {
      if (!this.manillaForm.valid) {
        this.Toast.fire({
          icon: 'error',
          title: 'Debe completar los campos requeridos para guardar la informacion'
        });
        document.querySelector('.modal').scrollTo({
          top: 0,
          behavior: 'smooth'
        });
        // this.disableButton = true;
      } else {
        // this.solicitarManilla();
        this.editarManillaById(this.manilla._id);
      }
    }
    // Mark for check
    this._changeDetectorRef.markForCheck();
  }
  //Pruebas
  pruebas() {
    console.log(this.manillaForm.getRawValue());
  }
}
EditarManillaComponent.ɵfac = function EditarManillaComponent_Factory(t) {
  return new (t || EditarManillaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_user_user_service__WEBPACK_IMPORTED_MODULE_1__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ng_gallery__WEBPACK_IMPORTED_MODULE_9__.Gallery), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ng_gallery_lightbox__WEBPACK_IMPORTED_MODULE_10__.Lightbox), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__.ViewportScroller));
};
EditarManillaComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: EditarManillaComponent,
  selectors: [["app-editar-manilla"]],
  viewQuery: function EditarManillaComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c1, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.ModalEditarManilla = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.manillaNgForm = _t.first);
    }
  },
  decls: 2,
  vars: 0,
  consts: [["class", "theme-modal"], ["modalEditarManilla", ""], [1, "modal-content", "quick-view-modal"], [1, "modal-header"], ["id", "modalSolicitarManillaTitulo", 1, "modal-title", "f-w-600"], ["type", "button", "class", "btn-close", "aria-label", "Close", 3, "click", 4, "ngIf"], [1, "modal-body"], ["novalidate", "", 1, "manillas-form-theme", 3, "formGroup"], ["manillaNgForm", "ngForm"], [1, "row"], ["class", "col-md-12", 4, "ngIf"], [2, "font-size", "12px"], ["aria-hidden", "true", 1, "fa", "fa-lock"], [4, "ngIf"], [1, "modal-footer"], [1, "btn", "btn-primary", 3, "click"], ["class", "spinner-border", "role", "status", 4, "ngIf"], ["class", "btn btn-secondary", "type", "button", "data-dismiss", "modal", 3, "click", 4, "ngIf"], ["type", "button", "aria-label", "Close", 1, "btn-close", 3, "click"], [1, "col-md-12"], [1, "d-flex", "justify-content-center"], ["role", "status", 1, "spinner-border"], [1, "visually-hidden"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "col-md-6 mb-4", 4, "ngIf"], [1, "col-md-6", "mb-4"], [1, "form-label", 3, "for"], [1, "input-group"], ["class", "input-group-text", 4, "ngIf"], [1, "form-control", 3, "ngClass", "formControl", "id", "placeholder"], ["class", "error-manilla-form", 4, "ngIf"], [1, "input-group-text"], [1, "error-manilla-form"], ["prefix", "(+52) ", "mask", "000-000-0000", 1, "form-control", 3, "ngClass", "formControl", "id", "placeholder"], ["class", "input-group-text", "id", "basic-addon3", 4, "ngIf"], ["placeholder", "dd-mm-yyy", "name", "fdn", "readonly", "", "ngbDatepicker", "", 1, "form-control", 3, "ngClass", "id", "formControl", "maxDate"], ["d", "ngbDatepicker"], ["type", "button", 1, "btn", "btn-outline-dark", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-calendar"], ["class", "error-login-form", 4, "ngIf"], ["id", "basic-addon3", 1, "input-group-text"], [1, "error-login-form"], [1, "form-select", 3, "ngClass", "formControl"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["rows", "2", 1, "form-control", 3, "ngClass", "autosize", "formControl", "id", "placeholder"], ["type", "number", 1, "form-control", 3, "ngClass", "formControl", "id", "placeholder"], ["type", "file", 1, "form-control", 3, "ngClass", "formControl", "id", "placeholder", "change"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-secondary", 3, "click"]],
  template: function EditarManillaComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, EditarManillaComponent_ng_template_0_Template, 24, 7, "ng-template", 0, 1, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbInputDatepicker, ngx_autosize__WEBPACK_IMPORTED_MODULE_11__.AutosizeDirective, ngx_mask__WEBPACK_IMPORTED_MODULE_12__.NgxMaskDirective],
  styles: [".error-valid-input[_ngcontent-%COMP%] {\n  border-color: red;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdXNlci9tYW5pbGxhcy9lZGl0YXItbWFuaWxsYS9lZGl0YXItbWFuaWxsYS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0FBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyIuZXJyb3ItdmFsaWQtaW5wdXR7XHJcbiAgICBib3JkZXItY29sb3I6IHJlZDtcclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});


/***/ }),

/***/ 40553:
/*!**********************************************************!*\
  !*** ./src/app/user/manillas/manillas-user.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ManillasUserComponent: () => (/* binding */ ManillasUserComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 72513);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 20274);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ 27889);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 20553);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var src_app_core_user_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/user/user.service */ 58212);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 76101);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var ngx_autosize__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-autosize */ 8099);
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-mask */ 97728);
/* harmony import */ var _ver_manilla_ver_manilla_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ver-manilla/ver-manilla.component */ 85668);
/* harmony import */ var _editar_manilla_editar_manilla_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editar-manilla/editar-manilla.component */ 82939);













const _c0 = ["manillaNgForm"];
const _c1 = ["verManillaModal"];
const _c2 = ["editarManillaModal"];
function ManillasUserComponent_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" Tienes ", ctx_r0.manillasCount, " ");
  }
}
function ManillasUserComponent_ng_template_18_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ManillasUserComponent_ng_template_18_button_3_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r19);
      const modal_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](modal_r7.dismiss("Cross click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function ManillasUserComponent_ng_template_18_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r9.messageAlert, " ");
  }
}
function ManillasUserComponent_ng_template_18_option_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "option", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const type_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", type_r20.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](type_r20.description);
  }
}
function ManillasUserComponent_ng_template_18_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " El campo: Tipo es requerido ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function ManillasUserComponent_ng_template_18_div_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 48)(1, "div", 49)(2, "div", 50)(3, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
  }
}
function ManillasUserComponent_ng_template_18_ng_container_25_ng_container_1_div_1_strong_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function ManillasUserComponent_ng_template_18_ng_container_25_ng_container_1_div_1_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function ManillasUserComponent_ng_template_18_ng_container_25_ng_container_1_div_1_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const i_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).index;
    const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" El campo: ", ctx_r36.fieldsList[i_r23].description, " es requerido ");
  }
}
function ManillasUserComponent_ng_template_18_ng_container_25_ng_container_1_div_1_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Ingresa un correo electronico valido ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
const _c3 = function (a0) {
  return {
    "error-valid-input": a0
  };
};
function ManillasUserComponent_ng_template_18_ng_container_25_ng_container_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 54)(1, "label", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, ManillasUserComponent_ng_template_18_ng_container_25_ng_container_1_div_1_strong_3_Template, 2, 0, "strong", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, ManillasUserComponent_ng_template_18_ng_container_25_ng_container_1_div_1_span_5_Template, 2, 0, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "input", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, ManillasUserComponent_ng_template_18_ng_container_25_ng_container_1_div_1_div_7_Template, 2, 1, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, ManillasUserComponent_ng_template_18_ng_container_25_ng_container_1_div_1_div_8_Template, 2, 0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    const i_r23 = ctx_r39.index;
    const field_r22 = ctx_r39.$implicit;
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("for", ctx_r26.fieldsList[i_r23].name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", ctx_r26.fieldsList[i_r23].description, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r26.fieldsList[i_r23].required);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r26.fieldsList[i_r23].private);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](10, _c3, field_r22.get(ctx_r26.fieldsList[i_r23].name).invalid && field_r22.get(ctx_r26.fieldsList[i_r23].name).touched || field_r22.get(ctx_r26.fieldsList[i_r23].name).hasError("email")))("formControl", field_r22.get(ctx_r26.fieldsList[i_r23].name))("id", ctx_r26.fieldsList[i_r23].name)("placeholder", ctx_r26.fieldsList[i_r23].description);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", field_r22.get(ctx_r26.fieldsList[i_r23].name).hasError("required") && field_r22.get(ctx_r26.fieldsList[i_r23].name).touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", field_r22.get(ctx_r26.fieldsList[i_r23].name).hasError("email") && !field_r22.get(ctx_r26.fieldsList[i_r23].name).hasError("required"));
  }
}
function ManillasUserComponent_ng_template_18_ng_container_25_ng_container_1_div_2_strong_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function ManillasUserComponent_ng_template_18_ng_container_25_ng_container_1_div_2_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function ManillasUserComponent_ng_template_18_ng_container_25_ng_container_1_div_2_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const i_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).index;
    const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" El campo: ", ctx_r42.fieldsList[i_r23].description, " es requerido ");
  }
}
function ManillasUserComponent_ng_template_18_ng_container_25_ng_container_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 54)(1, "label", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, ManillasUserComponent_ng_template_18_ng_container_25_ng_container_1_div_2_strong_3_Template, 2, 0, "strong", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, ManillasUserComponent_ng_template_18_ng_container_25_ng_container_1_div_2_span_5_Template, 2, 0, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "input", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, ManillasUserComponent_ng_template_18_ng_container_25_ng_container_1_div_2_div_7_Template, 2, 1, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    const i_r23 = ctx_r44.index;
    const field_r22 = ctx_r44.$implicit;
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("for", ctx_r27.fieldsList[i_r23].name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", ctx_r27.fieldsList[i_r23].description, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r27.fieldsList[i_r23].required);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r27.fieldsList[i_r23].private);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](9, _c3, field_r22.get(ctx_r27.fieldsList[i_r23].name).invalid && field_r22.get(ctx_r27.fieldsList[i_r23].name).touched))("formControl", field_r22.get(ctx_r27.fieldsList[i_r23].name))("id", ctx_r27.fieldsList[i_r23].name)("placeholder", ctx_r27.fieldsList[i_r23].description);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", field_r22.get(ctx_r27.fieldsList[i_r23].name).hasError("required") && field_r22.get(ctx_r27.fieldsList[i_r23].name).touched);
  }
}
function ManillasUserComponent_ng_template_18_ng_container_25_ng_container_1_div_3_strong_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function ManillasUserComponent_ng_template_18_ng_container_25_ng_container_1_div_3_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function ManillasUserComponent_ng_template_18_ng_container_25_ng_container_1_div_3_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const i_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).index;
    const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" El campo: ", ctx_r47.fieldsList[i_r23].description, " es requerido ");
  }
}
function ManillasUserComponent_ng_template_18_ng_container_25_ng_container_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 54)(1, "label", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, ManillasUserComponent_ng_template_18_ng_container_25_ng_container_1_div_3_strong_3_Template, 2, 0, "strong", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, ManillasUserComponent_ng_template_18_ng_container_25_ng_container_1_div_3_span_5_Template, 2, 0, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "input", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, ManillasUserComponent_ng_template_18_ng_container_25_ng_container_1_div_3_div_7_Template, 2, 1, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    const i_r23 = ctx_r49.index;
    const field_r22 = ctx_r49.$implicit;
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("for", ctx_r28.fieldsList[i_r23].name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", ctx_r28.fieldsList[i_r23].description, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r28.fieldsList[i_r23].required);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r28.fieldsList[i_r23].private);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](9, _c3, field_r22.get(ctx_r28.fieldsList[i_r23].name).invalid && field_r22.get(ctx_r28.fieldsList[i_r23].name).touched))("formControl", field_r22.get(ctx_r28.fieldsList[i_r23].name))("id", ctx_r28.fieldsList[i_r23].name)("placeholder", ctx_r28.fieldsList[i_r23].description);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", field_r22.get(ctx_r28.fieldsList[i_r23].name).hasError("required") && field_r22.get(ctx_r28.fieldsList[i_r23].name).touched);
  }
}
function ManillasUserComponent_ng_template_18_ng_container_25_ng_container_1_div_4_strong_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function ManillasUserComponent_ng_template_18_ng_container_25_ng_container_1_div_4_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function ManillasUserComponent_ng_template_18_ng_container_25_ng_container_1_div_4_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const i_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).index;
    const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" El campo: ", ctx_r53.fieldsList[i_r23].description, " es requerido ");
  }
}
const _c4 = function () {
  return {
    year: 1920,
    month: 1,
    day: 1
  };
};
const _c5 = function (a0, a1, a2) {
  return {
    year: a0,
    month: a1,
    day: a2
  };
};
function ManillasUserComponent_ng_template_18_ng_container_25_ng_container_1_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 54)(1, "label", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, ManillasUserComponent_ng_template_18_ng_container_25_ng_container_1_div_4_strong_3_Template, 2, 0, "strong", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, ManillasUserComponent_ng_template_18_ng_container_25_ng_container_1_div_4_span_5_Template, 2, 0, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "input", 62, 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "button", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ManillasUserComponent_ng_template_18_ng_container_25_ng_container_1_div_4_Template_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r56);
      const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](7);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](_r52.toggle());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](9, "i", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, ManillasUserComponent_ng_template_18_ng_container_25_ng_container_1_div_4_div_10_Template, 2, 1, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    const i_r23 = ctx_r57.index;
    const field_r22 = ctx_r57.$implicit;
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("for", ctx_r29.fieldsList[i_r23].name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", ctx_r29.fieldsList[i_r23].description, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r29.fieldsList[i_r23].required);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r29.fieldsList[i_r23].private);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](10, _c3, field_r22.get(ctx_r29.fieldsList[i_r23].name).invalid && field_r22.get(ctx_r29.fieldsList[i_r23].name).touched))("id", ctx_r29.fieldsList[i_r23].name)("formControl", field_r22.get(ctx_r29.fieldsList[i_r23].name))("minDate", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](12, _c4))("maxDate", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction3"](13, _c5, ctx_r29.maxDate.year, ctx_r29.maxDate.month, ctx_r29.maxDate.day));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", field_r22.get(ctx_r29.fieldsList[i_r23].name).hasError("required") && field_r22.get(ctx_r29.fieldsList[i_r23].name).touched);
  }
}
function ManillasUserComponent_ng_template_18_ng_container_25_ng_container_1_div_5_strong_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function ManillasUserComponent_ng_template_18_ng_container_25_ng_container_1_div_5_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function ManillasUserComponent_ng_template_18_ng_container_25_ng_container_1_div_5_option_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "option", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const opt_r62 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", opt_r62);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](opt_r62);
  }
}
function ManillasUserComponent_ng_template_18_ng_container_25_ng_container_1_div_5_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " El campo: Tipo es requerido ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function ManillasUserComponent_ng_template_18_ng_container_25_ng_container_1_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 54)(1, "label", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, ManillasUserComponent_ng_template_18_ng_container_25_ng_container_1_div_5_strong_3_Template, 2, 0, "strong", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, ManillasUserComponent_ng_template_18_ng_container_25_ng_container_1_div_5_span_5_Template, 2, 0, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "select", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "option", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, ManillasUserComponent_ng_template_18_ng_container_25_ng_container_1_div_5_option_8_Template, 2, 2, "option", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, ManillasUserComponent_ng_template_18_ng_container_25_ng_container_1_div_5_div_9_Template, 2, 0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    const i_r23 = ctx_r63.index;
    const field_r22 = ctx_r63.$implicit;
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("for", ctx_r30.fieldsList[i_r23].name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", ctx_r30.fieldsList[i_r23].description, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r30.fieldsList[i_r23].required);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r30.fieldsList[i_r23].private);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](8, _c3, field_r22.get(ctx_r30.fieldsList[i_r23].name).invalid && field_r22.get(ctx_r30.fieldsList[i_r23].name).touched))("formControl", field_r22.get(ctx_r30.fieldsList[i_r23].name));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r30.fieldsList[i_r23].opciones);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", field_r22.get(ctx_r30.fieldsList[i_r23].name).hasError("required") && field_r22.get(ctx_r30.fieldsList[i_r23].name).touched);
  }
}
function ManillasUserComponent_ng_template_18_ng_container_25_ng_container_1_div_6_strong_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function ManillasUserComponent_ng_template_18_ng_container_25_ng_container_1_div_6_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function ManillasUserComponent_ng_template_18_ng_container_25_ng_container_1_div_6_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const i_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).index;
    const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" El campo: ", ctx_r66.fieldsList[i_r23].description, " es requerido ");
  }
}
function ManillasUserComponent_ng_template_18_ng_container_25_ng_container_1_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 54)(1, "label", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, ManillasUserComponent_ng_template_18_ng_container_25_ng_container_1_div_6_strong_3_Template, 2, 0, "strong", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, ManillasUserComponent_ng_template_18_ng_container_25_ng_container_1_div_6_span_5_Template, 2, 0, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "textarea", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, ManillasUserComponent_ng_template_18_ng_container_25_ng_container_1_div_6_div_7_Template, 2, 1, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    const i_r23 = ctx_r68.index;
    const field_r22 = ctx_r68.$implicit;
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("for", ctx_r31.fieldsList[i_r23].name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", ctx_r31.fieldsList[i_r23].description, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r31.fieldsList[i_r23].required);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r31.fieldsList[i_r23].private);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](10, _c3, field_r22.get(ctx_r31.fieldsList[i_r23].name).invalid && field_r22.get(ctx_r31.fieldsList[i_r23].name).touched))("autosize", true)("formControl", field_r22.get(ctx_r31.fieldsList[i_r23].name))("id", ctx_r31.fieldsList[i_r23].name)("placeholder", ctx_r31.fieldsList[i_r23].description);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", field_r22.get(ctx_r31.fieldsList[i_r23].name).hasError("required") && field_r22.get(ctx_r31.fieldsList[i_r23].name).touched);
  }
}
function ManillasUserComponent_ng_template_18_ng_container_25_ng_container_1_div_7_strong_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function ManillasUserComponent_ng_template_18_ng_container_25_ng_container_1_div_7_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function ManillasUserComponent_ng_template_18_ng_container_25_ng_container_1_div_7_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const i_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).index;
    const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" El campo: ", ctx_r71.fieldsList[i_r23].description, " es requerido ");
  }
}
function ManillasUserComponent_ng_template_18_ng_container_25_ng_container_1_div_7_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const i_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).index;
    const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" Ingrese un ", ctx_r72.fieldsList[i_r23].description, " valido ");
  }
}
function ManillasUserComponent_ng_template_18_ng_container_25_ng_container_1_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 54)(1, "label", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, ManillasUserComponent_ng_template_18_ng_container_25_ng_container_1_div_7_strong_3_Template, 2, 0, "strong", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, ManillasUserComponent_ng_template_18_ng_container_25_ng_container_1_div_7_span_5_Template, 2, 0, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "input", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, ManillasUserComponent_ng_template_18_ng_container_25_ng_container_1_div_7_div_7_Template, 2, 1, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, ManillasUserComponent_ng_template_18_ng_container_25_ng_container_1_div_7_div_8_Template, 2, 1, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    const i_r23 = ctx_r75.index;
    const field_r22 = ctx_r75.$implicit;
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("for", ctx_r32.fieldsList[i_r23].name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", ctx_r32.fieldsList[i_r23].description, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r32.fieldsList[i_r23].required);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r32.fieldsList[i_r23].private);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](10, _c3, field_r22.get(ctx_r32.fieldsList[i_r23].name).invalid && field_r22.get(ctx_r32.fieldsList[i_r23].name).touched))("formControl", field_r22.get(ctx_r32.fieldsList[i_r23].name))("id", ctx_r32.fieldsList[i_r23].name)("placeholder", ctx_r32.fieldsList[i_r23].description);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", field_r22.get(ctx_r32.fieldsList[i_r23].name).hasError("required") && field_r22.get(ctx_r32.fieldsList[i_r23].name).touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !field_r22.get(ctx_r32.fieldsList[i_r23].name).hasError("required") && field_r22.get(ctx_r32.fieldsList[i_r23].name).invalid);
  }
}
function ManillasUserComponent_ng_template_18_ng_container_25_ng_container_1_div_8_strong_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function ManillasUserComponent_ng_template_18_ng_container_25_ng_container_1_div_8_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function ManillasUserComponent_ng_template_18_ng_container_25_ng_container_1_div_8_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const i_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).index;
    const ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" El campo: ", ctx_r78.fieldsList[i_r23].description, " es requerido ");
  }
}
function ManillasUserComponent_ng_template_18_ng_container_25_ng_container_1_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r81 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 54)(1, "label", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, ManillasUserComponent_ng_template_18_ng_container_25_ng_container_1_div_8_strong_3_Template, 2, 0, "strong", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, ManillasUserComponent_ng_template_18_ng_container_25_ng_container_1_div_8_span_5_Template, 2, 0, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "input", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function ManillasUserComponent_ng_template_18_ng_container_25_ng_container_1_div_8_Template_input_change_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r81);
      const i_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().index;
      const ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r80.onFileSelected($event, ctx_r80.fieldsList[i_r23].name, i_r23));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, ManillasUserComponent_ng_template_18_ng_container_25_ng_container_1_div_8_div_7_Template, 2, 1, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    const i_r23 = ctx_r83.index;
    const field_r22 = ctx_r83.$implicit;
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("for", ctx_r33.fieldsList[i_r23].name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", ctx_r33.fieldsList[i_r23].description, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r33.fieldsList[i_r23].required);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r33.fieldsList[i_r23].private);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](9, _c3, field_r22.get(ctx_r33.fieldsList[i_r23].name).invalid && field_r22.get(ctx_r33.fieldsList[i_r23].name).touched))("formControl", field_r22.get(ctx_r33.fieldsList[i_r23].name))("id", ctx_r33.fieldsList[i_r23].name)("placeholder", ctx_r33.fieldsList[i_r23].description);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", field_r22.get(ctx_r33.fieldsList[i_r23].name).hasError("required") && field_r22.get(ctx_r33.fieldsList[i_r23].name).touched);
  }
}
function ManillasUserComponent_ng_template_18_ng_container_25_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, ManillasUserComponent_ng_template_18_ng_container_25_ng_container_1_div_1_Template, 9, 12, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, ManillasUserComponent_ng_template_18_ng_container_25_ng_container_1_div_2_Template, 8, 11, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, ManillasUserComponent_ng_template_18_ng_container_25_ng_container_1_div_3_Template, 8, 11, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, ManillasUserComponent_ng_template_18_ng_container_25_ng_container_1_div_4_Template, 11, 17, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, ManillasUserComponent_ng_template_18_ng_container_25_ng_container_1_div_5_Template, 10, 10, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, ManillasUserComponent_ng_template_18_ng_container_25_ng_container_1_div_6_Template, 8, 12, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, ManillasUserComponent_ng_template_18_ng_container_25_ng_container_1_div_7_Template, 9, 12, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, ManillasUserComponent_ng_template_18_ng_container_25_ng_container_1_div_8_Template, 8, 11, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const i_r23 = ctx.index;
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r21.fieldsList[i_r23].type === "email");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r21.fieldsList[i_r23].type === "text");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r21.fieldsList[i_r23].type === "telefono");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r21.fieldsList[i_r23].type === "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r21.fieldsList[i_r23].type === "select");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r21.fieldsList[i_r23].type === "textarea");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r21.fieldsList[i_r23].type === "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r21.fieldsList[i_r23].type === "file");
  }
}
function ManillasUserComponent_ng_template_18_ng_container_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, ManillasUserComponent_ng_template_18_ng_container_25_ng_container_1_Template, 9, 8, "ng-container", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r14.manillaForm.get("clienteCampos")["controls"])("ngForTrackBy", ctx_r14.trackByFn);
  }
}
function ManillasUserComponent_ng_template_18_button_27_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Solicitar");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function ManillasUserComponent_ng_template_18_button_27_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 50)(1, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function ManillasUserComponent_ng_template_18_button_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r87 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ManillasUserComponent_ng_template_18_button_27_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r87);
      const ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r86.onSubmit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, ManillasUserComponent_ng_template_18_button_27_span_1_Template, 2, 0, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, ManillasUserComponent_ng_template_18_button_27_div_2_Template, 3, 0, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r15.manillaForm.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r15.manillaForm.disabled);
  }
}
function ManillasUserComponent_ng_template_18_button_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r90 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ManillasUserComponent_ng_template_18_button_28_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r90);
      const modal_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](modal_r7.dismiss("Cross click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Cerrar");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function ManillasUserComponent_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r92 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 24)(1, "h5", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Solicitar Pulsera");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, ManillasUserComponent_ng_template_18_button_3_Template, 3, 0, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, ManillasUserComponent_ng_template_18_div_5_Template, 2, 1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "form", 29, 30)(9, "div", 7)(10, "div", 31)(11, "label", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "Tipo");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "select", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function ManillasUserComponent_ng_template_18_Template_select_change_13_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r92);
      const ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r91.handleTypeChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](14, "option", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](15, ManillasUserComponent_ng_template_18_option_15_Template, 2, 2, "option", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](16, ManillasUserComponent_ng_template_18_div_16_Template, 2, 0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](17, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "p", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19, "Los campos marcados con * son obligatorios");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "p", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21, "Los campos marcados con ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](22, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23, " es informacion que sera privada y no se compartira con nadie");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](24, ManillasUserComponent_ng_template_18_div_24_Template, 5, 0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](25, ManillasUserComponent_ng_template_18_ng_container_25_Template, 2, 2, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](27, ManillasUserComponent_ng_template_18_button_27_Template, 3, 2, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](28, ManillasUserComponent_ng_template_18_button_28_Template, 2, 0, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r2.manillaForm.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.showAlert);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx_r2.manillaForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formControlName", "tipo");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r2.types);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.manillaForm.get("tipo").hasError("required") && ctx_r2.manillaForm.get("tipo").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.loadingFields);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r2.loadingFields);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r2.loadingFields);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r2.manillaForm.disabled);
  }
}
function ManillasUserComponent_tr_36_strong_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const manilla_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("(", manilla_r93.placa, ")");
  }
}
function ManillasUserComponent_tr_36_div_8_img_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "img", 88);
  }
  if (rf & 2) {
    const manilla_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", manilla_r93.foto_portador, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
  }
}
function ManillasUserComponent_tr_36_div_8_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const manilla_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", manilla_r93.nombre_portador.charAt(0), " ");
  }
}
function ManillasUserComponent_tr_36_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, ManillasUserComponent_tr_36_div_8_img_1_Template, 1, 1, "img", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, ManillasUserComponent_tr_36_div_8_div_2_Template, 2, 1, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const manilla_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", manilla_r93.foto_portador);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !manilla_r93.foto_portador);
  }
}
function ManillasUserComponent_tr_36_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const manilla_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", manilla_r93.nombre_mascota, " ");
  }
}
function ManillasUserComponent_tr_36_div_10_img_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "img", 88);
  }
  if (rf & 2) {
    const manilla_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", manilla_r93.foto_portador, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
  }
}
function ManillasUserComponent_tr_36_div_10_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const manilla_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", manilla_r93.nombre_portador.charAt(0), " ");
  }
}
function ManillasUserComponent_tr_36_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, ManillasUserComponent_tr_36_div_10_img_1_Template, 1, 1, "img", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, ManillasUserComponent_tr_36_div_10_div_2_Template, 2, 1, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const manilla_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", manilla_r93.foto_portador);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !manilla_r93.foto_portador);
  }
}
function ManillasUserComponent_tr_36_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const manilla_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", manilla_r93.nombre_portador, " ");
  }
}
const _c6 = function (a0, a1, a2, a3, a4) {
  return {
    "manilla-solicitado": a0,
    "manilla-entregado": a1,
    "manilla-rechazado": a2,
    "manilla-aceptado": a3,
    "manilla-enviada": a4
  };
};
function ManillasUserComponent_tr_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r114 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr")(1, "th", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, ManillasUserComponent_tr_36_strong_5_Template, 2, 1, "strong", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "td")(7, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, ManillasUserComponent_tr_36_div_8_Template, 3, 2, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, ManillasUserComponent_tr_36_div_9_Template, 2, 1, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, ManillasUserComponent_tr_36_div_10_Template, 3, 2, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](11, ManillasUserComponent_tr_36_div_11_Template, 2, 1, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "td", 80)(13, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "td")(16, "a", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ManillasUserComponent_tr_36_Template_a_click_16_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r114);
      const manilla_r93 = restoredCtx.$implicit;
      const ctx_r113 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r113.abrirModalVerManilla(manilla_r93));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](17, "i", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, "\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "a", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ManillasUserComponent_tr_36_Template_a_click_19_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r114);
      const manilla_r93 = restoredCtx.$implicit;
      const ctx_r115 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r115.abrirModalEditarManilla(manilla_r93));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](20, "i", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const manilla_r93 = ctx.$implicit;
    const i_r94 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](i_r94 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", manilla_r93.tipo, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", manilla_r93.placa);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", manilla_r93.nombre_mascota);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", manilla_r93.nombre_mascota);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", manilla_r93.nombre_portador);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", manilla_r93.nombre_portador);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction5"](9, _c6, manilla_r93.estado === "Solicitada", manilla_r93.estado === "Entregada", manilla_r93.estado === "Rechazada", manilla_r93.estado === "Aceptada", manilla_r93.estado === "Enviada"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](manilla_r93.estado);
  }
}
function ManillasUserComponent_div_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 91)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "\u00A1No hay pulseras para mostrar!");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
const _c7 = function () {
  return {
    "=0": "No tienes pulseras",
    "=1": "pulsera",
    "other": "pulseras"
  };
};
class ManillasUserComponent {
  constructor(_userService, _changeDetectorRef, modalService, _formBuilder, viewScroller) {
    this._userService = _userService;
    this._changeDetectorRef = _changeDetectorRef;
    this.modalService = modalService;
    this._formBuilder = _formBuilder;
    this.viewScroller = viewScroller;
    this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
    this.manillasCount = 0;
    this.page = 1;
    this.user = {};
    this.types = [];
    this.loadingFields = false;
    this.fieldsList = [];
    this.maxDate = {};
    this.showAlert = false;
    this.messageAlert = "";
    this.disableButtons = false;
    this.manillasList = [];
    this.manillaSelected = {};
    this.limit = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.pagination_limit;
    this.uploadedFiles = {};
    this.imgPreview = '';
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
  }
  ngOnInit() {
    this.manillaForm = this._formBuilder.group({
      tipo: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
      clienteCampos: this._formBuilder.array([])
    });
    this._userService.userTypes$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this._unsubscribeAll)).subscribe(types => {
      // Update the types list
      this.types = types;
      // Mark for check
      this._changeDetectorRef.markForCheck();
    });
    this._userService.userManillas$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this._unsubscribeAll)).subscribe(manillas => {
      // Update the manillasList
      this.manillasList = this.orderDataManillas(manillas.misManillas);
      this.manillasCount = this.manillasList.length;
      // Mark for check
      this._changeDetectorRef.markForCheck();
    });
    // Subscribe to user changes
    this._userService.user$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this._unsubscribeAll)).subscribe(user => {
      this.user = user;
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
  onFileSelected(event, fieldName, index) {
    let fileSelected = event.target.files[0];
    if (fileSelected.type === 'image/jpeg' || fileSelected.type === 'image/png' || fileSelected.type === 'image/jpg' || fileSelected.type === 'application/pdf') {
      const reader = new FileReader();
      reader.readAsDataURL(fileSelected);
      reader.onload = () => {
        let dataN = reader.result.toString();
        let dataD = '';
        dataD = dataN.replace(/^data:image\/\w+;base64,/, '');
        this.imgPreview = dataN;
        this.uploadedFiles[fieldName] = dataD;
      };
    } else {
      this.Toast.fire({
        icon: "error",
        title: 'Debe subir un tipo de imagen valido (JPEG, JPG, PNG, PDF).'
      });
      this.uploadedFiles = {};
      this.manillaForm.get('clienteCampos')['controls'][index]['controls'][fieldName].setValue('');
      // this.manillaForm.get(fieldName).setValue('');
      fileSelected = '';
      this.imgPreview = '';
    }
  }
  orderDataManillas(data) {
    let manillas = [];
    data.forEach(tipo => {
      manillas = [...manillas, ...tipo.manillas];
    });
    // data.forEach(tipo => {
    //   manillas[tipo._id] = tipo.manillas
    // });
    return manillas;
  }
  open(content) {
    this.modalService.open(content, {
      size: 'lg',
      ariaLabelledBy: 'modal-basic-title',
      backdrop: 'static',
      keyboard: false,
      scrollable: true
    }).result.then(result => {
      this.closeResult = `Closed with: ${result}`;
    }, reason => {
      this.getDismissReason();
    });
  }
  getDismissReason() {
    this.fieldsList.forEach((element, index) => {
      this.manillaForm.get("clienteCampos").removeAt(0);
    });
    this.fieldsList = [];
    this.manillaForm.get('tipo').setValue('');
  }
  //get manillas fields
  handleTypeChange(event) {
    this.fieldsList.forEach((element, index) => {
      this.manillaForm.get("clienteCampos").removeAt(0);
    });
    this.fieldsList = [];
    if (event.target.value !== "") {
      this.loadingFields = true;
      this.getFieldsByType(event.target.value);
    }
  }
  getFieldsByType(type) {
    this._userService.getFieldsByUserTypes(type).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this._unsubscribeAll)).subscribe(response => {
      this.fieldsList = response;
      this.addFieldsToFormGroup(response);
      this.loadingFields = false;
    }, error => {
      console.log(error);
    });
  }
  addFieldsToFormGroup(fieldsList) {
    fieldsList.forEach(element => {
      let campos = {};
      if (element.type === 'number' && element.required) {
        campos[element.name] = ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.pattern("[0-9]*")]];
      }
      if (element.type === 'number' && !element.required) {
        campos[element.name] = ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.pattern("[0-9]*")]];
      }
      if (element.required && element.type !== 'number') {
        campos[element.name] = ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]];
      }
      if (!element.required && element.type !== 'number') {
        campos[element.name] = [""];
      }
      // Create an empty calle form group
      const clienteFormGroup = this._formBuilder.group(campos);
      // Add the calle form group to the phoneNumbers form array
      this.manillaForm.get("clienteCampos").push(clienteFormGroup);
    });
    // Mark for check
    this._changeDetectorRef.markForCheck();
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
  onSubmit() {
    this.showAlert = false;
    if (!this.manillaForm.disabled) {
      if (!this.manillaForm.valid) {
        this.Toast.fire({
          icon: 'error',
          title: 'Debes completar todos los campos para solicitar una pulsera.'
        });
        // this.disableButton = true;
      } else {
        this.solicitarManilla();
      }
    }
    // Mark for check
    this._changeDetectorRef.markForCheck();
  }
  orderData() {
    let manilla = this.manillaForm.getRawValue();
    manilla.clienteCampos.forEach(element => {
      for (const [key, value] of Object.entries(element)) {
        manilla[key] = value;
      }
    });
    delete manilla.clienteCampos;
    this.fieldsList.forEach(field => {
      if (field.type === 'Date') {
        manilla[field.name] = this.fdnToString(manilla[field.name]);
      }
    });
    return manilla;
  }
  solicitarManilla() {
    // Do nothing if the form is invalid
    if (this.manillaForm.invalid) {
      return;
    }
    // Disable the form
    this.manillaForm.disable();
    let dataManilla = this.orderData();
    dataManilla.userId = this.user._id;
    dataManilla = {
      ...dataManilla,
      ...this.uploadedFiles
    };
    //create manilla
    this._userService.crearSolicitudManilla(dataManilla).subscribe(response => {
      this.Toast.fire({
        icon: 'success',
        title: 'Pulsera solicitada con exito'
      });
      this.getManillasListUpdated();
      this.modalService.dismissAll();
      this.manillaForm.enable();
      this.manillaForm.reset();
    }, response => {
      // Re-enable the form
      this.manillaForm.enable();
      // Set the alert
      // response.error.message.forEach(element => {
      //   this.messageAlert += element + ',';
      // });
      this.Toast.fire({
        icon: 'error',
        title: response.error.message
      });
      // this.messageAlert = response.error.message;
      this.viewScroller.scrollToPosition([0, 0]);
      // Show the alert
      // this.showAlert = true;
      // this.disableButton = true;
    });
  }

  getManillasListUpdated() {
    this._userService.getUserManillasUpdate().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this._unsubscribeAll)).subscribe(response => {
      this._userService.updateManillasList(response);
    }, error => {
      console.log(error);
    });
  }
  fdnToString(fecha) {
    return `${fecha.year}-${fecha.month.toString().padStart(2, '0')}-${fecha.day.toString().padStart(2, '0')}`;
  }
  abrirModalVerManilla(manilla) {
    manilla.vista = 'ver';
    this._userService.updateManillaSelected(manilla);
    this.VerManillaModal.openModal();
  }
  abrirModalEditarManilla(manilla) {
    manilla.vista = 'editar';
    this._userService.updateManillaSelected(manilla);
    this.EditarManillaModal.openModal();
  }
  onPageChange(event) {
    // this.getManillasLisFiltered(((event - 1) * this.limit),tipo, estado);
  }
  pruebas() {
    // this.manillaForm.get('clienteCampos')['controls'][0]['controls']['foto_portador'].setValue('');
    // console.log(this.manillaForm.get('clienteCampos')['controls'][0]['controls']['foto_portador'].value);
    // console.log(this.manillaForm.controls.clienteCampos['controls']);
  }
}
ManillasUserComponent.ɵfac = function ManillasUserComponent_Factory(t) {
  return new (t || ManillasUserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_user_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_10__.ViewportScroller));
};
ManillasUserComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: ManillasUserComponent,
  selectors: [["app-manillas-user"]],
  viewQuery: function ManillasUserComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c1, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c2, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.manillaNgForm = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.VerManillaModal = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.EditarManillaModal = _t.first);
    }
  },
  decls: 44,
  vars: 12,
  consts: [[1, "dashboard-right"], [1, "dashboard"], [1, "page-title"], [1, "welcome-msg"], [1, "nombre-msg"], [4, "ngIf"], [1, "container-fluid"], [1, "row"], [1, "col-sm-12"], [1, "card"], [1, "card-body"], [1, "btn-popup", "pull-right"], ["type", "button", "data-toggle", "modal", "data-original-title", "Solicitar puslera", "data-target", "#modalSolicitarManilla", 1, "btn", "btn-outline-secondary", 3, "click"], ["content", ""], ["id", "manillas-user", 1, "category-table", "custom-datatable"], [1, "table-responsive"], [1, "table", "table-striped"], ["scope", "col"], [4, "ngFor", "ngForOf"], ["class", "d-flex justify-content-center mb-4 mt-4", 4, "ngIf"], [1, "d-flex", "justify-content-center", "p-2"], [3, "collectionSize", "page", "pageSize", "boundaryLinks", "pageChange"], ["verManillaModal", ""], ["editarManillaModal", ""], [1, "modal-header"], ["id", "modalSolicitarManillaTitulo", 1, "modal-title", "f-w-600"], ["type", "button", "class", "close", "aria-label", "Close", 3, "click", 4, "ngIf"], [1, "modal-body"], ["class", "alert alert-danger", "role", "alert", 4, "ngIf"], ["novalidate", "", 1, "manillas-form-theme", 3, "formGroup"], ["manillaNgForm", "ngForm"], [1, "col-md-12", "mb-4"], ["for", "name"], ["aria-label", "Seleccionar tipo cliente", 1, "form-select", 3, "formControlName", "change"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["class", "error-manilla-form", 4, "ngIf"], [2, "font-size", "12px"], ["aria-hidden", "true", 1, "fa", "fa-lock"], ["class", "col-md-12", 4, "ngIf"], [1, "modal-footer"], ["class", "btn btn-primary", 3, "click", 4, "ngIf"], ["class", "btn btn-secondary", "type", "button", "data-dismiss", "modal", 3, "click", 4, "ngIf"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], ["role", "alert", 1, "alert", "alert-danger"], [3, "value"], [1, "error-manilla-form"], [1, "col-md-12"], [1, "d-flex", "justify-content-center"], ["role", "status", 1, "spinner-border"], [1, "visually-hidden"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "col-md-6 mb-4", 4, "ngIf"], [1, "col-md-6", "mb-4"], [1, "form-label", 3, "for"], [1, "input-group"], ["class", "input-group-text", 4, "ngIf"], [1, "form-control", 3, "ngClass", "formControl", "id", "placeholder"], [1, "input-group-text"], ["prefix", "(+52) ", "mask", "000-000-0000", 1, "form-control", 3, "ngClass", "formControl", "id", "placeholder"], ["class", "input-group-text", "id", "basic-addon3", 4, "ngIf"], ["placeholder", "dd-mm-yyy", "name", "fdn", "readonly", "", "ngbDatepicker", "", 1, "form-control", 3, "ngClass", "id", "formControl", "minDate", "maxDate"], ["d", "ngbDatepicker"], ["type", "button", 1, "btn", "btn-outline-dark", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-calendar"], ["class", "error-login-form", 4, "ngIf"], ["id", "basic-addon3", 1, "input-group-text"], [1, "error-login-form"], [1, "form-select", 3, "ngClass", "formControl"], ["rows", "2", 1, "form-control", 3, "ngClass", "autosize", "formControl", "id", "placeholder"], ["type", "number", 1, "form-control", 3, "ngClass", "formControl", "id", "placeholder"], ["type", "file", 1, "form-control", 3, "ngClass", "formControl", "id", "placeholder", "change"], [1, "btn", "btn-primary", 3, "click"], ["class", "spinner-border", "role", "status", 4, "ngIf"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-secondary", 3, "click"], ["scope", "row"], [1, "contenedor-imagen"], ["class", "contenedor-perfil-image", 4, "ngIf"], ["class", "contendor-nombre", 4, "ngIf"], [3, "ngClass"], ["href", "javascript:void(0)", 1, "icon-ver", 3, "click"], [1, "fa", "fa-eye", "f-12"], ["href", "javascript:void(0)", 3, "click"], [1, "fa", "fa-edit"], [1, "contenedor-perfil-image"], ["class", "image-perfil", "alt", "", 3, "src", 4, "ngIf"], ["class", "no-image-perfil", 4, "ngIf"], ["alt", "", 1, "image-perfil", 3, "src"], [1, "no-image-perfil"], [1, "contendor-nombre"], [1, "d-flex", "justify-content-center", "mb-4", "mt-4"]],
  template: function ManillasUserComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r116 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Mis Pulseras");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 3)(6, "p", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, ManillasUserComponent_ng_container_7_Template, 2, 1, "ng-container", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](9, "i18nPlural");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 6)(11, "div", 7)(12, "div", 8)(13, "div", 9)(14, "div", 10)(15, "div", 11)(16, "button", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ManillasUserComponent_Template_button_click_16_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r116);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](19);
        return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx.open(_r1));
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, "Solicitar pulsera");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](18, ManillasUserComponent_ng_template_18_Template, 29, 10, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "div", 14)(21, "div", 15)(22, "table", 16)(23, "thead")(24, "tr")(25, "th", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26, "#");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "th", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28, "Tipo");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "th", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](30, "Portador");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "th", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](32, "Estado");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "th", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](34, "Acciones");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "tbody");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](36, ManillasUserComponent_tr_36_Template, 21, 15, "tr", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](37, ManillasUserComponent_div_37_Template, 3, 0, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "div", 20)(39, "ngb-pagination", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("pageChange", function ManillasUserComponent_Template_ngb_pagination_pageChange_39_listener($event) {
        return ctx.onPageChange($event);
      })("pageChange", function ManillasUserComponent_Template_ngb_pagination_pageChange_39_listener($event) {
        return ctx.page = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](40, "app-ver-manilla", null, 22)(42, "app-editar-manilla", null, 23);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.manillasCount > 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](9, 8, ctx.manillasCount, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](11, _c7)), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](28);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.manillasList);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.manillasCount <= 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("collectionSize", ctx.manillasCount)("page", ctx.page)("pageSize", ctx.manillasCount)("boundaryLinks", true);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlName, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbInputDatepicker, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbPagination, ngx_autosize__WEBPACK_IMPORTED_MODULE_11__.AutosizeDirective, ngx_mask__WEBPACK_IMPORTED_MODULE_12__.NgxMaskDirective, _ver_manilla_ver_manilla_component__WEBPACK_IMPORTED_MODULE_3__.VerManillaComponent, _editar_manilla_editar_manilla_component__WEBPACK_IMPORTED_MODULE_4__.EditarManillaComponent, _angular_common__WEBPACK_IMPORTED_MODULE_10__.I18nPluralPipe],
  styles: [".manillas-form-theme[_ngcontent-%COMP%]   .error-manilla-form[_ngcontent-%COMP%] {\n  color: red;\n}\n.manillas-form-theme[_ngcontent-%COMP%]   .title-label-field[_ngcontent-%COMP%] {\n  text-transform: capitalize;\n}\n.manillas-form-theme[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  padding: 11px;\n}\n\n.contenedor-perfil-image[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-top: 10px;\n  width: 140px;\n  height: 140px;\n  border-radius: 50%;\n  overflow: hidden;\n}\n.contenedor-perfil-image[_ngcontent-%COMP%]   .image-perfil[_ngcontent-%COMP%] {\n  object-fit: cover;\n  width: 100%;\n  height: 100%;\n}\n.contenedor-perfil-image[_ngcontent-%COMP%]   .no-image-perfil[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  background-color: rgb(188, 188, 188);\n  color: rgb(78, 78, 78);\n  font-weight: bold;\n  font-size: 70px;\n}\n\n.estado-manillas[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  background: black;\n  color: white;\n  border-radius: 20px;\n  padding: 8px 0px 8px 0px;\n}\n\n.manilla-aceptado[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  background: var(--theme-gradient1);\n  color: white;\n  border-radius: 20px;\n  padding: 8px 0px 8px 0px;\n}\n\n.manilla-rechazado[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  background: rgb(231, 82, 82);\n  color: white;\n  border-radius: 20px;\n  padding: 8px 0px 8px 0px;\n}\n\n.manilla-entregado[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  background: rgb(46, 160, 33);\n  color: white;\n  border-radius: 20px;\n  padding: 8px 0px 8px 0px;\n}\n\n.manilla-solicitado[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  background: var(--theme-gradient2);\n  color: white;\n  border-radius: 20px;\n  padding: 8px 0px 8px 0px;\n}\n\n.manilla-enviada[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  background: var(--theme-deafult);\n  color: white;\n  border-radius: 20px;\n  padding: 8px 0px 8px 0px;\n}\n\n.error-valid-input[_ngcontent-%COMP%] {\n  border-color: red;\n}\n\n.icon-ver[_ngcontent-%COMP%] {\n  color: var(--theme-deafult);\n}\n\n.icon-editar[_ngcontent-%COMP%] {\n  color: var(--theme-deafult);\n}\n\n.contenedor-imagen[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: auto;\n  display: grid;\n  grid-template-columns: 1fr 3fr;\n}\n.contenedor-imagen[_ngcontent-%COMP%]   .contendor-nombre[_ngcontent-%COMP%] {\n  display: flex;\n  margin: 0px;\n  padding: 0px;\n  align-items: flex-end;\n}\n\n.contenedor-perfil-image[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  width: 25px;\n  height: 25px;\n  border-radius: 50%;\n  overflow: hidden;\n}\n.contenedor-perfil-image[_ngcontent-%COMP%]   .image-perfil[_ngcontent-%COMP%] {\n  object-fit: cover;\n  width: 100%;\n  height: 100%;\n}\n.contenedor-perfil-image[_ngcontent-%COMP%]   .no-image-perfil[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  background-color: rgb(188, 188, 188);\n  color: rgb(78, 78, 78);\n  font-weight: bold;\n  font-size: 15px;\n}\n\n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 0px !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdXNlci9tYW5pbGxhcy9tYW5pbGxhcy11c2VyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksVUFBQTtBQUFSO0FBR0k7RUFDSSwwQkFBQTtBQURSO0FBSUk7RUFDSSxhQUFBO0FBRlI7O0FBTUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUhKO0FBS0k7RUFDSSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBSFI7QUFNSTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLG9DQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFKUjs7QUFTSTtFQUNJLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esd0JBQUE7QUFOUjs7QUFXSTtFQUNJLGtDQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esd0JBQUE7QUFSUjs7QUFhSTtFQUNJLDRCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esd0JBQUE7QUFWUjs7QUFlSTtFQUNJLDRCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esd0JBQUE7QUFaUjs7QUFpQkk7RUFDSSxrQ0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHdCQUFBO0FBZFI7O0FBbUJJO0VBQ0ksZ0NBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSx3QkFBQTtBQWhCUjs7QUFvQkE7RUFDSSxpQkFBQTtBQWpCSjs7QUFvQkE7RUFDSSwyQkFBQTtBQWpCSjs7QUFvQkE7RUFDSSwyQkFBQTtBQWpCSjs7QUFvQkE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtBQWpCSjtBQW9CSTtFQUNJLGFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0FBbEJSOztBQXNCQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQW5CSjtBQXFCSTtFQUNJLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFuQlI7QUFzQkk7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBcEJSOztBQXlCSTtFQUNJLHVCQUFBO0FBdEJSIiwic291cmNlc0NvbnRlbnQiOlsiLm1hbmlsbGFzLWZvcm0tdGhlbWV7XHJcbiAgICAuZXJyb3ItbWFuaWxsYS1mb3Jte1xyXG4gICAgICAgIGNvbG9yOiByZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgLnRpdGxlLWxhYmVsLWZpZWxke1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgfVxyXG5cclxuICAgIHNlbGVjdHtcclxuICAgICAgICBwYWRkaW5nOiAxMXB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4uY29udGVuZWRvci1wZXJmaWwtaW1hZ2V7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICB3aWR0aDogMTQwcHg7XHJcbiAgICBoZWlnaHQ6IDE0MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcbiAgICAuaW1hZ2UtcGVyZmlse1xyXG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgIH1cclxuXHJcbiAgICAubm8taW1hZ2UtcGVyZmlse1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTg4LCAxODgsIDE4OCk7XHJcbiAgICAgICAgY29sb3I6IHJnYig3OCwgNzgsIDc4KTtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBmb250LXNpemU6IDcwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5lc3RhZG8tbWFuaWxsYXN7XHJcbiAgICBwe1xyXG4gICAgICAgIGJhY2tncm91bmQ6IGJsYWNrO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDhweCAwcHggOHB4IDBweDtcclxuICAgIH1cclxufVxyXG5cclxuLm1hbmlsbGEtYWNlcHRhZG97XHJcbiAgICBwe1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXRoZW1lLWdyYWRpZW50MSk7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgcGFkZGluZzogOHB4IDBweCA4cHggMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4ubWFuaWxsYS1yZWNoYXphZG97XHJcbiAgICBwe1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYigyMzEsIDgyLCA4Mik7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgcGFkZGluZzogOHB4IDBweCA4cHggMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4ubWFuaWxsYS1lbnRyZWdhZG97XHJcbiAgICBwe1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYig0NiwgMTYwLCAzMyk7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgcGFkZGluZzogOHB4IDBweCA4cHggMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4ubWFuaWxsYS1zb2xpY2l0YWRve1xyXG4gICAgcHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS10aGVtZS1ncmFkaWVudDIpO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDhweCAwcHggOHB4IDBweDtcclxuICAgIH1cclxufVxyXG5cclxuLm1hbmlsbGEtZW52aWFkYXtcclxuICAgIHB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tdGhlbWUtZGVhZnVsdCk7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgcGFkZGluZzogOHB4IDBweCA4cHggMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4uZXJyb3ItdmFsaWQtaW5wdXR7XHJcbiAgICBib3JkZXItY29sb3I6IHJlZDtcclxufVxyXG5cclxuLmljb24tdmVye1xyXG4gICAgY29sb3I6ICB2YXIoLS10aGVtZS1kZWFmdWx0KTtcclxufVxyXG5cclxuLmljb24tZWRpdGFye1xyXG4gICAgY29sb3I6ICB2YXIoLS10aGVtZS1kZWFmdWx0KTtcclxufVxyXG5cclxuLmNvbnRlbmVkb3ItaW1hZ2Vue1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgM2ZyO1xyXG4gICAgXHJcblxyXG4gICAgLmNvbnRlbmRvci1ub21icmV7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBtYXJnaW46IDBweDtcclxuICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gICAgfVxyXG59XHJcblxyXG4uY29udGVuZWRvci1wZXJmaWwtaW1hZ2V7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcbiAgICAuaW1hZ2UtcGVyZmlse1xyXG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgIH1cclxuXHJcbiAgICAubm8taW1hZ2UtcGVyZmlse1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTg4LCAxODgsIDE4OCk7XHJcbiAgICAgICAgY29sb3I6IHJnYig3OCwgNzgsIDc4KTtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi50YWJsZXtcclxuICAgIHRke1xyXG4gICAgICAgIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ }),

/***/ 85668:
/*!********************************************************************!*\
  !*** ./src/app/user/manillas/ver-manilla/ver-manilla.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VerManillaComponent: () => (/* binding */ VerManillaComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var ng_gallery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-gallery */ 60977);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 72513);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 20274);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ 27889);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 76101);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var src_app_core_user_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/user/user.service */ 58212);
/* harmony import */ var ng_gallery_lightbox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-gallery/lightbox */ 23050);
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-mask */ 97728);














const _c0 = ["modaVerManilla"];
function VerManillaComponent_ng_template_0_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 11)(1, "div", 12)(2, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
}
function VerManillaComponent_ng_template_0_div_7_img_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "img", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function VerManillaComponent_ng_template_0_div_7_img_5_Template_img_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r15);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r14.lightbox.open(0));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r5.manilla.foto_portador, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
  }
}
function VerManillaComponent_ng_template_0_div_7_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", (ctx_r6.manilla == null ? null : ctx_r6.manilla.nombre_portador == null ? null : ctx_r6.manilla.nombre_portador.charAt(0)) || (ctx_r6.manilla == null ? null : ctx_r6.manilla.userId == null ? null : ctx_r6.manilla.userId.name == null ? null : ctx_r6.manilla.userId.name.charAt(0)), " ");
  }
}
function VerManillaComponent_ng_template_0_div_7_ng_container_8_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 32)(1, "div", 33)(2, "div", 34)(3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 35)(7, "h6", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const field_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 2, field_r16.description));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r17.manilla[field_r16.name]);
  }
}
function VerManillaComponent_ng_template_0_div_7_ng_container_8_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 32)(1, "div", 33)(2, "div", 34)(3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 35)(7, "h6", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](9, "mask");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const field_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 2, field_r16.description));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("(+52) ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](9, 4, ctx_r18.manilla[field_r16.name], "000-000-0000"), "");
  }
}
function VerManillaComponent_ng_template_0_div_7_ng_container_8_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 32)(1, "div", 33)(2, "div", 34)(3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 35)(7, "h6", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](9, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const field_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 2, field_r16.description));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](9, 4, ctx_r19.manilla[field_r16.name], "dd/MM/yyyy"));
  }
}
function VerManillaComponent_ng_template_0_div_7_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, VerManillaComponent_ng_template_0_div_7_ng_container_8_div_1_Template, 9, 4, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, VerManillaComponent_ng_template_0_div_7_ng_container_8_div_2_Template, 10, 7, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, VerManillaComponent_ng_template_0_div_7_ng_container_8_div_3_Template, 10, 7, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const field_r16 = ctx.$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", field_r16.type !== "telefono" && field_r16.type !== "file" && field_r16.type !== "Date" && ctx_r7.manilla[field_r16.name] !== "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", field_r16.type === "telefono" && ctx_r7.manilla[field_r16.name] !== "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", field_r16.type === "Date" && ctx_r7.manilla[field_r16.name] !== "");
  }
}
function VerManillaComponent_ng_template_0_div_7_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 32)(1, "div", 33)(2, "div", 34)(3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Codigo QR");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 35)(6, "h6", 36)(7, "a", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Codigo");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("href", ctx_r8.manilla.qrCode, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
  }
}
function VerManillaComponent_ng_template_0_div_7_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Documentos pulsera");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function VerManillaComponent_ng_template_0_div_7_ng_template_13_ng_container_1_li_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 41)(1, "a", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "i", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const field_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("href", ctx_r25.manilla[field_r24.name], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", field_r24.description, "");
  }
}
function VerManillaComponent_ng_template_0_div_7_ng_template_13_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, VerManillaComponent_ng_template_0_div_7_ng_template_13_ng_container_1_li_1_Template, 4, 2, "li", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const field_r24 = ctx.$implicit;
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", field_r24.type === "file" && ctx_r23.manilla[field_r24.name] !== "");
  }
}
function VerManillaComponent_ng_template_0_div_7_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ul", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, VerManillaComponent_ng_template_0_div_7_ng_template_13_ng_container_1_Template, 2, 1, "ng-container", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r10.fieldsList);
  }
}
function VerManillaComponent_ng_template_0_div_7_div_14_ng_container_19_i_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 55);
  }
}
function VerManillaComponent_ng_template_0_div_7_div_14_ng_container_19_i_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 56);
  }
}
function VerManillaComponent_ng_template_0_div_7_div_14_ng_container_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "tr")(2, "th", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](8, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "td")(10, "a", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function VerManillaComponent_ng_template_0_div_7_div_14_ng_container_19_Template_a_click_10_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r33);
      const i_r29 = restoredCtx.index;
      const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r32.cambiarEstado(i_r29));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, VerManillaComponent_ng_template_0_div_7_div_14_ng_container_19_i_11_Template, 1, 0, "i", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, VerManillaComponent_ng_template_0_div_7_div_14_ng_container_19_i_12_Template, 1, 0, "i", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "tr", 53)(14, "td", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const entrada_r28 = ctx.$implicit;
    const i_r29 = ctx.index;
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](i_r29 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](entrada_r28.taller.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](8, 9, entrada_r28.updatedAt, "dd/MM/yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("href", "#collapse", i_r29, "", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattributeInterpolate1"]("aria-controls", "collapse", i_r29, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r27.showIcons["campo" + i_r29]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r27.showIcons["campo" + i_r29]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("id", "collapse", i_r29, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](entrada_r28.observaciones);
  }
}
function VerManillaComponent_ng_template_0_div_7_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 44)(1, "div", 33)(2, "div", 34)(3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Entradas");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 45)(6, "div", 46)(7, "table", 47)(8, "thead")(9, "tr")(10, "th", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "th", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Taller");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "th", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Fecha");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "th", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, VerManillaComponent_ng_template_0_div_7_div_14_ng_container_19_Template, 16, 12, "ng-container", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r11.manilla == null ? null : ctx_r11.manilla.entradas);
  }
}
function VerManillaComponent_ng_template_0_div_7_ng_template_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Estado de mi pulsera");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
const _c1 = function (a0) {
  return {
    "active": a0
  };
};
function VerManillaComponent_ng_template_0_div_7_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 57)(1, "article", 58)(2, "div", 59)(3, "div", 60)(4, "div", 61)(5, "span", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "i", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "span", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Solicitada");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 61)(10, "span", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "i", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "span", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "En produccion");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 61)(15, "span", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "i", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "span", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "En camino");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 61)(20, "span", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "i", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "span", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Entregada");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](4, _c1, ctx_r13.manilla.estado === "Solicitada" || ctx_r13.manilla.estado === "Aceptada" || ctx_r13.manilla.estado === "Enviada" || ctx_r13.manilla.estado === "Entregada"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](6, _c1, ctx_r13.manilla.estado === "Aceptada" || ctx_r13.manilla.estado === "Enviada" || ctx_r13.manilla.estado === "Entregada"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](8, _c1, ctx_r13.manilla.estado === "Enviada" || ctx_r13.manilla.estado === "Entregada"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](10, _c1, ctx_r13.manilla.estado === "Entregada"));
  }
}
function VerManillaComponent_ng_template_0_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 14)(1, "div", 15)(2, "div", 16)(3, "div", 17)(4, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, VerManillaComponent_ng_template_0_div_7_img_5_Template, 1, 1, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, VerManillaComponent_ng_template_0_div_7_div_6_Template, 2, 1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, VerManillaComponent_ng_template_0_div_7_ng_container_8_Template, 4, 3, "ng-container", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, VerManillaComponent_ng_template_0_div_7_div_9_Template, 9, 1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "ngb-accordion", 24)(11, "ngb-panel", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, VerManillaComponent_ng_template_0_div_7_ng_template_12_Template, 2, 0, "ng-template", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, VerManillaComponent_ng_template_0_div_7_ng_template_13_Template, 2, 1, "ng-template", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, VerManillaComponent_ng_template_0_div_7_div_14_Template, 20, 1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "ngb-accordion", 29)(16, "ngb-panel", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, VerManillaComponent_ng_template_0_div_7_ng_template_17_Template, 2, 0, "ng-template", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, VerManillaComponent_ng_template_0_div_7_ng_template_18_Template, 25, 12, "ng-template", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r4.manilla.foto_portador);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r4.manilla.foto_portador);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r4.fieldsList);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r4.manilla.qrCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("closeOthers", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx_r4.manilla == null ? null : ctx_r4.manilla.entradas == null ? null : ctx_r4.manilla.entradas.length) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("closeOthers", true);
  }
}
function VerManillaComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 2)(1, "div", 3)(2, "h5", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Informacion de la Pulsera");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function VerManillaComponent_ng_template_0_Template_button_click_4_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r35);
      const modal_r2 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](modal_r2.dismiss("Cross click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, VerManillaComponent_ng_template_0_div_5_Template, 4, 0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, VerManillaComponent_ng_template_0_div_7_Template, 19, 7, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 9)(9, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function VerManillaComponent_ng_template_0_Template_button_click_9_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r35);
      const modal_r2 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](modal_r2.dismiss("Cross click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Cerrar");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r1.loading);
  }
}
class VerManillaComponent {
  constructor(platformId, router, modalService, _formBuilder, _userService, _changeDetectorRef, gallery, lightbox) {
    this.platformId = platformId;
    this.router = router;
    this.modalService = modalService;
    this._formBuilder = _formBuilder;
    this._userService = _userService;
    this._changeDetectorRef = _changeDetectorRef;
    this.gallery = gallery;
    this.lightbox = lightbox;
    this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
    this.modalOpen = false;
    this.manilla = {};
    this.loading = true;
    this.fieldsList = [];
    this.showIcons = {};
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
  }
  ngOnInit() {
    this._userService.manillaSelected$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this._unsubscribeAll)).subscribe(manilla => {
      this.loading = true;
      // Update the manilla list
      if (manilla !== null && manilla.vista === 'ver') {
        this.getManillaById(manilla.numid);
      }
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
    if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_5__.isPlatformBrowser)(this.platformId)) {
      // For SSR 
      this.modalService.open(this.ModalVerManilla, {
        size: 'lg',
        ariaLabelledBy: 'modal-basic-title',
        centered: true,
        windowClass: 'ModalVerManilla',
        scrollable: true
      }).result.then(result => {
        `Result ${result}`;
      }, reason => {});
    }
    // Mark for check
    this._changeDetectorRef.markForCheck();
  }
  getManillaById(id) {
    this._userService.getManillaById(id).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this._unsubscribeAll)).subscribe(response => {
      if (response.foto_portador) {
        this.items = [new ng_gallery__WEBPACK_IMPORTED_MODULE_6__.ImageItem({
          src: response.foto_portador,
          thumb: response.foto_portador
        })];
        // this.items = [new ImageItem({ src: this.imagenTemp, thumb: this.imagenTemp })];
        const lightboxRef = this.gallery.ref('lightbox');
        // Add custom gallery config to the lightbox (optional)
        lightboxRef.setConfig({
          imageSize: ng_gallery__WEBPACK_IMPORTED_MODULE_6__.ImageSize.Cover,
          thumbPosition: ng_gallery__WEBPACK_IMPORTED_MODULE_6__.ThumbnailsPosition.Top
        });
        // Load items into the lightbox gallery ref
        lightboxRef.load(this.items);
      }
      this.manilla = response;
      if (response.tipo === 'Mascota') {
        this.manilla.fecha_nacimiento_mascota = this.orderDate(response.fecha_nacimiento_mascota);
      }
      this.getFieldsByType(response.tipo);
    }, error => {
      this.Toast.fire({
        icon: 'error',
        title: error.error.message
      });
    });
  }
  orderDate(fieldDate) {
    let date = {};
    if (fieldDate !== '') {
      let fecha = fieldDate;
      fecha = fecha.substring(0, 10).split('-');
      fecha = fecha[1] + '-' + fecha[2] + '-' + fecha[0];
      date = new Date(fecha);
    }
    return date;
  }
  getFieldsByType(type) {
    this._userService.getFieldsByUserTypes(type).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this._unsubscribeAll)).subscribe(response => {
      this.fieldsList = response;
      this.loading = false;
    }, error => {
      console.log(error);
    });
  }
  submit() {}
  cambiarEstado(index) {
    if (this.showIcons['campo' + index]) {
      console.log("object");
      this.showIcons['campo' + index] = false;
    } else {
      console.log("2");
      this.showIcons['campo' + index] = true;
    }
    this._changeDetectorRef.markForCheck();
  }
}
VerManillaComponent.ɵfac = function VerManillaComponent_Factory(t) {
  return new (t || VerManillaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_user_user_service__WEBPACK_IMPORTED_MODULE_1__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ng_gallery__WEBPACK_IMPORTED_MODULE_6__.Gallery), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ng_gallery_lightbox__WEBPACK_IMPORTED_MODULE_10__.Lightbox));
};
VerManillaComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: VerManillaComponent,
  selectors: [["app-ver-manilla"]],
  viewQuery: function VerManillaComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.ModalVerManilla = _t.first);
    }
  },
  decls: 2,
  vars: 0,
  consts: [["class", "theme-modal"], ["modaVerManilla", ""], [1, "modal-content", "quick-view-modal"], [1, "modal-header"], ["id", "modalSolicitarManillaTitulo", 1, "modal-title", "f-w-600"], ["type", "button", "aria-label", "Close", 1, "btn-close", 3, "click"], ["class", "d-flex justify-content-center mb-4 mt-4", 4, "ngIf"], [1, "modal-body"], ["class", "informacion-manilla", 4, "ngIf"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-secondary", 3, "click"], [1, "d-flex", "justify-content-center", "mb-4", "mt-4"], ["role", "status", 1, "spinner-border"], [1, "visually-hidden"], [1, "informacion-manilla"], [1, "dashboard-right"], [1, "dashboard"], [1, "box-account", "box-info"], [1, "contenedor-perfil-image"], ["class", "image-perfil", "alt", "", 3, "src", "click", 4, "ngIf"], ["class", "no-image-perfil", 4, "ngIf"], [1, "row"], [4, "ngFor", "ngForOf"], ["class", "col-sm-6", 4, "ngIf"], ["id", "accordion-orden", 1, "accordion", "theme-accordion", "pulsera-accordion-documentos", "col-sm-12", 3, "closeOthers"], ["id", "orden-status"], ["ngbPanelHeader", ""], ["ngbPanelContent", ""], ["class", "col-sm-12", 4, "ngIf"], ["id", "accordion-orden", 1, "accordion", "theme-accordion", "pulsera-accordion", 3, "closeOthers"], ["alt", "", 1, "image-perfil", 3, "src", "click"], [1, "no-image-perfil"], [1, "col-sm-6"], [1, "box"], [1, "box-title"], [1, "box-content", "informacion-manilla-label"], [1, "nombre-contacto"], ["target", "_blank", 3, "href"], ["ngbPanelToggle", "", 1, "accordion-button", "boton-rastreo"], [1, "list-group"], ["class", "list-group-item", 4, "ngIf"], [1, "list-group-item"], ["target", "_blank", 1, "text-secondary", 3, "href"], ["aria-hidden", "true", 1, "fa", "fa-file"], [1, "col-sm-12"], ["id", "entradas-pulsera", 1, "category-table", "custom-datatable"], [1, "table-responsive"], [1, "table", "table-striped"], ["scope", "col"], ["scope", "row"], ["data-bs-toggle", "collapse", "role", "button", "aria-expanded", "false", 3, "href", "click"], ["class", "fa fa-chevron-down f-12", 4, "ngIf"], ["class", "fa fa-chevron-up f-12", 4, "ngIf"], [1, "collapse", 3, "id"], ["colspan", "6", 2, "text-align", "justify"], [1, "fa", "fa-chevron-down", "f-12"], [1, "fa", "fa-chevron-up", "f-12"], [1, "container"], [1, "card"], [1, "card-body"], [1, "track"], [1, "step", 3, "ngClass"], [1, "icon"], [1, "fa", "fa-check"], [1, "text"], [1, "fa", "fa-industry"], [1, "fa", "fa-truck"], [1, "fa", "fa-home"]],
  template: function VerManillaComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, VerManillaComponent_ng_template_0_Template, 11, 2, "ng-template", 0, 1, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbAccordion, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbPanel, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbPanelContent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbPanelHeader, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbPanelToggle, _angular_common__WEBPACK_IMPORTED_MODULE_5__.TitleCasePipe, _angular_common__WEBPACK_IMPORTED_MODULE_5__.DatePipe, ngx_mask__WEBPACK_IMPORTED_MODULE_11__.NgxMaskPipe],
  styles: [".error-password-form[_ngcontent-%COMP%] {\n  color: red;\n  margin-top: 5px;\n  font-size: 12px;\n}\n\n.informacion-manilla[_ngcontent-%COMP%] {\n  padding-right: 20px;\n  padding-left: 20px;\n  padding-bottom: 20px;\n}\n.informacion-manilla[_ngcontent-%COMP%]   .informacion-manilla-label[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}\n\n.contenedor-perfil-image[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-top: 10px;\n  width: 140px;\n  height: 140px;\n  border-radius: 50%;\n  overflow: hidden;\n}\n.contenedor-perfil-image[_ngcontent-%COMP%]   .image-perfil[_ngcontent-%COMP%] {\n  object-fit: cover;\n  width: 100%;\n  height: 100%;\n}\n.contenedor-perfil-image[_ngcontent-%COMP%]   .no-image-perfil[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  background-color: rgb(188, 188, 188);\n  color: rgb(78, 78, 78);\n  font-weight: bold;\n  font-size: 70px;\n}\n\n.pulsera-accordion[_ngcontent-%COMP%] {\n  margin-right: 20px;\n  margin-left: 20px;\n}\n.pulsera-accordion[_ngcontent-%COMP%]   .boton-rastreo[_ngcontent-%COMP%] {\n  font-weight: bolder;\n}\n\n.pulsera-accordion-documentos[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n.pulsera-accordion-documentos[_ngcontent-%COMP%]   .boton-rastreo[_ngcontent-%COMP%] {\n  font-weight: bolder;\n}\n\n.card[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n  word-wrap: break-word;\n  background-color: #fff;\n  background-clip: border-box;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  border-radius: 0.1rem;\n  margin-bottom: 0px !important;\n}\n.card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  padding: 10px !important;\n}\n\n.card-header[_ngcontent-%COMP%]:first-child {\n  border-radius: calc(0.37rem - 1px) calc(0.37rem - 1px) 0 0;\n}\n\n.card-header[_ngcontent-%COMP%] {\n  padding: 0.75rem 1.25rem;\n  margin-bottom: 0;\n  background-color: #fff;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n}\n\n.track[_ngcontent-%COMP%] {\n  position: relative;\n  background-color: #ddd;\n  height: 7px;\n  display: flex;\n  margin-bottom: 60px;\n  margin-top: 50px;\n}\n\n.track[_ngcontent-%COMP%]   .step[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  width: 25%;\n  margin-top: -18px;\n  text-align: center;\n  position: relative;\n}\n\n.track[_ngcontent-%COMP%]   .step.active[_ngcontent-%COMP%]:before {\n  background: var(--theme-gradient1);\n}\n\n.track[_ngcontent-%COMP%]   .step[_ngcontent-%COMP%]::before {\n  height: 7px;\n  position: absolute;\n  content: \"\";\n  width: 100%;\n  left: 0;\n  top: 18px;\n}\n\n.track[_ngcontent-%COMP%]   .step.active[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  background: var(--theme-gradient1);\n  color: #fff;\n}\n\n.track[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 40px;\n  height: 40px;\n  line-height: 40px;\n  position: relative;\n  border-radius: 100%;\n  background: #ddd;\n}\n\n.track[_ngcontent-%COMP%]   .step.active[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  font-weight: 400;\n  color: #000;\n}\n\n.track[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 7px;\n}\n\n.documentsList[_ngcontent-%COMP%]   .file_manager[_ngcontent-%COMP%]   .file[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   .hover[_ngcontent-%COMP%], .documentsList[_ngcontent-%COMP%]   .file_manager[_ngcontent-%COMP%]   .file[_ngcontent-%COMP%]   .file-name[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  display: block;\n}\n.documentsList[_ngcontent-%COMP%]   .file_manager[_ngcontent-%COMP%]   .file[_ngcontent-%COMP%] {\n  padding: 0 !important;\n}\n.documentsList[_ngcontent-%COMP%]   .file_manager[_ngcontent-%COMP%]   .file[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.documentsList[_ngcontent-%COMP%]   .file_manager[_ngcontent-%COMP%]   .file[_ngcontent-%COMP%] {\n  position: relative;\n  border-radius: 0.55rem;\n  overflow: hidden;\n}\n.documentsList[_ngcontent-%COMP%]   .file_manager[_ngcontent-%COMP%]   .file[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%], .documentsList[_ngcontent-%COMP%]   .file_manager[_ngcontent-%COMP%]   .file[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  max-height: 180px;\n  overflow: hidden;\n  background-size: cover;\n  background-position: top;\n}\n.documentsList[_ngcontent-%COMP%]   .file_manager[_ngcontent-%COMP%]   .file[_ngcontent-%COMP%]   .hover[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 10px;\n  top: 10px;\n  display: none;\n  transition: all 0.2s ease-in-out;\n}\n.documentsList[_ngcontent-%COMP%]   .file_manager[_ngcontent-%COMP%]   .file[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   .hover[_ngcontent-%COMP%] {\n  transition: all 0.2s ease-in-out;\n}\n.documentsList[_ngcontent-%COMP%]   .file_manager[_ngcontent-%COMP%]   .file[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  padding: 15px 10px;\n  display: table;\n  width: 100%;\n}\n.documentsList[_ngcontent-%COMP%]   .file_manager[_ngcontent-%COMP%]   .file[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  display: table-cell;\n  font-size: 30px;\n  vertical-align: middle;\n  color: #777;\n  line-height: 100px;\n}\n.documentsList[_ngcontent-%COMP%]   .file_manager[_ngcontent-%COMP%]   .file[_ngcontent-%COMP%]   .file-name[_ngcontent-%COMP%] {\n  padding: 10px;\n  border-top: 1px solid #f7f7f7;\n}\n.documentsList[_ngcontent-%COMP%]   .file_manager[_ngcontent-%COMP%]   .file[_ngcontent-%COMP%]   .file-name[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%] {\n  float: right;\n}\n.documentsList[_ngcontent-%COMP%]   .folder[_ngcontent-%COMP%] {\n  padding: 20px;\n  display: block;\n  color: #777;\n}\n@media only screen and (max-width: 992px) {\n  .documentsList[_ngcontent-%COMP%]   .file_manager[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%] {\n    padding-left: 0;\n    padding-right: 0;\n  }\n  .documentsList[_ngcontent-%COMP%]   .file_manager[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%] {\n    display: inline-block;\n  }\n}\n.documentsList[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  background: #fff;\n  transition: 0.5s;\n  border: 0;\n  margin-bottom: 30px;\n  border-radius: 0.55rem;\n  position: relative;\n  width: 100%;\n  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);\n}\n.documentsList[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdXNlci9tYW5pbGxhcy92ZXItbWFuaWxsYS92ZXItbWFuaWxsYS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0FBQ0Y7QUFFSTtFQUNFLGlCQUFBO0FBQU47O0FBS0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUZGO0FBSUU7RUFDRSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBRko7QUFLRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLG9DQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFISjs7QUFPQTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7QUFKSjtBQUtJO0VBQ0ksbUJBQUE7QUFIUjs7QUFPQTtFQUdFLGdCQUFBO0FBTkY7QUFPSTtFQUNJLG1CQUFBO0FBTFI7O0FBVUE7RUFDRSxrQkFBQTtFQUdBLGFBQUE7RUFJQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSxvQ0FBQTtFQUNBLHFCQUFBO0VBQ0EsNkJBQUE7QUFQRjtBQVFFO0VBQ0Usd0JBQUE7QUFOSjs7QUFTQTtFQUNFLDBEQUFBO0FBTkY7O0FBUUE7RUFDRSx3QkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQ0FBQTtBQUxGOztBQU9BO0VBQ0Usa0JBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFHQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQUpGOztBQU1BO0VBR0UsWUFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFIRjs7QUFLQTtFQUNFLGtDQUFBO0FBRkY7O0FBSUE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0FBREY7O0FBR0E7RUFDRSxrQ0FBQTtFQUNBLFdBQUE7QUFBRjs7QUFFQTtFQUNFLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUNBO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0FBRUY7O0FBQUE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtBQUdGOztBQUVFOztFQUVJLGNBQUE7QUFDTjtBQUNFO0VBQ0kscUJBQUE7QUFDTjtBQUVFO0VBQ0ksa0JBQUE7QUFBTjtBQUlFO0VBQ0ksa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FBRk47QUFLRTs7RUFFSSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSx3QkFBQTtBQUhOO0FBTUU7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtFQUNBLGdDQUFBO0FBSk47QUFPRTtFQUNJLGdDQUFBO0FBTE47QUFRRTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7QUFOTjtBQVNFO0VBQ0ksbUJBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFQTjtBQVVFO0VBQ0ksYUFBQTtFQUNBLDZCQUFBO0FBUk47QUFXRTtFQUNJLFlBQUE7QUFUTjtBQVlFO0VBQ0ksYUFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FBVk47QUFhRTtFQUNJO0lBQ0ksZUFBQTtJQUNBLGdCQUFBO0VBWFI7RUFhSTtJQUNJLHFCQUFBO0VBWFI7QUFDRjtBQWNFO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsMENBQUE7QUFaTjtBQWVFO0VBQ0kscUJBQUE7QUFiTiIsInNvdXJjZXNDb250ZW50IjpbIi5lcnJvci1wYXNzd29yZC1mb3JtIHtcclxuICBjb2xvcjogcmVkO1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbi5pbmZvcm1hY2lvbi1tYW5pbGxhIHtcclxuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG4gIHBhZGRpbmctbGVmdDogMjBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxuXHJcbiAgLmluZm9ybWFjaW9uLW1hbmlsbGEtbGFiZWwge1xyXG4gICAgaDYge1xyXG4gICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5jb250ZW5lZG9yLXBlcmZpbC1pbWFnZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgd2lkdGg6IDE0MHB4O1xyXG4gIGhlaWdodDogMTQwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcblxyXG4gIC5pbWFnZS1wZXJmaWwge1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICB9XHJcblxyXG4gIC5uby1pbWFnZS1wZXJmaWwge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxODgsIDE4OCwgMTg4KTtcclxuICAgIGNvbG9yOiByZ2IoNzgsIDc4LCA3OCk7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogNzBweDtcclxuICB9XHJcbn1cclxuXHJcbi5wdWxzZXJhLWFjY29yZGlvbntcclxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgLmJvdG9uLXJhc3RyZW97XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICAgIH1cclxufVxyXG5cclxuLnB1bHNlcmEtYWNjb3JkaW9uLWRvY3VtZW50b3N7XHJcbiAgLy8gbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gIC8vIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAuYm90b24tcmFzdHJlb3tcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgfVxyXG59XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi5jYXJkIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xyXG4gIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xyXG4gIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgbWluLXdpZHRoOiAwO1xyXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIGJhY2tncm91bmQtY2xpcDogYm9yZGVyLWJveDtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgYm9yZGVyLXJhZGl1czogMC4xcmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDBweCAhaW1wb3J0YW50O1xyXG4gIC5jYXJkLWJvZHl7XHJcbiAgICBwYWRkaW5nOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcbi5jYXJkLWhlYWRlcjpmaXJzdC1jaGlsZCB7XHJcbiAgYm9yZGVyLXJhZGl1czogY2FsYygwLjM3cmVtIC0gMXB4KSBjYWxjKDAuMzdyZW0gLSAxcHgpIDAgMDtcclxufVxyXG4uY2FyZC1oZWFkZXIge1xyXG4gIHBhZGRpbmc6IDAuNzVyZW0gMS4yNXJlbTtcclxuICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcclxufVxyXG4udHJhY2sge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xyXG4gIGhlaWdodDogN3B4O1xyXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNjBweDtcclxuICBtYXJnaW4tdG9wOiA1MHB4O1xyXG59XHJcbi50cmFjayAuc3RlcCB7XHJcbiAgLXdlYmtpdC1ib3gtZmxleDogMTtcclxuICAtbXMtZmxleC1wb3NpdGl2ZTogMTtcclxuICBmbGV4LWdyb3c6IDE7XHJcbiAgd2lkdGg6IDI1JTtcclxuICBtYXJnaW4tdG9wOiAtMThweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi50cmFjayAuc3RlcC5hY3RpdmU6YmVmb3JlIHtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS10aGVtZS1ncmFkaWVudDEpO1xyXG59XHJcbi50cmFjayAuc3RlcDo6YmVmb3JlIHtcclxuICBoZWlnaHQ6IDdweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgY29udGVudDogXCJcIjtcclxuICB3aWR0aDogMTAwJTtcclxuICBsZWZ0OiAwO1xyXG4gIHRvcDogMThweDtcclxufVxyXG4udHJhY2sgLnN0ZXAuYWN0aXZlIC5pY29uIHtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS10aGVtZS1ncmFkaWVudDEpO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcbi50cmFjayAuaWNvbiB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHdpZHRoOiA0MHB4O1xyXG4gIGhlaWdodDogNDBweDtcclxuICBsaW5lLWhlaWdodDogNDBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICBiYWNrZ3JvdW5kOiAjZGRkO1xyXG59XHJcbi50cmFjayAuc3RlcC5hY3RpdmUgLnRleHQge1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgY29sb3I6ICMwMDA7XHJcbn1cclxuLnRyYWNrIC50ZXh0IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW4tdG9wOiA3cHg7XHJcbn1cclxuXHJcblxyXG4uZG9jdW1lbnRzTGlzdHtcclxuICAuZmlsZV9tYW5hZ2VyIC5maWxlIGE6aG92ZXIgLmhvdmVyLFxyXG4gIC5maWxlX21hbmFnZXIgLmZpbGUgLmZpbGUtbmFtZSBzbWFsbHtcclxuICAgICAgZGlzcGxheTogYmxvY2tcclxuICB9XHJcbiAgLmZpbGVfbWFuYWdlciAuZmlsZSB7XHJcbiAgICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudFxyXG4gIH1cclxuXHJcbiAgLmZpbGVfbWFuYWdlciAuZmlsZSAuaWNvbntcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyXHJcbiAgfVxyXG5cclxuXHJcbiAgLmZpbGVfbWFuYWdlciAuZmlsZSB7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogLjU1cmVtO1xyXG4gICAgICBvdmVyZmxvdzogaGlkZGVuXHJcbiAgfVxyXG5cclxuICAuZmlsZV9tYW5hZ2VyIC5maWxlIC5pbWFnZSxcclxuICAuZmlsZV9tYW5hZ2VyIC5maWxlIC5pY29uIHtcclxuICAgICAgbWF4LWhlaWdodDogMTgwcHg7XHJcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IHRvcFxyXG4gIH1cclxuXHJcbiAgLmZpbGVfbWFuYWdlciAuZmlsZSAuaG92ZXIge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHJpZ2h0OiAxMHB4O1xyXG4gICAgICB0b3A6IDEwcHg7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0XHJcbiAgfVxyXG5cclxuICAuZmlsZV9tYW5hZ2VyIC5maWxlIGE6aG92ZXIgLmhvdmVyIHtcclxuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXRcclxuICB9XHJcblxyXG4gIC5maWxlX21hbmFnZXIgLmZpbGUgLmljb24ge1xyXG4gICAgICBwYWRkaW5nOiAxNXB4IDEwcHg7XHJcbiAgICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgICB3aWR0aDogMTAwJVxyXG4gIH1cclxuXHJcbiAgLmZpbGVfbWFuYWdlciAuZmlsZSAuaWNvbiBpIHtcclxuICAgICAgZGlzcGxheTogdGFibGUtY2VsbDtcclxuICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICBjb2xvcjogIzc3NztcclxuICAgICAgbGluZS1oZWlnaHQ6IDEwMHB4XHJcbiAgfVxyXG5cclxuICAuZmlsZV9tYW5hZ2VyIC5maWxlIC5maWxlLW5hbWUge1xyXG4gICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2Y3ZjdmN1xyXG4gIH1cclxuXHJcbiAgLmZpbGVfbWFuYWdlciAuZmlsZSAuZmlsZS1uYW1lIHNtYWxsIC5kYXRlIHtcclxuICAgICAgZmxvYXQ6IHJpZ2h0XHJcbiAgfVxyXG5cclxuICAuZm9sZGVyIHtcclxuICAgICAgcGFkZGluZzogMjBweDtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIGNvbG9yOiAjNzc3XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XHJcbiAgICAgIC5maWxlX21hbmFnZXIgLm5hdi10YWJzIHtcclxuICAgICAgICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDBcclxuICAgICAgfVxyXG4gICAgICAuZmlsZV9tYW5hZ2VyIC5uYXYtdGFicyAubmF2LWl0ZW0ge1xyXG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrXHJcbiAgICAgIH1cclxuICB9XHJcblxyXG4gIC5jYXJkIHtcclxuICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgdHJhbnNpdGlvbjogLjVzO1xyXG4gICAgICBib3JkZXI6IDA7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IC41NXJlbTtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgYm94LXNoYWRvdzogMCAxcHggMnB4IDAgcmdiKDAgMCAwIC8gMTAlKTtcclxuICB9XHJcblxyXG4gIGE6aG92ZXIge1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246bm9uZTtcclxuICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});


/***/ }),

/***/ 16280:
/*!*********************************************!*\
  !*** ./src/app/user/user-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserRoutingModule: () => (/* binding */ UserRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _dashboard_dashboard_user_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard/dashboard-user.component */ 94969);
/* harmony import */ var _manillas_manillas_user_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./manillas/manillas-user.component */ 40553);
/* harmony import */ var _core_user_user_resolver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/user/user.resolver */ 22651);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 61699);






const routes = [{
  path: 'dashboard',
  component: _dashboard_dashboard_user_component__WEBPACK_IMPORTED_MODULE_0__.DashboardUserComponent
}, {
  path: 'manillas',
  component: _manillas_manillas_user_component__WEBPACK_IMPORTED_MODULE_1__.ManillasUserComponent,
  resolve: {
    manillas: _core_user_user_resolver__WEBPACK_IMPORTED_MODULE_2__.UserManillasResolver,
    types: _core_user_user_resolver__WEBPACK_IMPORTED_MODULE_2__.UserTypesResolver
  }
}];
class UserRoutingModule {}
UserRoutingModule.ɵfac = function UserRoutingModule_Factory(t) {
  return new (t || UserRoutingModule)();
};
UserRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: UserRoutingModule
});
UserRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](UserRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
  });
})();

/***/ }),

/***/ 30090:
/*!*************************************!*\
  !*** ./src/app/user/user.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserModule: () => (/* binding */ UserModule)
/* harmony export */ });
/* harmony import */ var _dashboard_dashboard_user_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard/dashboard-user.component */ 94969);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var ng_gallery__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-gallery */ 60977);
/* harmony import */ var ng_gallery_lightbox__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-gallery/lightbox */ 23050);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/shared.module */ 56208);
/* harmony import */ var _user_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-routing.module */ 16280);
/* harmony import */ var _manillas_manillas_user_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./manillas/manillas-user.component */ 40553);
/* harmony import */ var _dashboard_modal_contrasenia_modal_contrasenia_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard/modal-contrasenia/modal-contrasenia.component */ 35504);
/* harmony import */ var _manillas_ver_manilla_ver_manilla_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./manillas/ver-manilla/ver-manilla.component */ 85668);
/* harmony import */ var ngx_autosize__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-autosize */ 8099);
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-mask */ 97728);
/* harmony import */ var _manillas_editar_manilla_editar_manilla_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./manillas/editar-manilla/editar-manilla.component */ 82939);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 61699);













class UserModule {}
UserModule.ɵfac = function UserModule_Factory(t) {
  return new (t || UserModule)();
};
UserModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
  type: UserModule
});
UserModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
  providers: [(0,ngx_mask__WEBPACK_IMPORTED_MODULE_8__.provideNgxMask)()],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, ng_gallery__WEBPACK_IMPORTED_MODULE_10__.GalleryModule, ng_gallery_lightbox__WEBPACK_IMPORTED_MODULE_11__.LightboxModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule, _user_routing_module__WEBPACK_IMPORTED_MODULE_2__.UserRoutingModule, ngx_autosize__WEBPACK_IMPORTED_MODULE_12__.AutosizeModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](UserModule, {
    declarations: [_dashboard_dashboard_user_component__WEBPACK_IMPORTED_MODULE_0__.DashboardUserComponent, _manillas_manillas_user_component__WEBPACK_IMPORTED_MODULE_3__.ManillasUserComponent, _dashboard_modal_contrasenia_modal_contrasenia_component__WEBPACK_IMPORTED_MODULE_4__.ModalContraseniaComponent, _manillas_ver_manilla_ver_manilla_component__WEBPACK_IMPORTED_MODULE_5__.VerManillaComponent, _manillas_editar_manilla_editar_manilla_component__WEBPACK_IMPORTED_MODULE_6__.EditarManillaComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, ng_gallery__WEBPACK_IMPORTED_MODULE_10__.GalleryModule, ng_gallery_lightbox__WEBPACK_IMPORTED_MODULE_11__.LightboxModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule, _user_routing_module__WEBPACK_IMPORTED_MODULE_2__.UserRoutingModule, ngx_autosize__WEBPACK_IMPORTED_MODULE_12__.AutosizeModule, ngx_mask__WEBPACK_IMPORTED_MODULE_8__.NgxMaskDirective, ngx_mask__WEBPACK_IMPORTED_MODULE_8__.NgxMaskPipe]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_user_user_module_ts.js.map