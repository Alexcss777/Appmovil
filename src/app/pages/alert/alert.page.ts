import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Placeholder } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {
  titulo: string;
  
 

  constructor(public alertCtrl: AlertController) { }

  ngOnInit() {
  }

  async presentInput(){
    const input = await this.alertCtrl.create({
   header: 'Input',
   subHeader: 'Ingrese su nombre',
   inputs: [
     {
     name: 'txtNombre',
     type: 'text',
     placeholder: 'Nombre'
     },
   ],
   buttons: [ {
    text: 'Cancel',
    role: 'cancel',
    cssClass: 'secondary',
    handler: () => {
      console.log('Confirm Cancel: blah');
    }
  },  {
    text: 'OK',
    handler: (data) => {
      console.log('Boton OK', data);
      this.titulo = data.txtNombre;
    }
  },
]
    });
    await input.present();
  }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: [ {
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'secondary',
        handler: () => {
          console.log('Confirm Cancel: blah');
        }
      },  {
        text: 'OK',
        handler: () => {
          console.log('Boton OK');
        }
      },
    ]
    });

    await alert.present();
  }




}
