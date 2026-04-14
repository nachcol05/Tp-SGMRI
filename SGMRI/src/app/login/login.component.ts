import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service'; // Importamos el servicio

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = ''; // Para mostrar errores en el HTML

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    const credentials = { email: this.email, password: this.password };

    // Por ahora simulamos la respuesta para terminar el Sprint 1 [cite: 59]
    if (this.email === 'admin@test.com' && this.password === '123456') {
      const mockUser = { email: this.email, rol: 'Administrador' };
      this.authService.setSession(mockUser);
      this.router.navigate(['/home']);
    } else {
      this.errorMessage = 'Credenciales incorrectas. Intentá de nuevo.';
    }
  }
}
