import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class ProductosService {
  private productos = [];

  findAll() {
    return this.productos;
  }

  findOne(id: string) {
    const producto = this.productos.find(p => p.id === id);
    if (!producto) {
      throw new NotFoundException('Producto no encontrado');
    }
    return producto;
  }

  create(producto) {
    this.productos.push(producto);
    return producto;
  }

  update(id: string, producto) {
    const index = this.productos.findIndex(p => p.id === id);
    if (index !== -1) {
      this.productos[index] = producto;
      return producto;
    }
    throw new NotFoundException('Producto no encontrado');
  }

  remove(id: string) {
    const index = this.productos.findIndex(p => p.id === id);
    if (index !== -1) {
      const producto = this.productos[index];
      this.productos.splice(index, 1);
      return producto;
    }
    throw new NotFoundException('Producto no encontrado');
  }
}
