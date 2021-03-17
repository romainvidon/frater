import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { JwtModule, JWT_OPTIONS } from '@auth0/angular-jwt';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { IonicStorageModule, Storage } from '@ionic/storage';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorModule } from './error/error.module';
import { SliderModule } from './slider/slider.module';
import { MenuhamburgerModule } from './menuhamburger/menuhamburger.module';
import { TabsModule } from './tabs/tabs.module';
import { PatternHeaderModule } from './pattern-header/pattern-header.module';
import { UserDetailsModule } from './user-details/user-details.module';
import { environment } from 'src/environments/environment';

export function jwtOptionsFactory(storage: Storage) {
  return {
    tokenGetter: () => {
      return storage.get('access_token');
    },
    allowedDomains: environment.allowedDomains,
    disallowedRoutes: [environment.apiUrl + "/authentification"],
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
    PatternHeaderModule,
    ErrorModule,
    UserDetailsModule,
    TabsModule,
    MenuhamburgerModule,
    SliderModule,
    JwtModule.forRoot({
    jwtOptionsProvider:{
      provide: JWT_OPTIONS,
      useFactory: jwtOptionsFactory,
      deps: [Storage],
    },
  })],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
