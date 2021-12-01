import { Injectable, Optional } from '@angular/core';
import { BannerServiceConfig } from './models/banner-service-config.model';

@Injectable({
  providedIn: 'root'
})
export class DevelopmentBannerService {

  public config = new BannerServiceConfig();
  constructor(
    private configuration: BannerServiceConfig
  ) {
    this.config = this.configuration;
  }
}
