import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-provincias',
  standalone: true,
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './provincias.component.html',
  styleUrls: ['./provincias.component.css']
})
export class ProvinciasComponent implements OnInit {
  provincias: any[] = [];

  constructor(private provinciasService: ApiService) {}

  ngOnInit(): void {
    this.provinciasService.getAll("provincias").subscribe((data) => {
      this.provincias = data;
    });
  }
}
