import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProjectService, TaskInterface } from '../../services/projectServices/project';
import { Auth, User } from '../../services/auth';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-task',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './edit-task.html',
  styleUrl: './edit-task.css'
})
export class EditTask {
  taskForm: FormGroup;
  task = signal<TaskInterface | null>(null);
  id: number;
  userData: any | null;
  private snackBar = inject(MatSnackBar);

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

  ngOnInit(): void {
    this.loadUsers();
    this.getProject();
  }

getProject(): void {
  this.isLoading.set(true);
  this.error.set(null);
  this.projectService.getTask(this.id).subscribe({
    next: (task) => {
      this.task.set(task);
      
      const dueDate = task.due_date ? new Date(task.due_date).toISOString().slice(0, 16) : '';
      
      this.taskForm.patchValue({
        title: task.title,
        description: task.description,
        user_id: task.user_id,
        due_date: dueDate,
        project_id: task.project_id
      });
      
      this.isLoading.set(false);
    },
    error: (err) => {
      this.error.set('Error al cargar la tarea');
      this.isLoading.set(false);
      this.snackBar.open(`Error al recuperar la tarea: ${err}`, 'X', {
        duration: 3000
      });
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
      if (this.taskForm.invalid) {
        this.taskForm.markAllAsTouched();
        this.snackBar.open('Por favor complete el formulario correctamente', 'X', {
          duration: 3000
        });
        return;
    }

    this.isLoading.set(true);
    this.error.set(null);

    this.projectService.updateTask(this.id, this.taskForm.value).subscribe({
      next: (response) => {
        this.snackBar.open('Tarea actualizada correctamente', 'X', {
          duration: 3000
        });

        this.getProject();
      },
      error: (err) => {
        this.error.set('Error al actualizar tarea');
        this.snackBar.open(`Error al actualizar tarea: ${err.message}`, 'X', {
          duration: 3000
        });
      },
      complete: () => {
        this.isLoading.set(false);
      }
    });
  }
}
