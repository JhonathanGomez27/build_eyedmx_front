"use strict";
(self["webpackChunkmultikart"] = self["webpackChunkmultikart"] || []).push([["common"],{

/***/ 60331:
/*!***************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/firstValueFrom.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   firstValueFrom: () => (/* binding */ firstValueFrom)
/* harmony export */ });
/* harmony import */ var _util_EmptyError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/EmptyError */ 31967);
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Subscriber */ 58559);


function firstValueFrom(source, config) {
  const hasConfig = typeof config === 'object';
  return new Promise((resolve, reject) => {
    const subscriber = new _Subscriber__WEBPACK_IMPORTED_MODULE_0__.SafeSubscriber({
      next: value => {
        resolve(value);
        subscriber.unsubscribe();
      },
      error: reject,
      complete: () => {
        if (hasConfig) {
          resolve(config.defaultValue);
        } else {
          reject(new _util_EmptyError__WEBPACK_IMPORTED_MODULE_1__.EmptyError());
        }
      }
    });
    source.subscribe(subscriber);
  });
}

/***/ }),

/***/ 8099:
/*!*************************************************************!*\
  !*** ./node_modules/ngx-autosize/fesm2020/ngx-autosize.mjs ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AutosizeDirective: () => (/* binding */ AutosizeDirective),
/* harmony export */   AutosizeModule: () => (/* binding */ AutosizeModule),
/* harmony export */   WindowRef: () => (/* binding */ WindowRef)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);


class WindowRef {
  get nativeWindow() {
    return window;
  }
}
WindowRef.ɵfac = function WindowRef_Factory(t) {
  return new (t || WindowRef)();
};
WindowRef.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: WindowRef,
  factory: WindowRef.ɵfac
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WindowRef, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
  }], null, null);
})();
const MAX_LOOKUP_RETRIES = 3;
class AutosizeDirective {
  constructor(element, _window, _zone) {
    this.element = element;
    this._window = _window;
    this._zone = _zone;
    this.onlyGrow = false;
    this.useImportant = false;
    this.resized = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.autosize = true;
    this.retries = 0;
    this._destroyed = false;
    if (this.element.nativeElement.tagName !== 'TEXTAREA') {
      this._findNestedTextArea();
    } else {
      this.textAreaEl = this.element.nativeElement;
      this.textAreaEl.style['overflow-y'] = 'hidden';
      this._onTextAreaFound();
    }
  }
  set minRows(value) {
    this._minRows = +value;
    if (this.textAreaEl) {
      this.textAreaEl.rows = this._minRows;
    }
  }
  set _autosize(autosize) {
    this.autosize = typeof autosize === 'boolean' ? autosize : true;
  }
  onInput(textArea) {
    this.adjust();
  }
  ngOnDestroy() {
    this._destroyed = true;
    if (this._windowResizeHandler) {
      this._window.nativeWindow.removeEventListener('resize', this._windowResizeHandler, false);
    }
  }
  ngAfterContentChecked() {
    this.adjust();
  }
  ngOnChanges(changes) {
    this.adjust(true);
  }
  _findNestedTextArea() {
    this.textAreaEl = this.element.nativeElement.querySelector('TEXTAREA');
    if (!this.textAreaEl && this.element.nativeElement.shadowRoot) {
      this.textAreaEl = this.element.nativeElement.shadowRoot.querySelector('TEXTAREA');
    }
    if (!this.textAreaEl) {
      if (this.retries >= MAX_LOOKUP_RETRIES) {
        console.warn('ngx-autosize: textarea not found');
      } else {
        this.retries++;
        setTimeout(() => {
          this._findNestedTextArea();
        }, 100);
      }
      return;
    }
    this.textAreaEl.style['overflow-y'] = 'hidden';
    this._onTextAreaFound();
  }
  _onTextAreaFound() {
    this._addWindowResizeHandler();
    setTimeout(() => {
      this.adjust();
    });
  }
  _addWindowResizeHandler() {
    this._windowResizeHandler = debounce(() => {
      this._zone.run(() => {
        this.adjust();
      });
    }, 200);
    this._zone.runOutsideAngular(() => {
      this._window.nativeWindow.addEventListener('resize', this._windowResizeHandler, false);
    });
  }
  adjust(inputsChanged = false) {
    if (this.autosize && !this._destroyed && this.textAreaEl && this.textAreaEl.parentNode) {
      const currentText = this.textAreaEl.value;
      if (inputsChanged === false && currentText === this._oldContent && this.textAreaEl.offsetWidth === this._oldWidth) {
        return;
      }
      this._oldContent = currentText;
      this._oldWidth = this.textAreaEl.offsetWidth;
      const clone = this.textAreaEl.cloneNode(true);
      const parent = this.textAreaEl.parentNode;
      clone.style.width = this.textAreaEl.offsetWidth + 'px';
      clone.style.visibility = 'hidden';
      clone.style.position = 'absolute';
      clone.textContent = currentText;
      parent.appendChild(clone);
      clone.style['overflow-y'] = 'hidden';
      clone.style.height = 'auto';
      let height = clone.scrollHeight;
      // add into height top and bottom borders' width
      let computedStyle = this._window.nativeWindow.getComputedStyle(clone, null);
      height += parseInt(computedStyle.getPropertyValue('border-top-width'));
      height += parseInt(computedStyle.getPropertyValue('border-bottom-width'));
      if (computedStyle.getPropertyValue('box-sizing') === 'content-box') {
        height -= parseInt(computedStyle.getPropertyValue('padding-top'));
        height -= parseInt(computedStyle.getPropertyValue('padding-bottom'));
      }
      const oldHeight = this.textAreaEl.offsetHeight;
      const willGrow = height > oldHeight;
      if (this.onlyGrow === false || willGrow) {
        const lineHeight = this._getLineHeight();
        const rowsCount = height / lineHeight;
        if (this._minRows && this._minRows >= rowsCount) {
          height = this._minRows * lineHeight;
        } else if (this.maxRows && this.maxRows <= rowsCount) {
          // never shrink the textarea if onlyGrow is true
          const maxHeight = this.maxRows * lineHeight;
          height = this.onlyGrow ? Math.max(maxHeight, oldHeight) : maxHeight;
          this.textAreaEl.style['overflow-y'] = 'auto';
        } else {
          this.textAreaEl.style['overflow-y'] = 'hidden';
        }
        const heightStyle = height + 'px';
        const important = this.useImportant ? 'important' : '';
        this.textAreaEl.style.setProperty('height', heightStyle, important);
        this.resized.emit(height);
      }
      parent.removeChild(clone);
    }
  }
  _getLineHeight() {
    let lineHeight = parseInt(this.textAreaEl.style.lineHeight, 10);
    if (isNaN(lineHeight) && this._window.nativeWindow.getComputedStyle) {
      const styles = this._window.nativeWindow.getComputedStyle(this.textAreaEl);
      lineHeight = parseInt(styles.lineHeight, 10);
    }
    if (isNaN(lineHeight)) {
      const fontSize = this._window.nativeWindow.getComputedStyle(this.textAreaEl, null).getPropertyValue('font-size');
      lineHeight = Math.floor(parseInt(fontSize.replace('px', ''), 10) * 1.5);
    }
    return lineHeight;
  }
}
AutosizeDirective.ɵfac = function AutosizeDirective_Factory(t) {
  return new (t || AutosizeDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](WindowRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
};
AutosizeDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: AutosizeDirective,
  selectors: [["", "autosize", ""]],
  hostBindings: function AutosizeDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function AutosizeDirective_input_HostBindingHandler($event) {
        return ctx.onInput($event.target);
      });
    }
  },
  inputs: {
    minRows: "minRows",
    _autosize: ["autosize", "_autosize"],
    maxRows: "maxRows",
    onlyGrow: "onlyGrow",
    useImportant: "useImportant"
  },
  outputs: {
    resized: "resized"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AutosizeDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[autosize]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: WindowRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }];
  }, {
    minRows: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    _autosize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['autosize']
    }],
    maxRows: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    onlyGrow: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    useImportant: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    resized: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onInput: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['input', ['$event.target']]
    }]
  });
})();
function debounce(func, timeout) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func(...args);
    }, timeout);
  };
}
class AutosizeModule {}
AutosizeModule.ɵfac = function AutosizeModule_Factory(t) {
  return new (t || AutosizeModule)();
};
AutosizeModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: AutosizeModule
});
AutosizeModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  providers: [WindowRef],
  imports: [[]]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AutosizeModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      declarations: [AutosizeDirective],
      imports: [],
      providers: [WindowRef],
      exports: [AutosizeDirective]
    }]
  }], null, null);
})();

/*
 * Public API Surface of ngx-autosize
 */

/**
 * Generated bundle index. Do not edit.
 */



/***/ })

}]);
//# sourceMappingURL=common.76d8089021488a29.js.map