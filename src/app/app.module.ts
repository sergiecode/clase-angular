import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { MultijugadorComponent } from './components/multijugador/multijugador.component';
import { AjedrezComponent } from './components/ajedrez/ajedrez.component';
import { JuegosComponent } from './components/juegos/juegos.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MultijugadorComponent,
    AjedrezComponent,
    JuegosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
