import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-ejercicios-dos';
  mensaje = '';

  actualizar(t: any) {
    this.mensaje = t + '(Se actualiza cada 10 segundos)';
  }

  @ViewChild('selector1') selector1: any;
  @ViewChild('selector2') selector2: any;

  fijarSelector1(valor: number) {
    this.selector1.fijar(valor);
  }

  fijarSelector2(valor: number) {
    this.selector2.fijar(valor);
  }
}
