import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PorCapitalComponent } from "./pais/pages/por-capital/por-capital.component";
import { PorPaisComponent } from "./pais/pages/por-pais/por-pais.component";
import { PorRegionComponent } from "./pais/pages/por-region/por-region.component";
import { VerPaisComponent } from "./pais/pages/ver-pais/ver-pais.component";

//Routas son hacia donde redirige en la aplicacion. path es donde aparece la direccion. por ej 
//www.prueba/{path}, y luego en componente se pone el que se va a mostrar con ese path. 
//alfinal se pone el path por default, osea si el usuario escribe mal la direccion. 
//Una vez teniendo las rutas descritas , se agregan en imports y exports
//Finalmente teniendo este modulo listo hay que incorporarlo a la app en app.module.ts
const routes : Routes = [
    {
        path: '',
        component: PorPaisComponent,
        pathMatch: 'full'
    },
    {
        path: 'region',
        component: PorRegionComponent
    },
    {
        path: 'capital',
        component: PorCapitalComponent
    },
    {
        path: 'pais/:id',
        component: VerPaisComponent
    },
    {
        path: '**',
        redirectTo: ''
    }
];

@NgModule({
    imports: [
    RouterModule.forRoot(routes)
    ],

    exports: [
        RouterModule
    ]
})

export class AppRoutingModule{

}