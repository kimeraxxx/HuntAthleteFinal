import { DatosMockService } from './../../../datos-mock.service';
import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/Modelo/Usuario';
import { Utiles } from 'src/Utiles';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  public usuarioIntroducido:Usuario;
  public recordarUsuario:boolean;
  public usuarioSesion:Usuario;

  constructor(private datosMock:DatosMockService, 
    private router:Router
    ) {
    this.usuarioIntroducido = new Usuario(); 
  }
  
  ngOnInit() {
  }

  public iniciarSesion():void {
    let arrayUsuariosRegistrados: Array<Usuario> = this.datosMock.getUsuarios();
    arrayUsuariosRegistrados.forEach(usuario => {
      if(usuario.nombre == this.usuarioIntroducido.nombre && usuario.password == this.usuarioIntroducido.password){
        this.usuarioSesion = usuario;
        console.log("INICIO DE SESION CORRECTRO. Usuario = ", this.usuarioSesion);
        this.router.navigate(['eventos']);
        sessionStorage.setItem("usuarioSesion", JSON.stringify(this.usuarioSesion));
      } else {
        Utiles.mostrarToast("Usuario inexistente",2000);
      }
    });
  }

}
