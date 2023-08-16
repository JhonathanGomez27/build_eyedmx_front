"use strict";
(self["webpackChunkmultikart"] = self["webpackChunkmultikart"] || []).push([["default-src_app_admin_admin_resolver_ts"],{

/***/ 2386:
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
/* harmony export */   AdminUsuariosListResolver: () => (/* binding */ AdminUsuariosListResolver)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 553);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _admin_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin.service */ 2048);



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


/***/ }),

/***/ 2048:
/*!****************************************!*\
  !*** ./src/app/admin/admin.service.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdminService: () => (/* binding */ AdminService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 8071);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 3738);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 553);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);





class AdminService {
  // -----------------------------------------------------------------------------------------------------
  // @ Accessors
  // -----------------------------------------------------------------------------------------------------
  /**
   * Getter for manillas list
   */
  get manillasList$() {
    return this._manillasList.asObservable();
  }
  /**
   * Getter for manillas Produccion
   */
  get manillasProduccion$() {
    return this._manillasProduccion.asObservable();
  }
  /**
   * Getter for manillas Produccion
   */
  get manillasEnviadas$() {
    return this._manillasEnviadas.asObservable();
  }
  /**
   * Getter for manillas Produccion
   */
  get manillasSolicitud$() {
    return this._manillasSolicitud.asObservable();
  }
  /**
   * Getter for manillas estados
   */
  get manillasEstados$() {
    return this._manillasEstados.asObservable();
  }
  /**
   * Getter for tipos
   */
  get userTypes$() {
    return this._userTypes.asObservable();
  }
  /**
     * Getter for manilla selected
     */
  get manillaSelected$() {
    return this._manillaSelected.asObservable();
  }
  /**
     * Getter for taller selected
     */
  get talleresList$() {
    return this._talleresList.asObservable();
  }
  /**
     * Getter for taller solicitudes list
     */
  get talleresSolicitudesList$() {
    return this._talleresSolicitudesList.asObservable();
  }
  /**
     * Getter for taller selected
     */
  get tallerSelected$() {
    return this._tallerSelected.asObservable();
  }
  /**
     * Getter for usuario selected
     */
  get usuariosList$() {
    return this._usuariosList.asObservable();
  }
  /**
     * Getter for usuario selected
     */
  get usuarioSelected$() {
    return this._usuarioSelected.asObservable();
  }
  /**
   * Constructor
   */
  constructor(_httpClient) {
    this._httpClient = _httpClient;
    this.url = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.urlWeb}`;
    this._manillasList = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(null);
    this._manillasProduccion = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(null);
    this._manillasSolicitud = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(null);
    this._manillasEstados = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(null);
    this._manillasEnviadas = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(null);
    this._userTypes = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(null);
    this._manillaSelected = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(null);
    // Talleres
    this._talleresList = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(null);
    this._talleresSolicitudesList = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(null);
    this._tallerSelected = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(null);
    // Usuarios
    this._usuariosList = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(null);
    this._usuarioSelected = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(null);
  }
  // -----------------------------------------------------------------------------------------------------
  // @ metodos manillas list
  // -----------------------------------------------------------------------------------------------------
  getManillasList(offset, limit, tipo, estado) {
    let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams();
    params = params.set("offset", offset);
    params = params.set("limit", limit);
    if (tipo !== null) {
      params = params.set("tipo", tipo);
    }
    ;
    if (estado !== null) {
      params = params.set("estado", estado);
    }
    ;
    return this._httpClient.get(`${this.url}manillas/findAll`, {
      params
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.tap)(response => {
      this._manillasList.next(response);
    }));
  }
  getManillasListUpdate(offset, limit, tipo, estado) {
    let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams();
    params = params.set("offset", offset);
    params = params.set("limit", limit);
    if (tipo !== null) {
      params = params.set("tipo", tipo);
    }
    ;
    if (estado !== null) {
      params = params.set("estado", estado);
    }
    ;
    return this._httpClient.get(`${this.url}manillas/findAll`, {
      params
    });
  }
  updateManillasList(list) {
    this._manillasList.next(list);
  }
  getUserTypes() {
    return this._httpClient.get(`${this.url}authentication/types`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.tap)(response => {
      this._userTypes.next(response);
    }));
  }
  getManillasEstados() {
    return this._httpClient.get(`${this.url}manillas/estados`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.tap)(response => {
      this._manillasEstados.next(response);
    }));
  }
  updateManillaSelected(manilla) {
    this._manillaSelected.next(manilla);
  }
  getManillaById(id) {
    return this._httpClient.get(`${this.url}manillas/findById/${id}`);
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Metodos manillas enviadas
  // -----------------------------------------------------------------------------------------------------
  getManillasEnviadas(offset, limit) {
    let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams();
    params = params.set("offset", offset);
    params = params.set("limit", limit);
    params = params.set("estado", 'Enviada');
    return this._httpClient.get(`${this.url}manillas/findAll`, {
      params
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.tap)(response => {
      this._manillasEnviadas.next(response);
    }));
  }
  getManillasEnviadasUpdate(offset, limit) {
    let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams();
    params = params.set("offset", offset);
    params = params.set("limit", limit);
    params = params.set("estado", 'Enviada');
    return this._httpClient.get(`${this.url}manillas/findAll`, {
      params
    });
  }
  updateManillasEnviadasList(list) {
    this._manillasEnviadas.next(list);
  }
  updateEstadoManillaEntregada(id) {
    let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams();
    params = params.set("estado", 'Entregada');
    return this._httpClient.patch(`${this.url}manillas/cambiarEstado/${id}`, {}, {
      params
    });
  }
  updateEstadoManillaEntregadaVarias(data) {
    let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams();
    params = params.set("estado", "Entregada");
    return this._httpClient.post(`${this.url}manillas/cambiarEstadoVarias`, data, {
      params
    });
  }
  updateEstadoManillaEnviadaVarias(data) {
    let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams();
    params = params.set("estado", "Enviada");
    return this._httpClient.post(`${this.url}manillas/cambiarEstadoVarias`, data, {
      params
    });
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Metodos manillas solicitudes
  // -----------------------------------------------------------------------------------------------------
  getManillasSolicitudesList(offset, limit) {
    let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams();
    params = params.set("offset", offset);
    params = params.set("limit", limit);
    return this._httpClient.get(`${this.url}manillas/solicitudes`, {
      params
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.tap)(response => {
      this._manillasSolicitud.next(response);
    }));
  }
  aceptarManillaById(id) {
    return this._httpClient.patch(`${this.url}manillas/aprobar/${id}`, {});
  }
  rechazarManillaById(id) {
    let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams();
    params = params.set("estado", 'Rechazada');
    return this._httpClient.patch(`${this.url}manillas/cambiarEstado/${id}`, {}, {
      params
    });
  }
  getManillasSolicitudesUpdate(offset, limit) {
    let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams();
    params = params.set("offset", offset);
    params = params.set("limit", limit);
    return this._httpClient.get(`${this.url}manillas/solicitudes`, {
      params
    });
  }
  updateManillasSolicitudesList(list) {
    this._manillasSolicitud.next(list);
  }
  aceptarVariasManillas(data) {
    return this._httpClient.post(`${this.url}manillas/aprobarVarias`, data);
  }
  aceptarTodasLasManillas() {
    return this._httpClient.post(`${this.url}manillas/aprobarTodas`, {});
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Metodos manillas produccion
  // -----------------------------------------------------------------------------------------------------
  getManillasProduction(offset, limit) {
    let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams();
    params = params.set("offset", offset);
    params = params.set("limit", limit);
    return this._httpClient.get(`${this.url}manillas/produccion`, {
      params
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.tap)(response => {
      this._manillasProduccion.next(response);
    }));
  }
  getManillasProductionUpdate(offset, limit) {
    let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams();
    params = params.set("offset", offset);
    params = params.set("limit", limit);
    return this._httpClient.get(`${this.url}manillas/produccion`, {
      params
    });
  }
  updateManillasProductionList(list) {
    this._manillasProduccion.next(list);
  }
  cambiarEstadoManilla(id, estado) {
    let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams();
    params = params.set("estado", estado);
    return this._httpClient.patch(`${this.url}manillas/cambiarEstado/${id}`, {}, {
      params
    });
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Metodos talleres
  // -----------------------------------------------------------------------------------------------------
  getTalleresSolicitudesList(offset, limit, name) {
    let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams();
    params = params.set("offset", offset);
    params = params.set("limit", limit);
    if (name !== null) {
      params = params.set("name", name);
    }
    ;
    return this._httpClient.get(`${this.url}users/All/talleres/pendientes`, {
      params
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.tap)(response => {
      this._talleresSolicitudesList.next(response);
    }));
  }
  getTalleresSolicitudesListUpdate(offset, limit, name) {
    let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams();
    params = params.set("offset", offset);
    params = params.set("limit", limit);
    if (name !== null) {
      params = params.set("name", name);
    }
    ;
    return this._httpClient.get(`${this.url}users/All/talleres/pendientes`, {
      params
    });
  }
  updateTalleresSolicitudesList(list) {
    this._talleresSolicitudesList.next(list);
  }
  getTalleresList(offset, limit, name) {
    let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams();
    params = params.set("offset", offset);
    params = params.set("limit", limit);
    if (name !== null) {
      params = params.set("name", name);
    }
    ;
    return this._httpClient.get(`${this.url}users/All/talleres`, {
      params
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.tap)(response => {
      this._talleresList.next(response);
    }));
  }
  getTalleresListUpdate(offset, limit, name) {
    let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams();
    params = params.set("offset", offset);
    params = params.set("limit", limit);
    if (name !== null) {
      params = params.set("name", name);
    }
    ;
    return this._httpClient.get(`${this.url}users/All/talleres`, {
      params
    });
  }
  updateTalleresList(list) {
    this._talleresList.next(list);
  }
  getTallereById(id) {
    return this._httpClient.get(`${this.url}users/taller/${id}`);
  }
  aceptarTallerById(id) {
    return this._httpClient.get(`${this.url}users/taller/aceptar`);
  }
  updateTallerSelected(taller) {
    this._tallerSelected.next(taller);
  }
  createTaller(data) {
    return this._httpClient.post(`${this.url}users/create/taller`, data);
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Metodos usuarios
  // -----------------------------------------------------------------------------------------------------
  getUsuariosList(offset, limit, name) {
    let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams();
    params = params.set("offset", offset);
    params = params.set("limit", limit);
    if (name !== null) {
      params = params.set("name", name);
    }
    ;
    return this._httpClient.get(`${this.url}users/All/clientes`, {
      params
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.tap)(response => {
      this._usuariosList.next(response);
    }));
  }
  getUsuariosListUpdate(offset, limit, name) {
    let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams();
    params = params.set("offset", offset);
    params = params.set("limit", limit);
    if (name !== null) {
      params = params.set("name", name);
    }
    ;
    return this._httpClient.get(`${this.url}users/All/clientes`, {
      params
    });
  }
  getUsuarioById(id) {
    return this._httpClient.get(`${this.url}users/cliente/${id}`);
  }
  updateUsuariosList(list) {
    this._usuariosList.next(list);
  }
  updateUsuarioSelected(usuario) {
    this._usuarioSelected.next(usuario);
  }
}
AdminService.ɵfac = function AdminService_Factory(t) {
  return new (t || AdminService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
};
AdminService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
  token: AdminService,
  factory: AdminService.ɵfac,
  providedIn: "root"
});


/***/ })

}]);
//# sourceMappingURL=default-src_app_admin_admin_resolver_ts.js.map