import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { Incidencia } from '../model/incidencia';
import { InspectorService } from '../services/inspector.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalles-incidencia',
  imports: [NgFor, NgIf],
  templateUrl: './detalles-incidencia.component.html',
  styleUrl: './detalles-incidencia.component.css'
})
export class DetallesIncidenciaComponent {

  id_incidencia: number = -1
  incidencia: Incidencia = {} as Incidencia

  constructor(private servicioInspector: InspectorService, private activatedRoute: ActivatedRoute) {}

  //obtiene la incidencia de la base de datos a apartir de una id
  ngOnInit(): void {
    this.id_incidencia = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.servicioInspector.getIncidencia_id(this.id_incidencia).subscribe(incident => this.incidencia = incident);
  }

}
