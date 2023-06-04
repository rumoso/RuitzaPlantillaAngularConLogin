import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from "./pages/main/main.component";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { PacienteComponent } from "./pages/paciente/paciente.component";
import { PacienteListComponent } from "./pages/paciente-list/paciente-list.component";


const routes: Routes = [
    {
      path: '',
      component: MainComponent,
      children: [
        {
          path: 'dashboard',
          component: DashboardComponent
        },
        {
            path: 'paciente',
            component: PacienteComponent
        },
        {
            path: 'pacienteList',
            component: PacienteListComponent
        },
        {
          path: '**',
          redirectTo: 'dashboard'
        }
      ]
    }
  ]

@NgModule({
    imports: [
        RouterModule.forChild( routes )
    ],
    exports: [
        RouterModule
    ]
})
export class ProtectedRoutingModule {}