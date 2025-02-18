import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import {
  ReactiveFormsModule,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-edit-evento',
  standalone: true,
  imports: [ReactiveFormsModule, NavbarComponent, FooterComponent],
  templateUrl: './edit-evento.component.html',
  styleUrl: './edit-evento.component.css'
})
export class EditEventoComponent {
  pueblos: any[] = [];
  datos: any;
  eventoId: any;
  constructor(private pueblosService: ApiService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.eventoId = +id;
    } else {
      console.error('ID de evento no encontrado');
    }
    
    this.pueblosService.getAll('pueblos').subscribe((data) => {
      this.pueblos = data;
    });

    this.pueblosService.getOne("eventos", this.eventoId).subscribe(data => {
      this.formularioEvento.patchValue(data);
    });
  }

  formularioEvento = new FormGroup({
    nombre: new FormControl('', Validators.required),
    fecha: new FormControl('', Validators.required),
    hora: new FormControl('', Validators.required),
    precio: new FormControl('', Validators.required),
    pueblo_id: new FormControl('', Validators.required),
  });

  submit() {
    const updatedEvento = this.formularioEvento.value;
    this.pueblosService.update('eventos', this.eventoId, updatedEvento).subscribe(response => {
      console.log('Evento actualizado:', response);
      this.router.navigate(['/eventos']);
    });
  }
}
