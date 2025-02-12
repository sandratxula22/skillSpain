import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-pueblos',
  standalone: true,
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
