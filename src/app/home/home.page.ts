import { Component } from '@angular/core';
import { 
  IonHeader, IonToolbar, IonTitle, IonContent, 
  IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonNote, IonCard, IonButton, IonList } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonList, IonButton, IonCard, IonNote, IonCardContent, IonCardSubtitle, IonCardTitle, IonCardHeader, IonHeader, IonToolbar, IonTitle, IonContent],
})
export class HomePage {
  constructor() {}

// INTERPOLACIÓN: Valores de variables que se muestran en el template con {{}}
titulo: string = "Tarea de Aprendizaje 1";
descripcion: string = "Aprendiendo Ionic y Angular";

// PROPERTY BINDING: Variables que se enlazan a propiedades de elementos HTML con [propiedad]="variable"
colorBoton: string = "primary";
botonDeshabilitado: boolean = false;

// EVENT BINDING: Variables que se enlazan a eventos de elementos HTML con (evento)="funcion()"
contador: number = 0;

incrementar(): void {
  this.contador++;
  this.colorBoton = this.contador >= 5 ? "danger" : "primary";
}

resetear(): void {
  this.contador = 0;
  this.colorBoton = "primary";
}

// ION-LIST Y LÓGICA


}


