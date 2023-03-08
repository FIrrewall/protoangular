import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {

  equipo:any[]=[
    {
      nombre: 'Ignacio',
      especialidad: 'HTML',
      descripcion: 'Un bloqueador de anuncios o adblocker es un programa de software diseñado para eliminar o controlar diferentes tipos de contenido publicitario dentro de una página web.'
    },
    {
      nombre: 'Maria',
      especialidad: 'CSS',
      descripcion: 'Un bloqueador de anuncios o adblocker es un programa de software diseñado para eliminar o controlar diferentes tipos de contenido publicitario dentro de una página web.'
    }
  ]
  constructor() { 
    console.log('Funcionando Servicio');
  }

  obtenerEquipo(){
    return this.equipo;
  }

}
