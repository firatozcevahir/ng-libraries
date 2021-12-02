import { Component, OnInit } from '@angular/core';
import { DevelopmentBannerService } from '../development-banner.service';
import { BannerServiceConfig } from '../models/banner-service-config.model';

@Component({
  selector: 'development-banner',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {


  showPanel = true;

  get config(): BannerServiceConfig {
    return this.bannerService.config;
  }

  constructor(
    private bannerService: DevelopmentBannerService
  ) {
   }

  ngOnInit(): void {
  }

  closePanel(): void {
    this.showPanel = false;
  }


}
