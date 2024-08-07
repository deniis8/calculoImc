import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Importação necessária
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImcCalculoComponent } from './imc/imc-calculo/imc-calculo.component';

@NgModule({
  declarations: [
    AppComponent,
    ImcCalculoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
