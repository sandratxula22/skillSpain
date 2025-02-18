import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import {
  ReactiveFormsModule,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { Usuarios } from '../../usuarios';

@Component({
  selector: 'app-crear-evento',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, ReactiveFormsModule],
  templateUrl: './crear-evento.component.html',
  styleUrl: './crear-evento.component.css'
})
export class CrearEventoComponent {
  pueblos: any[] = [];
  datos: any;
  usuario?: Usuarios;
  usuario_id: number = Number(localStorage.getItem("id"));
  session: string | null;
  constructor(private pueblosService: ApiService, private router: Router) {
    this.session = localStorage.getItem('session');
  }

  ngOnInit(): void {
    this.pueblosService.getAll('pueblos').subscribe((data) => {
      this.pueblos = data;
    });

    this.pueblosService.getUsuario(this.usuario_id).subscribe({
      next: (response) => {
        this.usuario = response;
        console.log(response);
      },
      error: (error) => {
        console.error('Error:', error);
      }
    });
  }

  formularioEvento = new FormGroup({
    nombre: new FormControl('', Validators.required),
    fecha: new FormControl('', Validators.required),
    hora: new FormControl('', Validators.required),
    precio: new FormControl('', Validators.required),
    pueblo_id: new FormControl('', Validators.required),
  });

  submit() {
    this.datos = {
      nombre: '' + this.formularioEvento.value.nombre,
      fecha: this.formularioEvento.value.fecha,
      hora: this.formularioEvento.value.hora,
      precio: this.formularioEvento.value.precio,
      pueblo_id: '' + this.formularioEvento.value.pueblo_id,
    };

    this.pueblosService.create('eventos', this.datos).subscribe({
      next: (response) => {
        console.log('Evento creado:', response);
        this.formularioEvento.reset();
      },
      error: (error) => {
        console.error('Error al crear el evento:', error);
      }
    });
  }
  
}
