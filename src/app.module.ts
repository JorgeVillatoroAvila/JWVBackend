import { Module } from '@nestjs/common';
import { ClientesModule } from './clientes/clientes.module'; // Importa el módulo de clientes aquí
import { ProductosModule } from './productos/productos.module';
// Importa el módulo de productos si también lo necesitas

@Module({
  imports: [ClientesModule, ProductosModule], // Agrega el módulo de clientes aquí
  controllers: [],
  providers: [],
})
export class AppModule {}
