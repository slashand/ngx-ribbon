import { TestBed } from '@angular/core/testing';

import { NgxRibbonService } from 'projects/ngx-ribbon/src/lib/ngx-ribbon.service';

describe('NgxRibbonService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxRibbonService = TestBed.get(NgxRibbonService);
    expect(service).toBeTruthy();
  });
});
