import { Evento } from './Modelo/Evento';
import { Usuario } from 'src/app/Modelo/Usuario';

export interface Datos {
    getUsuarios(): Array<Usuario>;
    getEventos(): Array<Evento>;
}
