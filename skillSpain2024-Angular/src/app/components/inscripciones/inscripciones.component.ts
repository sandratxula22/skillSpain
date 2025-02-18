import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-inscripciones',
  standalone: true,
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './inscripciones.component.html',
  styleUrls: ['./inscripciones.component.css']
})
export class InscripcionesComponent implements OnInit {
  inscripciones: any[] = [];
  usuarioId = localStorage.getItem("id");

  constructor(private inscripcionesService: ApiService) { }

  ngOnInit(): void {
    this.inscripcionesService.getAll("inscripciones").subscribe(data => {
      this.inscripciones = data.filter(inscripcion => inscripcion.usuario_id == this.usuarioId);
    });
  }

  borrar(id: number){
    this.inscripcionesService.deleteInscripcion(id).subscribe(data =>{
      console.log("borrado");
      this.inscripciones = this.inscripciones.filter(inscripcion => inscripcion.id !== id);
    })
  }
}
