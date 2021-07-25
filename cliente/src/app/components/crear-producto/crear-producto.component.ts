import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Producto } from 'src/app/models/pruducto';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent implements OnInit {
  productoForm: FormGroup;
  constructor(private fb: FormBuilder,
              private router:Router,
              private toastr: ToastrService) {
    this.productoForm = this.fb.group({
      nombre:['', Validators.required, ],
      categoria:['', Validators.required, ],
      ubicacion:['', Validators.required, ],
      precio:['', Validators.required, ],
    });
   }

  ngOnInit(): void {
  }
  agregarProducto(){
    const PRODUCTO: Producto = {
      nombre:this.productoForm.get('nombre')?.value,
      categoria:this.productoForm.get('categoria')?.value,
      ubicacion:this.productoForm.get('ubicacion')?.value,
      precio:this.productoForm.get('precio')?.value,
    }
    this.toastr.success('El producto fue creado con exito!!', 'Producto Registrado');
    this.router.navigate(['/']);
  }
}
