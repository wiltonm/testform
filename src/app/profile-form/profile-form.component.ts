import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormApiService } from '../services/form-api.service';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.css']
})
export class ProfileFormComponent implements OnInit {
  form: FormGroup;
  constructor(private fb: FormBuilder, public formApi: FormApiService) {
    this.form = fb.group({
      comportamentoInvestidor: [''],
      tempoDeInvestimento: [''],
      necessidadeDeGasto: [''],
      titulos: [''],
      fundos: [''],
      acoes: [''],
      aluguel: ['']
    });
  }

  ngOnInit(): void {
  }

}
