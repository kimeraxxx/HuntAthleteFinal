import { Datos } from './datos';
import { Injectable } from '@angular/core';
import { Usuario } from './Modelo/Usuario';
import { Deporte } from './Modelo/Deporte';
import { Evento } from './Modelo/Evento';

@Injectable({
  providedIn: 'root'
})
export class DatosMockService implements Datos{

  constructor() { }

  getEventos(): Evento[] {
    let eventos = new Array<Evento>();
    eventos.push(new Evento(1,new Deporte("Padel",4),new Date(),"Polideportivo San Roque",2));
    eventos.push(new Evento(2,new Deporte("Futbol Sala",10),new Date(),"San Antonio",7));
    eventos.push(new Evento(3,new Deporte("Tenis",2),new Date(),"Polideportivo Municipal",2));
    return eventos;
  }

  getUsuarios(): Usuario[] {
    let usuarios = new Array<Usuario>();
    let usuario = new Usuario();
    let deportes = new Array<Deporte>();

    deportes.push(new Deporte("Padel",4));

    usuario.id=1;
    usuario.nombre='Juanma';
    usuario.password='12345';
    usuario.email='juanma@gmnail.com';
    usuario.direccion='Avd. La Paz';
    usuario.deportes = deportes;

    usuarios.push(usuario);
    return usuarios;
  }


  
}
