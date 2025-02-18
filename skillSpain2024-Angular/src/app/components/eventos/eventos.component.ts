import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-eventos',
  standalone: true,
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {
  eventos: any[] = [];
  datos: any;
  session: string | null;
  constructor(private eventosService: ApiService, private router: Router) {
    this.session = localStorage.getItem('session');
  }

  ngOnInit(): void {
    this.eventosService.getAll("eventos").subscribe((data) => {
      this.eventos = data;
    });
  }

  inscribir(id: any){
    this.datos = {
      usuario_id: localStorage.getItem("id"),
      tipo_inscripcion: "Evento",
      eventos_id: parseInt(id),
      bailes_id: null,
      fecha_alta: new Date().toISOString().split('T')[0],
      fecha_baja: null,
    }

    this.eventosService.create("inscripciones", this.datos).subscribe({
      next: (response) => {
        console.log(id);
        console.log('Inscripcion creada:', response);
        this.router.navigate(['/inscripciones']);
      },
      error: (error) => {
        console.error('Error:', error);
      }
    })
  }

  editar(id: any): void{
    this.router.navigate([`/editEvento/${id}`]);
  }
}
