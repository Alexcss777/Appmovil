import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes: Componentes [] = [
   {
     icon: 'american-football',
     name:  'Action Sheet',
     redirecTo: '/action-sheet'

   },
   {
    icon: 'appstore',
    name:  'Alert',
    redirecTo: '/alert'
   },

   {
    icon: 'beaker',
    name:  'avatar',
    redirecTo: '/avatar'
   },

   {
    icon: 'radio-button-on',
    name:  'Botones y router',
    redirecTo: '/botones',
   },

   {
    icon: 'radio-button-on',
    name:  'ejercicio 3 card',
    redirecTo: '/ejercicio3',
   },

   {
    icon: 'checkmark-circle-outline',
    name:  'Checkbox',
    redirecTo: '/check',
   },

   {
    icon: 'calendar',
    name:  'DateTime',
    redirecTo: '/datatimes',
   },
   {
    icon: 'car',
    name:  'Fabs',
    redirecTo: '/fab',
   },

   {
    icon: 'grid',
    name:  'Grid - Rows',
    redirecTo: '/grid',
   }


  ];

  constructor() { }

  ngOnInit() {
  }

}

interface Componentes{
  icon: string;
  name: string;
  redirecTo: string;
}
