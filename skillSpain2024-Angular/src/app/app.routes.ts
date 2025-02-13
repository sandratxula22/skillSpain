import { Routes } from '@angular/router';
import { NoticiasComponent } from './components/noticias/noticias.component';
import { ProvinciasComponent } from './components/provincias/provincias.component';
import { PueblosComponent } from './components/pueblos/pueblos.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { BailesComponent } from './components/bailes/bailes.component';
import { InscripcionesComponent } from './components/inscripciones/inscripciones.component';
import { NoticiaDetailComponent } from './components/noticia-detail/noticia-detail.component';


export const routes: Routes = [
    { path: '', component: NoticiasComponent }, // Redirige a Noticias como ruta principal
    { path: 'noticias', component: NoticiasComponent },
    { path: 'noticias/:id', component: NoticiaDetailComponent }, // Ruta dinámica para los detalles de la noticia
    { path: 'provincias', component: ProvinciasComponent },
    { path: 'pueblos', component: PueblosComponent },
    { path: 'usuarios', component: UsuariosComponent },
    { path: 'eventos', component: EventosComponent },
    { path: 'bailes', component: BailesComponent },
    { path: 'inscripciones', component: InscripcionesComponent },
    { path: '**', redirectTo: '/noticias' }, // Manejo de rutas no existentes

];
