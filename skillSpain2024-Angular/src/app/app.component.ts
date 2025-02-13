import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NoticiasComponent } from './components/noticias/noticias.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NoticiasComponent, NavbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'skillSpain2024-Angular';
}
