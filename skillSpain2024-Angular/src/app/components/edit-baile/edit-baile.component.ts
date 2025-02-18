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
  selector: 'app-edit-baile',
  standalone: true,
  imports: [ReactiveFormsModule, NavbarComponent, FooterComponent],
  templateUrl: './edit-baile.component.html',
  styleUrl: './edit-baile.component.css'
})
export class EditBaileComponent {
  pueblos: any[] = [];
  datos: any;
  baileId: any;
  constructor(private pueblosService: ApiService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.baileId = +id;
    } else {
      console.error('ID de baile no encontrado');
    }

    this.pueblosService.getAll('pueblos').subscribe((data) => {
      this.pueblos = data;
    });

    this.pueblosService.getOne("bailes", this.baileId).subscribe(data => {
      this.formularioBaile.patchValue(data);
    });
  }

  formularioBaile = new FormGroup({
    tipo: new FormControl('', Validators.required),
    configuracion_geometrica: new FormControl('', Validators.required),
    pueblo_id: new FormControl('', Validators.required),
  });

  submit() {
    const updatedBaile = this.formularioBaile.value;
    this.pueblosService.update('bailes', this.baileId, updatedBaile).subscribe(response => {
      console.log('Baile actualizado:', response);
      this.router.navigate(['/bailes']);  // Redirigir a la lista de bailes o donde quieras
    });
  }
}
