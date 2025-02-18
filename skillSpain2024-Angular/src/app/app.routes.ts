import { Routes } from '@angular/router';
import { NoticiasComponent } from './components/noticias/noticias.component';
import { ProvinciasComponent } from './components/provincias/provincias.component';
import { PueblosComponent } from './components/pueblos/pueblos.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { BailesComponent } from './components/bailes/bailes.component';
import { InscripcionesComponent } from './components/inscripciones/inscripciones.component';
import { NoticiaDetailComponent } from './components/noticia-detail/noticia-detail.component';
import { LoginComponent } from './components/login/login.component';
import { CrearBaileComponent } from './components/crear-baile/crear-baile.component';
import { CrearNoticiaComponent } from './components/crear-noticia/crear-noticia.component';
import { CrearEventoComponent } from './components/crear-evento/crear-evento.component';
import { EditBaileComponent } from './components/edit-baile/edit-baile.component';
import { EditEventoComponent } from './components/edit-evento/edit-evento.component';


export const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'noticias', component: NoticiasComponent },
    { path: 'noticias/:id', component: NoticiaDetailComponent }, // Ruta dinámica para los detalles de la noticia
    { path: 'provincias', component: ProvinciasComponent },
    { path: 'pueblos', component: PueblosComponent },
    { path: 'usuarios', component: UsuariosComponent },
    { path: 'eventos', component: EventosComponent },
    { path: 'bailes', component: BailesComponent },
    { path: 'crearBaile', component: CrearBaileComponent},
    { path: 'crearNoticia', component: CrearNoticiaComponent},
    { path: 'crearEvento', component: CrearEventoComponent},
    { path: 'editBaile/:id', component: EditBaileComponent},
    { path: 'editEvento/:id', component: EditEventoComponent},
    { path: 'inscripciones', component: InscripcionesComponent },
    { path: '**', redirectTo: '/noticias' }, // Manejo de rutas no existentes
];
