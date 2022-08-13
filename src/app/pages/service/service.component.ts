import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss'],
})
export class ServiceComponent implements OnInit {
  public dataServices = [
    {
      titulo1: 'Contenido',
      descripcion: 'Consejos que permitan a los usuarios agilizar su aprendizaje en el lenguaje de señas.',
      icono: 'fas fa-brain',
      modalInfo: [
        {
          nombre: 'Creativo desarrollador de experiencia de usuario',
        },
        {
          nombre: 'Desarrollador de interface de usuario',
        },
        {
          nombre: 'Desarrollador de paginas web',
        },
        {
          nombre: 'desrrollador de backend',
        },
      ],
    },
    {
      titulo1: 'Vocabulario',
      descripcion: 'Conjunto de palabras y oraciones las cuales utilizamos para comunicarnos día con día.',
      icono: 'fa fa-hands',
      modalInfo: [
        {
          nombre: 'Creativo desarrollador de experiencia de usuario',
        },
        {
          nombre: 'Desarrollador de interface de usuario',
        },
        {
          nombre: 'Desarrollador de paginas web',
        },
        {
          nombre: 'desrrollador de backend',
        },
      ],
    },
    {
      titulo1: 'Buscador',
      descripcion: 'Permite a los usuarios agilizar la búsqueda de vocabulario dentro de la aplicación.',
      icono: 'fas fa-search',
      modalInfo: [
        {
          nombre: 'Creativo desarrollador de experiencia de usuario',
        },
        {
          nombre: 'Desarrollador de interface de usuario',
        },
        {
          nombre: 'Desarrollador de paginas web',
        },
        {
          nombre: 'desrrollador de backend',
        },
      ],
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
