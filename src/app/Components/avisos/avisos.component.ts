import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-avisos',
  templateUrl: './avisos.component.html',
  styleUrls: ['./avisos.component.scss']
})
export class AvisosComponent implements OnInit {

mensaje: string;
visible: boolean;

  constructor() {
    this.mensaje = "Correo enviado";
    this.visible = false;
   }

  ngOnInit(): void {
    this.showMessage('Correo Enviado');
  }

  showMessage(mensaje: string){
    this.mensaje = mensaje;
    this.visible = true;
    this.waitToHide();
  }

  hideMessage(){
    this.visible = false;
    this.mensaje = '';
  }

  waitToHide(){
    setTimeout(() => {
      this.hideMessage();
    }, 2000);
  }

}
