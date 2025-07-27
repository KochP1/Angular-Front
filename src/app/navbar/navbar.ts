import { CommonModule } from '@angular/common';
import { Component, ElementRef, inject, ViewChild, Renderer2 } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RouterLink } from '@angular/router';
import { Auth } from '../services/auth';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
  @ViewChild('responsiveNav') responsiveNav!: ElementRef;
  userData: any | null;
  private snackBar = inject(MatSnackBar);

  constructor(private authService: Auth, private renderer: Renderer2) {}

  ngOnInit() {
    this.loadUser();
  }
  
  private loadUser(): void {
    const user = localStorage.getItem('user');

    if (user) {
      try {
        this.userData = JSON.parse(user);
      } catch(e) {
        this.snackBar.open('Error al obtener datos del usuario', 'X', {
          duration: 3000
        });
        this.userData = null;
      }
    }
  }

  logout() {
    this.authService.logout().subscribe({
      next: () => {
        this.snackBar.open('Sesión cerrada', 'X', {
          duration: 3000
        });
      },
      error: (err) => {
        console.error('Error en logout:', err);
      }
    });
  }

  toggleResponsiveNav(): void {
      const navElement = this.responsiveNav.nativeElement;
      navElement.classList.toggle('show');
  }
}
