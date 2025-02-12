import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-inscripciones',
  standalone: true,
  templateUrl: './inscripciones.component.html',
  styleUrls: ['./inscripciones.component.css']
})
export class InscripcionesComponent implements OnInit {
  inscripciones: any[] = [];

  constructor(private inscripcionesService: ApiService) {}

  ngOnInit(): void {
    this.inscripcionesService.getAll("inscripciones").subscribe(data => {
      this.inscripciones = data;
    });
  }
}
