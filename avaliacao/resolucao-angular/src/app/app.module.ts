import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { UIRouterModule } from '@uirouter/angular';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';

import { ContatoModule } from './contato/contato.module';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    ContatoModule,
    UIRouterModule.forRoot()
  ],
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }