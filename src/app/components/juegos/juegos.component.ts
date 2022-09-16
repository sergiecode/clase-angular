import { Component, OnInit } from '@angular/core';
// import { juegosMock } from 'src/app/mock/juegos.mock';

@Component({
  selector: 'app-juegos',
  templateUrl: './juegos.component.html',
  styleUrls: ['./juegos.component.css']
})
export class JuegosComponent implements OnInit {
  juegos = [
    {
        nombre: 'Solitario',
        dificultad: 'Baja'
    },
    {
        nombre: 'Ajedrez',
        dificultad: 'Alta'
    },
    {
        nombre: 'Futbol',
        dificultad: 'Media'
    },
    {
        nombre: 'Doom',
        dificultad: 'Baja'
    },
]
  
  constructor() { }

  ngOnInit(): void {
    // this.juegos = juegosMock
  }

}
