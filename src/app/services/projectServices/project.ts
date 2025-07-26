import { Injectable } from '@angular/core';
import { environment } from '../../environments/enviroment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Auth } from '../auth';
import { catchError, Observable, tap, throwError } from 'rxjs';

export interface ProjectsInterface {
  id: number
  name: string,
  description: string,
  admin_id: number
  createdAt?: string
}

export interface TaskInterface {
  id: number
  title: string
  description: string
  status: string
  user_id: number
  project_id: number
  due_date?: string
  created_at?: string
}

interface ProjectResponse {
  projects: ProjectsInterface[]
  message?: string
  error?: string
}

@Injectable({
  providedIn: 'root'
})

export class ProjectService {
  private apiUrl = `${environment.apiBaseUrl}/admin`;
  private userApiUrl = `${environment.apiBaseUrl}/user`;

  constructor(private http: HttpClient, private router: Router, private authService: Auth) {}

  createProject(projectData: {
    name: string,
    description: string,
    admin_id: number
  }) {
    const token = this.authService.getToken();

    if (!token) {
      this.router.navigate(['/']);
      return throwError(() => new Error('No autenticado'));
    }

    const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`
      });
    return this.http.post(`${this.apiUrl}/create_project`, projectData, { headers }).pipe(
      catchError(error => {
        console.error('Error creating project:', error);
        return throwError(() => error);
      })
    )
  }

  deleteProject(id:number) {
    const token = this.authService.getToken();

    if (!token) {
      this.router.navigate(['/']);
      return throwError(() => new Error('No autenticado'));
    }

    const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`
    });
    return this.http.delete(`${this.apiUrl}/delete_project/${id}`, { headers }).pipe(
      catchError(error => {
        console.error('Error creating project:', error);
        return throwError(() => error);
      })
    )
  }
  
  getProjects(): Observable<ProjectsInterface[]> {
    const token = this.authService.getToken();
    const userData = this.authService.getUser();

    if (!token || !userData) {
      this.router.navigate(['/']);
      return throwError(() => new Error('No autenticado'));

    }

    try {
      const user = JSON.parse(userData);
      const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`
      });

      return this.http.get<ProjectsInterface[]>(
        `${this.apiUrl}/get_project/${user.id}`,
        { headers }
      ).pipe(
        catchError(error => {
          console.error('Error fetching projects:', error);

          

          return throwError(() => error);
        })
      );
    } catch(parseError) {
      console.error('Error parsing user data:', parseError);
      return throwError(() => new Error('Datos de usuario corruptos'));
    }
  }

  getProject(id: number): Observable<ProjectsInterface> {
    const token = this.authService.getToken();

    if (!token) {
      this.router.navigate(['/']);
      return throwError(() => new Error('No autenticado'));

    }

    try {
      const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`
      });

      return this.http.get<ProjectsInterface>(
        `${this.apiUrl}/get_one_project/${id}`,
        { headers }
      ).pipe(
        catchError(error => {
          console.error('Error fetching projects:', error);
          return throwError(() => error);
        })
      );
    } catch(parseError) {
      console.error('Error parsing user data:', parseError);
      return throwError(() => new Error('Datos de usuario corruptos'));
    }
  }

  getAllProjects(): Observable<ProjectsInterface[]> {
    const token = this.authService.getToken();

    if (!token) {
      this.router.navigate(['/']);
      return throwError(() => new Error('No autenticado'));

    }

    try {
      const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`
      });

      return this.http.get<ProjectsInterface[]>(
        `${this.apiUrl}/get_all_projects/`,
        { headers }
      ).pipe(
        catchError(error => {
          console.error('Error fetching projects:', error);
          return throwError(() => error);
        })
      );
    } catch(parseError) {
      console.error('Error parsing user data:', parseError);
      return throwError(() => new Error('Datos de usuario corruptos'));
    }
  }


  updateProject(id: number, projectData: any) {
    const token = this.authService.getToken();
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.put(`${this.apiUrl}/edit_project/${id}`, projectData, { headers });
  }

  getTasksByProject(projectId: number): Observable<TaskInterface[]> {
    const token = this.authService.getToken();

    if (!token) {
      this.router.navigate(['/']);
      return throwError(() => new Error('No autenticado'));
    }

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    return this.http.get<TaskInterface[]>(
      `${this.apiUrl}/get_task/${projectId}`,
      { headers }
    ).pipe(
      catchError(error => {
        console.error('Error fetching tasks:', error);
        return throwError(() => error);
      })
    );
  }

  deleteTask(id:number) {
    const token = this.authService.getToken();

    if (!token) {
      this.router.navigate(['/']);
      return throwError(() => new Error('No autenticado'));
    }

    const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`
    });
    return this.http.delete(`${this.apiUrl}/delete_task/${id}`, { headers }).pipe(
      catchError(error => {
        console.error('Error deleting the task:', error);
        return throwError(() => error);
      })
    )
  }

  createTask(taskData: {
    title: string,
    description: string,
    user_id: number,
    project_id: number,
    due_date: string
  }) {
    const token = this.authService.getToken();

    if (!token) {
      this.router.navigate(['/']);
      return throwError(() => new Error('No autenticado'));
    }

    const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`
      });
    return this.http.post(`${this.apiUrl}/create_task`, taskData, { headers }).pipe(
      catchError(error => {
        console.error('Error creating task:', error);
        return throwError(() => error);
      })
    )
  }

  getTask(id: number): Observable<TaskInterface> {
    const token = this.authService.getToken();

    if (!token) {
      this.router.navigate(['/']);
      return throwError(() => new Error('No autenticado'));

    }

    try {
      const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`
      });

      return this.http.get<TaskInterface>(
        `${this.apiUrl}/get_task_id/${id}`,
        { headers }
      ).pipe(
        catchError(error => {
          console.error('Error fetching tasks:', error);
          return throwError(() => error);
        })
      );
    } catch(parseError) {
      console.error('Error parsing user data:', parseError);
      return throwError(() => new Error('Datos de usuario corruptos'));
    }
  }

  updateTask(id: number, taskData: any) {
    const token = this.authService.getToken();
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.put(`${this.apiUrl}/edit_task/${id}`, taskData, { headers });
  }

  updateTaskStatus(id: number, status: string) {
    const token = this.authService.getToken();
    
    if (!token) {
      this.router.navigate(['/']);
      return throwError(() => new Error('No autenticado'));
    }

    const headers = {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    };

    const body = JSON.stringify({ status: status });

    // Usa HttpClient con opciones de tipo 'json' para manejo automático
    return this.http.patch(
      `${this.userApiUrl}/update_task_progress/${id}`,
      body,
      {
        headers: new HttpHeaders(headers),
        responseType: 'json'
      }
    ).pipe(
      tap(response => console.log('Respuesta del servidor:', response)),
      catchError(error => {
        console.error('Error completo:', {
          status: error.status,
          url: error.url,
          headers: error.headers,
          error: error.error
        });
        return throwError(() => error);
      })
    );
  }

assignProject(idUser: number, idProject: number) {
  const token = this.authService.getToken();
  console.log('Token a enviar:', token);

  if (!token) {
    this.router.navigate(['/']);
    return throwError(() => new Error('No autenticado'));
  }

  // Configuración CORRECTA de headers
  const headers = new HttpHeaders({
    'Authorization': `Bearer ${token.trim()}`,
    'Content-Type': 'application/json'
  });

  // URL CORREGIDA (observa "assign_project" correctamente escrito)
  const url = `${this.apiUrl}/assgin_project/${idUser}/${idProject}`;
  console.log('URL completa:', url);

  // Envía un objeto vacío como body si el endpoint no requiere datos
  return this.http.post(url, {}, { headers }).pipe(
    catchError(error => {
      console.error('Error completo:', {
        status: error.status,
        message: error.message,
        error: error.error,
        url: error.url,
        headers: error.request?.headers
      });
      return throwError(() => error);
    })
  );
}

}
