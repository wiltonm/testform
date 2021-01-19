import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class FormApiService {

  constructor(private http: HttpClient) { }
  acoes(): Observable<{ result: string[] }> {
    return this.http.get<{ result: string[] }>('https://api.npoint.io/fc154c36070cf7fd0a96/value/', { headers: new HttpHeaders().set('Accept', 'application/json'), responseType: 'json' });
  }
  aluguel(): Observable<string[]> {
    return this.http.get<string[]>('https://api.npoint.io/e76d4b1ef8e4b6c0cbb3/value/', { headers: new HttpHeaders().set('Accept', 'application/json'), responseType: 'json' })
  }
  comportamentoInvestidor(): Observable<string[]> {
    return this.http.get<string[]>('https://api.npoint.io/7eb7acd67682b19240e0/value/', { headers: new HttpHeaders().set('Accept', 'application/json'), responseType: 'json' })
  }
  fundos(): Observable<string[]> {
    return this.http.get<string[]>('https://api.npoint.io/a7f6f569aabb653e064d/value/', { headers: new HttpHeaders().set('Accept', 'application/json'), responseType: 'json' });
  }
  necessidadeDeGasto(): Observable<string[]> {
    return this.http.get<string[]>('https://api.npoint.io/2fda4272d68987086114/value/', { headers: new HttpHeaders().set('Accept', 'application/json'), responseType: 'json' });
  }
  tempoDeInvestimento(): Observable<string[]> {
    return this.http.get<string[]>('https://api.npoint.io/c46bac68532918df94e0/value/', { headers: new HttpHeaders().set('Accept', 'application/json'), responseType: 'json' });
  }
  titulos(): Observable<string[]> {
    return this.http.get<string[]>('https://api.npoint.io/0de6b7cccc8f40bad25d/value/', { headers: new HttpHeaders().set('Accept', 'application/json'), responseType: 'json' });
  }
}
