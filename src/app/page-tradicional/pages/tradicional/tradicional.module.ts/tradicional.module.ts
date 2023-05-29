import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TradicionalComponent } from '../tradicional.component';
import { CounterComponent } from 'src/app/home/components/counter/counter.component';


@NgModule({
  declarations: [TradicionalComponent],
  imports: [
    CommonModule,CounterComponent
  ]
})
export class TradicionalModule { }
