import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TradicionalModule } from './page-tradicional/pages/tradicional/tradicional.module.ts/tradicional.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TradicionalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
