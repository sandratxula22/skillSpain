import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import {
  ReactiveFormsModule,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-crear-baile',
  standalone: true,
  imports: [ReactiveFormsModule, NavbarComponent, FooterComponent],
  templateUrl: './crear-baile.component.html',
  styleUrl: './crear-baile.component.css',
})
export class CrearBaileComponent {
  pueblos: any[] = [];
  datos: any;
  token: string = '';
  constructor(private pueblosService: ApiService, private router: Router) {}

  ngOnInit(): void {
    this.pueblosService.getAll('pueblos').subscribe((data) => {
      this.pueblos = data;
    });
    this.pueblosService.getToken().subscribe(
      (data) => {
        this.token = data.csrfToken;
      },
      (error) => {
        console.error('Error en getToken:', error);
      }
    );
  }

  formularioBaile = new FormGroup({
    tipo: new FormControl('', Validators.required),
    configuracion_geometrica: new FormControl('', Validators.required),
    pueblo_id: new FormControl('', Validators.required),
  });

  submit() {
    this.datos = {
      tipo: '' + this.formularioBaile.value.tipo,
      configuracion_geometrica:
        '' + this.formularioBaile.value.configuracion_geometrica,
      pueblo_id: '' + this.formularioBaile.value.pueblo_id,
    };
    this.pueblosService.create('bailes', this.datos).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.error('Error en createBaile:', error);
      }
    );
  }
  
}
