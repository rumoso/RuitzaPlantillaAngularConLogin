import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicesGService } from 'src/app/servicesG/servicesG.service';

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.css']
})
export class PacienteComponent {
  
  title: string = 'Paciente';
  bShowSpinner: boolean = false;
  id: number = 0;

  catForm: FormGroup = this.fb.group({
    idPaciente: 0,
    name: ['',[ Validators.required ]],
    fechaNacimiento: ['']
  });

  constructor(
    private fb: FormBuilder
    , private router: Router
    , private activatedRoute: ActivatedRoute

    , private servicesGServ: ServicesGService
  ) { }

  changeRoute( route: string ): void {
    this.servicesGServ.changeRoute( route );
  }

  fn_save() {
  }

}
