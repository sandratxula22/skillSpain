import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  session: string | null;

  constructor(private apiService: ApiService, private router: Router) {
    this.session = localStorage.getItem('session');
    console.log(this.session);
  }

  onLogout(){
    this.apiService.logout();
    this.router.navigate(['/']);
  }
}
