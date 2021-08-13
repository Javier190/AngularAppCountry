import { Component, Input, OnInit } from '@angular/core';

import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-pais-tabla',
  templateUrl: './pais-tabla.component.html',
  styles: [
  ]
})
export class PaisTablaComponent implements OnInit {
  //del componente padre al hijo con input. Con esto quiero decir
  //que estos componentes vienen del padre
  //este componente tabla es el que recibe desde el padre la data

  @Input() paises : Country[] = [];    //esto significa voy a recibir algo llamnado paises que es de tipo. y que viene del Componente Padre

  constructor() { }

  ngOnInit(): void {
  }

}
