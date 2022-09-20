import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjedrezComponent } from 'src/app/components/juegos/ajedrez/ajedrez.component';
import { JuegosComponent } from 'src/app/components/juegos/juegos.component';
import { MultijugadorComponent } from 'src/app/components/juegos/multijugador/multijugador.component';
import { SolitarioComponent } from 'src/app/components/juegos/solitario/solitario.component';

const routes: Routes = [
  {
    path: '',
    component: JuegosComponent,
    children: [
      {
        path: 'solitario',
        component: SolitarioComponent,
      },
      {
        path: 'multijugador',
        component: MultijugadorComponent,
      },
      {
        path: 'ajedrez',
        component: AjedrezComponent,
      },
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JuegosRoutingModule { }
