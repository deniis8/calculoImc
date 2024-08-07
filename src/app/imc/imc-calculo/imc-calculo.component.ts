import { Component } from '@angular/core';

@Component({
  selector: 'app-imc-calculo',
  templateUrl: './imc-calculo.component.html',
  styleUrl: './imc-calculo.component.css'
})
export class ImcCalculoComponent {
  imc: number | null = null;
  imcMessage: string = '';

  calculateIMC(form: any): void {
    const weight = form.value.weight;
    const height = form.value.height / 100;

    this.imc = weight / (height * height);
    this.setIMCMessage();
  }

  setIMCMessage(): void {
    if (this.imc) {
      if (this.imc < 18.5) {
        this.imcMessage = 'Magreza';
      } else if (this.imc >= 18.5 && this.imc < 24.9) {
        this.imcMessage = 'Normal';
      } else if (this.imc >= 24.9 && this.imc < 30) {
        this.imcMessage = 'Sobrepeso';
      } else {
        this.imcMessage = 'Obesidade';
      }
    }
  }}