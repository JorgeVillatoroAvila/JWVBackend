import { Controller, Get, Post, Put, Delete, Param, Body, NotFoundException } from '@nestjs/common';
import { ProductosService } from './productos.service';

@Controller('productos')
export class ProductosController {
  constructor(private readonly productosService: ProductosService) {}

  @Get()
  async findAll() {
    const productos = await this.productosService.findAll();
    return productos;
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const producto = await this.productosService.findOne(id);
    if (!producto) {
      throw new NotFoundException('Producto no encontrado');
    }
    return producto;
  }

  @Post()
  async create(@Body() body) {
    const producto = await this.productosService.create(body);
    console.log('Producto creado:', producto);
    return producto;
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() body) {
    const producto = await this.productosService.update(id, body);
    if (!producto) {
      throw new NotFoundException('Producto no encontrado');
    }
    console.log('Producto actualizado:', producto);
    return producto;
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const producto = await this.productosService.remove(id);
    if (!producto) {
      throw new NotFoundException('Producto no encontrado');
    }
    console.log('Producto eliminado:', producto);
    return producto;
  }
}
