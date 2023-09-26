"use strict";
(self["webpackChunkmultikart"] = self["webpackChunkmultikart"] || []).push([["src_app_admin_types-admin_types-admin_module_ts"],{

/***/ 13638:
/*!********************************************************************!*\
  !*** ./src/app/admin/types-admin/list-type/list-type.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ListTypeComponent: () => (/* binding */ ListTypeComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 72513);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 20274);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 20553);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _admin_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../admin.service */ 62048);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 76101);
/* harmony import */ var _modals_editar_type_editar_type_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modals/editar-type/editar-type.component */ 44064);







const _c0 = ["editarTypeModal"];
function ListTypeComponent_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", ctx_r0.typesCount, " ");
  }
}
function ListTypeComponent_tr_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](9, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "td")(11, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ListTypeComponent_tr_28_Template_a_click_11_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7);
      const type_r4 = restoredCtx.$implicit;
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r6.abrirModalEditarType(type_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const type_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](i_r5 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](type_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](type_r4.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("$", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](9, 4, type_r4.precio), " MXN");
  }
}
function ListTypeComponent_div_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 22)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "\u00A1No hay usuarios para mostrar!");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
const _c1 = function () {
  return {
    "=0": "No hay tipos de pulsera",
    "=1": "tipo de pulsera",
    "other": "tipos de pulseras"
  };
};
class ListTypeComponent {
  constructor(_changeDetectorRef, _adminService) {
    this._changeDetectorRef = _changeDetectorRef;
    this._adminService = _adminService;
    this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
    this.typesCount = 0;
    this.typesList = [];
    this.page = 1;
    this.limit = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.pagination_limit;
    this.typeSelected = {};
  }
  ngOnInit() {
    //Add 'implements OnInit' to the class.
    this._adminService.types$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this._unsubscribeAll)).subscribe(types => {
      // Update the selected agente
      this.typesList = types;
      this.typesCount = types.length;
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
  abrirModalEditarType(type) {
    this._adminService.setTypeSelected(type);
    this.EditarModal.openModal();
  }
}
ListTypeComponent.ɵfac = function ListTypeComponent_Factory(t) {
  return new (t || ListTypeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_admin_service__WEBPACK_IMPORTED_MODULE_1__.AdminService));
};
ListTypeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: ListTypeComponent,
  selectors: [["app-list-type"]],
  viewQuery: function ListTypeComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.EditarModal = _t.first);
    }
  },
  decls: 34,
  vars: 14,
  consts: [[1, "dashboard-right"], [1, "dashboard"], [1, "welcome-msg", "count-manillas"], [1, "nombre-msg"], [4, "ngIf"], [1, "container-fluid"], [1, "row"], [1, "col-sm-12"], [1, "card"], [1, "card-body"], ["id", "batchDelete", 1, "category-table", "custom-datatable"], [1, "table-responsive"], [1, "table", "table-striped"], ["scope", "col"], [4, "ngFor", "ngForOf"], ["class", "d-flex justify-content-center mb-4 mt-4", 4, "ngIf"], [1, "d-flex", "justify-content-center", "p-2"], [3, "collectionSize", "rotate", "maxSize", "page", "pageSize", "boundaryLinks", "pageChange"], ["editarTypeModal", ""], ["scope", "row"], ["href", "javascript:void(0)", 3, "click"], [1, "fa", "fa-pencil-square-o", "f-12"], [1, "d-flex", "justify-content-center", "mb-4", "mt-4"]],
  template: function ListTypeComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "p", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, ListTypeComponent_ng_container_4_Template, 2, 1, "ng-container", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](6, "i18nPlural");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 5)(8, "div", 6)(9, "div", 7)(10, "div", 8)(11, "div", 9)(12, "div", 10)(13, "div", 11)(14, "table", 12)(15, "thead")(16, "tr")(17, "th", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "#");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "th", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "Nombre");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "th", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "Descripcion");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "th", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "Precio");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "th", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "Acciones");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "tbody");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](28, ListTypeComponent_tr_28_Template, 14, 6, "tr", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](29, ListTypeComponent_div_29_Template, 3, 0, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "div", 16)(31, "ngb-pagination", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("pageChange", function ListTypeComponent_Template_ngb_pagination_pageChange_31_listener($event) {
        return ctx.page = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](32, "app-editar-type", null, 18);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.typesCount > 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](6, 10, ctx.typesCount, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](13, _c1)), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](23);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.typesList);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.typesCount <= 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("collectionSize", ctx.typesCount)("rotate", true)("maxSize", 5)("page", ctx.page)("pageSize", ctx.limit)("boundaryLinks", true);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbPagination, _modals_editar_type_editar_type_component__WEBPACK_IMPORTED_MODULE_2__.EditarTypeComponent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.DecimalPipe, _angular_common__WEBPACK_IMPORTED_MODULE_6__.I18nPluralPipe],
  styles: [".count-manillas[_ngcontent-%COMP%] {\n  margin-left: 12px;\n}\n\n.estado-manillas[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  padding: 11px;\n}\n\n.user-form-busqueda[_ngcontent-%COMP%]   .button-form[_ngcontent-%COMP%] {\n  height: 50px;\n  display: block;\n  padding: 0.375rem 0.75rem;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: white;\n  -webkit-appearance: none;\n  appearance: none;\n  background-color: var(--bs-body-bg);\n  background-clip: padding-box;\n  border: var(--bs-border-width) solid var(--bs-border-color);\n  border-radius: var(--bs-border-radius);\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYWRtaW4vdHlwZXMtYWRtaW4vdHlwZXMtYWRtaW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtBQUNKOztBQUdJO0VBQ0ksYUFBQTtBQUFSOztBQU1JO0VBQ0ksWUFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLHdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQ0FBQTtFQUNBLDRCQUFBO0VBQ0EsMkRBQUE7RUFDQSxzQ0FBQTtFQUNBLHdFQUFBO0FBSFIiLCJzb3VyY2VzQ29udGVudCI6WyIuY291bnQtbWFuaWxsYXN7XHJcbiAgICBtYXJnaW4tbGVmdDogMTJweDtcclxufVxyXG5cclxuLmVzdGFkby1tYW5pbGxhc3tcclxuICAgIHNlbGVjdHtcclxuICAgICAgICBwYWRkaW5nOiAxMXB4O1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuLnVzZXItZm9ybS1idXNxdWVkYXtcclxuICAgIC5idXR0b24tZm9ybXtcclxuICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgcGFkZGluZzogMC4zNzVyZW0gMC43NXJlbTtcclxuICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICAgICAgYXBwZWFyYW5jZTogbm9uZTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1icy1ib2R5LWJnKTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xyXG4gICAgICAgIGJvcmRlcjogdmFyKC0tYnMtYm9yZGVyLXdpZHRoKSBzb2xpZCB2YXIoLS1icy1ib3JkZXItY29sb3IpO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJzLWJvcmRlci1yYWRpdXMpO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjE1cyBlYXNlLWluLW91dCwgYm94LXNoYWRvdyAwLjE1cyBlYXNlLWluLW91dDtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});


/***/ }),

/***/ 44064:
/*!*******************************************************************************!*\
  !*** ./src/app/admin/types-admin/modals/editar-type/editar-type.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EditarTypeComponent: () => (/* binding */ EditarTypeComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 72513);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 20274);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 20553);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ 27889);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 76101);
/* harmony import */ var src_app_core_user_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/user/user.service */ 58212);
/* harmony import */ var src_app_admin_admin_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/admin/admin.service */ 62048);
/* harmony import */ var ng_gallery__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-gallery */ 60977);
/* harmony import */ var ng_gallery_lightbox__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-gallery/lightbox */ 23050);















const _c0 = ["modalEditarPulsera"];
function EditarTypeComponent_ng_template_0_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 20)(1, "div", 21)(2, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
}
function EditarTypeComponent_ng_template_0_span_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Guardar cambios");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function EditarTypeComponent_ng_template_0_div_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 21)(1, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
function EditarTypeComponent_ng_template_0_button_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function EditarTypeComponent_ng_template_0_button_22_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r9);
      const modal_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](modal_r2.dismiss("Cross click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Cerrar");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
const _c1 = function (a0) {
  return {
    "error-valid-input": a0
  };
};
function EditarTypeComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 2)(1, "div", 3)(2, "h5", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Editar tipo de pulsera");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function EditarTypeComponent_ng_template_0_Template_button_click_4_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r11);
      const modal_r2 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](modal_r2.dismiss("Cross click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, EditarTypeComponent_ng_template_0_div_5_Template, 4, 0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 7)(7, "div", 8)(8, "div", 9)(9, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Descripcion");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 9)(14, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "Precio");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](17, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "div", 15)(19, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function EditarTypeComponent_ng_template_0_Template_button_click_19_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r11);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r12.actualizarType());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](20, EditarTypeComponent_ng_template_0_span_20_Template, 2, 0, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](21, EditarTypeComponent_ng_template_0_div_21_Template, 3, 0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](22, EditarTypeComponent_ng_template_0_button_22_Template, 2, 0, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formControl", ctx_r1.descriptionControl)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](8, _c1, ctx_r1.descriptionControl.invalid && ctx_r1.descriptionControl.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formControl", ctx_r1.priceControl)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](10, _c1, ctx_r1.priceControl.invalid && ctx_r1.priceControl.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.acepting);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r1.acepting);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.acepting);
  }
}
class EditarTypeComponent {
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
    this.type = {};
    this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
    this.modalOpen = false;
    this.user = {};
    this.loading = true;
    this.acepting = true;
    this.limit = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.pagination_limit;
    this.descriptionControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]);
    this.priceControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.max(100000)]);
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
    this._adminService.typeSelected$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this._unsubscribeAll)).subscribe(type => {
      this.loading = true;
      this.type = type;
      this.loading = false;
      if (type?.name) {
        this.descriptionControl.setValue(type.description);
        this.priceControl.setValue(type.precio);
      }
      // console.log(this.user);
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
    this.acepting = true;
    this.modalOpen = true;
    if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_8__.isPlatformBrowser)(this.platformId)) {
      // For SSR
      this.modalService.open(this.ModalTypePulsera, {
        size: "lg",
        ariaLabelledBy: "modal-basic-title",
        centered: true,
        windowClass: "ModalTypePulsera",
        backdrop: "static",
        keyboard: false
      }).result.then(result => {
        `Result ${result}`;
      }, reason => {
        this.closeResult = `Dismissed`;
      });
    }
  }
  actualizarType() {
    this.acepting = false;
    if (this.priceControl.valid && this.descriptionControl.valid) {
      let data = {
        precio: this.priceControl.value,
        description: this.descriptionControl.value
      };
      this.updateTypePulsera(data);
    } else {
      this.acepting = true;
      this.Toast.fire({
        icon: 'error',
        title: 'Debe completar los campos con datos validos para guardar cambios'
      });
    }
  }
  updateTypePulsera(data) {
    this._adminService.updateTypePulsera(this.type._id, data).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this._unsubscribeAll)).subscribe(response => {
      this.Toast.fire({
        icon: 'success',
        title: 'Tipo de pulsera actualizada con exito.'
      });
      this.updateTypesPulseraList();
    }, error => {
      this.Toast.fire({
        icon: 'error',
        title: error.error.message
      });
    });
  }
  updateTypesPulseraList() {
    this._adminService.getTypesPulserasUpdated().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this._unsubscribeAll)).subscribe(response => {
      this._adminService.updateTypesPulserasList(response);
      this.modalService.dismissAll();
    }, error => {
      this.Toast.fire({
        icon: 'error',
        title: error.error.message
      });
    });
  }
}
EditarTypeComponent.ɵfac = function EditarTypeComponent_Factory(t) {
  return new (t || EditarTypeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_user_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_admin_admin_service__WEBPACK_IMPORTED_MODULE_3__.AdminService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ng_gallery__WEBPACK_IMPORTED_MODULE_11__.Gallery), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ng_gallery_lightbox__WEBPACK_IMPORTED_MODULE_12__.Lightbox));
};
EditarTypeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: EditarTypeComponent,
  selectors: [["app-editar-type"]],
  viewQuery: function EditarTypeComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.ModalTypePulsera = _t.first);
    }
  },
  decls: 2,
  vars: 0,
  consts: [["class", "theme-modal"], ["modalEditarPulsera", ""], [1, "modal-content", "quick-view-modal"], [1, "modal-header"], ["id", "modalSolicitarManillaTitulo", 1, "modal-title", "f-w-600"], ["type", "button", "aria-label", "Close", 1, "btn-close", 3, "click"], ["class", "d-flex justify-content-center mb-4 mt-4", 4, "ngIf"], [1, "modal-body"], [1, "row"], [1, "col-md-6", "mb-4"], ["for", "descripcion-type", 1, "form-label"], [1, "input-group"], ["type", "text", "id", "descripcion-type", "placeholder", "Descripcion", 1, "form-control", 3, "formControl", "ngClass"], ["for", "precio-type", 1, "form-label"], ["type", "number", "id", "precio-type", "placeholder", "precio", 1, "form-control", 3, "formControl", "ngClass"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-primary", 3, "click"], [4, "ngIf"], ["class", "spinner-border", "role", "status", 4, "ngIf"], ["class", "btn btn-secondary", "type", "button", "data-dismiss", "modal", 3, "click", 4, "ngIf"], [1, "d-flex", "justify-content-center", "mb-4", "mt-4"], ["role", "status", 1, "spinner-border"], [1, "visually-hidden"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-secondary", 3, "click"]],
  template: function EditarTypeComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, EditarTypeComponent_ng_template_0_Template, 23, 12, "ng-template", 0, 1, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlDirective],
  styles: [".error-valid-input[_ngcontent-%COMP%] {\n  border-color: red;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYWRtaW4vdHlwZXMtYWRtaW4vbW9kYWxzL2VkaXRhci10eXBlL2VkaXRhci10eXBlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7QUFDSiIsInNvdXJjZXNDb250ZW50IjpbIi5lcnJvci12YWxpZC1pbnB1dHtcclxuICAgIGJvcmRlci1jb2xvcjogcmVkO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ }),

/***/ 68626:
/*!************************************************************!*\
  !*** ./src/app/admin/types-admin/types-admin.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TypesAdminComponent: () => (/* binding */ TypesAdminComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 27947);


class TypesAdminComponent {
  constructor() {}
  ngOnInit() {}
}
TypesAdminComponent.ɵfac = function TypesAdminComponent_Factory(t) {
  return new (t || TypesAdminComponent)();
};
TypesAdminComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: TypesAdminComponent,
  selectors: [["app-types-admin"]],
  decls: 1,
  vars: 0,
  template: function TypesAdminComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet],
  styles: [".count-manillas[_ngcontent-%COMP%] {\n  margin-left: 12px;\n}\n\n.estado-manillas[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  padding: 11px;\n}\n\n.user-form-busqueda[_ngcontent-%COMP%]   .button-form[_ngcontent-%COMP%] {\n  height: 50px;\n  display: block;\n  padding: 0.375rem 0.75rem;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: white;\n  -webkit-appearance: none;\n  appearance: none;\n  background-color: var(--bs-body-bg);\n  background-clip: padding-box;\n  border: var(--bs-border-width) solid var(--bs-border-color);\n  border-radius: var(--bs-border-radius);\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYWRtaW4vdHlwZXMtYWRtaW4vdHlwZXMtYWRtaW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtBQUNKOztBQUdJO0VBQ0ksYUFBQTtBQUFSOztBQU1JO0VBQ0ksWUFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLHdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQ0FBQTtFQUNBLDRCQUFBO0VBQ0EsMkRBQUE7RUFDQSxzQ0FBQTtFQUNBLHdFQUFBO0FBSFIiLCJzb3VyY2VzQ29udGVudCI6WyIuY291bnQtbWFuaWxsYXN7XHJcbiAgICBtYXJnaW4tbGVmdDogMTJweDtcclxufVxyXG5cclxuLmVzdGFkby1tYW5pbGxhc3tcclxuICAgIHNlbGVjdHtcclxuICAgICAgICBwYWRkaW5nOiAxMXB4O1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuLnVzZXItZm9ybS1idXNxdWVkYXtcclxuICAgIC5idXR0b24tZm9ybXtcclxuICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgcGFkZGluZzogMC4zNzVyZW0gMC43NXJlbTtcclxuICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICAgICAgYXBwZWFyYW5jZTogbm9uZTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1icy1ib2R5LWJnKTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xyXG4gICAgICAgIGJvcmRlcjogdmFyKC0tYnMtYm9yZGVyLXdpZHRoKSBzb2xpZCB2YXIoLS1icy1ib3JkZXItY29sb3IpO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJzLWJvcmRlci1yYWRpdXMpO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjE1cyBlYXNlLWluLW91dCwgYm94LXNoYWRvdyAwLjE1cyBlYXNlLWluLW91dDtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});


/***/ }),

/***/ 7441:
/*!*********************************************************!*\
  !*** ./src/app/admin/types-admin/types-admin.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TypesAdminModule: () => (/* binding */ TypesAdminModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _types_admin_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types-admin.component */ 68626);
/* harmony import */ var _list_type_list_type_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list-type/list-type.component */ 13638);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shared.module */ 56208);
/* harmony import */ var ng_gallery__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-gallery */ 60977);
/* harmony import */ var ng_gallery_lightbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-gallery/lightbox */ 23050);
/* harmony import */ var _types_admin_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./types-admin.routing.module */ 10100);
/* harmony import */ var _modals_editar_type_editar_type_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modals/editar-type/editar-type.component */ 44064);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 61699);









class TypesAdminModule {}
TypesAdminModule.ɵfac = function TypesAdminModule_Factory(t) {
  return new (t || TypesAdminModule)();
};
TypesAdminModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
  type: TypesAdminModule
});
TypesAdminModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, _types_admin_routing_module__WEBPACK_IMPORTED_MODULE_3__.TypesAdminRoutes, ng_gallery__WEBPACK_IMPORTED_MODULE_7__.GalleryModule, ng_gallery_lightbox__WEBPACK_IMPORTED_MODULE_8__.LightboxModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](TypesAdminModule, {
    declarations: [_types_admin_component__WEBPACK_IMPORTED_MODULE_0__.TypesAdminComponent, _list_type_list_type_component__WEBPACK_IMPORTED_MODULE_1__.ListTypeComponent, _modals_editar_type_editar_type_component__WEBPACK_IMPORTED_MODULE_4__.EditarTypeComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, _types_admin_routing_module__WEBPACK_IMPORTED_MODULE_3__.TypesAdminRoutes, ng_gallery__WEBPACK_IMPORTED_MODULE_7__.GalleryModule, ng_gallery_lightbox__WEBPACK_IMPORTED_MODULE_8__.LightboxModule]
  });
})();

/***/ }),

/***/ 10100:
/*!*****************************************************************!*\
  !*** ./src/app/admin/types-admin/types-admin.routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TypesAdminRoutes: () => (/* binding */ TypesAdminRoutes)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _types_admin_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types-admin.component */ 68626);
/* harmony import */ var _list_type_list_type_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list-type/list-type.component */ 13638);
/* harmony import */ var _admin_resolver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../admin.resolver */ 92386);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 61699);






const routes = [{
  path: '',
  component: _types_admin_component__WEBPACK_IMPORTED_MODULE_0__.TypesAdminComponent,
  children: [{
    path: 'list',
    component: _list_type_list_type_component__WEBPACK_IMPORTED_MODULE_1__.ListTypeComponent,
    resolve: {
      types: _admin_resolver__WEBPACK_IMPORTED_MODULE_2__.TypesListResolver
    },
    data: {
      title: "Tipos pulsera",
      breadcrumb: "Lista"
    }
  }]
}];
class TypesAdminRoutes {}
TypesAdminRoutes.ɵfac = function TypesAdminRoutes_Factory(t) {
  return new (t || TypesAdminRoutes)();
};
TypesAdminRoutes.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: TypesAdminRoutes
});
TypesAdminRoutes.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](TypesAdminRoutes, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_admin_types-admin_types-admin_module_ts.17ce62a9e9b2466c.js.map