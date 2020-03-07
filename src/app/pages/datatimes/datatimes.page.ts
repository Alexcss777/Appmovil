import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datatimes',
  templateUrl: './datatimes.page.html',
  styleUrls: ['./datatimes.page.scss'],
})
export class DatatimesPage implements OnInit {
   fechaNaci: Date = new Date();
   customPickerOptions;
   customDate;

  constructor() { }

  ngOnInit() {
    this.customPickerOptions = {
      buttons: [{
        text: 'Save',
        handler: ( evento ) => {console.log('Clicked Save!');
                                console.log(evento);
        }
      }, {
        text: 'Log',
        handler: () => {
          console.log('Clicked Log. Do not Dismiss.');
          return false;
        }
      }]
    }

  }

   

  cambioFecha ( event ) {
    console.log('ionChange', event);
    console.log('Date', new Date ( event.detail.value));
  }

}
