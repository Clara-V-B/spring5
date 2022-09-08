import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente';
import { ClienteService } from '../cliente.service';
import { Router, ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {

  cliente: Cliente = new Cliente();
  titulo: string = "Crear Cliente";

  constructor(private clienteService: ClienteService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.cargarCliente()
  }

  cargarCliente(): void {
    this.activatedRoute.params.subscribe(params => {
      let id = params['id']
      if(id) {
        this.clienteService.getCliente(id).subscribe( cliente => this.cliente = cliente)
      }
    })
  }

  create(): void {
    //console.log("Clicked!");
    //console.log(this.cliente);
    this.clienteService.create(this.cliente)
    .subscribe( cliente => {
        this.router.navigate(['/clientes'])
        swal('Nuevo cliente',`Cliente ${cliente.nombre} ha sido creado con éxito!`,'success')
      }
    )
  }

  update(): void {
    this.clienteService.update(this.cliente)
    .subscribe( json => {
        this.router.navigate(['/clientes'])
        swal('Cliente Actualizado',`${json.mensaje} : ${json.cliente.nombre} actualizado con éxito!`,'success')
      }
    )
  }
}
