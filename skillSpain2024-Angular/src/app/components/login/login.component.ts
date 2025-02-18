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
  pueblos: any[] = [];
  constructor(private login: ApiService, private router: Router) {
    this.comprobarLogin();
  }

  ngOnInit(): void {
    this.login.getAll("pueblos").subscribe(data => {
      this.pueblos = data;
    });
  }

  formularioLogin = new FormGroup({
    nombre: new FormControl('', Validators.required),
    rol: new FormControl('', Validators.required),
    pueblo_id: new FormControl('1', Validators.required)
  });

  submit() {
    this.datos = {
      nombre: '' + this.formularioLogin.value.nombre,
      rol: '' + this.formularioLogin.value.rol,
      pueblo_id: '' + this.formularioLogin.value.pueblo_id,
    };

    this.login.getUsuarios().subscribe(data => {
      this.respuesta = data;
      this.respuesta.forEach(element => {
        if(element.nombre == this.datos.nombre && element.rol == this.datos.rol && element.rol == 'Administrador'){
          localStorage.setItem("session", element.rol);
          localStorage.setItem("id", ''+element.id);
          this.router.navigate(['/noticias']);
        }else if(element.nombre == this.datos.nombre && element.rol == this.datos.rol && element.pueblo.id == this.datos.pueblo_id){
          localStorage.setItem("session", element.rol);
          localStorage.setItem("id", ''+element.id);
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
