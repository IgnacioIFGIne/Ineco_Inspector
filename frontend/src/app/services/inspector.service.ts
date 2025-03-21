import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Incidencia } from '../model/incidencia';

@Injectable({providedIn: 'root'})
export class InspectorService {

    //ruta rest
    ruta_rest_services = '/backend/';

    constructor(private http: HttpClient) {}

    
    //obtiene las incidencias en formato observable del back
    getIncidencias(): Observable<Incidencia[]> {
        return this.http.get<Incidencia[]>(this.ruta_rest_services + 'rest/obtener_incidencias');
    }

    //comunica con el backend para registrar una incidencia
    registrarIncidencia(incidencia: Incidencia): Observable<String> {
        return this.http.post<string>(this.ruta_rest_services + 'rest/registrar_incidencia', incidencia);
    }
    



}
