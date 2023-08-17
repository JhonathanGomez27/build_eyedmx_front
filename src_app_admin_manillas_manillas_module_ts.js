"use strict";
(self["webpackChunkmultikart"] = self["webpackChunkmultikart"] || []).push([["src_app_admin_manillas_manillas_module_ts"],{

/***/ 1062:
/*!***************************************************************!*\
  !*** ./src/app/admin/manillas/enviadas/enviadas.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EnviadasListComponent: () => (/* binding */ EnviadasListComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 2513);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 274);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 553);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ 7889);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../admin.service */ 2048);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 6101);
/* harmony import */ var _modal_ver_manilla_ver_manilla_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modal/ver-manilla/ver-manilla.component */ 6268);










const _c0 = ["verManillaModal"];
function EnviadasListComponent_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", ctx_r0.manillasCount, " ");
  }
}
const _c1 = function (a0, a1, a2, a3, a4) {
  return {
    "manilla-solicitado": a0,
    "manilla-entregado": a1,
    "manilla-rechazado": a2,
    "manilla-aceptado": a3,
    "manilla-enviada": a4
  };
};
function EnviadasListComponent_tr_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "th", 23)(2, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function EnviadasListComponent_tr_32_Template_input_ngModelChange_2_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7);
      const manilla_r4 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](manilla_r4.selected = $event);
    })("click", function EnviadasListComponent_tr_32_Template_input_click_2_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7);
      const manilla_r4 = restoredCtx.$implicit;
      const i_r5 = restoredCtx.index;
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r8.onSelect(manilla_r4, i_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "td", 25)(9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "td")(12, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function EnviadasListComponent_tr_32_Template_a_click_12_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7);
      const manilla_r4 = restoredCtx.$implicit;
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r9.abrirModalVerManilla(manilla_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](13, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function EnviadasListComponent_tr_32_Template_a_click_15_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7);
      const manilla_r4 = restoredCtx.$implicit;
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r10.cambiarEstadoEntregadaManilla(manilla_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](16, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const manilla_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", manilla_r4.selected);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", i_r5 + 1, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](manilla_r4.userId.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](manilla_r4.tipo);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction5"](6, _c1, manilla_r4.estado === "Solicitada", manilla_r4.estado === "Entregada", manilla_r4.estado === "Rechazada", manilla_r4.estado === "Aceptada", manilla_r4.estado === "Enviada"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](manilla_r4.estado);
  }
}
function EnviadasListComponent_div_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 30)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "\u00A1No hay pulseras para mostrar!");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
const _c2 = function () {
  return {
    "=0": "No hay pulseras",
    "=1": "pulsera",
    "other": "pulseras"
  };
};
class EnviadasListComponent {
  constructor(_changeDetectorRef, _adminService) {
    this._changeDetectorRef = _changeDetectorRef;
    this._adminService = _adminService;
    this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
    this.limit = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.pagination_limit;
    this.manillasCount = 0;
    this.manillasList = [];
    this.page = 1;
    this.selectInputControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(false);
    this.selectAll = [];
    this.seleccionadas = [];
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
    this._adminService.manillasEnviadas$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this._unsubscribeAll)).subscribe(manillas => {
      // Update the selected agente
      this.manillasList = manillas.manillas;
      this.manillasCount = manillas.totalDocuments;
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
    this.getManillasEnviadasPaginated((event - 1) * this.limit);
  }
  abrirModalVerManilla(manilla) {
    this._adminService.updateManillaSelected(manilla);
    this.VerManillaModal.openModal();
  }
  getManillasEnviadasPaginated(page) {
    this._adminService.getManillasEnviadasUpdate(page, this.limit).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this._unsubscribeAll)).subscribe(response => {
      this._adminService.updateManillasEnviadasList(response);
    }, error => {
      this.Toast.fire({
        icon: "error",
        title: error.error.message
      });
    });
  }
  onSelect(manilla, index) {
    if (!manilla.selected) {
      this.seleccionadas.push(manilla._id);
    } else {
      const isInArray = element => element === manilla._id;
      let ind = this.seleccionadas.findIndex(isInArray);
      this.seleccionadas.splice(ind, 1);
    }
    // this.seleccionadas.push(manilla._id);
  }

  selectAllManillas() {
    this.seleccionadas = [];
    this.manillasList.forEach(manilla => {
      if (!this.selectInputControl.value) {
        this.seleccionadas.push(manilla._id);
        manilla.selected = true;
        // manilla.selected = !manilla.selected;
      } else {
        manilla.selected = false;
      }
    });
  }
  cambiarEstadoEntregadasManillasSeleccionadas() {
    if (this.seleccionadas.length !== 0) {
      this.loading = true;
      this._adminService.updateEstadoManillaEntregadaVarias({
        ids: this.seleccionadas
      }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this._unsubscribeAll)).subscribe(response => {
        this.Toast.fire({
          icon: "success",
          title: "Todas las pulseras seleccionadas han sido actualizadas a entregadas."
        });
        this.getManillasEnviadasPaginated(0);
        this.selectInputControl.setValue(false);
        this.seleccionadas = [];
        this.loading = false;
      }, error => {
        this.loading = false;
        this.Toast.fire({
          icon: "error",
          title: error.error.message
        });
      });
    } else {
      this.Toast.fire({
        icon: "error",
        title: "Debes seleccionar pulseras para aceptarlas."
      });
    }
  }
  cambiarEstadoEntregadaManilla(manilla) {
    this.loading = true;
    this._adminService.updateEstadoManillaEntregada(manilla._id).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this._unsubscribeAll)).subscribe(response => {
      this.Toast.fire({
        icon: "success",
        title: "La pulsera ha sido actualizada a entregada."
      });
      this.getManillasEnviadasPaginated(0);
      this.selectInputControl.setValue(false);
      this.seleccionadas = [];
      this.loading = false;
      this._changeDetectorRef.markForCheck();
    }, error => {
      this.loading = false;
      this.Toast.fire({
        icon: "error",
        title: error.error.message
      });
      this._changeDetectorRef.markForCheck();
    });
  }
}
EnviadasListComponent.ɵfac = function EnviadasListComponent_Factory(t) {
  return new (t || EnviadasListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_admin_service__WEBPACK_IMPORTED_MODULE_2__.AdminService));
};
EnviadasListComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: EnviadasListComponent,
  selectors: [["app-enviadas-list"]],
  viewQuery: function EnviadasListComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.VerManillaModal = _t.first);
    }
  },
  decls: 38,
  vars: 17,
  consts: [[1, "dashboard-right"], [1, "dashboard"], [1, "welcome-msg", "count-manillas"], [1, "nombre-msg"], [4, "ngIf"], [1, "container-fluid"], [1, "row"], [1, "col-sm-12"], [1, "card"], [1, "card-body"], [1, "d-grid", "gap-2", "d-md-flex", "justify-content-md-end"], ["type", "button", 1, "btn", "btn-primary", 3, "disabled", "click"], ["id", "batchDelete", 1, "category-table", "custom-datatable"], [1, "table-responsive"], [1, "table", "table-striped"], ["scope", "col"], ["type", "checkbox", "name", "title_select", 3, "formControl", "click"], [4, "ngFor", "ngForOf"], ["class", "d-flex justify-content-center mb-4 mt-4", 4, "ngIf"], [1, "d-flex", "justify-content-center", "p-2"], [3, "collectionSize", "rotate", "maxSize", "page", "pageSize", "boundaryLinks", "pageChange"], [3, "tipo"], ["verManillaModal", ""], ["scope", "row"], ["type", "checkbox", "name", "title_select", 3, "ngModel", "ngModelChange", "click"], [3, "ngClass"], ["href", "javascript:void(0)", 2, "color", "#3c70f4", 3, "click"], [1, "fa", "fa-eye", "f-12"], ["href", "javascript:void(0)", 3, "click"], [1, "fa", "fa-check", "f-12"], [1, "d-flex", "justify-content-center", "mb-4", "mt-4"]],
  template: function EnviadasListComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "p", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, EnviadasListComponent_ng_container_4_Template, 2, 1, "ng-container", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](6, "i18nPlural");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 5)(8, "div", 6)(9, "div", 7)(10, "div", 8)(11, "div", 9)(12, "div", 10)(13, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function EnviadasListComponent_Template_button_click_13_listener() {
        return ctx.cambiarEstadoEntregadasManillasSeleccionadas();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "Seleccionadas Entregadas");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div", 12)(16, "div", 13)(17, "table", 14)(18, "thead")(19, "tr")(20, "th", 15)(21, "input", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function EnviadasListComponent_Template_input_click_21_listener() {
        return ctx.selectAllManillas();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, "#");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "th", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, "Usuario");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "th", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26, "Tipo");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "th", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28, "Estado");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "th", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](30, "Acciones");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "tbody");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](32, EnviadasListComponent_tr_32_Template, 18, 12, "tr", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](33, EnviadasListComponent_div_33_Template, 3, 0, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "div", 19)(35, "ngb-pagination", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("pageChange", function EnviadasListComponent_Template_ngb_pagination_pageChange_35_listener($event) {
        return ctx.onPageChange($event);
      })("pageChange", function EnviadasListComponent_Template_ngb_pagination_pageChange_35_listener($event) {
        return ctx.page = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](36, "app-ver-manilla-admin", 21, 22);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.manillasCount > 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](6, 13, ctx.manillasCount, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](16, _c2)), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx.loading);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formControl", ctx.selectInputControl);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.manillasList);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.manillasCount <= 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("collectionSize", ctx.manillasCount)("rotate", true)("maxSize", 5)("page", ctx.page)("pageSize", ctx.limit)("boundaryLinks", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("tipo", "enviadas");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlDirective, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbPagination, _modal_ver_manilla_ver_manilla_component__WEBPACK_IMPORTED_MODULE_3__.VerManillaAdminComponent, _angular_common__WEBPACK_IMPORTED_MODULE_8__.I18nPluralPipe],
  styles: [".count-manillas[_ngcontent-%COMP%] {\n  margin-left: 12px;\n}\n\n.estado-manillas[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  padding: 11px;\n}\n\n.contenedor-perfil-image[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-top: 10px;\n  width: 140px;\n  height: 140px;\n  border-radius: 50%;\n  overflow: hidden;\n}\n.contenedor-perfil-image[_ngcontent-%COMP%]   .image-perfil[_ngcontent-%COMP%] {\n  object-fit: cover;\n  width: 100%;\n  height: 100%;\n}\n.contenedor-perfil-image[_ngcontent-%COMP%]   .no-image-perfil[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  background-color: rgb(188, 188, 188);\n  color: rgb(78, 78, 78);\n  font-weight: bold;\n  font-size: 70px;\n}\n\n.manilla-aceptado[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  background: var(--theme-gradient1);\n  color: white;\n  border-radius: 20px;\n  padding: 8px 0px 8px 0px;\n}\n\n.manilla-rechazado[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  background: rgb(231, 82, 82);\n  color: white;\n  border-radius: 20px;\n  padding: 8px 0px 8px 0px;\n}\n\n.manilla-entregado[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  background: rgb(46, 160, 33);\n  color: white;\n  border-radius: 20px;\n  padding: 8px 0px 8px 0px;\n}\n\n.manilla-solicitado[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  background: var(--theme-gradient2);\n  color: white;\n  border-radius: 20px;\n  padding: 8px 0px 8px 0px;\n}\n\n.manilla-enviada[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  background: var(--theme-deafult);\n  color: white;\n  border-radius: 20px;\n  padding: 8px 0px 8px 0px;\n}\n\nselect[_ngcontent-%COMP%] {\n  padding: 11px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYWRtaW4vbWFuaWxsYXMvbWFuaWxsYXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtBQUNKOztBQUdJO0VBQ0ksYUFBQTtBQUFSOztBQUtBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFGSjtBQUlJO0VBQ0ksaUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUZSO0FBS0k7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBSFI7O0FBUUk7RUFDSSxrQ0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHdCQUFBO0FBTFI7O0FBVUk7RUFDSSw0QkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHdCQUFBO0FBUFI7O0FBWUk7RUFDSSw0QkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHdCQUFBO0FBVFI7O0FBY0k7RUFDSSxrQ0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHdCQUFBO0FBWFI7O0FBZ0JJO0VBQ0ksZ0NBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSx3QkFBQTtBQWJSOztBQWlCQTtFQUNJLGFBQUE7QUFkSiIsInNvdXJjZXNDb250ZW50IjpbIi5jb3VudC1tYW5pbGxhc3tcclxuICAgIG1hcmdpbi1sZWZ0OiAxMnB4O1xyXG59XHJcblxyXG4uZXN0YWRvLW1hbmlsbGFze1xyXG4gICAgc2VsZWN0e1xyXG4gICAgICAgIHBhZGRpbmc6IDExcHg7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG4uY29udGVuZWRvci1wZXJmaWwtaW1hZ2V7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICB3aWR0aDogMTQwcHg7XHJcbiAgICBoZWlnaHQ6IDE0MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcbiAgICAuaW1hZ2UtcGVyZmlse1xyXG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgIH1cclxuXHJcbiAgICAubm8taW1hZ2UtcGVyZmlse1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTg4LCAxODgsIDE4OCk7XHJcbiAgICAgICAgY29sb3I6IHJnYig3OCwgNzgsIDc4KTtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBmb250LXNpemU6IDcwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5tYW5pbGxhLWFjZXB0YWRve1xyXG4gICAgcHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS10aGVtZS1ncmFkaWVudDEpO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDhweCAwcHggOHB4IDBweDtcclxuICAgIH1cclxufVxyXG5cclxuLm1hbmlsbGEtcmVjaGF6YWRve1xyXG4gICAgcHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoMjMxLCA4MiwgODIpO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDhweCAwcHggOHB4IDBweDtcclxuICAgIH1cclxufVxyXG5cclxuLm1hbmlsbGEtZW50cmVnYWRve1xyXG4gICAgcHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoNDYsIDE2MCwgMzMpO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDhweCAwcHggOHB4IDBweDtcclxuICAgIH1cclxufVxyXG5cclxuLm1hbmlsbGEtc29saWNpdGFkb3tcclxuICAgIHB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tdGhlbWUtZ3JhZGllbnQyKTtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICBwYWRkaW5nOiA4cHggMHB4IDhweCAwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5tYW5pbGxhLWVudmlhZGF7XHJcbiAgICBwe1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXRoZW1lLWRlYWZ1bHQpO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDhweCAwcHggOHB4IDBweDtcclxuICAgIH1cclxufVxyXG5cclxuc2VsZWN0e1xyXG4gICAgcGFkZGluZzogMTFweDtcclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});


/***/ }),

/***/ 6846:
/*!*******************************************************!*\
  !*** ./src/app/admin/manillas/list/list.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ManillasListComponent: () => (/* binding */ ManillasListComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 2513);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 274);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ 7889);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 553);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_core_user_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/user/user.service */ 8212);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 6101);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _admin_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../admin.service */ 2048);
/* harmony import */ var _modal_ver_manilla_ver_manilla_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modal/ver-manilla/ver-manilla.component */ 6268);











const _c0 = ["verManillaModal"];
function ManillasListComponent_ng_container_4_Template(rf, ctx) {
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
function ManillasListComponent_option_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const estado_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", estado_r6.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](estado_r6.name);
  }
}
function ManillasListComponent_option_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const type_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", type_r7.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](type_r7.description);
  }
}
const _c1 = function (a0, a1, a2, a3, a4) {
  return {
    "manilla-solicitado": a0,
    "manilla-entregado": a1,
    "manilla-rechazado": a2,
    "manilla-aceptado": a3,
    "manilla-enviada": a4
  };
};
function ManillasListComponent_tr_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr")(1, "th", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "td", 30)(8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "td")(11, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ManillasListComponent_tr_41_Template_a_click_11_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r11);
      const manilla_r8 = restoredCtx.$implicit;
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r10.abrirModalVerManilla(manilla_r8));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](12, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const manilla_r8 = ctx.$implicit;
    const i_r9 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](i_r9 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](manilla_r8.userId.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](manilla_r8.tipo);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction5"](5, _c1, manilla_r8.estado === "Solicitada", manilla_r8.estado === "Entregada", manilla_r8.estado === "Rechazada", manilla_r8.estado === "Aceptada", manilla_r8.estado === "Enviada"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](manilla_r8.estado);
  }
}
function ManillasListComponent_div_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 33)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "\u00A1No hay pulseras para mostrar!");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
const _c2 = function () {
  return {
    "=0": "No hay pulseras",
    "=1": "pulsera",
    "other": "pulseras"
  };
};
class ManillasListComponent {
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
    this.limit = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.pagination_limit;
    this.estados = [];
    this.types = [];
    this.searchEstadoControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('');
    this.searchTipoControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('');
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
    this._adminService.manillasList$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this._unsubscribeAll)).subscribe(manillas => {
      // Update the selected agente
      this.manillasList = manillas.manillas;
      this.manillasCount = manillas.totalDocuments;
      // Mark for check
      this._changeDetectorRef.markForCheck();
    });
    this._adminService.manillasEstados$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this._unsubscribeAll)).subscribe(estados => {
      // Update the selected agente
      this.estados = estados;
      // Mark for check
      this._changeDetectorRef.markForCheck();
    });
    this._adminService.userTypes$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this._unsubscribeAll)).subscribe(types => {
      // Update the selected agente
      this.types = types;
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
    let estado = this.searchEstadoControl.value;
    let tipo = this.searchTipoControl.value;
    if (estado === '') {
      estado = null;
    }
    if (tipo === '') {
      tipo = null;
    }
    this.getManillasLisFiltered((event - 1) * this.limit, tipo, estado);
  }
  abrirModalVerManilla(manilla) {
    this._adminService.updateManillaSelected(manilla);
    this.VerManillaModal.openModal();
  }
  handleChange(event) {
    let estado = this.searchEstadoControl.value;
    let tipo = this.searchTipoControl.value;
    if (estado === '') {
      estado = null;
    }
    if (tipo === '') {
      tipo = null;
    }
    this.getManillasLisFiltered(0, tipo, estado);
  }
  getManillasLisFiltered(page, tipo, estado) {
    this._adminService.getManillasListUpdate(page, this.limit, tipo, estado).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this._unsubscribeAll)).subscribe(response => {
      this._adminService.updateManillasList(response);
    }, error => {
      this.Toast.fire({
        icon: 'error',
        title: error.error.message
      });
    });
  }
}
ManillasListComponent.ɵfac = function ManillasListComponent_Factory(t) {
  return new (t || ManillasListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_user_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_10__.ViewportScroller), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_admin_service__WEBPACK_IMPORTED_MODULE_3__.AdminService));
};
ManillasListComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: ManillasListComponent,
  selectors: [["app-manillas-list"]],
  viewQuery: function ManillasListComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.VerManillaModal = _t.first);
    }
  },
  decls: 47,
  vars: 19,
  consts: [[1, "dashboard-right"], [1, "dashboard"], [1, "welcome-msg", "count-manillas"], [1, "nombre-msg"], [4, "ngIf"], [1, "container-fluid"], [1, "row"], [1, "col-sm-12"], [1, "card"], [1, "card-body"], [1, "row", "estado-manillas"], [1, "col-md-6", "mb-4"], ["for", "estado", 1, "mb-2"], ["id", "estado", "aria-label", "Seleccionar estado de manilla", 1, "form-select", 3, "formControl", "change"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["for", "tipo", 1, "mb-2"], ["id", "tipo", "aria-label", "Seleccionar tipo de manilla", 1, "form-select", 3, "formControl", "change"], ["id", "batchDelete", 1, "category-table", "custom-datatable"], [1, "table-responsive"], [1, "table", "table-striped"], ["scope", "col"], [4, "ngFor", "ngForOf"], ["class", "d-flex justify-content-center mb-4 mt-4", 4, "ngIf"], [1, "d-flex", "justify-content-center", "p-2"], [3, "collectionSize", "rotate", "maxSize", "page", "pageSize", "boundaryLinks", "pageChange"], [3, "tipo"], ["verManillaModal", ""], [3, "value"], ["scope", "row"], [3, "ngClass"], ["href", "javascript:void(0)", 3, "click"], [1, "fa", "fa-eye", "f-12"], [1, "d-flex", "justify-content-center", "mb-4", "mt-4"]],
  template: function ManillasListComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "p", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, ManillasListComponent_ng_container_4_Template, 2, 1, "ng-container", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](6, "i18nPlural");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 5)(8, "div", 6)(9, "div", 7)(10, "div", 8)(11, "div", 9)(12, "div", 10)(13, "div", 11)(14, "label", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, "Seleccionar estado");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "select", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function ManillasListComponent_Template_select_change_16_listener($event) {
        return ctx.handleChange($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](17, "option", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](18, ManillasListComponent_option_18_Template, 2, 2, "option", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "div", 11)(20, "label", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21, "Seleccionar tipo");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "select", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function ManillasListComponent_Template_select_change_22_listener($event) {
        return ctx.handleChange($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](23, "option", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](24, ManillasListComponent_option_24_Template, 2, 2, "option", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "div", 18)(26, "div", 19)(27, "table", 20)(28, "thead")(29, "tr")(30, "th", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](31, "#");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "th", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](33, "Usuario");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "th", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](35, "Tipo");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "th", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](37, "Estado");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "th", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](39, "Acciones");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "tbody");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](41, ManillasListComponent_tr_41_Template, 14, 11, "tr", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](42, ManillasListComponent_div_42_Template, 3, 0, "div", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "div", 24)(44, "ngb-pagination", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("pageChange", function ManillasListComponent_Template_ngb_pagination_pageChange_44_listener($event) {
        return ctx.onPageChange($event);
      })("pageChange", function ManillasListComponent_Template_ngb_pagination_pageChange_44_listener($event) {
        return ctx.page = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](45, "app-ver-manilla-admin", 26, 27);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.manillasCount > 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](6, 15, ctx.manillasCount, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](18, _c2)), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formControl", ctx.searchEstadoControl);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.estados);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formControl", ctx.searchTipoControl);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.types);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](17);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.manillasList);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.manillasCount <= 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("collectionSize", ctx.manillasCount)("rotate", true)("maxSize", 5)("page", ctx.page)("pageSize", ctx.limit)("boundaryLinks", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("tipo", "list");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlDirective, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbPagination, _modal_ver_manilla_ver_manilla_component__WEBPACK_IMPORTED_MODULE_4__.VerManillaAdminComponent, _angular_common__WEBPACK_IMPORTED_MODULE_10__.I18nPluralPipe],
  styles: [".count-manillas[_ngcontent-%COMP%] {\n  margin-left: 12px;\n}\n\n.estado-manillas[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  padding: 11px;\n}\n\n.contenedor-perfil-image[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-top: 10px;\n  width: 140px;\n  height: 140px;\n  border-radius: 50%;\n  overflow: hidden;\n}\n.contenedor-perfil-image[_ngcontent-%COMP%]   .image-perfil[_ngcontent-%COMP%] {\n  object-fit: cover;\n  width: 100%;\n  height: 100%;\n}\n.contenedor-perfil-image[_ngcontent-%COMP%]   .no-image-perfil[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  background-color: rgb(188, 188, 188);\n  color: rgb(78, 78, 78);\n  font-weight: bold;\n  font-size: 70px;\n}\n\n.manilla-aceptado[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  background: var(--theme-gradient1);\n  color: white;\n  border-radius: 20px;\n  padding: 8px 0px 8px 0px;\n}\n\n.manilla-rechazado[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  background: rgb(231, 82, 82);\n  color: white;\n  border-radius: 20px;\n  padding: 8px 0px 8px 0px;\n}\n\n.manilla-entregado[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  background: rgb(46, 160, 33);\n  color: white;\n  border-radius: 20px;\n  padding: 8px 0px 8px 0px;\n}\n\n.manilla-solicitado[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  background: var(--theme-gradient2);\n  color: white;\n  border-radius: 20px;\n  padding: 8px 0px 8px 0px;\n}\n\n.manilla-enviada[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  background: var(--theme-deafult);\n  color: white;\n  border-radius: 20px;\n  padding: 8px 0px 8px 0px;\n}\n\nselect[_ngcontent-%COMP%] {\n  padding: 11px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYWRtaW4vbWFuaWxsYXMvbWFuaWxsYXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtBQUNKOztBQUdJO0VBQ0ksYUFBQTtBQUFSOztBQUtBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFGSjtBQUlJO0VBQ0ksaUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUZSO0FBS0k7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBSFI7O0FBUUk7RUFDSSxrQ0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHdCQUFBO0FBTFI7O0FBVUk7RUFDSSw0QkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHdCQUFBO0FBUFI7O0FBWUk7RUFDSSw0QkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHdCQUFBO0FBVFI7O0FBY0k7RUFDSSxrQ0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHdCQUFBO0FBWFI7O0FBZ0JJO0VBQ0ksZ0NBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSx3QkFBQTtBQWJSOztBQWlCQTtFQUNJLGFBQUE7QUFkSiIsInNvdXJjZXNDb250ZW50IjpbIi5jb3VudC1tYW5pbGxhc3tcclxuICAgIG1hcmdpbi1sZWZ0OiAxMnB4O1xyXG59XHJcblxyXG4uZXN0YWRvLW1hbmlsbGFze1xyXG4gICAgc2VsZWN0e1xyXG4gICAgICAgIHBhZGRpbmc6IDExcHg7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG4uY29udGVuZWRvci1wZXJmaWwtaW1hZ2V7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICB3aWR0aDogMTQwcHg7XHJcbiAgICBoZWlnaHQ6IDE0MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcbiAgICAuaW1hZ2UtcGVyZmlse1xyXG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgIH1cclxuXHJcbiAgICAubm8taW1hZ2UtcGVyZmlse1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTg4LCAxODgsIDE4OCk7XHJcbiAgICAgICAgY29sb3I6IHJnYig3OCwgNzgsIDc4KTtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBmb250LXNpemU6IDcwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5tYW5pbGxhLWFjZXB0YWRve1xyXG4gICAgcHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS10aGVtZS1ncmFkaWVudDEpO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDhweCAwcHggOHB4IDBweDtcclxuICAgIH1cclxufVxyXG5cclxuLm1hbmlsbGEtcmVjaGF6YWRve1xyXG4gICAgcHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoMjMxLCA4MiwgODIpO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDhweCAwcHggOHB4IDBweDtcclxuICAgIH1cclxufVxyXG5cclxuLm1hbmlsbGEtZW50cmVnYWRve1xyXG4gICAgcHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoNDYsIDE2MCwgMzMpO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDhweCAwcHggOHB4IDBweDtcclxuICAgIH1cclxufVxyXG5cclxuLm1hbmlsbGEtc29saWNpdGFkb3tcclxuICAgIHB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tdGhlbWUtZ3JhZGllbnQyKTtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICBwYWRkaW5nOiA4cHggMHB4IDhweCAwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5tYW5pbGxhLWVudmlhZGF7XHJcbiAgICBwe1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXRoZW1lLWRlYWZ1bHQpO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDhweCAwcHggOHB4IDBweDtcclxuICAgIH1cclxufVxyXG5cclxuc2VsZWN0e1xyXG4gICAgcGFkZGluZzogMTFweDtcclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});


/***/ }),

/***/ 4093:
/*!***********************************************************!*\
  !*** ./src/app/admin/manillas/manillas-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ManillasRoutingModule: () => (/* binding */ ManillasRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _manillas_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./manillas.component */ 5553);
/* harmony import */ var _admin_resolver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../admin.resolver */ 2386);
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list/list.component */ 6846);
/* harmony import */ var _production_production_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./production/production.component */ 7886);
/* harmony import */ var _solicitudes_solicitudes_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./solicitudes/solicitudes.component */ 2949);
/* harmony import */ var _enviadas_enviadas_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./enviadas/enviadas.component */ 1062);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 1699);









const routes = [{
  path: '',
  component: _manillas_component__WEBPACK_IMPORTED_MODULE_0__.ManillasComponent,
  children: [{
    path: 'list',
    component: _list_list_component__WEBPACK_IMPORTED_MODULE_2__.ManillasListComponent,
    resolve: {
      estados: _admin_resolver__WEBPACK_IMPORTED_MODULE_1__.AdminManillasEstadosResolver,
      types: _admin_resolver__WEBPACK_IMPORTED_MODULE_1__.AdminTypesResolver,
      manillas: _admin_resolver__WEBPACK_IMPORTED_MODULE_1__.AdminManillasListResolver
    },
    data: {
      title: "Pulseras",
      breadcrumb: "Lista"
    }
  }, {
    path: 'produccion',
    component: _production_production_component__WEBPACK_IMPORTED_MODULE_3__.ProductionListComponent,
    resolve: {
      manillas: _admin_resolver__WEBPACK_IMPORTED_MODULE_1__.AdminManillasProduccionResolver
    },
    data: {
      title: "Pulseras",
      breadcrumb: "Produccion"
    }
  }, {
    path: 'solicitudes',
    component: _solicitudes_solicitudes_component__WEBPACK_IMPORTED_MODULE_4__.SolicitudesListComponent,
    resolve: {
      manillas: _admin_resolver__WEBPACK_IMPORTED_MODULE_1__.AdminManillasSolicitudesResolver
    },
    data: {
      title: "Pulseras",
      breadcrumb: "Solicitudes"
    }
  }, {
    path: 'enviadas',
    component: _enviadas_enviadas_component__WEBPACK_IMPORTED_MODULE_5__.EnviadasListComponent,
    resolve: {
      manillas: _admin_resolver__WEBPACK_IMPORTED_MODULE_1__.AdminManillasEnviadasResolver
    },
    data: {
      title: "Pulseras",
      breadcrumb: "Enviadas"
    }
  }],
  data: {
    title: "Pulseras",
    breadcrumb: "Pulseras"
  }
  // resolve: {
  //   manillas: AdminManillasResolver
  // }
}];

class ManillasRoutingModule {}
ManillasRoutingModule.ɵfac = function ManillasRoutingModule_Factory(t) {
  return new (t || ManillasRoutingModule)();
};
ManillasRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
  type: ManillasRoutingModule
});
ManillasRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](ManillasRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule]
  });
})();

/***/ }),

/***/ 5553:
/*!******************************************************!*\
  !*** ./src/app/admin/manillas/manillas.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ManillasComponent: () => (/* binding */ ManillasComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 7947);


class ManillasComponent {
  constructor() {}
}
ManillasComponent.ɵfac = function ManillasComponent_Factory(t) {
  return new (t || ManillasComponent)();
};
ManillasComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: ManillasComponent,
  selectors: [["app-manillas"]],
  decls: 1,
  vars: 0,
  template: function ManillasComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet],
  styles: [".count-manillas[_ngcontent-%COMP%] {\n  margin-left: 12px;\n}\n\n.estado-manillas[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  padding: 11px;\n}\n\n.contenedor-perfil-image[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-top: 10px;\n  width: 140px;\n  height: 140px;\n  border-radius: 50%;\n  overflow: hidden;\n}\n.contenedor-perfil-image[_ngcontent-%COMP%]   .image-perfil[_ngcontent-%COMP%] {\n  object-fit: cover;\n  width: 100%;\n  height: 100%;\n}\n.contenedor-perfil-image[_ngcontent-%COMP%]   .no-image-perfil[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  background-color: rgb(188, 188, 188);\n  color: rgb(78, 78, 78);\n  font-weight: bold;\n  font-size: 70px;\n}\n\n.manilla-aceptado[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  background: var(--theme-gradient1);\n  color: white;\n  border-radius: 20px;\n  padding: 8px 0px 8px 0px;\n}\n\n.manilla-rechazado[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  background: rgb(231, 82, 82);\n  color: white;\n  border-radius: 20px;\n  padding: 8px 0px 8px 0px;\n}\n\n.manilla-entregado[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  background: rgb(46, 160, 33);\n  color: white;\n  border-radius: 20px;\n  padding: 8px 0px 8px 0px;\n}\n\n.manilla-solicitado[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  background: var(--theme-gradient2);\n  color: white;\n  border-radius: 20px;\n  padding: 8px 0px 8px 0px;\n}\n\n.manilla-enviada[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  background: var(--theme-deafult);\n  color: white;\n  border-radius: 20px;\n  padding: 8px 0px 8px 0px;\n}\n\nselect[_ngcontent-%COMP%] {\n  padding: 11px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYWRtaW4vbWFuaWxsYXMvbWFuaWxsYXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtBQUNKOztBQUdJO0VBQ0ksYUFBQTtBQUFSOztBQUtBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFGSjtBQUlJO0VBQ0ksaUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUZSO0FBS0k7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBSFI7O0FBUUk7RUFDSSxrQ0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHdCQUFBO0FBTFI7O0FBVUk7RUFDSSw0QkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHdCQUFBO0FBUFI7O0FBWUk7RUFDSSw0QkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHdCQUFBO0FBVFI7O0FBY0k7RUFDSSxrQ0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHdCQUFBO0FBWFI7O0FBZ0JJO0VBQ0ksZ0NBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSx3QkFBQTtBQWJSOztBQWlCQTtFQUNJLGFBQUE7QUFkSiIsInNvdXJjZXNDb250ZW50IjpbIi5jb3VudC1tYW5pbGxhc3tcclxuICAgIG1hcmdpbi1sZWZ0OiAxMnB4O1xyXG59XHJcblxyXG4uZXN0YWRvLW1hbmlsbGFze1xyXG4gICAgc2VsZWN0e1xyXG4gICAgICAgIHBhZGRpbmc6IDExcHg7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG4uY29udGVuZWRvci1wZXJmaWwtaW1hZ2V7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICB3aWR0aDogMTQwcHg7XHJcbiAgICBoZWlnaHQ6IDE0MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcbiAgICAuaW1hZ2UtcGVyZmlse1xyXG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgIH1cclxuXHJcbiAgICAubm8taW1hZ2UtcGVyZmlse1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTg4LCAxODgsIDE4OCk7XHJcbiAgICAgICAgY29sb3I6IHJnYig3OCwgNzgsIDc4KTtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBmb250LXNpemU6IDcwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5tYW5pbGxhLWFjZXB0YWRve1xyXG4gICAgcHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS10aGVtZS1ncmFkaWVudDEpO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDhweCAwcHggOHB4IDBweDtcclxuICAgIH1cclxufVxyXG5cclxuLm1hbmlsbGEtcmVjaGF6YWRve1xyXG4gICAgcHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoMjMxLCA4MiwgODIpO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDhweCAwcHggOHB4IDBweDtcclxuICAgIH1cclxufVxyXG5cclxuLm1hbmlsbGEtZW50cmVnYWRve1xyXG4gICAgcHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoNDYsIDE2MCwgMzMpO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDhweCAwcHggOHB4IDBweDtcclxuICAgIH1cclxufVxyXG5cclxuLm1hbmlsbGEtc29saWNpdGFkb3tcclxuICAgIHB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tdGhlbWUtZ3JhZGllbnQyKTtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICBwYWRkaW5nOiA4cHggMHB4IDhweCAwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5tYW5pbGxhLWVudmlhZGF7XHJcbiAgICBwe1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXRoZW1lLWRlYWZ1bHQpO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDhweCAwcHggOHB4IDBweDtcclxuICAgIH1cclxufVxyXG5cclxuc2VsZWN0e1xyXG4gICAgcGFkZGluZzogMTFweDtcclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});


/***/ }),

/***/ 564:
/*!***************************************************!*\
  !*** ./src/app/admin/manillas/manillas.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ManillasModule: () => (/* binding */ ManillasModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _manillas_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./manillas.component */ 5553);
/* harmony import */ var _manillas_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./manillas-routing.module */ 4093);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shared.module */ 6208);
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list/list.component */ 6846);
/* harmony import */ var _solicitudes_solicitudes_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./solicitudes/solicitudes.component */ 2949);
/* harmony import */ var _production_production_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./production/production.component */ 7886);
/* harmony import */ var _modal_ver_manilla_ver_manilla_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modal/ver-manilla/ver-manilla.component */ 6268);
/* harmony import */ var ng_gallery_lightbox__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-gallery/lightbox */ 3050);
/* harmony import */ var ng_gallery__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-gallery */ 977);
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-mask */ 7728);
/* harmony import */ var _enviadas_enviadas_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./enviadas/enviadas.component */ 1062);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 1699);













class ManillasModule {}
ManillasModule.ɵfac = function ManillasModule_Factory(t) {
  return new (t || ManillasModule)();
};
ManillasModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
  type: ManillasModule
});
ManillasModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
  providers: [(0,ngx_mask__WEBPACK_IMPORTED_MODULE_9__.provideNgxMask)()],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _manillas_routing_module__WEBPACK_IMPORTED_MODULE_1__.ManillasRoutingModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, ng_gallery__WEBPACK_IMPORTED_MODULE_11__.GalleryModule, ng_gallery_lightbox__WEBPACK_IMPORTED_MODULE_12__.LightboxModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](ManillasModule, {
    declarations: [_manillas_component__WEBPACK_IMPORTED_MODULE_0__.ManillasComponent, _list_list_component__WEBPACK_IMPORTED_MODULE_3__.ManillasListComponent, _solicitudes_solicitudes_component__WEBPACK_IMPORTED_MODULE_4__.SolicitudesListComponent, _production_production_component__WEBPACK_IMPORTED_MODULE_5__.ProductionListComponent, _modal_ver_manilla_ver_manilla_component__WEBPACK_IMPORTED_MODULE_6__.VerManillaAdminComponent, _enviadas_enviadas_component__WEBPACK_IMPORTED_MODULE_7__.EnviadasListComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _manillas_routing_module__WEBPACK_IMPORTED_MODULE_1__.ManillasRoutingModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, ng_gallery__WEBPACK_IMPORTED_MODULE_11__.GalleryModule, ng_gallery_lightbox__WEBPACK_IMPORTED_MODULE_12__.LightboxModule, ngx_mask__WEBPACK_IMPORTED_MODULE_9__.NgxMaskDirective, ngx_mask__WEBPACK_IMPORTED_MODULE_9__.NgxMaskPipe]
  });
})();

/***/ }),

/***/ 6268:
/*!***************************************************************************!*\
  !*** ./src/app/admin/manillas/modal/ver-manilla/ver-manilla.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VerManillaAdminComponent: () => (/* binding */ VerManillaAdminComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 6101);
/* harmony import */ var ng_gallery__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-gallery */ 977);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 2513);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 274);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 553);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ 7889);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var src_app_core_user_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/user/user.service */ 8212);
/* harmony import */ var src_app_admin_admin_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/admin/admin.service */ 2048);
/* harmony import */ var ng_gallery_lightbox__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-gallery/lightbox */ 3050);
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-mask */ 7728);

















const _c0 = ["modalManilla"];
function VerManillaAdminComponent_ng_template_0_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 13)(1, "div", 14)(2, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
}
function VerManillaAdminComponent_ng_template_0_div_7_img_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "img", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function VerManillaAdminComponent_ng_template_0_div_7_img_6_Template_img_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r17);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r16.lightbox.open(0));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", ctx_r9.manilla.foto_portador, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
  }
}
function VerManillaAdminComponent_ng_template_0_div_7_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", (ctx_r10.manilla == null ? null : ctx_r10.manilla.nombre_portador == null ? null : ctx_r10.manilla.nombre_portador.charAt(0)) || (ctx_r10.manilla == null ? null : ctx_r10.manilla.userId == null ? null : ctx_r10.manilla.userId.name == null ? null : ctx_r10.manilla.userId.name.charAt(0)), " ");
  }
}
function VerManillaAdminComponent_ng_template_0_div_7_ng_container_9_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 33)(1, "div", 34)(2, "div", 35)(3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](5, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 36)(7, "h6", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const field_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](5, 2, field_r18.description));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r19.manilla[field_r18.name]);
  }
}
function VerManillaAdminComponent_ng_template_0_div_7_ng_container_9_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 33)(1, "div", 34)(2, "div", 35)(3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](5, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 36)(7, "h6", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](9, "mask");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const field_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](5, 2, field_r18.description));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("(+57) ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](9, 4, ctx_r20.manilla[field_r18.name], "000-000-0000"), "");
  }
}
function VerManillaAdminComponent_ng_template_0_div_7_ng_container_9_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 33)(1, "div", 34)(2, "div", 35)(3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](5, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 36)(7, "h6", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](9, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const field_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](5, 2, field_r18.description));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](9, 4, ctx_r21.manilla[field_r18.name], "dd/MM/yyyy"));
  }
}
function VerManillaAdminComponent_ng_template_0_div_7_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, VerManillaAdminComponent_ng_template_0_div_7_ng_container_9_div_1_Template, 9, 4, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, VerManillaAdminComponent_ng_template_0_div_7_ng_container_9_div_2_Template, 10, 7, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, VerManillaAdminComponent_ng_template_0_div_7_ng_container_9_div_3_Template, 10, 7, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const field_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", field_r18.type !== "telefono" && field_r18.type !== "file" && field_r18.type !== "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", field_r18.type === "telefono");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", field_r18.type === "Date");
  }
}
function VerManillaAdminComponent_ng_template_0_div_7_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 33)(1, "div", 34)(2, "div", 35)(3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Codigo QR");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 36)(6, "h6", 37)(7, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Codigo");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("href", ctx_r12.manilla.qrCode, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
  }
}
function VerManillaAdminComponent_ng_template_0_div_7_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Documentos pulsera");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function VerManillaAdminComponent_ng_template_0_div_7_ng_template_14_ng_container_1_li_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li", 42)(1, "a", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "i", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const field_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("href", ctx_r27.manilla[field_r26.name], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", field_r26.description, "");
  }
}
function VerManillaAdminComponent_ng_template_0_div_7_ng_template_14_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, VerManillaAdminComponent_ng_template_0_div_7_ng_template_14_ng_container_1_li_1_Template, 4, 2, "li", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const field_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", field_r26.type === "file");
  }
}
function VerManillaAdminComponent_ng_template_0_div_7_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ul", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, VerManillaAdminComponent_ng_template_0_div_7_ng_template_14_ng_container_1_Template, 2, 1, "ng-container", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r14.fieldsList);
  }
}
function VerManillaAdminComponent_ng_template_0_div_7_div_15_ng_container_19_i_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "i", 56);
  }
}
function VerManillaAdminComponent_ng_template_0_div_7_div_15_ng_container_19_i_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "i", 57);
  }
}
function VerManillaAdminComponent_ng_template_0_div_7_div_15_ng_container_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "tr")(2, "th", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](8, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "td")(10, "a", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function VerManillaAdminComponent_ng_template_0_div_7_div_15_ng_container_19_Template_a_click_10_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r35);
      const i_r31 = restoredCtx.index;
      const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r34.cambiarEstado(i_r31));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, VerManillaAdminComponent_ng_template_0_div_7_div_15_ng_container_19_i_11_Template, 1, 0, "i", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, VerManillaAdminComponent_ng_template_0_div_7_div_15_ng_container_19_i_12_Template, 1, 0, "i", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "tr", 54)(14, "td", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const entrada_r30 = ctx.$implicit;
    const i_r31 = ctx.index;
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](i_r31 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](entrada_r30.taller.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](8, 9, entrada_r30.updatedAt, "dd/MM/yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate1"]("href", "#collapse", i_r31, "", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattributeInterpolate1"]("aria-controls", "collapse", i_r31, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r29.showIcons["campo" + i_r31]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r29.showIcons["campo" + i_r31]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate1"]("id", "collapse", i_r31, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](entrada_r30.observaciones);
  }
}
function VerManillaAdminComponent_ng_template_0_div_7_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 45)(1, "div", 34)(2, "div", 35)(3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Entradas");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 46)(6, "div", 47)(7, "table", 48)(8, "thead")(9, "tr")(10, "th", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "th", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "Taller");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "th", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "Fecha");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "th", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](19, VerManillaAdminComponent_ng_template_0_div_7_div_15_ng_container_19_Template, 16, 12, "ng-container", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r15.manilla == null ? null : ctx_r15.manilla.entradas);
  }
}
function VerManillaAdminComponent_ng_template_0_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 16)(1, "div", 17)(2, "div", 18)(3, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, VerManillaAdminComponent_ng_template_0_div_7_img_6_Template, 1, 1, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, VerManillaAdminComponent_ng_template_0_div_7_div_7_Template, 2, 1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, VerManillaAdminComponent_ng_template_0_div_7_ng_container_9_Template, 4, 3, "ng-container", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, VerManillaAdminComponent_ng_template_0_div_7_div_10_Template, 9, 1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "ngb-accordion", 26)(12, "ngb-panel", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](13, VerManillaAdminComponent_ng_template_0_div_7_ng_template_13_Template, 2, 0, "ng-template", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, VerManillaAdminComponent_ng_template_0_div_7_ng_template_14_Template, 2, 1, "ng-template", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](15, VerManillaAdminComponent_ng_template_0_div_7_div_15_Template, 20, 1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r4.manilla.foto_portador);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r4.manilla.foto_portador);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r4.fieldsList);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r4.manilla.qrCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("closeOthers", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (ctx_r4.manilla == null ? null : ctx_r4.manilla.entradas == null ? null : ctx_r4.manilla.entradas.length) > 0);
  }
}
function VerManillaAdminComponent_ng_template_0_button_9_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Aceptar");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function VerManillaAdminComponent_ng_template_0_button_9_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 14)(1, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
function VerManillaAdminComponent_ng_template_0_button_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function VerManillaAdminComponent_ng_template_0_button_9_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r39);
      const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r38.aceptarManillasById());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, VerManillaAdminComponent_ng_template_0_button_9_span_1_Template, 2, 0, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, VerManillaAdminComponent_ng_template_0_button_9_div_2_Template, 3, 0, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r5.acepting);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r5.acepting);
  }
}
function VerManillaAdminComponent_ng_template_0_button_10_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Rechazar");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function VerManillaAdminComponent_ng_template_0_button_10_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 14)(1, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
function VerManillaAdminComponent_ng_template_0_button_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function VerManillaAdminComponent_ng_template_0_button_10_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r43);
      const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r42.rechazarManillasById());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, VerManillaAdminComponent_ng_template_0_button_10_span_1_Template, 2, 0, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, VerManillaAdminComponent_ng_template_0_button_10_div_2_Template, 3, 0, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r6.acepting);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r6.acepting);
  }
}
function VerManillaAdminComponent_ng_template_0_button_11_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Entregada");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function VerManillaAdminComponent_ng_template_0_button_11_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 14)(1, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
function VerManillaAdminComponent_ng_template_0_button_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function VerManillaAdminComponent_ng_template_0_button_11_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r47);
      const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r46.cambiarEstadoEntregadaManilla());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, VerManillaAdminComponent_ng_template_0_button_11_span_1_Template, 2, 0, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, VerManillaAdminComponent_ng_template_0_button_11_div_2_Template, 3, 0, "div", 60);
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
function VerManillaAdminComponent_ng_template_0_button_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function VerManillaAdminComponent_ng_template_0_button_12_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r50);
      const modal_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](modal_r2.dismiss("Cross click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Cerrar");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function VerManillaAdminComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 2)(1, "div", 3)(2, "h5", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Informacion pulsera");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function VerManillaAdminComponent_ng_template_0_Template_button_click_4_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r52);
      const modal_r2 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](modal_r2.dismiss("Cross click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, VerManillaAdminComponent_ng_template_0_div_5_Template, 4, 0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, VerManillaAdminComponent_ng_template_0_div_7_Template, 16, 6, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, VerManillaAdminComponent_ng_template_0_button_9_Template, 3, 2, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, VerManillaAdminComponent_ng_template_0_button_10_Template, 3, 2, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, VerManillaAdminComponent_ng_template_0_button_11_Template, 3, 2, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, VerManillaAdminComponent_ng_template_0_button_12_Template, 2, 0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r1.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.tipo === "solicitudes");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.tipo === "solicitudes");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.tipo === "enviadas");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.acepting);
  }
}
class VerManillaAdminComponent {
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
    this.manilla = {};
    this.limit = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.pagination_limit;
    this.loading = true;
    this.acepting = true;
    this.showIcons = {};
    this.fieldsList = [];
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
    this._adminService.manillaSelected$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this._unsubscribeAll)).subscribe(manilla => {
      this.loading = true;
      if (this.tipo === 'solicitudes') {
        this.acepting = true;
      }
      // Update the manilla list
      if (manilla !== null) {
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
    if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_7__.isPlatformBrowser)(this.platformId)) {
      // For SSR 
      this.modalService.open(this.ModalManilla, {
        size: 'lg',
        ariaLabelledBy: 'modal-basic-title',
        centered: true,
        windowClass: 'ModalManilla',
        backdrop: 'static',
        keyboard: false,
        scrollable: true
      }).result.then(result => {
        `Result ${result}`;
      }, reason => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
    }
  }
  getDismissReason(reason) {
    if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  getManillaById(id) {
    this._adminService.getManillaById(id).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this._unsubscribeAll)).subscribe(response => {
      if (response.foto_portador) {
        this.items = [new ng_gallery__WEBPACK_IMPORTED_MODULE_9__.ImageItem({
          src: response.foto_portador,
          thumb: response.foto_portador
        })];
        // this.items = [new ImageItem({ src: this.imagenTemp, thumb: this.imagenTemp })];
        const lightboxRef = this.gallery.ref('lightbox');
        // Add custom gallery config to the lightbox (optional)
        lightboxRef.setConfig({
          imageSize: ng_gallery__WEBPACK_IMPORTED_MODULE_9__.ImageSize.Cover,
          thumbPosition: ng_gallery__WEBPACK_IMPORTED_MODULE_9__.ThumbnailsPosition.Top
        });
        // Load items into the lightbox gallery ref
        lightboxRef.load(this.items);
      }
      this.manilla = response;
      this.getFieldsByType(response.tipo);
    }, error => {
      this.Toast.fire({
        icon: 'error',
        title: error.error.message
      });
    });
  }
  getFieldsByType(type) {
    this._userService.getFieldsByUserTypes(type).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this._unsubscribeAll)).subscribe(response => {
      this.fieldsList = response;
      this.loading = false;
    }, error => {
      console.log(error);
    });
  }
  aceptarManillasById() {
    if (this.acepting) {
      this.acepting = false;
      this._adminService.aceptarManillaById(this.manilla._id).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this._unsubscribeAll)).subscribe(response => {
        this.Toast.fire({
          icon: 'success',
          title: 'La manilla ha sido aceptada y puesta en proceso de produccion'
        });
        this.updateManillasList();
      }, error => {
        this.acepting = true;
        this.Toast.fire({
          icon: 'error',
          title: error.error.message
        });
      });
    }
  }
  rechazarManillasById() {
    if (this.acepting) {
      this.acepting = false;
      this._adminService.rechazarManillaById(this.manilla._id).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this._unsubscribeAll)).subscribe(response => {
        this.Toast.fire({
          icon: 'success',
          title: 'La manilla ha sido rechazada con exito'
        });
        this.updateManillasList();
      }, error => {
        this.acepting = true;
        this.Toast.fire({
          icon: 'error',
          title: error.error.message
        });
      });
    }
  }
  updateManillasList() {
    this._adminService.getManillasSolicitudesUpdate(0, this.limit).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this._unsubscribeAll)).subscribe(response => {
      this._adminService.updateManillasSolicitudesList(response);
      this.modalService.dismissAll();
    }, error => {
      this.Toast.fire({
        icon: 'error',
        title: error.error.message
      });
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
  cambiarEstadoEntregadaManilla() {
    this.acepting = false;
    this._adminService.updateEstadoManillaEntregada(this.manilla._id).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this._unsubscribeAll)).subscribe(response => {
      this.Toast.fire({
        icon: "success",
        title: "La pulsera ha sido actualizada a entregada."
      });
      this.getManillasEnviadasPaginated(0);
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
  getManillasEnviadasPaginated(page) {
    this._adminService.getManillasEnviadasUpdate(page, this.limit).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this._unsubscribeAll)).subscribe(response => {
      this._adminService.updateManillasEnviadasList(response);
      this.modalService.dismissAll();
    }, error => {
      this.Toast.fire({
        icon: "error",
        title: error.error.message
      });
    });
  }
}
VerManillaAdminComponent.ɵfac = function VerManillaAdminComponent_Factory(t) {
  return new (t || VerManillaAdminComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_user_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_admin_admin_service__WEBPACK_IMPORTED_MODULE_3__.AdminService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ng_gallery__WEBPACK_IMPORTED_MODULE_9__.Gallery), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ng_gallery_lightbox__WEBPACK_IMPORTED_MODULE_12__.Lightbox));
};
VerManillaAdminComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: VerManillaAdminComponent,
  selectors: [["app-ver-manilla-admin"]],
  viewQuery: function VerManillaAdminComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.ModalManilla = _t.first);
    }
  },
  inputs: {
    tipo: "tipo"
  },
  decls: 2,
  vars: 0,
  consts: [["class", "theme-modal"], ["modalManilla", ""], [1, "modal-content", "quick-view-modal"], [1, "modal-header"], ["id", "modalSolicitarManillaTitulo", 1, "modal-title", "f-w-600"], ["type", "button", "aria-label", "Close", 1, "btn-close", 3, "click"], ["class", "d-flex justify-content-center mb-4 mt-4", 4, "ngIf"], [1, "modal-body"], ["class", "informacion-manilla", 4, "ngIf"], [1, "modal-footer"], ["class", "btn btn-primary", "type", "button", "data-dismiss", "modal", 3, "click", 4, "ngIf"], ["class", "btn btn-danger", "type", "button", "data-dismiss", "modal", 3, "click", 4, "ngIf"], ["class", "btn btn-secondary", "type", "button", "data-dismiss", "modal", 3, "click", 4, "ngIf"], [1, "d-flex", "justify-content-center", "mb-4", "mt-4"], ["role", "status", 1, "spinner-border"], [1, "visually-hidden"], [1, "informacion-manilla"], [1, "dashboard-right"], [1, "dashboard"], [1, "box-account", "box-info"], [1, "contenedor-perfil-image"], ["class", "image-perfil", "alt", "", 3, "src", "click", 4, "ngIf"], ["class", "no-image-perfil", 4, "ngIf"], [1, "row"], [4, "ngFor", "ngForOf"], ["class", "col-sm-6", 4, "ngIf"], ["id", "accordion-orden", 1, "accordion", "theme-accordion", "pulsera-accordion-documentos", "col-sm-12", 3, "closeOthers"], ["id", "orden-status"], ["ngbPanelHeader", ""], ["ngbPanelContent", ""], ["class", "col-sm-12", 4, "ngIf"], ["alt", "", 1, "image-perfil", 3, "src", "click"], [1, "no-image-perfil"], [1, "col-sm-6"], [1, "box"], [1, "box-title"], [1, "box-content", "informacion-manilla-label"], [1, "nombre-contacto"], ["target", "_blank", 3, "href"], ["ngbPanelToggle", "", 1, "accordion-button", "boton-rastreo"], [1, "list-group"], ["class", "list-group-item", 4, "ngIf"], [1, "list-group-item"], ["target", "_blank", 1, "text-secondary", 3, "href"], ["aria-hidden", "true", 1, "fa", "fa-file"], [1, "col-sm-12"], ["id", "entradas-pulsera", 1, "category-table", "custom-datatable"], [1, "table-responsive"], [1, "table", "table-striped"], ["scope", "col"], ["scope", "row"], ["data-bs-toggle", "collapse", "role", "button", "aria-expanded", "false", 3, "href", "click"], ["class", "fa fa-chevron-down f-12", 4, "ngIf"], ["class", "fa fa-chevron-up f-12", 4, "ngIf"], [1, "collapse", 3, "id"], ["colspan", "6", 2, "text-align", "justify"], [1, "fa", "fa-chevron-down", "f-12"], [1, "fa", "fa-chevron-up", "f-12"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-primary", 3, "click"], [4, "ngIf"], ["class", "spinner-border", "role", "status", 4, "ngIf"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-danger", 3, "click"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-secondary", 3, "click"]],
  template: function VerManillaAdminComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, VerManillaAdminComponent_ng_template_0_Template, 13, 6, "ng-template", 0, 1, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbAccordion, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbPanel, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbPanelContent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbPanelHeader, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbPanelToggle, _angular_common__WEBPACK_IMPORTED_MODULE_7__.TitleCasePipe, _angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe, ngx_mask__WEBPACK_IMPORTED_MODULE_13__.NgxMaskPipe],
  styles: [".error-password-form[_ngcontent-%COMP%] {\n  color: red;\n  margin-top: 5px;\n  font-size: 12px;\n}\n\n.informacion-manilla[_ngcontent-%COMP%] {\n  padding-right: 20px;\n  padding-left: 20px;\n  padding-bottom: 20px;\n}\n.informacion-manilla[_ngcontent-%COMP%]   .informacion-manilla-label[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}\n\n.pulsera-accordion-documentos[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n.pulsera-accordion-documentos[_ngcontent-%COMP%]   .boton-rastreo[_ngcontent-%COMP%] {\n  font-weight: bolder;\n}\n\n.pulsera-accordion[_ngcontent-%COMP%] {\n  margin-right: 20px;\n  margin-left: 20px;\n}\n.pulsera-accordion[_ngcontent-%COMP%]   .boton-rastreo[_ngcontent-%COMP%] {\n  font-weight: bolder;\n}\n\n.contenedor-perfil-image[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-top: 10px;\n  width: 140px;\n  height: 140px;\n  border-radius: 50%;\n  overflow: hidden;\n}\n.contenedor-perfil-image[_ngcontent-%COMP%]   .image-perfil[_ngcontent-%COMP%] {\n  object-fit: cover;\n  width: 100%;\n  height: 100%;\n}\n.contenedor-perfil-image[_ngcontent-%COMP%]   .no-image-perfil[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  background-color: rgb(188, 188, 188);\n  color: rgb(78, 78, 78);\n  font-weight: bold;\n  font-size: 70px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYWRtaW4vbWFuaWxsYXMvbW9kYWwvdmVyLW1hbmlsbGEvdmVyLW1hbmlsbGEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUFDSjs7QUFFQTtFQUNJLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtBQUNKO0FBRVE7RUFDSSxpQkFBQTtBQUFaOztBQUtBO0VBR0ksZ0JBQUE7QUFKSjtBQUtNO0VBQ0ksbUJBQUE7QUFIVjs7QUFRQTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7QUFMSjtBQU1JO0VBQ0ksbUJBQUE7QUFKUjs7QUFTQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBTko7QUFRSTtFQUNJLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFOUjtBQVNJO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esb0NBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQVBSIiwic291cmNlc0NvbnRlbnQiOlsiLmVycm9yLXBhc3N3b3JkLWZvcm17XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG4uaW5mb3JtYWNpb24tbWFuaWxsYXtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxuXHJcbiAgICAuaW5mb3JtYWNpb24tbWFuaWxsYS1sYWJlbHtcclxuICAgICAgICBoNntcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4ucHVsc2VyYS1hY2NvcmRpb24tZG9jdW1lbnRvc3tcclxuICAgIC8vIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgIC8vIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgLmJvdG9uLXJhc3RyZW97XHJcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgICB9XHJcbiAgfVxyXG5cclxuICBcclxuLnB1bHNlcmEtYWNjb3JkaW9ue1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICAuYm90b24tcmFzdHJlb3tcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLmNvbnRlbmVkb3ItcGVyZmlsLWltYWdle1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgd2lkdGg6IDE0MHB4O1xyXG4gICAgaGVpZ2h0OiAxNDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcblxyXG4gICAgLmltYWdlLXBlcmZpbHtcclxuICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB9XHJcblxyXG4gICAgLm5vLWltYWdlLXBlcmZpbHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE4OCwgMTg4LCAxODgpO1xyXG4gICAgICAgIGNvbG9yOiByZ2IoNzgsIDc4LCA3OCk7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgZm9udC1zaXplOiA3MHB4O1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ }),

/***/ 7886:
/*!*******************************************************************!*\
  !*** ./src/app/admin/manillas/production/production.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductionListComponent: () => (/* binding */ ProductionListComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 2513);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 274);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ 7889);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 553);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_core_user_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/user/user.service */ 8212);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 6101);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _admin_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../admin.service */ 2048);
/* harmony import */ var _modal_ver_manilla_ver_manilla_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modal/ver-manilla/ver-manilla.component */ 6268);











const _c0 = ["verManillaModal"];
function ProductionListComponent_ng_container_4_Template(rf, ctx) {
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
const _c1 = function (a0, a1, a2, a3, a4) {
  return {
    "manilla-solicitado": a0,
    "manilla-entregado": a1,
    "manilla-rechazado": a2,
    "manilla-aceptado": a3,
    "manilla-enviada": a4
  };
};
function ProductionListComponent_tr_44_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr")(1, "th", 29)(2, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProductionListComponent_tr_44_Template_input_ngModelChange_2_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r7);
      const manilla_r4 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](manilla_r4.selected = $event);
    })("click", function ProductionListComponent_tr_44_Template_input_click_2_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r7);
      const manilla_r4 = restoredCtx.$implicit;
      const i_r5 = restoredCtx.index;
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r8.onSelect(manilla_r4, i_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "td", 31)(9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "td")(12, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProductionListComponent_tr_44_Template_a_click_12_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r7);
      const manilla_r4 = restoredCtx.$implicit;
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r9.abrirModalVerManilla(manilla_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](13, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "a", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProductionListComponent_tr_44_Template_a_click_15_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r7);
      const manilla_r4 = restoredCtx.$implicit;
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r10.enviarManilla(manilla_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](16, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const manilla_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", manilla_r4.selected);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", i_r5 + 1, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](manilla_r4.userId.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](manilla_r4.tipo);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction5"](6, _c1, manilla_r4.estado === "Solicitada", manilla_r4.estado === "Entregada", manilla_r4.estado === "Rechazada", manilla_r4.estado === "Aceptada", manilla_r4.estado === "Enviada"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](manilla_r4.estado);
  }
}
function ProductionListComponent_div_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 36)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "\u00A1No hay pulseras en produccion para mostrar!");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
const _c2 = function () {
  return {
    "=0": "No hay pulseras",
    "=1": "pulsera",
    "other": "pulseras"
  };
};
class ProductionListComponent {
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
    this.limit = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.pagination_limit;
    this.estados = [];
    this.types = [];
    this.allManillas = {};
    this.searchInputControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('produccion');
    this.seleccionadas = [];
    this.selectAll = [];
    this.selectInputControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(false);
    this.loading = false;
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
    this._adminService.manillasProduccion$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this._unsubscribeAll)).subscribe(manillas => {
      this.allManillas = manillas;
      // Update the selected agente
      if (this.searchInputControl.value === 'produccion' || this.searchInputControl.value === '') {
        this.manillasCount = manillas.totalDocuments;
        this.manillasList = manillas.manillas;
      } else {
        this.manillasCount = manillas.totalDocumentsResagadas;
        this.manillasList = manillas.manillasResagadas;
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
  abrirModalVerManilla(manilla) {
    this._adminService.updateManillaSelected(manilla);
    this.VerManillaModal.openModal();
  }
  onPageChange(event) {
    this.getManillasProduccionPaginated((event - 1) * this.limit);
  }
  getManillasProduccionPaginated(page) {
    this._adminService.getManillasProductionUpdate(page, this.limit).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this._unsubscribeAll)).subscribe(response => {
      this._adminService.updateManillasProductionList(response);
    }, error => {
      this.Toast.fire({
        icon: 'error',
        title: error.error.message
      });
    });
  }
  enviarManilla(manilla) {
    this.cambiarEstadoManillaSeleccionada(manilla._id, 'Enviada');
  }
  manillaEntregada(manilla) {
    this.cambiarEstadoManillaSeleccionada(manilla._id, 'Entregada');
  }
  cambiarEstadoManillaSeleccionada(id, estado) {
    this._adminService.cambiarEstadoManilla(id, estado).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this._unsubscribeAll)).subscribe(response => {
      this.Toast.fire({
        icon: "success",
        title: `El estado de la manilla ha sido actualizado con exito a: ${estado}`
      });
      this.page = 1;
      this.getManillasProduccionPaginated(0);
    }, error => {
      this.Toast.fire({
        icon: "error",
        title: error.error.message
      });
    });
  }
  updateManillasList() {
    this._adminService.getManillasSolicitudesUpdate(0, this.limit).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this._unsubscribeAll)).subscribe(response => {
      this._adminService.updateManillasProductionList(response);
    }, error => {
      this.Toast.fire({
        icon: "error",
        title: error.error.message
      });
    });
  }
  handleChange(event) {
    this.seleccionadas = [];
    this.selectInputControl.setValue(false);
    if (event.target.value === 'produccion' || event.target.value === '') {
      this.manillasCount = this.allManillas.totalDocuments;
      this.manillasList = this.allManillas.manillas;
    } else {
      this.manillasCount = this.allManillas.totalDocumentsResagadas;
      this.manillasList = this.allManillas.manillasResagadas;
    }
  }
  onSelect(manilla, index) {
    if (!manilla.selected) {
      this.seleccionadas.push(manilla._id);
    } else {
      const isInArray = element => element === manilla._id;
      let ind = this.seleccionadas.findIndex(isInArray);
      this.seleccionadas.splice(ind, 1);
    }
    // this.seleccionadas.push(manilla._id);
  }

  selectAllManillas() {
    this.seleccionadas = [];
    this.manillasList.forEach(manilla => {
      if (!this.selectInputControl.value) {
        this.seleccionadas.push(manilla._id);
        manilla.selected = true;
        // manilla.selected = !manilla.selected;
      } else {
        manilla.selected = false;
      }
    });
  }
  aceptarSeleccionadas() {
    if (this.seleccionadas.length !== 0) {
      this.loading = true;
      this._adminService.updateEstadoManillaEnviadaVarias({
        ids: this.seleccionadas
      }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this._unsubscribeAll)).subscribe(response => {
        this.Toast.fire({
          icon: "success",
          title: "Todas las pulseras seleccionadas han sido aceptadas y puestas en produccion."
        });
        this.updateManillasList();
        this.selectInputControl.setValue(false);
        this.seleccionadas = [];
        this.loading = false;
      }, error => {
        this.Toast.fire({
          icon: "error",
          title: error.error.message
        });
        this.loading = false;
      });
    } else {
      this.Toast.fire({
        icon: "error",
        title: "Debes seleccionar pulseras para aceptarlas."
      });
    }
  }
}
ProductionListComponent.ɵfac = function ProductionListComponent_Factory(t) {
  return new (t || ProductionListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_user_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_10__.ViewportScroller), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_admin_service__WEBPACK_IMPORTED_MODULE_3__.AdminService));
};
ProductionListComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: ProductionListComponent,
  selectors: [["app-production-list"]],
  viewQuery: function ProductionListComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.VerManillaModal = _t.first);
    }
  },
  decls: 50,
  vars: 18,
  consts: [[1, "dashboard-right"], [1, "dashboard"], [1, "welcome-msg", "count-manillas"], [1, "nombre-msg"], [4, "ngIf"], [1, "container-fluid"], [1, "row"], [1, "col-sm-12"], [1, "card"], [1, "card-body"], [1, "col-md-6", "mb-4"], ["for", "estado", 1, "mb-2"], ["id", "estado", "aria-label", "Seleccionar estado de manilla", 1, "form-select", 3, "formControl", "change"], ["value", "produccion"], ["value", "resagadas"], [1, "col-md-2"], [1, "col-md-4", "mb-4"], ["type", "button", 1, "btn", "btn-primary", "form-control", 3, "disabled", "click"], ["id", "batchDelete", 1, "category-table", "custom-datatable"], [1, "table-responsive"], [1, "table", "table-striped"], ["scope", "col"], ["type", "checkbox", "name", "title_select", 3, "formControl", "click"], [4, "ngFor", "ngForOf"], ["class", "d-flex justify-content-center mb-4 mt-4", 4, "ngIf"], [1, "d-flex", "justify-content-center", "p-2"], [3, "collectionSize", "rotate", "maxSize", "page", "pageSize", "boundaryLinks", "pageChange"], [3, "tipo"], ["verManillaModal", ""], ["scope", "row"], ["type", "checkbox", "name", "title_select", 3, "ngModel", "ngModelChange", "click"], [3, "ngClass"], ["href", "javascript:void(0)", "data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Ver pulsera", 3, "click"], [1, "fa", "fa-eye", "f-12", 2, "color", "#3c70f4"], ["href", "javascript:void(0)", "data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Enviar pulsera", 3, "click"], [1, "fa", "fa-envelope-o", "f-12", 2, "color", "#efcc6d"], [1, "d-flex", "justify-content-center", "mb-4", "mt-4"]],
  template: function ProductionListComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "p", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, ProductionListComponent_ng_container_4_Template, 2, 1, "ng-container", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](6, "i18nPlural");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 5)(8, "div", 6)(9, "div", 7)(10, "div", 8)(11, "div", 9)(12, "div", 6)(13, "div", 10)(14, "label", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, "Estado pulseras");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "select", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function ProductionListComponent_Template_select_change_16_listener($event) {
        return ctx.handleChange($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "option", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, "En produccion");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "option", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20, "Resagadas");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](21, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "div", 16)(23, "label", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24, "\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "button", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProductionListComponent_Template_button_click_25_listener() {
        return ctx.aceptarSeleccionadas();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26, "Enviar seleccionadas");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "div", 18)(28, "div", 19)(29, "table", 20)(30, "thead")(31, "tr")(32, "th", 21)(33, "input", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProductionListComponent_Template_input_click_33_listener() {
        return ctx.selectAllManillas();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](34, "#");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "th", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](36, "Usuario");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "th", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](38, "Tipo");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "th", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](40, "Estado");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "th", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](42, "Acciones");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "tbody");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](44, ProductionListComponent_tr_44_Template, 18, 12, "tr", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](45, ProductionListComponent_div_45_Template, 3, 0, "div", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](46, "div", 25)(47, "ngb-pagination", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("pageChange", function ProductionListComponent_Template_ngb_pagination_pageChange_47_listener($event) {
        return ctx.onPageChange($event);
      })("pageChange", function ProductionListComponent_Template_ngb_pagination_pageChange_47_listener($event) {
        return ctx.page = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](48, "app-ver-manilla-admin", 27, 28);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.manillasCount > 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](6, 14, ctx.manillasCount, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](17, _c2)), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formControl", ctx.searchInputControl);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx.loading);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formControl", ctx.selectInputControl);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.manillasList);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.manillasCount <= 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("collectionSize", ctx.manillasCount)("rotate", true)("maxSize", 5)("page", ctx.page)("pageSize", ctx.limit)("boundaryLinks", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("tipo", "produccion");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlDirective, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbPagination, _modal_ver_manilla_ver_manilla_component__WEBPACK_IMPORTED_MODULE_4__.VerManillaAdminComponent, _angular_common__WEBPACK_IMPORTED_MODULE_10__.I18nPluralPipe],
  styles: [".count-manillas[_ngcontent-%COMP%] {\n  margin-left: 12px;\n}\n\n.estado-manillas[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  padding: 11px;\n}\n\n.contenedor-perfil-image[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-top: 10px;\n  width: 140px;\n  height: 140px;\n  border-radius: 50%;\n  overflow: hidden;\n}\n.contenedor-perfil-image[_ngcontent-%COMP%]   .image-perfil[_ngcontent-%COMP%] {\n  object-fit: cover;\n  width: 100%;\n  height: 100%;\n}\n.contenedor-perfil-image[_ngcontent-%COMP%]   .no-image-perfil[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  background-color: rgb(188, 188, 188);\n  color: rgb(78, 78, 78);\n  font-weight: bold;\n  font-size: 70px;\n}\n\n.manilla-aceptado[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  background: var(--theme-gradient1);\n  color: white;\n  border-radius: 20px;\n  padding: 8px 0px 8px 0px;\n}\n\n.manilla-rechazado[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  background: rgb(231, 82, 82);\n  color: white;\n  border-radius: 20px;\n  padding: 8px 0px 8px 0px;\n}\n\n.manilla-entregado[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  background: rgb(46, 160, 33);\n  color: white;\n  border-radius: 20px;\n  padding: 8px 0px 8px 0px;\n}\n\n.manilla-solicitado[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  background: var(--theme-gradient2);\n  color: white;\n  border-radius: 20px;\n  padding: 8px 0px 8px 0px;\n}\n\n.manilla-enviada[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  background: var(--theme-deafult);\n  color: white;\n  border-radius: 20px;\n  padding: 8px 0px 8px 0px;\n}\n\nselect[_ngcontent-%COMP%] {\n  padding: 11px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYWRtaW4vbWFuaWxsYXMvbWFuaWxsYXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtBQUNKOztBQUdJO0VBQ0ksYUFBQTtBQUFSOztBQUtBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFGSjtBQUlJO0VBQ0ksaUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUZSO0FBS0k7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBSFI7O0FBUUk7RUFDSSxrQ0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHdCQUFBO0FBTFI7O0FBVUk7RUFDSSw0QkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHdCQUFBO0FBUFI7O0FBWUk7RUFDSSw0QkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHdCQUFBO0FBVFI7O0FBY0k7RUFDSSxrQ0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHdCQUFBO0FBWFI7O0FBZ0JJO0VBQ0ksZ0NBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSx3QkFBQTtBQWJSOztBQWlCQTtFQUNJLGFBQUE7QUFkSiIsInNvdXJjZXNDb250ZW50IjpbIi5jb3VudC1tYW5pbGxhc3tcclxuICAgIG1hcmdpbi1sZWZ0OiAxMnB4O1xyXG59XHJcblxyXG4uZXN0YWRvLW1hbmlsbGFze1xyXG4gICAgc2VsZWN0e1xyXG4gICAgICAgIHBhZGRpbmc6IDExcHg7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG4uY29udGVuZWRvci1wZXJmaWwtaW1hZ2V7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICB3aWR0aDogMTQwcHg7XHJcbiAgICBoZWlnaHQ6IDE0MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcbiAgICAuaW1hZ2UtcGVyZmlse1xyXG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgIH1cclxuXHJcbiAgICAubm8taW1hZ2UtcGVyZmlse1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTg4LCAxODgsIDE4OCk7XHJcbiAgICAgICAgY29sb3I6IHJnYig3OCwgNzgsIDc4KTtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBmb250LXNpemU6IDcwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5tYW5pbGxhLWFjZXB0YWRve1xyXG4gICAgcHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS10aGVtZS1ncmFkaWVudDEpO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDhweCAwcHggOHB4IDBweDtcclxuICAgIH1cclxufVxyXG5cclxuLm1hbmlsbGEtcmVjaGF6YWRve1xyXG4gICAgcHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoMjMxLCA4MiwgODIpO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDhweCAwcHggOHB4IDBweDtcclxuICAgIH1cclxufVxyXG5cclxuLm1hbmlsbGEtZW50cmVnYWRve1xyXG4gICAgcHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoNDYsIDE2MCwgMzMpO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDhweCAwcHggOHB4IDBweDtcclxuICAgIH1cclxufVxyXG5cclxuLm1hbmlsbGEtc29saWNpdGFkb3tcclxuICAgIHB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tdGhlbWUtZ3JhZGllbnQyKTtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICBwYWRkaW5nOiA4cHggMHB4IDhweCAwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5tYW5pbGxhLWVudmlhZGF7XHJcbiAgICBwe1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXRoZW1lLWRlYWZ1bHQpO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDhweCAwcHggOHB4IDBweDtcclxuICAgIH1cclxufVxyXG5cclxuc2VsZWN0e1xyXG4gICAgcGFkZGluZzogMTFweDtcclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});


/***/ }),

/***/ 2949:
/*!*********************************************************************!*\
  !*** ./src/app/admin/manillas/solicitudes/solicitudes.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SolicitudesListComponent: () => (/* binding */ SolicitudesListComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 2513);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 274);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ 7889);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 553);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_core_user_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/user/user.service */ 8212);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 6101);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _admin_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../admin.service */ 2048);
/* harmony import */ var _modal_ver_manilla_ver_manilla_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modal/ver-manilla/ver-manilla.component */ 6268);











const _c0 = ["verManillaModal"];
function SolicitudesListComponent_ng_container_4_Template(rf, ctx) {
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
const _c1 = function (a0, a1, a2, a3, a4) {
  return {
    "manilla-solicitado": a0,
    "manilla-entregado": a1,
    "manilla-rechazado": a2,
    "manilla-aceptado": a3,
    "manilla-enviada": a4
  };
};
function SolicitudesListComponent_tr_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr")(1, "th", 24)(2, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function SolicitudesListComponent_tr_34_Template_input_ngModelChange_2_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r7);
      const manilla_r4 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](manilla_r4.selected = $event);
    })("click", function SolicitudesListComponent_tr_34_Template_input_click_2_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r7);
      const manilla_r4 = restoredCtx.$implicit;
      const i_r5 = restoredCtx.index;
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r8.onSelect(manilla_r4, i_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "td", 26)(9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "td")(12, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SolicitudesListComponent_tr_34_Template_a_click_12_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r7);
      const manilla_r4 = restoredCtx.$implicit;
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r9.abrirModalVerManilla(manilla_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](13, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const manilla_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", manilla_r4.selected);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", i_r5 + 1, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](manilla_r4.userId.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](manilla_r4.tipo);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction5"](6, _c1, manilla_r4.estado === "Solicitada", manilla_r4.estado === "Entregada", manilla_r4.estado === "Rechazada", manilla_r4.estado === "Aceptada", manilla_r4.estado === "Enviada"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](manilla_r4.estado);
  }
}
function SolicitudesListComponent_div_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 29)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "\u00A1No hay solicitudes de pulseras para mostrar!");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
const _c2 = function () {
  return {
    "=0": "No hay pulseras",
    "=1": "pulsera",
    "other": "pulseras"
  };
};
class SolicitudesListComponent {
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
    this.limit = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.pagination_limit;
    this.seleccionadas = [];
    this.selectAll = [];
    this.selectInputControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(false);
    this.loading = false;
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
  ngOnInit() {
    this._adminService.manillasSolicitud$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this._unsubscribeAll)).subscribe(manillas => {
      // Update the selected agente
      this.manillasList = manillas.manillas;
      this.manillasCount = manillas.totalDocuments;
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
    this.getManillasSolicitudesPaginated((event - 1) * this.limit);
  }
  abrirModalVerManilla(manilla) {
    this._adminService.updateManillaSelected(manilla);
    this.VerManillaModal.openModal();
  }
  getManillasSolicitudesPaginated(page) {
    this._adminService.getManillasSolicitudesUpdate(page, this.limit).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this._unsubscribeAll)).subscribe(response => {
      this._adminService.updateManillasSolicitudesList(response);
    }, error => {
      this.Toast.fire({
        icon: "error",
        title: error.error.message
      });
    });
  }
  onSelect(manilla, index) {
    if (!manilla.selected) {
      this.seleccionadas.push(manilla._id);
    } else {
      const isInArray = element => element === manilla._id;
      let ind = this.seleccionadas.findIndex(isInArray);
      this.seleccionadas.splice(ind, 1);
    }
    // this.seleccionadas.push(manilla._id);
  }

  selectAllManillas() {
    this.seleccionadas = [];
    this.manillasList.forEach(manilla => {
      if (!this.selectInputControl.value) {
        this.seleccionadas.push(manilla._id);
        manilla.selected = true;
        // manilla.selected = !manilla.selected;
      } else {
        manilla.selected = false;
      }
    });
  }
  aceptarManillasSeleccionadas() {
    if (this.seleccionadas.length !== 0) {
      this.loading = true;
      this._adminService.aceptarVariasManillas({
        ids: this.seleccionadas
      }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this._unsubscribeAll)).subscribe(response => {
        this.Toast.fire({
          icon: "success",
          title: "Todas las pulseras seleccionadas han sido aceptadas y puestas en produccion."
        });
        this.updateManillasList();
        this.selectInputControl.setValue(false);
        this.seleccionadas = [];
        this.loading = false;
      }, error => {
        this.Toast.fire({
          icon: "error",
          title: error.error.message
        });
      });
    } else {
      this.Toast.fire({
        icon: "error",
        title: "Debes seleccionar pulseras para aceptarlas."
      });
    }
  }
  aceptarTodasLasManillas() {
    this.loading = true;
    this._adminService.aceptarTodasLasManillas().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this._unsubscribeAll)).subscribe(response => {
      this.Toast.fire({
        icon: "success",
        title: "Todas las pulseras han sido aceptadas y puestas en produccion."
      });
      this.updateManillasList();
      this.selectInputControl.setValue(false);
      this.seleccionadas = [];
      this.loading = false;
    }, error => {
      this.Toast.fire({
        icon: "error",
        title: error.error.message
      });
    });
  }
  updateManillasList() {
    this._adminService.getManillasSolicitudesUpdate(0, this.limit).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this._unsubscribeAll)).subscribe(response => {
      this._adminService.updateManillasSolicitudesList(response);
    }, error => {
      this.Toast.fire({
        icon: "error",
        title: error.error.message
      });
    });
  }
}
SolicitudesListComponent.ɵfac = function SolicitudesListComponent_Factory(t) {
  return new (t || SolicitudesListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_user_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_10__.ViewportScroller), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_admin_service__WEBPACK_IMPORTED_MODULE_3__.AdminService));
};
SolicitudesListComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: SolicitudesListComponent,
  selectors: [["app-solicitudes-list"]],
  viewQuery: function SolicitudesListComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.VerManillaModal = _t.first);
    }
  },
  decls: 40,
  vars: 18,
  consts: [[1, "dashboard-right"], [1, "dashboard"], [1, "welcome-msg", "count-manillas"], [1, "nombre-msg"], [4, "ngIf"], [1, "container-fluid"], [1, "row"], [1, "col-sm-12"], [1, "card"], [1, "card-body"], [1, "d-grid", "gap-2", "d-md-flex", "justify-content-md-end"], ["type", "button", 1, "btn", "btn-primary", "me-md-2", 3, "disabled", "click"], ["type", "button", 1, "btn", "btn-primary", 3, "disabled", "click"], ["id", "batchDelete", 1, "category-table", "custom-datatable"], [1, "table-responsive"], [1, "table", "table-striped"], ["scope", "col"], ["type", "checkbox", "name", "title_select", 3, "formControl", "click"], [4, "ngFor", "ngForOf"], ["class", "d-flex justify-content-center mb-4 mt-4", 4, "ngIf"], [1, "d-flex", "justify-content-center", "p-2"], [3, "collectionSize", "rotate", "maxSize", "page", "pageSize", "boundaryLinks", "pageChange"], [3, "tipo"], ["verManillaModal", ""], ["scope", "row"], ["type", "checkbox", "name", "title_select", 3, "ngModel", "ngModelChange", "click"], [3, "ngClass"], ["href", "javascript:void(0)", 3, "click"], [1, "fa", "fa-eye", "f-12"], [1, "d-flex", "justify-content-center", "mb-4", "mt-4"]],
  template: function SolicitudesListComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "p", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, SolicitudesListComponent_ng_container_4_Template, 2, 1, "ng-container", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](6, "i18nPlural");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 5)(8, "div", 6)(9, "div", 7)(10, "div", 8)(11, "div", 9)(12, "div", 10)(13, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SolicitudesListComponent_Template_button_click_13_listener() {
        return ctx.aceptarManillasSeleccionadas();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "Aceptar Seleccionadas");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "button", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SolicitudesListComponent_Template_button_click_15_listener() {
        return ctx.aceptarTodasLasManillas();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "Aceptar Todas");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div", 13)(18, "div", 14)(19, "table", 15)(20, "thead")(21, "tr")(22, "th", 16)(23, "input", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SolicitudesListComponent_Template_input_click_23_listener() {
        return ctx.selectAllManillas();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24, "#");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "th", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26, "Usuario");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "th", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28, "Tipo");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "th", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](30, "Estado");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "th", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](32, "Acciones");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "tbody");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](34, SolicitudesListComponent_tr_34_Template, 15, 12, "tr", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](35, SolicitudesListComponent_div_35_Template, 3, 0, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "div", 20)(37, "ngb-pagination", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("pageChange", function SolicitudesListComponent_Template_ngb_pagination_pageChange_37_listener($event) {
        return ctx.onPageChange($event);
      })("pageChange", function SolicitudesListComponent_Template_ngb_pagination_pageChange_37_listener($event) {
        return ctx.page = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](38, "app-ver-manilla-admin", 22, 23);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.manillasCount > 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](6, 14, ctx.manillasCount, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](17, _c2)), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx.loading);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx.loading);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formControl", ctx.selectInputControl);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.manillasList);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.manillasCount <= 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("collectionSize", ctx.manillasCount)("rotate", true)("maxSize", 5)("page", ctx.page)("pageSize", ctx.limit)("boundaryLinks", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("tipo", "solicitudes");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlDirective, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbPagination, _modal_ver_manilla_ver_manilla_component__WEBPACK_IMPORTED_MODULE_4__.VerManillaAdminComponent, _angular_common__WEBPACK_IMPORTED_MODULE_10__.I18nPluralPipe],
  styles: [".count-manillas[_ngcontent-%COMP%] {\n  margin-left: 12px;\n}\n\n.estado-manillas[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  padding: 11px;\n}\n\n.contenedor-perfil-image[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-top: 10px;\n  width: 140px;\n  height: 140px;\n  border-radius: 50%;\n  overflow: hidden;\n}\n.contenedor-perfil-image[_ngcontent-%COMP%]   .image-perfil[_ngcontent-%COMP%] {\n  object-fit: cover;\n  width: 100%;\n  height: 100%;\n}\n.contenedor-perfil-image[_ngcontent-%COMP%]   .no-image-perfil[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  background-color: rgb(188, 188, 188);\n  color: rgb(78, 78, 78);\n  font-weight: bold;\n  font-size: 70px;\n}\n\n.manilla-aceptado[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  background: var(--theme-gradient1);\n  color: white;\n  border-radius: 20px;\n  padding: 8px 0px 8px 0px;\n}\n\n.manilla-rechazado[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  background: rgb(231, 82, 82);\n  color: white;\n  border-radius: 20px;\n  padding: 8px 0px 8px 0px;\n}\n\n.manilla-entregado[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  background: rgb(46, 160, 33);\n  color: white;\n  border-radius: 20px;\n  padding: 8px 0px 8px 0px;\n}\n\n.manilla-solicitado[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  background: var(--theme-gradient2);\n  color: white;\n  border-radius: 20px;\n  padding: 8px 0px 8px 0px;\n}\n\n.manilla-enviada[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  background: var(--theme-deafult);\n  color: white;\n  border-radius: 20px;\n  padding: 8px 0px 8px 0px;\n}\n\nselect[_ngcontent-%COMP%] {\n  padding: 11px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYWRtaW4vbWFuaWxsYXMvbWFuaWxsYXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtBQUNKOztBQUdJO0VBQ0ksYUFBQTtBQUFSOztBQUtBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFGSjtBQUlJO0VBQ0ksaUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUZSO0FBS0k7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBSFI7O0FBUUk7RUFDSSxrQ0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHdCQUFBO0FBTFI7O0FBVUk7RUFDSSw0QkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHdCQUFBO0FBUFI7O0FBWUk7RUFDSSw0QkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHdCQUFBO0FBVFI7O0FBY0k7RUFDSSxrQ0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHdCQUFBO0FBWFI7O0FBZ0JJO0VBQ0ksZ0NBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSx3QkFBQTtBQWJSOztBQWlCQTtFQUNJLGFBQUE7QUFkSiIsInNvdXJjZXNDb250ZW50IjpbIi5jb3VudC1tYW5pbGxhc3tcclxuICAgIG1hcmdpbi1sZWZ0OiAxMnB4O1xyXG59XHJcblxyXG4uZXN0YWRvLW1hbmlsbGFze1xyXG4gICAgc2VsZWN0e1xyXG4gICAgICAgIHBhZGRpbmc6IDExcHg7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG4uY29udGVuZWRvci1wZXJmaWwtaW1hZ2V7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICB3aWR0aDogMTQwcHg7XHJcbiAgICBoZWlnaHQ6IDE0MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcbiAgICAuaW1hZ2UtcGVyZmlse1xyXG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgIH1cclxuXHJcbiAgICAubm8taW1hZ2UtcGVyZmlse1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTg4LCAxODgsIDE4OCk7XHJcbiAgICAgICAgY29sb3I6IHJnYig3OCwgNzgsIDc4KTtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBmb250LXNpemU6IDcwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5tYW5pbGxhLWFjZXB0YWRve1xyXG4gICAgcHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS10aGVtZS1ncmFkaWVudDEpO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDhweCAwcHggOHB4IDBweDtcclxuICAgIH1cclxufVxyXG5cclxuLm1hbmlsbGEtcmVjaGF6YWRve1xyXG4gICAgcHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoMjMxLCA4MiwgODIpO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDhweCAwcHggOHB4IDBweDtcclxuICAgIH1cclxufVxyXG5cclxuLm1hbmlsbGEtZW50cmVnYWRve1xyXG4gICAgcHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoNDYsIDE2MCwgMzMpO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDhweCAwcHggOHB4IDBweDtcclxuICAgIH1cclxufVxyXG5cclxuLm1hbmlsbGEtc29saWNpdGFkb3tcclxuICAgIHB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tdGhlbWUtZ3JhZGllbnQyKTtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICBwYWRkaW5nOiA4cHggMHB4IDhweCAwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5tYW5pbGxhLWVudmlhZGF7XHJcbiAgICBwe1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXRoZW1lLWRlYWZ1bHQpO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDhweCAwcHggOHB4IDBweDtcclxuICAgIH1cclxufVxyXG5cclxuc2VsZWN0e1xyXG4gICAgcGFkZGluZzogMTFweDtcclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});


/***/ })

}]);
//# sourceMappingURL=src_app_admin_manillas_manillas_module_ts.js.map