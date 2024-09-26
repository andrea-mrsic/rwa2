import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';  // Uvozi rute iz app.routes.ts

@NgModule({
  imports: [RouterModule.forRoot(routes)],  // Konfiguracija routera s rutama
  exports: [RouterModule]  // Izvozi RouterModule kako bi bio dostupan u cijeloj aplikaciji
})
export class AppRoutingModule { }



