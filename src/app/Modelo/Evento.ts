import { Deporte } from './Deporte';

export class Evento {

    public id:number;
    public deporte:Deporte;
    public fecha:Date;
    public lugar:string;
    public plazasCubiertas:number;
  
    constructor(id:number,deporte:Deporte,fecha:Date,lugar:string,plazasCubiertas:number){
        this.id = id;
        this.deporte = deporte;
        this.fecha = fecha;
        this.lugar = lugar;
        this.plazasCubiertas = plazasCubiertas;
    }
  
  }