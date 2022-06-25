import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidoComponent } from './components/bienvenido/bienvenido.component';
import { LoginComponent } from './components/login/login.component';
import { AltaRepartidorComponent } from './components/alta-repartidor/alta-repartidor.component';
import { LoginGuard } from './guards/login.guard';
import { RepartidoresPageComponent } from './components/repartidores-page/repartidores-page.component';
import { AdminGuardGuard } from './guards/admin-guard.guard';
import { PizzasComponent } from './components/pizzas/pizzas.component';


const routes: Routes = [
  { path: '', component: BienvenidoComponent },
  { path: 'login', component: LoginComponent },
  { path: 'AltaRapartidor', component: AltaRepartidorComponent, canActivate: [LoginGuard], loadChildren: () => import('../app/components/alta-repartidor/alta-repartidor.module').then(m => m.AltaRepartidorModule) },
  { path: 'Repartidores', component: RepartidoresPageComponent, canActivate: [LoginGuard] },
  { path: 'Pizzas', component: PizzasComponent, canActivate: [AdminGuardGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }