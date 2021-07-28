import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Producto } from 'src/app/models/pruducto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-listar-productos',
  templateUrl: './listar-productos.component.html',
  styleUrls: ['./listar-productos.component.css']
})
export class ListarProductosComponent implements OnInit {
  listaProductos: Producto[]=[];

  constructor(private _productoService: ProductoService,
              private toastr: ToastrService) { }

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
  eliminarProducto(id:any){
    this._productoService.eliminarProducto(id).subscribe( data => {
      this.toastr.error('El producto fue eliminado correctamente', 'Producto Eliminado');
      this.obtenerProductos();
    }, error =>{
      console.log(error);
      
    })
  }

}
