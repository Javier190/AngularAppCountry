import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interface';



@Injectable({
  providedIn: 'root'
})
export class PaisService {

  //Esta es la url o endpoint que no cambia. 
  private apiUrl : string = 'https://restcountries.eu/rest/v2';

  //aca estamos inyectando el servicio HttpClient en el constructor de este compom
  constructor(private http: HttpClient) { }

  //Primero se creo un archivo de pais.interface para ver como vienen los datos.
  //como sabemos que se recibe un arreglo de paises, porque lo probamos con postman y luego quitype
  //hay que poner que se recibe un obserbavle de tipo arreglo<Country>
  //y tambien cambiar el get porque traer cuelquier cosa.
  //II
  buscarPais(termino : string) : Observable<Country[]>{

    const url = `${this.apiUrl}/name/${termino}`;
      return this.http.get<Country[]>(url);
  }

}
