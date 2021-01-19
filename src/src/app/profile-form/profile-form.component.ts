import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { FormApiService } from '../services/form-api.service';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.css']
})
export class ProfileFormComponent implements OnInit {

  form: FormGroup;

  comportamentoInvestidor$: Observable<string[]>;
  tempoDeInvestimento$: Observable<string[]>;
  necessidadeDeGasto$: Observable<string[]>;
  titulos$: Observable<string[]>;
  fundos$: Observable<string[]>;
  acoes$: Observable<string[]>;
  aluguel$: Observable<string[]>;

  constructor(private fb: FormBuilder, private formApi: FormApiService) {
    this.form = fb.group({
      comportamentoInvestidor: ['', Validators.required],
      tempoDeInvestimento: ['', Validators.required],
      necessidadeDeGasto: ['', Validators.required],
      titulos: ['', Validators.required],
      fundos: ['', Validators.required],
      acoes: ['', Validators.required],
      aluguel: ['', Validators.required]
    });

    this.comportamentoInvestidor$ = this.formApi.comportamentoInvestidor();
    this.tempoDeInvestimento$ = this.formApi.tempoDeInvestimento();
    this.necessidadeDeGasto$ = this.formApi.necessidadeDeGasto();
    this.titulos$ = this.formApi.titulos();
    this.fundos$ = this.formApi.fundos();
    this.acoes$ = this.formApi.acoes();
    this.aluguel$ = this.formApi.aluguel();

  }

  ngOnInit(): void {
  }

}
