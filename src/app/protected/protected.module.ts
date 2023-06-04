import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './pages/main/main.component';
import { PacienteComponent } from './pages/paciente/paciente.component';
import { PacienteListComponent } from './pages/paciente-list/paciente-list.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { ProtectedRoutingModule } from './protected-routing.module';
import { ComponentsModule } from '../components/components.module';



@NgModule({
  declarations: [
    MainComponent,
    PacienteComponent,
    PacienteListComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    ProtectedRoutingModule,
    ComponentsModule
  ]
})
export class ProtectedModule { }
