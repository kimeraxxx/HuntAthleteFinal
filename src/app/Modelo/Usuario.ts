import { Deporte } from "./Deporte";
import { Evento } from "./Evento";

export class Usuario  {

    public id:number;
    public nombre:string;
    public password:string;
    public email:string;
    public direccion:string;
    public deportes:Array<Deporte>;
    public eventos:Array<Evento>;
  
    constructor(
    ){
      this.eventos = new Array<Evento>();
    }
  
  }