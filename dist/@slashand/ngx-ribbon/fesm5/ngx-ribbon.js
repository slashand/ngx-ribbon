import { ɵɵdefineInjectable, Injectable, Component, NgModule } from '@angular/core';
import { NgxRibbonComponent as NgxRibbonComponent$1 } from 'projects/ngx-ribbon/src/lib/ngx-ribbon.component';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgxRibbonService = /** @class */ (function () {
    function NgxRibbonService() {
    }
    NgxRibbonService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    NgxRibbonService.ctorParameters = function () { return []; };
    /** @nocollapse */ NgxRibbonService.ngInjectableDef = ɵɵdefineInjectable({ factory: function NgxRibbonService_Factory() { return new NgxRibbonService(); }, token: NgxRibbonService, providedIn: "root" });
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
        { type: Component, args: [{
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
        { type: NgModule, args: [{
                    declarations: [NgxRibbonComponent$1],
                    imports: [],
                    exports: [NgxRibbonComponent$1]
                },] }
    ];
    return NgxRibbonModule;
}());

export { NgxRibbonComponent, NgxRibbonModule, NgxRibbonService };
//# sourceMappingURL=ngx-ribbon.js.map
