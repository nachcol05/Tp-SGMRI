import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // Esta URL será la de tu backend en NetBeans (Fase 3) [cite: 43, 87]
  private apiUrl = 'http://localhost:8080/api/auth'; 

  constructor(private http: HttpClient) {}

  // Este método conectará con Java en el futuro
  login(credentials: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, credentials);
  }

  setSession(userData: any) {
    localStorage.setItem('usuario', userData.email);
    localStorage.setItem('rol', userData.rol); // Importante para el RBAC que definimos
  }
}