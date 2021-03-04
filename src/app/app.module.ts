import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { JwtModule, JWT_OPTIONS } from '@auth0/angular-jwt';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { IonicStorageModule, Storage } from '@ionic/storage';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

export function jwtOptionsFactory(storage: Storage) {
  return {
    tokenGetter: () => {
      //return storage.get('access_token');
      return "";
    },
    allowedDomains: ["localhost:3030","127.0.0.1:3030"]
  }
}
 

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(),
    IonicStorageModule.forRoot(),
    AppRoutingModule,
    JwtModule.forRoot({
    jwtOptionsProvider:{
      provide: JWT_OPTIONS,
      useFactory: jwtOptionsFactory,
      deps: [Storage],
    }
  })],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
