import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  session: string | null;

  constructor(){
    this.session = localStorage.getItem('session');
    console.log(this.session);
  }
}
