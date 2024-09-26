import { NgModule } from '@angular/core';
import { AppComponent } from './app/app.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app/app.routes'; // Provjeri da je ovo ispravno
import { ContactComponent } from './app/contact/contact.component';
import { HomeComponent } from './app/home/home.component';
import { ServicesComponent } from './app/services/services.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServicesComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
