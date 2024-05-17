import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimeraInterfazComponent } from './primera-interfaz/primera-interfaz.component';
import { SegundaInterfazComponent } from './segunda-interfaz/segunda-interfaz.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimeraInterfazComponent,
    SegundaInterfazComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
