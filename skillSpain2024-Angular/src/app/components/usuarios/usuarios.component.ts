import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  usuarios: any[] = [];

  constructor(private usuariosService: ApiService) { }

  ngOnInit(): void {
    this.usuariosService.getAll("usuarios").subscribe(data => {
      this.usuarios = data;
    });
  }
}
