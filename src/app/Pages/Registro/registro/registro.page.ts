import { Usuario } from 'src/app/Modelo/Usuario';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
Usuario = new Usuario();
  constructor() { }

  ngOnInit() {
  }

}
