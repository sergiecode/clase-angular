import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JuegosRoutingModule } from './juegos-routing.module';
import { SolitarioComponent } from 'src/app/components/juegos/solitario/solitario.component';


@NgModule({
  declarations: [
    SolitarioComponent
  ],
  imports: [
    CommonModule,
    JuegosRoutingModule
  ]
})
export class JuegosModule { }
