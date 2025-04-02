import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Incidencia } from '../model/incidencia';
import { InspectorService } from '../services/inspector.service';
import { FormsModule, NgModel } from '@angular/forms';


@Component({
  selector: 'app-registro-incidencia',
  standalone: true,
  imports: [FormsModule], //impor tcommonModule for basic angular direcives, as ngIf ngFor...
  templateUrl: './registro-incidencia.component.html',
  styleUrl: './registro-incidencia.component.css'
})
export class RegistroIncidenciaComponent {

  incidencia: Incidencia = new Incidencia //instancia sin pasar por el constructor


  constructor(public dialogRef: MatDialogRef<RegistroIncidenciaComponent>, private inspectorService: InspectorService) {}


  ngOnInit(): void {
    console.log("ngOnInit ejecutado"); // Verifica que se ejecuta
    this.obtenerUbicacion();

  }

  obtenerUbicacion() {
    if (!navigator.geolocation) {
      console.error("Geolocalización no está soportada en este navegador.");
      return;
    }else{
      console.log("Geolocalización disponible en este navegador.");
    }
  
    console.log("Intentando obtener ubicación...");
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.incidencia.ubicacion = `${position.coords.latitude}, ${position.coords.longitude}`;
        console.log("Ubicación obtenida:", this.incidencia.ubicacion);
      },
      (error) => {
        console.error("Error obteniendo ubicación:", error);
        switch (error.code) {
          case error.PERMISSION_DENIED:
            console.error("El usuario denegó el permiso de geolocalización.");
            break;
          case error.POSITION_UNAVAILABLE:
            console.error("Información de ubicación no disponible.");
            break;
          case error.TIMEOUT:
            console.error("La solicitud de geolocalización expiró.");
            break;
          default:
            console.error("Error desconocido al obtener ubicación.");
        }
      },
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 } // Configuración avanzada
    );
  }


  registrarIncidencia(): void {

    console.log('Datos de la incidencia:', this.incidencia.elemento);
    console.log("OK", "ubicacion", this.incidencia.ubicacion);

    this.inspectorService.registrarIncidencia(this.incidencia).subscribe(
      res => (res =="ok")?this.inciOk():alert("error al registrar la incidencia"))
  }

  inciOk():void{
    alert("incidencia registrada con exito");
    //todo: reload
    this.dialogRef.close();
  }

  close(): void {
    this.dialogRef.close();
  }


}
