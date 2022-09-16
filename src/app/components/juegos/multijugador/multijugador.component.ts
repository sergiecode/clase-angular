import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-multijugador',
  templateUrl: './multijugador.component.html',
  styleUrls: ['./multijugador.component.css']
})
export class MultijugadorComponent implements OnInit {
  @Input('juegos') jueguitos:any

  juegosDeHijo:any

  constructor() { }

  ngOnInit(): void {
  }

  handlerDatos(e:any){
    this.juegosDeHijo = e
  }

}
