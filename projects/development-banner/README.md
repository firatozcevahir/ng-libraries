
This Library is Built to show development banner on the screen

Works with Angular v12

**INSTALLATION**

    npm i development-banner --save

  

**USAGE**

Add **DevelopmentBannerModule** to your **_app.module.ts_**

    import { NgModule } from '@angular/core';
    import { BrowserModule } from '@angular/platform-browser';
    import { DevelopmentBannerModule } from 'development-banner';
    import { AppRoutingModule } from './app-routing.module';
    import { AppComponent } from './app.component';  
    
    @NgModule({
	    declarations: [
			AppComponent
		],
	    imports: [
		    BrowserModule,
		    AppRoutingModule,
		    DevelopmentBannerModule.forRoot()
	    ],
	    providers: [],
	    bootstrap: [AppComponent]
    })
    
    export class AppModule {
    }

Then you can add `<development-banner></development-banner>` to your `app.component.ts`

<br>
<br>
<br>

**CONFIGURATION**
You can configure your banner in your `app.module.ts` 

_For Example:_

    DevelopmentBannerModule.forRoot({animatedText: true})

**Properties**
| property name | type | default value | description |
| -- | -- | -- | -- | -- | -- | 
| *align*  | string | center | alignment of the banner |
| *textAlign* | string | center | the text alignment |
| valign* | string | top | vertical alignment of the banner | 
|*fixed* | boolean| false| to make the banner fixed on the screen |
|*transparent*| boolean| false |to make the banner transparent or opaque|
|*fullWidth* | boolean| true|to make the banner' width 100% or fit-content|
|*text*| string|DEVELOPMENT MODE ON!!|the text shown on the banner|
|*panelClass*|string|development-banner-container|panel class of the banner|
|*closeable*|boolean|true|to make the banner closeable or not|
|*animatedText*|boolean|false|to make text animated|
|*animationBehavior*|string|scroll|to change the animation behavior of text|
|*animationSpeed*|number|500|to change text's animation speed|
