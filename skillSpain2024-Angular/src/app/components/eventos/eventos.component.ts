import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-eventos',
  standalone: true,
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {
  eventos: any[] = [];

  constructor(private eventosService: ApiService) {}

  ngOnInit(): void {
    this.eventosService.getAll("eventos").subscribe((data) => {
      this.eventos = data;
    });
  }
}
