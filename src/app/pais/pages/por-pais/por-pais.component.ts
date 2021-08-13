import { Component} from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent {

  termino : string = '';
  hayError : boolean =false;
  paises : Country[] = [];
  //para poder ocupar el servicio lo estamos inyectando para poder usar el metodo buscarporPais
  constructor( public paisService: PaisService) { }

  //Metodo para consumir api y para validar que si se pone un texto mal que aparezca el alert
  //II Es por eso que resp, que es lo que se recibe, ahora es reconocido como un arreglo y se pueden usar los metodos 
  //de un arreglo. Entonces al llamar al servicio, se recibe la info de tipo arreglo Country(que es la interface)

  buscar(termino : string){
    this.hayError = false;
    this.termino = termino;

    this.paisService.buscarPais(termino).subscribe(paises => {

      console.log(paises);
      this.paises = paises;

    }, (err) => {
    this.hayError = true;
    this.paises = [];
    }
    
    );

  }

  

}
