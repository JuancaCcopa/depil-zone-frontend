import { Component, OnInit } from '@angular/core';

import Swal from 'sweetalert2/dist/sweetalert2.all.min.js';
//import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
//import Swal from '../sweetalert2/dist/sweetalert2.js';

import { UsuarioService } from '../../../services/usuario.service';
//import { Usuario } from 'usuario';
//import { Hero } from '../hero';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {
  private serviceUsuario: {};
  dtResponsiveOptions: any = {};
  ItemsArray = [];
  public usuario = {
    Nombre: '',
    Usuario: '',
    Clave: '',
    Estado: '1',
    UsuarioRegistro: '1',
    IdPerfil: '1'
  };
  constructor(private usuarioService: UsuarioService) {
    this.obtenerUsuario();
  }

  editar(id){
    this.usuarioEmpty();
    this.obtenerByIdUser(id);
  }

  nuevo(){
    this.usuarioEmpty();
  }

  usuarioEmpty(){
    this.usuario = {
      Nombre: '',
      Usuario: '',
      Clave: '',
      Estado: '1',
      UsuarioRegistro: '1',
      IdPerfil: '1'
    };
  }

  obtenerUsuario(){
    this.usuarioService.obtenerUsuarios()
      .subscribe(resp => {
        //console.log(resp['data']);
        this.ItemsArray = resp;
        //swal.fire('Any fool can use a computer');
      }, (error) => {

        console.log('error en elo app component usuario')
      });
  }

  obtenerByIdUser(id){
    this.usuarioService.obtenerByIdUsuario(id).subscribe(resp => {
      this.usuario = resp;
      console.log("obtenerByIdUser",resp);
    }, (error) => {
      console.log('error en elo app component usuario')
    });
  }
  

  create() {
    debugger;
    console.log(this.usuario);
    this.usuarioService.create(this.usuario).subscribe(
      (val) => {
        this.obtenerUsuario();
        Swal.fire('USUARIO', val, 'success');
      },
      response => {
        console.log("POST call in error", response);
        Swal.fire('USUARIO', "POST call in error: "+response, 'error');
      },
      () => {
        console.log("The POST observable is now completed.");
      });

  }

  ngOnInit(): void {

  }


}
