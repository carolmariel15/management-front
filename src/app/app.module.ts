import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SharedModule } from './shared/shared.module';
import { InicioModule } from './pages/inicio/inicio.module';
import { BenchMarkModule } from './pages/bench-mark/bench-mark.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    InicioModule,
    BenchMarkModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
