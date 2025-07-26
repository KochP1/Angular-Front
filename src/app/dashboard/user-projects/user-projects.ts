import { Component, inject, signal } from '@angular/core';
import { ProjectService, ProjectsInterface } from '../../services/projectServices/project';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-projects',
  imports: [CommonModule],
  templateUrl: './user-projects.html',
  styleUrl: './user-projects.css'
})
export class UserProjects {
  userData: any | null;

  projects = signal<ProjectsInterface[] | null>(null);
  isLoading = signal(false);
  error = signal<string | null>(null);
  private snackBar = inject(MatSnackBar);

  constructor(private projectService: ProjectService, private router: Router) {
  };

  ngOnInit (): void {
    this.loadUser();
    if (this.userData) {
      this.getProjects(this.userData.id);
    }
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

  getProjects(id: number): void {
    this.isLoading.set(true);
    this.error.set(null);
    this.projectService.getAssignedProjects(id).subscribe(
      {
        next: (projects) => {
          this.projects.set(projects);
          console.log(this.projects())
          this.isLoading.set(false);
        },
        error: (err) => {
          this.error.set('Error al cargar proyectos');
          this.isLoading.set(false);
          this.snackBar.open(`Error al recuperar proyectos: ${err}`, 'X', {
            duration: 3000
          })
        }
      }
    )
  }

  onClick(id: number): void {
    this.router.navigate(['/dashboard/tasks', id])
  }

}
