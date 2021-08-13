import { Component, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [
  ]
})
export class PaisInputComponent  {
//del componente hijo al padre con Output. Con esto quiero decir
  //que estos componentes vienen del hijo Hacia el padre
  @Output () onEnter : EventEmitter<string> = new EventEmitter();  //esto significa voy a enviar algo llamnado onEnter hacia compon padre
  @Output () onDebounce : EventEmitter<string> = new EventEmitter();
//quede hasta aqui video 110
 termino : string = '';

 //este metodo busca emitir o enviar  el termino string (III)
  buscar(){
    this.onEnter.emit(this.termino);
  }
}
