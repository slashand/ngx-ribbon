import { Injectable, ɵɵdefineInjectable, Component, NgModule } from '@angular/core';
import { NgxRibbonComponent as NgxRibbonComponent$1 } from 'projects/ngx-ribbon/src/lib/ngx-ribbon.component';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgxRibbonService {
    constructor() { }
}
NgxRibbonService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
NgxRibbonService.ctorParameters = () => [];
/** @nocollapse */ NgxRibbonService.ngInjectableDef = ɵɵdefineInjectable({ factory: function NgxRibbonService_Factory() { return new NgxRibbonService(); }, token: NgxRibbonService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgxRibbonComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() { }
}
NgxRibbonComponent.decorators = [
    { type: Component, args: [{
                selector: 'ngx-ngx-ribbon',
                template: `
    <p>
      ngx-ribbon works!
    </p>
  `
            }] }
];
/** @nocollapse */
NgxRibbonComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgxRibbonModule {
}
NgxRibbonModule.decorators = [
    { type: NgModule, args: [{
                declarations: [NgxRibbonComponent$1],
                imports: [],
                exports: [NgxRibbonComponent$1]
            },] }
];

export { NgxRibbonComponent, NgxRibbonModule, NgxRibbonService };
//# sourceMappingURL=ngx-ribbon.js.map
