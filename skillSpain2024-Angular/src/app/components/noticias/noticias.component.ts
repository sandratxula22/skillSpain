import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Noticia } from '../../noticia';

@Component({
  selector: 'app-noticias',
  standalone: true,
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {
  noticias: any[] = [];

  datos:Noticia = {
    tipo : '',
    titulo:'',
    contenido:'',
    fecha_creacion: null,
    pueblo_id:0
  }
  constructor(private noticiasService: ApiService) {}

  ngOnInit(): void {
    this.noticiasService.getAll("noticias").subscribe((data) => {
      this.noticias = data;
    });
  }
  mostrar(id:number): void {
    this.noticiasService.getNoticia(id).subscribe((data) => {
      this.datos = data;
      console.log(this.datos)
    })
  }
}

