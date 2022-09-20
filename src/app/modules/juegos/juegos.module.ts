import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JuegosRoutingModule } from './juegos-routing.module';
import { SolitarioComponent } from 'src/app/components/juegos/solitario/solitario.component';
import { MultijugadorComponent } from 'src/app/components/juegos/multijugador/multijugador.component';
import { AjedrezComponent } from 'src/app/components/juegos/ajedrez/ajedrez.component';
import { JuegosComponent } from 'src/app/components/juegos/juegos.component';
import { InputComponent } from 'src/app/components/juegos/multijugador/input/input.component';


@NgModule({
  declarations: [
    SolitarioComponent,
    MultijugadorComponent,
    AjedrezComponent,
    JuegosComponent,
    InputComponent
    
  ],
  imports: [
    CommonModule,
    JuegosRoutingModule
  ]
})
export class JuegosModule { }
