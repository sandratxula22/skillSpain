import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-pueblos',
  standalone: true,
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './pueblos.component.html',
  styleUrls: ['./pueblos.component.css']
})
export class PueblosComponent implements OnInit {
  pueblos: any[] = [];

  constructor(private pueblosService: ApiService) {}

  ngOnInit(): void {
    this.pueblosService.getAll("pueblos").subscribe(data => {
      this.pueblos = data;
    });
  }
}
