import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-provincias',
  standalone: true,
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
