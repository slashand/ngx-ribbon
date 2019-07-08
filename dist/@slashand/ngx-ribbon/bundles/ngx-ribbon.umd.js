(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('projects/ngx-ribbon/src/lib/ngx-ribbon.component')) :
    typeof define === 'function' && define.amd ? define('ngx-ribbon', ['exports', '@angular/core', 'projects/ngx-ribbon/src/lib/ngx-ribbon.component'], factory) :
    (global = global || self, factory(global['ngx-ribbon'] = {}, global.ng.core, global.NgxRibbonComponent));
}(this, function (exports, core, ngxRibbon_component) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgxRibbonService = /** @class */ (function () {
        function NgxRibbonService() {
        }
        NgxRibbonService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        NgxRibbonService.ctorParameters = function () { return []; };
        /** @nocollapse */ NgxRibbonService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function NgxRibbonService_Factory() { return new NgxRibbonService(); }, token: NgxRibbonService, providedIn: "root" });
        return NgxRibbonService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgxRibbonComponent = /** @class */ (function () {
        function NgxRibbonComponent() {
        }
        /**
         * @return {?}
         */
        NgxRibbonComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () { };
        NgxRibbonComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'ngx-ngx-ribbon',
                        template: "\n    <p>\n      ngx-ribbon works!\n    </p>\n  "
                    }] }
        ];
        /** @nocollapse */
        NgxRibbonComponent.ctorParameters = function () { return []; };
        return NgxRibbonComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgxRibbonModule = /** @class */ (function () {
        function NgxRibbonModule() {
        }
        NgxRibbonModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [ngxRibbon_component.NgxRibbonComponent],
                        imports: [],
                        exports: [ngxRibbon_component.NgxRibbonComponent]
                    },] }
        ];
        return NgxRibbonModule;
    }());

    exports.NgxRibbonComponent = NgxRibbonComponent;
    exports.NgxRibbonModule = NgxRibbonModule;
    exports.NgxRibbonService = NgxRibbonService;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=ngx-ribbon.umd.js.map
