import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-bailes',
  standalone: true,
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './bailes.component.html',
  styleUrls: ['./bailes.component.css']
})
export class BailesComponent implements OnInit {
  bailes: any[] = [];

  constructor(private bailesService: ApiService) {}

  ngOnInit(): void {
    this.bailesService.getAll("bailes").subscribe(data => {
      this.bailes = data;
    });
  }
}
