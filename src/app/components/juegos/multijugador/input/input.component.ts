import { Component, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  @Output() datosHijo: EventEmitter<any> = new EventEmitter();
  newInfo = {
    nombre: 'Basket',
    dificultad: 'Alta'
  }


  constructor() {

  }

  ngOnInit(): void {
  }

  enviandoDatos(){
    this.datosHijo.emit(this.newInfo)
    console.log(this.newInfo)
  }


}
