import { Component } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: [
  ]
})
export class PromesasComponent {

  ngOnInit(): void {
    const promesa = new Promise( ( resolve, reject ) => {
      if (false) {
        resolve('Hola Mundo');
      } else {
        reject('Algo sálio mal');
      }
    });

    promesa.then( (mensaje) => {
      console.log(mensaje);
    })
    .catch( error => console.log('Error en mi promesa') );

    console.log('Fin del Init');

  }
  
}
