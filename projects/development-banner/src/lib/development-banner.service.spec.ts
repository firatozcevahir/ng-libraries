import { TestBed } from '@angular/core/testing';

import { DevelopmentBannerService } from './development-banner.service';

describe('DevelopmentBannerService', () => {
  let service: DevelopmentBannerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DevelopmentBannerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
