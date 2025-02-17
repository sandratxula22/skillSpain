import { ReactiveFormsModule, FormControl, FormGroup , Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { Component } from '@angular/core';
import { Usuarios } from '../../usuarios';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {
  datos: any;
  respuesta: Usuarios[] = [];
  constructor(private login: ApiService, private router: Router) {
    this.comprobarLogin();
  }

  formularioLogin = new FormGroup({
    nombre: new FormControl('', Validators.required),
    rol: new FormControl('', Validators.required),
    pueblo: new FormControl('', Validators.required)
  });

  submit() {
    this.datos = {
      nombre: '' + this.formularioLogin.value.nombre,
      rol: '' + this.formularioLogin.value.rol,
      pueblo: '' + this.formularioLogin.value.pueblo,
    };

    this.login.getUsuarios().subscribe(data => {
      this.respuesta = data;
      this.respuesta.forEach(element => {
        if(element.nombre == this.datos.nombre && element.rol == this.datos.rol && element.pueblo.nombre == this.datos.pueblo){
          localStorage.setItem("session", element.rol);
          this.router.navigate(['/noticias']);
        }
      });
    });
  }

  comprobarLogin() {
    if (localStorage.getItem("session")) {
      this.router.navigate(['/noticias']);
    }
  };
}
