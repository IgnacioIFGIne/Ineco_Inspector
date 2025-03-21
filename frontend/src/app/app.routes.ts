import { Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { MapComponent } from './map/map.component';


export const routes: Routes = [
    {path: '', component: MainComponent}, 
    {path: 'header', component: HeaderComponent},
    {path: 'footer', component: FooterComponent},
    {path: 'map', component: MapComponent}
    // {path: 'listado', component: ListadoComponent}, para el listado de componente
    // {path: 'detalles/:id', component: DetallesComponent}, para el detalle del componente 
];
