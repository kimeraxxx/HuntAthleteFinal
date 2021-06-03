
import { Usuario } from 'src/app/Modelo/Usuario';
import { Component, OnInit } from '@angular/core';
import { DatosMockService } from 'src/app/datos-mock.service';
import { Evento } from 'src/app/Modelo/Evento';
import { Utiles } from 'src/Utiles';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.page.html',
  styleUrls: ['./eventos.page.scss'],
})

export class EventosPage implements OnInit {
  public eventos:Array<Evento>;
  public usuarioSesion:Usuario;
  constructor(private datosMock:DatosMockService ) {
    this.eventos = new Array<Evento>();
    this.usuarioSesion = JSON.parse(sessionStorage.getItem("usuarioSesion"));
    console.log("UsuarioSesion = ", this.usuarioSesion);

    this.datosMock.getEventos().forEach(evento => {
      if(evento.deporte.maximoJugadores>evento.plazasCubiertas) {
        this.usuarioSesion.deportes.forEach(deporteUsuario => {
          if(evento.deporte.nombre == deporteUsuario.nombre) {
            this.eventos.push(evento);
          }
        });
        
      }
    });  
    
  }

  public actualizarEventos(eventoElegido:Evento) {
    
    this.eventos.forEach(evento => {
      if(evento.id == eventoElegido.id) {
        evento.plazasCubiertas++;
        this.usuarioSesion.eventos.push(evento);
        if(evento.plazasCubiertas >= evento.deporte.maximoJugadores) {
          let index= this.eventos.indexOf(evento);
          this.eventos.splice(index,1);
          Utiles.mostrarToast("Evento completado",2000);
        }
      }
    });
  }

  ngOnInit() {
  }

}
