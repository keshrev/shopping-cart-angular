import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ImgFallbackModule } from 'ngx-img-fallback';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppComponent } from './app.component';
import { NoContentComponent } from './no-content/no-content.component';

// The translate loader needs to know where to load i18n files
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}


@NgModule({
  // Root level compoent declarations.
  declarations: [
    AppComponent,
    NoContentComponent
  ],
  // Modules required for Root level dependencies
  imports: [
    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    AppRoutingModule,
    ImgFallbackModule
  ],
  providers: [], // Services declared here will acts a global service(single instance) if the the same is not declared anywhere except here.
  bootstrap: [AppComponent] // Launching a root component.
})
export class AppModule { }
