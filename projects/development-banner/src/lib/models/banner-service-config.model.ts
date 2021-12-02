export class BannerServiceConfig {
  align?: 'left' | 'right' | 'center'= 'center';
  textAlign?: 'left' | 'right' | 'center'= 'center';
  valign?: 'top' | 'bottom' = 'top';
  fixed?: boolean = false;
  transparent?: boolean = false;
  fullWidth?: boolean = true;
  text?: string = 'DEVELOPMENT MODE ON!!';
  panelClass?: string = 'development-banner-container';
  closeable?: boolean = true;
  animatedText?: boolean = false;
  animationBehavior?: 'alternate' | 'slide' | 'scroll' = 'scroll';
  animationSpeed?: number = 6;
}
