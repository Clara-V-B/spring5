import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente'
import { ClienteService } from './cliente.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {

  clientes: Cliente[];

  /* Forma menos simple
  private clienteService: ClienteService;
  
  constructor(clienteService: ClienteService) {
    this.clienteService = clienteService;
  }
  */

  // Forma mas simple
  constructor(private clienteService: ClienteService) { }
  // Fin: Forma mas simple

  ngOnInit(): void {
    this.clienteService.getClientes().subscribe(
      clientes => this.clientes = clientes
    );
  }

}
