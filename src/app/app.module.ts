import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { BienvenidoComponent } from './components/bienvenido/bienvenido.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AltaRepartidorComponent } from './components/alta-repartidor/alta-repartidor.component';
import { LoadingComponent } from './components/loading/loading.component';
import { TablaPaisesComponent } from './components/tabla-paises/tabla-paises.component';
import { DetalleRepartidorComponent } from './components/detalle-repartidor/detalle-repartidor.component';
import { RepartidoresComponent } from './components/repartidores/repartidores.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MaterialModule } from './material/material.module';
import { RepartidoresPageComponent } from './components/repartidores-page/repartidores-page.component';
import { PaisComponent } from './components/pais/pais.component';
import { PizzasComponent } from './components/pizzas/pizzas.component';
import { AltaComponent } from './components/pizzas/alta/alta.component';
import { BajaComponent } from './components/pizzas/baja/baja.component';
import { MuestraComponent } from './components/pizzas/muestra/muestra.component';
import { ModifcaComponent } from './components/pizzas/modifca/modifca.component';
import { AltaRepartidorModule } from './components/alta-repartidor/alta-repartidor.module';

@NgModule({
  declarations: [
    AppComponent,
    BienvenidoComponent,
    LoginComponent,
    NavbarComponent,
    DetalleRepartidorComponent,
    RepartidoresComponent,
    RepartidoresPageComponent,
    PaisComponent,
    PizzasComponent,
    AltaComponent,
    BajaComponent,
    MuestraComponent,
    ModifcaComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MaterialModule,
    AltaRepartidorModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
