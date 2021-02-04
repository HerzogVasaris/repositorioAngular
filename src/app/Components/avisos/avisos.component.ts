import { Component, OnInit } from '@angular/core';
import { AvisosService } from 'src/app/Services/avisos.service';

@Component({
  selector: 'app-avisos',
  templateUrl: './avisos.component.html',
  styleUrls: ['./avisos.component.scss']
})
export class AvisosComponent implements OnInit {

mensaje: string;
visible: boolean;

  constructor(public servicioAvisos: AvisosService) {
    
   }

  ngOnInit(): void {
    
  }

  
}
