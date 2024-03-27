import { APP_INITIALIZER, CUSTOM_ELEMENTS_SCHEMA, ErrorHandler, NgModule, NgZone } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { ConfigService } from './config.service';
import { Observable } from 'rxjs';

function appInitialization(envConfigLibService:ConfigService) :()=>Observable<any>{
  return ()=>envConfigLibService.setConfigurationDetails() 
}


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide:APP_INITIALIZER,
      useFactory:appInitialization,
      deps:[ConfigService],
      multi:true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  /*
for angular element integration
  */
  constructor(private ngZone:NgZone){
    (window as any).ngZone=this.ngZone; //store ngZone reference in the parent object
  }
 }
