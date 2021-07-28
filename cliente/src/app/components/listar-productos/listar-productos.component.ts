import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/pruducto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-listar-productos',
  templateUrl: './listar-productos.component.html',
  styleUrls: ['./listar-productos.component.css']
})
export class ListarProductosComponent implements OnInit {
  listaProductos: Producto[]=[];

  constructor(private _productoService: ProductoService) { }

  ngOnInit(): void {
    this.obtenerProductos();
  }
obtenerProductos(){
  this._productoService.getProductos().subscribe( data => {
    this.listaProductos = data;
  },error => {
    console.log(error);
    
  })
}

}
