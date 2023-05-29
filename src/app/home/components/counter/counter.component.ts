import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  /*borramos si no utilizamos el CommonModule(el que da directivas como ngIf o ngFor), aunque no importa si importamos muchas veces
  este modulo ya que Angular tiene este objeto ya cargado y si otro modulo lo ocupa utiliza el que tiene en memoria*/
  //imports: [CommonModule],
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent {
  //Es obligatorio pasarle el input en el padre
  @Input({ required: true })counter: number = 0;


}
