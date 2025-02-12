import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NoticiasComponent } from './components/noticias/noticias.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NoticiasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'skillSpain2024-Angular';
}
