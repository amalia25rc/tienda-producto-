import { Component } from '@angular/core';

interface Producto {
  nombre: string;
  precio: number;
  disponible: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  nombreTienda: string = 'Mi Tienda';
  encargado: string = 'Amalia';
  numeroSucursal: number = 1;
  tiendaAbierta: boolean = true;
  categorias: string[] = ['Cascos', 'Chaquetas', 'Botas', 'Guantes'];

  producto: Producto = {
    nombre: 'Casco AGV Pista GP R Black',
    precio: 4800,
    disponible: true
  };
}