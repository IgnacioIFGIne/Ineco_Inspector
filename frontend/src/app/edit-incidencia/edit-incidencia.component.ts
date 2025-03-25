import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { InspectorService } from '../services/inspector.service';

@Component({
  selector: 'app-edit-incidencia',
  imports: [FormsModule],
  templateUrl: './edit-incidencia.component.html',
  styleUrl: './edit-incidencia.component.css'
})
export class EditIncidenciaComponent {
  
  dialog: any;

  // incidencia: Incidencia = {} as Incidencia

  constructor(public dialogRef: MatDialogRef<EditIncidenciaComponent>, private inspectorService: InspectorService) {}

  editarIncidencia() {
    this.dialog.open(EditIncidenciaComponent, {
      width: '400px',
      disableClose: false
    });
  }

  close(): void {
    this.dialogRef.close();
  }

}
