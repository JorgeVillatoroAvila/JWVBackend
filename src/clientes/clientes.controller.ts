import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { ClientesService } from './clientes.service';

@Controller('clientes')
export class ClientesController {
  constructor (private readonly clientesService: ClientesService) {}

  @Get()
  async findAll() {
    const clientes = await this.clientesService.findAll();
    console.log('Clientes encontrados:', clientes);
    return clientes;
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const cliente = await this.clientesService.findOne(id);
    console.log('Cliente encontrado:', cliente);
    return cliente;
  }

  @Post()
  async create(@Body() body) {
    const cliente = await this.clientesService.create(body);
    console.log('Cliente creado:', cliente);
    return cliente;
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() body) {
    const cliente = await this.clientesService.update(id, body);
    console.log('Cliente actualizado:', cliente);
    return cliente;
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const cliente = await this.clientesService.remove(id);
    console.log('Cliente eliminado:', cliente);
    return cliente;
  }
}
