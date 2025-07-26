import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Auth } from '../services/auth';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule, RouterLink],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css'
})
export class Sidebar {
  userData: any | null;
  private snackBar = inject(MatSnackBar);
  constructor(private authService: Auth) {}

  ngOnInit (): void {
    this.loadUser();
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
}
