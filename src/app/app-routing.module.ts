import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  //Componente tradicional
  {
    path: 'tradicional',
    loadChildren: () =>
      import(
        './page-tradicional/pages/tradicional/tradicional.module.ts/tradicional.module'
      ).then((m) => m.TradicionalModule),
  },
  //Lazyloading de un standalone component
  {
    path: 'alone',
    loadComponent: () =>
      import('./home/pages/home-page/home-page.component').then(
        (m) => m.HomePageComponent
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
