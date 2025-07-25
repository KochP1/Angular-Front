import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { ProjectService } from '../../services/projectServices/project';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TaskInterface } from '../../services/projectServices/project';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tasks',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css'
})
export class Tasks {

  id: number;
  userData: any | null;
  private snackBar = inject(MatSnackBar);

  tasks = signal<TaskInterface[] | null>(null);
  isLoading = signal(false);
  error = signal<string | null>(null);
  constructor(private projectService: ProjectService, private route: ActivatedRoute) {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
  }

  ngOnInit() {
    this.loadUser();
    this.load_task();
  }

  load_task(): void {
    this.isLoading.set(false);
    this.error.set(null);
    this.projectService.getTasksByProject(this.id).subscribe({
      next: (response) => {
        this.tasks.set(response);
        console.log(this.tasks())
        this.isLoading.set(false);
      },
      error: (err) => {
        this.error.set(err);
        this.snackBar.open('Error al cargar tareas', 'X', {
          duration: 3000
        })
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

  delete(id: number): void {
    if (confirm('¿Estás seguro de eliminar la tarea?')) {
      this.isLoading.set(true);
      this.error.set(null);

      this.projectService.deleteTask(id).subscribe({
        next: () => {
          this.snackBar.open('Tarea eliminado', 'X', { duration: 3000 });
          this.load_task();
        },
        error: (err) => {
          this.error.set(`Error: ${err.message}`);
          this.snackBar.open('Error al eliminar Tarea', 'X', { duration: 3000 });
        },
        complete: () => {
          this.isLoading.set(false);
        }
      });
    }
  }

}
