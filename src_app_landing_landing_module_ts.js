"use strict";
(self["webpackChunkmultikart"] = self["webpackChunkmultikart"] || []).push([["src_app_landing_landing_module_ts"],{

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _user_info_user_info_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-info/user-info.component */ 84882);
/* harmony import */ var _landing_resolver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./landing.resolver */ 27155);
/* harmony import */ var _inicio_inicio_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inicio/inicio.component */ 21194);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 61699);






const routes = [{
  path: 'u/:id',
  component: _user_info_user_info_component__WEBPACK_IMPORTED_MODULE_0__.UserInfoComponent,
  resolve: {
    manilla: _landing_resolver__WEBPACK_IMPORTED_MODULE_1__.UserInfoResolver
  }
}, {
  path: 'inicio',
  component: _inicio_inicio_component__WEBPACK_IMPORTED_MODULE_2__.InicioComponent
}];
class LandingRoutingModule {}
LandingRoutingModule.ɵfac = function LandingRoutingModule_Factory(t) {
  return new (t || LandingRoutingModule)();
};
LandingRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: LandingRoutingModule
});
LandingRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](LandingRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var ng_gallery__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-gallery */ 60977);
/* harmony import */ var ng_gallery_lightbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-gallery/lightbox */ 23050);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/shared.module */ 56208);
/* harmony import */ var _landing_routing_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./landing-routing.component */ 72056);
/* harmony import */ var ngx_autosize__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-autosize */ 8099);
/* harmony import */ var _user_info_user_info_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-info/user-info.component */ 84882);
/* harmony import */ var _inicio_inicio_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inicio/inicio.component */ 21194);
/* harmony import */ var _widgets_slider_slider_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./widgets/slider/slider.component */ 8723);
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-mask */ 97728);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 61699);











class LandingModule {}
LandingModule.ɵfac = function LandingModule_Factory(t) {
  return new (t || LandingModule)();
};
LandingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
  type: LandingModule
});
LandingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
  providers: [(0,ngx_mask__WEBPACK_IMPORTED_MODULE_6__.provideNgxMask)()],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, ng_gallery__WEBPACK_IMPORTED_MODULE_8__.GalleryModule, ng_gallery_lightbox__WEBPACK_IMPORTED_MODULE_9__.LightboxModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _landing_routing_component__WEBPACK_IMPORTED_MODULE_1__.LandingRoutingModule, ngx_autosize__WEBPACK_IMPORTED_MODULE_10__.AutosizeModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](LandingModule, {
    declarations: [_user_info_user_info_component__WEBPACK_IMPORTED_MODULE_2__.UserInfoComponent, _inicio_inicio_component__WEBPACK_IMPORTED_MODULE_3__.InicioComponent, _widgets_slider_slider_component__WEBPACK_IMPORTED_MODULE_4__.SliderComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, ng_gallery__WEBPACK_IMPORTED_MODULE_8__.GalleryModule, ng_gallery_lightbox__WEBPACK_IMPORTED_MODULE_9__.LightboxModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _landing_routing_component__WEBPACK_IMPORTED_MODULE_1__.LandingRoutingModule, ngx_autosize__WEBPACK_IMPORTED_MODULE_10__.AutosizeModule, ngx_mask__WEBPACK_IMPORTED_MODULE_6__.NgxMaskDirective, ngx_mask__WEBPACK_IMPORTED_MODULE_6__.NgxMaskPipe]
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
/* harmony export */   UserInfoResolver: () => (/* binding */ UserInfoResolver)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 2389);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 33252);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _landing_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./landing.service */ 18599);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 27947);




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
    (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.catchError)(error => {
      // Log the error
      console.error(error);
      // Get the parent url
      const parentUrl = state.url.split('/').slice(0, -1).join('/');
      // Navigate to there
      this._router.navigateByUrl(parentUrl);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.throwError)(error);
    }));
  }
}
UserInfoResolver.ɵfac = function UserInfoResolver_Factory(t) {
  return new (t || UserInfoResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_landing_service__WEBPACK_IMPORTED_MODULE_0__.LandingService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router));
};
UserInfoResolver.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: UserInfoResolver,
  factory: UserInfoResolver.ɵfac,
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
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "img", 23);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 24);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 25);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 25);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 26);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 26);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 26);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 28)(1, "div", 29)(2, "div", 30)(3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 31)(7, "h6", 32);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 28)(1, "div", 29)(2, "div", 30)(3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 31)(7, "h6", 32);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 28)(1, "div", 29)(2, "div", 30)(3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 31)(7, "h6", 32);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, UserInfoComponent_ng_container_26_div_1_Template, 9, 4, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, UserInfoComponent_ng_container_26_div_2_Template, 10, 7, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, UserInfoComponent_ng_container_26_div_3_Template, 10, 7, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const field_r10 = ctx.$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", field_r10.type !== "telefono" && field_r10.type !== "file" && field_r10.type !== "Date" && ctx_r7.manilla[field_r10.name] !== "" && !field_r10.private);
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
  decls: 32,
  vars: 10,
  consts: [[3, "title", "breadcrumb"], [1, "contact-page", "section-b-space"], [1, "container"], [1, "row", "section-b-space"], [1, "col-lg-4", "map"], [1, "contenedor-img-box"], [1, "contenedor-perfil-image"], ["class", "image-perfil", "alt", "", 3, "src", "click", 4, "ngIf"], ["class", "no-image-perfil", 4, "ngIf"], ["class", "nombre-portador", 4, "ngIf"], ["class", "datos-moto", 4, "ngIf"], [1, "col-lg-8"], [1, "informacion-manilla"], [1, "dashboard-right"], [1, "dashboard"], [1, "box-account", "box-info"], [1, "box-head"], [1, "row"], [4, "ngFor", "ngForOf"], [1, "divider"], [1, "col-sm-12", "mb-4"], [1, "d-grid", "btn-emergencia"], ["href", "//api.whatsapp.com/send?phone=+523344532344&text=Hola", "target", "_blank", 1, "btn", "btn-warning"], ["alt", "", 1, "image-perfil", 3, "src", "click"], [1, "no-image-perfil"], [1, "nombre-portador"], [1, "datos-moto"], ["class", "col-sm-6", 4, "ngIf"], [1, "col-sm-6"], [1, "box"], [1, "box-title"], [1, "box-content", "informacion-manilla-label"], [1, "nombre-contacto"]],
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
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Informacion pulsera");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](26, UserInfoComponent_ng_container_26_Template, 4, 3, "ng-container", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](27, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 20)(29, "div", 21)(30, "a", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "EMERGENCIA");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("title", "Informacion Manilla")("breadcrumb", "Informacion Manilla");
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
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.fieldsList);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__.BreadcrumbComponent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.TitleCasePipe, _angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe, ngx_mask__WEBPACK_IMPORTED_MODULE_8__.NgxMaskPipe],
  styles: [".informacion-manilla[_ngcontent-%COMP%] {\n  padding-right: 20px;\n  padding-left: 20px;\n  padding-bottom: 20px;\n}\n.informacion-manilla[_ngcontent-%COMP%]   .informacion-manilla-label[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  margin-left: 10px;\n  font-size: 20px;\n}\n.informacion-manilla[_ngcontent-%COMP%]   .informacion-manilla-titulo[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 21px;\n}\n.informacion-manilla[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%] {\n  background-color: rgb(215, 215, 215) !important;\n}\n.informacion-manilla[_ngcontent-%COMP%]   .btn-emergencia[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: 40px;\n  line-height: 100% !important;\n  padding-bottom: 15px;\n}\n\n.divider[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n\n.nombre-portador[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: bolder;\n  color: black;\n  text-align: center;\n  margin: 0px;\n}\n\n.datos-moto[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: bolder;\n  color: rgb(58, 58, 58);\n  text-align: center;\n  margin: 0px;\n}\n\n.contenedor-img-box[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  align-items: center;\n  justify-content: center;\n}\n.contenedor-img-box[_ngcontent-%COMP%]   .contenedor-perfil-image[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-top: 10px;\n  width: 200px;\n  height: 200px;\n  border-radius: 50%;\n  overflow: hidden;\n}\n.contenedor-img-box[_ngcontent-%COMP%]   .contenedor-perfil-image[_ngcontent-%COMP%]   .image-perfil[_ngcontent-%COMP%] {\n  object-fit: cover;\n  width: 100%;\n  height: 100%;\n}\n.contenedor-img-box[_ngcontent-%COMP%]   .contenedor-perfil-image[_ngcontent-%COMP%]   .no-image-perfil[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  background-color: rgb(188, 188, 188);\n  color: rgb(78, 78, 78);\n  font-weight: bold;\n  font-size: 70px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbGFuZGluZy91c2VyLWluZm8vdXNlci1pbmZvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0FBQ0o7QUFFUTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtBQUFaO0FBS1E7RUFDSSxlQUFBO0FBSFo7QUFPSTtFQUNJLCtDQUFBO0FBTFI7QUFTUTtFQUNJLGVBQUE7RUFDQSw0QkFBQTtFQUNBLG9CQUFBO0FBUFo7O0FBWUE7RUFDSSxnQkFBQTtBQVRKOztBQVlBO0VBQ0ksZUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQVRKOztBQVlBO0VBQ0ksZUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFUSjs7QUFZQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBVEo7QUFXSTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFUUjtBQVdRO0VBQ0ksaUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQVRaO0FBWVE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBVloiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5mb3JtYWNpb24tbWFuaWxsYXtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxuXHJcbiAgICAuaW5mb3JtYWNpb24tbWFuaWxsYS1sYWJlbHtcclxuICAgICAgICBoNntcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmluZm9ybWFjaW9uLW1hbmlsbGEtdGl0dWxve1xyXG4gICAgICAgIGgze1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIxcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5ib3gtdGl0bGV7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxNSwgMjE1LCAyMTUpICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLmJ0bi1lbWVyZ2VuY2lhe1xyXG4gICAgICAgIGF7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDE1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uZGl2aWRlcntcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuXHJcbi5ub21icmUtcG9ydGFkb3J7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbn1cclxuXHJcbi5kYXRvcy1tb3Rve1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICAgIGNvbG9yOiByZ2IoNTgsIDU4LCA1OCk7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDBweDtcclxufVxyXG5cclxuLmNvbnRlbmVkb3ItaW1nLWJveHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICAgIC5jb250ZW5lZG9yLXBlcmZpbC1pbWFnZXtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAyMDBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIFxyXG4gICAgICAgIC5pbWFnZS1wZXJmaWx7XHJcbiAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIC5uby1pbWFnZS1wZXJmaWx7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTg4LCAxODgsIDE4OCk7XHJcbiAgICAgICAgICAgIGNvbG9yOiByZ2IoNzgsIDc4LCA3OCk7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDcwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
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
//# sourceMappingURL=src_app_landing_landing_module_ts.js.map