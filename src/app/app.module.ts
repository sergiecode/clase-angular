import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { MultijugadorComponent } from './components/juegos/multijugador/multijugador.component';
import { AjedrezComponent } from './components/juegos/ajedrez/ajedrez.component';
import { JuegosComponent } from './components/juegos/juegos.component';
import { InputComponent } from './components/juegos/multijugador/input/input.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MultijugadorComponent,
    AjedrezComponent,
    JuegosComponent,
    InputComponent
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
