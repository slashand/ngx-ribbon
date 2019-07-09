import {
    ChangeDetectionStrategy, Component, ContentChild, ContentChildren, HostBinding, Input, OnInit,
    QueryList, ViewEncapsulation
} from '@angular/core';

import { Guid } from 'projects/ngx-ribbon/src/lib/util/guid';
import { ValidateViewPortUnits } from './util/validate-viewport-units';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  selector: 'ngx-ngx-ribbon',
  template: `
    <div [id]="id" [ngStyle]="{ width: width }">
      <ng-content></ng-content>
    </div>
  `
})
export class NgxRibbonComponent {
  id = Guid.blank();
  width = '100%';

  @Input('ribbonId') set ribbon(value: string) {
    this.id = Guid.isGuid(value) ? value : Guid.create().toString();
  }
  get ribbon() {
    return this.id;
  }

  @Input('width')
  set setWidth(value: any) {
    if (ValidateViewPortUnits(value)) {
      this.width = value;
    } else if (!isNaN(value)) {
      this.width = value + 'px';
    }
  }
}
