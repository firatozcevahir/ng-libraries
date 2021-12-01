import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';

import { MainComponent } from './main/main.component';
import { BannerServiceConfig } from './models/banner-service-config.model';



@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MainComponent
  ]
})
export class DevelopmentBannerModule {

  constructor(
    @Optional() @SkipSelf() parentModule?: DevelopmentBannerModule
  ) {
    if (parentModule) {
      throw new Error(
        'DevelopmentBannerModule is already loaded. Import it in the AppModule only');
    }
  }

  static forRoot(config?: BannerServiceConfig): ModuleWithProviders<DevelopmentBannerModule> {

    const finalConfig = new BannerServiceConfig();
    Object.assign(finalConfig, config);

    return {
      ngModule: DevelopmentBannerModule,
      providers: [
        { provide: BannerServiceConfig, useValue: finalConfig }
      ]
    };
  }
}
