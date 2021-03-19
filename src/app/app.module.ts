import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './entity/user/user.component';
import { BienvenidoComponent } from './artifact/bienvenido/bienvenido.component';
import { LoginComponent } from './artifact/login/login.component';
import { ErrorComponent } from './artifact/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    BienvenidoComponent,
    LoginComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
