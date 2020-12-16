import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Filme } from '../interfaces/filme';
import { Finalistas } from '../interfaces/finalistas';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FilmesService {
  basePath: string = environment.apiFilmes.basePath;

  constructor(private httpClient: HttpClient) { }

  obterFilmes(): Observable<Filme[]> {
    return this.httpClient.get<Filme[]>(this.basePath + 'competicao/filmes');
  }

  enviarFilmes(idFilmes: any): Observable<Finalistas> {
    console.log("enviando POST");
    return this.httpClient.post<Finalistas>(this.basePath + 'competicao/filmes', idFilmes);
  }
}
