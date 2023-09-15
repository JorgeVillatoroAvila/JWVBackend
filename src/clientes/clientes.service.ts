import { Injectable } from '@nestjs/common';

@Injectable()
export class ClientesService {
  private clientes = [];

  findAll() {
    return this.clientes;
  }

  findOne(id: string) {
    return this.clientes.find(cliente => cliente.id === id);
  }

  create(cliente) {
    this.clientes.push(cliente);
    return cliente;
  }

  update(id: string, cliente) {
    const index = this.clientes.findIndex(c => c.id === id);
    if (index !== -1) {
      this.clientes[index] = cliente;
      return cliente;
    }
    return null;
  }

  remove(id: string) {
    const index = this.clientes.findIndex(c => c.id === id);
    if (index !== -1) {
      const cliente = this.clientes[index];
      this.clientes.splice(index, 1);
      return cliente;
    }
    return null;
  }
}
