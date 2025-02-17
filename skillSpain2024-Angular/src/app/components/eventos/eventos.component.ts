import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-eventos',
  standalone: true,
  imports: [NavbarComponent, FooterComponent],
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
