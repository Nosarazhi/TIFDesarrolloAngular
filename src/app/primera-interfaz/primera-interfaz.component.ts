import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-primera-interfaz',
  templateUrl: './primera-interfaz.component.html',
  styleUrls: ['./primera-interfaz.component.css']
})
export class PrimeraInterfazComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  irSegundaInterfaz() {
    this.router.navigate(['/segunda-interfaz']);
  }

}
