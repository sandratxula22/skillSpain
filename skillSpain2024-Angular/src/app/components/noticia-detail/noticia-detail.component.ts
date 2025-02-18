import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-noticia-detail',
  standalone: true,
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './noticia-detail.component.html',
  styleUrls: ['./noticia-detail.component.css']
})

export class NoticiaDetailComponent implements OnInit {
  noticiaId: number = 1;
  noticia: any = {};

  constructor(
    private route: ActivatedRoute,
    private noticiasService: ApiService
  ) { }

  ngOnInit(): void {
    this.noticiaId = +this.route.snapshot.paramMap.get('id')!; // Obtiene el id de la noticia desde la URL
    this.loadNoticiaDetails();
  }

  loadNoticiaDetails(): void {
    this.noticiasService.getNoticia(this.noticiaId).subscribe({
      next: (data) => {
        this.noticia = data;
      },
      error: (error) => {
        console.error('Error al cargar los detalles de la noticia', error);
      }
    });
  }
}
