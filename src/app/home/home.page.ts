import { Component } from '@angular/core';
import { 
  IonHeader, IonToolbar, IonTitle, IonContent, 
  IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonNote, IonCard 
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonCard, IonNote, IonCardContent, IonCardSubtitle, IonCardTitle, IonCardHeader, IonHeader, IonToolbar, IonTitle, IonContent],
})
export class HomePage {
  constructor() {}

  // INTERPOLACIÓN: Valores de variables que se muestran en el template con {{}}
  titulo: string = 'Tarea de Aprendizaje 1';
  descripcion: string = 'Aprendiendo Ionic y Angular';

// PROPERTY BINDING: Variables que se enlazan a propiedades de elementos HTML con [propiedad]="variable"

// EVENT BINDING: Variables que se enlazan a eventos de elementos HTML con (evento)="funcion()"

// ION-LIST Y LÓGICA


}


