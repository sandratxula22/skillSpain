import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-noticias',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {
  noticias: any[] = [];

  constructor(private noticiasService: ApiService) {}

  ngOnInit(): void {
    this.noticiasService.getAll("noticias").subscribe((data) => {
      this.noticias = data;
    });
  }
}

