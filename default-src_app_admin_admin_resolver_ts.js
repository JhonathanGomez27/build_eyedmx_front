"use strict";
(self["webpackChunkmultikart"] = self["webpackChunkmultikart"] || []).push([["default-src_app_admin_admin_resolver_ts"],{

/***/ 92386:
/*!*****************************************!*\
  !*** ./src/app/admin/admin.resolver.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdminManillasEnviadasResolver: () => (/* binding */ AdminManillasEnviadasResolver),
/* harmony export */   AdminManillasEstadosResolver: () => (/* binding */ AdminManillasEstadosResolver),
/* harmony export */   AdminManillasListResolver: () => (/* binding */ AdminManillasListResolver),
/* harmony export */   AdminManillasProduccionResolver: () => (/* binding */ AdminManillasProduccionResolver),
/* harmony export */   AdminManillasSolicitudesResolver: () => (/* binding */ AdminManillasSolicitudesResolver),
/* harmony export */   AdminTallerListResolver: () => (/* binding */ AdminTallerListResolver),
/* harmony export */   AdminTallerSolicitudesListResolver: () => (/* binding */ AdminTallerSolicitudesListResolver),
/* harmony export */   AdminTypesResolver: () => (/* binding */ AdminTypesResolver),
/* harmony export */   AdminUsuariosListResolver: () => (/* binding */ AdminUsuariosListResolver),
/* harmony export */   OrdenesListResolver: () => (/* binding */ OrdenesListResolver),
/* harmony export */   TypesListResolver: () => (/* binding */ TypesListResolver),
/* harmony export */   pendienteEfectivoListResolver: () => (/* binding */ pendienteEfectivoListResolver)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 20553);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _admin_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin.service */ 62048);



let limit = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.pagination_limit;
class AdminManillasListResolver {
  /**
   * Constructor
   */
  constructor(_adminService) {
    this._adminService = _adminService;
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
    return this._adminService.getManillasList(0, limit, null, null);
  }
}
AdminManillasListResolver.ɵfac = function AdminManillasListResolver_Factory(t) {
  return new (t || AdminManillasListResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_admin_service__WEBPACK_IMPORTED_MODULE_1__.AdminService));
};
AdminManillasListResolver.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: AdminManillasListResolver,
  factory: AdminManillasListResolver.ɵfac,
  providedIn: 'root'
});

class AdminManillasSolicitudesResolver {
  /**
   * Constructor
   */
  constructor(_adminService) {
    this._adminService = _adminService;
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
    return this._adminService.getManillasSolicitudesList(0, limit);
  }
}
AdminManillasSolicitudesResolver.ɵfac = function AdminManillasSolicitudesResolver_Factory(t) {
  return new (t || AdminManillasSolicitudesResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_admin_service__WEBPACK_IMPORTED_MODULE_1__.AdminService));
};
AdminManillasSolicitudesResolver.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: AdminManillasSolicitudesResolver,
  factory: AdminManillasSolicitudesResolver.ɵfac,
  providedIn: 'root'
});

class AdminManillasProduccionResolver {
  /**
   * Constructor
   */
  constructor(_adminService) {
    this._adminService = _adminService;
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
    return this._adminService.getManillasProduction(0, limit);
  }
}
AdminManillasProduccionResolver.ɵfac = function AdminManillasProduccionResolver_Factory(t) {
  return new (t || AdminManillasProduccionResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_admin_service__WEBPACK_IMPORTED_MODULE_1__.AdminService));
};
AdminManillasProduccionResolver.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: AdminManillasProduccionResolver,
  factory: AdminManillasProduccionResolver.ɵfac,
  providedIn: 'root'
});

class AdminManillasEnviadasResolver {
  /**
   * Constructor
   */
  constructor(_adminService) {
    this._adminService = _adminService;
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
    return this._adminService.getManillasEnviadas(0, limit);
  }
}
AdminManillasEnviadasResolver.ɵfac = function AdminManillasEnviadasResolver_Factory(t) {
  return new (t || AdminManillasEnviadasResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_admin_service__WEBPACK_IMPORTED_MODULE_1__.AdminService));
};
AdminManillasEnviadasResolver.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: AdminManillasEnviadasResolver,
  factory: AdminManillasEnviadasResolver.ɵfac,
  providedIn: 'root'
});

class AdminManillasEstadosResolver {
  /**
   * Constructor
   */
  constructor(_adminService) {
    this._adminService = _adminService;
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
    return this._adminService.getManillasEstados();
  }
}
AdminManillasEstadosResolver.ɵfac = function AdminManillasEstadosResolver_Factory(t) {
  return new (t || AdminManillasEstadosResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_admin_service__WEBPACK_IMPORTED_MODULE_1__.AdminService));
};
AdminManillasEstadosResolver.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: AdminManillasEstadosResolver,
  factory: AdminManillasEstadosResolver.ɵfac,
  providedIn: 'root'
});

class AdminTypesResolver {
  /**
   * Constructor
   */
  constructor(_adminService) {
    this._adminService = _adminService;
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
    return this._adminService.getUserTypes();
  }
}
AdminTypesResolver.ɵfac = function AdminTypesResolver_Factory(t) {
  return new (t || AdminTypesResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_admin_service__WEBPACK_IMPORTED_MODULE_1__.AdminService));
};
AdminTypesResolver.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: AdminTypesResolver,
  factory: AdminTypesResolver.ɵfac,
  providedIn: 'root'
});

// Talleres resolver
class AdminTallerListResolver {
  /**
   * Constructor
   */
  constructor(_adminService) {
    this._adminService = _adminService;
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
    return this._adminService.getTalleresList(0, limit, null);
  }
}
AdminTallerListResolver.ɵfac = function AdminTallerListResolver_Factory(t) {
  return new (t || AdminTallerListResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_admin_service__WEBPACK_IMPORTED_MODULE_1__.AdminService));
};
AdminTallerListResolver.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: AdminTallerListResolver,
  factory: AdminTallerListResolver.ɵfac,
  providedIn: 'root'
});

class AdminTallerSolicitudesListResolver {
  /**
   * Constructor
   */
  constructor(_adminService) {
    this._adminService = _adminService;
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
    return this._adminService.getTalleresSolicitudesList(0, limit, null);
  }
}
AdminTallerSolicitudesListResolver.ɵfac = function AdminTallerSolicitudesListResolver_Factory(t) {
  return new (t || AdminTallerSolicitudesListResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_admin_service__WEBPACK_IMPORTED_MODULE_1__.AdminService));
};
AdminTallerSolicitudesListResolver.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: AdminTallerSolicitudesListResolver,
  factory: AdminTallerSolicitudesListResolver.ɵfac,
  providedIn: 'root'
});

// Usuarios resolver
class AdminUsuariosListResolver {
  /**
   * Constructor
   */
  constructor(_adminService) {
    this._adminService = _adminService;
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
    return this._adminService.getUsuariosList(0, limit, null);
  }
}
AdminUsuariosListResolver.ɵfac = function AdminUsuariosListResolver_Factory(t) {
  return new (t || AdminUsuariosListResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_admin_service__WEBPACK_IMPORTED_MODULE_1__.AdminService));
};
AdminUsuariosListResolver.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: AdminUsuariosListResolver,
  factory: AdminUsuariosListResolver.ɵfac,
  providedIn: 'root'
});

// Ordenes
class pendienteEfectivoListResolver {
  /**
   * Constructor
   */
  constructor(_adminService) {
    this._adminService = _adminService;
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
    return this._adminService.getPulserasEfectivo(0, limit);
  }
}
pendienteEfectivoListResolver.ɵfac = function pendienteEfectivoListResolver_Factory(t) {
  return new (t || pendienteEfectivoListResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_admin_service__WEBPACK_IMPORTED_MODULE_1__.AdminService));
};
pendienteEfectivoListResolver.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: pendienteEfectivoListResolver,
  factory: pendienteEfectivoListResolver.ɵfac,
  providedIn: 'root'
});

class OrdenesListResolver {
  /**
   * Constructor
   */
  constructor(_adminService) {
    this._adminService = _adminService;
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
    return this._adminService.getListOrdenes(0, limit);
  }
}
OrdenesListResolver.ɵfac = function OrdenesListResolver_Factory(t) {
  return new (t || OrdenesListResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_admin_service__WEBPACK_IMPORTED_MODULE_1__.AdminService));
};
OrdenesListResolver.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: OrdenesListResolver,
  factory: OrdenesListResolver.ɵfac,
  providedIn: 'root'
});

// types
class TypesListResolver {
  /**
   * Constructor
   */
  constructor(_adminService) {
    this._adminService = _adminService;
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
    return this._adminService.getTypesPulseras();
  }
}
TypesListResolver.ɵfac = function TypesListResolver_Factory(t) {
  return new (t || TypesListResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_admin_service__WEBPACK_IMPORTED_MODULE_1__.AdminService));
};
TypesListResolver.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: TypesListResolver,
  factory: TypesListResolver.ɵfac,
  providedIn: 'root'
});


/***/ })

}]);
//# sourceMappingURL=default-src_app_admin_admin_resolver_ts.js.map