# StandAlone Components

## ¿Qué son?
Un **standalone component** en Angular es un tipo de componente que no forma parte de ningún módulo de Angular. 

## ¿Para qué sirven?

Los standalone components proporcionan una forma *simplificada* de construir aplicaciones Angular y son una forma de construir piezas de funcionalidad *reutilizables* y *modulares* que se pueden compartir e integrar fácilmente en diferentes partes de una aplicación Angular. Están compuestos por una plantilla, una clase y un decorador. Los componentes autónomos, las directivas autónomas y los pipes autónomos tienen como objetivo simplificar la experiencia de desarrollo reduciendo la necesidad de los módulos.

## Requisitos
Los standalone componets se introdujeron en la version 14 de Angular pero la documentación los define como completamente estables apartir de *Angular v16*

## ¿Cómo usarlos?

Para generar un standalone component debemos:
- Ejecutar en el Angular CLI `ng g component <nombre-componente> --standalone`
- Revisar que `standalone: true`

## ¿Cómo cargarlos con lazy loading?

Al igual que como un component normal de angular los standalone components se pueden cargar de manera perezosa para un mejor rendimiento y performance de la aplicación. Pero en lugar de seleccionar un módulo para seleccionamos el mismo componente y utilizamos `LoadComponent` en lugar de `LoadChildren`:

``` typescript
const routes: Routes = [
  {
    path: 'alone',
    loadComponent: () =>
      import('./home/pages/home-page/home-page.component').then(
        (m) => m.HomePageComponent
      ),
  },
];
```

## ¿Cómo conectarlos entre sí?

Para poder utilizar un standalone component ya que es su propio módulo hay que importarlo en el módulo que queremos utilizarlo. De la misma forma si queremos utilizar un alone component u otro modulo dentro de otro alone component debemos importarlo en la parte de `imports` de la siguiente forma:

``` typescript
@Component({
  standalone: true,
  imports: [CommonModule,CounterComponent],
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
```

## ¿Cómo integrarlos en módulos y componentes tradicionales? 
Para poder utilizar los standalone components en un componente normal debemos *importarlo* en el módulo en el que esta declarado ese componente

``` typescript
import { CounterComponent } from 'src/app/home/components/counter/counter.component';

@NgModule({
  declarations: [TradicionalComponent],
  imports: [
    CommonModule,CounterComponent
  ]
})
export class TradicionalModule { }

```
