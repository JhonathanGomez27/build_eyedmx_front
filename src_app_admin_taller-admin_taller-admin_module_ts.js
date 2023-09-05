"use strict";
(self["webpackChunkmultikart"] = self["webpackChunkmultikart"] || []).push([["src_app_admin_taller-admin_taller-admin_module_ts"],{

/***/ 70063:
/*!**********************************************************************************!*\
  !*** ./src/app/admin/taller-admin/modals/crear-taller/crear-taller.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CrearTallerAdminComponent: () => (/* binding */ CrearTallerAdminComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 72513);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 20274);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 20553);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ 27889);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 76101);
/* harmony import */ var src_app_core_user_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/user/user.service */ 58212);
/* harmony import */ var src_app_admin_admin_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/admin/admin.service */ 62048);













const _c0 = ["modalCreateTallerAdmin"];
const _c1 = ["tallerNgForm"];
function CrearTallerAdminComponent_ng_template_0_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " La Razon social (Nombre) es requerido ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function CrearTallerAdminComponent_ng_template_0_div_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Ingresa un correo electronico valido ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function CrearTallerAdminComponent_ng_template_0_div_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " El correo electronico es requerido ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function CrearTallerAdminComponent_ng_template_0_i_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "i", 41);
  }
}
function CrearTallerAdminComponent_ng_template_0_i_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "i", 42);
  }
}
function CrearTallerAdminComponent_ng_template_0_div_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " La contrase\u00F1a es requerida ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function CrearTallerAdminComponent_ng_template_0_div_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " La contrase\u00F1a no cuenta con la longitud minima(8). ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function CrearTallerAdminComponent_ng_template_0_div_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " La contrase\u00F1a debe contener al menos 1 numero. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function CrearTallerAdminComponent_ng_template_0_div_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " La contrase\u00F1a debe contener al menos 1 letra mayuscula. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function CrearTallerAdminComponent_ng_template_0_div_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " La contrase\u00F1a debe contener al menos 1 letra minuscula. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function CrearTallerAdminComponent_ng_template_0_div_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " La contrase\u00F1a debe contener al menos 1 caracter especial. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function CrearTallerAdminComponent_ng_template_0_div_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " El campo: Direccion es requerido ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function CrearTallerAdminComponent_ng_template_0_div_49_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " El campo: Telefono es requerido ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function CrearTallerAdminComponent_ng_template_0_div_50_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Ingrese un Telefono valido ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function CrearTallerAdminComponent_ng_template_0_span_58_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Crear taller");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function CrearTallerAdminComponent_ng_template_0_div_59_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 43)(1, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
function CrearTallerAdminComponent_ng_template_0_button_60_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CrearTallerAdminComponent_ng_template_0_button_60_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r24);
      const modal_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](modal_r2.dismiss("Cross click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Cerrar");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function CrearTallerAdminComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 2)(1, "div", 3)(2, "h5", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Crear taller");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CrearTallerAdminComponent_ng_template_0_Template_button_click_4_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r26);
      const modal_r2 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](modal_r2.dismiss("Cross click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 6)(6, "div", 7)(7, "div", 8)(8, "div", 9)(9, "div", 10)(10, "form", 11, 12)(12, "div", 13)(13, "div", 14)(14, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "Razon social (Nombre)");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](16, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](17, CrearTallerAdminComponent_ng_template_0_div_17_Template, 2, 0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "div", 14)(19, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "Correo electronico");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](21, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](22, CrearTallerAdminComponent_ng_template_0_div_22_Template, 2, 0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](23, CrearTallerAdminComponent_ng_template_0_div_23_Template, 2, 0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "div", 14)(25, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26, "Contrase\u00F1a");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](28, "input", 22, 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CrearTallerAdminComponent_ng_template_0_Template_span_click_30_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r26);
      const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](29);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](_r7.type === "password" ? _r7.type = "text" : _r7.type = "password");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](31, CrearTallerAdminComponent_ng_template_0_i_31_Template, 1, 0, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](32, CrearTallerAdminComponent_ng_template_0_i_32_Template, 1, 0, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](34, CrearTallerAdminComponent_ng_template_0_div_34_Template, 2, 0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](35, CrearTallerAdminComponent_ng_template_0_div_35_Template, 2, 0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](36, CrearTallerAdminComponent_ng_template_0_div_36_Template, 2, 0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](37, CrearTallerAdminComponent_ng_template_0_div_37_Template, 2, 0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](38, CrearTallerAdminComponent_ng_template_0_div_38_Template, 2, 0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](39, CrearTallerAdminComponent_ng_template_0_div_39_Template, 2, 0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "div", 14)(41, "label", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](42, "Direccion");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](43, "input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](44, CrearTallerAdminComponent_ng_template_0_div_44_Template, 2, 0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "div", 14)(46, "label", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](47, "Telefono");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](48, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](49, CrearTallerAdminComponent_ng_template_0_div_49_Template, 2, 0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](50, CrearTallerAdminComponent_ng_template_0_div_50_Template, 2, 0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "div", 32)(52, "label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](53, "Logo taller :");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](54, "input", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function CrearTallerAdminComponent_ng_template_0_Template_input_change_54_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r26);
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r28.onFileSelected($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](55, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](56, "div", 35)(57, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CrearTallerAdminComponent_ng_template_0_Template_button_click_57_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r26);
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r29.btnCreateTaller());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](58, CrearTallerAdminComponent_ng_template_0_span_58_Template, 2, 0, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](59, CrearTallerAdminComponent_ng_template_0_div_59_Template, 3, 0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](60, CrearTallerAdminComponent_ng_template_0_button_60_Template, 2, 0, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](29);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx_r1.tallerForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formControlName", "name");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.tallerForm.get("name").hasError("required") && ctx_r1.tallerForm.get("name").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formControlName", "email");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.tallerForm.get("email").hasError("email") && !ctx_r1.tallerForm.get("email").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r1.tallerForm.get("email").hasError("email") && ctx_r1.tallerForm.get("email").hasError("required") && ctx_r1.tallerForm.get("email").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formControlName", "password");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _r7.type === "password");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _r7.type === "text");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.tallerForm.get("password").hasError("required") && ctx_r1.tallerForm.get("password").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.tallerForm.get("password").hasError("minlength"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.tallerForm.get("password").hasError("hasNumber"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.tallerForm.get("password").hasError("hasCapitalCase"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.tallerForm.get("password").hasError("hasSmallCase"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.tallerForm.get("password").hasError("hasSpecialCharacters"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formControlName", "direccion");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.tallerForm.get("direccion").hasError("required") && ctx_r1.tallerForm.get("direccion").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formControlName", "telefono");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.tallerForm.get("telefono").hasError("required") && ctx_r1.tallerForm.get("telefono").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r1.tallerForm.get("telefono").hasError("required") && ctx_r1.tallerForm.get("telefono").invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formControlName", "fotoBase");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.acepting);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r1.acepting);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.acepting);
  }
}
class CrearTallerAdminComponent {
  constructor(platformId, router, modalService, _formBuilder, _userService, _changeDetectorRef, _adminService) {
    this.platformId = platformId;
    this.router = router;
    this.modalService = modalService;
    this._formBuilder = _formBuilder;
    this._userService = _userService;
    this._changeDetectorRef = _changeDetectorRef;
    this._adminService = _adminService;
    this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
    this.modalOpen = false;
    this.taller = {};
    this.loading = true;
    this.acepting = true;
    this.limit = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.pagination_limit;
    this.imageBase64 = '';
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
    this.tallerForm = this._formBuilder.group({
      name: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
      email: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.email]],
      password: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, CrearTallerAdminComponent.patternValidator(/\d/, {
        hasNumber: true
      }), CrearTallerAdminComponent.patternValidator(/[A-Z]/, {
        hasCapitalCase: true
      }), CrearTallerAdminComponent.patternValidator(/[a-z]/, {
        hasSmallCase: true
      }), CrearTallerAdminComponent.patternValidator(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/, {
        hasSpecialCharacters: true
      }), _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.minLength(8)])],
      direccion: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
      telefono: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern("[0-9]*")]],
      fotoBase: [""]
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
      this.modalService.open(this.ModalCreateTallerAdmin, {
        size: "lg",
        ariaLabelledBy: "modal-basic-title",
        centered: true,
        windowClass: "ModalCreateTallerAdmin",
        backdrop: "static",
        keyboard: false,
        scrollable: true
      }).result.then(result => {
        `Result ${result}`;
      }, reason => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
    }
  }
  getDismissReason(reason) {}
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
      };
    } else {
      this.Toast.fire({
        icon: "error",
        title: 'Debe subir un tipo de imagen valido (JPEG, JPG, PNG).'
      });
      this.tallerForm.get('fotoBase').setValue('');
      this.uploadedFiles = '';
    }
  }
  btnCreateTaller() {
    if (!this.tallerForm.disabled) {
      if (!this.tallerForm.valid) {
        this.Toast.fire({
          icon: "error",
          title: 'Debes rellenar todos los campos para crear un taller.'
        });
        // this.disableButton = true;
      } else {
        this.crearTaller();
      }
    }
    // Mark for check
    this._changeDetectorRef.markForCheck();
  }
  crearTaller() {
    this.acepting = false;
    // Do nothing if the form is invalid
    if (this.tallerForm.invalid) {
      return;
    }
    // Disable the form
    this.tallerForm.disable();
    let data = this.tallerForm.getRawValue();
    data.fotoBase64 = this.imageBase64;
    delete data.fotoBase;
    this._adminService.createTaller(data).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this._unsubscribeAll)).subscribe(response => {
      this.Toast.fire({
        icon: "success",
        title: "El taller ha sido creado y ya puede iniciar sesíon"
      });
      this.updateTalleresList();
    }, error => {
      this.Toast.fire({
        icon: "error",
        title: error.error.message
      });
      // enable the form
      this.tallerForm.enable();
    });
  }
  updateTalleresList() {
    this._adminService.getTalleresListUpdate(0, this.limit, null).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this._unsubscribeAll)).subscribe(response => {
      this._adminService.updateTalleresList(response);
      this.modalService.dismissAll();
    }, error => {
      this.Toast.fire({
        icon: "error",
        title: error.error.message
      });
    });
  }
  submit() {}
}
CrearTallerAdminComponent.ɵfac = function CrearTallerAdminComponent_Factory(t) {
  return new (t || CrearTallerAdminComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_user_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_admin_admin_service__WEBPACK_IMPORTED_MODULE_3__.AdminService));
};
CrearTallerAdminComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: CrearTallerAdminComponent,
  selectors: [["app-crear-taller-admin"]],
  viewQuery: function CrearTallerAdminComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c1, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.ModalCreateTallerAdmin = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.tallerNgForm = _t.first);
    }
  },
  inputs: {
    tipo: "tipo"
  },
  decls: 2,
  vars: 0,
  consts: [["class", "theme-modal"], ["modalCreateTallerAdmin", ""], [1, "modal-content", "quick-view-modal"], [1, "modal-header"], ["id", "modalSolicitarManillaTitulo", 1, "modal-title", "f-w-600"], ["type", "button", "aria-label", "Close", 1, "btn-close", 3, "click"], [1, "modal-body"], [1, "informacion-manilla"], [1, "dashboard-right"], [1, "dashboard"], [1, "box-account", "box-info"], ["novalidate", "", 1, "register-form-theme", "needs-validation", 3, "formGroup"], ["tallerNgForm", "ngForm"], [1, "row"], [1, "col-md-6", "mb-4"], ["for", "name"], ["id", "name", "placeholder", "Nombre completo", 1, "form-control", 3, "formControlName"], ["class", "error-login-form", 4, "ngIf"], ["for", "email"], ["id", "email", "placeholder", "Correo electronico", 1, "form-control", 3, "formControlName"], ["for", "password"], [1, "input-group"], ["type", "password", "id", "password", "placeholder", "Ingresa tu contrase\u00F1a", "autocomplete", "on", "aria-label", "password", "aria-describedby", "basic-addon1", 1, "form-control", 3, "formControlName"], ["passwordField", ""], ["id", "basic-addon1", 1, "input-group-text", 3, "click"], ["class", "fa fa-eye", "aria-hidden", "true", 4, "ngIf"], ["class", "fa fa-eye-slash", "aria-hidden", "true", 4, "ngIf"], [1, "border-bottom-login-form"], ["for", "direccion"], ["id", "direccion", "placeholder", "Direccion", 1, "form-control", 3, "formControlName"], ["for", "telefono"], ["type", "text", "id", "telefono", "placeholder", "Telefono", 1, "form-control", 3, "formControlName"], [1, "col-md-6", "mb-4", "taller-logo"], ["for", "logoTaller"], ["id", "logoTaller", "type", "file", 1, "form-control", 3, "formControlName", "change"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-primary", 3, "click"], [4, "ngIf"], ["class", "spinner-border", "role", "status", 4, "ngIf"], ["class", "btn btn-secondary", "type", "button", "data-dismiss", "modal", 3, "click", 4, "ngIf"], [1, "error-login-form"], ["aria-hidden", "true", 1, "fa", "fa-eye"], ["aria-hidden", "true", 1, "fa", "fa-eye-slash"], ["role", "status", 1, "spinner-border"], [1, "visually-hidden"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-secondary", 3, "click"]],
  template: function CrearTallerAdminComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, CrearTallerAdminComponent_ng_template_0_Template, 61, 24, "ng-template", 0, 1, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName],
  styles: [".error-login-form[_ngcontent-%COMP%] {\n  color: red;\n  margin-top: 5px;\n  font-size: 12px;\n}\n\n.informacion-manilla[_ngcontent-%COMP%] {\n  padding-right: 20px;\n  padding-left: 20px;\n  padding-bottom: 20px;\n}\n.informacion-manilla[_ngcontent-%COMP%]   .informacion-manilla-label[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}\n.informacion-manilla[_ngcontent-%COMP%]   .taller-logo[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding: 11px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYWRtaW4vdGFsbGVyLWFkbWluL21vZGFscy9jcmVhci10YWxsZXIvY3JlYXItdGFsbGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FBQ0o7O0FBRUE7RUFDSSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7QUFDSjtBQUVRO0VBQ0ksaUJBQUE7QUFBWjtBQUlJO0VBQ0ksYUFBQTtBQUZSIiwic291cmNlc0NvbnRlbnQiOlsiLmVycm9yLWxvZ2luLWZvcm17XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG4uaW5mb3JtYWNpb24tbWFuaWxsYXtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxuXHJcbiAgICAuaW5mb3JtYWNpb24tbWFuaWxsYS1sYWJlbHtcclxuICAgICAgICBoNntcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC50YWxsZXItbG9nbyBpbnB1dHtcclxuICAgICAgICBwYWRkaW5nOiAxMXB4O1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ }),

/***/ 55324:
/*!******************************************************************************!*\
  !*** ./src/app/admin/taller-admin/modals/ver-taller/ver-taller.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VerTallerAdminComponent: () => (/* binding */ VerTallerAdminComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var ng_gallery__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-gallery */ 60977);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 72513);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 20274);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 20553);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ 27889);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 76101);
/* harmony import */ var src_app_admin_admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/admin/admin.service */ 62048);
/* harmony import */ var ng_gallery_lightbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-gallery/lightbox */ 23050);












const _c0 = ["modalTallerAdmin"];
function VerTallerAdminComponent_ng_template_0_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 11)(1, "div", 12)(2, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
}
function VerTallerAdminComponent_ng_template_0_div_6_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 21)(1, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function VerTallerAdminComponent_ng_template_0_div_6_div_4_Template_img_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r15);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r14.lightbox.open(0));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx_r7.taller.fotoBase64, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
  }
}
function VerTallerAdminComponent_ng_template_0_div_6_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 23)(1, "div", 24)(2, "div", 25)(3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Razon social (Nombre)");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 26)(6, "h6", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r8.taller.name);
  }
}
function VerTallerAdminComponent_ng_template_0_div_6_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 23)(1, "div", 24)(2, "div", 25)(3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Correo electronico");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 26)(6, "h6", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r9.taller.email);
  }
}
function VerTallerAdminComponent_ng_template_0_div_6_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 23)(1, "div", 24)(2, "div", 25)(3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Telefono");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 26)(6, "h6", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r10.taller.telefono);
  }
}
function VerTallerAdminComponent_ng_template_0_div_6_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 23)(1, "div", 24)(2, "div", 25)(3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Direccion");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 26)(6, "h6", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r11.taller.direccion);
  }
}
function VerTallerAdminComponent_ng_template_0_div_6_div_10_span_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Aceptado");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function VerTallerAdminComponent_ng_template_0_div_6_div_10_span_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "En espera de aceptacion");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function VerTallerAdminComponent_ng_template_0_div_6_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 23)(1, "div", 24)(2, "div", 25)(3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Estado");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 26)(6, "h6", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, VerTallerAdminComponent_ng_template_0_div_6_div_10_span_7_Template, 2, 0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, VerTallerAdminComponent_ng_template_0_div_6_div_10_span_8_Template, 2, 0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r12.taller.aceptado);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r12.taller.aceptado);
  }
}
function VerTallerAdminComponent_ng_template_0_div_6_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 23)(1, "div", 24)(2, "div", 25)(3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Logo taller");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 26)(6, "h6", 27)(7, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Logo taller");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("href", ctx_r13.taller.fotoBase64, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
  }
}
function VerTallerAdminComponent_ng_template_0_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 14)(1, "div", 15)(2, "div", 16)(3, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, VerTallerAdminComponent_ng_template_0_div_6_div_4_Template, 2, 1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, VerTallerAdminComponent_ng_template_0_div_6_div_6_Template, 8, 1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, VerTallerAdminComponent_ng_template_0_div_6_div_7_Template, 8, 1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, VerTallerAdminComponent_ng_template_0_div_6_div_8_Template, 8, 1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, VerTallerAdminComponent_ng_template_0_div_6_div_9_Template, 8, 1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, VerTallerAdminComponent_ng_template_0_div_6_div_10_Template, 9, 2, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, VerTallerAdminComponent_ng_template_0_div_6_div_11_Template, 9, 1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r4.taller.fotoBase64);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r4.taller.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r4.taller.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r4.taller.telefono);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r4.taller.direccion);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r4.taller.aceptado);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r4.taller.fotoBase64);
  }
}
function VerTallerAdminComponent_ng_template_0_button_8_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Aceptar Solicitud");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function VerTallerAdminComponent_ng_template_0_button_8_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 12)(1, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function VerTallerAdminComponent_ng_template_0_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function VerTallerAdminComponent_ng_template_0_button_8_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r21);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r20.aceptarTallerById());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, VerTallerAdminComponent_ng_template_0_button_8_span_1_Template, 2, 0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, VerTallerAdminComponent_ng_template_0_button_8_div_2_Template, 3, 0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r5.acepting);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r5.acepting);
  }
}
function VerTallerAdminComponent_ng_template_0_button_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function VerTallerAdminComponent_ng_template_0_button_9_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r24);
      const modal_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](modal_r2.dismiss("Cross click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Cerrar");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function VerTallerAdminComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 2)(1, "div", 3)(2, "h5", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Informacion del taller");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function VerTallerAdminComponent_ng_template_0_Template_button_click_4_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r26);
      const modal_r2 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](modal_r2.dismiss("Cross click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, VerTallerAdminComponent_ng_template_0_div_5_Template, 4, 0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, VerTallerAdminComponent_ng_template_0_div_6_Template, 12, 7, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, VerTallerAdminComponent_ng_template_0_button_8_Template, 3, 2, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, VerTallerAdminComponent_ng_template_0_button_9_Template, 2, 0, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r1.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.tipo === "solicitudes" && !ctx_r1.taller.aceptado);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.acepting);
  }
}
class VerTallerAdminComponent {
  constructor(platformId, modalService, _changeDetectorRef, _adminService, gallery, lightbox) {
    this.platformId = platformId;
    this.modalService = modalService;
    this._changeDetectorRef = _changeDetectorRef;
    this._adminService = _adminService;
    this.gallery = gallery;
    this.lightbox = lightbox;
    this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
    this.modalOpen = false;
    this.taller = {};
    this.loading = true;
    this.acepting = true;
    this.limit = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.pagination_limit;
    this.imagenTemp = 'https://img.freepik.com/vector-premium/imagen-dibujos-animados-hongo-palabra-hongo_587001-200.jpg?w=2000';
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
    this._adminService.tallerSelected$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this._unsubscribeAll)).subscribe(taller => {
      this.loading = true;
      if (this.tipo === "solicitudes") {
        this.acepting = true;
      }
      // Update the manilla list
      if (taller !== null) {
        this.getTallerById(taller._id);
      }
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
    if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_6__.isPlatformBrowser)(this.platformId)) {
      // For SSR
      this.modalService.open(this.ModalTallerAdmin, {
        size: "lg",
        ariaLabelledBy: "modal-basic-title",
        centered: true,
        windowClass: "ModalTallerAdmin",
        backdrop: "static",
        keyboard: false,
        scrollable: true
      }).result.then(result => {
        `Result ${result}`;
      }, reason => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
    }
  }
  getDismissReason(reason) {}
  getTallerById(id) {
    this._adminService.getTallereById(id).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this._unsubscribeAll)).subscribe(response => {
      this.items = [new ng_gallery__WEBPACK_IMPORTED_MODULE_7__.ImageItem({
        src: response.fotoBase64,
        thumb: response.fotoBase64
      })];
      // this.items = [new ImageItem({ src: this.imagenTemp, thumb: this.imagenTemp })];
      const lightboxRef = this.gallery.ref('lightbox');
      // Add custom gallery config to the lightbox (optional)
      lightboxRef.setConfig({
        imageSize: ng_gallery__WEBPACK_IMPORTED_MODULE_7__.ImageSize.Cover,
        thumbPosition: ng_gallery__WEBPACK_IMPORTED_MODULE_7__.ThumbnailsPosition.Top
      });
      // Load items into the lightbox gallery ref
      lightboxRef.load(this.items);
      this.taller = response;
      this.loading = false;
    }, error => {
      this.Toast.fire({
        icon: "error",
        title: error.error.message
      });
    });
  }
  aceptarTallerById() {
    if (this.acepting) {
      this.acepting = false;
      this._adminService.aceptarTallerById(this.taller._id).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this._unsubscribeAll)).subscribe(response => {
        this.Toast.fire({
          icon: "success",
          title: "El taller ha sido aceptado y puede iniciar sesíon"
        });
        this.updateTalleresList();
      }, error => {
        this.Toast.fire({
          icon: "error",
          title: error.error.message
        });
        this.modalService.dismissAll();
      });
    }
  }
  updateTalleresList() {
    this._adminService.getTalleresListUpdate(0, this.limit, null).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this._unsubscribeAll)).subscribe(response => {
      this._adminService.updateTalleresSolicitudesList(response);
      this.modalService.dismissAll();
    }, error => {
      this.Toast.fire({
        icon: "error",
        title: error.error.message
      });
    });
  }
  submit() {}
}
VerTallerAdminComponent.ɵfac = function VerTallerAdminComponent_Factory(t) {
  return new (t || VerTallerAdminComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_admin_admin_service__WEBPACK_IMPORTED_MODULE_2__.AdminService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ng_gallery__WEBPACK_IMPORTED_MODULE_7__.Gallery), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ng_gallery_lightbox__WEBPACK_IMPORTED_MODULE_9__.Lightbox));
};
VerTallerAdminComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: VerTallerAdminComponent,
  selectors: [["app-ver-taller-admin"]],
  viewQuery: function VerTallerAdminComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.ModalTallerAdmin = _t.first);
    }
  },
  inputs: {
    tipo: "tipo"
  },
  decls: 2,
  vars: 0,
  consts: [["class", "theme-modal"], ["modalTallerAdmin", ""], [1, "modal-content", "quick-view-modal"], [1, "modal-header"], ["id", "modalSolicitarManillaTitulo", 1, "modal-title", "f-w-600"], ["type", "button", "aria-label", "Close", 1, "btn-close", 3, "click"], ["class", "d-flex justify-content-center mb-4 mt-4", 4, "ngIf"], ["class", "informacion-manilla modal-body", 4, "ngIf"], [1, "modal-footer"], ["class", "btn btn-primary", "type", "button", "data-dismiss", "modal", 3, "click", 4, "ngIf"], ["class", "btn btn-secondary", "type", "button", "data-dismiss", "modal", 3, "click", 4, "ngIf"], [1, "d-flex", "justify-content-center", "mb-4", "mt-4"], ["role", "status", 1, "spinner-border"], [1, "visually-hidden"], [1, "informacion-manilla", "modal-body"], [1, "dashboard-right"], [1, "dashboard"], [1, "box-account", "box-info"], ["class", "img-logo-taller", 4, "ngIf"], [1, "row"], ["class", "col-sm-6", 4, "ngIf"], [1, "img-logo-taller"], [3, "src", "click"], [1, "col-sm-6"], [1, "box"], [1, "box-title"], [1, "box-content", "informacion-manilla-label"], [1, "nombre-contacto"], [4, "ngIf"], ["target", "_blank", 3, "href"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-primary", 3, "click"], ["class", "spinner-border", "role", "status", 4, "ngIf"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-secondary", 3, "click"]],
  template: function VerTallerAdminComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, VerTallerAdminComponent_ng_template_0_Template, 10, 4, "ng-template", 0, 1, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf],
  styles: [".error-password-form[_ngcontent-%COMP%] {\n  color: red;\n  margin-top: 5px;\n  font-size: 12px;\n}\n\n.informacion-manilla[_ngcontent-%COMP%] {\n  padding-right: 20px;\n  padding-left: 20px;\n  padding-bottom: 20px;\n}\n.informacion-manilla[_ngcontent-%COMP%]   .informacion-manilla-label[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}\n.informacion-manilla[_ngcontent-%COMP%]   .img-logo-taller[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 20%;\n  border-radius: 50%;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYWRtaW4vdGFsbGVyLWFkbWluL21vZGFscy92ZXItdGFsbGVyL3Zlci10YWxsZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUFDSjs7QUFFQTtFQUNJLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtBQUNKO0FBRVE7RUFDSSxpQkFBQTtBQUFaO0FBS1E7RUFDSSxVQUFBO0VBQ0Esa0JBQUE7QUFIWiIsInNvdXJjZXNDb250ZW50IjpbIi5lcnJvci1wYXNzd29yZC1mb3Jte1xyXG4gICAgY29sb3I6IHJlZDtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5cclxuLmluZm9ybWFjaW9uLW1hbmlsbGF7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcblxyXG4gICAgLmluZm9ybWFjaW9uLW1hbmlsbGEtbGFiZWx7XHJcbiAgICAgICAgaDZ7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuaW1nLWxvZ28tdGFsbGVye1xyXG4gICAgICAgIGltZ3tcclxuICAgICAgICAgICAgd2lkdGg6IDIwJTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});


/***/ }),

/***/ 6501:
/*!*************************************************************************************!*\
  !*** ./src/app/admin/taller-admin/taller-admin-list/taller-admin-list.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TallerAdminListComponent: () => (/* binding */ TallerAdminListComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 72513);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 20274);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ 27889);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 20553);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var src_app_core_user_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/user/user.service */ 58212);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 76101);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _admin_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../admin.service */ 62048);
/* harmony import */ var _modals_ver_taller_ver_taller_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modals/ver-taller/ver-taller.component */ 55324);
/* harmony import */ var _modals_crear_taller_crear_taller_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../modals/crear-taller/crear-taller.component */ 70063);












const _c0 = ["verTallerModal"];
const _c1 = ["crearTallerModal"];
function TallerAdminListComponent_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", ctx_r0.talleresCount, " ");
  }
}
function TallerAdminListComponent_tr_50_i_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "i", 36);
  }
}
function TallerAdminListComponent_tr_50_i_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "i", 37);
  }
}
function TallerAdminListComponent_tr_50_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr")(1, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](10, TallerAdminListComponent_tr_50_i_10_Template, 1, 0, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](11, TallerAdminListComponent_tr_50_i_11_Template, 1, 0, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "td")(13, "a", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function TallerAdminListComponent_tr_50_Template_a_click_13_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r10);
      const taller_r5 = restoredCtx.$implicit;
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r9.abrirModalVerTaller(taller_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](14, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const taller_r5 = ctx.$implicit;
    const i_r6 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](i_r6 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](taller_r5.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](taller_r5.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](taller_r5.telefono);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", taller_r5.aceptado);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !taller_r5.aceptado);
  }
}
function TallerAdminListComponent_div_51_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 38)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "\u00A1No hay talleres para mostrar!");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
const _c2 = function () {
  return {
    "=0": "No hay talleres",
    "=1": "taller",
    "other": "talleres"
  };
};
class TallerAdminListComponent {
  constructor(_userService, _changeDetectorRef, modalService, _formBuilder, viewScroller, _adminService) {
    this._userService = _userService;
    this._changeDetectorRef = _changeDetectorRef;
    this.modalService = modalService;
    this._formBuilder = _formBuilder;
    this.viewScroller = viewScroller;
    this._adminService = _adminService;
    this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subject();
    this.talleresCount = 0;
    this.talleresList = [];
    this.page = 1;
    this.limit = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.pagination_limit;
    this.searchInputControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('');
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
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this._adminService.talleresList$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this._unsubscribeAll)).subscribe(talleres => {
      // Update the selected agente
      this.talleresList = talleres.talleres;
      this.talleresCount = talleres.totalDocuments;
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
  onPageChange(event) {
    if (this.searchInputControl.value !== '') {
      this.getTalleresPaginated((event - 1) * this.limit, this.searchInputControl.value);
    } else {
      this.getTalleresPaginated((event - 1) * this.limit, null);
    }
  }
  getTalleresPaginated(page, name) {
    this._adminService.getTalleresListUpdate(page, this.limit, name).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this._unsubscribeAll)).subscribe(response => {
      this._adminService.updateTalleresList(response);
    }, error => {
      this.Toast.fire({
        icon: 'error',
        title: error.error.message
      });
    });
  }
  abrirModalVerTaller(taller) {
    this._adminService.updateTallerSelected(taller);
    this.VerTallerModal.openModal();
  }
  abrirModalCrearTaller() {
    this.CrearTallerModal.openModal();
  }
  btnBuscarTallerPorNombre() {
    if (this.searchInputControl.value !== '') {
      this.getTalleresPaginated(0, this.searchInputControl.value);
    }
  }
  btnRefresh() {
    this.searchInputControl.setValue('');
    this.getTalleresPaginated(0, null);
  }
}
TallerAdminListComponent.ɵfac = function TallerAdminListComponent_Factory(t) {
  return new (t || TallerAdminListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_core_user_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_11__.ViewportScroller), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_admin_service__WEBPACK_IMPORTED_MODULE_3__.AdminService));
};
TallerAdminListComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: TallerAdminListComponent,
  selectors: [["app-taller-admin-list"]],
  viewQuery: function TallerAdminListComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c0, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c1, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.VerTallerModal = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.CrearTallerModal = _t.first);
    }
  },
  decls: 58,
  vars: 17,
  consts: [[1, "dashboard-right"], [1, "dashboard"], [1, "welcome-msg", "count-manillas"], [1, "nombre-msg"], [4, "ngIf"], [1, "container-fluid"], [1, "row"], [1, "col-sm-12"], [1, "card"], [1, "card-body"], [1, "row", "user-form-busqueda", "mb-4"], [1, "col-md-6"], ["for", "filtro-nombre", 1, "mb-2"], ["type", "text", "id", "filtro-nombre", "aria-label", "Filtro por nombre", 1, "form-control", 3, "formControl"], [1, "col-md-2"], [1, "mb-2"], ["type", "button", 1, "btn", "btn-secondary", "form-control", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-search"], ["aria-hidden", "true", 1, "fa", "fa-refresh"], ["aria-hidden", "true", 1, "fa", "fa-plus"], ["id", "batchDelete", 1, "category-table", "custom-datatable"], [1, "table-responsive"], [1, "table", "table-striped"], ["scope", "col"], [4, "ngFor", "ngForOf"], ["class", "d-flex justify-content-center mb-4 mt-4", 4, "ngIf"], [1, "d-flex", "justify-content-center", "p-2"], [3, "collectionSize", "rotate", "maxSize", "page", "pageSize", "boundaryLinks", "pageChange"], [3, "tipo"], ["verTallerModal", ""], ["crearTallerModal", ""], ["scope", "row"], ["class", "fa fa-circle font-success f-12", 4, "ngIf"], ["class", "fa fa-circle font-warning f-12", 4, "ngIf"], ["href", "javascript:void(0)", 3, "click"], [1, "fa", "fa-eye", "f-12"], [1, "fa", "fa-circle", "font-success", "f-12"], [1, "fa", "fa-circle", "font-warning", "f-12"], [1, "d-flex", "justify-content-center", "mb-4", "mt-4"]],
  template: function TallerAdminListComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "p", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, TallerAdminListComponent_ng_container_4_Template, 2, 1, "ng-container", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](6, "i18nPlural");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 5)(8, "div", 6)(9, "div", 7)(10, "div", 8)(11, "div", 9)(12, "div", 10)(13, "div", 11)(14, "label", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, "Filtro por nombre");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](16, "input", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "div", 14)(18, "label", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19, "\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "button", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function TallerAdminListComponent_Template_button_click_20_listener() {
        return ctx.btnBuscarTallerPorNombre();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](21, "i", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "div", 14)(23, "label", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](24, "\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "button", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function TallerAdminListComponent_Template_button_click_25_listener() {
        return ctx.btnRefresh();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](26, "i", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "div", 14)(28, "label", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](29, "\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "button", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function TallerAdminListComponent_Template_button_click_30_listener() {
        return ctx.abrirModalCrearTaller();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](31, "i", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "div", 20)(33, "div", 21)(34, "table", 22)(35, "thead")(36, "tr")(37, "th", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](38, "#");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](39, "th", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](40, "Nombre");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](41, "th", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](42, "Correo");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](43, "th", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](44, "Telefono");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](45, "th", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](46, "Estado");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](47, "th", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](48, "Acciones");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](49, "tbody");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](50, TallerAdminListComponent_tr_50_Template, 16, 6, "tr", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](51, TallerAdminListComponent_div_51_Template, 3, 0, "div", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](52, "div", 26)(53, "ngb-pagination", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("pageChange", function TallerAdminListComponent_Template_ngb_pagination_pageChange_53_listener($event) {
        return ctx.onPageChange($event);
      })("pageChange", function TallerAdminListComponent_Template_ngb_pagination_pageChange_53_listener($event) {
        return ctx.page = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](54, "app-ver-taller-admin", 28, 29)(56, "app-crear-taller-admin", 28, 30);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.talleresCount > 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](6, 13, ctx.talleresCount, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](16, _c2)), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formControl", ctx.searchInputControl);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](34);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.talleresList);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.talleresCount <= 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("collectionSize", ctx.talleresCount)("rotate", true)("maxSize", 5)("page", ctx.page)("pageSize", ctx.limit)("boundaryLinks", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("tipo", "list");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("tipo", "list");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlDirective, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbPagination, _modals_ver_taller_ver_taller_component__WEBPACK_IMPORTED_MODULE_4__.VerTallerAdminComponent, _modals_crear_taller_crear_taller_component__WEBPACK_IMPORTED_MODULE_5__.CrearTallerAdminComponent, _angular_common__WEBPACK_IMPORTED_MODULE_11__.I18nPluralPipe],
  styles: [".count-manillas[_ngcontent-%COMP%] {\n  margin-left: 12px;\n}\n\n.estado-manillas[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  padding: 11px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYWRtaW4vdGFsbGVyLWFkbWluL3RhbGxlci1hZG1pbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0FBQ0o7O0FBR0k7RUFDSSxhQUFBO0FBQVIiLCJzb3VyY2VzQ29udGVudCI6WyIuY291bnQtbWFuaWxsYXN7XHJcbiAgICBtYXJnaW4tbGVmdDogMTJweDtcclxufVxyXG5cclxuLmVzdGFkby1tYW5pbGxhc3tcclxuICAgIHNlbGVjdHtcclxuICAgICAgICBwYWRkaW5nOiAxMXB4O1xyXG4gICAgfVxyXG5cclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});


/***/ }),

/***/ 79390:
/*!*******************************************************************!*\
  !*** ./src/app/admin/taller-admin/taller-admin-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TallerAdminRoutingModule: () => (/* binding */ TallerAdminRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _admin_resolver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../admin.resolver */ 92386);
/* harmony import */ var _taller_admin_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taller-admin.component */ 26);
/* harmony import */ var _taller_admin_solicitudes_taller_admin_solicitudes_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./taller-admin-solicitudes/taller-admin-solicitudes.component */ 28705);
/* harmony import */ var _taller_admin_list_taller_admin_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./taller-admin-list/taller-admin-list.component */ 6501);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 61699);







const routes = [{
  path: '',
  component: _taller_admin_component__WEBPACK_IMPORTED_MODULE_1__.TallerAdminComponent,
  children: [{
    path: 'list',
    component: _taller_admin_list_taller_admin_list_component__WEBPACK_IMPORTED_MODULE_3__.TallerAdminListComponent,
    resolve: {
      talleres: _admin_resolver__WEBPACK_IMPORTED_MODULE_0__.AdminTallerListResolver
    },
    data: {
      title: "Talleres",
      breadcrumb: "Lista"
    }
  }, {
    path: 'solicitudes',
    component: _taller_admin_solicitudes_taller_admin_solicitudes_component__WEBPACK_IMPORTED_MODULE_2__.TallerAdminSolicitudesComponent,
    resolve: {
      talleres: _admin_resolver__WEBPACK_IMPORTED_MODULE_0__.AdminTallerSolicitudesListResolver
    },
    data: {
      title: "Talleres",
      breadcrumb: "Solicitudes"
    }
  }],
  data: {
    title: "Talleres",
    breadcrumb: "Talleres"
  }
  // resolve: {
  //   manillas: AdminManillasResolver
  // }
}];

class TallerAdminRoutingModule {}
TallerAdminRoutingModule.ɵfac = function TallerAdminRoutingModule_Factory(t) {
  return new (t || TallerAdminRoutingModule)();
};
TallerAdminRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
  type: TallerAdminRoutingModule
});
TallerAdminRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](TallerAdminRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
  });
})();

/***/ }),

/***/ 28705:
/*!***************************************************************************************************!*\
  !*** ./src/app/admin/taller-admin/taller-admin-solicitudes/taller-admin-solicitudes.component.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TallerAdminSolicitudesComponent: () => (/* binding */ TallerAdminSolicitudesComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 72513);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 20274);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ 27889);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 20553);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../admin.service */ 62048);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 76101);
/* harmony import */ var _modals_ver_taller_ver_taller_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modals/ver-taller/ver-taller.component */ 55324);








const _c0 = ["verTallerModal"];
function TallerAdminSolicitudesComponent_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", ctx_r0.talleresCount, " ");
  }
}
function TallerAdminSolicitudesComponent_tr_30_i_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "i", 25);
  }
}
function TallerAdminSolicitudesComponent_tr_30_i_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "i", 26);
  }
}
function TallerAdminSolicitudesComponent_tr_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, TallerAdminSolicitudesComponent_tr_30_i_10_Template, 1, 0, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, TallerAdminSolicitudesComponent_tr_30_i_11_Template, 1, 0, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "td")(13, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TallerAdminSolicitudesComponent_tr_30_Template_a_click_13_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r9);
      const taller_r4 = restoredCtx.$implicit;
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r8.abrirModalVerTaller(taller_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](14, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const taller_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](i_r5 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](taller_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](taller_r4.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](taller_r4.telefono);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", taller_r4.aceptado);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !taller_r4.aceptado);
  }
}
function TallerAdminSolicitudesComponent_div_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 27)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "\u00A1No hay talleres para mostrar!");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
const _c1 = function () {
  return {
    "=0": "No hay talleres",
    "=1": "taller",
    "other": "talleres"
  };
};
class TallerAdminSolicitudesComponent {
  constructor(_changeDetectorRef, _adminService) {
    this._changeDetectorRef = _changeDetectorRef;
    this._adminService = _adminService;
    this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
    this.talleresCount = 0;
    this.talleresList = [];
    this.page = 1;
    this.limit = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.pagination_limit;
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
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this._adminService.talleresSolicitudesList$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this._unsubscribeAll)).subscribe(talleres => {
      // Update the selected agente
      this.talleresList = talleres.talleres;
      this.talleresCount = talleres.totalDocuments;
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
  onPageChange(event) {
    this.getTalleresPaginated((event - 1) * this.limit, null);
  }
  getTalleresPaginated(page, name) {
    this._adminService.getTalleresSolicitudesList(page, this.limit, name).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this._unsubscribeAll)).subscribe(response => {
      this._adminService.updateTalleresSolicitudesList(response);
    }, error => {
      this.Toast.fire({
        icon: 'error',
        title: error.error.message
      });
    });
  }
  abrirModalVerTaller(taller) {
    this._adminService.updateTallerSelected(taller);
    this.VerTallerModal.openModal();
  }
}
TallerAdminSolicitudesComponent.ɵfac = function TallerAdminSolicitudesComponent_Factory(t) {
  return new (t || TallerAdminSolicitudesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_admin_service__WEBPACK_IMPORTED_MODULE_2__.AdminService));
};
TallerAdminSolicitudesComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: TallerAdminSolicitudesComponent,
  selectors: [["app-taller-admin-solicitudes"]],
  viewQuery: function TallerAdminSolicitudesComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.VerTallerModal = _t.first);
    }
  },
  decls: 36,
  vars: 15,
  consts: [[1, "dashboard-right"], [1, "dashboard"], [1, "welcome-msg", "count-manillas"], [1, "nombre-msg"], [4, "ngIf"], [1, "container-fluid"], [1, "row"], [1, "col-sm-12"], [1, "card"], [1, "card-body"], ["id", "batchDelete", 1, "category-table", "custom-datatable"], [1, "table-responsive"], [1, "table", "table-striped"], ["scope", "col"], [4, "ngFor", "ngForOf"], ["class", "d-flex justify-content-center mb-4 mt-4", 4, "ngIf"], [1, "d-flex", "justify-content-center", "p-2"], [3, "collectionSize", "rotate", "maxSize", "page", "pageSize", "boundaryLinks", "pageChange"], [3, "tipo"], ["verTallerModal", ""], ["scope", "row"], ["class", "fa fa-circle font-success f-12", 4, "ngIf"], ["class", "fa fa-circle font-warning f-12", 4, "ngIf"], ["href", "javascript:void(0)", 3, "click"], [1, "fa", "fa-eye", "f-12"], [1, "fa", "fa-circle", "font-success", "f-12"], [1, "fa", "fa-circle", "font-warning", "f-12"], [1, "d-flex", "justify-content-center", "mb-4", "mt-4"]],
  template: function TallerAdminSolicitudesComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "p", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, TallerAdminSolicitudesComponent_ng_container_4_Template, 2, 1, "ng-container", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](6, "i18nPlural");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 5)(8, "div", 6)(9, "div", 7)(10, "div", 8)(11, "div", 9)(12, "div", 10)(13, "div", 11)(14, "table", 12)(15, "thead")(16, "tr")(17, "th", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, "#");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "th", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "Nombre");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "th", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, "Correo");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "th", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, "Telefono");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "th", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26, "Estado");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "th", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28, "Acciones");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "tbody");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](30, TallerAdminSolicitudesComponent_tr_30_Template, 16, 6, "tr", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](31, TallerAdminSolicitudesComponent_div_31_Template, 3, 0, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "div", 16)(33, "ngb-pagination", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("pageChange", function TallerAdminSolicitudesComponent_Template_ngb_pagination_pageChange_33_listener($event) {
        return ctx.onPageChange($event);
      })("pageChange", function TallerAdminSolicitudesComponent_Template_ngb_pagination_pageChange_33_listener($event) {
        return ctx.page = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](34, "app-ver-taller-admin", 18, 19);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.talleresCount > 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](6, 11, ctx.talleresCount, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](14, _c1)), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](25);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.talleresList);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.talleresCount <= 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("collectionSize", ctx.talleresCount)("rotate", true)("maxSize", 5)("page", ctx.page)("pageSize", ctx.limit)("boundaryLinks", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("tipo", "solicitudes");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbPagination, _modals_ver_taller_ver_taller_component__WEBPACK_IMPORTED_MODULE_3__.VerTallerAdminComponent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.I18nPluralPipe],
  styles: [".count-manillas[_ngcontent-%COMP%] {\n  margin-left: 12px;\n}\n\n.estado-manillas[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  padding: 11px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYWRtaW4vdGFsbGVyLWFkbWluL3RhbGxlci1hZG1pbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0FBQ0o7O0FBR0k7RUFDSSxhQUFBO0FBQVIiLCJzb3VyY2VzQ29udGVudCI6WyIuY291bnQtbWFuaWxsYXN7XHJcbiAgICBtYXJnaW4tbGVmdDogMTJweDtcclxufVxyXG5cclxuLmVzdGFkby1tYW5pbGxhc3tcclxuICAgIHNlbGVjdHtcclxuICAgICAgICBwYWRkaW5nOiAxMXB4O1xyXG4gICAgfVxyXG5cclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});


/***/ }),

/***/ 26:
/*!**************************************************************!*\
  !*** ./src/app/admin/taller-admin/taller-admin.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TallerAdminComponent: () => (/* binding */ TallerAdminComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 27947);


class TallerAdminComponent {
  constructor() {}
}
TallerAdminComponent.ɵfac = function TallerAdminComponent_Factory(t) {
  return new (t || TallerAdminComponent)();
};
TallerAdminComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: TallerAdminComponent,
  selectors: [["app-taller-admin"]],
  decls: 1,
  vars: 0,
  template: function TallerAdminComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet],
  styles: [".count-manillas[_ngcontent-%COMP%] {\n  margin-left: 12px;\n}\n\n.estado-manillas[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  padding: 11px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYWRtaW4vdGFsbGVyLWFkbWluL3RhbGxlci1hZG1pbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0FBQ0o7O0FBR0k7RUFDSSxhQUFBO0FBQVIiLCJzb3VyY2VzQ29udGVudCI6WyIuY291bnQtbWFuaWxsYXN7XHJcbiAgICBtYXJnaW4tbGVmdDogMTJweDtcclxufVxyXG5cclxuLmVzdGFkby1tYW5pbGxhc3tcclxuICAgIHNlbGVjdHtcclxuICAgICAgICBwYWRkaW5nOiAxMXB4O1xyXG4gICAgfVxyXG5cclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});


/***/ }),

/***/ 24609:
/*!***********************************************************!*\
  !*** ./src/app/admin/taller-admin/taller-admin.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TallerAdminModule: () => (/* binding */ TallerAdminModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/shared.module */ 56208);
/* harmony import */ var _taller_admin_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taller-admin.component */ 26);
/* harmony import */ var _taller_admin_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./taller-admin-routing.module */ 79390);
/* harmony import */ var _taller_admin_solicitudes_taller_admin_solicitudes_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./taller-admin-solicitudes/taller-admin-solicitudes.component */ 28705);
/* harmony import */ var _taller_admin_list_taller_admin_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./taller-admin-list/taller-admin-list.component */ 6501);
/* harmony import */ var _modals_ver_taller_ver_taller_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modals/ver-taller/ver-taller.component */ 55324);
/* harmony import */ var _modals_crear_taller_crear_taller_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modals/crear-taller/crear-taller.component */ 70063);
/* harmony import */ var _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ks89/angular-modal-gallery */ 31841);
/* harmony import */ var ng_gallery_lightbox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-gallery/lightbox */ 23050);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 61699);











class TallerAdminModule {}
TallerAdminModule.ɵfac = function TallerAdminModule_Factory(t) {
  return new (t || TallerAdminModule)();
};
TallerAdminModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
  type: TallerAdminModule
});
TallerAdminModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_9__.GalleryModule, ng_gallery_lightbox__WEBPACK_IMPORTED_MODULE_10__.LightboxModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _taller_admin_routing_module__WEBPACK_IMPORTED_MODULE_2__.TallerAdminRoutingModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](TallerAdminModule, {
    declarations: [_taller_admin_component__WEBPACK_IMPORTED_MODULE_1__.TallerAdminComponent, _taller_admin_solicitudes_taller_admin_solicitudes_component__WEBPACK_IMPORTED_MODULE_3__.TallerAdminSolicitudesComponent, _taller_admin_list_taller_admin_list_component__WEBPACK_IMPORTED_MODULE_4__.TallerAdminListComponent, _modals_ver_taller_ver_taller_component__WEBPACK_IMPORTED_MODULE_5__.VerTallerAdminComponent, _modals_crear_taller_crear_taller_component__WEBPACK_IMPORTED_MODULE_6__.CrearTallerAdminComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_9__.GalleryModule, ng_gallery_lightbox__WEBPACK_IMPORTED_MODULE_10__.LightboxModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _taller_admin_routing_module__WEBPACK_IMPORTED_MODULE_2__.TallerAdminRoutingModule]
  });
})();

/***/ }),

/***/ 31841:
/*!******************************************************************************************!*\
  !*** ./node_modules/@ks89/angular-modal-gallery/fesm2020/ks89-angular-modal-gallery.mjs ***!
  \******************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Action: () => (/* binding */ Action),
/* harmony export */   ButtonType: () => (/* binding */ ButtonType),
/* harmony export */   ButtonsStrategy: () => (/* binding */ ButtonsStrategy),
/* harmony export */   CarouselComponent: () => (/* binding */ CarouselComponent),
/* harmony export */   DescriptionStrategy: () => (/* binding */ DescriptionStrategy),
/* harmony export */   GalleryModule: () => (/* binding */ GalleryModule),
/* harmony export */   GridLayout: () => (/* binding */ GridLayout),
/* harmony export */   Image: () => (/* binding */ Image),
/* harmony export */   ImageEvent: () => (/* binding */ ImageEvent),
/* harmony export */   ImageModalEvent: () => (/* binding */ ImageModalEvent),
/* harmony export */   KS_DEFAULT_ACCESSIBILITY_CONFIG: () => (/* binding */ KS_DEFAULT_ACCESSIBILITY_CONFIG),
/* harmony export */   KS_DEFAULT_BTN_CLOSE: () => (/* binding */ KS_DEFAULT_BTN_CLOSE),
/* harmony export */   KS_DEFAULT_BTN_DELETE: () => (/* binding */ KS_DEFAULT_BTN_DELETE),
/* harmony export */   KS_DEFAULT_BTN_DOWNLOAD: () => (/* binding */ KS_DEFAULT_BTN_DOWNLOAD),
/* harmony export */   KS_DEFAULT_BTN_EXTURL: () => (/* binding */ KS_DEFAULT_BTN_EXTURL),
/* harmony export */   KS_DEFAULT_BTN_FULL_SCREEN: () => (/* binding */ KS_DEFAULT_BTN_FULL_SCREEN),
/* harmony export */   KS_DEFAULT_SIZE: () => (/* binding */ KS_DEFAULT_SIZE),
/* harmony export */   LineLayout: () => (/* binding */ LineLayout),
/* harmony export */   LoadingType: () => (/* binding */ LoadingType),
/* harmony export */   ModalGalleryComponent: () => (/* binding */ ModalGalleryComponent),
/* harmony export */   ModalGalleryRef: () => (/* binding */ ModalGalleryRef),
/* harmony export */   ModalGalleryService: () => (/* binding */ ModalGalleryService),
/* harmony export */   PlainGalleryComponent: () => (/* binding */ PlainGalleryComponent),
/* harmony export */   PlainGalleryStrategy: () => (/* binding */ PlainGalleryStrategy)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ 36480);
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/overlay */ 82834);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 72513);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 89378);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 79736);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 74520);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 81891);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 20274);
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/portal */ 20236);
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/layout */ 31134);














/*
 The MIT License (MIT)

 Copyright (C) 2017-2022 Stefano Cappa (Ks89)

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.
 */
/**
 * Key of the keyboard's key `enter`
 */
function LoadingSpinnerComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 4)(3, "div", 5)(4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
}
function LoadingSpinnerComponent_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
}
function LoadingSpinnerComponent_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
}
function LoadingSpinnerComponent_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
}
function LoadingSpinnerComponent_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10)(2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 12)(4, "span", 13)(5, "span", 14)(6, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
}
function LoadingSpinnerComponent_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
}
function LoadingSpinnerComponent_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span")(3, "span")(4, "span")(5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
}
const _c0 = function (a0, a1) {
  return {
    width: a0,
    height: a1
  };
};
function CurrentImageComponent_ng_container_4_ng_container_1_img_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CurrentImageComponent_ng_container_4_ng_container_1_img_1_Template_img_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r9.onNavigationEvent("left", $event, ctx_r9.clickAction));
    })("keyup", function CurrentImageComponent_ng_container_4_ng_container_1_img_1_Template_img_keyup_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r11.onNavigationEvent("left", $event, ctx_r11.keyboardAction));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const leftPreview_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().ngIf;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", leftPreview_r5.modal.alt ? leftPreview_r5.modal.alt : ctx_r6.getAltDescriptionByImage(leftPreview_r5));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", (leftPreview_r5.plain == null ? null : leftPreview_r5.plain.img) ? leftPreview_r5.plain == null ? null : leftPreview_r5.plain.img : leftPreview_r5.modal.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("fallbackImg", (leftPreview_r5.plain == null ? null : leftPreview_r5.plain.fallbackImg) ? leftPreview_r5.plain == null ? null : leftPreview_r5.plain.fallbackImg : leftPreview_r5.modal.fallbackImg)("hidden", ctx_r6.loading)("sizeConfig", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](8, _c0, ctx_r6.slideConfig == null ? null : ctx_r6.slideConfig.sidePreviews == null ? null : ctx_r6.slideConfig.sidePreviews.size.width, ctx_r6.slideConfig == null ? null : ctx_r6.slideConfig.sidePreviews == null ? null : ctx_r6.slideConfig.sidePreviews.size.height))("title", leftPreview_r5.modal.title || leftPreview_r5.modal.title === "" ? leftPreview_r5.modal.title : ctx_r6.getDescriptionToDisplay(leftPreview_r5))("tabIndex", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", leftPreview_r5.modal.ariaLabel);
  }
}
function CurrentImageComponent_ng_container_4_ng_container_1_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 12);
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("sizeConfig", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](1, _c0, ctx_r8.slideConfig == null ? null : ctx_r8.slideConfig.sidePreviews == null ? null : ctx_r8.slideConfig.sidePreviews.size.width, ctx_r8.slideConfig == null ? null : ctx_r8.slideConfig.sidePreviews == null ? null : ctx_r8.slideConfig.sidePreviews.size.height));
  }
}
function CurrentImageComponent_ng_container_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CurrentImageComponent_ng_container_4_ng_container_1_img_1_Template, 1, 11, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CurrentImageComponent_ng_container_4_ng_container_1_ng_template_2_Template, 1, 4, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r4.isFirstImage)("ngIfElse", _r7);
  }
}
function CurrentImageComponent_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CurrentImageComponent_ng_container_4_ng_container_1_Template, 4, 2, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.getLeftPreviewImage());
  }
}
function CurrentImageComponent_figcaption_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "figcaption", 13);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("description", ctx_r1.currentImageConfig == null ? null : ctx_r1.currentImageConfig.description)("innerHTML", ctx_r1.getDescriptionToDisplay(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
  }
}
function CurrentImageComponent_ng_container_9_ng_container_1_img_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CurrentImageComponent_ng_container_9_ng_container_1_img_1_Template_img_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r18.onNavigationEvent("right", $event, ctx_r18.clickAction));
    })("keyup", function CurrentImageComponent_ng_container_9_ng_container_1_img_1_Template_img_keyup_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r20.onNavigationEvent("right", $event, ctx_r20.keyboardAction));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const rightPreview_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().ngIf;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", rightPreview_r14.modal.alt ? rightPreview_r14.modal.alt : ctx_r15.getAltDescriptionByImage(rightPreview_r14));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", (rightPreview_r14.plain == null ? null : rightPreview_r14.plain.img) ? rightPreview_r14.plain == null ? null : rightPreview_r14.plain.img : rightPreview_r14.modal.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("fallbackImg", (rightPreview_r14.plain == null ? null : rightPreview_r14.plain.fallbackImg) ? rightPreview_r14.plain == null ? null : rightPreview_r14.plain.fallbackImg : rightPreview_r14.modal.fallbackImg)("hidden", ctx_r15.loading)("sizeConfig", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](8, _c0, ctx_r15.slideConfig == null ? null : ctx_r15.slideConfig.sidePreviews == null ? null : ctx_r15.slideConfig.sidePreviews.size.width, ctx_r15.slideConfig == null ? null : ctx_r15.slideConfig.sidePreviews == null ? null : ctx_r15.slideConfig.sidePreviews.size.height))("title", rightPreview_r14.modal.title || rightPreview_r14.modal.title === "" ? rightPreview_r14.modal.title : ctx_r15.getDescriptionToDisplay(rightPreview_r14))("tabIndex", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", rightPreview_r14.modal.ariaLabel);
  }
}
function CurrentImageComponent_ng_container_9_ng_container_1_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 17);
  }
  if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("sizeConfig", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](1, _c0, ctx_r17.slideConfig == null ? null : ctx_r17.slideConfig.sidePreviews == null ? null : ctx_r17.slideConfig.sidePreviews.size.width, ctx_r17.slideConfig == null ? null : ctx_r17.slideConfig.sidePreviews == null ? null : ctx_r17.slideConfig.sidePreviews.size.height));
  }
}
function CurrentImageComponent_ng_container_9_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CurrentImageComponent_ng_container_9_ng_container_1_img_1_Template, 1, 11, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CurrentImageComponent_ng_container_9_ng_container_1_ng_template_2_Template, 1, 4, "ng-template", null, 15, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r13.isLastImage)("ngIfElse", _r16);
  }
}
function CurrentImageComponent_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CurrentImageComponent_ng_container_9_ng_container_1_Template, 4, 2, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.getRightPreviewImage());
  }
}
function CurrentImageComponent_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ks-loading-spinner", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("loadingConfig", ctx_r3.currentImageConfig == null ? null : ctx_r3.currentImageConfig.loadingConfig)("accessibilityConfig", ctx_r3.accessibilityConfig);
  }
}
const _c1 = function (a0) {
  return {
    "font-size": a0
  };
};
function UpperButtonsComponent_ng_container_1_a_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UpperButtonsComponent_ng_container_1_a_1_Template_a_click_0_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const btn_r2 = restoredCtx.$implicit;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r4.onEvent(btn_r2, $event));
    })("keyup", function UpperButtonsComponent_ng_container_1_a_1_Template_a_keyup_0_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const btn_r2 = restoredCtx.$implicit;
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r6.onEvent(btn_r2, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const btn_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("sizeConfig", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](8, _c0, btn_r2.size == null ? null : btn_r2.size.width, btn_r2.size == null ? null : btn_r2.size.height))("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c1, btn_r2.fontSize))("tabIndex", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", btn_r2.ariaLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("inside ", btn_r2.className, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", btn_r2.title);
  }
}
function UpperButtonsComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UpperButtonsComponent_ng_container_1_a_1_Template, 2, 13, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.buttons)("ngForTrackBy", ctx_r0.trackById);
  }
}
const _c2 = function (a0) {
  return {
    "active": a0
  };
};
function DotsComponent_ng_container_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DotsComponent_ng_container_1_div_1_Template_div_click_0_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const index_r3 = restoredCtx.index;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r4.onDotEvent(index_r3, $event));
    })("keyup", function DotsComponent_ng_container_1_div_1_Template_div_keyup_0_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const index_r3 = restoredCtx.index;
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r6.onDotEvent(index_r3, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const index_r3 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c2, ctx_r1.isActive(index_r3)))("tabIndex", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", (ctx_r1.accessibilityConfig == null ? null : ctx_r1.accessibilityConfig.dotAriaLabel) + " " + (index_r3 + 1));
  }
}
function DotsComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DotsComponent_ng_container_1_div_1_Template, 1, 5, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.images)("ngForTrackBy", ctx_r0.trackById);
  }
}
function PreviewsComponent_ng_container_1_ng_container_3_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function PreviewsComponent_ng_container_1_ng_container_3_ng_template_3_img_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 10);
  }
  if (rf & 2) {
    const preview_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("inside preview-image ", ctx_r7.isActive(preview_r2) ? "active" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", preview_r2.modal.alt ? preview_r2.modal.alt : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", (preview_r2.plain == null ? null : preview_r2.plain.img) ? preview_r2.plain == null ? null : preview_r2.plain.img : preview_r2.modal.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("fallbackImg", (preview_r2.plain == null ? null : preview_r2.plain.fallbackImg) ? preview_r2.plain == null ? null : preview_r2.plain.fallbackImg : preview_r2.modal.fallbackImg)("sizeConfig", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](10, _c0, (ctx_r7.previewConfig == null ? null : ctx_r7.previewConfig.size) ? ctx_r7.previewConfig == null ? null : ctx_r7.previewConfig.size == null ? null : ctx_r7.previewConfig.size.width : ctx_r7.defaultPreviewSize.width, (ctx_r7.previewConfig == null ? null : ctx_r7.previewConfig.size) ? ctx_r7.previewConfig == null ? null : ctx_r7.previewConfig.size == null ? null : ctx_r7.previewConfig.size.height : ctx_r7.defaultPreviewSize.height))("title", preview_r2.modal.title || preview_r2.modal.title === "" ? preview_r2.modal.title : "")("tabIndex", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", preview_r2.modal.ariaLabel ? preview_r2.modal.ariaLabel : "");
  }
}
function PreviewsComponent_ng_container_1_ng_container_3_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PreviewsComponent_ng_container_1_ng_container_3_ng_template_3_img_0_Template, 1, 13, "img", 9);
  }
  if (rf & 2) {
    const preview_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", preview_r2 == null ? null : preview_r2.modal == null ? null : preview_r2.modal.img);
  }
}
const _c3 = function (a0, a1) {
  return {
    preview: a0,
    defaultTemplate: a1
  };
};
function PreviewsComponent_ng_container_1_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PreviewsComponent_ng_container_1_ng_container_3_Template_div_click_1_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);
      const preview_r2 = restoredCtx.$implicit;
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r10.onImageEvent(preview_r2, $event, ctx_r10.clickAction));
    })("keyup", function PreviewsComponent_ng_container_1_ng_container_3_Template_div_keyup_1_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);
      const preview_r2 = restoredCtx.$implicit;
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r12.onImageEvent(preview_r2, $event, ctx_r12.keyboardAction));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PreviewsComponent_ng_container_1_ng_container_3_ng_container_2_Template, 1, 0, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PreviewsComponent_ng_container_1_ng_container_3_ng_template_3_Template, 1, 1, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const preview_r2 = ctx.$implicit;
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("preview-container ", !(ctx_r1.previewConfig == null ? null : ctx_r1.previewConfig.clickable) ? " unclickable" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", !ctx_r1.customTemplate ? _r5 : ctx_r1.customTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](5, _c3, preview_r2, _r5));
  }
}
function PreviewsComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PreviewsComponent_ng_container_1_Template_a_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r13.onNavigationEvent("left", $event));
    })("keyup", function PreviewsComponent_ng_container_1_Template_a_keyup_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r15.onNavigationEvent("left", $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PreviewsComponent_ng_container_1_ng_container_3_Template, 5, 8, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PreviewsComponent_ng_container_1_Template_a_click_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r16.onNavigationEvent("right", $event));
    })("keyup", function PreviewsComponent_ng_container_1_Template_a_keyup_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r17.onNavigationEvent("right", $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tabIndex", ctx_r0.displayLeftPreviewsArrow() ? 0 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r0.accessibilityConfig == null ? null : ctx_r0.accessibilityConfig.previewScrollPrevAriaLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("inside ", ctx_r0.displayLeftPreviewsArrow() ? "left-arrow-preview-image" : "empty-arrow-preview-image", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx_r0.accessibilityConfig == null ? null : ctx_r0.accessibilityConfig.previewScrollPrevTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.previews)("ngForTrackBy", ctx_r0.trackById);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tabIndex", ctx_r0.displayRightPreviewsArrow() ? 0 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r0.accessibilityConfig == null ? null : ctx_r0.accessibilityConfig.previewScrollNextAriaLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("inside ", ctx_r0.displayRightPreviewsArrow() ? "right-arrow-preview-image" : "empty-arrow-preview-image", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx_r0.accessibilityConfig == null ? null : ctx_r0.accessibilityConfig.previewScrollNextTitle);
  }
}
function CarouselPreviewsComponent_nav_0_ng_container_4_img_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CarouselPreviewsComponent_nav_0_ng_container_4_img_1_Template_img_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);
      const preview_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r5.onImageEvent(preview_r2, $event, ctx_r5.clickAction));
    })("keyup", function CarouselPreviewsComponent_nav_0_ng_container_4_img_1_Template_img_keyup_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);
      const preview_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r8.onImageEvent(preview_r2, $event, ctx_r8.keyboardAction));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const preview_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate2"]("inside preview-image", ctx_r4.isActive(preview_r2) ? " active" : "", "", !(ctx_r4.previewConfig == null ? null : ctx_r4.previewConfig.clickable) ? " unclickable" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", ctx_r4.getAlt(preview_r2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", (preview_r2.plain == null ? null : preview_r2.plain.img) ? preview_r2.plain == null ? null : preview_r2.plain.img : preview_r2.modal.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("fallbackImg", (preview_r2.plain == null ? null : preview_r2.plain.fallbackImg) ? preview_r2.plain == null ? null : preview_r2.plain.fallbackImg : preview_r2.modal.fallbackImg)("sizeConfig", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](11, _c0, ctx_r4.previewConfig == null ? null : ctx_r4.previewConfig.width, ctx_r4.previewMaxHeight))("title", ctx_r4.getTitle(preview_r2))("tabIndex", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r4.getAriaLabel(preview_r2));
  }
}
function CarouselPreviewsComponent_nav_0_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CarouselPreviewsComponent_nav_0_ng_container_4_img_1_Template, 1, 14, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const preview_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", preview_r2 == null ? null : preview_r2.modal == null ? null : preview_r2.modal.img);
  }
}
function CarouselPreviewsComponent_nav_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 1)(1, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CarouselPreviewsComponent_nav_0_Template_a_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r11.onNavigationEvent("left", $event));
    })("keyup", function CarouselPreviewsComponent_nav_0_Template_a_keyup_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r13.onNavigationEvent("left", $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CarouselPreviewsComponent_nav_0_ng_container_4_Template, 2, 1, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CarouselPreviewsComponent_nav_0_Template_a_click_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r14.onNavigationEvent("right", $event));
    })("keyup", function CarouselPreviewsComponent_nav_0_Template_a_keyup_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r15.onNavigationEvent("right", $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx_r0.accessibilityConfig == null ? null : ctx_r0.accessibilityConfig.carouselPreviewsContainerTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r0.accessibilityConfig == null ? null : ctx_r0.accessibilityConfig.carouselPreviewsContainerAriaLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tabIndex", (ctx_r0.previewConfig == null ? null : ctx_r0.previewConfig.arrows) && ctx_r0.start > 0 ? 0 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r0.accessibilityConfig == null ? null : ctx_r0.accessibilityConfig.carouselPreviewScrollPrevAriaLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("inside ", (ctx_r0.previewConfig == null ? null : ctx_r0.previewConfig.arrows) && ctx_r0.start > 0 ? "left-arrow-preview-image" : "empty-arrow-preview-image", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx_r0.accessibilityConfig == null ? null : ctx_r0.accessibilityConfig.carouselPreviewScrollPrevTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.previews)("ngForTrackBy", ctx_r0.trackById);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tabIndex", (ctx_r0.previewConfig == null ? null : ctx_r0.previewConfig.arrows) && ctx_r0.end < ctx_r0.images.length ? 0 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r0.accessibilityConfig == null ? null : ctx_r0.accessibilityConfig.carouselPreviewScrollNextAriaLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("inside ", (ctx_r0.previewConfig == null ? null : ctx_r0.previewConfig.arrows) && ctx_r0.end < ctx_r0.images.length ? "right-arrow-preview-image" : "empty-arrow-preview-image", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx_r0.accessibilityConfig == null ? null : ctx_r0.accessibilityConfig.carouselPreviewScrollNextTitle);
  }
}
const _c4 = ".arrow-preview-image[_ngcontent-%COMP%], .right-arrow-preview-image[_ngcontent-%COMP%], .left-arrow-preview-image[_ngcontent-%COMP%], .empty-arrow-preview-image[_ngcontent-%COMP%]{width:15px;height:15px;opacity:.5}.empty-arrow-preview-image[_ngcontent-%COMP%]{background:black;opacity:0}.left-arrow-preview-image[_ngcontent-%COMP%]{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ3Ny4xNzUgNDc3LjE3NSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDc3LjE3NSA0NzcuMTc1OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4Ij48Zz48cGF0aCBkPSJNMTQ1LjE4OCwyMzguNTc1bDIxNS41LTIxNS41YzUuMy01LjMsNS4zLTEzLjgsMC0xOS4xcy0xMy44LTUuMy0xOS4xLDBsLTIyNS4xLDIyNS4xYy01LjMsNS4zLTUuMywxMy44LDAsMTkuMWwyMjUuMSwyMjUgICBjMi42LDIuNiw2LjEsNCw5LjUsNHM2LjktMS4zLDkuNS00YzUuMy01LjMsNS4zLTEzLjgsMC0xOS4xTDE0NS4xODgsMjM4LjU3NXoiIGZpbGw9IiNGRkZGRkYiLz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PC9zdmc+);background-size:15px;transition:all .5s}.left-arrow-preview-image[_ngcontent-%COMP%]:hover{transform:scale(1.2)}.right-arrow-preview-image[_ngcontent-%COMP%]{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ3Ny4xNzUgNDc3LjE3NSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDc3LjE3NSA0NzcuMTc1OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4Ij48Zz48cGF0aCBkPSJNMzYwLjczMSwyMjkuMDc1bC0yMjUuMS0yMjUuMWMtNS4zLTUuMy0xMy44LTUuMy0xOS4xLDBzLTUuMywxMy44LDAsMTkuMWwyMTUuNSwyMTUuNWwtMjE1LjUsMjE1LjUgICBjLTUuMyw1LjMtNS4zLDEzLjgsMCwxOS4xYzIuNiwyLjYsNi4xLDQsOS41LDRjMy40LDAsNi45LTEuMyw5LjUtNGwyMjUuMS0yMjUuMUMzNjUuOTMxLDI0Mi44NzUsMzY1LjkzMSwyMzQuMjc1LDM2MC43MzEsMjI5LjA3NXogICAiIGZpbGw9IiNGRkZGRkYiLz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PC9zdmc+);background-size:15px;transition:all .5s}.right-arrow-preview-image[_ngcontent-%COMP%]:hover{transform:scale(1.2)}";
function CarouselComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
  }
}
function CarouselComponent_figure_3_a_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CarouselComponent_figure_3_a_1_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r7.onNavigationEvent("left", $event, ctx_r7.clickAction));
    })("keyup", function CarouselComponent_figure_3_a_1_Template_a_keyup_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r9.onNavigationEvent("left", $event, ctx_r9.keyboardAction));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tabIndex", ctx_r3.isLastImage && !ctx_r3.carouselSlideInfinite ? -1 : 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r3.accessibilityConfig == null ? null : ctx_r3.accessibilityConfig.carouselPrevImageAriaLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("inside ", ctx_r3.isFirstImage && !ctx_r3.carouselSlideInfinite || !ctx_r3.carouselConfig.showArrows ? "empty-arrow-image" : "left-arrow-image", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx_r3.accessibilityConfig == null ? null : ctx_r3.accessibilityConfig.carouselPrevImageTitle);
  }
}
function CarouselComponent_figure_3_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function CarouselComponent_figure_3_figcaption_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "figcaption", 14);
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("description", ctx_r5.carouselImageConfig == null ? null : ctx_r5.carouselImageConfig.description)("innerHTML", ctx_r5.getDescriptionToDisplay(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
  }
}
function CarouselComponent_figure_3_a_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CarouselComponent_figure_3_a_5_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r10.onNavigationEvent("right", $event, ctx_r10.clickAction));
    })("keyup", function CarouselComponent_figure_3_a_5_Template_a_keyup_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r12.onNavigationEvent("right", $event, ctx_r12.keyboardAction));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tabIndex", ctx_r6.isLastImage && !ctx_r6.carouselSlideInfinite ? -1 : 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r6.accessibilityConfig == null ? null : ctx_r6.accessibilityConfig.carouselNextImageAriaLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("inside ", ctx_r6.isLastImage && !ctx_r6.carouselSlideInfinite || !ctx_r6.carouselConfig.showArrows ? "empty-arrow-image" : "right-arrow-image", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx_r6.accessibilityConfig == null ? null : ctx_r6.accessibilityConfig.carouselNextImageTitle);
  }
}
const _c5 = function (a0) {
  return {
    width: a0,
    height: ""
  };
};
const _c6 = function (a0, a1) {
  return {
    maxWidth: a0,
    maxHeight: a1
  };
};
function CarouselComponent_figure_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "figure", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CarouselComponent_figure_3_a_1_Template, 2, 6, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CarouselComponent_figure_3_ng_container_2_Template, 1, 0, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CarouselComponent_figure_3_Template_img_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r13.onClickCurrentImage());
    })("swipeleft", function CarouselComponent_figure_3_Template_img_swipeleft_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r15.swipe($event.type));
    })("swiperight", function CarouselComponent_figure_3_Template_img_swiperight_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r16.swipe($event.type));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CarouselComponent_figure_3_figcaption_4_Template, 1, 2, "figcaption", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CarouselComponent_figure_3_a_5_Template, 2, 6, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 10)(7, "ks-dots", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clickDot", function CarouselComponent_figure_3_Template_ks_dots_clickDot_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r17.onClickDot($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("sizeConfig", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](18, _c5, ctx_r2.carouselConfig == null ? null : ctx_r2.carouselConfig.maxWidth));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.carouselConfig == null ? null : ctx_r2.carouselConfig.showArrows);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("object-fit", ctx_r2.carouselConfig == null ? null : ctx_r2.carouselConfig.objectFit);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", ctx_r2.currentImage.modal.alt ? ctx_r2.currentImage.modal.alt : ctx_r2.getAltDescriptionByImage());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("maxSizeConfig", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](20, _c6, ctx_r2.carouselConfig == null ? null : ctx_r2.carouselConfig.maxWidth, ctx_r2.carouselConfig == null ? null : ctx_r2.carouselConfig.maxHeight))("src", ctx_r2.currentImage.modal.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("fallbackImg", ctx_r2.currentImage.modal.fallbackImg)("title", ctx_r2.currentImage.modal.title || ctx_r2.currentImage.modal.title === "" ? ctx_r2.currentImage.modal.title : ctx_r2.getTitleToDisplay())("tabIndex", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r2.currentImage.modal.ariaLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.getDescriptionToDisplay() !== "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.carouselConfig == null ? null : ctx_r2.carouselConfig.showArrows);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx_r2.id)("currentImage", ctx_r2.currentImage)("images", ctx_r2.images)("dotsConfig", ctx_r2.carouselDotsConfig);
  }
}
const _c7 = function (a0) {
  return {
    maxWidth: a0,
    maxHeight: ""
  };
};
const _c8 = ["*"];
const _c9 = ".arrow-image[_ngcontent-%COMP%], .right-arrow-image[_ngcontent-%COMP%], .left-arrow-image[_ngcontent-%COMP%], .empty-arrow-image[_ngcontent-%COMP%]{width:30px;height:30px;background-size:30px}.empty-arrow-image[_ngcontent-%COMP%]{background:black;opacity:0}.left-arrow-image[_ngcontent-%COMP%]{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ3Ny4xNzUgNDc3LjE3NSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDc3LjE3NSA0NzcuMTc1OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4Ij48Zz48cGF0aCBkPSJNMTQ1LjE4OCwyMzguNTc1bDIxNS41LTIxNS41YzUuMy01LjMsNS4zLTEzLjgsMC0xOS4xcy0xMy44LTUuMy0xOS4xLDBsLTIyNS4xLDIyNS4xYy01LjMsNS4zLTUuMywxMy44LDAsMTkuMWwyMjUuMSwyMjUgICBjMi42LDIuNiw2LjEsNCw5LjUsNHM2LjktMS4zLDkuNS00YzUuMy01LjMsNS4zLTEzLjgsMC0xOS4xTDE0NS4xODgsMjM4LjU3NXoiIGZpbGw9IiNGRkZGRkYiLz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PC9zdmc+);opacity:.8;transition:all .5s}.left-arrow-image[_ngcontent-%COMP%]:hover{transform:scale(1.2)}.right-arrow-image[_ngcontent-%COMP%]{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ3Ny4xNzUgNDc3LjE3NSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDc3LjE3NSA0NzcuMTc1OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4Ij48Zz48cGF0aCBkPSJNMzYwLjczMSwyMjkuMDc1bC0yMjUuMS0yMjUuMWMtNS4zLTUuMy0xMy44LTUuMy0xOS4xLDBzLTUuMywxMy44LDAsMTkuMWwyMTUuNSwyMTUuNWwtMjE1LjUsMjE1LjUgICBjLTUuMyw1LjMtNS4zLDEzLjgsMCwxOS4xYzIuNiwyLjYsNi4xLDQsOS41LDRjMy40LDAsNi45LTEuMyw5LjUtNGwyMjUuMS0yMjUuMUMzNjUuOTMxLDI0Mi44NzUsMzY1LjkzMSwyMzQuMjc1LDM2MC43MzEsMjI5LjA3NXogICAiIGZpbGw9IiNGRkZGRkYiLz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PC9zdmc+);opacity:.8;transition:all .5s}.right-arrow-image[_ngcontent-%COMP%]:hover{transform:scale(1.2)}";
function PlainGalleryComponent_ng_container_1_ng_container_1_ng_container_1_img_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlainGalleryComponent_ng_container_1_ng_container_1_ng_container_1_img_1_Template_img_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);
      const imgCol_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r10.showModalGalleryByImage(imgCol_r4));
    })("keyup", function PlainGalleryComponent_ng_container_1_ng_container_1_ng_container_1_img_1_Template_img_keyup_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);
      const imgCol_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r13.onNavigationEvent($event, imgCol_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const imgCol_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", (imgCol_r4.plain == null ? null : imgCol_r4.plain.alt) ? imgCol_r4.plain == null ? null : imgCol_r4.plain.alt : ctx_r9.getAltPlainDescriptionByImage(imgCol_r4));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", (imgCol_r4.plain == null ? null : imgCol_r4.plain.img) ? imgCol_r4.plain == null ? null : imgCol_r4.plain.img : imgCol_r4.modal.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("fallbackImg", (imgCol_r4.plain == null ? null : imgCol_r4.plain.fallbackImg) ? imgCol_r4.plain == null ? null : imgCol_r4.plain.fallbackImg : imgCol_r4.modal.fallbackImg)("sizeConfig", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](7, _c0, ctx_r9.size == null ? null : ctx_r9.size.width, ctx_r9.size == null ? null : ctx_r9.size.height))("title", (imgCol_r4.plain == null ? null : imgCol_r4.plain.title) || (imgCol_r4.plain == null ? null : imgCol_r4.plain.title) === "" ? imgCol_r4.plain == null ? null : imgCol_r4.plain.title : ctx_r9.getTitleDisplay(imgCol_r4))("tabIndex", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", imgCol_r4.plain == null ? null : imgCol_r4.plain.ariaLabel);
  }
}
function PlainGalleryComponent_ng_container_1_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PlainGalleryComponent_ng_container_1_ng_container_1_ng_container_1_img_1_Template, 1, 10, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const imgCol_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", imgCol_r4 == null ? null : imgCol_r4.modal == null ? null : imgCol_r4.modal.img);
  }
}
function PlainGalleryComponent_ng_container_1_ng_container_1_ng_template_2_a_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlainGalleryComponent_ng_container_1_ng_container_1_ng_template_2_a_0_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20);
      const imgCol_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r18.showModalGalleryByImage(imgCol_r4));
    })("keyup", function PlainGalleryComponent_ng_container_1_ng_container_1_ng_template_2_a_0_Template_a_keyup_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20);
      const imgCol_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r21.onNavigationEvent($event, imgCol_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const imgCol_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](ctx_r17.plainGalleryConfig == null ? null : ctx_r17.plainGalleryConfig.advanced == null ? null : ctx_r17.plainGalleryConfig.advanced.additionalBackground);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("image", imgCol_r4)("sizeConfig", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](7, _c0, ctx_r17.size == null ? null : ctx_r17.size.width, ctx_r17.size == null ? null : ctx_r17.size.height))("title", (imgCol_r4.plain == null ? null : imgCol_r4.plain.title) || (imgCol_r4.plain == null ? null : imgCol_r4.plain.title) === "" ? imgCol_r4.plain == null ? null : imgCol_r4.plain.title : ctx_r17.getTitleDisplay(imgCol_r4))("tabIndex", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", imgCol_r4.plain == null ? null : imgCol_r4.plain.ariaLabel);
  }
}
function PlainGalleryComponent_ng_container_1_ng_container_1_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PlainGalleryComponent_ng_container_1_ng_container_1_ng_template_2_a_0_Template, 1, 10, "a", 6);
  }
  if (rf & 2) {
    const imgCol_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", imgCol_r4 == null ? null : imgCol_r4.modal == null ? null : imgCol_r4.modal.img);
  }
}
function PlainGalleryComponent_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PlainGalleryComponent_ng_container_1_ng_container_1_ng_container_1_Template, 2, 1, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PlainGalleryComponent_ng_container_1_ng_container_1_ng_template_2_Template, 1, 1, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(ctx_r3.plainGalleryConfig == null ? null : ctx_r3.plainGalleryConfig.advanced == null ? null : ctx_r3.plainGalleryConfig.advanced.aTags))("ngIfElse", _r7);
  }
}
function PlainGalleryComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PlainGalleryComponent_ng_container_1_ng_container_1_Template, 4, 2, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const imgRow_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", imgRow_r1);
  }
}
const ENTER_KEY = 'Enter';
/**
 * Code of the keyboard's key `enter`
 */
const ENTER_CODE = 'Enter';
/**
 * Key of the keyboard's key `esc`
 */
const ESC_KEY = 'Escape';
/**
 * Code of the keyboard's key `esc`
 */
const ESC_CODE = 'Escape';
/**
 * Key of the keyboard's key 'right arrow'
 */
const RIGHT_ARROW_KEY = 'ArrowRight';
/**
 * Code of the keyboard's key 'right arrow'
 */
const RIGHT_ARROW_CODE = 'ArrowRight';
/**
 * Key of the keyboard's key 'left arrow'
 */
const LEFT_ARROW_KEY = 'ArrowLeft';
/**
 * Code of the keyboard's key 'left arrow'
 */
const LEFT_ARROW_CODE = 'ArrowLeft';
/**
 * Key of the keyboard's key 'left arrow'
 */
const UP_ARROW_KEY = 'ArrowUp';
/**
 * Code of the keyboard's key 'left arrow'
 */
const UP_ARROW_CODE = 'ArrowUp';
/**
 * Key of the keyboard's key 'left arrow'
 */
const DOWN_ARROW_KEY = 'ArrowDown';
/**
 * Code of the keyboard's key 'left arrow'
 */
const DOWN_ARROW_CODE = 'ArrowDown';
/**
 * Key of the keyboard's key `space`
 */
const SPACE_KEY = '';
/**
 * Code of the keyboard's key `space`
 */
const SPACE_CODE = 'Space';
/**
 * Const to represent the right direction
 */
const DIRECTION_RIGHT = 'right';
/**
 * Const to represent the left direction
 */
const DIRECTION_LEFT = 'left';
/**
 * Keycode of the main mouse button
 */
const MOUSE_MAIN_BUTTON_CLICK = 0;
/**
 * Const NEXT
 */
const NEXT = 1;
/**
 * Const PREV
 */
const PREV = -1;
/**
 * Const NOTHING to represents a situation when it isn't both NEXT and PREV
 */
const NOTHING = 0;

/*
 The MIT License (MIT)

 Copyright (C) 2017-2022 Stefano Cappa (Ks89)

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.
 */
/**
 * Provides some useful methods to add accessibility features to subclasses.
 * In particular, it exposes a method to handle navigation event with both Keyboard and Mouse
 * and another with also the direction (right or left).
 */
class AccessibleComponent {
  constructor() {}
  /**
   * Method to handle navigation events with both Keyboard and Mouse.
   * @param string direction of the navigation that can be either 'next' or 'prev'
   * @param KeyboardEvent | MouseEvent event payload
   * @returns number -1 for PREV, 1 for NEXT and 0 for NOTHING
   */
  handleNavigationEvent(direction, event) {
    if (!event) {
      return NOTHING;
    }
    if (event instanceof KeyboardEvent) {
      return this.handleKeyboardNavigationEvent(direction, event);
    } else if (event instanceof MouseEvent) {
      return this.handleMouseNavigationEvent(direction, event);
    }
    return NOTHING;
  }
  /**
   * Method to handle events over an image, for instance a keypress with the Keyboard or a Mouse click.
   * @param event KeyboardEvent | MouseEvent payload
   * @returns number 1 for NEXT and 0 for NOTHING
   */
  handleImageEvent(event) {
    if (!event) {
      return NOTHING;
    }
    if (event instanceof KeyboardEvent) {
      return this.handleImageKeyboardEvent(event);
    } else if (event instanceof MouseEvent) {
      return this.handleImageMouseEvent(event);
    }
    return NOTHING;
  }
  /**
   * Private method to handle keyboard events over an image.
   * @param event KeyboardEvent payload
   * @returns number 1 for NEXT and 0 for NOTHING
   */
  handleImageKeyboardEvent(event) {
    const key = event.code;
    if (key === SPACE_CODE || key === ENTER_CODE) {
      return NEXT;
    }
    return NOTHING;
  }
  /**
   * Private method to handle mouse events over an image.
   * @param MouseEvent event payload
   * @returns number 1 for NEXT and 0 for NOTHING
   */
  handleImageMouseEvent(event) {
    const mouseBtn = event.button;
    if (mouseBtn === MOUSE_MAIN_BUTTON_CLICK) {
      return NEXT;
    }
    return NOTHING;
  }
  /**
   * Method to handle events over an image, for instance a keypress with the Keyboard or a Mouse click.
   * @param string direction of the navigation that can be either 'next' or 'prev'
   * @param KeyboardEvent event payload
   * @returns number -1 for PREV, 1 for NEXT and 0 for NOTHING
   */
  handleKeyboardNavigationEvent(direction, event) {
    const key = event.code;
    if (key === SPACE_CODE || key === ENTER_CODE) {
      return direction === DIRECTION_RIGHT ? NEXT : PREV;
    }
    return NOTHING;
  }
  /**
   * Method to handle events over an image, for instance a keypress with the Keyboard or a Mouse click.
   * @param string direction of the navigation that can be either 'next' or 'prev'
   * @param MouseEvent event payload
   * @returns number -1 for PREV, 1 for NEXT and 0 for NOTHING
   */
  handleMouseNavigationEvent(direction, event) {
    const mouseBtn = event.button;
    if (mouseBtn === MOUSE_MAIN_BUTTON_CLICK) {
      return direction === DIRECTION_RIGHT ? NEXT : PREV;
    }
    return NOTHING;
  }
}
AccessibleComponent.ɵfac = function AccessibleComponent_Factory(t) {
  return new (t || AccessibleComponent)();
};
AccessibleComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: AccessibleComponent,
  selectors: [["ks-accessible"]],
  decls: 0,
  vars: 0,
  template: function AccessibleComponent_Template(rf, ctx) {},
  encapsulation: 2,
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AccessibleComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'ks-accessible',
      template: ``,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush
    }]
  }], function () {
    return [];
  }, null);
})();

/*
 The MIT License (MIT)

 Copyright (C) 2017-2022 Stefano Cappa (Ks89)

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.
 */
/**
 * Class `Image` that represents an image with both `modal` and `plain` configurations.
 * Both image `id` and `modal` are mandatory, instead `plain` is optional.
 */
class Image {
  constructor(id, modal, plain) {
    this.id = id;
    this.modal = modal;
    this.plain = plain;
  }
}
/**
 * Class `ImageEvent` that represents the event payload with the result and the triggered action.
 * It also contains the source id of the gallery that emitted this event
 */
class ImageEvent {
  constructor(galleryId, action, result) {
    this.galleryId = galleryId;
    this.action = action;
    this.result = result;
  }
}
/**
 * Class `ImageModalEvent` that represents the event payload with galleryId, result and the triggered action.
 */
class ImageModalEvent extends ImageEvent {
  constructor(galleryId, action, result) {
    super(galleryId, action, result);
  }
}

/*
 The MIT License (MIT)

 Copyright (C) 2017-2022 Stefano Cappa (Ks89)

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.
 */
/**
 * Enum `Action` with a list of possible actions, based on the source of the action.
 */
var Action;
(function (Action) {
  Action[Action["NORMAL"] = 0] = "NORMAL";
  Action[Action["CLICK"] = 1] = "CLICK";
  Action[Action["KEYBOARD"] = 2] = "KEYBOARD";
  Action[Action["SWIPE"] = 3] = "SWIPE";
  Action[Action["LOAD"] = 4] = "LOAD";
  Action[Action["AUTOPLAY"] = 5] = "AUTOPLAY";
})(Action || (Action = {}));

/*
 The MIT License (MIT)

 Copyright (C) 2017-2022 Stefano Cappa (Ks89)

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.
 */
/**
 * Utility function to get the index of the input `image` from `arrayOfImages`
 * @param Image image to get the index. The image 'id' must be a number >= 0
 * @param Image[] arrayOfImages to search the image within it
 * @returns number the index of the image. -1 if not found.
 * @throws an Error if either image or arrayOfImages are not valid,
 *  or if the input image doesn't contain an 'id', or the 'id' is < 0
 */
function getIndex(image, arrayOfImages) {
  if (!image) {
    throw new Error('image must be a valid Image object');
  }
  if (!arrayOfImages) {
    throw new Error('arrayOfImages must be a valid Image[]');
  }
  if (!image.id && image.id !== 0) {
    // id = 0 is admitted
    throw new Error(`A numeric Image 'id' is mandatory`);
  }
  if (image.id < 0) {
    throw new Error(`Image 'id' must be >= 0`);
  }
  return arrayOfImages.findIndex(val => val.id === image.id);
}

/*
 The MIT License (MIT)

 Copyright (C) 2017-2022 Stefano Cappa (Ks89)

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.
 */
/**
 * Enum `DescriptionStrategy` with keys and their relative key codes.
 */
var DescriptionStrategy;
(function (DescriptionStrategy) {
  DescriptionStrategy[DescriptionStrategy["ALWAYS_HIDDEN"] = 1] = "ALWAYS_HIDDEN";
  DescriptionStrategy[DescriptionStrategy["ALWAYS_VISIBLE"] = 2] = "ALWAYS_VISIBLE";
  DescriptionStrategy[DescriptionStrategy["HIDE_IF_EMPTY"] = 3] = "HIDE_IF_EMPTY";
})(DescriptionStrategy || (DescriptionStrategy = {}));

/**
 * Default accessibility configuration.
 */
const KS_DEFAULT_ACCESSIBILITY_CONFIG = {
  backgroundAriaLabel: 'Modal gallery full screen background',
  backgroundTitle: '',
  plainGalleryContentAriaLabel: 'Plain gallery content',
  plainGalleryContentTitle: '',
  modalGalleryContentAriaLabel: 'Modal gallery content',
  modalGalleryContentTitle: '',
  loadingSpinnerAriaLabel: 'The current image is loading. Please be patient.',
  loadingSpinnerTitle: 'The current image is loading. Please be patient.',
  mainContainerAriaLabel: 'Current image and navigation',
  mainContainerTitle: '',
  mainPrevImageAriaLabel: 'Previous image',
  mainPrevImageTitle: 'Previous image',
  mainNextImageAriaLabel: 'Next image',
  mainNextImageTitle: 'Next image',
  dotsContainerAriaLabel: 'Image navigation dots',
  dotsContainerTitle: '',
  dotAriaLabel: 'Navigate to image number',
  previewsContainerAriaLabel: 'Image previews',
  previewsContainerTitle: '',
  previewScrollPrevAriaLabel: 'Scroll previous previews',
  previewScrollPrevTitle: 'Scroll previous previews',
  previewScrollNextAriaLabel: 'Scroll next previews',
  previewScrollNextTitle: 'Scroll next previews',
  carouselContainerAriaLabel: 'Current image and navigation',
  carouselContainerTitle: '',
  carouselPrevImageAriaLabel: 'Previous image',
  carouselPrevImageTitle: 'Previous image',
  carouselNextImageAriaLabel: 'Next image',
  carouselNextImageTitle: 'Next image',
  carouselPreviewsContainerAriaLabel: 'Image previews',
  carouselPreviewsContainerTitle: '',
  carouselPreviewScrollPrevAriaLabel: 'Scroll previous previews',
  carouselPreviewScrollPrevTitle: 'Scroll previous previews',
  carouselPreviewScrollNextAriaLabel: 'Scroll next previews',
  carouselPreviewScrollNextTitle: 'Scroll next previews'
};

/*
 The MIT License (MIT)

 Copyright (C) 2017-2022 Stefano Cappa (Ks89)

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.
 */
/**
 * Enum `ButtonsStrategy` to configure the logic of a button.
 */
var ButtonsStrategy;
(function (ButtonsStrategy) {
  // don't use 0 here
  // the first index is 1 and all of the following members are auto-incremented from that point on
  ButtonsStrategy[ButtonsStrategy["DEFAULT"] = 1] = "DEFAULT";
  ButtonsStrategy[ButtonsStrategy["SIMPLE"] = 2] = "SIMPLE";
  ButtonsStrategy[ButtonsStrategy["ADVANCED"] = 3] = "ADVANCED";
  ButtonsStrategy[ButtonsStrategy["FULL"] = 4] = "FULL";
  ButtonsStrategy[ButtonsStrategy["CUSTOM"] = 5] = "CUSTOM";
})(ButtonsStrategy || (ButtonsStrategy = {}));
/**
 * Enum `ButtonType` is the type of a button.
 */
var ButtonType;
(function (ButtonType) {
  // don't use 0 here
  // the first index is 1 and all of the following members are auto-incremented from that point on
  ButtonType[ButtonType["DELETE"] = 1] = "DELETE";
  ButtonType[ButtonType["EXTURL"] = 2] = "EXTURL";
  ButtonType[ButtonType["DOWNLOAD"] = 3] = "DOWNLOAD";
  ButtonType[ButtonType["CLOSE"] = 4] = "CLOSE";
  ButtonType[ButtonType["CUSTOM"] = 5] = "CUSTOM";
  ButtonType[ButtonType["FULLSCREEN"] = 6] = "FULLSCREEN";
})(ButtonType || (ButtonType = {}));
/**
 * Array of admitted types of buttons.
 */
const WHITELIST_BUTTON_TYPES = [ButtonType.FULLSCREEN, ButtonType.DELETE, ButtonType.EXTURL, ButtonType.DOWNLOAD, ButtonType.CLOSE, ButtonType.CUSTOM];

/*
 The MIT License (MIT)

 Copyright (C) 2017-2022 Stefano Cappa (Ks89)

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.
 */
/**
 * Class `LineLayout` to configure a linear plain gallery.
 */
class LineLayout {
  constructor(size, breakConfig, justify) {
    this.size = size;
    this.breakConfig = breakConfig;
    this.justify = justify;
  }
}
/**
 * Class `GridLayout` to configure a grid plain gallery.
 */
class GridLayout {
  constructor(size, breakConfig) {
    this.size = size;
    this.breakConfig = breakConfig;
  }
}
/**
 * Enum `PlainGalleryStrategy` to choose the behaviour of the plain gallery.
 */
var PlainGalleryStrategy;
(function (PlainGalleryStrategy) {
  // don't use 0 here
  // the first index is 1 and all of the following members are auto-incremented from that point on
  PlainGalleryStrategy[PlainGalleryStrategy["ROW"] = 1] = "ROW";
  PlainGalleryStrategy[PlainGalleryStrategy["COLUMN"] = 2] = "COLUMN";
  PlainGalleryStrategy[PlainGalleryStrategy["GRID"] = 3] = "GRID";
  PlainGalleryStrategy[PlainGalleryStrategy["CUSTOM"] = 4] = "CUSTOM"; // full custom strategy
})(PlainGalleryStrategy || (PlainGalleryStrategy = {}));

/*
 The MIT License (MIT)

 Copyright (C) 2017-2022 Stefano Cappa (Ks89)

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.
 */
/**
 * Enum `LoadingType` with a list of possible types.
 */
var LoadingType;
(function (LoadingType) {
  LoadingType[LoadingType["STANDARD"] = 1] = "STANDARD";
  LoadingType[LoadingType["CIRCULAR"] = 2] = "CIRCULAR";
  LoadingType[LoadingType["BARS"] = 3] = "BARS";
  LoadingType[LoadingType["DOTS"] = 4] = "DOTS";
  LoadingType[LoadingType["CUBE_FLIPPING"] = 5] = "CUBE_FLIPPING";
  LoadingType[LoadingType["CIRCLES"] = 6] = "CIRCLES";
  LoadingType[LoadingType["EXPLOSING_SQUARES"] = 7] = "EXPLOSING_SQUARES";
})(LoadingType || (LoadingType = {}));

/*
 The MIT License (MIT)

 Copyright (C) 2017-2022 Stefano Cappa (Ks89)

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.
 */
const DEFAULT_PREVIEW_SIZE = {
  height: '50px',
  width: 'auto'
};
const DEFAULT_LAYOUT = new LineLayout(DEFAULT_PREVIEW_SIZE, {
  length: -1,
  wrap: false
}, 'flex-start');
const DEFAULT_PLAIN_CONFIG = {
  strategy: PlainGalleryStrategy.ROW,
  layout: DEFAULT_LAYOUT,
  advanced: {
    aTags: false,
    additionalBackground: '50% 50%/cover'
  }
};
const DEFAULT_LOADING = {
  enable: true,
  type: LoadingType.STANDARD
};
const DEFAULT_DESCRIPTION_STYLE = {
  bgColor: 'rgba(0, 0, 0, .5)',
  textColor: 'white',
  marginTop: '0px',
  marginBottom: '0px',
  marginLeft: '0px',
  marginRight: '0px'
};
const DEFAULT_DESCRIPTION = {
  strategy: DescriptionStrategy.ALWAYS_VISIBLE,
  imageText: 'Image ',
  numberSeparator: '/',
  beforeTextDescription: ' - ',
  style: DEFAULT_DESCRIPTION_STYLE
};
const DEFAULT_CAROUSEL_DESCRIPTION = {
  strategy: DescriptionStrategy.ALWAYS_HIDDEN,
  imageText: 'Image ',
  numberSeparator: '/',
  beforeTextDescription: ' - ',
  style: DEFAULT_DESCRIPTION_STYLE
};
const DEFAULT_CURRENT_IMAGE_CONFIG = {
  navigateOnClick: true,
  loadingConfig: DEFAULT_LOADING,
  description: DEFAULT_DESCRIPTION,
  downloadable: false,
  invertSwipe: false
};
const DEFAULT_CAROUSEL_IMAGE_CONFIG = {
  description: DEFAULT_CAROUSEL_DESCRIPTION,
  invertSwipe: false
};
const DEFAULT_CURRENT_CAROUSEL_CONFIG = {
  maxWidth: '100%',
  maxHeight: '400px',
  showArrows: true,
  objectFit: 'cover',
  keyboardEnable: true,
  modalGalleryEnable: false
};
const DEFAULT_CURRENT_CAROUSEL_PLAY = {
  autoPlay: true,
  interval: 5000,
  pauseOnHover: true
};
const DEFAULT_CAROUSEL_BREAKPOINTS = {
  xSmall: 100,
  small: 100,
  medium: 150,
  large: 200,
  xLarge: 200
};
const DEFAULT_CAROUSEL_PREVIEWS_CONFIG = {
  visible: true,
  number: 4,
  arrows: true,
  clickable: true,
  width: 100 / 4 + '%',
  maxHeight: '200px',
  breakpoints: DEFAULT_CAROUSEL_BREAKPOINTS
};
const DEFAULT_KEYBOARD_SERVICE_CONFIG = {
  shortcuts: ['ctrl+s', 'meta+s'],
  disableSsrWorkaround: false
};
const DEFAULT_SLIDE_CONFIG = {
  infinite: false,
  playConfig: {
    autoPlay: false,
    interval: 5000,
    pauseOnHover: true
  },
  sidePreviews: {
    show: true,
    size: {
      width: '100px',
      height: 'auto'
    }
  }
};
const DEFAULT_PREVIEW_CONFIG = {
  visible: true,
  number: 3,
  arrows: true,
  clickable: true,
  size: DEFAULT_PREVIEW_SIZE
};
const DEFAULT_CONFIG = Object.freeze({
  slideConfig: DEFAULT_SLIDE_CONFIG,
  accessibilityConfig: KS_DEFAULT_ACCESSIBILITY_CONFIG,
  previewConfig: DEFAULT_PREVIEW_CONFIG,
  buttonsConfig: {
    visible: true,
    strategy: ButtonsStrategy.DEFAULT
  },
  dotsConfig: {
    visible: true
  },
  plainGalleryConfig: DEFAULT_PLAIN_CONFIG,
  currentImageConfig: DEFAULT_CURRENT_IMAGE_CONFIG,
  keyboardConfig: undefined,
  carouselConfig: DEFAULT_CURRENT_CAROUSEL_CONFIG,
  carouselImageConfig: DEFAULT_CAROUSEL_IMAGE_CONFIG,
  carouselPreviewsConfig: DEFAULT_CAROUSEL_PREVIEWS_CONFIG,
  carouselPlayConfig: DEFAULT_CURRENT_CAROUSEL_PLAY,
  carouselDotsConfig: {
    visible: true
  },
  carouselSlideInfinite: true,
  enableCloseOutside: true,
  keyboardServiceConfig: DEFAULT_KEYBOARD_SERVICE_CONFIG
});
/**
 * Service to handle library configuration in a unique place
 */
class ConfigService {
  constructor() {
    this.configMap = new Map();
  }
  getConfig(id) {
    this.initIfNotExists(id);
    return this.configMap.get(id);
  }
  setConfig(id, obj) {
    this.initIfNotExists(id);
    if (!obj) {
      return;
    }
    if (!DEFAULT_CONFIG || !DEFAULT_CONFIG.slideConfig || !DEFAULT_CONFIG.slideConfig.sidePreviews || !DEFAULT_CONFIG.previewConfig || !DEFAULT_CONFIG.previewConfig.size || !DEFAULT_CONFIG.previewConfig.number || !DEFAULT_CONFIG.plainGalleryConfig || !DEFAULT_CONFIG.currentImageConfig || !DEFAULT_CONFIG.currentImageConfig || !DEFAULT_CONFIG.currentImageConfig.description || !DEFAULT_CONFIG.carouselImageConfig || !DEFAULT_CONFIG.carouselImageConfig.description || !DEFAULT_CONFIG.carouselPreviewsConfig || !DEFAULT_CONFIG.carouselPreviewsConfig.breakpoints || !DEFAULT_CAROUSEL_PREVIEWS_CONFIG.number) {
      throw new Error('Internal library error - DEFAULT_CONFIG must be fully initialized!!!');
    }
    const newConfig = Object.assign({}, this.configMap.get(id));
    if (obj.slideConfig) {
      let playConfig;
      let sidePreviews;
      let size;
      if (obj.slideConfig.playConfig) {
        playConfig = Object.assign({}, DEFAULT_CONFIG.slideConfig.playConfig, obj.slideConfig.playConfig);
      } else {
        playConfig = DEFAULT_CONFIG.slideConfig.playConfig;
      }
      if (obj.slideConfig.sidePreviews) {
        if (obj.slideConfig.sidePreviews.size) {
          size = Object.assign({}, DEFAULT_CONFIG.slideConfig.sidePreviews.size, obj.slideConfig.sidePreviews.size);
        } else {
          size = DEFAULT_CONFIG.slideConfig.sidePreviews.size;
        }
        sidePreviews = Object.assign({}, DEFAULT_CONFIG.slideConfig.sidePreviews, obj.slideConfig.sidePreviews);
      } else {
        sidePreviews = DEFAULT_CONFIG.slideConfig.sidePreviews;
        size = DEFAULT_CONFIG.slideConfig.sidePreviews.size;
      }
      const newSlideConfig = Object.assign({}, DEFAULT_CONFIG.slideConfig, obj.slideConfig);
      newSlideConfig.playConfig = playConfig;
      newSlideConfig.sidePreviews = sidePreviews;
      newSlideConfig.sidePreviews.size = size;
      newConfig.slideConfig = newSlideConfig;
    }
    if (obj.accessibilityConfig) {
      newConfig.accessibilityConfig = Object.assign({}, DEFAULT_CONFIG.accessibilityConfig, obj.accessibilityConfig);
    }
    if (obj.previewConfig) {
      let size;
      let num;
      if (obj.previewConfig.size) {
        size = Object.assign({}, DEFAULT_CONFIG.previewConfig.size, obj.previewConfig.size);
      } else {
        size = DEFAULT_CONFIG.previewConfig.size;
      }
      if (obj.previewConfig.number) {
        if (obj.previewConfig.number <= 0) {
          // if number is <= 0 reset to default
          num = DEFAULT_CONFIG.previewConfig.number;
        } else {
          num = obj.previewConfig.number;
        }
      } else {
        num = DEFAULT_CONFIG.previewConfig.number;
      }
      const newPreviewConfig = Object.assign({}, DEFAULT_CONFIG.previewConfig, obj.previewConfig);
      newPreviewConfig.size = size;
      newPreviewConfig.number = num;
      newConfig.previewConfig = newPreviewConfig;
    }
    if (obj.buttonsConfig) {
      newConfig.buttonsConfig = Object.assign({}, DEFAULT_CONFIG.buttonsConfig, obj.buttonsConfig);
    }
    if (obj.dotsConfig) {
      newConfig.dotsConfig = Object.assign({}, DEFAULT_CONFIG.dotsConfig, obj.dotsConfig);
    }
    if (obj.plainGalleryConfig) {
      let advanced;
      let layout;
      if (obj.plainGalleryConfig.advanced) {
        advanced = Object.assign({}, DEFAULT_CONFIG.plainGalleryConfig.advanced, obj.plainGalleryConfig.advanced);
      } else {
        advanced = DEFAULT_CONFIG.plainGalleryConfig.advanced;
      }
      if (obj.plainGalleryConfig.layout) {
        // it isn't mandatory to use assign, because obj.plainGalleryConfig.layout is an instance of class (LineaLayout, GridLayout)
        layout = obj.plainGalleryConfig.layout;
      } else {
        layout = DEFAULT_CONFIG.plainGalleryConfig.layout;
      }
      const newPlainGalleryConfig = Object.assign({}, DEFAULT_CONFIG.plainGalleryConfig, obj.plainGalleryConfig);
      newPlainGalleryConfig.layout = layout;
      newPlainGalleryConfig.advanced = advanced;
      newConfig.plainGalleryConfig = initPlainGalleryConfig(newPlainGalleryConfig);
    }
    if (obj.currentImageConfig) {
      let loading;
      let description;
      let descriptionStyle;
      if (obj.currentImageConfig.loadingConfig) {
        loading = Object.assign({}, DEFAULT_CONFIG.currentImageConfig.loadingConfig, obj.currentImageConfig.loadingConfig);
      } else {
        loading = DEFAULT_CONFIG.currentImageConfig.loadingConfig;
      }
      if (obj.currentImageConfig.description) {
        description = Object.assign({}, DEFAULT_CONFIG.currentImageConfig.description, obj.currentImageConfig.description);
        if (obj.currentImageConfig.description.style) {
          descriptionStyle = Object.assign({}, DEFAULT_CONFIG.currentImageConfig.description.style, obj.currentImageConfig.description.style);
        } else {
          descriptionStyle = DEFAULT_CONFIG.currentImageConfig.description.style;
        }
      } else {
        description = DEFAULT_CONFIG.currentImageConfig.description;
        descriptionStyle = DEFAULT_CONFIG.currentImageConfig.description.style;
      }
      const newCurrentImageConfig = Object.assign({}, DEFAULT_CONFIG.currentImageConfig, obj.currentImageConfig);
      newCurrentImageConfig.loadingConfig = loading;
      newCurrentImageConfig.description = description;
      newCurrentImageConfig.description.style = descriptionStyle;
      newConfig.currentImageConfig = newCurrentImageConfig;
    }
    if (obj.keyboardConfig) {
      newConfig.keyboardConfig = Object.assign({}, DEFAULT_CONFIG.keyboardConfig, obj.keyboardConfig);
    }
    // carousel
    if (obj.carouselConfig) {
      newConfig.carouselConfig = Object.assign({}, DEFAULT_CONFIG.carouselConfig, obj.carouselConfig);
    }
    if (obj.carouselImageConfig) {
      let description;
      let descriptionStyle;
      if (obj.carouselImageConfig.description) {
        description = Object.assign({}, DEFAULT_CONFIG.carouselImageConfig.description, obj.carouselImageConfig.description);
        if (obj.carouselImageConfig.description.style) {
          descriptionStyle = Object.assign({}, DEFAULT_CONFIG.carouselImageConfig.description.style, obj.carouselImageConfig.description.style);
        } else {
          descriptionStyle = DEFAULT_CONFIG.carouselImageConfig.description.style;
        }
      } else {
        description = DEFAULT_CONFIG.carouselImageConfig.description;
        descriptionStyle = DEFAULT_CONFIG.carouselImageConfig.description.style;
      }
      const newCarouselImageConfig = Object.assign({}, DEFAULT_CONFIG.carouselImageConfig, obj.carouselImageConfig);
      newCarouselImageConfig.description = description;
      newCarouselImageConfig.description.style = descriptionStyle;
      newConfig.carouselImageConfig = newCarouselImageConfig;
    }
    if (obj.carouselPlayConfig) {
      // check values
      if (obj.carouselPlayConfig.interval <= 0) {
        throw new Error(`Carousel's interval must be a number >= 0`);
      }
      newConfig.carouselPlayConfig = Object.assign({}, DEFAULT_CONFIG.carouselPlayConfig, obj.carouselPlayConfig);
    }
    if (obj.carouselPreviewsConfig) {
      // check values
      let num;
      let breakpoints;
      if (!obj.carouselPreviewsConfig.number || obj.carouselPreviewsConfig.number <= 0) {
        num = DEFAULT_CAROUSEL_PREVIEWS_CONFIG.number;
      } else {
        num = obj.carouselPreviewsConfig.number;
      }
      if (obj.carouselPreviewsConfig.breakpoints) {
        breakpoints = Object.assign({}, DEFAULT_CONFIG.carouselPreviewsConfig.breakpoints, obj.carouselPreviewsConfig.breakpoints);
      } else {
        breakpoints = DEFAULT_CONFIG.carouselPreviewsConfig.breakpoints;
      }
      newConfig.carouselPreviewsConfig = Object.assign({}, DEFAULT_CONFIG.carouselPreviewsConfig, obj.carouselPreviewsConfig);
      newConfig.carouselPreviewsConfig.number = num;
      newConfig.carouselPreviewsConfig.breakpoints = breakpoints;
      // Init preview image width based on the number of previews in PreviewConfig
      // Don't move this line above, because I need to be sure that both configPreview.number
      // and configPreview.size are initialized
      newConfig.carouselPreviewsConfig.width = 100 / newConfig.carouselPreviewsConfig.number + '%';
    }
    if (obj.carouselDotsConfig) {
      newConfig.carouselDotsConfig = Object.assign({}, DEFAULT_CONFIG.carouselDotsConfig, obj.carouselDotsConfig);
    }
    if (obj.carouselSlideInfinite === undefined) {
      newConfig.carouselSlideInfinite = DEFAULT_CONFIG.carouselSlideInfinite;
    } else {
      newConfig.carouselSlideInfinite = obj.carouselSlideInfinite;
    }
    if (obj.enableCloseOutside === undefined) {
      newConfig.enableCloseOutside = DEFAULT_CONFIG.enableCloseOutside;
    } else {
      newConfig.enableCloseOutside = obj.enableCloseOutside;
    }
    if (obj.keyboardServiceConfig) {
      newConfig.keyboardServiceConfig = Object.assign({}, DEFAULT_KEYBOARD_SERVICE_CONFIG, obj.keyboardServiceConfig);
    }
    this.configMap.set(id, newConfig);
  }
  initIfNotExists(id) {
    if (!this.configMap.has(id)) {
      this.configMap.set(id, DEFAULT_CONFIG);
    }
  }
}
ConfigService.ɵfac = function ConfigService_Factory(t) {
  return new (t || ConfigService)();
};
ConfigService.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: ConfigService,
  factory: ConfigService.ɵfac,
  providedIn: 'root'
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConfigService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], null, null);
})();
/**
 * Function to build and return a `PlainGalleryConfig` object, proving also default values and validating the input object.
 * @param plainGalleryConfig object with the config requested by user
 * @returns PlainGalleryConfig the plain gallery configuration
 * @throws an Error if layout and strategy aren't compatible
 */
function initPlainGalleryConfig(plainGalleryConfig) {
  const newPlayGalleryConfig = Object.assign({}, DEFAULT_CONFIG.plainGalleryConfig, plainGalleryConfig);
  if (newPlayGalleryConfig.layout instanceof LineLayout) {
    if (newPlayGalleryConfig.strategy !== PlainGalleryStrategy.ROW && newPlayGalleryConfig.strategy !== PlainGalleryStrategy.COLUMN) {
      throw new Error('LineLayout requires either ROW or COLUMN strategy');
    }
    if (!newPlayGalleryConfig.layout || !newPlayGalleryConfig.layout.breakConfig) {
      throw new Error('Both layout and breakConfig must be valid');
    }
  }
  if (newPlayGalleryConfig.layout instanceof GridLayout) {
    if (newPlayGalleryConfig.strategy !== PlainGalleryStrategy.GRID) {
      throw new Error('GridLayout requires GRID strategy');
    }
    if (!newPlayGalleryConfig.layout || !newPlayGalleryConfig.layout.breakConfig) {
      throw new Error('Both layout and breakConfig must be valid');
    }
    // force wrap for grid layout
    newPlayGalleryConfig.layout.breakConfig.wrap = true;
  }
  return newPlayGalleryConfig;
}

/*
 The MIT License (MIT)

 Copyright (C) 2017-2022 Stefano Cappa (Ks89)

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.
 */
const DIALOG_DATA = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('DIALOG_DATA');

/*
 The MIT License (MIT)

 Copyright (C) 2017-2022 Stefano Cappa (Ks89)

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.
 */
const Keyboard = {
  ESC: ESC_CODE,
  LEFT_ARROW: LEFT_ARROW_CODE,
  RIGHT_ARROW: RIGHT_ARROW_CODE,
  UP_ARROW: UP_ARROW_CODE,
  DOWN_ARROW: DOWN_ARROW_CODE
};

/*
 The MIT License (MIT)

 Copyright (C) 2017-2021 Stefano Cappa (Ks89)

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.
 */
/**
 * Component with the loading spinner
 */
class LoadingSpinnerComponent {
  constructor() {
    /**
     * Enum of type `LoadingType` to choose the standard loading spinner.
     * Declared here to be used inside the template.
     */
    this.loadingStandard = LoadingType.STANDARD;
    /**
     * Enum of type `LoadingType` to choose the bars loading spinner.
     * Declared here to be used inside the template.
     */
    this.loadingBars = LoadingType.BARS;
    /**
     * Enum of type `LoadingType` to choose the circular loading spinner.
     * Declared here to be used inside the template.
     */
    this.loadingCircular = LoadingType.CIRCULAR;
    /**
     * Enum of type `LoadingType` to choose the dots loading spinner.
     * Declared here to be used inside the template.
     */
    this.loadingDots = LoadingType.DOTS;
    /**
     * Enum of type `LoadingType` to choose the cube flipping loading spinner.
     * Declared here to be used inside the template.
     */
    this.loadingCubeFlipping = LoadingType.CUBE_FLIPPING;
    /**
     * Enum of type `LoadingType` to choose the circles loading spinner.
     * Declared here to be used inside the template.
     */
    this.loadingCircles = LoadingType.CIRCLES;
    /**
     * Enum of type `LoadingType` to choose the explosing squares loading spinner.
     * Declared here to be used inside the template.
     */
    this.loadingExplosingSquares = LoadingType.EXPLOSING_SQUARES;
  }
}
LoadingSpinnerComponent.ɵfac = function LoadingSpinnerComponent_Factory(t) {
  return new (t || LoadingSpinnerComponent)();
};
LoadingSpinnerComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: LoadingSpinnerComponent,
  selectors: [["ks-loading-spinner"]],
  inputs: {
    loadingConfig: "loadingConfig",
    accessibilityConfig: "accessibilityConfig"
  },
  decls: 9,
  vars: 10,
  consts: [[3, "title"], [3, "ngSwitch"], [4, "ngSwitchCase"], [1, "cssload-loader"], [1, "cssload-inner", "cssload-one"], [1, "cssload-inner", "cssload-two"], [1, "cssload-inner", "cssload-three"], [1, "loader-bars"], [1, "loader-circular"], [1, "loader-dots"], [1, "cube-wrapper"], [1, "cube-folding"], [1, "leaf1"], [1, "leaf2"], [1, "leaf3"], [1, "leaf4"], ["id", "preloader"], ["id", "loader"], [1, "loader"]],
  template: function LoadingSpinnerComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](1, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LoadingSpinnerComponent_ng_container_2_Template, 5, 0, "ng-container", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, LoadingSpinnerComponent_ng_container_3_Template, 2, 0, "ng-container", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, LoadingSpinnerComponent_ng_container_4_Template, 2, 0, "ng-container", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, LoadingSpinnerComponent_ng_container_5_Template, 2, 0, "ng-container", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, LoadingSpinnerComponent_ng_container_6_Template, 7, 0, "ng-container", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, LoadingSpinnerComponent_ng_container_7_Template, 3, 0, "ng-container", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, LoadingSpinnerComponent_ng_container_8_Template, 6, 0, "ng-container", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx.accessibilityConfig == null ? null : ctx.accessibilityConfig.loadingSpinnerTitle);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx.accessibilityConfig == null ? null : ctx.accessibilityConfig.loadingSpinnerAriaLabel);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx.loadingConfig == null ? null : ctx.loadingConfig.type);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", ctx.loadingStandard);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", ctx.loadingBars);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", ctx.loadingCircular);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", ctx.loadingDots);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", ctx.loadingCubeFlipping);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", ctx.loadingCircles);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", ctx.loadingExplosingSquares);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgSwitchCase],
  styles: [".cssload-loader[_ngcontent-%COMP%]{position:absolute;inset:0;margin:auto;width:64px;height:64px;border-radius:50%;-o-border-radius:50%;-ms-border-radius:50%;-webkit-border-radius:50%;-moz-border-radius:50%;perspective:800px}.cssload-inner[_ngcontent-%COMP%]{position:absolute;width:100%;height:100%;box-sizing:border-box;-o-box-sizing:border-box;-ms-box-sizing:border-box;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;border-radius:50%;-o-border-radius:50%;-ms-border-radius:50%;-webkit-border-radius:50%;-moz-border-radius:50%}.cssload-inner.cssload-one[_ngcontent-%COMP%]{left:0%;top:0%;animation:_ngcontent-%COMP%_cssload-rotate-one .6s linear infinite;-o-animation:cssload-rotate-one .6s linear infinite;-ms-animation:cssload-rotate-one .6s linear infinite;-webkit-animation:_ngcontent-%COMP%_cssload-rotate-one .6s linear infinite;-moz-animation:cssload-rotate-one .6s linear infinite;border-bottom:3px solid rgba(255,255,255,.99)}.cssload-inner.cssload-two[_ngcontent-%COMP%]{right:0%;top:0%;animation:_ngcontent-%COMP%_cssload-rotate-two .6s linear infinite;-o-animation:cssload-rotate-two .6s linear infinite;-ms-animation:cssload-rotate-two .6s linear infinite;-webkit-animation:_ngcontent-%COMP%_cssload-rotate-two .6s linear infinite;-moz-animation:cssload-rotate-two .6s linear infinite;border-right:3px solid rgb(255,255,255)}.cssload-inner.cssload-three[_ngcontent-%COMP%]{right:0%;bottom:0%;animation:_ngcontent-%COMP%_cssload-rotate-three .6s linear infinite;-o-animation:cssload-rotate-three .6s linear infinite;-ms-animation:cssload-rotate-three .6s linear infinite;-webkit-animation:_ngcontent-%COMP%_cssload-rotate-three .6s linear infinite;-moz-animation:cssload-rotate-three .6s linear infinite;border-top:3px solid rgb(255,255,255)}@keyframes _ngcontent-%COMP%_cssload-rotate-one{0%{transform:rotateX(35deg) rotateY(-45deg) rotate(0)}to{transform:rotateX(35deg) rotateY(-45deg) rotate(360deg)}}@keyframes _ngcontent-%COMP%_cssload-rotate-two{0%{transform:rotateX(50deg) rotateY(10deg) rotate(0)}to{transform:rotateX(50deg) rotateY(10deg) rotate(360deg)}}@keyframes _ngcontent-%COMP%_cssload-rotate-three{0%{transform:rotateX(35deg) rotateY(55deg) rotate(0)}to{transform:rotateX(35deg) rotateY(55deg) rotate(360deg)}}", ".loader-dots[_ngcontent-%COMP%]{position:absolute;inset:0;color:#fefcff;font-size:10px;margin:auto;width:1em;height:1em;border-radius:50%;text-indent:-9999em;animation:_ngcontent-%COMP%_load4 1.3s infinite linear;transform:translateZ(0)}@keyframes _ngcontent-%COMP%_load4{0%,to{box-shadow:0 -3em 0 .2em,2em -2em,3em 0 0 -1em,2em 2em 0 -1em,0 3em 0 -1em,-2em 2em 0 -1em,-3em 0 0 -1em,-2em -2em}12.5%{box-shadow:0 -3em,2em -2em 0 .2em,3em 0,2em 2em 0 -1em,0 3em 0 -1em,-2em 2em 0 -1em,-3em 0 0 -1em,-2em -2em 0 -1em}25%{box-shadow:0 -3em 0 -.5em,2em -2em,3em 0 0 .2em,2em 2em,0 3em 0 -1em,-2em 2em 0 -1em,-3em 0 0 -1em,-2em -2em 0 -1em}37.5%{box-shadow:0 -3em 0 -1em,2em -2em 0 -1em,3em 0,2em 2em 0 .2em,0 3em,-2em 2em 0 -1em,-3em 0 0 -1em,-2em -2em 0 -1em}50%{box-shadow:0 -3em 0 -1em,2em -2em 0 -1em,3em 0 0 -1em,2em 2em,0 3em 0 .2em,-2em 2em,-3em 0 0 -1em,-2em -2em 0 -1em}62.5%{box-shadow:0 -3em 0 -1em,2em -2em 0 -1em,3em 0 0 -1em,2em 2em 0 -1em,0 3em,-2em 2em 0 .2em,-3em 0,-2em -2em 0 -1em}75%{box-shadow:0 -3em 0 -1em,2em -2em 0 -1em,3em 0 0 -1em,2em 2em 0 -1em,0 3em 0 -1em,-2em 2em,-3em 0 0 .2em,-2em -2em}87.5%{box-shadow:0 -3em,2em -2em 0 -1em,3em 0 0 -1em,2em 2em 0 -1em,0 3em 0 -1em,-2em 2em,-3em 0,-2em -2em 0 .2em}}", ".loader-bars[_ngcontent-%COMP%], .loader-bars[_ngcontent-%COMP%]:before, .loader-bars[_ngcontent-%COMP%]:after{background:#fefcff;animation:_ngcontent-%COMP%_load1 1s infinite ease-in-out;width:1em;height:4em}.loader-bars[_ngcontent-%COMP%]{position:absolute;inset:0;color:#fefcff;text-indent:-9999em;margin:auto;font-size:11px;transform:translateZ(0);animation-delay:-.16s}.loader-bars[_ngcontent-%COMP%]:before, .loader-bars[_ngcontent-%COMP%]:after{position:absolute;top:0;content:\"\"}.loader-bars[_ngcontent-%COMP%]:before{left:-1.5em;animation-delay:-.32s}.loader-bars[_ngcontent-%COMP%]:after{left:1.5em}@keyframes _ngcontent-%COMP%_load1{0%,80%,to{box-shadow:0 0;height:4em}40%{box-shadow:0 -2em;height:5em}}", ".loader-circular[_ngcontent-%COMP%], .loader-circular[_ngcontent-%COMP%]:after{border-radius:50%;width:10em;height:10em}.loader-circular[_ngcontent-%COMP%]{position:absolute;inset:0;margin:auto;font-size:10px;text-indent:-9999em;border-top:1.1em solid rgba(255,255,255,.2);border-right:1.1em solid rgba(255,255,255,.2);border-bottom:1.1em solid rgba(255,255,255,.2);border-left:1.1em solid #ffffff;transform:translateZ(0);animation:_ngcontent-%COMP%_load8 1.1s infinite linear}@keyframes _ngcontent-%COMP%_load8{0%{transform:rotate(0)}to{transform:rotate(360deg)}}", ".cube-folding[_ngcontent-%COMP%]{width:50px;height:50px;display:inline-block;transform:rotate(45deg);font-size:0}.cube-folding[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{position:relative;width:25px;height:25px;transform:scale(1.1);display:inline-block}.cube-folding[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:before{content:\"\";background-color:#fff;position:absolute;left:0;top:0;display:block;width:25px;height:25px;transform-origin:100% 100%;animation:_ngcontent-%COMP%_folding 2.5s infinite linear both}.cube-folding[_ngcontent-%COMP%]   .leaf2[_ngcontent-%COMP%]{transform:rotate(90deg) scale(1.1)}.cube-folding[_ngcontent-%COMP%]   .leaf2[_ngcontent-%COMP%]:before{animation-delay:.3s;background-color:#f2f2f2}.cube-folding[_ngcontent-%COMP%]   .leaf3[_ngcontent-%COMP%]{transform:rotate(270deg) scale(1.1)}.cube-folding[_ngcontent-%COMP%]   .leaf3[_ngcontent-%COMP%]:before{animation-delay:.9s;background-color:#f2f2f2}.cube-folding[_ngcontent-%COMP%]   .leaf4[_ngcontent-%COMP%]{transform:rotate(180deg) scale(1.1)}.cube-folding[_ngcontent-%COMP%]   .leaf4[_ngcontent-%COMP%]:before{animation-delay:.6s;background-color:#e6e6e6}@keyframes _ngcontent-%COMP%_folding{0%,10%{transform:perspective(140px) rotateX(-180deg);opacity:0}25%,75%{transform:perspective(140px) rotateX(0);opacity:1}90%,to{transform:perspective(140px) rotateY(180deg);opacity:0}}.cube-wrapper[_ngcontent-%COMP%]{position:fixed;left:50%;top:50%;margin-top:-50px;margin-left:-50px;width:100px;height:100px;text-align:center}@keyframes _ngcontent-%COMP%_text{to{top:35px}}@keyframes _ngcontent-%COMP%_shadow{to{bottom:-18px;width:100px}}", "#preloader[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100%;height:100%}#loader[_ngcontent-%COMP%]{display:block;position:relative;left:50%;top:50%;width:100px;height:100px;margin:-75px 0 0 -75px;border-radius:50%;border:3px solid transparent;border-top-color:#b4b4b4;animation:_ngcontent-%COMP%_spin 2s linear infinite}#loader[_ngcontent-%COMP%]:before{content:\"\";position:absolute;inset:5px;border-radius:50%;border:3px solid transparent;border-top-color:#d9d9d9;animation:_ngcontent-%COMP%_spin 3s linear infinite}#loader[_ngcontent-%COMP%]:after{content:\"\";position:absolute;inset:15px;border-radius:50%;border:3px solid transparent;border-top-color:#fff;animation:_ngcontent-%COMP%_spin 1.5s linear infinite}@keyframes _ngcontent-%COMP%_spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}", "@keyframes _ngcontent-%COMP%_loader{0%,10%,to{width:60px;height:60px}65%{width:150px;height:150px}}@keyframes _ngcontent-%COMP%_loaderBlock{0%,30%{transform:rotate(0)}55%{background-color:#b4b4b4}to{transform:rotate(90deg)}}@keyframes _ngcontent-%COMP%_loaderBlockInverse{0%,20%{transform:rotate(0)}55%{background-color:#d9d9d9}to{transform:rotate(-90deg)}}.loader[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;width:60px;height:60px;transform:translate(-50%,-50%) rotate(45deg) translateZ(0);animation:_ngcontent-%COMP%_loader 1.2s infinite ease-in-out}.loader[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{position:absolute;display:block;width:40px;height:40px;background-color:#fff;animation:_ngcontent-%COMP%_loaderBlock 1.2s infinite ease-in-out both}.loader[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(1){top:0;left:0}.loader[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2){top:0;right:0;animation:_ngcontent-%COMP%_loaderBlockInverse 1.2s infinite ease-in-out both}.loader[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(3){bottom:0;left:0;animation:_ngcontent-%COMP%_loaderBlockInverse 1.2s infinite ease-in-out both}.loader[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(4){bottom:0;right:0}"],
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoadingSpinnerComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'ks-loading-spinner',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      template: "<div [attr.aria-label]=\"accessibilityConfig?.loadingSpinnerAriaLabel\"\n     [title]=\"accessibilityConfig?.loadingSpinnerTitle\">\n\n  <ng-container [ngSwitch]=\"loadingConfig?.type\">\n    <ng-container *ngSwitchCase=\"loadingStandard\">\n      <div class=\"cssload-loader\">\n        <div class=\"cssload-inner cssload-one\"></div>\n        <div class=\"cssload-inner cssload-two\"></div>\n        <div class=\"cssload-inner cssload-three\"></div>\n      </div>\n    </ng-container>\n    <ng-container *ngSwitchCase=\"loadingBars\">\n      <div class=\"loader-bars\">\n      </div>\n    </ng-container>\n    <ng-container *ngSwitchCase=\"loadingCircular\">\n      <div class=\"loader-circular\">\n      </div>\n    </ng-container>\n    <ng-container *ngSwitchCase=\"loadingDots\">\n      <div class=\"loader-dots\">\n      </div>\n    </ng-container>\n    <ng-container *ngSwitchCase=\"loadingCubeFlipping\">\n      <div class=\"cube-wrapper\">\n        <div class=\"cube-folding\">\n          <span class=\"leaf1\"></span>\n          <span class=\"leaf2\"></span>\n          <span class=\"leaf3\"></span>\n          <span class=\"leaf4\"></span>\n        </div>\n      </div>\n    </ng-container>\n    <ng-container *ngSwitchCase=\"loadingCircles\">\n      <div id=\"preloader\">\n        <div id=\"loader\"></div>\n      </div>\n    </ng-container>\n    <ng-container *ngSwitchCase=\"loadingExplosingSquares\">\n      <div class=\"loader\">\n        <span></span>\n        <span></span>\n        <span></span>\n        <span></span>\n      </div>\n    </ng-container>\n  </ng-container>\n</div>\n",
      styles: [".cssload-loader{position:absolute;inset:0;margin:auto;width:64px;height:64px;border-radius:50%;-o-border-radius:50%;-ms-border-radius:50%;-webkit-border-radius:50%;-moz-border-radius:50%;perspective:800px}.cssload-inner{position:absolute;width:100%;height:100%;box-sizing:border-box;-o-box-sizing:border-box;-ms-box-sizing:border-box;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;border-radius:50%;-o-border-radius:50%;-ms-border-radius:50%;-webkit-border-radius:50%;-moz-border-radius:50%}.cssload-inner.cssload-one{left:0%;top:0%;animation:cssload-rotate-one .6s linear infinite;-o-animation:cssload-rotate-one .6s linear infinite;-ms-animation:cssload-rotate-one .6s linear infinite;-webkit-animation:cssload-rotate-one .6s linear infinite;-moz-animation:cssload-rotate-one .6s linear infinite;border-bottom:3px solid rgba(255,255,255,.99)}.cssload-inner.cssload-two{right:0%;top:0%;animation:cssload-rotate-two .6s linear infinite;-o-animation:cssload-rotate-two .6s linear infinite;-ms-animation:cssload-rotate-two .6s linear infinite;-webkit-animation:cssload-rotate-two .6s linear infinite;-moz-animation:cssload-rotate-two .6s linear infinite;border-right:3px solid rgb(255,255,255)}.cssload-inner.cssload-three{right:0%;bottom:0%;animation:cssload-rotate-three .6s linear infinite;-o-animation:cssload-rotate-three .6s linear infinite;-ms-animation:cssload-rotate-three .6s linear infinite;-webkit-animation:cssload-rotate-three .6s linear infinite;-moz-animation:cssload-rotate-three .6s linear infinite;border-top:3px solid rgb(255,255,255)}@keyframes cssload-rotate-one{0%{transform:rotateX(35deg) rotateY(-45deg) rotate(0)}to{transform:rotateX(35deg) rotateY(-45deg) rotate(360deg)}}@keyframes cssload-rotate-two{0%{transform:rotateX(50deg) rotateY(10deg) rotate(0)}to{transform:rotateX(50deg) rotateY(10deg) rotate(360deg)}}@keyframes cssload-rotate-three{0%{transform:rotateX(35deg) rotateY(55deg) rotate(0)}to{transform:rotateX(35deg) rotateY(55deg) rotate(360deg)}}\n", ".loader-dots{position:absolute;inset:0;color:#fefcff;font-size:10px;margin:auto;width:1em;height:1em;border-radius:50%;text-indent:-9999em;animation:load4 1.3s infinite linear;transform:translateZ(0)}@keyframes load4{0%,to{box-shadow:0 -3em 0 .2em,2em -2em,3em 0 0 -1em,2em 2em 0 -1em,0 3em 0 -1em,-2em 2em 0 -1em,-3em 0 0 -1em,-2em -2em}12.5%{box-shadow:0 -3em,2em -2em 0 .2em,3em 0,2em 2em 0 -1em,0 3em 0 -1em,-2em 2em 0 -1em,-3em 0 0 -1em,-2em -2em 0 -1em}25%{box-shadow:0 -3em 0 -.5em,2em -2em,3em 0 0 .2em,2em 2em,0 3em 0 -1em,-2em 2em 0 -1em,-3em 0 0 -1em,-2em -2em 0 -1em}37.5%{box-shadow:0 -3em 0 -1em,2em -2em 0 -1em,3em 0,2em 2em 0 .2em,0 3em,-2em 2em 0 -1em,-3em 0 0 -1em,-2em -2em 0 -1em}50%{box-shadow:0 -3em 0 -1em,2em -2em 0 -1em,3em 0 0 -1em,2em 2em,0 3em 0 .2em,-2em 2em,-3em 0 0 -1em,-2em -2em 0 -1em}62.5%{box-shadow:0 -3em 0 -1em,2em -2em 0 -1em,3em 0 0 -1em,2em 2em 0 -1em,0 3em,-2em 2em 0 .2em,-3em 0,-2em -2em 0 -1em}75%{box-shadow:0 -3em 0 -1em,2em -2em 0 -1em,3em 0 0 -1em,2em 2em 0 -1em,0 3em 0 -1em,-2em 2em,-3em 0 0 .2em,-2em -2em}87.5%{box-shadow:0 -3em,2em -2em 0 -1em,3em 0 0 -1em,2em 2em 0 -1em,0 3em 0 -1em,-2em 2em,-3em 0,-2em -2em 0 .2em}}\n", ".loader-bars,.loader-bars:before,.loader-bars:after{background:#fefcff;animation:load1 1s infinite ease-in-out;width:1em;height:4em}.loader-bars{position:absolute;inset:0;color:#fefcff;text-indent:-9999em;margin:auto;font-size:11px;transform:translateZ(0);animation-delay:-.16s}.loader-bars:before,.loader-bars:after{position:absolute;top:0;content:\"\"}.loader-bars:before{left:-1.5em;animation-delay:-.32s}.loader-bars:after{left:1.5em}@keyframes load1{0%,80%,to{box-shadow:0 0;height:4em}40%{box-shadow:0 -2em;height:5em}}\n", ".loader-circular,.loader-circular:after{border-radius:50%;width:10em;height:10em}.loader-circular{position:absolute;inset:0;margin:auto;font-size:10px;text-indent:-9999em;border-top:1.1em solid rgba(255,255,255,.2);border-right:1.1em solid rgba(255,255,255,.2);border-bottom:1.1em solid rgba(255,255,255,.2);border-left:1.1em solid #ffffff;transform:translateZ(0);animation:load8 1.1s infinite linear}@keyframes load8{0%{transform:rotate(0)}to{transform:rotate(360deg)}}\n", ".cube-folding{width:50px;height:50px;display:inline-block;transform:rotate(45deg);font-size:0}.cube-folding span{position:relative;width:25px;height:25px;transform:scale(1.1);display:inline-block}.cube-folding span:before{content:\"\";background-color:#fff;position:absolute;left:0;top:0;display:block;width:25px;height:25px;transform-origin:100% 100%;animation:folding 2.5s infinite linear both}.cube-folding .leaf2{transform:rotate(90deg) scale(1.1)}.cube-folding .leaf2:before{animation-delay:.3s;background-color:#f2f2f2}.cube-folding .leaf3{transform:rotate(270deg) scale(1.1)}.cube-folding .leaf3:before{animation-delay:.9s;background-color:#f2f2f2}.cube-folding .leaf4{transform:rotate(180deg) scale(1.1)}.cube-folding .leaf4:before{animation-delay:.6s;background-color:#e6e6e6}@keyframes folding{0%,10%{transform:perspective(140px) rotateX(-180deg);opacity:0}25%,75%{transform:perspective(140px) rotateX(0);opacity:1}90%,to{transform:perspective(140px) rotateY(180deg);opacity:0}}.cube-wrapper{position:fixed;left:50%;top:50%;margin-top:-50px;margin-left:-50px;width:100px;height:100px;text-align:center}@keyframes text{to{top:35px}}@keyframes shadow{to{bottom:-18px;width:100px}}\n", "#preloader{position:fixed;top:0;left:0;width:100%;height:100%}#loader{display:block;position:relative;left:50%;top:50%;width:100px;height:100px;margin:-75px 0 0 -75px;border-radius:50%;border:3px solid transparent;border-top-color:#b4b4b4;animation:spin 2s linear infinite}#loader:before{content:\"\";position:absolute;inset:5px;border-radius:50%;border:3px solid transparent;border-top-color:#d9d9d9;animation:spin 3s linear infinite}#loader:after{content:\"\";position:absolute;inset:15px;border-radius:50%;border:3px solid transparent;border-top-color:#fff;animation:spin 1.5s linear infinite}@keyframes spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}\n", "@keyframes loader{0%,10%,to{width:60px;height:60px}65%{width:150px;height:150px}}@keyframes loaderBlock{0%,30%{transform:rotate(0)}55%{background-color:#b4b4b4}to{transform:rotate(90deg)}}@keyframes loaderBlockInverse{0%,20%{transform:rotate(0)}55%{background-color:#d9d9d9}to{transform:rotate(-90deg)}}.loader{position:absolute;top:50%;left:50%;width:60px;height:60px;transform:translate(-50%,-50%) rotate(45deg) translateZ(0);animation:loader 1.2s infinite ease-in-out}.loader span{position:absolute;display:block;width:40px;height:40px;background-color:#fff;animation:loaderBlock 1.2s infinite ease-in-out both}.loader span:nth-child(1){top:0;left:0}.loader span:nth-child(2){top:0;right:0;animation:loaderBlockInverse 1.2s infinite ease-in-out both}.loader span:nth-child(3){bottom:0;left:0;animation:loaderBlockInverse 1.2s infinite ease-in-out both}.loader span:nth-child(4){bottom:0;right:0}\n"]
    }]
  }], null, {
    loadingConfig: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    accessibilityConfig: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();

/*
 The MIT License (MIT)

 Copyright (C) 2017-2022 Stefano Cappa (Ks89)

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.
 */
/**
 * Directive to change the size of an element.
 */
class SizeDirective {
  constructor(renderer, el) {
    this.renderer = renderer;
    this.el = el;
  }
  /**
   * Method ´ngOnInit´ to apply the style of this directive.
   * This is an Angular lifecycle hook, so its called automatically by Angular itself.
   * In particular, it's called only one time!!!
   */
  ngOnInit() {
    this.applyStyle();
  }
  /**
   * Method ´ngOnChanges´ to apply the style of this directive.
   * This is an Angular lifecycle hook, so its called automatically by Angular itself.
   * In particular, it's called when any data-bound property of a directive changes!!!
   */
  ngOnChanges() {
    this.applyStyle();
  }
  /**
   * Private method to change both width and height of an element.
   */
  applyStyle() {
    if (!this.sizeConfig) {
      return;
    }
    // apply [style.width]
    if (this.sizeConfig.width) {
      this.renderer.setStyle(this.el.nativeElement, 'width', this.sizeConfig.width);
    }
    if (this.sizeConfig.height) {
      this.renderer.setStyle(this.el.nativeElement, 'height', this.sizeConfig.height);
    }
  }
}
SizeDirective.ɵfac = function SizeDirective_Factory(t) {
  return new (t || SizeDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
};
SizeDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: SizeDirective,
  selectors: [["", "ksSize", ""]],
  inputs: {
    sizeConfig: "sizeConfig"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SizeDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[ksSize]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }];
  }, {
    sizeConfig: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();

/*
 The MIT License (MIT)

 Copyright (C) 2017-2022 Stefano Cappa (Ks89)

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.
 */
class KeyboardNavigationDirective {
  constructor() {
    this.keyboardNavigation = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  /**
   * Listener to catch keyboard's events and call the right method based on the key.
   * For instance, pressing esc, this will call `closeGallery(Action.KEYBOARD)` and so on.
   * If you passed a valid `keyboardConfig` esc, right and left buttons will be customized based on your data.
   * @param e KeyboardEvent caught by the listener.
   */
  onKeyDown(e) {
    if (!this.isOpen) {
      return;
    }
    this.keyboardNavigation.emit(e.code);
  }
}
KeyboardNavigationDirective.ɵfac = function KeyboardNavigationDirective_Factory(t) {
  return new (t || KeyboardNavigationDirective)();
};
KeyboardNavigationDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: KeyboardNavigationDirective,
  selectors: [["", "ksKeyboardNavigation", ""]],
  hostBindings: function KeyboardNavigationDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function KeyboardNavigationDirective_keydown_HostBindingHandler($event) {
        return ctx.onKeyDown($event);
      }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    }
  },
  inputs: {
    isOpen: "isOpen"
  },
  outputs: {
    keyboardNavigation: "keyboardNavigation"
  }
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](KeyboardNavigationDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[ksKeyboardNavigation]'
    }]
  }], null, {
    isOpen: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    keyboardNavigation: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onKeyDown: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['window:keydown', ['$event']]
    }]
  });
})();

/*
 The MIT License (MIT)

 Copyright (C) 2017-2022 Stefano Cappa (Ks89)

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.
 */
/**
 * Directive to customize the description.
 */
class DescriptionDirective {
  constructor(renderer, el) {
    this.renderer = renderer;
    this.el = el;
  }
  /**
   * Method ´ngOnInit´ to apply the style of this directive.
   * This is an Angular's lifecycle hook, so its called automatically by Angular itself.
   * In particular, it's called only one time!!!
   */
  ngOnInit() {
    this.applyStyle();
  }
  /**
   * Method ´ngOnChanges´ to apply the style of this directive.
   * This is an Angular's lifecycle hook, so its called automatically by Angular itself.
   * In particular, it's called when any data-bound property of a directive changes!!!
   */
  ngOnChanges() {
    this.applyStyle();
  }
  /**
   * Private method to change description's style.
   */
  applyStyle() {
    if (!this.description) {
      return;
    }
    if (this.description.style) {
      this.renderer.setStyle(this.el.nativeElement, 'background', this.description.style.bgColor);
      this.renderer.setStyle(this.el.nativeElement, 'color', this.description.style.textColor);
      if (this.description.style.width) {
        this.renderer.setStyle(this.el.nativeElement, 'width', this.description.style.width);
      }
      if (this.description.style.height) {
        this.renderer.setStyle(this.el.nativeElement, 'height', this.description.style.height);
      }
      if (this.description.style.position) {
        this.renderer.setStyle(this.el.nativeElement, 'position', this.description.style.position);
      }
      if (this.description.style.top) {
        this.renderer.setStyle(this.el.nativeElement, 'top', this.description.style.top);
      }
      if (this.description.style.bottom) {
        this.renderer.setStyle(this.el.nativeElement, 'bottom', this.description.style.bottom);
      }
      if (this.description.style.left) {
        this.renderer.setStyle(this.el.nativeElement, 'left', this.description.style.left);
      }
      if (this.description.style.right) {
        this.renderer.setStyle(this.el.nativeElement, 'right', this.description.style.right);
      }
      this.renderer.setStyle(this.el.nativeElement, 'margin-top', this.description.style.marginTop ? this.description.style.marginTop : '0px');
      this.renderer.setStyle(this.el.nativeElement, 'margin-bottom', this.description.style.marginBottom ? this.description.style.marginBottom : '0px');
      this.renderer.setStyle(this.el.nativeElement, 'margin-left', this.description.style.marginLeft ? this.description.style.marginLeft : '0px');
      this.renderer.setStyle(this.el.nativeElement, 'margin-right', this.description.style.marginRight ? this.description.style.marginRight : '0px');
    }
  }
}
DescriptionDirective.ɵfac = function DescriptionDirective_Factory(t) {
  return new (t || DescriptionDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
};
DescriptionDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: DescriptionDirective,
  selectors: [["", "ksDescription", ""]],
  inputs: {
    description: "description"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DescriptionDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[ksDescription]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }];
  }, {
    description: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();

/*
 The MIT License (MIT)

 Copyright (C) 2017-2022 Stefano Cappa (Ks89)

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.
 */
/**
 * Directive to add fallback image if the original one is not reachable.
 */
class FallbackImageDirective {
  constructor(renderer, el) {
    this.renderer = renderer;
    this.el = el;
    this.fallbackApplied = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  onError() {
    if (!this.fallbackImg) {
      this.fallbackApplied.emit(false);
      return;
    }
    this.renderer.setAttribute(this.el.nativeElement, 'src', this.fallbackImg.toString());
    this.fallbackApplied.emit(true);
  }
}
FallbackImageDirective.ɵfac = function FallbackImageDirective_Factory(t) {
  return new (t || FallbackImageDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
};
FallbackImageDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: FallbackImageDirective,
  selectors: [["", "ksFallbackImage", ""]],
  hostBindings: function FallbackImageDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("error", function FallbackImageDirective_error_HostBindingHandler() {
        return ctx.onError();
      });
    }
  },
  inputs: {
    fallbackImg: "fallbackImg"
  },
  outputs: {
    fallbackApplied: "fallbackApplied"
  }
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FallbackImageDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[ksFallbackImage]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }];
  }, {
    fallbackImg: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    fallbackApplied: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onError: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['error']
    }]
  });
})();

/*
 The MIT License (MIT)

 Copyright (C) 2017-2022 Stefano Cappa (Ks89)

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.
 */
/**
 * Component with the current image with some additional elements like arrows and side previews.
 */
class CurrentImageComponent extends AccessibleComponent {
  // use public ChangeDetectorRef to be able to call it from spec files to trigger change detection
  // tslint:disable-next-line:no-any
  constructor(platformId, ngZone, ref, configService) {
    super();
    this.platformId = platformId;
    this.ngZone = ngZone;
    this.ref = ref;
    this.configService = configService;
    /**
     * Output to emit an event when images are loaded. The payload contains an `ImageLoadEvent`.
     */
    this.loadImage = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Output to emit any changes of the current image. The payload contains an `ImageModalEvent`.
     */
    this.changeImage = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Output to emit an event when the modal gallery is closed. The payload contains an `ImageModalEvent`.
     */
    this.closeGallery = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Subject to play modal-gallery.
     */
    this.start$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    /**
     * Subject to stop modal-gallery.
     */
    this.stop$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    /**
     * Enum of type `Action` that represents a normal action.
     * Declared here to be used inside the template.
     */
    this.normalAction = Action.NORMAL;
    /**
     * Enum of type `Action` that represents a mouse click on a button.
     * Declared here to be used inside the template.
     */
    this.clickAction = Action.CLICK;
    /**
     * Enum of type `Action` that represents a keyboard action.
     * Declared here to be used inside the template.
     */
    this.keyboardAction = Action.KEYBOARD;
    /**
     * Boolean that it's true when you are watching the first image (currently visible).
     * False by default
     */
    this.isFirstImage = false;
    /**
     * Boolean that it's true when you are watching the last image (currently visible).
     * False by default
     */
    this.isLastImage = false;
    /**
     * Boolean that it's true if an image of the modal gallery is still loading.
     * True by default
     */
    this.loading = true;
    /**
     * Private object without type to define all swipe actions used by hammerjs.
     */
    this.SWIPE_ACTION = {
      LEFT: 'swipeleft',
      RIGHT: 'swiperight',
      UP: 'swipeup',
      DOWN: 'swipedown'
    };
  }
  /**
   * Listener to stop the gallery when the mouse pointer is over the current image.
   */
  onMouseEnter() {
    // if carousel feature is disable, don't do anything in any case
    if (!this.slideConfig || !this.slideConfig.playConfig) {
      return;
    }
    if (!this.slideConfig.playConfig.pauseOnHover) {
      return;
    }
    this.stopCarousel();
  }
  /**
   * Listener to play the gallery when the mouse pointer leave the current image.
   */
  onMouseLeave() {
    // if carousel feature is disable, don't do anything in any case
    if (!this.slideConfig || !this.slideConfig.playConfig) {
      return;
    }
    if (!this.slideConfig.playConfig.pauseOnHover || !this.slideConfig.playConfig.autoPlay) {
      return;
    }
    this.playCarousel();
  }
  /**
   * Method ´ngOnInit´ to init configuration.
   * This is an Angular's lifecycle hook, so its called automatically by Angular itself.
   * In particular, it's called only one time!!!
   */
  ngOnInit() {
    const libConfig = this.configService.getConfig(this.id);
    if (!libConfig || !libConfig.buttonsConfig) {
      throw new Error('Internal library error - libConfig and buttonsConfig must be defined');
    }
    this.slideConfig = libConfig.slideConfig;
    this.accessibilityConfig = libConfig.accessibilityConfig;
    this.currentImageConfig = libConfig.currentImageConfig;
    this.keyboardConfig = libConfig.keyboardConfig;
  }
  /**
   * Method ´ngOnChanges´ to update `loading` status and emit events.
   * If the gallery is open, then it will also manage boundary arrows and sliding.
   * This is an Angular's lifecycle hook, so its called automatically by Angular itself.
   * In particular, it's called when any data-bound property of a directive changes!!!
   */
  ngOnChanges(changes) {
    const libConfig = this.configService.getConfig(this.id);
    if (!libConfig) {
      throw new Error('Internal library error - libConfig must be defined');
    }
    const images = changes.images;
    const currentImage = changes.currentImage;
    if (currentImage && currentImage.previousValue !== currentImage.currentValue) {
      this.updateIndexes();
    } else if (images && images.previousValue !== images.currentValue) {
      this.updateIndexes();
    }
    const slideConfig = changes.slideConfig;
    if (slideConfig && slideConfig.previousValue !== slideConfig.currentValue) {
      this.slideConfig = libConfig.slideConfig;
    }
  }
  /**
   * This is an Angular's lifecycle hook, so its called automatically by Angular itself.
   */
  ngAfterContentInit() {
    // interval doesn't play well with SSR and protractor,
    // so we should run it in the browser and outside Angular
    if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_1__.isPlatformBrowser)(this.platformId)) {
      this.ngZone.runOutsideAngular(() => {
        this.start$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(() => this.slideConfig && this.slideConfig.playConfig && this.slideConfig.playConfig.autoPlay && this.slideConfig.playConfig.interval),
        // tslint:disable-next-line:no-any
        (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.filter)(interval => interval > 0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(interval => (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.timer)(interval).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.stop$)))).subscribe(() => this.ngZone.run(() => {
          if (!this.isLastImage) {
            this.nextImage(Action.AUTOPLAY);
          }
          this.ref.markForCheck();
        }));
        this.start$.next();
      });
    }
  }
  /**
   * Method to handle keypress based on the `keyboardConfig` input. It gets the code of
   * the key that triggered the keypress event to navigate between images or to close the modal gallery.
   * @param code string of the key that triggered the keypress event
   */
  onKeyPress(code) {
    const esc = this.keyboardConfig && this.keyboardConfig.esc ? this.keyboardConfig.esc : Keyboard.ESC;
    const right = this.keyboardConfig && this.keyboardConfig.right ? this.keyboardConfig.right : Keyboard.RIGHT_ARROW;
    const left = this.keyboardConfig && this.keyboardConfig.left ? this.keyboardConfig.left : Keyboard.LEFT_ARROW;
    switch (code) {
      case esc:
        this.closeGallery.emit(new ImageModalEvent(this.id, Action.KEYBOARD, true));
        break;
      case right:
        this.nextImage(Action.KEYBOARD);
        break;
      case left:
        this.prevImage(Action.KEYBOARD);
        break;
    }
  }
  /**
   * Method to get the image description based on input params.
   * If you provide a full description this will be the visible description, otherwise,
   * it will be built using the `Description` object, concatenating its fields.
   * @param Image image to get its description. If not provided it will be the current image
   * @returns String description of the image (or the current image if not provided)
   * @throws an Error if description isn't available
   */
  getDescriptionToDisplay(image = this.currentImage) {
    if (!this.currentImageConfig || !this.currentImageConfig.description) {
      throw new Error('Description input must be a valid object implementing the Description interface');
    }
    const imageWithoutDescription = !image.modal || !image.modal.description || image.modal.description === '';
    switch (this.currentImageConfig.description.strategy) {
      case DescriptionStrategy.HIDE_IF_EMPTY:
        return imageWithoutDescription ? '' : image.modal.description + '';
      case DescriptionStrategy.ALWAYS_HIDDEN:
        return '';
      default:
        // ----------- DescriptionStrategy.ALWAYS_VISIBLE -----------------
        return this.buildTextDescription(image, imageWithoutDescription);
    }
  }
  /**
   * Method to get `alt attribute`.
   * `alt` specifies an alternate text for an image, if the image cannot be displayed.
   * @param Image image to get its alt description. If not provided it will be the current image
   * @returns String alt description of the image (or the current image if not provided)
   */
  getAltDescriptionByImage(image = this.currentImage) {
    if (!image) {
      return '';
    }
    return image.modal && image.modal.description ? image.modal.description : `Image ${getIndex(image, this.images) + 1}`;
  }
  /**
   * Method to get the title attributes based on descriptions.
   * This is useful to prevent accessibility issues, because if DescriptionStrategy is ALWAYS_HIDDEN,
   * it prevents an empty string as title.
   * @param Image image to get its description. If not provided it will be the current image
   * @returns String title of the image based on descriptions
   * @throws an Error if description isn't available
   */
  getTitleToDisplay(image = this.currentImage) {
    if (!this.currentImageConfig || !this.currentImageConfig.description) {
      throw new Error('Description input must be a valid object implementing the Description interface');
    }
    const imageWithoutDescription = !image.modal || !image.modal.description || image.modal.description === '';
    const description = this.buildTextDescription(image, imageWithoutDescription);
    return description;
  }
  /**
   * Method to get the left side preview image.
   * @returns Image the image to show as size preview on the left
   */
  getLeftPreviewImage() {
    if (!this.slideConfig) {
      throw new Error('Internal library error - slideConfig must be defined');
    }
    const currentIndex = getIndex(this.currentImage, this.images);
    if (currentIndex === 0 && this.slideConfig.infinite) {
      // the current image is the first one,
      // so the previous one is the last image
      // because infinite is true
      return this.images[this.images.length - 1];
    }
    this.handleBoundaries(currentIndex);
    return this.images[Math.max(currentIndex - 1, 0)];
  }
  /**
   * Method to get the right side preview image.
   * @returns Image the image to show as size preview on the right
   */
  getRightPreviewImage() {
    if (!this.slideConfig) {
      throw new Error('Internal library error - slideConfig must be defined');
    }
    const currentIndex = getIndex(this.currentImage, this.images);
    if (currentIndex === this.images.length - 1 && this.slideConfig.infinite) {
      // the current image is the last one,
      // so the next one is the first image
      // because infinite is true
      return this.images[0];
    }
    this.handleBoundaries(currentIndex);
    return this.images[Math.min(currentIndex + 1, this.images.length - 1)];
  }
  /**
   * Method called by events from both keyboard and mouse on an image.
   * This will invoke the nextImage method.
   * @param KeyboardEvent | MouseEvent event payload
   * @param Action action that triggered the event or `Action.NORMAL` if not provided
   */
  onImageEvent(event, action = Action.NORMAL) {
    if (!this.currentImageConfig) {
      throw new Error('Internal library error - currentImageConfig must be defined');
    }
    // check if triggered by a mouse click
    // If yes, It should block navigation when navigateOnClick is false
    if (action === Action.CLICK && !this.currentImageConfig.navigateOnClick) {
      // a user has requested to block navigation via configCurrentImage.navigateOnClick property
      return;
    }
    const result = super.handleImageEvent(event);
    if (result === NEXT) {
      this.nextImage(action);
    }
  }
  /**
   * Method called by events from both keyboard and mouse on a navigation arrow.
   * @param string direction of the navigation that can be either 'next' or 'prev'
   * @param KeyboardEvent | MouseEvent event payload
   * @param Action action that triggered the event or `Action.NORMAL` if not provided
   * @param boolean disable to disable navigation
   */
  onNavigationEvent(direction, event, action = Action.NORMAL, disable = false) {
    if (disable) {
      return;
    }
    const result = super.handleNavigationEvent(direction, event);
    if (result === NEXT) {
      this.nextImage(action);
    } else if (result === PREV) {
      this.prevImage(action);
    }
  }
  /**
   * Method to go back to the previous image.
   * @param action Enum of type `Action` that represents the source
   *  action that moved back to the previous image. `Action.NORMAL` by default.
   */
  prevImage(action = Action.NORMAL) {
    // check if prevImage should be blocked
    if (this.isPreventSliding(0)) {
      return;
    }
    const prevImage = this.getPrevImage();
    this.loading = !prevImage.previouslyLoaded;
    this.changeImage.emit(new ImageModalEvent(this.id, action, getIndex(prevImage, this.images)));
    this.start$.next();
  }
  /**
   * Method to go back to the previous image.
   * @param action Enum of type `Action` that represents the source
   *  action that moved to the next image. `Action.NORMAL` by default.
   */
  nextImage(action = Action.NORMAL) {
    // check if nextImage should be blocked
    if (this.isPreventSliding(this.images.length - 1)) {
      return;
    }
    const nextImage = this.getNextImage();
    this.loading = !nextImage.previouslyLoaded;
    this.changeImage.emit(new ImageModalEvent(this.id, action, getIndex(nextImage, this.images)));
    this.start$.next();
  }
  /**
   * Method to emit an event as loadImage output to say that the requested image if loaded.
   * This method is invoked by the javascript's 'load' event on an img tag.
   * @param Event event that triggered the load
   */
  onImageLoad(event) {
    const loadImageData = {
      status: true,
      index: getIndex(this.currentImage, this.images),
      id: this.currentImage.id
    };
    this.loadImage.emit(loadImageData);
    this.loading = false;
  }
  /**
   * Method used by Hammerjs to support touch gestures (you can also invert the swipe direction with configCurrentImage.invertSwipe).
   * @param action String that represent the direction of the swipe action. 'swiperight' by default.
   */
  swipe(action = this.SWIPE_ACTION.RIGHT) {
    if (!this.currentImageConfig) {
      throw new Error('Internal library error - currentImageConfig must be defined');
    }
    switch (action) {
      case this.SWIPE_ACTION.RIGHT:
        if (this.currentImageConfig.invertSwipe) {
          this.prevImage(Action.SWIPE);
        } else {
          this.nextImage(Action.SWIPE);
        }
        break;
      case this.SWIPE_ACTION.LEFT:
        if (this.currentImageConfig.invertSwipe) {
          this.nextImage(Action.SWIPE);
        } else {
          this.prevImage(Action.SWIPE);
        }
        break;
      // case this.SWIPE_ACTION.UP:
      //   break;
      // case this.SWIPE_ACTION.DOWN:
      //   break;
    }
  }
  /**
   * Method used in `modal-gallery.component` to get the index of an image to delete.
   * @param Image image to get the index, or the visible image, if not passed
   * @returns number the index of the image
   */
  getIndexToDelete(image = this.currentImage) {
    return getIndex(image, this.images);
  }
  /**
   * Method to play modal gallery.
   */
  playCarousel() {
    this.start$.next();
  }
  /**
   * Stops modal gallery from cycling through items.
   */
  stopCarousel() {
    this.stop$.next();
  }
  /**
   * Method to cleanup resources. In fact, this will stop the modal gallery.
   * This is an Angular's lifecycle hook that is called when this component is destroyed.
   */
  ngOnDestroy() {
    this.stopCarousel();
  }
  /**
   * Private method to update both `isFirstImage` and `isLastImage` based on
   * the index of the current image.
   * @param number currentIndex is the index of the current image
   */
  handleBoundaries(currentIndex) {
    if (this.images.length === 1) {
      this.isFirstImage = true;
      this.isLastImage = true;
      this.ref.markForCheck();
      return;
    }
    if (!this.slideConfig || this.slideConfig.infinite === true) {
      // infinite sliding enabled
      this.isFirstImage = false;
      this.isLastImage = false;
      this.ref.markForCheck();
    } else {
      // execute this only if infinite sliding is disabled
      switch (currentIndex) {
        case 0:
          this.isFirstImage = true;
          this.isLastImage = false;
          this.ref.markForCheck();
          break;
        case this.images.length - 1:
          this.isFirstImage = false;
          this.isLastImage = true;
          this.ref.markForCheck();
          break;
        default:
          this.isFirstImage = false;
          this.isLastImage = false;
          this.ref.markForCheck();
          break;
      }
    }
  }
  /**
   * Private method to check if next/prev actions should be blocked.
   * It checks if slideConfig.infinite === false and if the image index is equals to the input parameter.
   * If yes, it returns true to say that sliding should be blocked, otherwise not.
   * @param number boundaryIndex that could be either the beginning index (0) or the last index
   *  of images (this.images.length - 1).
   * @returns boolean true if slideConfig.infinite === false and the current index is
   *  either the first or the last one.
   */
  isPreventSliding(boundaryIndex) {
    return !!this.slideConfig && this.slideConfig.infinite === false && getIndex(this.currentImage, this.images) === boundaryIndex;
  }
  /**
   * Private method to get the next index.
   * This is necessary because at the end, when you call next again, you'll go to the first image.
   * That happens because all modal images are shown like in a circle.
   */
  getNextImage() {
    const currentIndex = getIndex(this.currentImage, this.images);
    let newIndex = 0;
    if (currentIndex >= 0 && currentIndex < this.images.length - 1) {
      newIndex = currentIndex + 1;
    } else {
      newIndex = 0; // start from the first index
    }

    return this.images[newIndex];
  }
  /**
   * Private method to get the previous index.
   * This is necessary because at index 0, when you call prev again, you'll go to the last image.
   * That happens because all modal images are shown like in a circle.
   */
  getPrevImage() {
    const currentIndex = getIndex(this.currentImage, this.images);
    let newIndex = 0;
    if (currentIndex > 0 && currentIndex <= this.images.length - 1) {
      newIndex = currentIndex - 1;
    } else {
      newIndex = this.images.length - 1; // start from the last index
    }

    return this.images[newIndex];
  }
  /**
   * Private method to build a text description.
   * This is used also to create titles.
   * @param Image image to get its description. If not provided it will be the current image.
   * @param boolean imageWithoutDescription is a boolean that it's true if the image hasn't a 'modal' description.
   * @returns String description built concatenating image fields with a specific logic.
   */
  buildTextDescription(image, imageWithoutDescription) {
    if (!this.currentImageConfig || !this.currentImageConfig.description) {
      throw new Error('Description input must be a valid object implementing the Description interface');
    }
    // If customFullDescription use it, otherwise proceed to build a description
    if (this.currentImageConfig.description.customFullDescription && this.currentImageConfig.description.customFullDescription !== '') {
      return this.currentImageConfig.description.customFullDescription;
    }
    const currentIndex = getIndex(image, this.images);
    // If the current image hasn't a description,
    // prevent to write the ' - ' (or this.description.beforeTextDescription)
    const prevDescription = this.currentImageConfig.description.imageText ? this.currentImageConfig.description.imageText : '';
    const midSeparator = this.currentImageConfig.description.numberSeparator ? this.currentImageConfig.description.numberSeparator : '';
    const middleDescription = currentIndex + 1 + midSeparator + this.images.length;
    if (imageWithoutDescription) {
      return prevDescription + middleDescription;
    }
    const currImgDescription = image.modal && image.modal.description ? image.modal.description : '';
    const endDescription = this.currentImageConfig.description.beforeTextDescription + currImgDescription;
    return prevDescription + middleDescription + endDescription;
  }
  /**
   * Private method to call handleBoundaries when ngOnChanges is called.
   */
  updateIndexes() {
    try {
      if (this.isOpen) {
        const index = getIndex(this.currentImage, this.images);
        this.handleBoundaries(index);
      }
    } catch (err) {
      console.error('Cannot get the current image index in current-image');
      throw err;
    }
  }
}
CurrentImageComponent.ɵfac = function CurrentImageComponent_Factory(t) {
  return new (t || CurrentImageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ConfigService));
};
CurrentImageComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: CurrentImageComponent,
  selectors: [["ks-current-image"]],
  hostBindings: function CurrentImageComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function CurrentImageComponent_mouseenter_HostBindingHandler() {
        return ctx.onMouseEnter();
      })("mouseleave", function CurrentImageComponent_mouseleave_HostBindingHandler() {
        return ctx.onMouseLeave();
      });
    }
  },
  inputs: {
    id: "id",
    currentImage: "currentImage",
    images: "images",
    isOpen: "isOpen"
  },
  outputs: {
    loadImage: "loadImage",
    changeImage: "changeImage",
    closeGallery: "closeGallery"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
  decls: 13,
  vars: 34,
  consts: [["ksKeyboardNavigation", "", 1, "main-image-container", 3, "isOpen", "title", "keyboardNavigation"], [1, "left-sub-container"], ["role", "button", 3, "tabIndex", "click", "keyup"], ["aria-hidden", "true", 3, "title"], [4, "ngIf"], ["id", "current-figure"], ["id", "current-image", "ksFallbackImage", "", "role", "img", 1, "inside", 3, "ngClass", "src", "fallbackImg", "title", "alt", "tabIndex", "load", "click", "keyup", "swipeleft", "swiperight"], ["class", "inside description", "ksDescription", "", 3, "description", "innerHTML", 4, "ngIf"], [1, "right-sub-container"], ["class", "inside current-image-previous", "ksFallbackImage", "", "ksSize", "", "role", "img", 3, "src", "fallbackImg", "hidden", "sizeConfig", "title", "alt", "tabIndex", "click", "keyup", 4, "ngIf", "ngIfElse"], ["firstImage", ""], ["ksFallbackImage", "", "ksSize", "", "role", "img", 1, "inside", "current-image-previous", 3, "src", "fallbackImg", "hidden", "sizeConfig", "title", "alt", "tabIndex", "click", "keyup"], ["ksSize", "", 1, "current-image-previous", "hidden", 3, "sizeConfig"], ["ksDescription", "", 1, "inside", "description", 3, "description", "innerHTML"], ["class", "inside current-image-next", "ksFallbackImage", "", "ksSize", "", "role", "img", 3, "src", "fallbackImg", "hidden", "sizeConfig", "title", "alt", "tabIndex", "click", "keyup", 4, "ngIf", "ngIfElse"], ["lastImage", ""], ["ksFallbackImage", "", "ksSize", "", "role", "img", 1, "inside", "current-image-next", 3, "src", "fallbackImg", "hidden", "sizeConfig", "title", "alt", "tabIndex", "click", "keyup"], ["ksSize", "", 1, "current-image-next", "hidden", 3, "sizeConfig"], [3, "loadingConfig", "accessibilityConfig"]],
  template: function CurrentImageComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyboardNavigation", function CurrentImageComponent_Template_main_keyboardNavigation_0_listener($event) {
        return ctx.onKeyPress($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1)(2, "a", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CurrentImageComponent_Template_a_click_2_listener($event) {
        return ctx.onNavigationEvent("left", $event);
      })("keyup", function CurrentImageComponent_Template_a_keyup_2_listener($event) {
        return ctx.onNavigationEvent("left", $event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CurrentImageComponent_ng_container_4_Template, 2, 1, "ng-container", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "figure", 5)(6, "img", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("load", function CurrentImageComponent_Template_img_load_6_listener($event) {
        return ctx.onImageLoad($event);
      })("click", function CurrentImageComponent_Template_img_click_6_listener($event) {
        return ctx.onImageEvent($event, ctx.clickAction);
      })("keyup", function CurrentImageComponent_Template_img_keyup_6_listener($event) {
        return ctx.onImageEvent($event, ctx.keyboardAction);
      })("swipeleft", function CurrentImageComponent_Template_img_swipeleft_6_listener($event) {
        return ctx.swipe($event.type);
      })("swiperight", function CurrentImageComponent_Template_img_swiperight_6_listener($event) {
        return ctx.swipe($event.type);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, CurrentImageComponent_figcaption_7_Template, 1, 2, "figcaption", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, CurrentImageComponent_ng_container_9_Template, 2, 1, "ng-container", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, CurrentImageComponent_ng_container_10_Template, 2, 2, "ng-container", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CurrentImageComponent_Template_a_click_11_listener($event) {
        return ctx.onNavigationEvent("right", $event);
      })("keyup", function CurrentImageComponent_Template_a_keyup_11_listener($event) {
        return ctx.onNavigationEvent("right", $event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isOpen", ctx.isOpen)("title", ctx.accessibilityConfig == null ? null : ctx.accessibilityConfig.mainContainerTitle);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx.accessibilityConfig == null ? null : ctx.accessibilityConfig.mainContainerAriaLabel);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("nav-left ", ctx.isFirstImage ? "no-pointer" : "", "");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tabIndex", ctx.isFirstImage ? -1 : 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx.accessibilityConfig == null ? null : ctx.accessibilityConfig.mainPrevImageAriaLabel);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("inside ", ctx.isFirstImage ? "empty-arrow-image" : "left-arrow-image", "");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx.isFirstImage ? "" : ctx.accessibilityConfig == null ? null : ctx.accessibilityConfig.mainPrevImageTitle);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.slideConfig == null ? null : ctx.slideConfig.sidePreviews == null ? null : ctx.slideConfig.sidePreviews.show);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("display", ctx.loading ? "none" : "");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", ctx.currentImage.modal.alt ? ctx.currentImage.modal.alt : ctx.getAltDescriptionByImage());
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", (ctx.currentImageConfig == null ? null : ctx.currentImageConfig.navigateOnClick) ? "" : "unclickable")("src", ctx.currentImage.modal.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("fallbackImg", ctx.currentImage.modal.fallbackImg)("title", ctx.currentImage.modal.title || ctx.currentImage.modal.title === "" ? ctx.currentImage.modal.title : ctx.getTitleToDisplay())("tabIndex", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx.currentImage.modal.ariaLabel);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.getDescriptionToDisplay() !== "");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.slideConfig == null ? null : ctx.slideConfig.sidePreviews == null ? null : ctx.slideConfig.sidePreviews.show);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading && (ctx.currentImageConfig == null ? null : ctx.currentImageConfig.loadingConfig == null ? null : ctx.currentImageConfig.loadingConfig.enable));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("nav-right ", ctx.isFirstImage ? "no-pointer" : "", "");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tabIndex", ctx.isLastImage ? -1 : 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx.accessibilityConfig == null ? null : ctx.accessibilityConfig.mainNextImageAriaLabel);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("inside ", ctx.isLastImage ? "empty-arrow-image" : "right-arrow-image", "");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx.isLastImage ? "" : ctx.accessibilityConfig == null ? null : ctx.accessibilityConfig.mainNextImageTitle);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, LoadingSpinnerComponent, SizeDirective, KeyboardNavigationDirective, DescriptionDirective, FallbackImageDirective],
  styles: ["[_nghost-%COMP%]{display:flex;flex-direction:column;justify-content:center}.main-image-container[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;justify-content:space-between}.main-image-container[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%], .main-image-container[_ngcontent-%COMP%] > .right-sub-container[_ngcontent-%COMP%] > .nav-right[_ngcontent-%COMP%], .main-image-container[_ngcontent-%COMP%] > .left-sub-container[_ngcontent-%COMP%] > .nav-left[_ngcontent-%COMP%]{animation:animatezoom 1s;cursor:pointer;transition:all .5s}.main-image-container[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]:hover, .main-image-container[_ngcontent-%COMP%] > .right-sub-container[_ngcontent-%COMP%] > .nav-right[_ngcontent-%COMP%]:hover, .main-image-container[_ngcontent-%COMP%] > .left-sub-container[_ngcontent-%COMP%] > .nav-left[_ngcontent-%COMP%]:hover{transform:scale(1.1)}.main-image-container[_ngcontent-%COMP%] > .left-sub-container[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-around;align-items:center}.main-image-container[_ngcontent-%COMP%] > .left-sub-container[_ngcontent-%COMP%] > .nav-left[_ngcontent-%COMP%]{margin-right:5px;margin-left:15px}.main-image-container[_ngcontent-%COMP%] > .left-sub-container[_ngcontent-%COMP%] > .nav-left.no-pointer[_ngcontent-%COMP%]{cursor:default!important}.main-image-container[_ngcontent-%COMP%] > .right-sub-container[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-around;align-items:center}.main-image-container[_ngcontent-%COMP%] > .right-sub-container[_ngcontent-%COMP%] > .nav-right[_ngcontent-%COMP%]{margin-right:15px;margin-left:5px}.main-image-container[_ngcontent-%COMP%] > .right-sub-container[_ngcontent-%COMP%] > .nav-right.no-pointer[_ngcontent-%COMP%]{cursor:default!important}.main-image-container[_ngcontent-%COMP%]   #current-figure[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_fadein-visible .8s;text-align:center;margin:0;position:relative}.main-image-container[_ngcontent-%COMP%]   #current-figure[_ngcontent-%COMP%] > #current-image[_ngcontent-%COMP%]{max-width:100%;height:auto;display:block}.main-image-container[_ngcontent-%COMP%]   #current-figure[_ngcontent-%COMP%] > #current-image.unclickable[_ngcontent-%COMP%]{cursor:not-allowed}.main-image-container[_ngcontent-%COMP%]   #current-figure[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%]{padding:10px;position:absolute;bottom:0;left:0;right:0}.main-image-container[_ngcontent-%COMP%]   #current-figure[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]{font-weight:700;text-align:center}#current-image[_ngcontent-%COMP%]{height:auto;max-width:80vw;max-height:60vh;cursor:pointer}@media screen and (min-width: 70vw){#current-image[_ngcontent-%COMP%]{max-width:70vw}}@keyframes _ngcontent-%COMP%_fadein-visible{0%{opacity:0}to{opacity:1}}@keyframes _ngcontent-%COMP%_fadein-semi-visible05{0%{opacity:0}to{opacity:.5}}@keyframes _ngcontent-%COMP%_fadein-semi-visible08{0%{opacity:0}to{opacity:.8}}@keyframes _ngcontent-%COMP%_fadein-semi-visible09{0%{opacity:0}to{opacity:.9}}", ".arrow-image[_ngcontent-%COMP%], .right-arrow-image[_ngcontent-%COMP%], .left-arrow-image[_ngcontent-%COMP%], .empty-arrow-image[_ngcontent-%COMP%]{width:30px;height:30px;background-size:30px}.empty-arrow-image[_ngcontent-%COMP%]{background:black;opacity:0}.left-arrow-image[_ngcontent-%COMP%]{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ3Ny4xNzUgNDc3LjE3NSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDc3LjE3NSA0NzcuMTc1OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4Ij48Zz48cGF0aCBkPSJNMTQ1LjE4OCwyMzguNTc1bDIxNS41LTIxNS41YzUuMy01LjMsNS4zLTEzLjgsMC0xOS4xcy0xMy44LTUuMy0xOS4xLDBsLTIyNS4xLDIyNS4xYy01LjMsNS4zLTUuMywxMy44LDAsMTkuMWwyMjUuMSwyMjUgICBjMi42LDIuNiw2LjEsNCw5LjUsNHM2LjktMS4zLDkuNS00YzUuMy01LjMsNS4zLTEzLjgsMC0xOS4xTDE0NS4xODgsMjM4LjU3NXoiIGZpbGw9IiNGRkZGRkYiLz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PC9zdmc+);opacity:.8;transition:all .5s}.left-arrow-image[_ngcontent-%COMP%]:hover{transform:scale(1.2)}.right-arrow-image[_ngcontent-%COMP%]{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ3Ny4xNzUgNDc3LjE3NSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDc3LjE3NSA0NzcuMTc1OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4Ij48Zz48cGF0aCBkPSJNMzYwLjczMSwyMjkuMDc1bC0yMjUuMS0yMjUuMWMtNS4zLTUuMy0xMy44LTUuMy0xOS4xLDBzLTUuMywxMy44LDAsMTkuMWwyMTUuNSwyMTUuNWwtMjE1LjUsMjE1LjUgICBjLTUuMyw1LjMtNS4zLDEzLjgsMCwxOS4xYzIuNiwyLjYsNi4xLDQsOS41LDRjMy40LDAsNi45LTEuMyw5LjUtNGwyMjUuMS0yMjUuMUMzNjUuOTMxLDI0Mi44NzUsMzY1LjkzMSwyMzQuMjc1LDM2MC43MzEsMjI5LjA3NXogICAiIGZpbGw9IiNGRkZGRkYiLz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PC9zdmc+);opacity:.8;transition:all .5s}.right-arrow-image[_ngcontent-%COMP%]:hover{transform:scale(1.2)}", "@media only screen and (max-width: 1024px),only screen and (max-device-width: 1024px){.current-image-previous[_ngcontent-%COMP%], .current-image-next[_ngcontent-%COMP%]{display:none}}@media only screen and (min-device-width: 1025px){.current-image-preview[_ngcontent-%COMP%], .current-image-next[_ngcontent-%COMP%], .current-image-previous[_ngcontent-%COMP%]{height:auto;cursor:pointer;opacity:.5;animation:_ngcontent-%COMP%_fadein-semi-visible05 .8s;filter:alpha(opacity=50)}.current-image-preview[_ngcontent-%COMP%]:hover, .current-image-next[_ngcontent-%COMP%]:hover, .current-image-previous[_ngcontent-%COMP%]:hover{opacity:1;transition-property:opacity;transition:all .5s ease}.current-image-previous[_ngcontent-%COMP%]{margin-left:10px;margin-right:5px}.current-image-next[_ngcontent-%COMP%]{margin-right:10px;margin-left:5px}}@keyframes _ngcontent-%COMP%_fadein-semi-visible05{0%{opacity:0}to{opacity:.5}}"],
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CurrentImageComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'ks-current-image',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      template: "<main class=\"main-image-container\"\n      ksKeyboardNavigation [isOpen]=\"isOpen\" (keyboardNavigation)=\"onKeyPress($event)\"\n      [attr.aria-label]=\"accessibilityConfig?.mainContainerAriaLabel\"\n      [title]=\"accessibilityConfig?.mainContainerTitle\">\n\n  <div class=\"left-sub-container\">\n    <a class=\"nav-left {{isFirstImage ? 'no-pointer' : ''}}\"\n       [attr.aria-label]=\"accessibilityConfig?.mainPrevImageAriaLabel\"\n       [tabIndex]=\"isFirstImage ? -1 : 0\" role=\"button\"\n       (click)=\"onNavigationEvent('left', $event)\" (keyup)=\"onNavigationEvent('left', $event)\">\n      <div class=\"inside {{isFirstImage ? 'empty-arrow-image' : 'left-arrow-image'}}\"\n           aria-hidden=\"true\"\n           [title]=\"isFirstImage ? '' : accessibilityConfig?.mainPrevImageTitle\"></div>\n    </a>\n\n    <ng-container *ngIf=\"slideConfig?.sidePreviews?.show\">\n      <ng-container *ngIf=\"getLeftPreviewImage() as leftPreview\">\n        <img *ngIf=\"!isFirstImage; else firstImage\"\n             class=\"inside current-image-previous\"\n             [src]=\"leftPreview.plain?.img ? leftPreview.plain?.img : leftPreview.modal.img\"\n             ksFallbackImage [fallbackImg]=\"leftPreview.plain?.fallbackImg ? leftPreview.plain?.fallbackImg : leftPreview.modal.fallbackImg\"\n             [hidden]=\"loading\"\n             ksSize [sizeConfig]=\"{width: slideConfig?.sidePreviews?.size.width, height: slideConfig?.sidePreviews?.size.height}\"\n             [attr.aria-label]=\"leftPreview.modal.ariaLabel\"\n             [title]=\"(leftPreview.modal.title || leftPreview.modal.title === '') ? leftPreview.modal.title : getDescriptionToDisplay(leftPreview)\"\n             alt=\"{{leftPreview.modal.alt ? leftPreview.modal.alt : getAltDescriptionByImage(leftPreview)}}\"\n             [tabIndex]=\"0\" role=\"img\"\n             (click)=\"onNavigationEvent('left', $event, clickAction)\" (keyup)=\"onNavigationEvent('left', $event, keyboardAction)\"/>\n        <ng-template #firstImage>\n          <div class=\"current-image-previous hidden\"\n               ksSize [sizeConfig]=\"{width: slideConfig?.sidePreviews?.size.width, height: slideConfig?.sidePreviews?.size.height}\"></div>\n        </ng-template>\n      </ng-container>\n    </ng-container>\n  </div>\n\n\n  <figure id=\"current-figure\" [style.display]=\"loading ? 'none' : ''\">\n    <img id=\"current-image\"\n         class=\"inside\"\n         [ngClass]=\"currentImageConfig?.navigateOnClick ? '' : 'unclickable'\"\n         [src]=\"currentImage.modal.img\"\n         ksFallbackImage [fallbackImg]=\"currentImage.modal.fallbackImg\"\n         [attr.aria-label]=\"currentImage.modal.ariaLabel\"\n         [title]=\"(currentImage.modal.title || currentImage.modal.title === '') ? currentImage.modal.title : getTitleToDisplay()\"\n         alt=\"{{currentImage.modal.alt ? currentImage.modal.alt : getAltDescriptionByImage()}}\"\n         [tabIndex]=\"0\" role=\"img\"\n         (load)=\"onImageLoad($event)\"\n         (click)=\"onImageEvent($event, clickAction)\" (keyup)=\"onImageEvent($event, keyboardAction)\"\n         (swipeleft)=\"swipe($event.type)\"\n         (swiperight)=\"swipe($event.type)\"/>\n    <figcaption *ngIf=\"getDescriptionToDisplay() !== ''\"\n                class=\"inside description\"\n                ksDescription [description]=\"currentImageConfig?.description\"\n                [innerHTML]=\"getDescriptionToDisplay()\">\n    </figcaption>\n  </figure>\n\n  <div class=\"right-sub-container\">\n    <ng-container *ngIf=\"slideConfig?.sidePreviews?.show\">\n      <ng-container *ngIf=\"getRightPreviewImage() as rightPreview\">\n        <img *ngIf=\"!isLastImage; else lastImage\"\n             class=\"inside current-image-next\"\n             [src]=\"rightPreview.plain?.img ? rightPreview.plain?.img : rightPreview.modal.img\"\n             ksFallbackImage [fallbackImg]=\"rightPreview.plain?.fallbackImg ? rightPreview.plain?.fallbackImg : rightPreview.modal.fallbackImg\"\n             [hidden]=\"loading\"\n             ksSize [sizeConfig]=\"{width: slideConfig?.sidePreviews?.size.width, height: slideConfig?.sidePreviews?.size.height}\"\n             [attr.aria-label]=\"rightPreview.modal.ariaLabel\"\n             [title]=\"(rightPreview.modal.title || rightPreview.modal.title === '') ? rightPreview.modal.title : getDescriptionToDisplay(rightPreview)\"\n             alt=\"{{rightPreview.modal.alt ? rightPreview.modal.alt : getAltDescriptionByImage(rightPreview)}}\"\n             [tabIndex]=\"0\" role=\"img\"\n             (click)=\"onNavigationEvent('right', $event, clickAction)\" (keyup)=\"onNavigationEvent('right', $event, keyboardAction)\"/>\n        <ng-template #lastImage>\n          <div class=\"current-image-next hidden\"\n               ksSize [sizeConfig]=\"{width: slideConfig?.sidePreviews?.size.width, height: slideConfig?.sidePreviews?.size.height}\">\n          </div>\n        </ng-template>\n      </ng-container>\n    </ng-container>\n\n    <ng-container *ngIf=\"loading && currentImageConfig?.loadingConfig?.enable\">\n      <ks-loading-spinner [loadingConfig]=\"currentImageConfig?.loadingConfig\"\n                          [accessibilityConfig]=\"accessibilityConfig\"></ks-loading-spinner>\n    </ng-container>\n\n    <a class=\"nav-right {{isFirstImage ? 'no-pointer' : ''}}\"\n       [attr.aria-label]=\"accessibilityConfig?.mainNextImageAriaLabel\"\n       [tabIndex]=\"isLastImage ? -1 : 0\" role=\"button\"\n       (click)=\"onNavigationEvent('right', $event)\" (keyup)=\"onNavigationEvent('right', $event)\">\n      <div class=\"inside {{isLastImage ? 'empty-arrow-image' : 'right-arrow-image'}}\"\n           aria-hidden=\"true\"\n           [title]=\"isLastImage ? '' : accessibilityConfig?.mainNextImageTitle\"></div>\n    </a>\n  </div>\n</main>\n",
      styles: [":host{display:flex;flex-direction:column;justify-content:center}.main-image-container{display:flex;flex-direction:row;align-items:center;justify-content:space-between}.main-image-container .nav,.main-image-container>.right-sub-container>.nav-right,.main-image-container>.left-sub-container>.nav-left{animation:animatezoom 1s;cursor:pointer;transition:all .5s}.main-image-container .nav:hover,.main-image-container>.right-sub-container>.nav-right:hover,.main-image-container>.left-sub-container>.nav-left:hover{transform:scale(1.1)}.main-image-container>.left-sub-container{display:flex;flex-direction:row;justify-content:space-around;align-items:center}.main-image-container>.left-sub-container>.nav-left{margin-right:5px;margin-left:15px}.main-image-container>.left-sub-container>.nav-left.no-pointer{cursor:default!important}.main-image-container>.right-sub-container{display:flex;flex-direction:row;justify-content:space-around;align-items:center}.main-image-container>.right-sub-container>.nav-right{margin-right:15px;margin-left:5px}.main-image-container>.right-sub-container>.nav-right.no-pointer{cursor:default!important}.main-image-container #current-figure{animation:fadein-visible .8s;text-align:center;margin:0;position:relative}.main-image-container #current-figure>#current-image{max-width:100%;height:auto;display:block}.main-image-container #current-figure>#current-image.unclickable{cursor:not-allowed}.main-image-container #current-figure figcaption{padding:10px;position:absolute;bottom:0;left:0;right:0}.main-image-container #current-figure figcaption .description{font-weight:700;text-align:center}#current-image{height:auto;max-width:80vw;max-height:60vh;cursor:pointer}@media screen and (min-width: 70vw){#current-image{max-width:70vw}}@keyframes fadein-visible{0%{opacity:0}to{opacity:1}}@keyframes fadein-semi-visible05{0%{opacity:0}to{opacity:.5}}@keyframes fadein-semi-visible08{0%{opacity:0}to{opacity:.8}}@keyframes fadein-semi-visible09{0%{opacity:0}to{opacity:.9}}\n", ".arrow-image,.right-arrow-image,.left-arrow-image,.empty-arrow-image{width:30px;height:30px;background-size:30px}.empty-arrow-image{background:black;opacity:0}.left-arrow-image{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ3Ny4xNzUgNDc3LjE3NSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDc3LjE3NSA0NzcuMTc1OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4Ij48Zz48cGF0aCBkPSJNMTQ1LjE4OCwyMzguNTc1bDIxNS41LTIxNS41YzUuMy01LjMsNS4zLTEzLjgsMC0xOS4xcy0xMy44LTUuMy0xOS4xLDBsLTIyNS4xLDIyNS4xYy01LjMsNS4zLTUuMywxMy44LDAsMTkuMWwyMjUuMSwyMjUgICBjMi42LDIuNiw2LjEsNCw5LjUsNHM2LjktMS4zLDkuNS00YzUuMy01LjMsNS4zLTEzLjgsMC0xOS4xTDE0NS4xODgsMjM4LjU3NXoiIGZpbGw9IiNGRkZGRkYiLz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PC9zdmc+);opacity:.8;transition:all .5s}.left-arrow-image:hover{transform:scale(1.2)}.right-arrow-image{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ3Ny4xNzUgNDc3LjE3NSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDc3LjE3NSA0NzcuMTc1OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4Ij48Zz48cGF0aCBkPSJNMzYwLjczMSwyMjkuMDc1bC0yMjUuMS0yMjUuMWMtNS4zLTUuMy0xMy44LTUuMy0xOS4xLDBzLTUuMywxMy44LDAsMTkuMWwyMTUuNSwyMTUuNWwtMjE1LjUsMjE1LjUgICBjLTUuMyw1LjMtNS4zLDEzLjgsMCwxOS4xYzIuNiwyLjYsNi4xLDQsOS41LDRjMy40LDAsNi45LTEuMyw5LjUtNGwyMjUuMS0yMjUuMUMzNjUuOTMxLDI0Mi44NzUsMzY1LjkzMSwyMzQuMjc1LDM2MC43MzEsMjI5LjA3NXogICAiIGZpbGw9IiNGRkZGRkYiLz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PC9zdmc+);opacity:.8;transition:all .5s}.right-arrow-image:hover{transform:scale(1.2)}\n", "@media only screen and (max-width: 1024px),only screen and (max-device-width: 1024px){.current-image-previous,.current-image-next{display:none}}@media only screen and (min-device-width: 1025px){.current-image-preview,.current-image-next,.current-image-previous{height:auto;cursor:pointer;opacity:.5;animation:fadein-semi-visible05 .8s;filter:alpha(opacity=50)}.current-image-preview:hover,.current-image-next:hover,.current-image-previous:hover{opacity:1;transition-property:opacity;transition:all .5s ease}.current-image-previous{margin-left:10px;margin-right:5px}.current-image-next{margin-right:10px;margin-left:5px}}@keyframes fadein-semi-visible05{0%{opacity:0}to{opacity:.5}}\n"]
    }]
  }], function () {
    return [{
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_ID]
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: ConfigService
    }];
  }, {
    // @ts-ignore
    id: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    // @ts-ignore
    currentImage: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    // @ts-ignore
    images: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    // @ts-ignore
    isOpen: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    loadImage: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    changeImage: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    closeGallery: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onMouseEnter: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['mouseenter']
    }],
    onMouseLeave: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['mouseleave']
    }]
  });
})();

/*
 The MIT License (MIT)

 Copyright (C) 2017-2022 Stefano Cappa (Ks89)

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.
 */
/**
 * Service to intercept ctrl+s (or cmd+s on macOS) using a third-party library, called Mousetrap.
 */
class KeyboardService {
  // tslint:disable-next-line:no-any
  constructor(platformId) {
    this.platformId = platformId;
  }
  init(config) {
    return new Promise((resolve, reject) => {
      // temporary workaround to fix this issue: https://github.com/Ks89/angular-modal-gallery/issues/142
      if (config.keyboardServiceConfig && !config.keyboardServiceConfig.disableSsrWorkaround) {
        // To prevent issues with angular-universal on server-side
        if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_1__.isPlatformBrowser)(this.platformId)) {
          __webpack_require__.e(/*! import() */ "node_modules_mousetrap_mousetrap_js").then(__webpack_require__.t.bind(__webpack_require__, /*! mousetrap */ 83929, 19))
          // tslint:disable-next-line:no-any
          .then(loaded => {
            // in this case, the .default is required for Typescript Dynamic Imports
            this.mousetrapInstance = loaded.default;
            resolve();
            return;
          }).catch(err => {
            reject(err);
            return;
          });
        } else {
          resolve();
          return;
        }
      } else {
        resolve();
        return;
      }
    });
  }
  /**
   * Method to add a lister for ctrl+s/cmd+s keyboard events.
   * @param (e: KeyboardEvent, combo: string) => any onBind callback function to add shortcuts
   */
  // tslint:disable-next-line:no-any
  add(onBind, config) {
    // temporary workaround to fix this issue: https://github.com/Ks89/angular-modal-gallery/issues/142
    if (config.keyboardServiceConfig && !config.keyboardServiceConfig.disableSsrWorkaround) {
      // To prevent issues with angular-universal on server-side
      if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_1__.isPlatformBrowser)(this.platformId)) {
        this.mousetrapInstance.bind(config.keyboardServiceConfig.shortcuts, (event, combo) => {
          if (event.preventDefault) {
            event.preventDefault();
          } else {
            // internet explorer
            event.returnValue = false;
          }
          onBind(event, combo);
        });
      }
    }
  }
  /**
   * Method to reset all listeners. Please, call this function when needed
   * to free resources ad prevent leaks.
   */
  reset(config) {
    // temporary workaround to fix this issue: https://github.com/Ks89/angular-modal-gallery/issues/142
    if (config.keyboardServiceConfig && !config.keyboardServiceConfig.disableSsrWorkaround) {
      // To prevent issues with angular-universal on server-side
      if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_1__.isPlatformBrowser)(this.platformId)) {
        this.mousetrapInstance.reset();
      }
    }
  }
}
KeyboardService.ɵfac = function KeyboardService_Factory(t) {
  return new (t || KeyboardService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_ID));
};
KeyboardService.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: KeyboardService,
  factory: KeyboardService.ɵfac,
  providedIn: 'root'
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](KeyboardService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_ID]
      }]
    }];
  }, null);
})();

/*
 The MIT License (MIT)

 Copyright (C) 2017-2022 Stefano Cappa (Ks89)

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.
 */
/**
 * Service to check if the provided id is unique
 */
class IdValidatorService {
  constructor() {
    this.ids = new Map();
  }
  /**
   * Method to check and reserve an id for the current instance of the library.
   * In this way, no other instances can use the same id.
   * @param galleryId number or undefined that represents the unique id of the gallery.
   * @return boolean true if success. false is never returned, instead an exception is thrown
   * @throws a error with a message if galleryId is neither unique, < 0 or an integer
   */
  checkAndAdd(galleryId) {
    if (galleryId === undefined || !Number.isInteger(galleryId) || galleryId < 0) {
      throw new Error('You must provide a valid [id]="unique integer > 0 here" to the gallery/carousel in your template');
    }
    if (this.ids.get(galleryId)) {
      throw new Error(`Cannot create gallery with id=${galleryId} because already used in your application. This must be a unique integer >= 0`);
    }
    this.ids.set(galleryId, galleryId);
    return true;
  }
  /**
   * Method to remove a reserved id. In this way you are able to use the id again for another instance of the library.
   * @param galleryId number or undefined that represents the unique id of the gallery.
   * @return boolean true if success. false is never returned, instead an exception is thrown*
   * @throws a error with a message if galleryId is neither integer or < 0
   * * this should be improved without return true, because it doesn't make sense! :(
   */
  remove(galleryId) {
    if (galleryId === undefined || !Number.isInteger(galleryId) || galleryId < 0) {
      throw new Error('You must provide a valid [id]="unique integer > 0 here" to the gallery/carousel in your template');
    }
    this.ids.delete(galleryId);
    return true;
  }
}
IdValidatorService.ɵfac = function IdValidatorService_Factory(t) {
  return new (t || IdValidatorService)();
};
IdValidatorService.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: IdValidatorService,
  factory: IdValidatorService.ɵfac,
  providedIn: 'root'
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IdValidatorService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], null, null);
})();

/**
 * Default button size object
 */
const KS_DEFAULT_SIZE = {
  height: 'auto',
  width: '30px'
};
/**
 * Default close button object
 */
const KS_DEFAULT_BTN_CLOSE = {
  className: 'close-image',
  size: KS_DEFAULT_SIZE,
  type: ButtonType.CLOSE,
  title: 'Close this modal image gallery',
  ariaLabel: 'Close this modal image gallery'
};
/**
 * Default download button object
 */
const KS_DEFAULT_BTN_DOWNLOAD = {
  className: 'download-image',
  size: KS_DEFAULT_SIZE,
  type: ButtonType.DOWNLOAD,
  title: 'Download the current image',
  ariaLabel: 'Download the current image'
};
/**
 * Default exturl button object
 */
const KS_DEFAULT_BTN_EXTURL = {
  className: 'ext-url-image',
  size: KS_DEFAULT_SIZE,
  type: ButtonType.EXTURL,
  title: 'Navigate the current image',
  ariaLabel: 'Navigate the current image'
};
// /**
//  * Default refresh button object
//  */
// export const KS_DEFAULT_BTN_REFRESH: ButtonConfig = {
//   className: 'refresh-image',
//   size: KS_DEFAULT_SIZE,
//   type: ButtonType.REFRESH,
//   title: 'Refresh all images',
//   ariaLabel: 'Refresh all images'
// };
/**
 * Default delete button object
 */
const KS_DEFAULT_BTN_DELETE = {
  className: 'delete-image',
  size: KS_DEFAULT_SIZE,
  type: ButtonType.DELETE,
  title: 'Delete the current image',
  ariaLabel: 'Delete the current image'
};
/**
 * Default full-screen button object
 */
const KS_DEFAULT_BTN_FULL_SCREEN = {
  className: 'fullscreen-image',
  size: KS_DEFAULT_SIZE,
  type: ButtonType.FULLSCREEN,
  title: 'Switch to full-screen',
  ariaLabel: 'Switch to full-screen'
};
/**
 * Default rotate button object
 */
// export const KS_DEFAULT_BTN_ROTATE: ButtonConfig = {
//   className: 'rotate-image',
//   size: KS_DEFAULT_SIZE,
//   type: ButtonType.ROTATE,
//   title: 'Rotate clockwise of 90 degrees the current image',
//   ariaLabel: 'Rotate clockwise of 90 degrees the current image'
// };

/*
 The MIT License (MIT)

 Copyright (c) 2017-2022 Stefano Cappa (Ks89)

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.
 */
/**
 * Component with all upper buttons.
 * Also it emits click events as outputs.
 */
class UpperButtonsComponent extends AccessibleComponent {
  constructor(configService) {
    super();
    this.configService = configService;
    /**
     * Output to emit clicks on refresh button. The payload contains a `ButtonEvent`.
     */
    this.refresh = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Output to emit clicks on delete button. The payload contains a `ButtonEvent`.
     */
    this.delete = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Output to emit clicks on navigate button. The payload contains a `ButtonEvent`.
     */
    this.navigate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Output to emit clicks on download button. The payload contains a `ButtonEvent`.
     */
    this.download = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Output to emit clicks on close button. The payload contains a `ButtonEvent`.
     */
    this.closeButton = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Output to emit clicks on full-screen button. The payload contains a `ButtonEvent`.
     */
    this.fullscreen = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Output to emit clicks on all custom buttons. The payload contains a `ButtonEvent`.
     */
    this.customEmit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Default buttons array for standard configuration
     */
    this.defaultButtonsDefault = [KS_DEFAULT_BTN_CLOSE];
    /**
     * Default buttons array for simple configuration
     */
    this.simpleButtonsDefault = [KS_DEFAULT_BTN_DOWNLOAD, ...this.defaultButtonsDefault];
    /**
     * Default buttons array for advanced configuration
     */
    this.advancedButtonsDefault = [KS_DEFAULT_BTN_EXTURL, ...this.simpleButtonsDefault];
    /**
     * Default buttons array for full configuration
     */
    this.fullButtonsDefault = [KS_DEFAULT_BTN_FULL_SCREEN, KS_DEFAULT_BTN_DELETE, ...this.advancedButtonsDefault];
  }
  /**
   * Method ´ngOnInit´ to build `configButtons` applying a default value and also to
   * init the `buttons` array.
   * This is an Angular's lifecycle hook, so its called automatically by Angular itself.
   * In particular, it's called only one time!!!
   */
  ngOnInit() {
    if (this.id === null || this.id === undefined) {
      throw new Error('Internal library error - id must be defined');
    }
    const libConfig = this.configService.getConfig(this.id);
    if (!libConfig || !libConfig.buttonsConfig) {
      throw new Error('Internal library error - libConfig and buttonsConfig must be defined');
    }
    this.buttonsConfig = libConfig.buttonsConfig;
    switch (this.buttonsConfig.strategy) {
      case ButtonsStrategy.SIMPLE:
        this.buttons = this.addButtonIds(this.simpleButtonsDefault);
        break;
      case ButtonsStrategy.ADVANCED:
        this.buttons = this.addButtonIds(this.advancedButtonsDefault);
        break;
      case ButtonsStrategy.FULL:
        this.buttons = this.addButtonIds(this.fullButtonsDefault);
        break;
      case ButtonsStrategy.CUSTOM:
        this.buttons = this.addButtonIds(this.validateCustomButtons(this.buttonsConfig.buttons));
        break;
      case ButtonsStrategy.DEFAULT:
      default:
        this.buttons = this.addButtonIds(this.defaultButtonsDefault);
        break;
    }
  }
  /**
   * Method called by events from both keyboard and mouse on a button.
   * This will call a private method to trigger an output with the right payload.
   * @param InternalButtonConfig button that called this method
   * @param KeyboardEvent | MouseEvent event payload
   * @param Action action that triggered the source event or `Action.CLICK` if not specified
   * @throws an error if the button type is unknown
   */
  onEvent(button, event, action = Action.CLICK) {
    if (this.id === null || this.id === undefined) {
      throw new Error('Internal library error - id must be defined');
    }
    if (!event) {
      return;
    }
    const dataToEmit = {
      button,
      // current image initialized as null
      // (I'll fill this value inside the parent of this component
      image: null,
      action,
      galleryId: this.id
    };
    switch (button.type) {
      case ButtonType.DELETE:
        this.triggerOnMouseAndKeyboard(this.delete, event, dataToEmit);
        break;
      case ButtonType.EXTURL:
        if (!this.currentImage || !this.currentImage.modal || !this.currentImage.modal.extUrl) {
          return;
        }
        this.triggerOnMouseAndKeyboard(this.navigate, event, dataToEmit);
        break;
      case ButtonType.DOWNLOAD:
        this.triggerOnMouseAndKeyboard(this.download, event, dataToEmit);
        break;
      case ButtonType.CLOSE:
        this.triggerOnMouseAndKeyboard(this.closeButton, event, dataToEmit);
        break;
      case ButtonType.CUSTOM:
        this.triggerOnMouseAndKeyboard(this.customEmit, event, dataToEmit);
        break;
      case ButtonType.FULLSCREEN:
        this.triggerOnMouseAndKeyboard(this.fullscreen, event, dataToEmit);
        break;
      default:
        throw new Error(`Unknown button's type into ButtonConfig`);
    }
  }
  /**
   * Method used in the template to track ids in ngFor.
   * @param number index of the array
   * @param Image item of the array
   * @returns number the id of the item or undefined if the item is not valid
   */
  trackById(index, item) {
    return item ? item.id : undefined;
  }
  /**
   * Private method to emit an event using the specified output as an `EventEmitter`.
   * @param EventEmitter<ButtonEvent> emitter is the output to emit the `ButtonEvent`
   * @param KeyboardEvent | MouseEvent event is the source that triggered this method
   * @param ButtonEvent dataToEmit payload to emit
   */
  triggerOnMouseAndKeyboard(emitter, event, dataToEmit) {
    if (!emitter) {
      throw new Error(`UpperButtonsComponent unknown emitter in triggerOnMouseAndKeyboard`);
    }
    const result = super.handleImageEvent(event);
    if (result === NEXT) {
      emitter.emit(dataToEmit);
    }
  }
  /**
   * Private method to add ids to the array of buttons.
   * It adds ids in a reverse way, to be sure that the last button will always have id = 0.
   * This is really useful in unit testing to be sure that close button always have id = 0, download 1 and so on...
   * It's totally transparent to the user.
   * @param ButtonConfig[] buttons config array
   * @returns ButtonConfig[] the input array with incremental numeric ids
   */
  addButtonIds(buttons) {
    return buttons.map((val, i) => Object.assign(val, {
      id: buttons.length - 1 - i
    }));
  }
  /**
   * Private method to validate custom buttons received as input.
   * @param ButtonConfig[] buttons config array. [] by default.
   * @returns ButtonConfig[] the same input buttons config array
   * @throws an error is exists a button with an unknown type
   */
  validateCustomButtons(buttons = []) {
    buttons.forEach(val => {
      const indexOfButtonType = WHITELIST_BUTTON_TYPES.findIndex(type => type === val.type);
      if (indexOfButtonType === -1) {
        throw new Error(`Unknown ButtonType. For custom types use ButtonType.CUSTOM`);
      }
    });
    return buttons;
  }
}
UpperButtonsComponent.ɵfac = function UpperButtonsComponent_Factory(t) {
  return new (t || UpperButtonsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ConfigService));
};
UpperButtonsComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: UpperButtonsComponent,
  selectors: [["ks-upper-buttons"]],
  inputs: {
    id: "id",
    currentImage: "currentImage"
  },
  outputs: {
    refresh: "refresh",
    delete: "delete",
    navigate: "navigate",
    download: "download",
    closeButton: "closeButton",
    fullscreen: "fullscreen",
    customEmit: "customEmit"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
  decls: 2,
  vars: 1,
  consts: [[1, "buttons-container"], [4, "ngIf"], ["class", "upper-button", "ksSize", "", "role", "button", 3, "sizeConfig", "ngStyle", "tabIndex", "click", "keyup", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["ksSize", "", "role", "button", 1, "upper-button", 3, "sizeConfig", "ngStyle", "tabIndex", "click", "keyup"], ["aria-hidden", "true", 3, "title"]],
  template: function UpperButtonsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UpperButtonsComponent_ng_container_1_Template, 2, 2, "ng-container", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.buttonsConfig || (ctx.buttonsConfig == null ? null : ctx.buttonsConfig.visible));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgStyle, SizeDirective],
  styles: [".buttons-container[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:flex-end}.buttons-container[_ngcontent-%COMP%] > .upper-button[_ngcontent-%COMP%]{align-self:center;margin-right:30px;margin-top:28px;font-size:50px;text-decoration:none;cursor:pointer;animation:_ngcontent-%COMP%_animatezoom .6s;color:#fff}@keyframes _ngcontent-%COMP%_animatezoom{0%{transform:scale(0)}to{transform:scale(1)}}.base-btn[_ngcontent-%COMP%], .copy[_ngcontent-%COMP%], .refresh-image[_ngcontent-%COMP%], .close-image[_ngcontent-%COMP%], .download-image[_ngcontent-%COMP%], .ext-url-image[_ngcontent-%COMP%], .delete-image[_ngcontent-%COMP%], .fullscreen-image[_ngcontent-%COMP%], .rotate-image[_ngcontent-%COMP%]{width:30px;height:30px;background-size:30px;opacity:.8;transition:all .5s}.base-btn[_ngcontent-%COMP%]:hover, .copy[_ngcontent-%COMP%]:hover, .refresh-image[_ngcontent-%COMP%]:hover, .close-image[_ngcontent-%COMP%]:hover, .download-image[_ngcontent-%COMP%]:hover, .ext-url-image[_ngcontent-%COMP%]:hover, .delete-image[_ngcontent-%COMP%]:hover, .fullscreen-image[_ngcontent-%COMP%]:hover, .rotate-image[_ngcontent-%COMP%]:hover{transform:scale(1.2)}.rotate-image[_ngcontent-%COMP%]{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDY0IDY0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA2NCA2NDsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTJweCIgaGVpZ2h0PSI1MTJweCI+PGc+PGc+PHBhdGggZD0iTTMzLDJjNy43NDYsMCwxNS4wMjgsMy4wMTcsMjAuNTA1LDguNDk0YzEwLjEzOCwxMC4xMzcsMTEuMzEsMjYuMzk2LDIuNzQsMzcuODQ5TDUyLDUyLjU4OVY0NGgtMnYxMWwxLDFoMTF2LTJoLTguNTgyICAgIGw0LjI5Mi00LjI5M2wwLjA5Mi0wLjEwNmM5LjIxMS0xMi4yNDcsNy45NzItMjkuNjY3LTIuODgzLTQwLjUyMUM0OS4wNjQsMy4yMjUsNDEuMjgsMCwzMywwVjJ6IiBmaWxsPSIjRkZGRkZGIi8+PHBhdGggZD0iTTcuNzU1LDE1LjY1N0wxMiwxMS40MTFWMjBoMlY5bC0xLTFIMnYyaDguNTgyTDYuMjksMTQuMjkzbC0wLjA5MiwwLjEwNkMtMy4wMTMsMjYuNjQ2LTEuNzczLDQ0LjA2Niw5LjA4MSw1NC45MiAgICBDMTQuOTM2LDYwLjc3NSwyMi43Miw2NCwzMSw2NHYtMmMtNy43NDYsMC0xNS4wMjgtMy4wMTctMjAuNTA1LTguNDk0QzAuMzU3LDQzLjM2OS0wLjgxNCwyNy4xMSw3Ljc1NSwxNS42NTd6IiBmaWxsPSIjRkZGRkZGIi8+PC9nPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48L3N2Zz4=)}.fullscreen-image[_ngcontent-%COMP%]{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNTMgNTMiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUzIDUzOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4Ij48Zz48cGF0aCBkPSJNNTIuOTIzLDAuNjE4Yy0wLjEwMS0wLjI0NC0wLjI5Ni0wLjQzOS0wLjU0MS0wLjU0MUM1Mi4yNiwwLjAyNyw1Mi4xMywwLDUyLDBINDBjLTAuNTUyLDAtMSwwLjQ0OC0xLDFzMC40NDgsMSwxLDFoOS41ODYgICBMMzMuMjkzLDE4LjI5M2MtMC4zOTEsMC4zOTEtMC4zOTEsMS4wMjMsMCwxLjQxNEMzMy40ODgsMTkuOTAyLDMzLjc0NCwyMCwzNCwyMHMwLjUxMi0wLjA5OCwwLjcwNy0wLjI5M0w1MSwzLjQxNFYxMyAgIGMwLDAuNTUyLDAuNDQ4LDEsMSwxczEtMC40NDgsMS0xVjFDNTMsMC44Nyw1Mi45NzMsMC43NCw1Mi45MjMsMC42MTh6IiBmaWxsPSIjRkZGRkZGIi8+PHBhdGggZD0iTTE4LjI5MywzMy4yOTNMMiw0OS41ODZWNDBjMC0wLjU1Mi0wLjQ0OC0xLTEtMXMtMSwwLjQ0OC0xLDF2MTJjMCwwLjEzLDAuMDI3LDAuMjYsMC4wNzcsMC4zODIgICBjMC4xMDEsMC4yNDQsMC4yOTYsMC40MzksMC41NDEsMC41NDFDMC43NCw1Mi45NzMsMC44Nyw1MywxLDUzaDEyYzAuNTUyLDAsMS0wLjQ0OCwxLTFzLTAuNDQ4LTEtMS0xSDMuNDE0bDE2LjI5My0xNi4yOTMgICBjMC4zOTEtMC4zOTEsMC4zOTEtMS4wMjMsMC0xLjQxNFMxOC42ODQsMzIuOTAyLDE4LjI5MywzMy4yOTN6IiBmaWxsPSIjRkZGRkZGIi8+PHBhdGggZD0iTTEsMTRjMC41NTIsMCwxLTAuNDQ4LDEtMVYzLjQxNGwxNi4yOTIsMTYuMjkyYzAuMTk1LDAuMTk1LDAuNDUxLDAuMjkzLDAuNzA3LDAuMjkzczAuNTEyLTAuMDk4LDAuNzA3LTAuMjkzICAgYzAuMzkxLTAuMzkxLDAuMzkxLTEuMDIzLDAtMS40MTRMMy40MTQsMkgxM2MwLjU1MiwwLDEtMC40NDgsMS0xcy0wLjQ0OC0xLTEtMUgxQzAuODcsMCwwLjc0LDAuMDI3LDAuNjE4LDAuMDc3ICAgQzAuMzczLDAuMTc5LDAuMTc5LDAuMzczLDAuMDc3LDAuNjE4QzAuMDI3LDAuNzQsMCwwLjg3LDAsMXYxMkMwLDEzLjU1MiwwLjQ0OCwxNCwxLDE0eiIgZmlsbD0iI0ZGRkZGRiIvPjxwYXRoIGQ9Ik01MiwzOWMtMC41NTIsMC0xLDAuNDQ4LTEsMXY5LjU4NkwzNC43MDcsMzMuMjkyYy0wLjM5MS0wLjM5MS0xLjAyMy0wLjM5MS0xLjQxNCwwcy0wLjM5MSwxLjAyMywwLDEuNDE0TDQ5LjU4Niw1MUg0MCAgIGMtMC41NTIsMC0xLDAuNDQ4LTEsMXMwLjQ0OCwxLDEsMWgxMmMwLjEzLDAsMC4yNi0wLjAyNywwLjM4Mi0wLjA3N2MwLjI0NC0wLjEwMSwwLjQzOS0wLjI5NiwwLjU0MS0wLjU0MSAgIEM1Mi45NzMsNTIuMjYsNTMsNTIuMTMsNTMsNTJWNDBDNTMsMzkuNDQ4LDUyLjU1MiwzOSw1MiwzOXoiIGZpbGw9IiNGRkZGRkYiLz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PC9zdmc+)}.delete-image[_ngcontent-%COMP%]{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ4Ni40IDQ4Ni40IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0ODYuNCA0ODYuNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTJweCIgaGVpZ2h0PSI1MTJweCI+PGc+PGc+PHBhdGggZD0iTTQ0Niw3MEgzNDQuOFY1My41YzAtMjkuNS0yNC01My41LTUzLjUtNTMuNWgtOTYuMmMtMjkuNSwwLTUzLjUsMjQtNTMuNSw1My41VjcwSDQwLjRjLTcuNSwwLTEzLjUsNi0xMy41LDEzLjUgICAgUzMyLjksOTcsNDAuNCw5N2gyNC40djMxNy4yYzAsMzkuOCwzMi40LDcyLjIsNzIuMiw3Mi4yaDIxMi40YzM5LjgsMCw3Mi4yLTMyLjQsNzIuMi03Mi4yVjk3SDQ0NmM3LjUsMCwxMy41LTYsMTMuNS0xMy41ICAgIFM0NTMuNSw3MCw0NDYsNzB6IE0xNjguNiw1My41YzAtMTQuNiwxMS45LTI2LjUsMjYuNS0yNi41aDk2LjJjMTQuNiwwLDI2LjUsMTEuOSwyNi41LDI2LjVWNzBIMTY4LjZWNTMuNXogTTM5NC42LDQxNC4yICAgIGMwLDI0LjktMjAuMyw0NS4yLTQ1LjIsNDUuMkgxMzdjLTI0LjksMC00NS4yLTIwLjMtNDUuMi00NS4yVjk3aDMwMi45djMxNy4ySDM5NC42eiIgZmlsbD0iI0ZGRkZGRiIvPjxwYXRoIGQ9Ik0yNDMuMiw0MTFjNy41LDAsMTMuNS02LDEzLjUtMTMuNVYxNTguOWMwLTcuNS02LTEzLjUtMTMuNS0xMy41cy0xMy41LDYtMTMuNSwxMy41djIzOC41ICAgIEMyMjkuNyw0MDQuOSwyMzUuNyw0MTEsMjQzLjIsNDExeiIgZmlsbD0iI0ZGRkZGRiIvPjxwYXRoIGQ9Ik0xNTUuMSwzOTYuMWM3LjUsMCwxMy41LTYsMTMuNS0xMy41VjE3My43YzAtNy41LTYtMTMuNS0xMy41LTEzLjVzLTEzLjUsNi0xMy41LDEzLjV2MjA4LjkgICAgQzE0MS42LDM5MC4xLDE0Ny43LDM5Ni4xLDE1NS4xLDM5Ni4xeiIgZmlsbD0iI0ZGRkZGRiIvPjxwYXRoIGQ9Ik0zMzEuMywzOTYuMWM3LjUsMCwxMy41LTYsMTMuNS0xMy41VjE3My43YzAtNy41LTYtMTMuNS0xMy41LTEzLjVzLTEzLjUsNi0xMy41LDEzLjV2MjA4LjkgICAgQzMxNy44LDM5MC4xLDMyMy44LDM5Ni4xLDMzMS4zLDM5Ni4xeiIgZmlsbD0iI0ZGRkZGRiIvPjwvZz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PC9zdmc+)}.ext-url-image[_ngcontent-%COMP%]{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTEycHgiIGhlaWdodD0iNTEycHgiPjxnPjxnPjxnPjxwYXRoIGQ9Ik00ODAsMjg4djExMmMwLDQ0LjE4My0zNS44MTcsODAtODAsODBIMTEyYy00NC4xODMsMC04MC0zNS44MTctODAtODBWMTEyYzAtNDQuMTgzLDM1LjgxNy04MCw4MC04MGg5NlYwaC05NiAgICAgQzUwLjE0NCwwLDAsNTAuMTQ0LDAsMTEydjI4OGMwLDYxLjg1Niw1MC4xNDQsMTEyLDExMiwxMTJoMjg4YzYxLjg1NiwwLDExMi01MC4xNDQsMTEyLTExMlYyODhINDgweiIgZmlsbD0iI0ZGRkZGRiIvPjxwYXRoIGQ9Ik0xNzYsNDE2aDMyVjI4OGMwLTEyNS43NiwxMDcuNTItMTI4LDExMi0xMjhoMTA1LjQ0bC04NC42NCw4NC42NGwyMi41NiwyMi41NmwxMTItMTEyYzYuMjA0LTYuMjQxLDYuMjA0LTE2LjMxOSwwLTIyLjU2ICAgICBsLTExMi0xMTJsLTIyLjcyLDIyLjcybDg0LjgsODQuNjRIMzIwYy0xLjQ0LDAtMTQ0LDEuNzYtMTQ0LDE2MFY0MTZ6IiBmaWxsPSIjRkZGRkZGIi8+PC9nPjwvZz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PC9zdmc+)}.download-image[_ngcontent-%COMP%]{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ3MS4yIDQ3MS4yIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0NzEuMiA0NzEuMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTJweCIgaGVpZ2h0PSI1MTJweCI+PGc+PGc+PHBhdGggZD0iTTQ1Ny43LDIzMC4xNWMtNy41LDAtMTMuNSw2LTEzLjUsMTMuNXYxMjIuOGMwLDMzLjQtMjcuMiw2MC41LTYwLjUsNjAuNUg4Ny41Yy0zMy40LDAtNjAuNS0yNy4yLTYwLjUtNjAuNXYtMTI0LjggICAgYzAtNy41LTYtMTMuNS0xMy41LTEzLjVzLTEzLjUsNi0xMy41LDEzLjV2MTI0LjhjMCw0OC4zLDM5LjMsODcuNSw4Ny41LDg3LjVoMjk2LjJjNDguMywwLDg3LjUtMzkuMyw4Ny41LTg3LjV2LTEyMi44ICAgIEM0NzEuMiwyMzYuMjUsNDY1LjIsMjMwLjE1LDQ1Ny43LDIzMC4xNXoiIGZpbGw9IiNGRkZGRkYiLz48cGF0aCBkPSJNMjI2LjEsMzQ2Ljc1YzIuNiwyLjYsNi4xLDQsOS41LDRzNi45LTEuMyw5LjUtNGw4NS44LTg1LjhjNS4zLTUuMyw1LjMtMTMuOCwwLTE5LjFjLTUuMy01LjMtMTMuOC01LjMtMTkuMSwwbC02Mi43LDYyLjggICAgVjMwLjc1YzAtNy41LTYtMTMuNS0xMy41LTEzLjVzLTEzLjUsNi0xMy41LDEzLjV2MjczLjlsLTYyLjgtNjIuOGMtNS4zLTUuMy0xMy44LTUuMy0xOS4xLDBjLTUuMyw1LjMtNS4zLDEzLjgsMCwxOS4xICAgIEwyMjYuMSwzNDYuNzV6IiBmaWxsPSIjRkZGRkZGIi8+PC9nPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48L3N2Zz4=)}.close-image[_ngcontent-%COMP%]{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ3NS4yIDQ3NS4yIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0NzUuMiA0NzUuMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTJweCIgaGVpZ2h0PSI1MTJweCI+PGc+PGc+PHBhdGggZD0iTTQwNS42LDY5LjZDMzYwLjcsMjQuNywzMDEuMSwwLDIzNy42LDBzLTEyMy4xLDI0LjctMTY4LDY5LjZTMCwxNzQuMSwwLDIzNy42czI0LjcsMTIzLjEsNjkuNiwxNjhzMTA0LjUsNjkuNiwxNjgsNjkuNiAgICBzMTIzLjEtMjQuNywxNjgtNjkuNnM2OS42LTEwNC41LDY5LjYtMTY4UzQ1MC41LDExNC41LDQwNS42LDY5LjZ6IE0zODYuNSwzODYuNWMtMzkuOCwzOS44LTkyLjcsNjEuNy0xNDguOSw2MS43ICAgIHMtMTA5LjEtMjEuOS0xNDguOS02MS43Yy04Mi4xLTgyLjEtODIuMS0yMTUuNywwLTI5Ny44QzEyOC41LDQ4LjksMTgxLjQsMjcsMjM3LjYsMjdzMTA5LjEsMjEuOSwxNDguOSw2MS43ICAgIEM0NjguNiwxNzAuOCw0NjguNiwzMDQuNCwzODYuNSwzODYuNXoiIGZpbGw9IiNGRkZGRkYiLz48cGF0aCBkPSJNMzQyLjMsMTMyLjljLTUuMy01LjMtMTMuOC01LjMtMTkuMSwwbC04NS42LDg1LjZMMTUyLDEzMi45Yy01LjMtNS4zLTEzLjgtNS4zLTE5LjEsMGMtNS4zLDUuMy01LjMsMTMuOCwwLDE5LjEgICAgbDg1LjYsODUuNmwtODUuNiw4NS42Yy01LjMsNS4zLTUuMywxMy44LDAsMTkuMWMyLjYsMi42LDYuMSw0LDkuNSw0czYuOS0xLjMsOS41LTRsODUuNi04NS42bDg1LjYsODUuNmMyLjYsMi42LDYuMSw0LDkuNSw0ICAgIGMzLjUsMCw2LjktMS4zLDkuNS00YzUuMy01LjMsNS4zLTEzLjgsMC0xOS4xbC04NS40LTg1LjZsODUuNi04NS42QzM0Ny42LDE0Ni43LDM0Ny42LDEzOC4yLDM0Mi4zLDEzMi45eiIgZmlsbD0iI0ZGRkZGRiIvPjwvZz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PC9zdmc+)}.refresh-image[_ngcontent-%COMP%]{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ4OS43MTEgNDg5LjcxMSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDg5LjcxMSA0ODkuNzExOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4Ij48Zz48Zz48cGF0aCBkPSJNMTEyLjE1Niw5Ny4xMTFjNzIuMy02NS40LDE4MC41LTY2LjQsMjUzLjgtNi43bC01OC4xLDIuMmMtNy41LDAuMy0xMy4zLDYuNS0xMywxNGMwLjMsNy4zLDYuMywxMywxMy41LDEzICAgIGMwLjIsMCwwLjMsMCwwLjUsMGw4OS4yLTMuM2M3LjMtMC4zLDEzLTYuMiwxMy0xMy41di0xYzAtMC4yLDAtMC4zLDAtMC41di0wLjFsMCwwbC0zLjMtODguMmMtMC4zLTcuNS02LjYtMTMuMy0xNC0xMyAgICBjLTcuNSwwLjMtMTMuMyw2LjUtMTMsMTRsMi4xLDU1LjNjLTM2LjMtMjkuNy04MS00Ni45LTEyOC44LTQ5LjNjLTU5LjItMy0xMTYuMSwxNy4zLTE2MCw1Ny4xYy02MC40LDU0LjctODYsMTM3LjktNjYuOCwyMTcuMSAgICBjMS41LDYuMiw3LDEwLjMsMTMuMSwxMC4zYzEuMSwwLDIuMS0wLjEsMy4yLTAuNGM3LjItMS44LDExLjctOS4xLDkuOS0xNi4zQzM2LjY1NiwyMTguMjExLDU5LjA1NiwxNDUuMTExLDExMi4xNTYsOTcuMTExeiIgZmlsbD0iI0ZGRkZGRiIvPjxwYXRoIGQ9Ik00NjIuNDU2LDE5NS41MTFjLTEuOC03LjItOS4xLTExLjctMTYuMy05LjljLTcuMiwxLjgtMTEuNyw5LjEtOS45LDE2LjNjMTYuOSw2OS42LTUuNiwxNDIuNy01OC43LDE5MC43ICAgIGMtMzcuMywzMy43LTg0LjEsNTAuMy0xMzAuNyw1MC4zYy00NC41LDAtODguOS0xNS4xLTEyNC43LTQ0LjlsNTguOC01LjNjNy40LTAuNywxMi45LTcuMiwxMi4yLTE0LjdzLTcuMi0xMi45LTE0LjctMTIuMmwtODguOSw4ICAgIGMtNy40LDAuNy0xMi45LDcuMi0xMi4yLDE0LjdsOCw4OC45YzAuNiw3LDYuNSwxMi4zLDEzLjQsMTIuM2MwLjQsMCwwLjgsMCwxLjItMC4xYzcuNC0wLjcsMTIuOS03LjIsMTIuMi0xNC43bC00LjgtNTQuMSAgICBjMzYuMywyOS40LDgwLjgsNDYuNSwxMjguMyw0OC45YzMuOCwwLjIsNy42LDAuMywxMS4zLDAuM2M1NS4xLDAsMTA3LjUtMjAuMiwxNDguNy01Ny40ICAgIEM0NTYuMDU2LDM1Ny45MTEsNDgxLjY1NiwyNzQuODExLDQ2Mi40NTYsMTk1LjUxMXoiIGZpbGw9IiNGRkZGRkYiLz48L2c+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjwvc3ZnPg==)}.copy[_ngcontent-%COMP%]{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ4OC4zIDQ4OC4zIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0ODguMyA0ODguMzsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTJweCIgaGVpZ2h0PSI1MTJweCI+PGc+PGc+PHBhdGggZD0iTTMxNC4yNSw4NS40aC0yMjdjLTIxLjMsMC0zOC42LDE3LjMtMzguNiwzOC42djMyNS43YzAsMjEuMywxNy4zLDM4LjYsMzguNiwzOC42aDIyN2MyMS4zLDAsMzguNi0xNy4zLDM4LjYtMzguNlYxMjQgICAgQzM1Mi43NSwxMDIuNywzMzUuNDUsODUuNCwzMTQuMjUsODUuNHogTTMyNS43NSw0NDkuNmMwLDYuNC01LjIsMTEuNi0xMS42LDExLjZoLTIyN2MtNi40LDAtMTEuNi01LjItMTEuNi0xMS42VjEyNCAgICBjMC02LjQsNS4yLTExLjYsMTEuNi0xMS42aDIyN2M2LjQsMCwxMS42LDUuMiwxMS42LDExLjZWNDQ5LjZ6IiBmaWxsPSIjRkZGRkZGIi8+PHBhdGggZD0iTTQwMS4wNSwwaC0yMjdjLTIxLjMsMC0zOC42LDE3LjMtMzguNiwzOC42YzAsNy41LDYsMTMuNSwxMy41LDEzLjVzMTMuNS02LDEzLjUtMTMuNWMwLTYuNCw1LjItMTEuNiwxMS42LTExLjZoMjI3ICAgIGM2LjQsMCwxMS42LDUuMiwxMS42LDExLjZ2MzI1LjdjMCw2LjQtNS4yLDExLjYtMTEuNiwxMS42Yy03LjUsMC0xMy41LDYtMTMuNSwxMy41czYsMTMuNSwxMy41LDEzLjVjMjEuMywwLDM4LjYtMTcuMywzOC42LTM4LjYgICAgVjM4LjZDNDM5LjY1LDE3LjMsNDIyLjM1LDAsNDAxLjA1LDB6IiBmaWxsPSIjRkZGRkZGIi8+PC9nPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48L3N2Zz4=)}"],
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UpperButtonsComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'ks-upper-buttons',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      template: "<header class=\"buttons-container\">\n\n  <ng-container *ngIf=\"!buttonsConfig || buttonsConfig?.visible\">\n    <a *ngFor=\"let btn of buttons; trackBy: trackById; let index = index\"\n       class=\"upper-button\"\n       ksSize [sizeConfig]=\"{width: btn.size?.width!, height: btn.size?.height!}\"\n       [ngStyle]=\"{'font-size': btn.fontSize}\"\n       [attr.aria-label]=\"btn.ariaLabel\"\n       [tabIndex]=\"0\" role=\"button\"\n       (click)=\"onEvent(btn, $event)\" (keyup)=\"onEvent(btn, $event)\">\n      <div class=\"inside {{btn.className}}\" aria-hidden=\"true\" title=\"{{btn.title}}\"></div>\n    </a>\n  </ng-container>\n</header>\n",
      styles: [".buttons-container{display:flex;flex-direction:row;justify-content:flex-end}.buttons-container>.upper-button{align-self:center;margin-right:30px;margin-top:28px;font-size:50px;text-decoration:none;cursor:pointer;animation:animatezoom .6s;color:#fff}@keyframes animatezoom{0%{transform:scale(0)}to{transform:scale(1)}}.base-btn,.copy,.refresh-image,.close-image,.download-image,.ext-url-image,.delete-image,.fullscreen-image,.rotate-image{width:30px;height:30px;background-size:30px;opacity:.8;transition:all .5s}.base-btn:hover,.copy:hover,.refresh-image:hover,.close-image:hover,.download-image:hover,.ext-url-image:hover,.delete-image:hover,.fullscreen-image:hover,.rotate-image:hover{transform:scale(1.2)}.rotate-image{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDY0IDY0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA2NCA2NDsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTJweCIgaGVpZ2h0PSI1MTJweCI+PGc+PGc+PHBhdGggZD0iTTMzLDJjNy43NDYsMCwxNS4wMjgsMy4wMTcsMjAuNTA1LDguNDk0YzEwLjEzOCwxMC4xMzcsMTEuMzEsMjYuMzk2LDIuNzQsMzcuODQ5TDUyLDUyLjU4OVY0NGgtMnYxMWwxLDFoMTF2LTJoLTguNTgyICAgIGw0LjI5Mi00LjI5M2wwLjA5Mi0wLjEwNmM5LjIxMS0xMi4yNDcsNy45NzItMjkuNjY3LTIuODgzLTQwLjUyMUM0OS4wNjQsMy4yMjUsNDEuMjgsMCwzMywwVjJ6IiBmaWxsPSIjRkZGRkZGIi8+PHBhdGggZD0iTTcuNzU1LDE1LjY1N0wxMiwxMS40MTFWMjBoMlY5bC0xLTFIMnYyaDguNTgyTDYuMjksMTQuMjkzbC0wLjA5MiwwLjEwNkMtMy4wMTMsMjYuNjQ2LTEuNzczLDQ0LjA2Niw5LjA4MSw1NC45MiAgICBDMTQuOTM2LDYwLjc3NSwyMi43Miw2NCwzMSw2NHYtMmMtNy43NDYsMC0xNS4wMjgtMy4wMTctMjAuNTA1LTguNDk0QzAuMzU3LDQzLjM2OS0wLjgxNCwyNy4xMSw3Ljc1NSwxNS42NTd6IiBmaWxsPSIjRkZGRkZGIi8+PC9nPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48L3N2Zz4=)}.fullscreen-image{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNTMgNTMiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUzIDUzOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4Ij48Zz48cGF0aCBkPSJNNTIuOTIzLDAuNjE4Yy0wLjEwMS0wLjI0NC0wLjI5Ni0wLjQzOS0wLjU0MS0wLjU0MUM1Mi4yNiwwLjAyNyw1Mi4xMywwLDUyLDBINDBjLTAuNTUyLDAtMSwwLjQ0OC0xLDFzMC40NDgsMSwxLDFoOS41ODYgICBMMzMuMjkzLDE4LjI5M2MtMC4zOTEsMC4zOTEtMC4zOTEsMS4wMjMsMCwxLjQxNEMzMy40ODgsMTkuOTAyLDMzLjc0NCwyMCwzNCwyMHMwLjUxMi0wLjA5OCwwLjcwNy0wLjI5M0w1MSwzLjQxNFYxMyAgIGMwLDAuNTUyLDAuNDQ4LDEsMSwxczEtMC40NDgsMS0xVjFDNTMsMC44Nyw1Mi45NzMsMC43NCw1Mi45MjMsMC42MTh6IiBmaWxsPSIjRkZGRkZGIi8+PHBhdGggZD0iTTE4LjI5MywzMy4yOTNMMiw0OS41ODZWNDBjMC0wLjU1Mi0wLjQ0OC0xLTEtMXMtMSwwLjQ0OC0xLDF2MTJjMCwwLjEzLDAuMDI3LDAuMjYsMC4wNzcsMC4zODIgICBjMC4xMDEsMC4yNDQsMC4yOTYsMC40MzksMC41NDEsMC41NDFDMC43NCw1Mi45NzMsMC44Nyw1MywxLDUzaDEyYzAuNTUyLDAsMS0wLjQ0OCwxLTFzLTAuNDQ4LTEtMS0xSDMuNDE0bDE2LjI5My0xNi4yOTMgICBjMC4zOTEtMC4zOTEsMC4zOTEtMS4wMjMsMC0xLjQxNFMxOC42ODQsMzIuOTAyLDE4LjI5MywzMy4yOTN6IiBmaWxsPSIjRkZGRkZGIi8+PHBhdGggZD0iTTEsMTRjMC41NTIsMCwxLTAuNDQ4LDEtMVYzLjQxNGwxNi4yOTIsMTYuMjkyYzAuMTk1LDAuMTk1LDAuNDUxLDAuMjkzLDAuNzA3LDAuMjkzczAuNTEyLTAuMDk4LDAuNzA3LTAuMjkzICAgYzAuMzkxLTAuMzkxLDAuMzkxLTEuMDIzLDAtMS40MTRMMy40MTQsMkgxM2MwLjU1MiwwLDEtMC40NDgsMS0xcy0wLjQ0OC0xLTEtMUgxQzAuODcsMCwwLjc0LDAuMDI3LDAuNjE4LDAuMDc3ICAgQzAuMzczLDAuMTc5LDAuMTc5LDAuMzczLDAuMDc3LDAuNjE4QzAuMDI3LDAuNzQsMCwwLjg3LDAsMXYxMkMwLDEzLjU1MiwwLjQ0OCwxNCwxLDE0eiIgZmlsbD0iI0ZGRkZGRiIvPjxwYXRoIGQ9Ik01MiwzOWMtMC41NTIsMC0xLDAuNDQ4LTEsMXY5LjU4NkwzNC43MDcsMzMuMjkyYy0wLjM5MS0wLjM5MS0xLjAyMy0wLjM5MS0xLjQxNCwwcy0wLjM5MSwxLjAyMywwLDEuNDE0TDQ5LjU4Niw1MUg0MCAgIGMtMC41NTIsMC0xLDAuNDQ4LTEsMXMwLjQ0OCwxLDEsMWgxMmMwLjEzLDAsMC4yNi0wLjAyNywwLjM4Mi0wLjA3N2MwLjI0NC0wLjEwMSwwLjQzOS0wLjI5NiwwLjU0MS0wLjU0MSAgIEM1Mi45NzMsNTIuMjYsNTMsNTIuMTMsNTMsNTJWNDBDNTMsMzkuNDQ4LDUyLjU1MiwzOSw1MiwzOXoiIGZpbGw9IiNGRkZGRkYiLz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PC9zdmc+)}.delete-image{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ4Ni40IDQ4Ni40IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0ODYuNCA0ODYuNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTJweCIgaGVpZ2h0PSI1MTJweCI+PGc+PGc+PHBhdGggZD0iTTQ0Niw3MEgzNDQuOFY1My41YzAtMjkuNS0yNC01My41LTUzLjUtNTMuNWgtOTYuMmMtMjkuNSwwLTUzLjUsMjQtNTMuNSw1My41VjcwSDQwLjRjLTcuNSwwLTEzLjUsNi0xMy41LDEzLjUgICAgUzMyLjksOTcsNDAuNCw5N2gyNC40djMxNy4yYzAsMzkuOCwzMi40LDcyLjIsNzIuMiw3Mi4yaDIxMi40YzM5LjgsMCw3Mi4yLTMyLjQsNzIuMi03Mi4yVjk3SDQ0NmM3LjUsMCwxMy41LTYsMTMuNS0xMy41ICAgIFM0NTMuNSw3MCw0NDYsNzB6IE0xNjguNiw1My41YzAtMTQuNiwxMS45LTI2LjUsMjYuNS0yNi41aDk2LjJjMTQuNiwwLDI2LjUsMTEuOSwyNi41LDI2LjVWNzBIMTY4LjZWNTMuNXogTTM5NC42LDQxNC4yICAgIGMwLDI0LjktMjAuMyw0NS4yLTQ1LjIsNDUuMkgxMzdjLTI0LjksMC00NS4yLTIwLjMtNDUuMi00NS4yVjk3aDMwMi45djMxNy4ySDM5NC42eiIgZmlsbD0iI0ZGRkZGRiIvPjxwYXRoIGQ9Ik0yNDMuMiw0MTFjNy41LDAsMTMuNS02LDEzLjUtMTMuNVYxNTguOWMwLTcuNS02LTEzLjUtMTMuNS0xMy41cy0xMy41LDYtMTMuNSwxMy41djIzOC41ICAgIEMyMjkuNyw0MDQuOSwyMzUuNyw0MTEsMjQzLjIsNDExeiIgZmlsbD0iI0ZGRkZGRiIvPjxwYXRoIGQ9Ik0xNTUuMSwzOTYuMWM3LjUsMCwxMy41LTYsMTMuNS0xMy41VjE3My43YzAtNy41LTYtMTMuNS0xMy41LTEzLjVzLTEzLjUsNi0xMy41LDEzLjV2MjA4LjkgICAgQzE0MS42LDM5MC4xLDE0Ny43LDM5Ni4xLDE1NS4xLDM5Ni4xeiIgZmlsbD0iI0ZGRkZGRiIvPjxwYXRoIGQ9Ik0zMzEuMywzOTYuMWM3LjUsMCwxMy41LTYsMTMuNS0xMy41VjE3My43YzAtNy41LTYtMTMuNS0xMy41LTEzLjVzLTEzLjUsNi0xMy41LDEzLjV2MjA4LjkgICAgQzMxNy44LDM5MC4xLDMyMy44LDM5Ni4xLDMzMS4zLDM5Ni4xeiIgZmlsbD0iI0ZGRkZGRiIvPjwvZz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PC9zdmc+)}.ext-url-image{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTEycHgiIGhlaWdodD0iNTEycHgiPjxnPjxnPjxnPjxwYXRoIGQ9Ik00ODAsMjg4djExMmMwLDQ0LjE4My0zNS44MTcsODAtODAsODBIMTEyYy00NC4xODMsMC04MC0zNS44MTctODAtODBWMTEyYzAtNDQuMTgzLDM1LjgxNy04MCw4MC04MGg5NlYwaC05NiAgICAgQzUwLjE0NCwwLDAsNTAuMTQ0LDAsMTEydjI4OGMwLDYxLjg1Niw1MC4xNDQsMTEyLDExMiwxMTJoMjg4YzYxLjg1NiwwLDExMi01MC4xNDQsMTEyLTExMlYyODhINDgweiIgZmlsbD0iI0ZGRkZGRiIvPjxwYXRoIGQ9Ik0xNzYsNDE2aDMyVjI4OGMwLTEyNS43NiwxMDcuNTItMTI4LDExMi0xMjhoMTA1LjQ0bC04NC42NCw4NC42NGwyMi41NiwyMi41NmwxMTItMTEyYzYuMjA0LTYuMjQxLDYuMjA0LTE2LjMxOSwwLTIyLjU2ICAgICBsLTExMi0xMTJsLTIyLjcyLDIyLjcybDg0LjgsODQuNjRIMzIwYy0xLjQ0LDAtMTQ0LDEuNzYtMTQ0LDE2MFY0MTZ6IiBmaWxsPSIjRkZGRkZGIi8+PC9nPjwvZz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PC9zdmc+)}.download-image{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ3MS4yIDQ3MS4yIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0NzEuMiA0NzEuMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTJweCIgaGVpZ2h0PSI1MTJweCI+PGc+PGc+PHBhdGggZD0iTTQ1Ny43LDIzMC4xNWMtNy41LDAtMTMuNSw2LTEzLjUsMTMuNXYxMjIuOGMwLDMzLjQtMjcuMiw2MC41LTYwLjUsNjAuNUg4Ny41Yy0zMy40LDAtNjAuNS0yNy4yLTYwLjUtNjAuNXYtMTI0LjggICAgYzAtNy41LTYtMTMuNS0xMy41LTEzLjVzLTEzLjUsNi0xMy41LDEzLjV2MTI0LjhjMCw0OC4zLDM5LjMsODcuNSw4Ny41LDg3LjVoMjk2LjJjNDguMywwLDg3LjUtMzkuMyw4Ny41LTg3LjV2LTEyMi44ICAgIEM0NzEuMiwyMzYuMjUsNDY1LjIsMjMwLjE1LDQ1Ny43LDIzMC4xNXoiIGZpbGw9IiNGRkZGRkYiLz48cGF0aCBkPSJNMjI2LjEsMzQ2Ljc1YzIuNiwyLjYsNi4xLDQsOS41LDRzNi45LTEuMyw5LjUtNGw4NS44LTg1LjhjNS4zLTUuMyw1LjMtMTMuOCwwLTE5LjFjLTUuMy01LjMtMTMuOC01LjMtMTkuMSwwbC02Mi43LDYyLjggICAgVjMwLjc1YzAtNy41LTYtMTMuNS0xMy41LTEzLjVzLTEzLjUsNi0xMy41LDEzLjV2MjczLjlsLTYyLjgtNjIuOGMtNS4zLTUuMy0xMy44LTUuMy0xOS4xLDBjLTUuMyw1LjMtNS4zLDEzLjgsMCwxOS4xICAgIEwyMjYuMSwzNDYuNzV6IiBmaWxsPSIjRkZGRkZGIi8+PC9nPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48L3N2Zz4=)}.close-image{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ3NS4yIDQ3NS4yIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0NzUuMiA0NzUuMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTJweCIgaGVpZ2h0PSI1MTJweCI+PGc+PGc+PHBhdGggZD0iTTQwNS42LDY5LjZDMzYwLjcsMjQuNywzMDEuMSwwLDIzNy42LDBzLTEyMy4xLDI0LjctMTY4LDY5LjZTMCwxNzQuMSwwLDIzNy42czI0LjcsMTIzLjEsNjkuNiwxNjhzMTA0LjUsNjkuNiwxNjgsNjkuNiAgICBzMTIzLjEtMjQuNywxNjgtNjkuNnM2OS42LTEwNC41LDY5LjYtMTY4UzQ1MC41LDExNC41LDQwNS42LDY5LjZ6IE0zODYuNSwzODYuNWMtMzkuOCwzOS44LTkyLjcsNjEuNy0xNDguOSw2MS43ICAgIHMtMTA5LjEtMjEuOS0xNDguOS02MS43Yy04Mi4xLTgyLjEtODIuMS0yMTUuNywwLTI5Ny44QzEyOC41LDQ4LjksMTgxLjQsMjcsMjM3LjYsMjdzMTA5LjEsMjEuOSwxNDguOSw2MS43ICAgIEM0NjguNiwxNzAuOCw0NjguNiwzMDQuNCwzODYuNSwzODYuNXoiIGZpbGw9IiNGRkZGRkYiLz48cGF0aCBkPSJNMzQyLjMsMTMyLjljLTUuMy01LjMtMTMuOC01LjMtMTkuMSwwbC04NS42LDg1LjZMMTUyLDEzMi45Yy01LjMtNS4zLTEzLjgtNS4zLTE5LjEsMGMtNS4zLDUuMy01LjMsMTMuOCwwLDE5LjEgICAgbDg1LjYsODUuNmwtODUuNiw4NS42Yy01LjMsNS4zLTUuMywxMy44LDAsMTkuMWMyLjYsMi42LDYuMSw0LDkuNSw0czYuOS0xLjMsOS41LTRsODUuNi04NS42bDg1LjYsODUuNmMyLjYsMi42LDYuMSw0LDkuNSw0ICAgIGMzLjUsMCw2LjktMS4zLDkuNS00YzUuMy01LjMsNS4zLTEzLjgsMC0xOS4xbC04NS40LTg1LjZsODUuNi04NS42QzM0Ny42LDE0Ni43LDM0Ny42LDEzOC4yLDM0Mi4zLDEzMi45eiIgZmlsbD0iI0ZGRkZGRiIvPjwvZz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PC9zdmc+)}.refresh-image{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ4OS43MTEgNDg5LjcxMSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDg5LjcxMSA0ODkuNzExOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4Ij48Zz48Zz48cGF0aCBkPSJNMTEyLjE1Niw5Ny4xMTFjNzIuMy02NS40LDE4MC41LTY2LjQsMjUzLjgtNi43bC01OC4xLDIuMmMtNy41LDAuMy0xMy4zLDYuNS0xMywxNGMwLjMsNy4zLDYuMywxMywxMy41LDEzICAgIGMwLjIsMCwwLjMsMCwwLjUsMGw4OS4yLTMuM2M3LjMtMC4zLDEzLTYuMiwxMy0xMy41di0xYzAtMC4yLDAtMC4zLDAtMC41di0wLjFsMCwwbC0zLjMtODguMmMtMC4zLTcuNS02LjYtMTMuMy0xNC0xMyAgICBjLTcuNSwwLjMtMTMuMyw2LjUtMTMsMTRsMi4xLDU1LjNjLTM2LjMtMjkuNy04MS00Ni45LTEyOC44LTQ5LjNjLTU5LjItMy0xMTYuMSwxNy4zLTE2MCw1Ny4xYy02MC40LDU0LjctODYsMTM3LjktNjYuOCwyMTcuMSAgICBjMS41LDYuMiw3LDEwLjMsMTMuMSwxMC4zYzEuMSwwLDIuMS0wLjEsMy4yLTAuNGM3LjItMS44LDExLjctOS4xLDkuOS0xNi4zQzM2LjY1NiwyMTguMjExLDU5LjA1NiwxNDUuMTExLDExMi4xNTYsOTcuMTExeiIgZmlsbD0iI0ZGRkZGRiIvPjxwYXRoIGQ9Ik00NjIuNDU2LDE5NS41MTFjLTEuOC03LjItOS4xLTExLjctMTYuMy05LjljLTcuMiwxLjgtMTEuNyw5LjEtOS45LDE2LjNjMTYuOSw2OS42LTUuNiwxNDIuNy01OC43LDE5MC43ICAgIGMtMzcuMywzMy43LTg0LjEsNTAuMy0xMzAuNyw1MC4zYy00NC41LDAtODguOS0xNS4xLTEyNC43LTQ0LjlsNTguOC01LjNjNy40LTAuNywxMi45LTcuMiwxMi4yLTE0LjdzLTcuMi0xMi45LTE0LjctMTIuMmwtODguOSw4ICAgIGMtNy40LDAuNy0xMi45LDcuMi0xMi4yLDE0LjdsOCw4OC45YzAuNiw3LDYuNSwxMi4zLDEzLjQsMTIuM2MwLjQsMCwwLjgsMCwxLjItMC4xYzcuNC0wLjcsMTIuOS03LjIsMTIuMi0xNC43bC00LjgtNTQuMSAgICBjMzYuMywyOS40LDgwLjgsNDYuNSwxMjguMyw0OC45YzMuOCwwLjIsNy42LDAuMywxMS4zLDAuM2M1NS4xLDAsMTA3LjUtMjAuMiwxNDguNy01Ny40ICAgIEM0NTYuMDU2LDM1Ny45MTEsNDgxLjY1NiwyNzQuODExLDQ2Mi40NTYsMTk1LjUxMXoiIGZpbGw9IiNGRkZGRkYiLz48L2c+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjwvc3ZnPg==)}.copy{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ4OC4zIDQ4OC4zIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0ODguMyA0ODguMzsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTJweCIgaGVpZ2h0PSI1MTJweCI+PGc+PGc+PHBhdGggZD0iTTMxNC4yNSw4NS40aC0yMjdjLTIxLjMsMC0zOC42LDE3LjMtMzguNiwzOC42djMyNS43YzAsMjEuMywxNy4zLDM4LjYsMzguNiwzOC42aDIyN2MyMS4zLDAsMzguNi0xNy4zLDM4LjYtMzguNlYxMjQgICAgQzM1Mi43NSwxMDIuNywzMzUuNDUsODUuNCwzMTQuMjUsODUuNHogTTMyNS43NSw0NDkuNmMwLDYuNC01LjIsMTEuNi0xMS42LDExLjZoLTIyN2MtNi40LDAtMTEuNi01LjItMTEuNi0xMS42VjEyNCAgICBjMC02LjQsNS4yLTExLjYsMTEuNi0xMS42aDIyN2M2LjQsMCwxMS42LDUuMiwxMS42LDExLjZWNDQ5LjZ6IiBmaWxsPSIjRkZGRkZGIi8+PHBhdGggZD0iTTQwMS4wNSwwaC0yMjdjLTIxLjMsMC0zOC42LDE3LjMtMzguNiwzOC42YzAsNy41LDYsMTMuNSwxMy41LDEzLjVzMTMuNS02LDEzLjUtMTMuNWMwLTYuNCw1LjItMTEuNiwxMS42LTExLjZoMjI3ICAgIGM2LjQsMCwxMS42LDUuMiwxMS42LDExLjZ2MzI1LjdjMCw2LjQtNS4yLDExLjYtMTEuNiwxMS42Yy03LjUsMC0xMy41LDYtMTMuNSwxMy41czYsMTMuNSwxMy41LDEzLjVjMjEuMywwLDM4LjYtMTcuMywzOC42LTM4LjYgICAgVjM4LjZDNDM5LjY1LDE3LjMsNDIyLjM1LDAsNDAxLjA1LDB6IiBmaWxsPSIjRkZGRkZGIi8+PC9nPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48L3N2Zz4=)}\n"]
    }]
  }], function () {
    return [{
      type: ConfigService
    }];
  }, {
    id: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    currentImage: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    refresh: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    delete: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    navigate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    download: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    closeButton: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    fullscreen: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    customEmit: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }]
  });
})();

/*
 The MIT License (MIT)

 Copyright (C) 2017-2022 Stefano Cappa (Ks89)

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.
 */
/**
 * Component with clickable dots (small circles) to navigate between images inside the modal gallery.
 */
class DotsComponent extends AccessibleComponent {
  constructor(configService) {
    super();
    this.configService = configService;
    /**
     * Output to emit clicks on dots. The payload contains a number that represent
     * the index of the clicked dot.
     */
    this.clickDot = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  /**
   * Method ´ngOnInit´ to build `configDots` applying a default value.
   * This is an Angular's lifecycle hook, so its called automatically by Angular itself.
   * In particular, it's called only one time!!!
   */
  ngOnInit() {
    if (this.id === null || this.id === undefined) {
      throw new Error('Internal library error - id must be defined');
    }
    const libConfig = this.configService.getConfig(this.id);
    if (!libConfig) {
      throw new Error('Internal library error - libConfig must be defined');
    }
    this.accessibilityConfig = libConfig.accessibilityConfig;
    this.configDots = Object.assign({}, this.dotsConfig);
  }
  /**
   * Method ´ngOnChanges´ to change `configDots` if the input dotsConfig is changed.
   * This is an Angular's lifecycle hook, so its called automatically by Angular itself.
   */
  ngOnChanges(changes) {
    const dotsConfigChanges = changes.dotsConfig;
    if (dotsConfigChanges && dotsConfigChanges.currentValue !== dotsConfigChanges.previousValue) {
      this.configDots = dotsConfigChanges.currentValue;
    }
  }
  /**
   * Method to check if an image is active (i.e. the current image).
   * It checks currentImage and images to prevent errors.
   * @param number index of the image to check if it's active or not
   * @returns boolean true if is active (and input params are valid), false otherwise
   */
  isActive(index) {
    if (!this.currentImage || !this.images || this.images.length === 0) {
      return false;
    }
    let imageIndex;
    try {
      imageIndex = getIndex(this.currentImage, this.images);
    } catch (err) {
      console.error(`Internal error while trying to show the active 'dot'`, err);
      return false;
    }
    return index === imageIndex;
  }
  /**
   * Method called by events from keyboard and mouse.
   * @param number index of the dot
   * @param KeyboardEvent | MouseEvent event payload
   */
  onDotEvent(index, event) {
    const result = super.handleImageEvent(event);
    if (result === NEXT) {
      this.clickDot.emit(index);
    }
  }
  /**
   * Method used in the template to track ids in ngFor.
   * @param number index of the array
   * @param Image item of the array
   * @returns number the id of the item
   */
  trackById(index, item) {
    return item.id;
  }
}
DotsComponent.ɵfac = function DotsComponent_Factory(t) {
  return new (t || DotsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ConfigService));
};
DotsComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: DotsComponent,
  selectors: [["ks-dots"]],
  inputs: {
    id: "id",
    currentImage: "currentImage",
    images: "images",
    dotsConfig: "dotsConfig"
  },
  outputs: {
    clickDot: "clickDot"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
  decls: 2,
  vars: 3,
  consts: [[1, "dots-container", 3, "title"], [4, "ngIf"], ["class", "inside dot", "role", "navigation", 3, "ngClass", "tabIndex", "click", "keyup", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["role", "navigation", 1, "inside", "dot", 3, "ngClass", "tabIndex", "click", "keyup"]],
  template: function DotsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DotsComponent_ng_container_1_Template, 2, 2, "ng-container", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx.accessibilityConfig == null ? null : ctx.accessibilityConfig.dotsContainerTitle);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx.accessibilityConfig == null ? null : ctx.accessibilityConfig.dotsContainerAriaLabel);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.dotsConfig || (ctx.dotsConfig == null ? null : ctx.dotsConfig.visible));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf],
  styles: [".dots-container[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:center;margin-bottom:30px}.dots-container[_ngcontent-%COMP%] > .dot[_ngcontent-%COMP%]{background:#fff;border-radius:5px;height:10px;margin-left:4px;margin-right:4px;width:10px;cursor:pointer;opacity:.5}.dots-container[_ngcontent-%COMP%] > .dot[_ngcontent-%COMP%]:hover{opacity:.9;transition:all .5s ease;transition-property:opacity}.dots-container[_ngcontent-%COMP%] > .dot.active[_ngcontent-%COMP%]{cursor:pointer;opacity:.9}@keyframes _ngcontent-%COMP%_fadein-semi-visible05{0%{opacity:0}to{opacity:.5}}@keyframes _ngcontent-%COMP%_fadein-semi-visible09{0%{opacity:0}to{opacity:.9}}"],
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DotsComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'ks-dots',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      template: "<nav class=\"dots-container\" [attr.aria-label]=\"accessibilityConfig?.dotsContainerAriaLabel\"\n     [title]=\"accessibilityConfig?.dotsContainerTitle\">\n  <ng-container *ngIf=\"!dotsConfig || dotsConfig?.visible\">\n    <div class=\"inside dot\"\n         *ngFor=\"let img of images; trackBy: trackById; let index = index\"\n         [ngClass]=\"{'active': isActive(index)}\"\n         [attr.aria-label]=\"accessibilityConfig?.dotAriaLabel + ' ' + (index + 1)\"\n         [tabIndex]=\"0\" role=\"navigation\"\n         (click)=\"onDotEvent(index, $event)\" (keyup)=\"onDotEvent(index, $event)\"></div>\n  </ng-container>\n</nav>\n",
      styles: [".dots-container{display:flex;flex-direction:row;justify-content:center;margin-bottom:30px}.dots-container>.dot{background:#fff;border-radius:5px;height:10px;margin-left:4px;margin-right:4px;width:10px;cursor:pointer;opacity:.5}.dots-container>.dot:hover{opacity:.9;transition:all .5s ease;transition-property:opacity}.dots-container>.dot.active{cursor:pointer;opacity:.9}@keyframes fadein-semi-visible05{0%{opacity:0}to{opacity:.5}}@keyframes fadein-semi-visible09{0%{opacity:0}to{opacity:.9}}\n"]
    }]
  }], function () {
    return [{
      type: ConfigService
    }];
  }, {
    id: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    currentImage: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    images: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    dotsConfig: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    clickDot: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }]
  });
})();

/*
 The MIT License (MIT)

 Copyright (C) 2017-2022 Stefano Cappa (Ks89)

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.
 */
/**
 * Component with image previews
 */
class PreviewsComponent extends AccessibleComponent {
  constructor(configService) {
    super();
    this.configService = configService;
    /**
     * Output to emit the clicked preview. The payload contains the `ImageEvent` associated to the clicked preview.
     */
    this.clickPreview = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Enum of type `Action` that represents a mouse click on a button.
     * Declared here to be used inside the template.
     */
    this.clickAction = Action.CLICK;
    /**
     * Enum of type `Action` that represents a keyboard action.
     * Declared here to be used inside the template.
     */
    this.keyboardAction = Action.KEYBOARD;
    /**
     * Array of `InternalLibImage` exposed to the template. This field is initialized
     * applying transformations, default values and so on to the input of the same type.
     */
    this.previews = [];
    this.defaultPreviewSize = DEFAULT_PREVIEW_SIZE;
  }
  /**
   * Method ´ngOnInit´ to build `configPreview` applying a default value and also to
   * init the `previews` array.
   * This is an Angular's lifecycle hook, so its called automatically by Angular itself.
   * In particular, it's called only one time!!!
   */
  ngOnInit() {
    if (this.id === null || this.id === undefined) {
      throw new Error('Internal library error - id must be defined');
    }
    const libConfig = this.configService.getConfig(this.id);
    if (!libConfig) {
      throw new Error('Internal library error - libConfig must be defined');
    }
    this.accessibilityConfig = libConfig.accessibilityConfig;
    this.slideConfig = libConfig.slideConfig;
    this.previewConfig = libConfig.previewConfig;
    if (!this.currentImage || !this.images) {
      throw new Error('Internal library error - currentImage and images must be defined');
    }
    this.initPreviews(this.currentImage, this.images);
  }
  /**
   * Method to check if an image is active (i.e. a preview image).
   * @param InternalLibImage preview is an image to check if it's active or not
   * @returns boolean true if is active, false otherwise
   */
  isActive(preview) {
    if (!preview || !this.currentImage) {
      return false;
    }
    return preview.id === this.currentImage.id;
  }
  /**
   * Method ´ngOnChanges´ to update `previews` array.
   * Also, both `start` and `end` local variables will be updated accordingly.
   * This is an Angular's lifecycle hook, so its called automatically by Angular itself.
   * In particular, it's called when any data-bound property of a directive changes!!!
   */
  ngOnChanges(changes) {
    let currentImage = changes.currentImage?.currentValue ?? this.currentImage;
    let images = changes.images?.currentValue ?? this.images;
    if (this.previewConfig && currentImage && images) {
      this.initPreviews(currentImage, images);
    }
  }
  /**
   * Method called by events from both keyboard and mouse on a preview.
   * This will trigger the `clickpreview` output with the input preview as its payload.
   * @param InternalLibImage preview that triggered this method
   * @param KeyboardEvent | MouseEvent event payload
   * @param Action action that triggered the source event or `Action.NORMAL` if not specified
   */
  onImageEvent(preview, event, action = Action.NORMAL) {
    // It's suggested to stop propagation of the event, so the
    // Cdk background will not catch a click and close the modal (like it does on Windows Chrome/FF).
    event?.stopPropagation();
    if (!this.id || !this.images) {
      throw new Error('Internal library error - id and images must be defined');
    }
    if (!this.previewConfig || !this.previewConfig.clickable) {
      return;
    }
    const result = super.handleImageEvent(event);
    if (result === NEXT || result === PREV) {
      this.clickPreview.emit(new ImageModalEvent(this.id, action, getIndex(preview, this.images)));
    }
  }
  /**
   * Method called by events from both keyboard and mouse on a navigation arrow.
   * It also emits an event to specify which arrow.
   * @param string direction of the navigation that can be either 'next' or 'prev'
   * @param KeyboardEvent | MouseEvent event payload
   * @param Action action that triggered the source event or `Action.NORMAL` if not specified
   */
  onNavigationEvent(direction, event, action = Action.NORMAL) {
    const result = super.handleNavigationEvent(direction, event);
    if (result === NEXT) {
      this.next();
    } else if (result === PREV) {
      this.previous();
    }
  }
  /**
   * Method used in the template to track ids in ngFor.
   * @param number index of the array
   * @param Image item of the array
   * @returns number the id of the item
   */
  trackById(index, item) {
    return item.id;
  }
  /**
   * Indicates if the previews 'left arrow' should be displayed or not.
   * @returns
   */
  displayLeftPreviewsArrow() {
    // Don't show arrows if requested previews number equals or is greated than total number of imgaes
    if (this.previewConfig?.number !== undefined && this.images && this.previewConfig?.number >= this.images?.length) {
      return false;
    }
    return this.previewConfig?.arrows && this.start > 0 || !!this.slideConfig?.infinite;
  }
  /**
   * Indicates if the previews 'right arrow' should be displayed or not.
   * @returns
   */
  displayRightPreviewsArrow() {
    // Don't show arrows if requested previews number equals or is greated than total number of imgaes
    if (this.previewConfig?.number !== undefined && this.images && this.previewConfig?.number >= this.images?.length) {
      return false;
    }
    return this.previewConfig?.arrows && this.images && this.end < this.images.length || !!this.slideConfig?.infinite;
  }
  /**
   * Private method to init previews based on the currentImage and the full array of images.
   * The current image in mandatory to show always the current preview (as highlighted).
   * @param InternalLibImage currentImage to decide how to show previews, because I always want to see the current image as highlighted
   * @param InternalLibImage[] images is the array of all images.
   */
  initPreviews(currentImage, images) {
    this.setIndexesPreviews(currentImage, images);
    this.previews = images.filter((img, i) => i >= this.start && i < this.end);
  }
  /**
   * Private method to update both `start` and `end` based on the currentImage.
   */
  setIndexesPreviews(currentImage, images) {
    if (!this.previewConfig || !images || !currentImage) {
      throw new Error('Internal library error - previewConfig, currentImage and images must be defined');
    }
    const previewsNumber = this.previewConfig.number;
    let start = getIndex(currentImage, images) - Math.floor(previewsNumber / 2);
    // start is, at a minimum, the first index
    if (start < 0) start = 0;
    // end index
    let end = start + previewsNumber;
    // end is, at a maximum, the last index
    if (end > images.length) {
      start -= end - images.length;
      if (start < 0) start = 0; // start is, at a minimum, the first index
      end = images.length;
    }
    this.start = start;
    this.end = end;
  }
  /**
   * Private method to update the visible previews navigating to the right (next).
   */
  next() {
    if (!this.images || !this.previewConfig) {
      throw new Error('Internal library error - images must be defined');
    }
    if (this.end >= this.images.length) {
      // check if nextImage should be blocked
      const preventSliding = !!this.slideConfig && this.slideConfig.infinite === false;
      if (preventSliding) {
        return;
      }
      this.start = 0;
    } else {
      this.start++;
    }
    this.end = this.start + Math.min(this.previewConfig.number, this.images.length);
    this.previews = this.images.filter((img, i) => i >= this.start && i < this.end);
  }
  /**
   * Private method to update the visible previews navigating to the left (previous).
   */
  previous() {
    if (!this.images || !this.previewConfig) {
      throw new Error('Internal library error - images must be defined');
    }
    if (this.start <= 0) {
      // check if prevImage should be blocked
      const preventSliding = !!this.slideConfig && this.slideConfig.infinite === false;
      if (preventSliding) {
        return;
      }
      this.end = this.images.length;
    } else {
      this.end--;
    }
    this.start = this.end - Math.min(this.previewConfig.number, this.images.length);
    this.previews = this.images.filter((img, i) => i >= this.start && i < this.end);
  }
}
PreviewsComponent.ɵfac = function PreviewsComponent_Factory(t) {
  return new (t || PreviewsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ConfigService));
};
PreviewsComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: PreviewsComponent,
  selectors: [["ks-previews"]],
  inputs: {
    id: "id",
    currentImage: "currentImage",
    images: "images",
    customTemplate: "customTemplate"
  },
  outputs: {
    clickPreview: "clickPreview"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
  decls: 2,
  vars: 5,
  consts: [[1, "previews-container", 3, "title"], [4, "ngIf"], ["role", "button", 1, "nav-left", 3, "tabIndex", "click", "keyup"], ["aria-hidden", "true", 3, "title"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["role", "button", 1, "nav-right", 3, "tabIndex", "click", "keyup"], [3, "click", "keyup"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["defaultTemplate", ""], ["ksFallbackImage", "", "ksSize", "", "role", "img", 3, "class", "src", "fallbackImg", "sizeConfig", "title", "alt", "tabIndex", 4, "ngIf"], ["ksFallbackImage", "", "ksSize", "", "role", "img", 3, "src", "fallbackImg", "sizeConfig", "title", "alt", "tabIndex"]],
  template: function PreviewsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PreviewsComponent_ng_container_1_Template, 6, 14, "ng-container", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mobile-visible", ctx.previewConfig == null ? null : ctx.previewConfig.mobileVisible);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx.accessibilityConfig == null ? null : ctx.accessibilityConfig.previewsContainerTitle);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx.accessibilityConfig == null ? null : ctx.accessibilityConfig.previewsContainerAriaLabel);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.previewConfig == null ? null : ctx.previewConfig.visible);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgTemplateOutlet, SizeDirective, FallbackImageDirective],
  styles: ["@media only screen and (max-width: 767px),only screen and (max-device-width: 767px){.previews-container[_ngcontent-%COMP%]{display:none}.previews-container[_ngcontent-%COMP%] > .preview-image[_ngcontent-%COMP%]{display:none}.previews-container[_ngcontent-%COMP%] > .nav-left[_ngcontent-%COMP%]{display:none}.previews-container[_ngcontent-%COMP%] > .nav-right[_ngcontent-%COMP%]{display:none}.previews-container.mobile-visible[_ngcontent-%COMP%]{align-items:center;animation:_ngcontent-%COMP%_fadein-semi-visible08 .8s;display:flex;flex-direction:row;justify-content:center;margin-bottom:15px}.previews-container.mobile-visible[_ngcontent-%COMP%] > .nav-left[_ngcontent-%COMP%]{display:flex}.previews-container.mobile-visible[_ngcontent-%COMP%] > .nav-right[_ngcontent-%COMP%]{display:flex}.previews-container.mobile-visible[_ngcontent-%COMP%] > .preview-image[_ngcontent-%COMP%]{cursor:pointer;display:flex;margin-left:2px;margin-right:2px;opacity:.7;height:50px}.previews-container.mobile-visible[_ngcontent-%COMP%] > .preview-image.active[_ngcontent-%COMP%]{opacity:1}.previews-container.mobile-visible[_ngcontent-%COMP%] > .preview-image.unclickable[_ngcontent-%COMP%]{cursor:not-allowed}.previews-container.mobile-visible[_ngcontent-%COMP%] > .preview-image[_ngcontent-%COMP%]:hover{opacity:1;transition:all .5s ease;transition-property:opacity}}@media only screen and (min-device-width: 768px){.previews-container[_ngcontent-%COMP%]{align-items:center;animation:_ngcontent-%COMP%_fadein-semi-visible08 .8s;display:flex;flex-direction:row;justify-content:center;margin-bottom:15px}.previews-container[_ngcontent-%COMP%]   .preview-container[_ngcontent-%COMP%]{margin-left:2px;margin-right:2px;cursor:pointer}.previews-container[_ngcontent-%COMP%]   .preview-container.unclickable[_ngcontent-%COMP%]{cursor:not-allowed}.previews-container[_ngcontent-%COMP%]   .preview-container[_ngcontent-%COMP%]   .preview-image[_ngcontent-%COMP%]{opacity:.7;height:50px}.previews-container[_ngcontent-%COMP%]   .preview-container[_ngcontent-%COMP%]   .preview-image.active[_ngcontent-%COMP%]{opacity:1}.previews-container[_ngcontent-%COMP%]   .preview-container[_ngcontent-%COMP%]   .preview-image[_ngcontent-%COMP%]:hover{opacity:1;transition:all .5s ease;transition-property:opacity}.previews-container[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%], .previews-container[_ngcontent-%COMP%] > .nav-right[_ngcontent-%COMP%], .previews-container[_ngcontent-%COMP%] > .nav-left[_ngcontent-%COMP%]{color:#919191;cursor:pointer;transition:all .5s}.previews-container[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]:hover, .previews-container[_ngcontent-%COMP%] > .nav-right[_ngcontent-%COMP%]:hover, .previews-container[_ngcontent-%COMP%] > .nav-left[_ngcontent-%COMP%]:hover{transform:scale(1.1)}.previews-container[_ngcontent-%COMP%] > .nav-left[_ngcontent-%COMP%]{margin-right:10px}.previews-container[_ngcontent-%COMP%] > .nav-right[_ngcontent-%COMP%]{margin-left:10px}}@keyframes _ngcontent-%COMP%_fadein-visible{0%{opacity:0}to{opacity:1}}@keyframes _ngcontent-%COMP%_fadein-semi-visible05{0%{opacity:0}to{opacity:.5}}@keyframes _ngcontent-%COMP%_fadein-semi-visible08{0%{opacity:0}to{opacity:.8}}@keyframes _ngcontent-%COMP%_fadein-semi-visible09{0%{opacity:0}to{opacity:.9}}", ".arrow-preview-image[_ngcontent-%COMP%], .right-arrow-preview-image[_ngcontent-%COMP%], .left-arrow-preview-image[_ngcontent-%COMP%], .empty-arrow-preview-image[_ngcontent-%COMP%]{width:15px;height:15px;opacity:.5}.empty-arrow-preview-image[_ngcontent-%COMP%]{background:black;opacity:0}.left-arrow-preview-image[_ngcontent-%COMP%]{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ3Ny4xNzUgNDc3LjE3NSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDc3LjE3NSA0NzcuMTc1OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4Ij48Zz48cGF0aCBkPSJNMTQ1LjE4OCwyMzguNTc1bDIxNS41LTIxNS41YzUuMy01LjMsNS4zLTEzLjgsMC0xOS4xcy0xMy44LTUuMy0xOS4xLDBsLTIyNS4xLDIyNS4xYy01LjMsNS4zLTUuMywxMy44LDAsMTkuMWwyMjUuMSwyMjUgICBjMi42LDIuNiw2LjEsNCw5LjUsNHM2LjktMS4zLDkuNS00YzUuMy01LjMsNS4zLTEzLjgsMC0xOS4xTDE0NS4xODgsMjM4LjU3NXoiIGZpbGw9IiNGRkZGRkYiLz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PC9zdmc+);background-size:15px;transition:all .5s}.left-arrow-preview-image[_ngcontent-%COMP%]:hover{transform:scale(1.2)}.right-arrow-preview-image[_ngcontent-%COMP%]{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ3Ny4xNzUgNDc3LjE3NSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDc3LjE3NSA0NzcuMTc1OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4Ij48Zz48cGF0aCBkPSJNMzYwLjczMSwyMjkuMDc1bC0yMjUuMS0yMjUuMWMtNS4zLTUuMy0xMy44LTUuMy0xOS4xLDBzLTUuMywxMy44LDAsMTkuMWwyMTUuNSwyMTUuNWwtMjE1LjUsMjE1LjUgICBjLTUuMyw1LjMtNS4zLDEzLjgsMCwxOS4xYzIuNiwyLjYsNi4xLDQsOS41LDRjMy40LDAsNi45LTEuMyw5LjUtNGwyMjUuMS0yMjUuMUMzNjUuOTMxLDI0Mi44NzUsMzY1LjkzMSwyMzQuMjc1LDM2MC43MzEsMjI5LjA3NXogICAiIGZpbGw9IiNGRkZGRkYiLz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PC9zdmc+);background-size:15px;transition:all .5s}.right-arrow-preview-image[_ngcontent-%COMP%]:hover{transform:scale(1.2)}"],
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PreviewsComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'ks-previews',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      template: "<nav class=\"previews-container\"\n     [class.mobile-visible]=\"previewConfig?.mobileVisible\"\n     [attr.aria-label]=\"accessibilityConfig?.previewsContainerAriaLabel\"\n     [title]=\"accessibilityConfig?.previewsContainerTitle\">\n\n  <ng-container *ngIf=\"previewConfig?.visible\">\n    <a class=\"nav-left\"\n       [attr.aria-label]=\"accessibilityConfig?.previewScrollPrevAriaLabel\"\n       [tabIndex]=\"displayLeftPreviewsArrow() ? 0 : -1\" role=\"button\"\n       (click)=\"onNavigationEvent('left', $event)\" (keyup)=\"onNavigationEvent('left', $event)\">\n      <div class=\"inside {{ displayLeftPreviewsArrow() ? 'left-arrow-preview-image' : 'empty-arrow-preview-image'}}\"\n           aria-hidden=\"true\"\n           [title]=\"accessibilityConfig?.previewScrollPrevTitle\"></div>\n    </a>\n\n    <ng-container *ngFor=\"let preview of previews; trackBy: trackById; let index = index\">\n\n      <div class=\"preview-container {{!previewConfig?.clickable ? ' unclickable' : ''}}\"\n        (click)=\"onImageEvent(preview, $event, clickAction)\"\n        (keyup)=\"onImageEvent(preview, $event, keyboardAction)\"\n      >\n        <ng-container \n          *ngTemplateOutlet=\"!customTemplate ? defaultTemplate : customTemplate ; context:{preview, defaultTemplate}\">\n        </ng-container>\n        <ng-template #defaultTemplate>\n          <img *ngIf=\"preview?.modal?.img\"\n              class=\"inside preview-image {{isActive(preview) ? 'active' : ''}}\"\n              [src]=\"preview.plain?.img ? preview.plain?.img! : preview.modal.img\"\n              ksFallbackImage [fallbackImg]=\"preview.plain?.fallbackImg ? preview.plain?.fallbackImg : preview.modal.fallbackImg\"\n              ksSize [sizeConfig]=\"{width: previewConfig?.size ? previewConfig?.size?.width! : defaultPreviewSize.width,\n                                    height: previewConfig?.size ? previewConfig?.size?.height! : defaultPreviewSize.height}\"\n              [attr.aria-label]=\"preview.modal.ariaLabel ? preview.modal.ariaLabel : ''\"\n              [title]=\"(preview.modal.title || preview.modal.title === '') ? preview.modal.title : ''\"\n              alt=\"{{preview.modal.alt ? preview.modal.alt : ''}}\"\n              [tabIndex]=\"0\" role=\"img\"\n          />\n        </ng-template>\n      </div>\n\n    </ng-container>\n\n\n    <a class=\"nav-right\"\n       [attr.aria-label]=\"accessibilityConfig?.previewScrollNextAriaLabel\"\n       [tabIndex]=\"displayRightPreviewsArrow() ? 0 : -1\" role=\"button\"\n       (click)=\"onNavigationEvent('right', $event)\" (keyup)=\"onNavigationEvent('right', $event)\">\n      <div class=\"inside {{ displayRightPreviewsArrow() ? 'right-arrow-preview-image' : 'empty-arrow-preview-image'}}\"\n           aria-hidden=\"true\"\n           [title]=\"accessibilityConfig?.previewScrollNextTitle\"></div>\n    </a>\n  </ng-container>\n\n</nav>\n",
      styles: ["@media only screen and (max-width: 767px),only screen and (max-device-width: 767px){.previews-container{display:none}.previews-container>.preview-image{display:none}.previews-container>.nav-left{display:none}.previews-container>.nav-right{display:none}.previews-container.mobile-visible{align-items:center;animation:fadein-semi-visible08 .8s;display:flex;flex-direction:row;justify-content:center;margin-bottom:15px}.previews-container.mobile-visible>.nav-left{display:flex}.previews-container.mobile-visible>.nav-right{display:flex}.previews-container.mobile-visible>.preview-image{cursor:pointer;display:flex;margin-left:2px;margin-right:2px;opacity:.7;height:50px}.previews-container.mobile-visible>.preview-image.active{opacity:1}.previews-container.mobile-visible>.preview-image.unclickable{cursor:not-allowed}.previews-container.mobile-visible>.preview-image:hover{opacity:1;transition:all .5s ease;transition-property:opacity}}@media only screen and (min-device-width: 768px){.previews-container{align-items:center;animation:fadein-semi-visible08 .8s;display:flex;flex-direction:row;justify-content:center;margin-bottom:15px}.previews-container .preview-container{margin-left:2px;margin-right:2px;cursor:pointer}.previews-container .preview-container.unclickable{cursor:not-allowed}.previews-container .preview-container .preview-image{opacity:.7;height:50px}.previews-container .preview-container .preview-image.active{opacity:1}.previews-container .preview-container .preview-image:hover{opacity:1;transition:all .5s ease;transition-property:opacity}.previews-container .nav,.previews-container>.nav-right,.previews-container>.nav-left{color:#919191;cursor:pointer;transition:all .5s}.previews-container .nav:hover,.previews-container>.nav-right:hover,.previews-container>.nav-left:hover{transform:scale(1.1)}.previews-container>.nav-left{margin-right:10px}.previews-container>.nav-right{margin-left:10px}}@keyframes fadein-visible{0%{opacity:0}to{opacity:1}}@keyframes fadein-semi-visible05{0%{opacity:0}to{opacity:.5}}@keyframes fadein-semi-visible08{0%{opacity:0}to{opacity:.8}}@keyframes fadein-semi-visible09{0%{opacity:0}to{opacity:.9}}\n", ".arrow-preview-image,.right-arrow-preview-image,.left-arrow-preview-image,.empty-arrow-preview-image{width:15px;height:15px;opacity:.5}.empty-arrow-preview-image{background:black;opacity:0}.left-arrow-preview-image{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ3Ny4xNzUgNDc3LjE3NSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDc3LjE3NSA0NzcuMTc1OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4Ij48Zz48cGF0aCBkPSJNMTQ1LjE4OCwyMzguNTc1bDIxNS41LTIxNS41YzUuMy01LjMsNS4zLTEzLjgsMC0xOS4xcy0xMy44LTUuMy0xOS4xLDBsLTIyNS4xLDIyNS4xYy01LjMsNS4zLTUuMywxMy44LDAsMTkuMWwyMjUuMSwyMjUgICBjMi42LDIuNiw2LjEsNCw5LjUsNHM2LjktMS4zLDkuNS00YzUuMy01LjMsNS4zLTEzLjgsMC0xOS4xTDE0NS4xODgsMjM4LjU3NXoiIGZpbGw9IiNGRkZGRkYiLz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PC9zdmc+);background-size:15px;transition:all .5s}.left-arrow-preview-image:hover{transform:scale(1.2)}.right-arrow-preview-image{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ3Ny4xNzUgNDc3LjE3NSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDc3LjE3NSA0NzcuMTc1OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4Ij48Zz48cGF0aCBkPSJNMzYwLjczMSwyMjkuMDc1bC0yMjUuMS0yMjUuMWMtNS4zLTUuMy0xMy44LTUuMy0xOS4xLDBzLTUuMywxMy44LDAsMTkuMWwyMTUuNSwyMTUuNWwtMjE1LjUsMjE1LjUgICBjLTUuMyw1LjMtNS4zLDEzLjgsMCwxOS4xYzIuNiwyLjYsNi4xLDQsOS41LDRjMy40LDAsNi45LTEuMyw5LjUtNGwyMjUuMS0yMjUuMUMzNjUuOTMxLDI0Mi44NzUsMzY1LjkzMSwyMzQuMjc1LDM2MC43MzEsMjI5LjA3NXogICAiIGZpbGw9IiNGRkZGRkYiLz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PC9zdmc+);background-size:15px;transition:all .5s}.right-arrow-preview-image:hover{transform:scale(1.2)}\n"]
    }]
  }], function () {
    return [{
      type: ConfigService
    }];
  }, {
    id: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    currentImage: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    images: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    customTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    clickPreview: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }]
  });
})();

/*
 The MIT License (MIT)

 Copyright (C) 2017-2022 Stefano Cappa (Ks89)

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.
 */
/**
 * Directive to close the modal gallery clicking on the semi-transparent background.
 * In fact, it listens for a click on all elements that aren't 'inside' and it emits
 * an event using `@Output clickOutside`.
 */
class ClickOutsideDirective {
  constructor() {
    /**
     * Output to emit an event if the clicked element class doesn't contain 'inside' or it is 'hidden'. The payload is a boolean.
     */
    this.clickOutside = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  /**
   * Method called by Angular itself every click thanks to `@HostListener`.
   * @param MouseEvent event payload received evey click
   */
  onClick(event) {
    event.stopPropagation();
    // tslint:disable-next-line:no-any
    const target = event.target;
    if (!this.clickOutsideEnable || !target) {
      return;
    }
    let isInside = false;
    let isHidden = false;
    if (typeof target.className !== 'string') {
      // it happens with @fortawesome/fontawesome 5
      // for some reasons className is an object with 2 empty properties inside
      isInside = true;
    } else {
      // in normal scenarios, use classname, because it's a simple string
      isInside = target.className && target.className.includes('inside');
      isHidden = target.className.includes('hidden');
    }
    // if inside => don't close modal gallery
    // if hidden => close modal gallery
    /*
        i i' h | close
        0 1  0 |   1 => close modal gallery
        0 1  1 |   1 => close modal gallery
        1 0  0 |   0
        1 0  1 |   1 => close modal gallery
     */
    if (!isInside || isHidden) {
      // close modal gallery
      this.clickOutside.emit(true);
    }
  }
}
ClickOutsideDirective.ɵfac = function ClickOutsideDirective_Factory(t) {
  return new (t || ClickOutsideDirective)();
};
ClickOutsideDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: ClickOutsideDirective,
  selectors: [["", "ksClickOutside", ""]],
  hostBindings: function ClickOutsideDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ClickOutsideDirective_click_HostBindingHandler($event) {
        return ctx.onClick($event);
      });
    }
  },
  inputs: {
    clickOutsideEnable: "clickOutsideEnable"
  },
  outputs: {
    clickOutside: "clickOutside"
  }
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClickOutsideDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[ksClickOutside]'
    }]
  }], null, {
    clickOutsideEnable: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    clickOutside: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['click', ['$event']]
    }]
  });
})();
class ModalGalleryComponent {
  constructor(dialogContent, modalGalleryService, keyboardService,
  // tslint:disable-next-line:ban-types
  platformId, changeDetectorRef, idValidatorService, configService, sanitizer) {
    this.dialogContent = dialogContent;
    this.modalGalleryService = modalGalleryService;
    this.keyboardService = keyboardService;
    this.platformId = platformId;
    this.changeDetectorRef = changeDetectorRef;
    this.idValidatorService = idValidatorService;
    this.configService = configService;
    this.sanitizer = sanitizer;
    /**
     * Boolean to enable modal-gallery close behaviour when clicking
     * on the semi-transparent background. Enabled by default.
     */
    this.enableCloseOutside = true;
    /**
     * Object of type `AccessibilityConfig` to init custom accessibility features.
     * For instance, it contains titles, alt texts, aria-labels and so on.
     */
    this.accessibilityConfig = KS_DEFAULT_ACCESSIBILITY_CONFIG;
    /**
     * Boolean to open the modal gallery. False by default.
     */
    this.showGallery = false;
    this.id = this.dialogContent.id;
    this.images = this.dialogContent.images;
    this.currentImage = this.dialogContent.currentImage;
    this.libConfig = this.dialogContent.libConfig;
    this.customPreviewsTemplate = this.dialogContent.previewsTemplate;
    this.configService.setConfig(this.id, this.libConfig);
    this.updateImagesSubscription = this.modalGalleryService.updateImages$.subscribe(images => {
      this.images = images.map(image => {
        const newImage = Object.assign({}, image, {
          previouslyLoaded: false
        });
        return newImage;
      });
      this.initImages();
      this.images.forEach(image => {
        if (image.id === this.currentImage.id) {
          this.currentImage = image;
        }
      });
      this.changeDetectorRef.markForCheck();
    });
  }
  /**
   * HostListener to catch browser's back button and destroy the gallery.
   * This prevents weired behaviour about scrolling.
   * Added to fix this issue: https://github.com/Ks89/angular-modal-gallery/issues/159
   */
  onPopState(e) {
    this.closeGallery();
  }
  /**
   * Method ´ngOnInit´ to init images calling `initImages()`.
   * This is an Angular's lifecycle hook, so its called automatically by Angular itself.
   * In particular, it's called only one time!!!
   */
  ngOnInit() {
    this.idValidatorService.checkAndAdd(this.id);
    // id is a mandatory input and must a number > 0
    if (!this.id && this.id !== 0 || this.id < 0) {
      throw new Error(`'[id]="a number >= 0"' is a mandatory input in angular-modal-gallery.` + `If you are using multiple instances of this library, please be sure to use different ids`);
    }
    const libConfig = this.configService.getConfig(this.id);
    if (!libConfig || !libConfig.dotsConfig) {
      throw new Error('Internal library error - libConfig and dotsConfig must be defined');
    }
    this.dotsConfig = libConfig.dotsConfig;
    this.registerKeyboardService();
    setTimeout(() => {
      this.initImages();
    }, 0);
  }
  /**
   * Method called by custom upper buttons.
   * @param event ButtonEvent event payload
   */
  onCustomEmit(event) {
    const eventToEmit = this.getButtonEventToEmit(event);
    this.modalGalleryService.emitButtonBeforeHook(eventToEmit);
    this.modalGalleryService.emitButtonAfterHook(eventToEmit);
  }
  /**
   * Method called by the full-screen upper button.
   * @param event ButtonEvent event payload
   */
  onFullScreen(event) {
    const eventToEmit = this.getButtonEventToEmit(event);
    this.modalGalleryService.emitButtonBeforeHook(eventToEmit);
    // tslint:disable-next-line:no-any
    const doc = document;
    // tslint:disable-next-line:no-any
    const docEl = document.documentElement;
    const fullscreenDisabled = !doc.fullscreenElement && !doc.webkitFullscreenElement;
    // In Safari `requestFullscreen` and `exitFullscreen` are undefined. Safari requires the prefixed version `webkit-`
    // and it doesn't return promises.
    // I cannot call `emitButtonAfterHook` only if requestFullScreen is successful, because there are no guarantees across browsers and
    // I should also handle the case with keyboard "esc" button.
    if (fullscreenDisabled) {
      if (docEl.requestFullscreen) {
        docEl.requestFullscreen().then(() => {}).catch(() => {
          console.error('Cannot request full screen');
        });
      } else if (docEl.webkitRequestFullscreen) {
        // For Safari and it doesn't return a promise
        docEl.webkitRequestFullscreen();
      }
    } else {
      if (doc.exitFullscreen) {
        doc.exitFullscreen().then(() => {}).catch(() => {
          console.error('Cannot request exit full screen');
        });
      } else if (doc.webkitExitFullscreen) {
        // For Safari and it doesn't return a promise
        doc.webkitExitFullscreen();
      }
    }
    this.modalGalleryService.emitButtonAfterHook(eventToEmit);
  }
  /**
   * Method called by the delete upper button.
   * @param event ButtonEvent event payload
   */
  onDelete(event) {
    const eventToEmit = this.getButtonEventToEmit(event);
    this.modalGalleryService.emitButtonBeforeHook(eventToEmit);
    if (this.images.length === 1) {
      this.closeGallery();
    }
    if (!this.currentImageComponent) {
      throw new Error('currentImageComponent must be defined');
    }
    const imageIndexToDelete = this.currentImageComponent.getIndexToDelete(event.image);
    if (imageIndexToDelete === this.images.length - 1) {
      // last image
      this.currentImageComponent.prevImage();
    } else {
      this.currentImageComponent.nextImage();
    }
    this.modalGalleryService.emitButtonAfterHook(eventToEmit);
  }
  /**
   * Method called by the navigate upper button.
   * @param event ButtonEvent event payload
   */
  onNavigate(event) {
    const eventToEmit = this.getButtonEventToEmit(event);
    this.modalGalleryService.emitButtonBeforeHook(eventToEmit);
    // To support SSR
    if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_1__.isPlatformBrowser)(this.platformId)) {
      if (eventToEmit.image && eventToEmit.image.modal.extUrl) {
        // where I should open this link? The current tab or another one?
        if (eventToEmit.button && eventToEmit.button.extUrlInNewTab) {
          // in this case I should use target _blank to open the url in a new tab, however these is a security issue.
          // Prevent Reverse Tabnabbing's attacks (https://www.owasp.org/index.php/Reverse_Tabnabbing)
          // Some resources:
          // - https://www.owasp.org/index.php/HTML5_Security_Cheat_Sheet#Tabnabbing
          // - https://medium.com/@jitbit/target-blank-the-most-underestimated-vulnerability-ever-96e328301f4c
          // - https://developer.mozilla.org/en-US/docs/Web/API/Window/open
          const newWindow = window.open(eventToEmit.image.modal.extUrl, 'noopener,noreferrer,');
          // it returns null if the call failed, so I have to do this check
          if (newWindow) {
            newWindow.opener = null; // required to prevent security issues
            // emit only in case of success
            this.modalGalleryService.emitButtonAfterHook(eventToEmit);
          }
        } else {
          this.updateLocationHref(eventToEmit.image.modal.extUrl);
          // emit only in case of success
          this.modalGalleryService.emitButtonAfterHook(eventToEmit);
        }
      }
    }
  }
  /**
   * This method is defined to be spied and replaced in unit testing with a fake method call.
   * It must be public to be able to use jasmine spyOn method.
   * @param newHref string new url
   */
  updateLocationHref(newHref) {
    window.location.href = newHref;
  }
  /**
   * Method called by the download upper button.
   * @param event ButtonEvent event payload
   */
  onDownload(event) {
    const eventToEmit = this.getButtonEventToEmit(event);
    this.modalGalleryService.emitButtonBeforeHook(eventToEmit);
    this.downloadImage();
    this.modalGalleryService.emitButtonAfterHook(eventToEmit);
  }
  /**
   * Method called by the close upper button.
   * @param event ButtonEvent event payload
   * @param action Action that triggered the close method. `Action.NORMAL` by default
   */
  onCloseGalleryButton(event, action = Action.NORMAL) {
    const eventToEmit = this.getButtonEventToEmit(event);
    this.modalGalleryService.emitButtonBeforeHook(eventToEmit);
    this.closeGallery(action, false);
  }
  /**
   * Method called by CurrentImageComponent and triggered via KeyboardService.
   * @param event ImageModalEvent event payload
   * @param action Action that triggered the close method. `Action.NORMAL` by default
   */
  onCloseGallery(event, action = Action.NORMAL) {
    // remap ImageModalEvent to ButtonEvent
    const buttonEvent = {
      button: {
        type: ButtonType.CLOSE
      },
      image: null,
      action: event.action,
      galleryId: event.galleryId
    };
    this.modalGalleryService.emitButtonBeforeHook(buttonEvent);
    this.closeGallery(action, false);
  }
  /**
   * Method to close the modal gallery specifying the action.
   * It also reset the `keyboardService` to prevent multiple listeners.
   * @param action Action action type. `Action.NORMAL` by default
   * @param clickOutside boolean that is true if called clicking on the modal background. False by default.
   */
  closeGallery(action = Action.NORMAL, clickOutside = false) {
    const libConfig = this.configService.getConfig(this.id);
    if (!libConfig) {
      throw new Error('Internal library error - libConfig must be defined');
    }
    this.modalGalleryService.emitClose(new ImageModalEvent(this.id, action, true));
    this.keyboardService.reset(libConfig);
    this.modalGalleryService.close(this.id, clickOutside);
  }
  /**
   * Method called when the image changes and used to update the `currentImage` object.
   * @param event ImageModalEvent event payload
   */
  onChangeCurrentImage(event) {
    const newIndex = event.result;
    if (newIndex < 0 || newIndex >= this.images.length) {
      return;
    }
    this.currentImage = this.images[newIndex];
    // emit current visible image index
    this.modalGalleryService.emitShow(new ImageModalEvent(this.id, event.action, newIndex + 1));
    // emit first/last event based on newIndex value
    this.emitBoundaryEvent(event.action, newIndex);
  }
  /**
   * Method called when you click 'outside' (i.e. on the semi-transparent background)
   * to close the modal gallery if `enableCloseOutside` is true.
   * @param event boolean that is true to close the modal gallery, false otherwise
   */
  onClickOutside(event) {
    if (event && this.enableCloseOutside) {
      this.closeGallery(Action.CLICK, true);
    }
  }
  /**
   * Method called when an image is loaded and the loading spinner has gone.
   * It sets the previouslyLoaded flag inside the Image to hide loading spinner when displayed again.
   * @param event ImageLoadEvent event payload
   */
  onImageLoad(event) {
    // sets as previously loaded the image with index specified by `event.status`
    this.images = this.images.map(img => {
      if (img && img.id === event.id) {
        return Object.assign({}, img, {
          previouslyLoaded: event.status
        });
      }
      return img;
    });
  }
  /**
   * Method called when a dot is clicked and used to update the current image.
   * @param index number index of the clicked dot
   */
  onClickDot(index) {
    this.currentImage = this.images[index];
  }
  /**
   * Method called when an image preview is clicked and used to update the current image.
   * @param event ImageModalEvent preview image
   */
  onClickPreview(event) {
    this.onChangeCurrentImage(event);
  }
  /**
   * Method to cleanup resources. In fact, this will reset keyboard's service.
   * This is an Angular's lifecycle hook that is called when this component is destroyed.
   */
  ngOnDestroy() {
    if (this.keyboardService) {
      const libConfig = this.configService.getConfig(this.id);
      if (this.id && libConfig) {
        this.keyboardService.reset(libConfig);
      }
    }
    if (this.updateImagesSubscription) {
      this.updateImagesSubscription.unsubscribe();
    }
    this.idValidatorService.remove(this.id);
  }
  /**
   * Method to show the modal gallery displaying the currentImage.
   * It will also register a new `keyboardService` to catch keyboard's events to download the current
   * image with keyboard's shortcuts. This service, will be removed either when modal gallery component
   * will be destroyed or when the gallery is closed invoking the `closeGallery` method.
   * @private
   */
  registerKeyboardService() {
    if (this.id === null || this.id === undefined) {
      throw new Error('Internal library error - id must be defined');
    }
    const libConfig = this.configService.getConfig(this.id);
    if (!libConfig) {
      throw new Error('Internal library error - libConfig must be defined');
    }
    this.keyboardService.init(libConfig).then(() => {
      this.keyboardService.add((event, combo) => {
        if (event.preventDefault) {
          event.preventDefault();
        } else {
          // internet explorer
          event.returnValue = false;
        }
        this.downloadImage();
      }, libConfig);
    });
  }
  /**
   * Method to download the current image, only if `downloadable` is true.
   * @private
   */
  downloadImage() {
    if (this.id === null || this.id === undefined) {
      throw new Error('Internal library error - id must be defined');
    }
    const libConfig = this.configService.getConfig(this.id);
    if (!libConfig) {
      throw new Error('Internal library error - libConfig must be defined');
    }
    const currentImageConfig = libConfig.currentImageConfig;
    if (currentImageConfig && !currentImageConfig.downloadable) {
      return;
    }
    this.downloadImageAllBrowsers();
  }
  /**
   * Method to convert a base64 to a Blob
   * @param base64Data string with base64 data
   * @param contentType string with the MIME type
   * @return Blob converted from the input base64Data
   * @private
   */
  base64toBlob(base64Data, contentType = '') {
    const sliceSize = 1024;
    const byteCharacters = atob(base64Data);
    const bytesLength = byteCharacters.length;
    const slicesCount = Math.ceil(bytesLength / sliceSize);
    const byteArrays = new Array(slicesCount);
    for (let sliceIndex = 0; sliceIndex < slicesCount; ++sliceIndex) {
      const begin = sliceIndex * sliceSize;
      const end = Math.min(begin + sliceSize, bytesLength);
      const bytes = new Array(end - begin);
      for (let offset = begin, i = 0; offset < end; ++i, ++offset) {
        bytes[i] = byteCharacters[offset].charCodeAt(0);
      }
      byteArrays[sliceIndex] = new Uint8Array(bytes);
    }
    return new Blob(byteArrays, {
      type: contentType
    });
  }
  /**
   * Private method to download the current image for all browsers.
   * @private
   */
  downloadImageAllBrowsers() {
    const link = document.createElement('a');
    let isBase64 = false;
    let img;
    // convert a SafeResourceUrl to a string
    if (typeof this.currentImage.modal.img === 'string') {
      img = this.currentImage.modal.img;
    } else {
      // if it's a SafeResourceUrl
      img = this.sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_0__.SecurityContext.RESOURCE_URL, this.currentImage.modal.img);
    }
    if (img.includes('data:image/') || img.includes(';base64,')) {
      const extension = img.replace('data:image/', '').split(';base64,')[0];
      const pureBase64 = img.split(';base64,')[1];
      const blob = this.base64toBlob(pureBase64, 'image/' + extension);
      link.href = URL.createObjectURL(blob);
      isBase64 = true;
      link.setAttribute('download', this.getFileName(this.currentImage, isBase64, extension));
    } else {
      link.href = img;
      link.setAttribute('download', this.getFileName(this.currentImage, isBase64));
    }
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  /**
   * Private method to get the `ButtonEvent` to emit, merging the input `ButtonEvent`
   * with the current image.
   * @param event ButtonEvent event payload to return
   * @returns ButtonEvent event payload with the current image included
   * @private
   */
  getButtonEventToEmit(event) {
    return Object.assign(event, {
      image: this.currentImage
    });
  }
  /**
   * Private method to get the file name from an input path.
   * This is used either to get the image's name from its path or from the Image itself,
   * if specified as 'downloadFileName' by the user.
   * @param image Image image to extract its file name
   * @param isBase64 boolean to set if the image is a base64 file or not. False by default.
   * @param base64Extension string to force the extension of the base64 image. Empty string by default.
   * @returns string string file name of the input image.
   * @private
   */
  getFileName(image, isBase64 = false, base64Extension = '') {
    if (!image.modal.downloadFileName || image.modal.downloadFileName.length === 0) {
      if (isBase64) {
        return `Image-${image.id}.${base64Extension !== '' ? base64Extension : 'png'}`;
      } else {
        return image.modal.img.replace(/^.*[\\\/]/, '');
      }
    } else {
      return image.modal.downloadFileName;
    }
  }
  /**
   * Private method to initialize `images` as array of `Image`s.
   * Also, it will emit ImageModalEvent to say that images are loaded.
   * @private
   */
  initImages() {
    this.modalGalleryService.emitHasData(new ImageModalEvent(this.id, Action.LOAD, true));
    const currentIndex = this.images.indexOf(this.currentImage);
    // emit a new ImageModalEvent with the index of the current image
    this.modalGalleryService.emitShow(new ImageModalEvent(this.id, Action.LOAD, currentIndex + 1));
    // emit first/last event based on newIndex value
    this.emitBoundaryEvent(Action.NORMAL, currentIndex);
    this.showGallery = this.images.length > 0;
  }
  /**
   * Private method to emit events when either the last or the first image are visible.
   * @param action Action Enum of type Action that represents the source of the event that changed the
   *  current image to the first one or the last one.
   * @param indexToCheck number is the index number of the image (the first or the last one).
   * @private
   */
  emitBoundaryEvent(action, indexToCheck) {
    // to emit first/last event
    switch (indexToCheck) {
      case 0:
        this.modalGalleryService.emitFirstImage(new ImageModalEvent(this.id, action, true));
        break;
      case this.images.length - 1:
        this.modalGalleryService.emitLastImage(new ImageModalEvent(this.id, action, true));
        break;
    }
  }
}
ModalGalleryComponent.ɵfac = function ModalGalleryComponent_Factory(t) {
  return new (t || ModalGalleryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ModalGalleryService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](KeyboardService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](IdValidatorService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.DomSanitizer));
};
ModalGalleryComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: ModalGalleryComponent,
  selectors: [["ks-modal-gallery"]],
  viewQuery: function ModalGalleryComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](CurrentImageComponent, 7);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.currentImageComponent = _t.first);
    }
  },
  hostBindings: function ModalGalleryComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("popstate", function ModalGalleryComponent_popstate_HostBindingHandler($event) {
        return ctx.onPopState($event);
      }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    }
  },
  decls: 8,
  vars: 17,
  consts: [["id", "modal-gallery-wrapper", "ksClickOutside", "", 3, "title", "clickOutsideEnable", "clickOutside"], ["id", "flex-min-height-ie-fix"], ["id", "modal-gallery-container"], [3, "id", "currentImage", "delete", "navigate", "download", "closeButton", "fullscreen", "customEmit"], [3, "id", "images", "currentImage", "isOpen", "loadImage", "changeImage", "closeGallery"], [3, "id", "images", "currentImage", "dotsConfig", "clickDot"], [3, "id", "images", "currentImage", "customTemplate", "clickPreview"]],
  template: function ModalGalleryComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clickOutside", function ModalGalleryComponent_Template_div_clickOutside_0_listener($event) {
        return ctx.onClickOutside($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "ks-upper-buttons", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("delete", function ModalGalleryComponent_Template_ks_upper_buttons_delete_3_listener($event) {
        return ctx.onDelete($event);
      })("navigate", function ModalGalleryComponent_Template_ks_upper_buttons_navigate_3_listener($event) {
        return ctx.onNavigate($event);
      })("download", function ModalGalleryComponent_Template_ks_upper_buttons_download_3_listener($event) {
        return ctx.onDownload($event);
      })("closeButton", function ModalGalleryComponent_Template_ks_upper_buttons_closeButton_3_listener($event) {
        return ctx.onCloseGalleryButton($event);
      })("fullscreen", function ModalGalleryComponent_Template_ks_upper_buttons_fullscreen_3_listener($event) {
        return ctx.onFullScreen($event);
      })("customEmit", function ModalGalleryComponent_Template_ks_upper_buttons_customEmit_3_listener($event) {
        return ctx.onCustomEmit($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ks-current-image", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("loadImage", function ModalGalleryComponent_Template_ks_current_image_loadImage_4_listener($event) {
        return ctx.onImageLoad($event);
      })("changeImage", function ModalGalleryComponent_Template_ks_current_image_changeImage_4_listener($event) {
        return ctx.onChangeCurrentImage($event);
      })("closeGallery", function ModalGalleryComponent_Template_ks_current_image_closeGallery_4_listener($event) {
        return ctx.onCloseGallery($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div")(6, "ks-dots", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clickDot", function ModalGalleryComponent_Template_ks_dots_clickDot_6_listener($event) {
        return ctx.onClickDot($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ks-previews", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clickPreview", function ModalGalleryComponent_Template_ks_previews_clickPreview_7_listener($event) {
        return ctx.onClickPreview($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx.accessibilityConfig.modalGalleryContentTitle)("clickOutsideEnable", ctx.enableCloseOutside);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx.accessibilityConfig.modalGalleryContentAriaLabel);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx.id)("currentImage", ctx.currentImage);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx.id)("images", ctx.images)("currentImage", ctx.currentImage)("isOpen", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx.id)("images", ctx.images)("currentImage", ctx.currentImage)("dotsConfig", ctx.dotsConfig);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx.id)("images", ctx.images)("currentImage", ctx.currentImage)("customTemplate", ctx.customPreviewsTemplate);
    }
  },
  dependencies: [UpperButtonsComponent, DotsComponent, PreviewsComponent, CurrentImageComponent, ClickOutsideDirective],
  styles: ["#flex-min-height-ie-fix[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center}#modal-gallery-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:space-between;min-width:100vw;min-height:100vh}"],
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModalGalleryComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'ks-modal-gallery',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      template: "<div id=\"modal-gallery-wrapper\"\n     [attr.aria-label]=\"accessibilityConfig.modalGalleryContentAriaLabel\"\n     [title]=\"accessibilityConfig.modalGalleryContentTitle\"\n     ksClickOutside [clickOutsideEnable]=\"enableCloseOutside\"\n     (clickOutside)=\"onClickOutside($event)\">\n\n  <div id=\"flex-min-height-ie-fix\">\n    <div id=\"modal-gallery-container\">\n\n      <ks-upper-buttons [id]=\"id\"\n                        [currentImage]=\"currentImage\"\n                        (delete)=\"onDelete($event)\"\n                        (navigate)=\"onNavigate($event)\"\n                        (download)=\"onDownload($event)\"\n                        (closeButton)=\"onCloseGalleryButton($event)\"\n                        (fullscreen)=\"onFullScreen($event)\"\n                        (customEmit)=\"onCustomEmit($event)\"></ks-upper-buttons>\n\n      <ks-current-image [id]=\"id\"\n                        [images]=\"images\"\n                        [currentImage]=\"currentImage\"\n                        [isOpen]=\"true\"\n                        (loadImage)=\"onImageLoad($event)\"\n                        (changeImage)=\"onChangeCurrentImage($event)\"\n                        (closeGallery)=\"onCloseGallery($event)\"></ks-current-image>\n\n      <div>\n        <ks-dots [id]=\"id\"\n                 [images]=\"images\"\n                 [currentImage]=\"currentImage\"\n                 [dotsConfig]=\"dotsConfig\"\n                 (clickDot)=\"onClickDot($event)\"></ks-dots>\n\n        <ks-previews [id]=\"id\"\n                     [images]=\"images\"\n                     [currentImage]=\"currentImage\"\n                     [customTemplate]=\"customPreviewsTemplate\"\n                     (clickPreview)=\"onClickPreview($event)\"></ks-previews>\n      </div>\n    </div>\n  </div>\n</div>\n",
      styles: ["#flex-min-height-ie-fix{display:flex;flex-direction:column;justify-content:center}#modal-gallery-container{display:flex;flex-direction:column;justify-content:space-between;min-width:100vw;min-height:100vh}\n"]
    }]
  }], function () {
    return [{
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [DIALOG_DATA]
      }]
    }, {
      type: ModalGalleryService
    }, {
      type: KeyboardService
    }, {
      type: Object,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_ID]
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: IdValidatorService
    }, {
      type: ConfigService
    }, {
      type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.DomSanitizer
    }];
  }, {
    currentImageComponent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: [CurrentImageComponent, {
        static: true
      }]
    }],
    onPopState: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['window:popstate', ['$event']]
    }]
  });
})();

/*
 The MIT License (MIT)

 Copyright (C) 2017-2022 Stefano Cappa (Ks89)

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.
 */
/**
 * Class that represents the modal dialog instance.
 * It is returned by the open method.
 */
class ModalGalleryRef {
  constructor(overlayRef) {
    this.overlayRef = overlayRef;
    this.close = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    this.close$ = this.close.asObservable();
    this.show = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    this.show$ = this.show.asObservable();
    this.firstImage = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    this.firstImage$ = this.firstImage.asObservable();
    this.lastImage = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    this.lastImage$ = this.lastImage.asObservable();
    this.hasData = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    this.hasData$ = this.hasData.asObservable();
    this.buttonBeforeHook = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    this.buttonBeforeHook$ = this.buttonBeforeHook.asObservable();
    this.buttonAfterHook = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    this.buttonAfterHook$ = this.buttonAfterHook.asObservable();
  }
  /**
   * Close modal dialog, disposing the Overlay.
   */
  closeModal() {
    this.overlayRef.dispose();
  }
  /**
   * Method to emit close event.
   * @param event ImageModalEvent event payload
   */
  emitClose(event) {
    this.close.next(event);
  }
  /**
   * Method to emit show event.
   * @param event ImageModalEvent event payload
   */
  emitShow(event) {
    this.show.next(event);
  }
  /**
   * Method to emit firstImage event.
   * @param event ImageModalEvent event payload
   */
  emitFirstImage(event) {
    this.firstImage.next(event);
  }
  /**
   * Method to emit lastImage event.
   * @param event ImageModalEvent event payload
   */
  emitLastImage(event) {
    this.lastImage.next(event);
  }
  /**
   * Method to emit hasData event.
   * @param event ImageModalEvent event payload
   */
  emitHasData(event) {
    this.hasData.next(event);
  }
  /**
   * Method to emit buttonBeforeHook event.
   * @param event ImageModalEvent event payload
   */
  emitButtonBeforeHook(event) {
    this.buttonBeforeHook.next(event);
  }
  /**
   * Method to emit buttonAfterHook event.
   * @param event ImageModalEvent event payload
   */
  emitButtonAfterHook(event) {
    this.buttonAfterHook.next(event);
  }
}
const DEFAULT_DIALOG_CONFIG = {
  hasBackdrop: true,
  backdropClass: 'ks-modal-gallery-backdrop',
  panelClass: 'ks-modal-gallery-panel'
};
class ModalGalleryService {
  constructor(injector, overlay, configService) {
    this.injector = injector;
    this.overlay = overlay;
    this.configService = configService;
    this.updateImages = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    this.updateImages$ = this.updateImages.asObservable();
  }
  /**
   * Method to open modal gallery passing the configuration
   * @param config ModalGalleryConfig that contains: id, array of images, current image and optionally the configuration object
   * @return ModalGalleryRef | undefined is the object used to listen for events.
   */
  open(config) {
    // Returns an OverlayRef which is a PortalHost
    const overlayRef = this.createOverlay();
    // Instantiate a reference to the dialog
    this.dialogRef = new ModalGalleryRef(overlayRef);
    // Attach dialog container
    const overlayComponent = this.attachDialogContainer(overlayRef, config, this.dialogRef);
    overlayRef.backdropClick().subscribe(() => {
      if (this.dialogRef) {
        this.dialogRef.closeModal();
      }
    });
    return this.dialogRef;
  }
  /**
   * Method to close a modal gallery previously opened.
   * @param id Unique identifier of the modal gallery
   * @param clickOutside boolean is true if closed clicking on the modal backdrop, false otherwise.
   */
  close(id, clickOutside) {
    const libConfig = this.configService.getConfig(id);
    if (clickOutside) {
      if (this.dialogRef && libConfig && libConfig.enableCloseOutside) {
        this.dialogRef.closeModal();
      }
    } else {
      if (this.dialogRef) {
        this.dialogRef.closeModal();
      }
    }
  }
  /**
   * Method to update images array.
   * @param images Image[] updated array of images
   */
  updateModalImages(images) {
    this.updateImages.next(images);
  }
  /**
   * Method to emit close event.
   * @param event ImageModalEvent is the event payload
   */
  emitClose(event) {
    if (!this.dialogRef) {
      return;
    }
    this.dialogRef.emitClose(event);
  }
  /**
   * Method to emit show event.
   * @param event ImageModalEvent is the event payload
   */
  emitShow(event) {
    if (!this.dialogRef) {
      return;
    }
    this.dialogRef.emitShow(event);
  }
  /**
   * Method to emit firstImage event.
   * @param event ImageModalEvent is the event payload
   */
  emitFirstImage(event) {
    if (!this.dialogRef) {
      return;
    }
    this.dialogRef.emitFirstImage(event);
  }
  /**
   * Method to emit lastImage event.
   * @param event ImageModalEvent is the event payload
   */
  emitLastImage(event) {
    if (!this.dialogRef) {
      return;
    }
    this.dialogRef.emitLastImage(event);
  }
  /**
   * Method to emit hasData event.
   * @param event ImageModalEvent is the event payload
   */
  emitHasData(event) {
    if (!this.dialogRef) {
      return;
    }
    this.dialogRef.emitHasData(event);
  }
  /**
   * Method to emit buttonBeforeHook event.
   * @param event ButtonEvent is the event payload
   */
  emitButtonBeforeHook(event) {
    if (!this.dialogRef) {
      return;
    }
    this.dialogRef.emitButtonBeforeHook(event);
  }
  /**
   * Method to emit buttonAfterHook event.
   * @param event ButtonEvent is the event payload
   */
  emitButtonAfterHook(event) {
    if (!this.dialogRef) {
      return;
    }
    this.dialogRef.emitButtonAfterHook(event);
  }
  /**
   * Private method to create an Overlay using Angular CDK APIs
   * @private
   */
  createOverlay() {
    const overlayConfig = this.getOverlayConfig();
    return this.overlay.create(overlayConfig);
  }
  /**
   * Private method to attach ModalGalleryComponent to the overlay.
   * @param overlayRef OverlayRef is the Overlay object created using Angular CDK APIs
   * @param config ModalGalleryConfig that contains: id, array of images, current image and optionally the configuration object
   * @param dialogRef ModalGalleryRef is the object to control the dialog instance
   * @private
   */
  attachDialogContainer(overlayRef, config, dialogRef) {
    const injector = _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector.create({
      parent: this.injector,
      providers: [{
        provide: ModalGalleryRef,
        useValue: dialogRef
      }, {
        provide: DIALOG_DATA,
        useValue: config
      }]
    });
    const containerPortal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_9__.ComponentPortal(ModalGalleryComponent, null, injector);
    const containerRef = overlayRef.attach(containerPortal);
    return containerRef.instance;
  }
  /**
   * Private method to create an OverlayConfig instance
   * @private
   */
  getOverlayConfig() {
    const positionStrategy = this.overlay.position().global().centerHorizontally().centerVertically();
    const overlayConfig = new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_10__.OverlayConfig({
      hasBackdrop: DEFAULT_DIALOG_CONFIG.hasBackdrop,
      backdropClass: DEFAULT_DIALOG_CONFIG.backdropClass,
      panelClass: DEFAULT_DIALOG_CONFIG.panelClass,
      scrollStrategy: this.overlay.scrollStrategies.block(),
      positionStrategy
    });
    return overlayConfig;
  }
}
ModalGalleryService.ɵfac = function ModalGalleryService_Factory(t) {
  return new (t || ModalGalleryService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_10__.Overlay), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ConfigService));
};
ModalGalleryService.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: ModalGalleryService,
  factory: ModalGalleryService.ɵfac,
  providedIn: 'root'
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModalGalleryService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector
    }, {
      type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_10__.Overlay
    }, {
      type: ConfigService
    }];
  }, null);
})();

/*
 The MIT License (MIT)

 Copyright (C) 2017-2021 Stefano Cappa (Ks89)

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.
 */
/**
 * Default max height of previews.
 */
const DEFAULT_MAX_HEIGHT = '200px';
/**
 * Component with image previews for carousel
 */
class CarouselPreviewsComponent extends AccessibleComponent {
  constructor(ref, breakpointObserver,
  // sanitizer is used only to sanitize style before add it to background property when legacyIE11Mode is enabled
  sanitizer, configService) {
    super();
    this.ref = ref;
    this.breakpointObserver = breakpointObserver;
    this.sanitizer = sanitizer;
    this.configService = configService;
    /**
     * Variable to change the max-width of the host component
     */
    this.hostMaxWidth = '100%';
    /**
     * Variable to set aria-label of the host component
     */
    this.ariaLabel = `Carousel previews`;
    /**
     * Output to emit the clicked preview. The payload contains the `InternalLibImage` associated to the clicked preview.
     */
    this.clickPreview = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Enum of type `Action` that represents a mouse click on a button.
     * Declared here to be used inside the template.
     */
    this.clickAction = Action.CLICK;
    /**
     * Enum of type `Action` that represents a keyboard action.
     * Declared here to be used inside the template.
     */
    this.keyboardAction = Action.KEYBOARD;
    /**
     * Array of `InternalLibImage` exposed to the template. This field is initialized
     * applying transformations, default values and so on to the input of the same type.
     */
    this.previews = [];
    /**
     * Variable with the preview's maxHeight
     */
    this.previewMaxHeight = DEFAULT_MAX_HEIGHT;
    // listen for width changes and update preview heights accordingly
    this.breakpointSubscription = breakpointObserver.observe([_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_11__.Breakpoints.XSmall, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_11__.Breakpoints.Small, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_11__.Breakpoints.Medium, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_11__.Breakpoints.Large, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_11__.Breakpoints.XLarge]).subscribe(result => {
      if (!this.previewConfig || !this.previewConfig.breakpoints) {
        return;
      }
      if (result.breakpoints[_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_11__.Breakpoints.XSmall]) {
        this.updateHeight(this.previewConfig.breakpoints.xSmall);
      } else if (result.breakpoints[_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_11__.Breakpoints.Small]) {
        this.updateHeight(this.previewConfig.breakpoints.small);
      } else if (result.breakpoints[_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_11__.Breakpoints.Medium]) {
        this.updateHeight(this.previewConfig.breakpoints.medium);
      } else if (result.breakpoints[_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_11__.Breakpoints.Large]) {
        this.updateHeight(this.previewConfig.breakpoints.large);
      } else if (result.breakpoints[_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_11__.Breakpoints.XLarge]) {
        this.updateHeight(this.previewConfig.breakpoints.xLarge);
      }
    });
  }
  /**
   * Method to update the height of previews, passing the desired height as input.
   * @param configBreakpointHeight is a number that represent the desired height to set.
   */
  updateHeight(configBreakpointHeight) {
    if (this.previewConfig && this.previewConfig.maxHeight) {
      const heightNum = +this.previewConfig.maxHeight.replace('/px/g', '').replace('/%/g', '');
      this.previewMaxHeight = Math.min(configBreakpointHeight, heightNum) + 'px';
    } else {
      const heightNum = +DEFAULT_MAX_HEIGHT.replace('/px/g', '').replace('/%/g', '');
      this.previewMaxHeight = Math.min(configBreakpointHeight, heightNum) + 'px';
    }
    this.ref.markForCheck();
  }
  /**
   * Method ´ngOnInit´ to build `configPreview` applying a default value and also to
   * init the `previews` array.
   * This is an Angular's lifecycle hook, so its called automatically by Angular itself.
   * In particular, it's called only one time!!!
   */
  ngOnInit() {
    const libConfig = this.configService.getConfig(this.id);
    if (!libConfig) {
      throw new Error('Internal library error - libConfig must be defined');
    }
    this.carouselConfig = libConfig.carouselConfig;
    this.previewConfig = libConfig.carouselPreviewsConfig;
    this.accessibilityConfig = libConfig.accessibilityConfig;
    if (!this.previewConfig || !this.previewConfig.maxHeight || !this.previewConfig.breakpoints) {
      throw new Error('Internal library error - previewConfig must be defined');
    }
    // change the max-width of this component if there is a specified width !== 100% in carouselConfig
    if (this.carouselConfig && this.carouselConfig.maxWidth !== '100%') {
      this.hostMaxWidth = this.carouselConfig.maxWidth;
    }
    this.previewMaxHeight = this.previewConfig.maxHeight;
    // init previews based on currentImage and the full array of images
    this.initPreviews(this.currentImage, this.images);
    // apply custom height based on responsive breakpoints
    // This is required, because the breakpointSubscription is not triggered at creation,
    // but only when the width changes
    const isXsmallScreen = this.breakpointObserver.isMatched(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_11__.Breakpoints.XSmall);
    const isSmallScreen = this.breakpointObserver.isMatched(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_11__.Breakpoints.Small);
    const isMediumScreen = this.breakpointObserver.isMatched(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_11__.Breakpoints.Medium);
    const isLargeScreen = this.breakpointObserver.isMatched(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_11__.Breakpoints.Large);
    const isxLargeScreen = this.breakpointObserver.isMatched(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_11__.Breakpoints.XLarge);
    if (isXsmallScreen) {
      this.updateHeight(this.previewConfig.breakpoints.xSmall);
    } else if (isSmallScreen) {
      this.updateHeight(this.previewConfig.breakpoints.small);
    } else if (isMediumScreen) {
      this.updateHeight(this.previewConfig.breakpoints.medium);
    } else if (isLargeScreen) {
      this.updateHeight(this.previewConfig.breakpoints.large);
    } else if (isxLargeScreen) {
      this.updateHeight(this.previewConfig.breakpoints.xLarge);
    }
  }
  /**
   * Method to check if an image is active (i.e. a preview image).
   * @param InternalLibImage preview is an image to check if it's active or not
   * @returns boolean true if is active, false otherwise
   */
  isActive(preview) {
    if (!preview || !this.currentImage) {
      return false;
    }
    return preview.id === this.currentImage.id;
  }
  /**
   * Method ´ngOnChanges´ to update `previews` array.
   * Also, both `start` and `end` local variables will be updated accordingly.
   * This is an Angular's lifecycle hook, so its called automatically by Angular itself.
   * In particular, it's called when any data-bound property of a directive changes!!!
   */
  ngOnChanges(changes) {
    const simpleChange = changes.currentImage;
    if (!simpleChange) {
      return;
    }
    const prev = simpleChange.previousValue;
    const current = simpleChange.currentValue;
    if (current && changes.images && changes.images.previousValue && changes.images.currentValue) {
      // I'm in this if statement, if input images are changed (for instance, because I removed one of them with the 'delete button',
      // or because users changed the images array while modal gallery is still open).
      // In this case, I have to re-init previews, because the input array of images is changed.
      this.initPreviews(current, changes.images.currentValue);
    }
    if (prev && current && prev.id !== current.id) {
      // to manage infinite sliding I have to reset both `start` and `end` at the beginning
      // to show again previews from the first image.
      // This happens when you navigate over the last image to return to the first one
      let prevIndex;
      let currentIndex;
      try {
        prevIndex = getIndex(prev, this.images);
        currentIndex = getIndex(current, this.images);
      } catch (err) {
        console.error('Cannot get previous and current image indexes in previews');
        throw err;
      }
      // apply a formula to get a values to be used to decide if go next, return back or stay without doing anything
      const calc = Math.floor((this.end - this.start) / 2) + this.start;
      if (prevIndex === this.images.length - 1 && currentIndex === 0) {
        // first image
        this.setBeginningIndexesPreviews();
        this.previews = this.images.filter((img, i) => i >= this.start && i < this.end);
        return;
      }
      // the same for the opposite case, when you navigate back from the fist image to go to the last one.
      if (prevIndex === 0 && currentIndex === this.images.length - 1) {
        // last image
        this.setEndIndexesPreviews();
        this.previews = this.images.filter((img, i) => i >= this.start && i < this.end);
        return;
      }
      if (this.previewConfig && this.previewConfig.number % 2 === 0) {
        if (calc > currentIndex) {
          this.previous();
        } else {
          this.next();
        }
      } else {
        if (calc > currentIndex) {
          this.previous();
        }
        if (calc < currentIndex) {
          this.next();
        }
      }
    }
  }
  /**
   * Method called by events from both keyboard and mouse on a preview.
   * This will trigger the `clickpreview` output with the input preview as its payload.
   * @param InternalLibImage preview that triggered this method
   * @param KeyboardEvent | MouseEvent event payload
   * @param Action that triggered this event (Action.NORMAL by default)
   */
  onImageEvent(preview, event, action = Action.NORMAL) {
    if (!this.previewConfig || !this.previewConfig.clickable) {
      return;
    }
    const clickedImageIndex = this.images.indexOf(preview);
    const result = super.handleImageEvent(event);
    if (result === NEXT) {
      this.clickPreview.emit({
        action,
        result: clickedImageIndex
      });
    } else if (result === PREV) {
      this.clickPreview.emit({
        action,
        result: clickedImageIndex
      });
    }
  }
  /**
   * Method called by events from both keyboard and mouse on a navigation arrow.
   * @param string direction of the navigation that can be either 'next' or 'prev'
   * @param KeyboardEvent | MouseEvent event payload
   */
  onNavigationEvent(direction, event) {
    const result = super.handleNavigationEvent(direction, event);
    if (result === NEXT) {
      this.next();
    } else if (result === PREV) {
      this.previous();
    }
  }
  /**
   * Method to get aria-label text for a preview image.
   * @param Image is the preview
   */
  getAriaLabel(preview) {
    if (!preview.plain) {
      return preview.modal.ariaLabel || '';
    }
    return preview.plain.ariaLabel || preview.modal.ariaLabel || '';
  }
  /**
   * Method to get title text for a preview image.
   * @param Image is the preview
   */
  getTitle(preview) {
    if (!preview.plain) {
      return preview.modal.title || '';
    }
    return preview.plain.title || preview.modal.title || '';
  }
  /**
   * Method to get alt text for a preview image.
   * @param Image is the preview
   */
  getAlt(preview) {
    if (!preview.plain) {
      return preview.modal.alt || '';
    }
    return preview.plain.alt || preview.modal.alt || '';
  }
  /**
   * Method used in the template to track ids in ngFor.
   * @param number index of the array
   * @param Image item of the array
   * @returns number the id of the item
   */
  trackById(index, item) {
    return item.id;
  }
  /**
   * Method used in template to sanitize an url when you need legacyIE11Mode.
   * In this way you can set an url as background of a div.
   * @param unsafeStyle is a string or a SafeResourceUrl that represents the url to sanitize.
   * @param unsafeStyleFallback is a string or a SafeResourceUrl that represents the fallback url to sanitize.
   * @returns a SafeStyle object that can be used in template without problems.
   */
  sanitizeUrlBgStyle(unsafeStyle, unsafeStyleFallback) {
    // Method used only to sanitize background-image style before add it to background property when legacyIE11Mode is enabled
    let bg = 'url(' + unsafeStyle + ')';
    if (!!unsafeStyleFallback) {
      // if a fallback image is defined, append it. In this way, it will be used by the browser as fallback.
      bg += ', ' + 'url(' + unsafeStyleFallback + ')';
    }
    return this.sanitizer.bypassSecurityTrustStyle(bg);
  }
  /**
   * Method to cleanup resources. In fact, it cleans breakpointSubscription.
   * This is an Angular's lifecycle hook that is called when this component is destroyed.
   */
  ngOnDestroy() {
    if (this.breakpointSubscription) {
      this.breakpointSubscription.unsubscribe();
    }
  }
  /**
   * Private method to init previews based on the currentImage and the full array of images.
   * The current image in mandatory to show always the current preview (as highlighted).
   * @param InternalLibImage currentImage to decide how to show previews, because I always want to see the current image as highlighted
   * @param InternalLibImage[] images is the array of all images.
   */
  initPreviews(currentImage, images) {
    let index;
    try {
      index = getIndex(currentImage, images);
    } catch (err) {
      throw err;
    }
    switch (index) {
      case 0:
        // first image
        this.setBeginningIndexesPreviews();
        break;
      case images.length - 1:
        // last image
        this.setEndIndexesPreviews();
        break;
      // default:
      //   // other images
      //   // TODO unused because it starts always at image 0
      //   this.setIndexesPreviews();
      //   break;
    }

    this.previews = images.filter((img, i) => i >= this.start && i < this.end);
  }
  /**
   * Private method to init both `start` and `end` to the beginning.
   */
  setBeginningIndexesPreviews() {
    if (!this.previewConfig || this.previewConfig.number === undefined) {
      throw new Error('Internal library error - previewConfig and number must be defined');
    }
    this.start = 0;
    this.end = Math.min(this.previewConfig.number, this.images.length);
  }
  /**
   * Private method to init both `start` and `end` to the end.
   */
  setEndIndexesPreviews() {
    if (!this.previewConfig || this.previewConfig.number === undefined) {
      throw new Error('Internal library error - previewConfig and number must be defined');
    }
    this.start = this.images.length - 1 - (this.previewConfig.number - 1);
    this.end = this.images.length;
  }
  /**
   * Private method to update the visible previews navigating to the right (next).
   */
  next() {
    // check if nextImage should be blocked
    if (this.isPreventSliding(this.images.length - 1)) {
      return;
    }
    if (this.end === this.images.length) {
      return;
    }
    this.start++;
    this.end = Math.min(this.end + 1, this.images.length);
    this.previews = this.images.filter((img, i) => i >= this.start && i < this.end);
  }
  /**
   * Private method to update the visible previews navigating to the left (previous).
   */
  previous() {
    // check if prevImage should be blocked
    if (this.isPreventSliding(0)) {
      return;
    }
    if (this.start === 0) {
      return;
    }
    this.start = Math.max(this.start - 1, 0);
    this.end = Math.min(this.end - 1, this.images.length);
    this.previews = this.images.filter((img, i) => i >= this.start && i < this.end);
  }
  /**
   * Private method to block/permit sliding between previews.
   * @param number boundaryIndex is the first or the last index of `images` input array
   * @returns boolean if true block sliding, otherwise not
   */
  isPreventSliding(boundaryIndex) {
    return getIndex(this.currentImage, this.images) === boundaryIndex;
  }
}
CarouselPreviewsComponent.ɵfac = function CarouselPreviewsComponent_Factory(t) {
  return new (t || CarouselPreviewsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_11__.BreakpointObserver), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.DomSanitizer), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ConfigService));
};
CarouselPreviewsComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: CarouselPreviewsComponent,
  selectors: [["ks-carousel-previews"]],
  hostVars: 3,
  hostBindings: function CarouselPreviewsComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx.ariaLabel);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("max-width", ctx.hostMaxWidth);
    }
  },
  inputs: {
    id: "id",
    currentImage: "currentImage",
    images: "images"
  },
  outputs: {
    clickPreview: "clickPreview"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
  decls: 1,
  vars: 1,
  consts: [["class", "previews-container", 3, "title", 4, "ngIf"], [1, "previews-container", 3, "title"], ["role", "button", 1, "nav-left", 3, "tabIndex", "click", "keyup"], ["aria-hidden", "true", 3, "title"], [1, "preview-inner-container"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["role", "button", 1, "nav-right", 3, "tabIndex", "click", "keyup"], ["ksFallbackImage", "", "ksSize", "", "role", "img", 3, "class", "src", "fallbackImg", "sizeConfig", "title", "alt", "tabIndex", "click", "keyup", 4, "ngIf"], ["ksFallbackImage", "", "ksSize", "", "role", "img", 3, "src", "fallbackImg", "sizeConfig", "title", "alt", "tabIndex", "click", "keyup"]],
  template: function CarouselPreviewsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CarouselPreviewsComponent_nav_0_Template, 7, 16, "nav", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.previewConfig == null ? null : ctx.previewConfig.visible);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, SizeDirective, FallbackImageDirective],
  styles: ["[_nghost-%COMP%]{position:relative;margin-top:3px;margin-bottom:3px;width:100%}.previews-container[_ngcontent-%COMP%]{align-items:center;animation:fadein-semi-visible08 .8s;display:flex;flex-direction:row;justify-content:center;margin-bottom:0}.previews-container[_ngcontent-%COMP%] > .preview-inner-container[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:center;align-items:center;flex-wrap:nowrap;width:100%}.previews-container[_ngcontent-%COMP%] > .preview-inner-container[_ngcontent-%COMP%] > .preview-image[_ngcontent-%COMP%]{cursor:pointer;object-fit:cover}.previews-container[_ngcontent-%COMP%] > .preview-inner-container[_ngcontent-%COMP%] > .preview-image.unclickable[_ngcontent-%COMP%]{cursor:not-allowed}.previews-container[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%], .previews-container[_ngcontent-%COMP%] > .nav-right[_ngcontent-%COMP%], .previews-container[_ngcontent-%COMP%] > .nav-left[_ngcontent-%COMP%]{position:absolute;top:calc(50% - 7px);color:#919191;z-index:1000;cursor:pointer;transition:all .5s}.previews-container[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]:hover, .previews-container[_ngcontent-%COMP%] > .nav-right[_ngcontent-%COMP%]:hover, .previews-container[_ngcontent-%COMP%] > .nav-left[_ngcontent-%COMP%]:hover{transform:scale(1.1)}.previews-container[_ngcontent-%COMP%] > .nav-left[_ngcontent-%COMP%]{margin-right:10px;left:10px}.previews-container[_ngcontent-%COMP%] > .nav-left[_ngcontent-%COMP%] > .left-arrow-preview-image[_ngcontent-%COMP%]{opacity:1}.previews-container[_ngcontent-%COMP%] > .nav-right[_ngcontent-%COMP%]{margin-left:10px;right:10px}.previews-container[_ngcontent-%COMP%] > .nav-right[_ngcontent-%COMP%] > .right-arrow-preview-image[_ngcontent-%COMP%]{opacity:1}", _c4],
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CarouselPreviewsComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'ks-carousel-previews',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      template: "<nav *ngIf=\"previewConfig?.visible\"\n     class=\"previews-container\"\n     [attr.aria-label]=\"accessibilityConfig?.carouselPreviewsContainerAriaLabel\"\n     [title]=\"accessibilityConfig?.carouselPreviewsContainerTitle\">\n\n  <a class=\"nav-left\"\n     [attr.aria-label]=\"accessibilityConfig?.carouselPreviewScrollPrevAriaLabel\"\n     [tabIndex]=\"previewConfig?.arrows && start > 0 ? 0 : -1\" role=\"button\"\n     (click)=\"onNavigationEvent('left', $event)\" (keyup)=\"onNavigationEvent('left', $event)\">\n    <div class=\"inside {{previewConfig?.arrows && start > 0 ? 'left-arrow-preview-image' : 'empty-arrow-preview-image'}}\"\n         aria-hidden=\"true\"\n         [title]=\"accessibilityConfig?.carouselPreviewScrollPrevTitle\"></div>\n  </a>\n\n  <div class=\"preview-inner-container\">\n    <ng-container *ngFor=\"let preview of previews; trackBy: trackById; let index = index\">\n      <img *ngIf=\"preview?.modal?.img\"\n           class=\"inside preview-image{{isActive(preview) ? ' active' : ''}}{{!previewConfig?.clickable ? ' unclickable' : ''}}\"\n           [src]=\"preview.plain?.img ? preview.plain?.img : preview.modal.img\"\n           ksFallbackImage [fallbackImg]=\"preview.plain?.fallbackImg ? preview.plain?.fallbackImg : preview.modal.fallbackImg\"\n           ksSize [sizeConfig]=\"{width: previewConfig?.width!,\n                                 height: previewMaxHeight}\"\n           [attr.aria-label]=\"getAriaLabel(preview)\"\n           [title]=\"getTitle(preview)\"\n           alt=\"{{getAlt(preview)}}\"\n           [tabIndex]=\"0\" role=\"img\"\n           (click)=\"onImageEvent(preview, $event, clickAction)\" (keyup)=\"onImageEvent(preview, $event, keyboardAction)\"/>\n    </ng-container>\n  </div>\n\n  <a class=\"nav-right\"\n     [attr.aria-label]=\"accessibilityConfig?.carouselPreviewScrollNextAriaLabel\"\n     [tabIndex]=\"previewConfig?.arrows && end < images.length ? 0 : -1\" role=\"button\"\n     (click)=\"onNavigationEvent('right', $event)\" (keyup)=\"onNavigationEvent('right', $event)\">\n    <div class=\"inside {{previewConfig?.arrows && end < images.length ? 'right-arrow-preview-image' : 'empty-arrow-preview-image'}}\"\n         aria-hidden=\"true\"\n         [title]=\"accessibilityConfig?.carouselPreviewScrollNextTitle\"></div>\n  </a>\n\n</nav>\n",
      styles: [":host{position:relative;margin-top:3px;margin-bottom:3px;width:100%}.previews-container{align-items:center;animation:fadein-semi-visible08 .8s;display:flex;flex-direction:row;justify-content:center;margin-bottom:0}.previews-container>.preview-inner-container{display:flex;flex-direction:row;justify-content:center;align-items:center;flex-wrap:nowrap;width:100%}.previews-container>.preview-inner-container>.preview-image{cursor:pointer;object-fit:cover}.previews-container>.preview-inner-container>.preview-image.unclickable{cursor:not-allowed}.previews-container .nav,.previews-container>.nav-right,.previews-container>.nav-left{position:absolute;top:calc(50% - 7px);color:#919191;z-index:1000;cursor:pointer;transition:all .5s}.previews-container .nav:hover,.previews-container>.nav-right:hover,.previews-container>.nav-left:hover{transform:scale(1.1)}.previews-container>.nav-left{margin-right:10px;left:10px}.previews-container>.nav-left>.left-arrow-preview-image{opacity:1}.previews-container>.nav-right{margin-left:10px;right:10px}.previews-container>.nav-right>.right-arrow-preview-image{opacity:1}\n", ".arrow-preview-image,.right-arrow-preview-image,.left-arrow-preview-image,.empty-arrow-preview-image{width:15px;height:15px;opacity:.5}.empty-arrow-preview-image{background:black;opacity:0}.left-arrow-preview-image{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ3Ny4xNzUgNDc3LjE3NSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDc3LjE3NSA0NzcuMTc1OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4Ij48Zz48cGF0aCBkPSJNMTQ1LjE4OCwyMzguNTc1bDIxNS41LTIxNS41YzUuMy01LjMsNS4zLTEzLjgsMC0xOS4xcy0xMy44LTUuMy0xOS4xLDBsLTIyNS4xLDIyNS4xYy01LjMsNS4zLTUuMywxMy44LDAsMTkuMWwyMjUuMSwyMjUgICBjMi42LDIuNiw2LjEsNCw5LjUsNHM2LjktMS4zLDkuNS00YzUuMy01LjMsNS4zLTEzLjgsMC0xOS4xTDE0NS4xODgsMjM4LjU3NXoiIGZpbGw9IiNGRkZGRkYiLz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PC9zdmc+);background-size:15px;transition:all .5s}.left-arrow-preview-image:hover{transform:scale(1.2)}.right-arrow-preview-image{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ3Ny4xNzUgNDc3LjE3NSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDc3LjE3NSA0NzcuMTc1OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4Ij48Zz48cGF0aCBkPSJNMzYwLjczMSwyMjkuMDc1bC0yMjUuMS0yMjUuMWMtNS4zLTUuMy0xMy44LTUuMy0xOS4xLDBzLTUuMywxMy44LDAsMTkuMWwyMTUuNSwyMTUuNWwtMjE1LjUsMjE1LjUgICBjLTUuMyw1LjMtNS4zLDEzLjgsMCwxOS4xYzIuNiwyLjYsNi4xLDQsOS41LDRjMy40LDAsNi45LTEuMyw5LjUtNGwyMjUuMS0yMjUuMUMzNjUuOTMxLDI0Mi44NzUsMzY1LjkzMSwyMzQuMjc1LDM2MC43MzEsMjI5LjA3NXogICAiIGZpbGw9IiNGRkZGRkYiLz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PC9zdmc+);background-size:15px;transition:all .5s}.right-arrow-preview-image:hover{transform:scale(1.2)}\n"]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_11__.BreakpointObserver
    }, {
      type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.DomSanitizer
    }, {
      type: ConfigService
    }];
  }, {
    hostMaxWidth: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['style.max-width']
    }],
    ariaLabel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['attr.aria-label']
    }],
    // @ts-ignore
    id: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    // @ts-ignore
    currentImage: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    // @ts-ignore
    images: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    clickPreview: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }]
  });
})();

/*
 The MIT License (MIT)

 Copyright (C) 2017-2022 Stefano Cappa (Ks89)

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.
 */
/**
 * Directive to change the max size of an element.
 */
class MaxSizeDirective {
  constructor(renderer, el) {
    this.renderer = renderer;
    this.el = el;
  }
  /**
   * Method ´ngOnInit´ to apply the style of this directive.
   * This is an Angular's lifecycle hook, so its called automatically by Angular itself.
   * In particular, it's called only one time!!!
   */
  ngOnInit() {
    this.applyStyle();
  }
  /**
   * Method ´ngOnChanges´ to apply the style of this directive.
   * This is an Angular's lifecycle hook, so its called automatically by Angular itself.
   * In particular, it's called when any data-bound property of a directive changes!!!
   */
  ngOnChanges() {
    this.applyStyle();
  }
  /**
   * Private method to change both max-width and max-height of an element.
   */
  applyStyle() {
    if (!this.maxSizeConfig) {
      return;
    }
    if (this.maxSizeConfig.maxWidth) {
      this.renderer.setStyle(this.el.nativeElement, 'max-width', this.maxSizeConfig.maxWidth);
    }
    if (this.maxSizeConfig.maxHeight) {
      this.renderer.setStyle(this.el.nativeElement, 'max-height', this.maxSizeConfig.maxHeight);
    }
  }
}
MaxSizeDirective.ɵfac = function MaxSizeDirective_Factory(t) {
  return new (t || MaxSizeDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
};
MaxSizeDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: MaxSizeDirective,
  selectors: [["", "ksMaxSize", ""]],
  inputs: {
    maxSizeConfig: "maxSizeConfig"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MaxSizeDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[ksMaxSize]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }];
  }, {
    maxSizeConfig: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();

/*
 The MIT License (MIT)

 Copyright (C) 2017-2022 Stefano Cappa (Ks89)

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.
 */
/**
 * Component with configurable inline/plain carousel.
 */
class CarouselComponent extends AccessibleComponent {
  constructor(
  // tslint:disable-next-line:no-any
  platformId, ngZone, modalGalleryService, configService, ref) {
    super();
    this.platformId = platformId;
    this.ngZone = ngZone;
    this.modalGalleryService = modalGalleryService;
    this.configService = configService;
    this.ref = ref;
    /**
     * Attribute to set ariaLabel of the host component
     */
    this.ariaLabel = `Carousel`;
    /**
     * Array of `InternalLibImage` that represent the model of this library with all images,
     * thumbs and so on.
     */
    this.images = [];
    /**
     * Output to emit an event when an image is clicked.
     */
    this.clickImage = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Output to emit an event when current image is changed.
     */
    this.changeImage = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Output to emit an event when the current image is the first one.
     */
    this.firstImage = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Output to emit an event when the current image is the last one.
     */
    this.lastImage = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Enum of type `Action` that represents a mouse click on a button.
     * Declared here to be used inside the template.
     */
    this.clickAction = Action.CLICK;
    /**
     * Enum of type `Action` that represents a keyboard action.
     * Declared here to be used inside the template.
     */
    this.keyboardAction = Action.KEYBOARD;
    /**
     * Boolean that it's true when you are watching the first image (currently visible).
     * False by default
     */
    this.isFirstImage = false;
    /**
     * Boolean that it's true when you are watching the last image (currently visible).
     * False by default
     */
    this.isLastImage = false;
    /**
     * Subject to play the carousel.
     */
    this.start$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    /**
     * Subject to stop the carousel.
     */
    this.stop$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    /**
     * Private object without type to define all swipe actions used by hammerjs.
     */
    this.SWIPE_ACTION = {
      LEFT: 'swipeleft',
      RIGHT: 'swiperight',
      UP: 'swipeup',
      DOWN: 'swipedown'
    };
  }
  /**
   * Listener to stop the gallery when the mouse pointer is over the current image.
   */
  onMouseEnter() {
    if (this.id === null || this.id === undefined) {
      throw new Error('Internal library error - id must be defined');
    }
    const libConfig = this.configService.getConfig(this.id);
    if (!libConfig) {
      throw new Error('Internal library error - libConfig must be defined');
    }
    if (!libConfig.carouselPlayConfig || !libConfig.carouselPlayConfig.pauseOnHover) {
      return;
    }
    this.stopCarousel();
  }
  /**
   * Listener to play the gallery when the mouse pointer leave the current image.
   */
  onMouseLeave() {
    if (this.id === null || this.id === undefined) {
      throw new Error('Internal library error - id must be defined');
    }
    const libConfig = this.configService.getConfig(this.id);
    if (!libConfig) {
      throw new Error('Internal library error - libConfig must be defined');
    }
    if (!libConfig.carouselPlayConfig || !libConfig.carouselPlayConfig.pauseOnHover || !libConfig.carouselPlayConfig.autoPlay) {
      return;
    }
    this.playCarousel();
  }
  /**
   * Listener to navigate carousel images with keyboard (left).
   */
  onKeyDownLeft() {
    if (this.id === null || this.id === undefined) {
      throw new Error('Internal library error - id must be defined');
    }
    const libConfig = this.configService.getConfig(this.id);
    if (!libConfig) {
      throw new Error('Internal library error - libConfig must be defined');
    }
    if (!libConfig.carouselConfig || !libConfig.carouselConfig.keyboardEnable) {
      return;
    }
    this.prevImage();
  }
  /**
   * Listener to navigate carousel images with keyboard (right).
   */
  onKeyDownLRight() {
    if (this.id === null || this.id === undefined) {
      throw new Error('Internal library error - id must be defined');
    }
    const libConfig = this.configService.getConfig(this.id);
    if (!libConfig) {
      throw new Error('Internal library error - libConfig must be defined');
    }
    if (!libConfig.carouselConfig || !libConfig.carouselConfig.keyboardEnable) {
      return;
    }
    this.nextImage();
  }
  ngOnInit() {
    if (this.id === null || this.id === undefined) {
      throw new Error('Internal library error - id must be defined');
    }
    if (!this.images || this.images.length === 0) {
      throw new Error('Internal library error - images array must be defined and with at least an element');
    }
    this.configService.setConfig(this.id, this.config);
    const libConfig = this.configService.getConfig(this.id);
    if (!libConfig) {
      throw new Error('Internal library error - libConfig must be defined');
    }
    this.currentImage = this.images[0];
    this.carouselDotsConfig = libConfig.carouselDotsConfig;
    this.accessibilityConfig = libConfig.accessibilityConfig;
    this.carouselSlideInfinite = libConfig.carouselSlideInfinite;
    this.carouselConfig = libConfig.carouselConfig;
    this.carouselImageConfig = libConfig.carouselImageConfig;
    this.manageSlideConfig();
  }
  ngOnChanges(changes) {
    if (this.id === null || this.id === undefined) {
      throw new Error('Internal library error - id must be defined');
    }
    // this.configService.setConfig(this.id, this.config);
    const libConfig = this.configService.getConfig(this.id);
    if (!libConfig) {
      throw new Error('Internal library error - libConfig must be defined');
    }
    const configChange = changes.config;
    // handle changes of dotsConfig.visible
    if (configChange && !configChange.firstChange && (configChange.previousValue.carouselDotsConfig?.visible !== configChange.currentValue.carouselDotsConfig?.visible || !configChange.previousValue.carouselDotsConfig && !configChange.currentValue.carouselDotsConfig)) {
      this.configService.setConfig(this.id, {
        carouselDotsConfig: configChange.currentValue?.carouselDotsConfig
      });
      this.carouselDotsConfig = configChange.currentValue?.carouselDotsConfig;
      this.ref.markForCheck();
    }
    // handle changes of carouselConfig.showArrows
    if (configChange && !configChange.firstChange && (configChange.previousValue.carouselConfig?.showArrows !== configChange.currentValue.carouselConfig?.showArrows || !configChange.previousValue.carouselConfig && !configChange.currentValue.carouselConfig)) {
      this.configService.setConfig(this.id, {
        carouselConfig: configChange.currentValue?.carouselConfig
      });
      this.carouselConfig = configChange.currentValue?.carouselConfig;
      this.ref.markForCheck();
    }
    // handle changes of playConfig starting/stopping the carousel accordingly
    if (configChange && !configChange.firstChange && (configChange.previousValue.carouselPlayConfig?.autoPlay !== configChange.currentValue.carouselPlayConfig?.autoPlay || !configChange.previousValue.carouselPlayConfig && !configChange.currentValue.carouselPlayConfig)) {
      this.configService.setConfig(this.id, {
        carouselPlayConfig: configChange.currentValue?.carouselPlayConfig
      });
      // this.configPlay = playConfigChange.currentValue;
      // if autoplay is enabled, and this is not the
      // first change (to prevent multiple starts at the beginning)
      if (configChange.currentValue.carouselPlayConfig?.autoPlay && !configChange.firstChange) {
        this.start$.next();
      } else {
        this.stopCarousel();
      }
      this.ref.markForCheck();
    }
  }
  ngAfterContentInit() {
    // interval doesn't play well with SSR and protractor,
    // so we should run it in the browser and outside Angular
    if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_1__.isPlatformBrowser)(this.platformId)) {
      if (this.id === null || this.id === undefined) {
        throw new Error('Internal library error - id must be defined');
      }
      const libConfig = this.configService.getConfig(this.id);
      if (!libConfig || !libConfig.carouselPlayConfig) {
        throw new Error('Internal library error - libConfig and carouselPlayConfig must be defined');
      }
      this.ngZone.runOutsideAngular(() => {
        this.start$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(() => libConfig?.carouselPlayConfig?.interval),
        // tslint:disable-next-line:no-any
        (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.filter)(interval => interval > 0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(interval => (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.timer)(interval).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.stop$)))).subscribe(() => this.ngZone.run(() => {
          if (libConfig.carouselPlayConfig?.autoPlay) {
            this.nextImage();
          }
          this.ref.markForCheck();
        }));
        this.start$.next();
      });
    }
  }
  /**
   * Method called when a dot is clicked and used to update the current image.
   * @param number index of the clicked dot
   */
  onClickDot(index) {
    this.changeCurrentImage(this.images[index], Action.NORMAL);
  }
  /**
   * Method called by events from both keyboard and mouse on a navigation arrow.
   * @param string direction of the navigation that can be either 'next' or 'prev'
   * @param KeyboardEvent | MouseEvent event payload
   * @param Action action that triggered the event or `Action.NORMAL` if not provided
   */
  onNavigationEvent(direction, event, action = Action.NORMAL) {
    const result = super.handleNavigationEvent(direction, event);
    if (result === NEXT) {
      this.nextImage(action);
    } else if (result === PREV) {
      this.prevImage(action);
    }
  }
  /**
   * Method triggered when you click on the current image.
   * Also, if modalGalleryEnable is true, you can open the modal-gallery.
   */
  onClickCurrentImage() {
    if (this.id === null || this.id === undefined) {
      throw new Error('Internal library error - id must be defined');
    }
    const libConfig = this.configService.getConfig(this.id);
    if (!libConfig || !libConfig.carouselConfig || !this.currentImage) {
      throw new Error('Internal library error - libConfig, carouselConfig and currentImage must be defined');
    }
    if (!libConfig.carouselConfig.modalGalleryEnable) {
      return;
    }
    const index = getIndex(this.currentImage, this.images);
    this.clickImage.emit(index);
  }
  /**
   * Method to get the image description based on input params.
   * If you provide a full description this will be the visible description, otherwise,
   * it will be built using the `Description` object, concatenating its fields.
   * @param Image image to get its description. If not provided it will be the current image
   * @returns String description of the image (or the current image if not provided)
   * @throws an Error if description isn't available
   */
  getDescriptionToDisplay(image = this.currentImage) {
    if (this.id === null || this.id === undefined) {
      throw new Error('Internal library error - id must be defined');
    }
    const libConfig = this.configService.getConfig(this.id);
    if (!libConfig) {
      throw new Error('Internal library error - libConfig must be defined');
    }
    const configCurrentImageCarousel = libConfig.carouselImageConfig;
    if (!configCurrentImageCarousel || !configCurrentImageCarousel.description) {
      throw new Error('Description input must be a valid object implementing the Description interface');
    }
    if (!image) {
      throw new Error('Internal library error - image must be defined');
    }
    const imageWithoutDescription = !image || !image.modal || !image.modal.description || image.modal.description === '';
    switch (configCurrentImageCarousel.description.strategy) {
      case DescriptionStrategy.HIDE_IF_EMPTY:
        return imageWithoutDescription ? '' : image.modal.description + '';
      case DescriptionStrategy.ALWAYS_HIDDEN:
        return '';
      default:
        // ----------- DescriptionStrategy.ALWAYS_VISIBLE -----------------
        return this.buildTextDescription(image, imageWithoutDescription);
    }
  }
  /**
   * Method used by Hammerjs to support touch gestures (you can also invert the swipe direction with configCurrentImage.invertSwipe).
   * @param action String that represent the direction of the swipe action. 'swiperight' by default.
   */
  swipe(action = this.SWIPE_ACTION.RIGHT) {
    if (this.id === null || this.id === undefined) {
      throw new Error('Internal library error - id must be defined');
    }
    const libConfig = this.configService.getConfig(this.id);
    if (!libConfig || !libConfig.carouselImageConfig) {
      throw new Error('Internal library error - libConfig and carouselImageConfig must be defined');
    }
    const configCurrentImageCarousel = libConfig.carouselImageConfig;
    switch (action) {
      case this.SWIPE_ACTION.RIGHT:
        if (configCurrentImageCarousel.invertSwipe) {
          this.prevImage(Action.SWIPE);
        } else {
          this.nextImage(Action.SWIPE);
        }
        break;
      case this.SWIPE_ACTION.LEFT:
        if (configCurrentImageCarousel.invertSwipe) {
          this.nextImage(Action.SWIPE);
        } else {
          this.prevImage(Action.SWIPE);
        }
        break;
      // case this.SWIPE_ACTION.UP:
      //   break;
      // case this.SWIPE_ACTION.DOWN:
      //   break;
    }
  }
  /**
   * Method to go back to the previous image.
   * @param action Enum of type `Action` that represents the source
   *  action that moved back to the previous image. `Action.NORMAL` by default.
   */
  prevImage(action = Action.NORMAL) {
    // check if prevImage should be blocked
    if (this.isPreventSliding(0)) {
      return;
    }
    this.changeCurrentImage(this.getPrevImage(), action);
    this.manageSlideConfig();
    this.start$.next();
  }
  /**
   * Method to go back to the previous image.
   * @param action Enum of type `Action` that represents the source
   *  action that moved to the next image. `Action.NORMAL` by default.
   */
  nextImage(action = Action.NORMAL) {
    // check if nextImage should be blocked
    if (this.isPreventSliding(this.images.length - 1)) {
      return;
    }
    this.changeCurrentImage(this.getNextImage(), action);
    this.manageSlideConfig();
    this.start$.next();
  }
  /**
   * Method used in the template to track ids in ngFor.
   * @param number index of the array
   * @param Image item of the array
   * @returns number the id of the item
   */
  trackById(index, item) {
    return item.id;
  }
  /**
   * Method called when an image preview is clicked and used to update the current image.
   * @param event an ImageEvent object with the relative action and the index of the clicked preview.
   */
  onClickPreview(event) {
    const imageFound = this.images[event.result];
    if (!!imageFound) {
      this.manageSlideConfig();
      this.changeCurrentImage(imageFound, event.action);
    }
  }
  /**
   * Method to play carousel.
   */
  playCarousel() {
    this.start$.next();
  }
  /**
   * Stops the carousel from cycling through items.
   */
  stopCarousel() {
    this.stop$.next();
  }
  // TODO remove this because duplicated
  /**
   * Method to get `alt attribute`.
   * `alt` specifies an alternate text for an image, if the image cannot be displayed.
   * @param Image image to get its alt description. If not provided it will be the current image
   * @returns String alt description of the image (or the current image if not provided)
   */
  getAltDescriptionByImage(image = this.currentImage) {
    if (!image) {
      return '';
    }
    return image.modal && image.modal.description ? image.modal.description : `Image ${getIndex(image, this.images) + 1}`;
  }
  // TODO remove this because duplicated
  /**
   * Method to get the title attributes based on descriptions.
   * This is useful to prevent accessibility issues, because if DescriptionStrategy is ALWAYS_HIDDEN,
   * it prevents an empty string as title.
   * @param Image image to get its description. If not provided it will be the current image
   * @returns String title of the image based on descriptions
   * @throws an Error if description isn't available
   */
  getTitleToDisplay(image = this.currentImage) {
    if (this.id === null || this.id === undefined) {
      throw new Error('Internal library error - id must be defined');
    }
    const libConfig = this.configService.getConfig(this.id);
    if (!libConfig || !libConfig.carouselImageConfig) {
      throw new Error('Internal library error - libConfig and carouselImageConfig must be defined');
    }
    const configCurrentImageCarousel = libConfig.carouselImageConfig;
    if (!configCurrentImageCarousel || !configCurrentImageCarousel.description) {
      throw new Error('Description input must be a valid object implementing the Description interface');
    }
    const imageWithoutDescription = !image || !image.modal || !image.modal.description || image.modal.description === '';
    const description = this.buildTextDescription(image, imageWithoutDescription);
    return description;
  }
  /**
   * Method to reset carousel (force image with index 0 to be the current image and re-init also previews)
   */
  // temporary removed because never tested
  // reset() {
  //   if (this.configPlay && this.configPlay.autoPlay) {
  //     this.stopCarousel();
  //   }
  //   this.currentImage = this.images[0];
  //   this.handleBoundaries(0);
  //   if (this.configPlay && this.configPlay.autoPlay) {
  //     this.playCarousel();
  //   }
  //   this.ref.markForCheck();
  // }
  /**
   * Method to cleanup resources. In fact, this will stop the carousel.
   * This is an Angular's lifecycle hook that is called when this component is destroyed.
   */
  ngOnDestroy() {
    this.stopCarousel();
  }
  /**
   * Method to change the current image, receiving the new image as input the relative action.
   * @param image an Image object that represents the new image to set as current.
   * @param action Enum of type `Action` that represents the source action that triggered the change.
   */
  changeCurrentImage(image, action) {
    if (this.id === null || this.id === undefined) {
      throw new Error('Internal library error - id must be defined');
    }
    this.currentImage = image;
    const index = getIndex(image, this.images);
    // emit first/last event based on newIndex value
    this.emitBoundaryEvent(action, index);
    // emit current visible image index
    this.changeImage.emit(new ImageEvent(this.id, action, index + 1));
  }
  /**
   * Private method to get the next index.
   * This is necessary because at the end, when you call next again, you'll go to the first image.
   * That happens because all modal images are shown like in a circle.
   */
  getNextImage() {
    if (!this.currentImage) {
      throw new Error('Internal library error - currentImage must be defined');
    }
    const currentIndex = getIndex(this.currentImage, this.images);
    let newIndex = 0;
    if (currentIndex >= 0 && currentIndex < this.images.length - 1) {
      newIndex = currentIndex + 1;
    } else {
      newIndex = 0; // start from the first index
    }

    return this.images[newIndex];
  }
  /**
   * Private method to get the previous index.
   * This is necessary because at index 0, when you call prev again, you'll go to the last image.
   * That happens because all modal images are shown like in a circle.
   */
  getPrevImage() {
    if (!this.currentImage) {
      throw new Error('Internal library error - currentImage must be defined');
    }
    const currentIndex = getIndex(this.currentImage, this.images);
    let newIndex = 0;
    if (currentIndex > 0 && currentIndex <= this.images.length - 1) {
      newIndex = currentIndex - 1;
    } else {
      newIndex = this.images.length - 1; // start from the last index
    }

    return this.images[newIndex];
  }
  /**
   * Private method to build a text description.
   * This is used also to create titles.
   * @param Image image to get its description. If not provided it will be the current image.
   * @param boolean imageWithoutDescription is a boolean that it's true if the image hasn't a 'modal' description.
   * @returns String description built concatenating image fields with a specific logic.
   */
  buildTextDescription(image, imageWithoutDescription) {
    if (this.id === null || this.id === undefined) {
      throw new Error('Internal library error - id must be defined');
    }
    const libConfig = this.configService.getConfig(this.id);
    if (!libConfig || !libConfig.carouselImageConfig) {
      throw new Error('Internal library error - libConfig and carouselImageConfig must be defined');
    }
    const configCurrentImageCarousel = libConfig.carouselImageConfig;
    if (!configCurrentImageCarousel || !configCurrentImageCarousel.description) {
      throw new Error('Description input must be a valid object implementing the Description interface');
    }
    if (!image) {
      throw new Error('Internal library error - image must be defined');
    }
    // If customFullDescription use it, otherwise proceed to build a description
    if (configCurrentImageCarousel.description.customFullDescription && configCurrentImageCarousel.description.customFullDescription !== '') {
      return configCurrentImageCarousel.description.customFullDescription;
    }
    const currentIndex = getIndex(image, this.images);
    // If the current image hasn't a description,
    // prevent to write the ' - ' (or this.description.beforeTextDescription)
    const prevDescription = configCurrentImageCarousel.description.imageText ? configCurrentImageCarousel.description.imageText : '';
    const midSeparator = configCurrentImageCarousel.description.numberSeparator ? configCurrentImageCarousel.description.numberSeparator : '';
    const middleDescription = currentIndex + 1 + midSeparator + this.images.length;
    if (imageWithoutDescription) {
      return prevDescription + middleDescription;
    }
    const currImgDescription = image.modal && image.modal.description ? image.modal.description : '';
    const endDescription = configCurrentImageCarousel.description.beforeTextDescription + currImgDescription;
    return prevDescription + middleDescription + endDescription;
  }
  /**
   * Private method to update both `isFirstImage` and `isLastImage` based on
   * the index of the current image.
   * @param number currentIndex is the index of the current image
   */
  handleBoundaries(currentIndex) {
    if (this.images.length === 1) {
      this.isFirstImage = true;
      this.isLastImage = true;
      return;
    }
    switch (currentIndex) {
      case 0:
        // execute this only if infinite sliding is disabled
        this.isFirstImage = true;
        this.isLastImage = false;
        break;
      case this.images.length - 1:
        // execute this only if infinite sliding is disabled
        this.isFirstImage = false;
        this.isLastImage = true;
        break;
      default:
        this.isFirstImage = false;
        this.isLastImage = false;
        break;
    }
  }
  /**
   * Private method to manage boundary arrows and sliding.
   * This is based on the slideConfig input to enable/disable 'infinite sliding'.
   * @param number index of the visible image
   */
  manageSlideConfig() {
    if (this.id === null || this.id === undefined) {
      throw new Error('Internal library error - id must be defined');
    }
    const libConfig = this.configService.getConfig(this.id);
    if (!libConfig) {
      throw new Error('Internal library error - libConfig must be defined');
    }
    if (!this.currentImage) {
      throw new Error('Internal library error - currentImage must be defined');
    }
    let index;
    try {
      index = getIndex(this.currentImage, this.images);
    } catch (err) {
      console.error('Cannot get the current image index in current-image');
      throw err;
    }
    if (libConfig.carouselSlideInfinite === true) {
      // enable infinite sliding
      this.isFirstImage = false;
      this.isLastImage = false;
    } else {
      this.handleBoundaries(index);
    }
  }
  /**
   * Private method to emit events when either the last or the first image are visible.
   * @param action Enum of type Action that represents the source of the event that changed the
   *  current image to the first one or the last one.
   * @param indexToCheck is the index number of the image (the first or the last one).
   */
  emitBoundaryEvent(action, indexToCheck) {
    if (this.id === null || this.id === undefined) {
      return;
    }
    // to emit first/last event
    switch (indexToCheck) {
      case 0:
        this.firstImage.emit(new ImageEvent(this.id, action, true));
        break;
      case this.images.length - 1:
        this.lastImage.emit(new ImageEvent(this.id, action, true));
        break;
    }
  }
  /**
   * Private method to check if next/prev actions should be blocked.
   * It checks if carouselSlideInfinite === false and if the image index is equals to the input parameter.
   * If yes, it returns true to say that sliding should be blocked, otherwise not.
   * @param number boundaryIndex that could be either the beginning index (0) or the last index
   *  of images (this.images.length - 1).
   * @returns boolean true if carouselSlideInfinite === false and the current index is
   *  either the first or the last one.
   */
  isPreventSliding(boundaryIndex) {
    if (this.id === null || this.id === undefined) {
      throw new Error('Internal library error - id must be defined');
    }
    const libConfig = this.configService.getConfig(this.id);
    if (!libConfig) {
      throw new Error('Internal library error - libConfig must be defined');
    }
    if (!this.currentImage) {
      throw new Error('Internal library error - currentImage must be defined');
    }
    return !libConfig.carouselSlideInfinite && getIndex(this.currentImage, this.images) === boundaryIndex;
  }
}
CarouselComponent.ɵfac = function CarouselComponent_Factory(t) {
  return new (t || CarouselComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ModalGalleryService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef));
};
CarouselComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: CarouselComponent,
  selectors: [["ks-carousel"]],
  hostVars: 1,
  hostBindings: function CarouselComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function CarouselComponent_mouseenter_HostBindingHandler() {
        return ctx.onMouseEnter();
      })("mouseleave", function CarouselComponent_mouseleave_HostBindingHandler() {
        return ctx.onMouseLeave();
      })("keydown.arrowLeft", function CarouselComponent_keydown_arrowLeft_HostBindingHandler() {
        return ctx.onKeyDownLeft();
      })("keydown.arrowRight", function CarouselComponent_keydown_arrowRight_HostBindingHandler() {
        return ctx.onKeyDownLRight();
      });
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx.ariaLabel);
    }
  },
  inputs: {
    id: "id",
    images: "images",
    config: "config"
  },
  outputs: {
    clickImage: "clickImage",
    changeImage: "changeImage",
    firstImage: "firstImage",
    lastImage: "lastImage"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([ConfigService]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
  ngContentSelectors: _c8,
  decls: 5,
  vars: 9,
  consts: [["id", "carousel-container", "ksMaxSize", "", 3, "title", "maxSizeConfig"], ["content", ""], ["class", "current-figure", "ksSize", "", 3, "sizeConfig", 4, "ngIf"], [3, "id", "images", "currentImage", "clickPreview"], ["ksSize", "", 1, "current-figure", 3, "sizeConfig"], ["class", "nav-left", "role", "button", 3, "tabIndex", "click", "keyup", 4, "ngIf"], [4, "ngTemplateOutlet"], ["id", "current-image", "ksMaxSize", "", "ksFallbackImage", "", "role", "img", 3, "maxSizeConfig", "src", "fallbackImg", "title", "alt", "tabIndex", "click", "swipeleft", "swiperight"], ["class", "description", "ksDescription", "", 3, "description", "innerHTML", 4, "ngIf"], ["class", "nav-right", "role", "button", 3, "tabIndex", "click", "keyup", 4, "ngIf"], ["id", "dots"], [3, "id", "currentImage", "images", "dotsConfig", "clickDot"], ["role", "button", 1, "nav-left", 3, "tabIndex", "click", "keyup"], ["aria-hidden", "true", 3, "title"], ["ksDescription", "", 1, "description", 3, "description", "innerHTML"], ["role", "button", 1, "nav-right", 3, "tabIndex", "click", "keyup"]],
  template: function CarouselComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CarouselComponent_ng_template_1_Template, 1, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CarouselComponent_figure_3_Template, 8, 23, "figure", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ks-carousel-previews", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clickPreview", function CarouselComponent_Template_ks_carousel_previews_clickPreview_4_listener($event) {
        return ctx.onClickPreview($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx.accessibilityConfig == null ? null : ctx.accessibilityConfig.carouselContainerTitle)("maxSizeConfig", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c7, ctx.carouselConfig == null ? null : ctx.carouselConfig.maxWidth));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx.accessibilityConfig == null ? null : ctx.accessibilityConfig.carouselContainerAriaLabel);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentImage && ctx.currentImage.modal);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx.id)("images", ctx.images)("currentImage", ctx.currentImage);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgTemplateOutlet, CarouselPreviewsComponent, DotsComponent, SizeDirective, DescriptionDirective, MaxSizeDirective, FallbackImageDirective],
  styles: ["[_nghost-%COMP%]{display:flex;flex-direction:column;justify-content:flex-start;align-items:center}#carousel-container[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;justify-content:space-between;width:100%}#carousel-container[_ngcontent-%COMP%] > .current-figure[_ngcontent-%COMP%]{animation:fadein-visible .8s;text-align:center;margin:0;position:relative}#carousel-container[_ngcontent-%COMP%] > .current-figure[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%], #carousel-container[_ngcontent-%COMP%] > .current-figure[_ngcontent-%COMP%] > .nav-right[_ngcontent-%COMP%], #carousel-container[_ngcontent-%COMP%] > .current-figure[_ngcontent-%COMP%] > .nav-left[_ngcontent-%COMP%]{animation:animatezoom 1s;cursor:pointer;transition:all .5s;top:50%;position:absolute}#carousel-container[_ngcontent-%COMP%] > .current-figure[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]:hover, #carousel-container[_ngcontent-%COMP%] > .current-figure[_ngcontent-%COMP%] > .nav-right[_ngcontent-%COMP%]:hover, #carousel-container[_ngcontent-%COMP%] > .current-figure[_ngcontent-%COMP%] > .nav-left[_ngcontent-%COMP%]:hover{transform:scale(1.1)}#carousel-container[_ngcontent-%COMP%] > .current-figure[_ngcontent-%COMP%] > .nav-left[_ngcontent-%COMP%]{left:5px}#carousel-container[_ngcontent-%COMP%] > .current-figure[_ngcontent-%COMP%] > .nav-right[_ngcontent-%COMP%]{right:5px}#carousel-container[_ngcontent-%COMP%] > .current-figure[_ngcontent-%COMP%] > #current-image[_ngcontent-%COMP%]{width:100%;height:auto;display:block}#carousel-container[_ngcontent-%COMP%] > .current-figure[_ngcontent-%COMP%] > figcaption[_ngcontent-%COMP%]{padding:10px;position:absolute;bottom:0;left:0;right:0}#carousel-container[_ngcontent-%COMP%] > .current-figure[_ngcontent-%COMP%] > figcaption[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]{font-weight:700;text-align:center}#carousel-container[_ngcontent-%COMP%] > .current-figure[_ngcontent-%COMP%] > #dots[_ngcontent-%COMP%]{position:absolute;bottom:20px;width:100%}", _c9],
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CarouselComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'ks-carousel',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      providers: [ConfigService],
      template: "<main id=\"carousel-container\"\n      [attr.aria-label]=\"accessibilityConfig?.carouselContainerAriaLabel\"\n      [title]=\"accessibilityConfig?.carouselContainerTitle\"\n      ksMaxSize [maxSizeConfig]=\"{maxWidth: carouselConfig?.maxWidth,\n                               maxHeight: ''}\">\n\n\n  <!-- Workaround to support 2 ng-content in the same template in 2 ngIf (https://github.com/angular/angular/issues/22972) -->\n  <ng-template #content><ng-content></ng-content></ng-template>\n\n  <figure class=\"current-figure\" *ngIf=\"currentImage && currentImage.modal\"\n          ksSize [sizeConfig]=\"{width: carouselConfig?.maxWidth,\n                                height: ''}\">\n\n    <a class=\"nav-left\" *ngIf=\"carouselConfig?.showArrows\"\n       [attr.aria-label]=\"accessibilityConfig?.carouselPrevImageAriaLabel\"\n       [tabIndex]=\"isLastImage && !carouselSlideInfinite ? -1 : 0\" role=\"button\"\n       (click)=\"onNavigationEvent('left', $event, clickAction)\" (keyup)=\"onNavigationEvent('left', $event, keyboardAction)\">\n      <div class=\"inside {{(isFirstImage && !carouselSlideInfinite) || !carouselConfig.showArrows ? 'empty-arrow-image' : 'left-arrow-image'}}\"\n           aria-hidden=\"true\"\n           [title]=\"accessibilityConfig?.carouselPrevImageTitle\"></div>\n    </a>\n\n    <ng-container *ngTemplateOutlet=\"content\"></ng-container>\n\n    <img id=\"current-image\"\n         [style.object-fit]=\"carouselConfig?.objectFit\"\n         ksMaxSize [maxSizeConfig]=\"{maxWidth: carouselConfig?.maxWidth,\n                                  maxHeight: carouselConfig?.maxHeight}\"\n         [src]=\"currentImage.modal.img\"\n         ksFallbackImage [fallbackImg]=\"currentImage.modal.fallbackImg\"\n         [attr.aria-label]=\"currentImage.modal.ariaLabel\"\n         [title]=\"(currentImage.modal.title || currentImage.modal.title === '') ? currentImage.modal.title : getTitleToDisplay()\"\n         alt=\"{{currentImage.modal.alt ? currentImage.modal.alt : getAltDescriptionByImage()}}\"\n         [tabIndex]=\"0\" role=\"img\"\n         (click)=\"onClickCurrentImage()\"\n         (swipeleft)=\"swipe($event.type)\"\n         (swiperight)=\"swipe($event.type)\"/>\n\n    <figcaption *ngIf=\"getDescriptionToDisplay() !== ''\"\n                class=\"description\"\n                ksDescription [description]=\"carouselImageConfig?.description\"\n                [innerHTML]=\"getDescriptionToDisplay()\"></figcaption>\n\n    <a class=\"nav-right\" *ngIf=\"carouselConfig?.showArrows\"\n       [attr.aria-label]=\"accessibilityConfig?.carouselNextImageAriaLabel\"\n       [tabIndex]=\"isLastImage && !carouselSlideInfinite ? -1 : 0\" role=\"button\"\n       (click)=\"onNavigationEvent('right', $event, clickAction)\" (keyup)=\"onNavigationEvent('right', $event, keyboardAction)\">\n      <div class=\"inside {{(isLastImage && !carouselSlideInfinite) || !carouselConfig.showArrows ? 'empty-arrow-image' : 'right-arrow-image'}}\"\n           aria-hidden=\"true\"\n           [title]=\"accessibilityConfig?.carouselNextImageTitle\"></div>\n    </a>\n\n    <div id=\"dots\">\n      <ks-dots [id]=\"id\"\n               [currentImage]=\"currentImage\"\n               [images]=\"images\"\n               [dotsConfig]=\"carouselDotsConfig\"\n               (clickDot)=\"onClickDot($event)\"></ks-dots>\n    </div>\n\n  </figure>\n\n</main>\n\n<ks-carousel-previews [id]=\"id\"\n                      [images]=\"images\"\n                      [currentImage]=\"currentImage\"\n                      (clickPreview)=\"onClickPreview($event)\"></ks-carousel-previews>\n",
      styles: [":host{display:flex;flex-direction:column;justify-content:flex-start;align-items:center}#carousel-container{display:flex;flex-direction:row;align-items:center;justify-content:space-between;width:100%}#carousel-container>.current-figure{animation:fadein-visible .8s;text-align:center;margin:0;position:relative}#carousel-container>.current-figure .nav,#carousel-container>.current-figure>.nav-right,#carousel-container>.current-figure>.nav-left{animation:animatezoom 1s;cursor:pointer;transition:all .5s;top:50%;position:absolute}#carousel-container>.current-figure .nav:hover,#carousel-container>.current-figure>.nav-right:hover,#carousel-container>.current-figure>.nav-left:hover{transform:scale(1.1)}#carousel-container>.current-figure>.nav-left{left:5px}#carousel-container>.current-figure>.nav-right{right:5px}#carousel-container>.current-figure>#current-image{width:100%;height:auto;display:block}#carousel-container>.current-figure>figcaption{padding:10px;position:absolute;bottom:0;left:0;right:0}#carousel-container>.current-figure>figcaption .description{font-weight:700;text-align:center}#carousel-container>.current-figure>#dots{position:absolute;bottom:20px;width:100%}\n", ".arrow-image,.right-arrow-image,.left-arrow-image,.empty-arrow-image{width:30px;height:30px;background-size:30px}.empty-arrow-image{background:black;opacity:0}.left-arrow-image{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ3Ny4xNzUgNDc3LjE3NSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDc3LjE3NSA0NzcuMTc1OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4Ij48Zz48cGF0aCBkPSJNMTQ1LjE4OCwyMzguNTc1bDIxNS41LTIxNS41YzUuMy01LjMsNS4zLTEzLjgsMC0xOS4xcy0xMy44LTUuMy0xOS4xLDBsLTIyNS4xLDIyNS4xYy01LjMsNS4zLTUuMywxMy44LDAsMTkuMWwyMjUuMSwyMjUgICBjMi42LDIuNiw2LjEsNCw5LjUsNHM2LjktMS4zLDkuNS00YzUuMy01LjMsNS4zLTEzLjgsMC0xOS4xTDE0NS4xODgsMjM4LjU3NXoiIGZpbGw9IiNGRkZGRkYiLz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PC9zdmc+);opacity:.8;transition:all .5s}.left-arrow-image:hover{transform:scale(1.2)}.right-arrow-image{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ3Ny4xNzUgNDc3LjE3NSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDc3LjE3NSA0NzcuMTc1OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4Ij48Zz48cGF0aCBkPSJNMzYwLjczMSwyMjkuMDc1bC0yMjUuMS0yMjUuMWMtNS4zLTUuMy0xMy44LTUuMy0xOS4xLDBzLTUuMywxMy44LDAsMTkuMWwyMTUuNSwyMTUuNWwtMjE1LjUsMjE1LjUgICBjLTUuMyw1LjMtNS4zLDEzLjgsMCwxOS4xYzIuNiwyLjYsNi4xLDQsOS41LDRjMy40LDAsNi45LTEuMyw5LjUtNGwyMjUuMS0yMjUuMUMzNjUuOTMxLDI0Mi44NzUsMzY1LjkzMSwyMzQuMjc1LDM2MC43MzEsMjI5LjA3NXogICAiIGZpbGw9IiNGRkZGRkYiLz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PC9zdmc+);opacity:.8;transition:all .5s}.right-arrow-image:hover{transform:scale(1.2)}\n"]
    }]
  }], function () {
    return [{
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_ID]
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }, {
      type: ModalGalleryService
    }, {
      type: ConfigService
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }];
  }, {
    ariaLabel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['attr.aria-label']
    }],
    id: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    images: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    config: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    clickImage: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    changeImage: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    firstImage: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    lastImage: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onMouseEnter: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['mouseenter']
    }],
    onMouseLeave: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['mouseleave']
    }],
    onKeyDownLeft: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['keydown.arrowLeft']
    }],
    onKeyDownLRight: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['keydown.arrowRight']
    }]
  });
})();

/*
 The MIT License (MIT)

 Copyright (C) 2017-2022 Stefano Cappa (Ks89)

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.
 */
/**
 * Directive to change the flex-wrap css property of an element.
 */
class WrapDirective {
  constructor(renderer, el) {
    this.renderer = renderer;
    this.el = el;
  }
  /**
   * Method ´ngOnInit´ to apply the style of this directive.
   * This is an Angular's lifecycle hook, so its called automatically by Angular itself.
   * In particular, it's called only one time!!!
   */
  ngOnInit() {
    this.applyStyle();
  }
  /**
   * Method ´ngOnChanges´ to apply the style of this directive.
   * This is an Angular's lifecycle hook, so its called automatically by Angular itself.
   * In particular, it's called when any data-bound property of a directive changes!!!
   */
  ngOnChanges() {
    this.applyStyle();
  }
  /**
   * Private method to change both width and flex-wrap css properties.
   */
  applyStyle() {
    // TODO is this right???? If wrap is false I cannot apply width and flex-wrap
    if (!this.wrap) {
      return;
    }
    this.renderer.setStyle(this.el.nativeElement, 'width', this.width);
    this.renderer.setStyle(this.el.nativeElement, 'flex-wrap', this.wrap ? 'wrap' : 'nowrap');
  }
}
WrapDirective.ɵfac = function WrapDirective_Factory(t) {
  return new (t || WrapDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
};
WrapDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: WrapDirective,
  selectors: [["", "ksWrap", ""]],
  inputs: {
    wrap: "wrap",
    width: "width"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WrapDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[ksWrap]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }];
  }, {
    wrap: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    width: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();

/*
 The MIT License (MIT)

 Copyright (C) 2017-2022 Stefano Cappa (Ks89)

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.
 */
/**
 * Directive to change the flex-direction of an element, based on two inputs (`direction` and `justify`).
 */
class DirectionDirective {
  constructor(renderer, el) {
    this.renderer = renderer;
    this.el = el;
  }
  /**
   * Method ´ngOnInit´ to apply the style of this directive.
   * This is an Angular's lifecycle hook, so its called automatically by Angular itself.
   * In particular, it's called only one time!!!
   */
  ngOnInit() {
    this.applyStyle();
  }
  /**
   * Method ´ngOnChanges´ to apply the style of this directive.
   * This is an Angular's lifecycle hook, so its called automatically by Angular itself.
   * In particular, it's called when any data-bound property of a directive changes!!!
   */
  ngOnChanges() {
    this.applyStyle();
  }
  /**
   * Private method to change both direction and justify of an element.
   */
  applyStyle() {
    if (!this.direction || !this.justify) {
      return;
    }
    this.renderer.setStyle(this.el.nativeElement, 'flex-direction', this.direction);
    this.renderer.setStyle(this.el.nativeElement, 'justify-content', this.justify);
  }
}
DirectionDirective.ɵfac = function DirectionDirective_Factory(t) {
  return new (t || DirectionDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
};
DirectionDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: DirectionDirective,
  selectors: [["", "ksDirection", ""]],
  inputs: {
    direction: "direction",
    justify: "justify"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DirectionDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[ksDirection]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }];
  }, {
    direction: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    justify: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();

/*
 The MIT License (MIT)

 Copyright (C) 2017-2022 Stefano Cappa (Ks89)

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.
 */
/**
 * Directive to add an image to an `<a>` tag with some additional custom properties.
 */
class ATagBgImageDirective {
  constructor(renderer, el) {
    this.renderer = renderer;
    this.el = el;
  }
  /**
   * Method ´ngOnInit´ to apply the style of this directive.
   * This is an Angular's lifecycle hook, so its called automatically by Angular itself.
   * In particular, it's called only one time!!!
   */
  ngOnInit() {
    this.applyStyle();
  }
  /**
   * Method ´ngOnChanges´ to apply the style of this directive.
   * This is an Angular's lifecycle hook, so its called automatically by Angular itself.
   * In particular, it's called when any data-bound property of a directive changes!!!
   */
  ngOnChanges() {
    this.applyStyle();
  }
  /**
   * Private method to add an image as background of an `<a>` tag.
   */
  applyStyle() {
    if (!this.image || !this.image.plain && !this.image.modal) {
      return;
    }
    const imgPath = this.image.plain && this.image.plain.img ? this.image.plain.img : this.image.modal.img;
    let bg = `url("${imgPath}") ${this.style}`;
    const fallbackImgPath = this.image.plain && this.image.plain.fallbackImg ? this.image.plain.fallbackImg : this.image.modal.fallbackImg;
    if (!!fallbackImgPath) {
      bg += `, url("${fallbackImgPath}") ${this.style}`;
    }
    this.renderer.setStyle(this.el.nativeElement, 'background', bg);
  }
}
ATagBgImageDirective.ɵfac = function ATagBgImageDirective_Factory(t) {
  return new (t || ATagBgImageDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
};
ATagBgImageDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: ATagBgImageDirective,
  selectors: [["", "ksATagBgImage", ""]],
  inputs: {
    image: "image",
    style: "style"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ATagBgImageDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[ksATagBgImage]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }];
  }, {
    image: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    style: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();

/*
 The MIT License (MIT)

 Copyright (C) 2017-2022 Stefano Cappa (Ks89)

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.
 */
/**
 * Component with the gallery of thumbs.
 * In receives an array of Images, a boolean to show/hide
 * the gallery (feature used by imagePointer) and a config
 * object to customize the behaviour of this component.
 * Also, it emits click events as outputs.
 */
class PlainGalleryComponent extends AccessibleComponent {
  constructor(configService) {
    super();
    this.configService = configService;
    /**
     * Array of `Image` that represent the model of this library with all images, thumbs and so on.
     */
    this.images = [];
    /**
     * Output to emit an event when an image is clicked.
     */
    this.clickImage = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Bi-dimensional array of `Image` object to store images to display as plain gallery.
     * [] by default.
     */
    this.imageGrid = [];
    /**
     * Boolean passed as input to `ks-wrap` directive to configure flex-wrap css property.
     * However it's not enough, because you need to limit the width using `widthStyle` public variable.
     * For more info check https://developer.mozilla.org/it/docs/Web/CSS/flex-wrap
     */
    this.wrapStyle = false;
    /**
     * String passed as input to `ks-wrap` directive to set width to be able to force overflow.
     * In this way, `wrapStyle` (flex-wrap css property) will be used as requested.
     */
    this.widthStyle = '';
  }
  /**
   * Method ´ngOnInit´ to init both `configPlainGallery` calling `initPlainGalleryConfig()`
   * and `imageGrid invoking `initImageGrid()`.
   * This is an Angular's lifecycle hook, so its called automatically by Angular itself.
   * In particular, it's called only one time!!!
   */
  ngOnInit() {
    if (this.id === null || this.id === undefined) {
      throw new Error('Internal library error - id must be defined');
    }
    this.configService.setConfig(this.id, this.config);
    const libConfig = this.configService.getConfig(this.id);
    if (!libConfig) {
      throw new Error('Internal library error - libConfig must be defined');
    }
    this.accessibilityConfig = libConfig.accessibilityConfig;
    this.plainGalleryConfig = libConfig.plainGalleryConfig;
    this.initImageGrid();
  }
  /**
   * Method ´ngOnChanges´ to update both `imageGrid` and`plainGalleryConfig`.
   * This is an Angular's lifecycle hook, so its called automatically by Angular itself.
   * In particular, it's called when any data-bound property of a directive changes!!!
   */
  ngOnChanges(changes) {
    if (this.id === null || this.id === undefined) {
      throw new Error('Internal library error - id must be defined');
    }
    const libConfig = this.configService.getConfig(this.id);
    if (!libConfig) {
      throw new Error('Internal library error - libConfig must be defined');
    }
    const imagesChange = changes.images;
    const configChange = changes.plainGalleryConfig;
    // I'm using !change.firstChange because the first time will be called both onInit and onChange and I don't
    // want to execute initialization two times.
    if (configChange && !configChange.firstChange && (configChange.previousValue !== configChange.currentValue || !configChange.previousValue && !configChange.currentValue)) {
      this.plainGalleryConfig = libConfig.plainGalleryConfig;
      // this.configPlainGallery = this.initPlainGalleryConfig();
    }

    if (imagesChange && !imagesChange.firstChange && imagesChange.previousValue !== imagesChange.currentValue) {
      this.initImageGrid();
    }
  }
  /**
   * Method called when you click on an image of the plain (or inline) gallery.
   * This will emit the show event with the image as payload.
   * @param Image img is the Image to show
   */
  showModalGalleryByImage(img) {
    const index = this.images.findIndex(val => val && img && val.id === img.id);
    this.showModalGallery(index);
  }
  /**
   * Method called when you navigate between images.
   * This will emit the show event with the image as payload.
   * @param KeyboardEvent event that triggered the navigation
   * @param Image img is the Image to show
   */
  onNavigationEvent(event, img) {
    const result = super.handleImageEvent(event);
    if (result === NEXT) {
      this.showModalGalleryByImage(img);
    }
  }
  /**
   * Method to get `alt attribute`.
   * `alt` specifies an alternate text for an image, if the image cannot be displayed.
   * @param Image image to get its alt description.
   * @returns string alt description of the image
   */
  getAltPlainDescriptionByImage(image) {
    if (!image) {
      return '';
    }
    return image.plain && image.plain.description ? image.plain.description : `Image ${getIndex(image, this.images) + 1}`;
  }
  /**
   * Method to get the title for an image.
   * @param Image image to get its title
   * @returns string the title of the input image
   */
  getTitleDisplay(image) {
    let description = '';
    if (image.plain && image.plain.description) {
      description = image.plain.description;
    } else if (image.modal && image.modal.description) {
      description = image.modal.description;
    }
    const currentIndex = getIndex(image, this.images);
    const prevDescription = 'Image ' + (currentIndex + 1) + '/' + this.images.length;
    let currImgDescription = description ? description : '';
    if (currImgDescription !== '') {
      currImgDescription = ' - ' + currImgDescription;
    }
    return prevDescription + currImgDescription;
  }
  /**
   * Method used in the template to track ids in ngFor.
   * @param number index of the array
   * @param Image item of the array
   * @returns number the id of the item
   */
  trackById(index, item) {
    return item.id;
  }
  /**
   * Method called when you click on an image of the plain (or inline) gallery.
   * This will emit the show event with the index number as payload.
   * @param number index of the clicked image
   */
  showModalGallery(index) {
    this.clickImage.emit(index);
  }
  /**
   * Private method to init both `imageGrid` and other style variables,
   * based on the layout type.
   */
  initImageGrid() {
    if (!this.plainGalleryConfig) {
      throw new Error('Internal library error - plainGalleryConfig must be defined');
    }
    // reset the array to prevent issues in case of GridLayout
    this.imageGrid = [];
    if (this.plainGalleryConfig.layout instanceof LineLayout) {
      const layout = this.plainGalleryConfig.layout;
      const row = this.images.filter((val, i) => i < layout.breakConfig.length || layout.breakConfig.length === -1);
      this.imageGrid = [row];
      this.size = this.plainGalleryConfig.layout.size;
      switch (this.plainGalleryConfig.strategy) {
        case PlainGalleryStrategy.ROW:
          this.directionStyle = 'row';
          break;
        case PlainGalleryStrategy.COLUMN:
          this.directionStyle = 'column';
          this.wrapStyle = layout.breakConfig.wrap;
          break;
      }
      this.justifyStyle = layout.justify;
    }
    if (this.plainGalleryConfig.layout instanceof GridLayout) {
      const layout = this.plainGalleryConfig.layout;
      const count = Math.ceil(this.images.length / layout.breakConfig.length);
      let start = 0;
      let end = layout.breakConfig.length - 1;
      for (let j = 0; j < count; j++) {
        const row = this.images.filter((val, i) => i >= start && i <= end);
        this.imageGrid.push(row);
        start = end + 1;
        end = start + layout.breakConfig.length - 1;
      }
      this.size = this.plainGalleryConfig.layout.size;
      const pixels = +layout.size.width.replace('px', '');
      this.widthStyle = pixels * layout.breakConfig.length + pixels / 2 + 'px';
      this.wrapStyle = layout.breakConfig.wrap;
      this.directionStyle = 'row';
    }
  }
}
PlainGalleryComponent.ɵfac = function PlainGalleryComponent_Factory(t) {
  return new (t || PlainGalleryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ConfigService));
};
PlainGalleryComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: PlainGalleryComponent,
  selectors: [["ks-plain-gallery"]],
  inputs: {
    id: "id",
    images: "images",
    config: "config"
  },
  outputs: {
    clickImage: "clickImage"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
  decls: 2,
  vars: 7,
  consts: [["ksWrap", "", "ksDirection", "", 1, "plain-container", 3, "wrap", "width", "direction", "justify", "title"], [4, "ngFor", "ngForOf"], [4, "ngIf", "ngIfElse"], ["aTags", ""], ["ksFallbackImage", "", "class", "image", "ksSize", "", "role", "img", 3, "src", "fallbackImg", "sizeConfig", "title", "alt", "tabIndex", "click", "keyup", 4, "ngIf"], ["ksFallbackImage", "", "ksSize", "", "role", "img", 1, "image", 3, "src", "fallbackImg", "sizeConfig", "title", "alt", "tabIndex", "click", "keyup"], ["class", "a-tag-image", "ksATagBgImage", "", "ksSize", "", 3, "image", "style", "sizeConfig", "title", "tabIndex", "click", "keyup", 4, "ngIf"], ["ksATagBgImage", "", "ksSize", "", 1, "a-tag-image", 3, "image", "sizeConfig", "title", "tabIndex", "click", "keyup"]],
  template: function PlainGalleryComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PlainGalleryComponent_ng_container_1_Template, 2, 1, "ng-container", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("wrap", ctx.wrapStyle)("width", ctx.widthStyle)("direction", ctx.directionStyle)("justify", ctx.justifyStyle)("title", ctx.accessibilityConfig == null ? null : ctx.accessibilityConfig.plainGalleryContentTitle);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx.accessibilityConfig == null ? null : ctx.accessibilityConfig.plainGalleryContentAriaLabel);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.imageGrid);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, SizeDirective, WrapDirective, DirectionDirective, ATagBgImageDirective, FallbackImageDirective],
  styles: [".plain-container[_ngcontent-%COMP%]{align-items:center;display:flex}.plain-container[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]{cursor:pointer;height:auto;margin:2px;width:50px}.plain-container[_ngcontent-%COMP%]   .a-tag-image[_ngcontent-%COMP%]{cursor:pointer;margin:2px}"],
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlainGalleryComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'ks-plain-gallery',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      template: "<div class=\"plain-container\"\n     ksWrap [wrap]=\"wrapStyle\" [width]=\"widthStyle\"\n     ksDirection [direction]=\"directionStyle\" [justify]=\"justifyStyle\"\n     [attr.aria-label]=\"accessibilityConfig?.plainGalleryContentAriaLabel\"\n     [title]=\"accessibilityConfig?.plainGalleryContentTitle\">\n\n  <ng-container *ngFor=\"let imgRow of imageGrid; let i = index\">\n    <ng-container *ngFor=\"let imgCol of imgRow; let j = index\">\n\n      <ng-container *ngIf=\"!plainGalleryConfig?.advanced?.aTags; else aTags\">\n        <img *ngIf=\"imgCol?.modal?.img\"\n             [src]=\"imgCol.plain?.img! ? imgCol.plain?.img! : imgCol.modal.img\"\n             ksFallbackImage [fallbackImg]=\"imgCol.plain?.fallbackImg ? imgCol.plain?.fallbackImg : imgCol.modal.fallbackImg\"\n             class=\"image\"\n             ksSize [sizeConfig]=\"{width: size?.width!, height: size?.height!}\"\n             [attr.aria-label]=\"imgCol.plain?.ariaLabel\"\n             [title]=\"(imgCol.plain?.title || imgCol.plain?.title === '') ? imgCol.plain?.title : getTitleDisplay(imgCol)\"\n             alt=\"{{imgCol.plain?.alt! ? imgCol.plain?.alt! : getAltPlainDescriptionByImage(imgCol)}}\"\n             [tabIndex]=\"0\" role=\"img\"\n             (click)=\"showModalGalleryByImage(imgCol)\" (keyup)=\"onNavigationEvent($event, imgCol)\"/>\n      </ng-container>\n\n      <!-- Add directive to set background with the image url as param to pass thumb or img-->\n      <!-- to do something like this <a style=\"background: url('path to image') 50% 50%/cover\">.-->\n      <ng-template #aTags>\n        <a *ngIf=\"imgCol?.modal?.img\"\n           class=\"a-tag-image\"\n           ksATagBgImage [image]=\"imgCol\" [style]=\"plainGalleryConfig?.advanced?.additionalBackground\"\n           ksSize [sizeConfig]=\"{width: size?.width!, height: size?.height!}\"\n           [attr.aria-label]=\"imgCol.plain?.ariaLabel\"\n           [title]=\"(imgCol.plain?.title || imgCol.plain?.title === '') ? imgCol.plain?.title : getTitleDisplay(imgCol)\"\n           [tabIndex]=\"0\"\n           (click)=\"showModalGalleryByImage(imgCol)\" (keyup)=\"onNavigationEvent($event, imgCol)\"></a>\n      </ng-template>\n\n    </ng-container>\n  </ng-container>\n\n</div>\n\n",
      styles: [".plain-container{align-items:center;display:flex}.plain-container .image{cursor:pointer;height:auto;margin:2px;width:50px}.plain-container .a-tag-image{cursor:pointer;margin:2px}\n"]
    }]
  }], function () {
    return [{
      type: ConfigService
    }];
  }, {
    id: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    images: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    config: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    clickImage: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }]
  });
})();

/*
 The MIT License (MIT)

 Copyright (c) 2017-2022 Stefano Cappa (Ks89)

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.
 */
/**
 * Array of all components.
 */
const COMPONENTS = [PlainGalleryComponent, CarouselComponent, CarouselPreviewsComponent, UpperButtonsComponent, DotsComponent, PreviewsComponent, CurrentImageComponent, LoadingSpinnerComponent, AccessibleComponent, ModalGalleryComponent];

/*
 The MIT License (MIT)

 Copyright (C) 2017-2022 Stefano Cappa (Ks89)

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.
 */
/**
 * Directive to change margins of an element.
 */
class MarginDirective {
  constructor(renderer, el) {
    this.renderer = renderer;
    this.el = el;
  }
  /**
   * Method ´ngOnInit´ to apply the style of this directive.
   * This is an Angular's lifecycle hook, so its called automatically by Angular itself.
   * In particular, it's called only one time!!!
   */
  ngOnInit() {
    this.applyStyle();
  }
  /**
   * Method ´ngOnChanges´ to apply the style of this directive.
   * This is an Angular's lifecycle hook, so its called automatically by Angular itself.
   * In particular, it's called when any data-bound property of a directive changes!!!
   */
  ngOnChanges() {
    this.applyStyle();
  }
  /**
   * Private method to change both width and height of an element.
   */
  applyStyle() {
    if (this.marginLeft) {
      this.renderer.setStyle(this.el.nativeElement, 'margin-left', this.marginLeft);
    }
    if (this.marginRight) {
      this.renderer.setStyle(this.el.nativeElement, 'margin-right', this.marginRight);
    }
    if (this.marginTop) {
      this.renderer.setStyle(this.el.nativeElement, 'margin-top', this.marginTop);
    }
    if (this.marginBottom) {
      this.renderer.setStyle(this.el.nativeElement, 'margin-bottom', this.marginBottom);
    }
  }
}
MarginDirective.ɵfac = function MarginDirective_Factory(t) {
  return new (t || MarginDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
};
MarginDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: MarginDirective,
  selectors: [["", "ksMargin", ""]],
  inputs: {
    marginLeft: "marginLeft",
    marginRight: "marginRight",
    marginTop: "marginTop",
    marginBottom: "marginBottom"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MarginDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[ksMargin]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }];
  }, {
    marginLeft: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    marginRight: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    marginTop: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    marginBottom: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();

/*
 The MIT License (MIT)

 Copyright (C) 2017-2022 Stefano Cappa (Ks89)

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.
 */
/**
 * Array of all directives.
 */
const DIRECTIVES = [ClickOutsideDirective, SizeDirective, KeyboardNavigationDirective, WrapDirective, DirectionDirective, ATagBgImageDirective, DescriptionDirective, MarginDirective, MaxSizeDirective, FallbackImageDirective];

/*
 The MIT License (MIT)

 Copyright (C) 2017-2022 Stefano Cappa (Ks89)

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.
 */
// to prevent bad scrolling behaviour on mobile phone with carousels.
// From @mohaxspb (https://github.com/Ks89/angular-modal-gallery/pull/187)
class KsHammerGestureConfig extends _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.HammerGestureConfig {
  // tslint:disable-next-line:typedef
  buildHammer(element) {
    return new Hammer(element, {
      touchAction: 'pan-y'
    });
  }
}
KsHammerGestureConfig.ɵfac = /* @__PURE__ */function () {
  let ɵKsHammerGestureConfig_BaseFactory;
  return function KsHammerGestureConfig_Factory(t) {
    return (ɵKsHammerGestureConfig_BaseFactory || (ɵKsHammerGestureConfig_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](KsHammerGestureConfig)))(t || KsHammerGestureConfig);
  };
}();
KsHammerGestureConfig.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: KsHammerGestureConfig,
  factory: KsHammerGestureConfig.ɵfac
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](KsHammerGestureConfig, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
  }], null, null);
})();
/**
 * Module to import it in the root module of your application.
 */
class GalleryModule {}
GalleryModule.ɵfac = function GalleryModule_Factory(t) {
  return new (t || GalleryModule)();
};
GalleryModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: GalleryModule
});
GalleryModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  providers: [{
    provide: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.HAMMER_GESTURE_CONFIG,
    useClass: KsHammerGestureConfig
  }],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_10__.OverlayModule]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GalleryModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_10__.OverlayModule],
      declarations: [COMPONENTS, DIRECTIVES],
      exports: [PlainGalleryComponent, CarouselComponent],
      providers: [{
        provide: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.HAMMER_GESTURE_CONFIG,
        useClass: KsHammerGestureConfig
      }]
    }]
  }], null, null);
})();

/*
 The MIT License (MIT)

 Copyright (C) 2017-2022 Stefano Cappa (Ks89)

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.
 */

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=ks89-angular-modal-gallery.mjs.map

/***/ })

}]);
//# sourceMappingURL=src_app_admin_taller-admin_taller-admin_module_ts.js.map