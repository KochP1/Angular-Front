import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { ProjectService } from '../../services/projectServices/project';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TaskInterface } from '../../services/projectServices/project';
import { ActivatedRoute, Router } from '@angular/router';
import { Auth, User } from '../../services/auth';

@Component({
  selector: 'app-tasks',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css'
})
export class Tasks {

  taskForm: FormGroup;
  id: number;
  userData: any | null;
  private snackBar = inject(MatSnackBar);

  tasks = signal<TaskInterface[] | null>(null);
  users = signal<User[] | null>([]);
  isLoading = signal(false);
  error = signal<string | null>(null);
  constructor(private projectService: ProjectService, private route: ActivatedRoute, private fb: FormBuilder, private authService: Auth, private router: Router) {
    this.id = Number(this.route.snapshot.paramMap.get('id'));

    this.taskForm = this.fb.group({
      title: ['', [
        Validators.required, 
        Validators.minLength(1), 
        Validators.maxLength(20)
      ]],
      description: ['', [
        Validators.required, 
        Validators.minLength(1), 
        Validators.maxLength(90)
      ]],
      user_id: [null, Validators.required],
      project_id: [this.id, Validators.required],

      due_date: ['', [
        Validators.required, 
      ]],
    })
  }

  ngOnInit() {
    this.loadUser();
    this.loadUsers();
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

  loadUsers(): void {
    this.isLoading.set(true);
    this.error.set(null);
    
    this.authService.listUsers().subscribe({
      next: (users) => {
        this.users.set(users);
        console.log(this.users())
        this.isLoading.set(false);
      },
      error: (err) => {
        this.error.set('Error al cargar usuarios');
        this.isLoading.set(false);
        this.snackBar.open(`Error al cargar usuarios: ${err.message}`, 'X', {
            duration: 3000
        })
      }
    });
  }


onSubmit(): void {
  if (this.taskForm.valid) {
    const formData = {
      ...this.taskForm.value,
      user_id: Number(this.taskForm.value.user_id),
      due_date: new Date(this.taskForm.value.due_date).toISOString()
    };

    this.isLoading.set(true);
    this.projectService.createTask(formData).subscribe({
      next: (response) => {
        this.snackBar.open('Tarea creada', 'X', { duration: 3000 });
        this.load_task();
        this.isLoading.set(false);

        this.taskForm.reset({
          project_id: this.id
        });
      },
      error: (err) => {
        this.error.set('Error al crear tarea');
        this.isLoading.set(false);
        this.snackBar.open(`Error al crear tarea: ${err.message}`, 'X', { duration: 3000 });
      }
    });
  } else {
    // Mostrar qué campos son inválidos
    console.log('Formulario inválido. Errores:');
    this.snackBar.open('Por favor complete todos los campos correctamente', 'X', { duration: 3000 });
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

  delete(id: number): void {
    if (confirm('¿Estás seguro de eliminar la tarea?')) {
      this.isLoading.set(true);
      this.error.set(null);

      this.projectService.deleteTask(id).subscribe({
        next: () => {
          this.snackBar.open('Tarea eliminada', 'X', { duration: 3000 });
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

  editTask(id:number): void {
    this.router.navigate(['/dashboard/edit_tasks', id])
  }

  editStatus(taskId: number, newStatus: string): void {
    if (!this.tasks()) return;

    this.isLoading.set(true);
    
    // Mostrar datos antes de enviar
    console.log(`Actualizando tarea ${taskId} a estado: ${newStatus}`);

    this.projectService.updateTaskStatus(taskId, newStatus).subscribe({
      next: () => {
        this.snackBar.open('Estado actualizado', 'Cerrar', { duration: 3000 });
        
        // Actualización optimista
        const updatedTasks = this.tasks()!.map(task => 
          task.id === taskId ? { ...task, status: newStatus } : task
        );
        this.tasks.set(updatedTasks);
      },
      error: (err) => {
        console.error('Error en la respuesta:', {
          status: err.status,
          message: err.message,
          error: err.error
        });

        let errorMessage = 'Error al actualizar';
        if (err.status === 400) {
          errorMessage = 'Datos inválidos enviados al servidor';
        } else if (err.status === 401) {
          errorMessage = 'No autorizado';
        }

        this.snackBar.open(`${errorMessage}`, 'Cerrar', { duration: 3000 });
        
        // Revertir cambios recargando los datos
        this.load_task();
      },
      complete: () => {
        this.isLoading.set(false);
      }
    });
  }

}
