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

  constructor(private inscripcionesService: ApiService) { }

  ngOnInit(): void {
    this.inscripcionesService.getAll("inscripciones").subscribe(data => {
      this.inscripciones = data;
    });
  }
}
