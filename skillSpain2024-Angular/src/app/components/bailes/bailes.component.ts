import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bailes',
  standalone: true,
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './bailes.component.html',
  styleUrls: ['./bailes.component.css']
})
export class BailesComponent implements OnInit {
  bailes: any[] = [];
  datos: any;
  session: string | null;
  constructor(private bailesService: ApiService, private router: Router) {
    this.session = localStorage.getItem('session');
  }

  ngOnInit(): void {
    this.bailesService.getAll("bailes").subscribe(data => {
      this.bailes = data;
    });
  }

  inscribir(id: any){
    this.datos = {
      usuario_id: localStorage.getItem("id"),
      tipo_inscripcion: "Baile",
      eventos_id: null,
      bailes_id: parseInt(id),
      fecha_alta: new Date().toISOString().split('T')[0],
      fecha_baja: null,
    }

    this.bailesService.create("inscripciones", this.datos).subscribe({
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
    this.router.navigate([`/editBaile/${id}`]);
  }
}
