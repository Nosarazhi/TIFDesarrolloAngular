import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MensajeService } from '../mensaje.service';

@Component({
  selector: 'app-segunda-interfaz',
  templateUrl: './segunda-interfaz.component.html',
  styleUrls: ['./segunda-interfaz.component.css']
})
export class SegundaInterfazComponent implements OnInit {
  mensaje: string = '';

  constructor(private mensajeService: MensajeService, private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
    this.mensajeService.obtenerMensaje().subscribe(data => {
      this.mensaje = data.mensaje;
    });
  }
  
  volverPrimeraInterfaz() {
    this.router.navigate(['/primera-interfaz']);
  }

}

