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
  selector: 'app-crear-noticia',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, ReactiveFormsModule],
  templateUrl: './crear-noticia.component.html',
  styleUrl: './crear-noticia.component.css'
})

export class CrearNoticiaComponent {
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

  formularioNoticia = new FormGroup({
    tipo: new FormControl('', Validators.required),
    titulo: new FormControl('', Validators.required),
    contenido: new FormControl('', Validators.required),
    pueblo_id: new FormControl('', Validators.required),
  });

  submit() {
    this.datos = {
      tipo: '' + this.formularioNoticia.value.tipo,
      titulo: this.formularioNoticia.value.titulo,
      contenido: this.formularioNoticia.value.contenido,
      fecha_creacion: new Date().toISOString().split('T')[0],
      pueblo_id: '' + this.formularioNoticia.value.pueblo_id,
    };

    this.pueblosService.create('noticias', this.datos).subscribe({
      next: (response) => {
        console.log('Noticia creada:', response);
        this.formularioNoticia.reset();
      },
      error: (error) => {
        console.error('Error al crear la noticia:', error);
      }
    });
  }
  
}
